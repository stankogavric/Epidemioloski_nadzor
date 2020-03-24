import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { FormErrorService } from '../../shared/formError.service';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public user: User;

  constructor(private userervice: UserService, private authService: AuthService, public readonly formError: FormErrorService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      lastName: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      username: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}],
      password: ['', {validators: [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]}]
    });
  }

  onRegister() {
    

    console.log(this.form.value);
    // this.userervice.add(this.user)
  }

}
