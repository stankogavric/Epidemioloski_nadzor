package epidemioloski_nadzor.services;

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

}
