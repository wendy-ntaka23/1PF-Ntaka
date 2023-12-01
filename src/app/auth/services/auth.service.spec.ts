import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing"
import { User } from "src/app/dashboard/pages/users/models";
import { environment } from "src/environments/environments.local";

import { MockProvider } from "ng-mocks";
import { Router } from "@angular/router";

fdescribe ('AuthService', () => {
    let authService: AuthService;
    let httpController: HttpTestingController;

    beforeEach(() =>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule , RouterTestingModule],
            providers: [MockProvider(Router)]
        });

        authService = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it ('AuthService should be defined', () =>{
        expect (authService). toBeTruthy();
    });

    it('Debe establecer un usuario autenticado al hacer login()', () => {
        const USER_MOCK: User = {
            id:1,
            email:'fake@email.com',
            lastName:'fakeLastName',
            name: 'fakeName',
            role:'ADMIN',
            token:'fijñsdrkigwhñrkg',
            password:'123456',
            curso:'lala',
            clase: 'lala'

        };

        authService.login({
            email: USER_MOCK.email,
            password:USER_MOCK.password,
        });

        httpController.expectOne({
            method:'GET',
            url :`${environment.baseUrl}/users?email=${USER_MOCK.email}&password=${USER_MOCK.password}`
        }).flush([USER_MOCK]);




        authService.authUser$.subscribe({
            next: (authUser) => {
                console.log(authUser);
                expect(authUser).toBeTruthy();

                expect(authUser).toEqual(USER_MOCK);
            },
        });

    });
});