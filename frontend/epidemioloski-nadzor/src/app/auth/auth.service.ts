import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import decode from 'jwt-decode';
import { StaticDataService } from '../shared/staticData.service';

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private staticDataService: StaticDataService) { }

  login(phone: string, pin: string) {
    return this.http.post<{ token: string }>(this.staticDataService.devProdUrl + "/api/login", { pin: pin, personalInfo: { phone: phone } });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      return decode(token).sub;
    }
    return null;
  }

  getCurrentRole() {
    const token = localStorage.getItem('token');
    if (token) {
      return decode(token).role[0].authority;
    }
    return null;
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

}