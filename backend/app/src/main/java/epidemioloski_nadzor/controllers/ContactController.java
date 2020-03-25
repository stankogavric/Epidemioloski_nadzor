package epidemioloski_nadzor.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import epidemioloski_nadzor.models.Contact;
import epidemioloski_nadzor.services.ContactService;
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200", "http://88.99.225.22","http://portal.izjzv.org.rs"})
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    ContactService contactService;

    @JsonView(HideOptionalProperties.class)
    @RequestMapping()
    public ResponseEntity<Iterable<Contact>> getContacts() {
        return new ResponseEntity<Iterable<Contact>>(contactService.getContacts(), HttpStatus.OK);
    }

}
