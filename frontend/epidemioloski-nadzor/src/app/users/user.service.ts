import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { StaticDataService } from '../shared/staticData.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userUrl = this.staticDataService.devProdUrl + "/api/user";

  constructor(private http: HttpClient, private staticDataService: StaticDataService) {
  }

  getAll() {
    return this.http.get<User[]>(this.userUrl);
  }

  getOne(id: String) {
    return this.http.get<User>(this.userUrl + `/${id}`);
  }

  getOneByUsername(username: String) {
    return this.http.get<User>(this.userUrl + `/username/${username}`);
  }

  delete(id: String) {
    return this.http.delete(this.userUrl + `/${id}`);
  }

  add(user: User) {
    return this.http.post(this.userUrl + '/register', user);
  }

  update(id: string, user: User) {
    return this.http.put(this.userUrl + `/${id}`, user)
  }

}
