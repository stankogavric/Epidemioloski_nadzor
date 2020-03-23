package epidemioloski_nadzor.models;
import java.util.Date;

public class Measure {

	private Long id;
	private String measure;
	private Date startDate;
	private Date endDate;
	private String instituion;
	private String reciptNum;

	public Measure() {}

	public Measure(String measure, Date startDate, Date endDate, String instituion, String reciptNum){
		this.measure = measure;
		this.startDate = startDate;
		this.endDate = endDate;
		this.instituion = instituion;
		this.reciptNum = reciptNum;
	}

	public Long getId(){
		return id;
	}

	public void setId(Long id){
		this.id = id;
	}
	
	public String getMeasure(){
		return measure;
	}

	public void setMeasure(String Measure){
		this.measure = Measure;
	}
	
	public Date getStartDate(){
		return startDate;
	}

	public void setStartDate(Date startDate){
		this.startDate = startDate;
	}
	
	public Date getEndDate(){
		return endDate;
	}

	public void setEndDate(Date endDate){
		this.endDate = endDate;
	}
	
	public String getInstituion(){
		return instituion;
	}

	public void setInstituion(String instituion){
		this.instituion = instituion;
	}
	
	public String getReciptNum(){
		return reciptNum;
	}

	public void setReciptNum(String reciptNum){
		this.reciptNum = reciptNum;
	}
	
}