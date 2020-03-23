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

import epidemioloski_nadzor.models.Measure;
import epidemioloski_nadzor.services.MeasureService;
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200"})
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

    @JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<Measure> getMeasureById(@PathVariable Long id) {
        Optional<Measure> measure = measureService.getMeasureById(id);
        if(measure.isPresent()) {
            return new ResponseEntity<Measure>(measure.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Measure>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="", method=RequestMethod.POST)
    public ResponseEntity<Measure> addMeasure(@RequestBody Measure measure) {
        measureService.addMeasure(measure);
        return new ResponseEntity<Measure>(measure, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Measure> updateMeasure(@PathVariable Long id, @RequestBody Measure measure) {
        measureService.updateMeasure(id, measure);
        return new ResponseEntity<Measure>(measure, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Measure> removeMeasure(@PathVariable Long id) {
        try {
            measureService.removeMeasure(id);
        }catch (Exception e) {
            return new ResponseEntity<Measure>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Measure>(HttpStatus.NO_CONTENT);
    }

}
