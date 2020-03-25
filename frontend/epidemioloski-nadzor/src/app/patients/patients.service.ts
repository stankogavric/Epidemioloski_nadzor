import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    // public patientsUrl = "http://88.99.225.22:8080/api/patient";
    public patientsUrl = "http://localhost:8080/api/patient";

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Patient[]>(this.patientsUrl);
    }

    getOne(jmbg: String) { 
        return this.http.get<Patient>(this.patientsUrl + `/${jmbg}`);     
    }

    delete(jmbg: String) {
        return this.http.delete(this.patientsUrl + `/${jmbg}`);
    }

    add(patient: Patient) {
        return this.http.post(this.patientsUrl, patient);
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
