package epidemioloski_nadzor.models;

import java.util.Date;
import java.util.Set;


public class MupStatus {

	private Date date;
	private String status;
	private String description;

	public MupStatus() {}

	public MupStatus(Date date, Float temperature, String description, String status, Set<String> anamnesis){
		this.date = date;
		this.description = description;
		this.status = status;
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
	
	public String getStatus(){
		return status;
	}

	public void setStatus(String status){
		this.status = status;
	}
	
}