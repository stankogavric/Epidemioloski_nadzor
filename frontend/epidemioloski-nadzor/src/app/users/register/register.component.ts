import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormErrorService } from '../../shared/formError.service';
import { UserService } from '../user.service';
import { User } from '../user.model';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  hide = true;
  public form: FormGroup;
  public user: User = new User();

  roles: Role[] = [
    { value: 'student', viewValue: 'Student' },
    { value: 'lekar', viewValue: 'Lekar' },
    { value: 'mup', viewValue: 'MUP' },
    { value: 'krizniStab', viewValue: 'Krizni štab' }
  ];

  constructor(private userService: UserService, public readonly formError: FormErrorService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', { validators: [Validators.required] }],
      lastName: ['', { validators: [Validators.required] }],
      role: ['', { validators: [Validators.required] }],
      phone: ['', { validators: [Validators.required] }],
      pin: ['', { validators: [Validators.required] }]
    });
  }

  onRegister() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.user.personalInfo.firstname = this.form.value.firstName;
    this.user.personalInfo.lastname = this.form.value.lastName;
    this.user.personalInfo.phone = this.form.value.phone;
    this.user.pin = this.form.value.pin;
    this.user.role = this.form.value.role;

    this.userService.add(this.user);
  }

}
