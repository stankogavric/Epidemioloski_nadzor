package epidemioloski_nadzor.services;

import java.util.Optional;

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

    public Optional<Status> getStatusById(Long id) {
        return statusRepo.findById(id);
    }

    public void addStatus(Status status) {
        statusRepo.save(status);
    }

    public void removeStatus(Long id) {
        Optional<Status> status = statusRepo.findById(id);
        statusRepo.delete(status.get());
    }

    public void updateStatus(Long id, Status status) {
        Optional<Status> Sta = statusRepo.findById(id);
        if(Sta.isPresent()) {
            status.setId(Sta.get().getId());
            statusRepo.save(status);
        }
    }

}
