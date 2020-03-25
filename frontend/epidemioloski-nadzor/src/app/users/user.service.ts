import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userUrl = "http://localhost:8080/api/user";
  // public userUrl = "/api/user";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.userUrl);
  }

  getOne(id: String) {
    return this.http.get<User>(this.userUrl+`/${id}`);
  }

  getOneByUsername(username: String) {
    return this.http.get<User>(this.userUrl+`/username/${username}`);
  }

  delete(id: String) {
    return this.http.delete(this.userUrl+`/${id}`);
  }

  add(user:User) {
    return this.http.post(this.userUrl+'/register', user);
  }

  update(phone:string, user:User) {
    return this.http.put(this.userUrl+`/${phone}`, user)
  }

}
