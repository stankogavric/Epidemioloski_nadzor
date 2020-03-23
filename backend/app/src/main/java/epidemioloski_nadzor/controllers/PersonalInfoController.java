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

import epidemioloski_nadzor.models.PersonalInfo;
import epidemioloski_nadzor.services.PersonalInfoService;
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/personalinfo")
public class PersonalInfoController {

    @Autowired
    PersonalInfoService personalInfoService;

    @JsonView(HideOptionalProperties.class)
    @RequestMapping()
    public ResponseEntity<Iterable<PersonalInfo>> getPersonalInfo() {
        return new ResponseEntity<Iterable<PersonalInfo>>(personalInfoService.getPersonalInfo(), HttpStatus.OK);
    }

    @JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<PersonalInfo> getPersonalInfoById(@PathVariable Long id) {
        Optional<PersonalInfo> personalInfo = personalInfoService.getPersonalInfoById(id);
        if(personalInfo.isPresent()) {
            return new ResponseEntity<PersonalInfo>(personalInfo.get(), HttpStatus.OK);
        }
        return new ResponseEntity<PersonalInfo>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="", method=RequestMethod.POST)
    public ResponseEntity<PersonalInfo> addPersonalInfo(@RequestBody PersonalInfo personalInfo) {
        personalInfoService.addPersonalInfo(personalInfo);
        return new ResponseEntity<PersonalInfo>(personalInfo, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<PersonalInfo> updatePersonalInfo(@PathVariable Long id, @RequestBody PersonalInfo personalInfo) {
        personalInfoService.updatePersonalInfo(id, personalInfo);
        return new ResponseEntity<PersonalInfo>(personalInfo, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<PersonalInfo> removePersonalInfo(@PathVariable Long id) {
        try {
            personalInfoService.removePersonalInfo(id);
        }catch (Exception e) {
            return new ResponseEntity<PersonalInfo>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<PersonalInfo>(HttpStatus.NO_CONTENT);
    }

}
