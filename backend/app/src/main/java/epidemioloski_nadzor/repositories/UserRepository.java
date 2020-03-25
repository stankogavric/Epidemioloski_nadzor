package epidemioloski_nadzor.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
    Optional<User> findByPersonalInfoPhone(String phone);
    Optional<User> findById(String id);
}