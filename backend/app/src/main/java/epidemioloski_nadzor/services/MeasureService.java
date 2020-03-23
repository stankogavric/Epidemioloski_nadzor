package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.Measure;
import epidemioloski_nadzor.repositories.MeasureRepository;

@Service
public class MeasureService {

    @Autowired
    private MeasureRepository measureRepo;

    public MeasureService() {
    }

    public Iterable<Measure> getMeasures() {
        return measureRepo.findAll();
    }

    public Optional<Measure> getMeasureById(Long id) {
        return measureRepo.findById(id);
    }

    public void addMeasure(Measure measure) {
        measureRepo.save(measure);
    }

    public void removeMeasure(Long id) {
        Optional<Measure> measure = measureRepo.findById(id);
        measureRepo.delete(measure.get());
    }

    public void updateMeasure(Long id, Measure measure) {
        Optional<Measure> Mea = measureRepo.findById(id);
        if(Mea.isPresent()) {
            measure.setId(Mea.get().getId());
            measureRepo.save(measure);
        }
    }

}
