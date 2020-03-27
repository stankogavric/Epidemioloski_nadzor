import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormErrorService } from '../../shared/formError.service';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

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

  loading = false;

  public form: FormGroup;
  public user: User = new User();
  message: string = "";
  hide = true;

  roles: Role[] = [
    { value: 'student', viewValue: 'Student' },
    { value: 'lekar', viewValue: 'Lekar' },
    { value: 'mup', viewValue: 'MUP' },
    { value: 'krizniStab', viewValue: 'Krizni štab' }
  ];

  constructor(private userService: UserService, public readonly formError: FormErrorService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', { validators: [Validators.required, Validators.pattern('[^0-9]{3,}')] }],
      lastName: ['', { validators: [Validators.required, Validators.pattern('[^0-9]{3,}')] }],
      role: ['', { validators: [Validators.required] }],
      phone: ['', { validators: [Validators.required, Validators.pattern('[0-9+ ]{3,}')] }],
      pin: ['', { validators: [Validators.required] }]
    });
  }

  onRegister() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.user.personalInfo.firstname = this.form.value.firstName;
    this.user.personalInfo.lastname = this.form.value.lastName;
    this.user.personalInfo.phone = this.form.value.phone;
    this.user.pin = this.form.value.pin;
    this.user.role = this.form.value.role;

    this.userService.add(this.user).subscribe(
      () => {
        this.message = "Uspešno dodat korisnik " + this.user.personalInfo.firstname;
        this.form.reset();
        this.loading = false;
      },
      (e) => {
        if (e.status == 409) {
          this.message = "Korisnik sa tim telefonom je već registrovan";
        }
        this.loading = false;
      });
  }

}
