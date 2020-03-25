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

import epidemioloski_nadzor.models.Contact;
import epidemioloski_nadzor.models.Patient;
import epidemioloski_nadzor.services.PatientService;

@CrossOrigin(origins={"http://localhost:4200", "http://88.99.225.22","http://portal.izjzv.org.rs"})
@RestController
@RequestMapping("/api/patient")
public class PatientController {

    @Autowired
    PatientService patientService;

    @RequestMapping()
    public ResponseEntity<Iterable<Patient>> getPatients() {
        return new ResponseEntity<Iterable<Patient>>(patientService.getPatients(), HttpStatus.OK);
    }

    @RequestMapping(method=RequestMethod.POST)
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        return new ResponseEntity<Patient>(patient, patientService.addPatient(patient));
    }

    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<Patient> getPatient(@PathVariable String id) {
        Optional<Patient> patient = patientService.getPatientById(id);
        if(patient.isPresent()) {
            return new ResponseEntity<Patient>(patient.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Patient> updatePatient(@PathVariable String id, @RequestBody Patient patient) {
        patientService.updatePatient(id, patient);
        return new ResponseEntity<Patient>(patient, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Patient> removePatient(@PathVariable String id) {
        try {
            patientService.removePatient(id);
        }catch (Exception e) {
            return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Patient>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value="/addContact/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Contact> addContact(@PathVariable String id, @RequestBody Contact contact) {
        patientService.addPatientContact(id, contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.CREATED);
    }

}
