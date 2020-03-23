package epidemioloski_nadzor.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
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

}
