package epidemioloski_nadzor.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.Status;
import epidemioloski_nadzor.repositories.StatusRepository;

@Service
public class StatusService {

    @Autowired
    private StatusRepository statusRepo;

    public StatusService() {
    }

    public Iterable<Status> getStatuses() {
        return statusRepo.findAll();
    }

}
