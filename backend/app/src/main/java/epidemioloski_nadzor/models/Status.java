package epidemioloski_nadzor.models;

import java.util.Date;
import java.util.Set;


public class Status {

	private Date date;
	private Float temperature;
	private String description;
	private String status;
	private String hospitalTreatment;
	private Set<String> riskFactors;
	private Set<String> anamnesis;

	public Status() {}

	public Status(Date date, Float temperature, String description, String status, String hospitalTreatment, Set<String> riskFactors, Set<String> anamnesis){
		this.date = date;
		this.temperature = temperature;
		this.description = description;
		this.status = status;
		this.hospitalTreatment = hospitalTreatment;
		this.riskFactors = riskFactors;
		this.anamnesis = anamnesis;
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

	public String getHospitalTreatment(){
		return hospitalTreatment;
	}

	public void setHospitalTreatment(String hospitalTreatment){
		this.hospitalTreatment = hospitalTreatment;
	}
	
	public Set<String> getRiskFactors(){
		return riskFactors;
	}

	public void setRiskFactors(Set<String> riskFactors){
		this.riskFactors = riskFactors;
	}
	
	public Set<String> getAnamnesis(){
		return anamnesis;
	}

	public void setAnamnesis(Set<String> anamnesis){
		this.anamnesis = anamnesis;
	}
	
}