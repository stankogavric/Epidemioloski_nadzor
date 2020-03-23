import { PersonalInfo } from './personal-info.model';
import { Address } from './address.model';

export class Contact {
    id:number;
    date:Date;
    description:string;
    personalInfo:PersonalInfo;
    address:Address;
}