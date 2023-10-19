import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
 
  userForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group ({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      lastName: ['',Validators.required],
      curso:['',Validators.required],
      clase: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
    public get nameControl() {
      return this.userForm.get ('name') ;
    }
}
