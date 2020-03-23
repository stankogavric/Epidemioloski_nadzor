package epidemioloski_nadzor.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Contact;

@Repository
public interface ContactRepository extends MongoRepository<Contact, Long> {
    Optional<Contact> findByPersonalInfoPhone(String phone);
}