package epidemioloski_nadzor.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import epidemioloski_nadzor.models.Measure;
import epidemioloski_nadzor.services.MeasureService;
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200", "http://88.99.225.22"})
@RestController
@RequestMapping("/measure")
public class MeasureController {

    @Autowired
    MeasureService measureService;

    @JsonView(HideOptionalProperties.class)
    @RequestMapping()
    public ResponseEntity<Iterable<Measure>> getMeasures() {
        return new ResponseEntity<Iterable<Measure>>(measureService.getMeasures(), HttpStatus.OK);
    }

}
