package epidemioloski_nadzor.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Address;

@Repository
public interface AddressRepository extends MongoRepository<Address, Long> {

}