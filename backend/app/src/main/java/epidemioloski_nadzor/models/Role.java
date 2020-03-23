package epidemioloski_nadzor.models;

public class Role {

	private Long id;
	private String type;

	public Role() {}

	public Role(String type){
		this.type = type;
	}

	public Long getId(){
		return id;
	}

	public void setId(Long id){
		this.id = id;
	}
	
	public String getType(){
		return type;
	}

	public void setType(String type){
		this.type = type;
	}
	
}