package epidemioloski_nadzor.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Patient;

@Repository
public interface PatientRepository extends MongoRepository<Patient, Long> {
    Optional<Patient> findByPersonalInfoPhone(String phone);
	Optional<Patient> findByPersonalInfoJmbg(String jmbg);
}