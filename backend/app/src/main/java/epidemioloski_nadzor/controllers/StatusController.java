package epidemioloski_nadzor.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import epidemioloski_nadzor.models.Status;
import epidemioloski_nadzor.services.StatusService;
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/status")
public class StatusController {

    @Autowired
    StatusService statusService;

    @JsonView(HideOptionalProperties.class)
    @RequestMapping()
    public ResponseEntity<Iterable<Status>> getStatuses() {
        return new ResponseEntity<Iterable<Status>>(statusService.getStatuses(), HttpStatus.OK);
    }

    @JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<Status> getStatusById(@PathVariable Long id) {
        Optional<Status> status = statusService.getStatusById(id);
        if(status.isPresent()) {
            return new ResponseEntity<Status>(status.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Status>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="", method=RequestMethod.POST)
    public ResponseEntity<Status> addStatus(@RequestBody Status status) {
        statusService.addStatus(status);
        return new ResponseEntity<Status>(status, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Status> updateStatus(@PathVariable Long id, @RequestBody Status status) {
        statusService.updateStatus(id, status);
        return new ResponseEntity<Status>(status, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Status> removeStatus(@PathVariable Long id) {
        try {
            statusService.removeStatus(id);
        }catch (Exception e) {
            return new ResponseEntity<Status>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Status>(HttpStatus.NO_CONTENT);
    }

}
