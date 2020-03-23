package epidemioloski_nadzor.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Status;

@Repository
public interface StatusRepository extends MongoRepository<Status, Long> {

}