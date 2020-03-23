package epidemioloski_nadzor.models;

public class Address {

	private Long id;
	private String city;
	private String street;
	private String streetNum;

	public Address() {}

	public Address(String city, String street, String streetNum){
		this.city = city;
		this.street = street;
		this.streetNum = streetNum;
	}

	public Long getId(){
		return id;
	}

	public void setId(Long id){
		this.id = id;
	}
	
	public String getCity(){
		return city;
	}

	public void setCity(String city){
		this.city = city;
	}
	
	public String getStreet(){
		return street;
	}

	public void setStreet(String street){
		this.street = street;
	}
	
	public String getStreetNum(){
		return streetNum;
	}

	public void setStreetNum(String streetNum){
		this.streetNum = streetNum;
	}
	
}