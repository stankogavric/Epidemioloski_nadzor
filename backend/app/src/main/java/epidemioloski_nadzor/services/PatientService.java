package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
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

    public Iterable<Patient> getPatients(Integer page, Integer pageSize) {
        return patientRepo.findByArchivedIsFalse(PageRequest.of(page, pageSize));
    }

    public Optional<Patient> getPatientById(String id) {
        return patientRepo.findById(id);
    }

    public HttpStatus addPatient(Patient patient) {
        patient.setArchived(false);
        patientRepo.save(patient);
        return HttpStatus.CREATED;
    }

    public void removePatient(String id) {
        Optional<Patient> patient = patientRepo.findById(id);
        if(patient.isPresent()){
            patient.get().setArchived(true);
            patientRepo.save(patient.get());
        }
    }

    public void updatePatient(String id, Patient patient) {
        Optional<Patient> oPatient = patientRepo.findById(id);
        if(oPatient.isPresent()) {
            patient.setId(oPatient.get().getId());
            patientRepo.save(patient);
        }
    }

	public void addPatientContact(String id, Contact contact) {
        Optional<Patient> oPatient = patientRepo.findById(id);
        if(oPatient.isPresent()) {
            Patient p = oPatient.get();
            p.getContacts().add(contact);
            patientRepo.save(p);
        }
    }

}
