package epidemioloski_nadzor.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Patient;

@Repository
public interface PatientRepository extends PagingAndSortingRepository<Patient, Long> {
    Optional<Patient> findByPersonalInfoPhone(String phone);
    Optional<Patient> findByPersonalInfoJmbg(String jmbg);
    Optional<Patient> findById(String id);
    
    @Query(value = "{ 'archived' : false, $or: [ { 'citizenship' : {$regex:?0,$options:'i'} }, { 'personalInfo.phone' : {$regex:?0,$options:'i'} }, { 'personalInfo.jmbg' : {$regex:?0,$options:'i'} }, { 'personalInfo.lbo' : {$regex:?0,$options:'i'} }, { 'personalInfo.firstname' : {$regex:?0,$options:'i'} }, { 'personalInfo.lastname' : {$regex:?0,$options:'i'} },{ 'personalInfo.address.city' : {$regex:?0,$options:'i'} }, { 'personalInfo.address.street' : {$regex:?0,$options:'i'} }] }")
    Page<Patient> findByQuery(String Query, PageRequest pagable);

    @Query(value="{'personalInfo.address.location' : { '$near': { 'type': 'Point',  'coordinates': ?0 , '$maxDistance':?1}}, archived:false}")
    List<Patient> findNearestByRadius(double[] coordinates, double radius);


    Page<Patient> findByArchivedIsFalse(PageRequest pageable);

    @Query(value="{ 'archived' : false }")
    Iterable<Patient> findAll();
}