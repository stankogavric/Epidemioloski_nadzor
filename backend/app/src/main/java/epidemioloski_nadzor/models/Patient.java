package epidemioloski_nadzor.models;

import java.util.Set;

import epidemioloski_nadzor.utils.View.ShowMeasure;
import com.fasterxml.jackson.annotation.JsonView;
import epidemioloski_nadzor.utils.View.ShowStatus;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
public class Patient {

	@Id
	private String id;

	private String clinicBranch;
	private String citizenship;
	private String countryOfImport;
	private PersonalInfo personalInfo;

	@JsonView(ShowMeasure.class)
	private Set<Measure> measures;

	@JsonView(ShowStatus.class)
	private Set<Status> statuses;

	@JsonView(ShowStatus.class)
	private Set<Contact> contacts;

	@JsonView(ShowStatus.class)
	private Set<MupStatus> mupStatuses;

	public Patient() {}

	public Patient(String id, String clinicBranch, String citizenship, String countryOfImport, PersonalInfo personalInfo, Set<Measure> measures, Set<Status> statuses, Set<Contact> contacts, Set<MupStatus> mupStatuses){
		this.id = id;
		this.clinicBranch = clinicBranch;
		this.citizenship = citizenship;
		this.countryOfImport = countryOfImport;
		this.personalInfo = personalInfo;
		this.measures = measures;
		this.statuses = statuses;
		this.contacts = contacts;
		this.mupStatuses = mupStatuses;
	}
	
	public String getId(){
		return id;
	}

	public void setId(String id){
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
		return personalInfo;
	}

	public void setPersonalInfo(PersonalInfo personalInfo){
		this.personalInfo = personalInfo;
	}
	
	public Set<Measure> getMeasures(){
		return measures;
	}

	public void setMeasures(Set<Measure> measures){
		this.measures = measures;
	}
	
	public Set<Status> getStatuses(){
		return statuses;
	}

	public void setStatuses(Set<Status> statuses){
		this.statuses = statuses;
	}

	public Set<Contact> getContacts(){
		return contacts;
	}

	public void setContacts(Set<Contact> contacts){
		this.contacts = contacts;
	}

	public Set<MupStatus> getMupStatuses(){
		return mupStatuses;
	}

	public void setMupStatuses(Set<MupStatus> mupStatuses){
		this.mupStatuses = mupStatuses;
	}
	
}