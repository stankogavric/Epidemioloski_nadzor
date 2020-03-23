package epidemioloski_nadzor.models;

import java.util.Set;
import epidemioloski_nadzor.utils.View.ShowMeasure;
import com.fasterxml.jackson.annotation.JsonView;
import epidemioloski_nadzor.utils.View.ShowStatus;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
public class Patient {

	private Long id;
	private String clinicBranch;
	private String citizenship;
	private String countryOfImport;
	private PersonalInfo PersonalInfo;

	@JsonView(ShowMeasure.class)
	private Set<Measure> Measures;

	@JsonView(ShowStatus.class)
	private Set<Status> Statuses;

	public Patient() {}

	public Patient(String clinicBranch, String citizenship, String countryOfImport, PersonalInfo PersonalInfo, Set<Measure> Measures, Set<Status> Statuses){
		this.clinicBranch = clinicBranch;
		this.citizenship = citizenship;
		this.countryOfImport = countryOfImport;
		this.PersonalInfo = PersonalInfo;
		this.Measures = Measures;
		this.Statuses = Statuses;
	}

	public Long getId(){
		return id;
	}

	public void setId(Long id){
		this.id = id;
	}
	
	public String getClinicBranch(){
		return clinicBranch;
	}

	public void setClinicBranch(String clinicBranch){
		this.clinicBranch = clinicBranch;
	}
	
	public String getCitizenship(){
		return citizenship;
	}

	public void setCitizenship(String citizenship){
		this.citizenship = citizenship;
	}
	
	public String getCountryOfImport(){
		return countryOfImport;
	}

	public void setCountryOfImport(String countryOfImport){
		this.countryOfImport = countryOfImport;
	}
	
	public PersonalInfo getPersonalInfo(){
		return PersonalInfo;
	}

	public void setPersonalInfo(PersonalInfo PersonalInfo){
		this.PersonalInfo = PersonalInfo;
	}
	
	public Set<Measure> getMeasures(){
		return Measures;
	}

	public void setMeasures(Set<Measure> Measures){
		this.Measures = Measures;
	}
	
	public Set<Status> getStatuses(){
		return Statuses;
	}

	public void setStatuses(Set<Status> Statuses){
		this.Statuses = Statuses;
	}
	
}