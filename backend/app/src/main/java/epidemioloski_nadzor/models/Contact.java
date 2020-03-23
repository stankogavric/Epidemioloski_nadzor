package epidemioloski_nadzor.models;

import java.util.Date;


public class Contact {

	private Long id;
	private Date date;
	private String description;
	private PersonalInfo PersonalInfo;
	private Address address;

	public Contact() {}

	public Contact(Date date, String description, PersonalInfo PersonalInfo, Address address){
		this.date = date;
		this.description = description;
		this.PersonalInfo = PersonalInfo;
		this.address = address;
	}
	
	public Long getId(){
		return id;
	}

	public void setId(Long id){
		this.id = id;
	}

	public Date getDate(){
		return date;
	}

	public void setDate(Date date){
		this.date = date;
	}
	
	public String getDescription(){
		return description;
	}

	public void setDescription(String description){
		this.description = description;
	}
	
	public PersonalInfo getPersonalInfo(){
		return PersonalInfo;
	}

	public void setPersonalInfo(PersonalInfo PersonalInfo){
		this.PersonalInfo = PersonalInfo;
	}
	
	public Address getAddress(){
		return address;
	}

	public void setAddress(Address address){
		this.address = address;
	}
	
}