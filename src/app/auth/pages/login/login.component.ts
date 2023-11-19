import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailControl= new FormControl('', [Validators.required , Validators.email]);
  passwordControl = new FormControl('' , [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  })
  constructor (private AuthService: AuthService, private router: Router) {}

  login () : void {

    if  (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.AuthService.login(this.loginForm.getRawValue());
        }
      }
    }