import { Location } from '../patients/location.model';

export class Address {
    id:number;
    city:string;
    street:string;
    streetNum:string;
    location:Location;
    constructor(){
        this.city = '';
        this.street = '';
        this.streetNum = '';
        this.location = new Location();
    }
}