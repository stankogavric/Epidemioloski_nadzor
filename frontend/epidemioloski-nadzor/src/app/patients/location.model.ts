export class Location {
    type:string;
    coordinates:number[];

    constructor(){
        this.type = 'Point';
        this.coordinates=[0.0,0.0];
    }
}