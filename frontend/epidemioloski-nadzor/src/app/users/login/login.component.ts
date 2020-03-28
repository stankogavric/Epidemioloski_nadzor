import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { FormErrorService } from '../../shared/formError.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;

  hide = true;

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, public readonly formError: FormErrorService, private router: Router) { }

  message: string = "";

  ngOnInit() {
    this.loginForm = this.fb.group({
      phoneInput: ['', { validators: [Validators.required] }],
      pinInput: ['', { validators: [Validators.required] }]
    })
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.loginForm.value.phoneInput, this.loginForm.value.pinInput).subscribe(
      response => {
        this.loading = false;
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.message = "";
          if (this.authService.getCurrentRole() == "admin") {
            this.router.navigate(['/register']);
          } else {
            this.router.navigate(['/patients']);
          }
        } else {
          this.message = "Pogrešan telefon i/ili pin";
        }
      },
      () => {
        this.loading = false;
        this.message = "Pogrešan telefon i/ili pin";
      });
  }
}
