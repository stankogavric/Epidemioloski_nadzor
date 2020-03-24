import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormErrorService } from '../../shared/formError.service';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  public form: FormGroup;
  public user: User = new User();

  constructor(private userService: UserService, public readonly formError: FormErrorService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', {validators: [Validators.required]}],
      lastName: ['', {validators: [Validators.required]}],
      phone: ['', {validators: [Validators.required]}],
      pin: ['', {validators: [Validators.required]}]
    });
  }

  onRegister() {
    this.user.personalInfo.firstname = this.form.value.firstName;
    this.user.personalInfo.firstname = this.form.value.lastName;
    this.user.personalInfo.phone = this.form.value.phone;
    this.user.pin = this.form.value.pin;

    this.userService.add(this.user);
  }

}
