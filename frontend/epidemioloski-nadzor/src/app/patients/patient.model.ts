import { Contact } from '../users/contact.model';
import { Measure } from './measure.model';
import { PersonalInfo } from '../users/personal-info.model';
import { Status } from './status.model';
import { MupStatus } from './mup-status.model';

export class Patient {
    id:string;
    clinicBranch:string;
    citizenship:string;
    countryOfImport:string;
    contacts:Contact[];
    measures:Measure[];
    personalInfo:PersonalInfo;
    statuses:Status[];
    mupStatuses: MupStatus[];

    constructor(){
        this.clinicBranch = '';
        this.citizenship = '';
        this.countryOfImport = '';
        this.personalInfo = new PersonalInfo();
        this.contacts = [];
        this.measures = [];
        this.statuses = [];
        this.mupStatuses = [];
    }
}