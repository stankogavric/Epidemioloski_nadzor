package epidemioloski_nadzor.models;
import java.util.Date;


public class Status {

	private Long id;
	private Date date;
	private Float temperature;
	private String description;
	private String status;
	private String[] anamnesis;

	public Status() {}

	public Status(Date date, Float temperature, String description, String status, String[] anamnesis){
		this.date = date;
		this.temperature = temperature;
		this.description = description;
		this.status = status;
		this.anamnesis = anamnesis;
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
	
	public Float getTemperature(){
		return temperature;
	}

	public void setTemperature(Float temperature){
		this.temperature = temperature;
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
	
	public String[] getAnamnesis(){
		return anamnesis;
	}

	public void setAnamnesis(String[] anamnesis){
		this.anamnesis = anamnesis;
	}
	
}