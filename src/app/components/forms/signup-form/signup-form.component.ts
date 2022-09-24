import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  emailFormControl = new FormControl('');
  firstNameFormControl = new FormControl('');
  lastNameFormControl = new FormControl('');
  passwordFormControl = new FormControl('');
  confirmPasswordFormControl = new FormControl('');

  signupFormGroup = new FormGroup({
    email: this.emailFormControl,
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl,
  });

  onSignupFormSubmit = () => {
    console.log(this.signupFormGroup.value);
  };

  constructor() {}

  ngOnInit(): void {}
}
