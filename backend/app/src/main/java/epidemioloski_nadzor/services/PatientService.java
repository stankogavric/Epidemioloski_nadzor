package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.Contact;
import epidemioloski_nadzor.models.Patient;
import epidemioloski_nadzor.repositories.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepo;

    public PatientService() {
    }

    public Iterable<Patient> getPatients() {
        return patientRepo.findAll();
    }

    public Optional<Patient> getPatientByJmbg(String jmbg) {
        return patientRepo.findByPersonalInfoJmbg(jmbg);
    }

    public HttpStatus addPatient(Patient patient) {
        Optional<Patient> oPatient = patientRepo.findByPersonalInfoJmbg(patient.getPersonalInfo().getJmbg());
        if(oPatient.isPresent()){
            return HttpStatus.CONFLICT;
        }else{
            patientRepo.save(patient);
            return HttpStatus.CREATED;
        }

    }

    public void removePatient(String jmbg) {
        Optional<Patient> patient = patientRepo.findByPersonalInfoJmbg(jmbg);
        patientRepo.delete(patient.get());
    }

    public void updatePatient(String jmbg, Patient patient) {
        Optional<Patient> oPatient = patientRepo.findByPersonalInfoJmbg(jmbg);
        if(oPatient.isPresent()) {
            patient.getPersonalInfo().setJmbg(oPatient.get().getPersonalInfo().getJmbg());
            patient.setId(oPatient.get().getId());
            patientRepo.save(patient);
        }
    }

	public void addPatientContact(String jmbg, Contact contact) {
        Optional<Patient> oPatient = patientRepo.findByPersonalInfoJmbg(jmbg);
        if(oPatient.isPresent()) {
            Patient p = oPatient.get();
            p.getContacts().add(contact);
            patientRepo.save(p);
        }
    }

}
