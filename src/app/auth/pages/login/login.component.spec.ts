import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { StoreModule } from "@ngrx/store";

describe('LoginComponent', () => {
    let loginComponent: LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule, StoreModule],
        });
        loginComponent = TestBed.createComponent(LoginComponent).componentInstance;

    });

    it('should create login component', () => {
        expect(loginComponent).toBeTruthy();
    });

    it('Debe marcar todos los campos del form como "touched" si esto es invalido ', () => {
        loginComponent.loginForm.patchValue({
            email: 'jwd{nw{lkinw{jldw{c',
            password: '',
        });
        loginComponent.login();

        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue();
    });

    it('Debe llamar al metodo login del AuthService si el formulario es valid', () => {
        loginComponent.loginForm.patchValue({
            email: 'wendysgrow23@gmail.com',
            password: '123456'
        });

        const spyOnAuthServiceLogin = spyOn(
            (loginComponent as any).AuthService,
            'login'
        );


        loginComponent.login();

        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    });
});

