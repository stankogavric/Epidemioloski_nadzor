import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    public patientsUrl = "http://localhost:8080/patients";

    constructor(private http: HttpClient) {
    }

    getAll() {
        return [
            {
                id: 1,
                clinicBranch: "string",
                citizenship: "string",
                countryOfImport: "string",
                contacts: [],
                measures: [],
                personalInfo: {
                    id:1,
                    phone:"67867",
                    firstname:"string",
                    lastname:"string",
                    jmbg:"664736",
                    email:"string",
                    lbo:"string",
                    address:{
                        id:1,
                        city:"string",
                        street:"string",
                        streetNum:"string"
                    }
                },
                statuses: []
            },
            {
                id: 2,
                clinicBranch: "string",
                citizenship: "string",
                countryOfImport: "string",
                contacts: [],
                measures: [],
                personalInfo: {
                    id:1,
                    phone:"0123",
                    firstname:"firstname",
                    lastname:"lastname",
                    jmbg:"000111",
                    email:"string",
                    lbo:"string",
                    address:{
                        id:1,
                        city:"string",
                        street:"string",
                        streetNum:"string"
                    }
                },
                statuses: []
            }
        ]
        //return this.http.get<Patient[]>(this.patientsUrl);
    }

    getOne(phone: String) {
        return this.http.get<Patient>(this.patientsUrl + `/${phone}`);
    }
    /*
      getOneByUsername(username: String) {
        return this.http.get<Patient>(this.patientsUrl+`/username/${username}`);
      }
    */
    delete(id: String) {
        return this.http.delete(this.patientsUrl + `/${id}`);
    }

    add(patient: Patient) {
        return this.http.post(this.patientsUrl + '/register', patient);
    }

    update(id: number, patient: Patient) {
        return this.http.put(this.patientsUrl + `/${id}`, patient)
    }

    searchPatients(queryParams: {}) {
        return this.http.get<Patient[]>(this.patientsUrl + `/search/`, {
            params: queryParams
        });
    }

}
