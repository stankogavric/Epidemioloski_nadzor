import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';
import { Location } from './location.model';
import { StaticDataService } from '../shared/staticData.service';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    public patientsUrl = this.staticDataService.devProdUrl + "/api/patient";

    constructor(private http: HttpClient, private staticDataService: StaticDataService) {
    }

    getAll(pageIndex, pageSize) {
        return this.http.get<{ content: Patient[] }>(this.patientsUrl + `/${pageIndex}` + `/${pageSize}`);
    }

    getAllByQuery(pageIndex, pageSize, query) {
        return this.http.get<{ content: Patient[] }>(this.patientsUrl + `/${pageIndex}` + `/${pageSize}` + `/${query}`);
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

    nearMe(location: Location) {
        return this.http.put(this.patientsUrl + `/nearMe/${1000}`, location)
    }

    getPatientCoordinatesFromGoogle(street: string, streetNumb: string, city: string) {
        const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=ZW8tbW10wAVgeA0cmH6tLkSdUgSAgvhLCwKm6o5CvrA&searchtext=${streetNumb || ''}+${street} ${city || ''} Serbia`
        return this.http.get(encodeURI(url));
    }
    // searchPatients(queryParams: {}) {
    //     return this.http.get<Patient[]>(this.patientsUrl + `/search/`, {
    //         params: queryParams
    //     });
    // }

}
