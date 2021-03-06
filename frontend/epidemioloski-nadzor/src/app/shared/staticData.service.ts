
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StaticDataService {

    //public devProdUrl = "";
    public devProdUrl = "http://localhost:8080";

    public url = this.devProdUrl + "/";

    constructor(private http: HttpClient) {
    }

    getRiskFactors() {
        return ["Trudnoća trimestar", "Postporođajni period", "Kardiovaskularna bolest", "Imunodeficijencija", "Dijabetes", "Bolest bubrega", "Bolest jetre", "Bolest pluća", "Hronična neurološka bolest", "Maligna bolest"]
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
