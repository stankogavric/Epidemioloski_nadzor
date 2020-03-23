package epidemioloski_nadzor.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

	private String pin;
	private String role;
	private PersonalInfo personalInfo;

	public User() {}

	public User(String pin, String role, PersonalInfo personalInfo){
		this.pin = pin;
		this.role = role;
		this.personalInfo = personalInfo;
	}

	public String getPin(){
		return pin;
	}

	public void setPin(String pin){
		this.pin = pin;
	}
	
	public String getRole(){
		return role;
	}

	public void setRole(String role){
		this.role = role;
	}
	
	public PersonalInfo getPersonalInfo(){
		return personalInfo;
	}

	public void setPersonalInfo(PersonalInfo personalInfo){
		this.personalInfo = personalInfo;
	}
	
}