import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import decode from 'jwt-decode';

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}



  login(phone: string, pin: string) {
    return this.http.post<{token: string}>("/api/login", {pin: pin, personalInfo:{phone: phone}});
  }
  
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getCurrentUser(){
    const token = localStorage.getItem('token');
    if(token){
      return decode(token).sub;
    }
    return null;
  }

  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

}