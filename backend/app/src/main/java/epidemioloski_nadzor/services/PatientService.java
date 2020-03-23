package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

    public Optional<Patient> getPatientByPhone(String phone) {
        return patientRepo.findByPersonalInfoPhone(phone);
    }

    public void addPatient(Patient patient) {
        patientRepo.save(patient);
    }

    public void removePatient(String phone) {
        Optional<Patient> patient = patientRepo.findByPersonalInfoPhone(phone);
        patientRepo.delete(patient.get());
    }

    public void updatePatient(String phone, Patient patient) {
        Optional<Patient> oPatient = patientRepo.findByPersonalInfoPhone(phone);
        if(oPatient.isPresent()) {
            patient.getPersonalInfo().setPhone(oPatient.get().getPersonalInfo().getPhone());
            patientRepo.save(patient);
        }
    }

	public void addPatientContact(String phone, Contact contact) {
        Optional<Patient> oPatient = patientRepo.findByPersonalInfoPhone(phone);
        if(oPatient.isPresent()) {
            Patient p = oPatient.get();
            p.getContacts().add(contact);
            patientRepo.save(p);
        }
    }

}
