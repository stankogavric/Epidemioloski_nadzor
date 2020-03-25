package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.User;
import epidemioloski_nadzor.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
	private PasswordEncoder passwordEncoder;

    public UserService() {
    }

    public Iterable<User> getUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserById(String id) {
        return userRepo.findById(id);
    }

    public HttpStatus addUser(User user) {
        Optional<User> oUser = userRepo.findByPersonalInfoPhone(user.getPersonalInfo().getPhone());
        if(oUser.isPresent()){
            return HttpStatus.CONFLICT;
        }else{
            user.setPin((passwordEncoder.encode(user.getPin())));
            userRepo.save(user);
            return HttpStatus.CREATED;
        }
    }

    public void removeUser(String id) {
        Optional<User> user = userRepo.findById(id);
        userRepo.delete(user.get());
    }

    public void updateUser(String id, User user) {
        Optional<User> oUser = userRepo.findById(id);
        if(oUser.isPresent()) {
            user.getPersonalInfo().setPhone(oUser.get().getPersonalInfo().getPhone());
            user.setId(oUser.get().getId());
            user.setPin(passwordEncoder.encode(user.getPin()));
            userRepo.save(user);
        }
    }

    public Optional<User> getUserByPersonalInfoPhone(String phone) {
        return userRepo.findByPersonalInfoPhone(phone);
	}

}
