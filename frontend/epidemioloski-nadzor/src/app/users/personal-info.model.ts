import { Address } from './address.model';

export class PersonalInfo {
    id: number;
    phone: string;
    firstname: string;
    lastname: string;
    jmbg: string;
    email: string;
    lbo: string;
    address: Address;
    constructor() {
        this.phone = '';
        this.firstname = '';
        this.lastname = '';
        this.jmbg = '';
        this.email = '';
        this.address = new Address();
    }
}