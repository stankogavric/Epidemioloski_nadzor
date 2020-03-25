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

import epidemioloski_nadzor.models.User;
import epidemioloski_nadzor.services.UserService;

@CrossOrigin(origins={"http://localhost:4200", "http://88.99.225.22"})
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping()
    public ResponseEntity<Iterable<User>> getUsers() {
        return new ResponseEntity<Iterable<User>>(userService.getUsers(), HttpStatus.OK);
    }

    @RequestMapping(value="/{phone}", method=RequestMethod.GET)
    public ResponseEntity<User> getUserByPhone(@PathVariable String phone) {
        Optional<User> user = userService.getUserByPersonalInfoPhone(phone);
        if(user.isPresent()) {
            return new ResponseEntity<User>(user.get(), HttpStatus.OK);
        }
        return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value="/register", method=RequestMethod.POST)
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return new ResponseEntity<User>(user, userService.addUser(user));
    }

    @RequestMapping(value="/{phone}", method=RequestMethod.PUT)
    public ResponseEntity<User> updateUser(@PathVariable String phone, @RequestBody User user) {
        userService.updateUser(phone, user);
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{phone}", method=RequestMethod.DELETE)
    public ResponseEntity<User> removeUser(@PathVariable String phone) {
        try {
            userService.removeUser(phone);
        }catch (Exception e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }

}
