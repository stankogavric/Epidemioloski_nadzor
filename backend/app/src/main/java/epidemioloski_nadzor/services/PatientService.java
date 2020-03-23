package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Optional<Patient> getPatientById(Long id) {
        return patientRepo.findById(id);
    }

    public void addPatient(Patient patient) {
        patientRepo.save(patient);
    }

    public void removePatient(Long id) {
        Optional<Patient> patient = patientRepo.findById(id);
        patientRepo.delete(patient.get());
    }

    public void updatePatient(Long id, Patient patient) {
        Optional<Patient> Pat = patientRepo.findById(id);
        if(Pat.isPresent()) {
            patient.setId(Pat.get().getId());
            patientRepo.save(patient);
        }
    }

}
