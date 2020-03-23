package epidemioloski_nadzor.controllers;

import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonView;

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
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    PatientService patientService;

    @JsonView(HideOptionalProperties.class)
    @RequestMapping()
    public ResponseEntity<Iterable<Patient>> getPatients() {
        return new ResponseEntity<Iterable<Patient>>(patientService.getPatients(), HttpStatus.OK);
    }

    @RequestMapping(method=RequestMethod.POST)
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        patientService.addPatient(patient);
        return new ResponseEntity<Patient>(patient, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{phone}", method=RequestMethod.GET)
    public ResponseEntity<Patient> getPatient(@PathVariable String phone) {
        Optional<Patient> patient = patientService.getPatientByPhone(phone);
        if(patient.isPresent()) {
            return new ResponseEntity<Patient>(patient.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="/{phone}", method=RequestMethod.PUT)
    public ResponseEntity<Patient> updatePatient(@PathVariable String phone, @RequestBody Patient patient) {
        patientService.updatePatient(phone, patient);
        return new ResponseEntity<Patient>(patient, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{phone}", method=RequestMethod.DELETE)
    public ResponseEntity<Patient> removePatient(@PathVariable String phone) {
        try {
            patientService.removePatient(phone);
        }catch (Exception e) {
            return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Patient>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value="/addContact/{phone}", method=RequestMethod.PUT)
    public ResponseEntity<Contact> addContact(@PathVariable String phone, @RequestBody Contact contact) {
        patientService.addPatientContact(phone, contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.CREATED);
    }

}
