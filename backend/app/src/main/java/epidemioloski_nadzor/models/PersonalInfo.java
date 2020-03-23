package epidemioloski_nadzor.models;

public class PersonalInfo {
	private String phone;
	
	private String firstname;
	private String lastname;
	private String jmbg;
	private String email;
	private String lbo;
	private Address address;

	public PersonalInfo() {}

	public PersonalInfo(String phone, String firstname, String lastname, String jmbg, String email, String lbo, Address address){
		this.phone = phone;
		this.firstname = firstname;
		this.lastname = lastname;
		this.jmbg = jmbg;
		this.email = email;
		this.lbo = lbo;
		this.address = address;
	}
	
	public String getPhone(){
		return phone;
	}

	public void setPhone(String phone){
		this.phone = phone;
	}
	
	public String getFirstname(){
		return firstname;
	}

	public void setFirstname(String firstname){
		this.firstname = firstname;
	}
	
	public String getLastname(){
		return lastname;
	}

	public void setLastname(String lastname){
		this.lastname = lastname;
	}
	
	public String getJmbg(){
		return jmbg;
	}

	public void setJmbg(String jmbg){
		this.jmbg = jmbg;
	}
	
	public String getEmail(){
		return email;
	}

	public void setEmail(String email){
		this.email = email;
	}
	
	public String getLbo(){
		return lbo;
	}

	public void setLbo(String lbo){
		this.lbo = lbo;
	}
	
	public Address getAddress(){
		return address;
	}

	public void setAddress(Address address){
		this.address = address;
	}
	
}