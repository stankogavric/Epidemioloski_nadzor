package epidemioloski_nadzor.models;

public class Address {

	private String city;
	private String street;
	private String streetNum;
	private Location location;
	

	public Address() {}

	public Address(String city, String street, String streetNum, Location location){
		this.city = city;
		this.street = street;
		this.streetNum = streetNum;
		this.location = location;
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

	public Location getLocation(){
		return location;
	}

	public void setLocation(Location location){
		this.location = location;
	}
	
}