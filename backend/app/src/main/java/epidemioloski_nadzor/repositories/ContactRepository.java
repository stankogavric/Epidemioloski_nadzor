package epidemioloski_nadzor.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Contact;

@Repository
public interface ContactRepository extends MongoRepository<Contact, Long> {

}