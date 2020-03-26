
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StaticDataService {

    public url = "http://localhost:8080/";

    constructor(private http: HttpClient) {
    }

    getSymptoms() {
        return ['Povišena temperatura', 'Otežano disanje', 'Bol u mišićima', 'Bol u grudima', 'Bol u trbuhu', 'Bol u zglobovima', "Opšta slabost", "Proliv", "Mučnina", "Kašalj", "Upala grla", "Glavobolja", "Curenje nosa", "Uznemirenost", "Faringealni eskudat", "Koma", "Abnormalni nalaz radiografije pluća", "Konjuktivitis", "Konvulzija", "Drugi"];
    }

    getCities() {
        return this.http.get(this.url + "cities.json");
    }

    getCountries() {
        return this.http.get(this.url + "countries.json");
    }

}
