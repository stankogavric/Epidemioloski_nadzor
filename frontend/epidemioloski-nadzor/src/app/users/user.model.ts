import { PersonalInfo } from './personal-info.model';

export class User {
    id:string;
	pin:string;
	role:string;
	personalInfo:PersonalInfo;

	constructor(){
		this.personalInfo = new PersonalInfo();
	}
}
