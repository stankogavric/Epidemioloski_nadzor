import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userUrl = "http://localhost:8080/user";

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
    const postData = new FormData();
    postData.append("data", JSON.stringify(user));
    return this.http.post(this.userUrl+'/register', postData);
  }

  update(username:string, user:User) {
    const postData = new FormData();
    postData.append("data", JSON.stringify(user));
    return this.http.put(this.userUrl+`/${username}`, postData)
  }

}
