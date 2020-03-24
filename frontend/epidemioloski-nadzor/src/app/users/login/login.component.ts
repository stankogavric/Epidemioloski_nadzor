import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { FormErrorService } from '../../shared/formError.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, public readonly formError: FormErrorService, private router: Router) { }

  message: string = "";

  ngOnInit() {
  }

  onLogin(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.username, form.value.password).subscribe(
      response => {
          if(response.token){
            localStorage.setItem('token', response.token);
            this.message = "";
            this.router.navigate(['/patients']);
          }else{
            this.message = "Pogrešan telefon ili pin";
          }
      },
      () => {
          this.message = "Pogrešan telefon ili pin";
      });
    }
}
