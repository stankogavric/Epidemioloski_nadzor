import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    //public patientsUrl = "http://localhost:8080/api/patient";
    public patientsUrl = "/api/patient";

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Patient[]>(this.patientsUrl);
    }

    getOne(id: String) { 
        return this.http.get<Patient>(this.patientsUrl + `/${id}`);     
    }

    delete(id: String) {
        return this.http.delete(this.patientsUrl + `/${id}`);
    }

    add(patient: Patient) {
        return this.http.post(this.patientsUrl, patient);
    }

    update(id: string, patient: Patient) {
        return this.http.put(this.patientsUrl + `/${id}`, patient)
    }

    // searchPatients(queryParams: {}) {
    //     return this.http.get<Patient[]>(this.patientsUrl + `/search/`, {
    //         params: queryParams
    //     });
    // }

}
