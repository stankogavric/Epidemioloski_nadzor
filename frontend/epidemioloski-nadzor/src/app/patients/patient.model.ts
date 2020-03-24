import { Contact } from '../users/contact.model';
import { Measure } from './measure.model';
import { PersonalInfo } from '../users/personal-info.model';
import { Status } from './status.model';

export class Patient {
    id:number;
    clinicBranch:string;
    citizenship:string;
    countryOfImport:string;
    contacts:Contact[];
    measures:Measure[];
    personalInfo:PersonalInfo;
    statuses:Status[];

    constructor(){
        this.contacts = [];
    }
}