package epidemioloski_nadzor.controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import epidemioloski_nadzor.services.LoginService;
import epidemioloski_nadzor.models.User;

@CrossOrigin(origins={"http://localhost:4200", "http://88.99.225.22","http://portal.izjzv.org.rs"})
@Controller
@RequestMapping("/api/login")
public class LoginController {
	@Autowired
	LoginService ls;
	
	@RequestMapping(path = "", method = RequestMethod.POST)
	public ResponseEntity<HashMap<String, String>> login(@RequestBody User user) {
		return ls.login(user);
	}

}