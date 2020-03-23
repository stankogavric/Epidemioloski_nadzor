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

import epidemioloski_nadzor.models.Role;
import epidemioloski_nadzor.services.RoleService;
import epidemioloski_nadzor.utils.View.HideOptionalProperties;

@CrossOrigin(origins={"http://localhost:4200"})
@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    RoleService roleService;

    @JsonView(HideOptionalProperties.class)
    @RequestMapping()
    public ResponseEntity<Iterable<Role>> getRoles() {
        return new ResponseEntity<Iterable<Role>>(roleService.getRoles(), HttpStatus.OK);
    }

    @JsonView(HideOptionalProperties.class)
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public ResponseEntity<Role> getRoleById(@PathVariable Long id) {
        Optional<Role> role = roleService.getRoleById(id);
        if(role.isPresent()) {
            return new ResponseEntity<Role>(role.get(), HttpStatus.OK);
        }
        return new ResponseEntity<Role>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="", method=RequestMethod.POST)
    public ResponseEntity<Role> addRole(@RequestBody Role role) {
        roleService.addRole(role);
        return new ResponseEntity<Role>(role, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Role> updateRole(@PathVariable Long id, @RequestBody Role role) {
        roleService.updateRole(id, role);
        return new ResponseEntity<Role>(role, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Role> removeRole(@PathVariable Long id) {
        try {
            roleService.removeRole(id);
        }catch (Exception e) {
            return new ResponseEntity<Role>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Role>(HttpStatus.NO_CONTENT);
    }

}
