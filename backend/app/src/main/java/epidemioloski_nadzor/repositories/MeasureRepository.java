package epidemioloski_nadzor.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import epidemioloski_nadzor.models.Measure;

@Repository
public interface MeasureRepository extends MongoRepository<Measure, Long> {

}