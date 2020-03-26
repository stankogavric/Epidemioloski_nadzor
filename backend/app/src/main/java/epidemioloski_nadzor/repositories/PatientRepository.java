package epidemioloski_nadzor.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Patient;

@Repository
public interface PatientRepository extends PagingAndSortingRepository<Patient, Long> {
    Optional<Patient> findByPersonalInfoPhone(String phone);
    Optional<Patient> findByPersonalInfoJmbg(String jmbg);

    Optional<Patient> findById(String id);

    Page<Patient> findByArchivedIsFalse(PageRequest pageable);
}