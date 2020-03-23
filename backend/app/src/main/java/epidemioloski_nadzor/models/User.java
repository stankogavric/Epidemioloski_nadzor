package epidemioloski_nadzor.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

	private Long id;
	private String pin;
	private String role;
	private PersonalInfo PersonalInfo;

	public User() {}

	public User(String pin, String role, PersonalInfo PersonalInfo){
		this.pin = pin;
		this.role = role;
		this.PersonalInfo = PersonalInfo;
	}

	public Long getId(){
		return id;
	}

	public void setId(Long id){
		this.id = id;
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
		return PersonalInfo;
	}

	public void setPersonalInfo(PersonalInfo PersonalInfo){
		this.PersonalInfo = PersonalInfo;
	}
	
}