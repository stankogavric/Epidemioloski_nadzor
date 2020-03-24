import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    public patientsUrl = "http://localhost:8080/patient";

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Patient[]>(this.patientsUrl);
    }

<<<<<<< HEAD
    getOne(jmbg: String) {
        return this.http.get<Patient>(this.patientsUrl + `/${jmbg}`);
=======
    getOne(phone: String) {
        return this.http.get<Patient>(this.patientsUrl + `/${phone}`);
>>>>>>> 1eb7c0879ac2cc1994ecf889b25e45f3a6a4f030
    }

    delete(jmbg: String) {
        return this.http.delete(this.patientsUrl + `/${jmbg}`);
    }

    add(patient: Patient) {
        return this.http.post(this.patientsUrl + '/register', patient);
    }

    update(jmbg: string, patient: Patient) {
        return this.http.put(this.patientsUrl + `/${jmbg}`, patient)
    }

    // searchPatients(queryParams: {}) {
    //     return this.http.get<Patient[]>(this.patientsUrl + `/search/`, {
    //         params: queryParams
    //     });
    // }

}
