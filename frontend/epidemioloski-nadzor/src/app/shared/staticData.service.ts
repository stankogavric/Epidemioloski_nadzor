
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StaticDataService {
    
    public url = "http://localhost:8080/api/user";

    constructor(private http: HttpClient){}

    getCountrie() {
        return this.http.get<[]>(this.url+`/countries.json`);
    }
    
    getCities() {
        return this.http.get<[]>(this.url+`/cities.json`);
    }

}
