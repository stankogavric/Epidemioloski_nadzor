package epidemioloski_nadzor.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Role;

@Repository
public interface RoleRepository extends MongoRepository<Role, Long> {

}