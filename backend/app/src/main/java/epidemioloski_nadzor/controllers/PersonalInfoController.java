package epidemioloski_nadzor.controllers;

import com.fasterxml.jackson.annotation.JsonView;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import epidemioloski_nadzor.models.PersonalInfo;
import epidemioloski_nadzor.services.PersonalInfoService;
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200", "http://88.99.225.22","https://portal.izjzv.org.rs"})
@RestController
@RequestMapping("/api/personalinfo")
public class PersonalInfoController {

    @Autowired
    PersonalInfoService personalInfoService;

    @JsonView(HideOptionalProperties.class)
    @RequestMapping()
    public ResponseEntity<Iterable<PersonalInfo>> getPersonalInfo() {
        return new ResponseEntity<Iterable<PersonalInfo>>(personalInfoService.getPersonalInfo(), HttpStatus.OK);
    }

}
