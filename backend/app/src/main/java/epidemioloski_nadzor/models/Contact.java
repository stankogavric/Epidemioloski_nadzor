package epidemioloski_nadzor.models;

import java.util.Date;

// import org.springframework.data.mongodb.core.mapping.Document;

// @Document(collection = "contact")
public class Contact {

	private String id;
	
	// @Id

	private Date date;
	private String description;
	private PersonalInfo personalInfo;
	private Address address;

	public Contact() {}

	public Contact(String id, Date date, String description, PersonalInfo personalInfo, Address address){
		this.id = id;
		this.date = date;
		this.description = description;
		this.personalInfo = personalInfo;
		this.address = address;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
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
		return personalInfo;
	}

	public void setPersonalInfo(PersonalInfo personalInfo){
		this.personalInfo = personalInfo;
	}
	
	public Address getAddress(){
		return address;
	}

	public void setAddress(Address address){
		this.address = address;
	}
	
}