import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { FormErrorService } from '../../shared/formError.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, public readonly formError: FormErrorService) { }

  message: string = "";

  ngOnInit() {
  }

  onLogin(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.username, form.value.password).subscribe(
      {
        next: response => {
          if(response.token){
            localStorage.setItem('token', response.token);
            this.message = "";
          }else{
            this.message = "Incorect username or password";
          }
        },
        error: () => {
          this.message = "Incorect username or password";
        }
      }
    );
  }

}
