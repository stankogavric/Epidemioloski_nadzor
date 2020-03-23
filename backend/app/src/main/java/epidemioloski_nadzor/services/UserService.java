package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.User;
import epidemioloski_nadzor.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public UserService() {
    }

    public Iterable<User> getUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserByPersonalInfoPhone(String phone) {
        return userRepo.findByPersonalInfoPhone(phone);
    }

    public void addUser(User user) {
        userRepo.save(user);
    }

    public void removeUser(String phone) {
        Optional<User> user = userRepo.findByPersonalInfoPhone(phone);
        userRepo.delete(user.get());
    }

    public void updateUser(String phone, User user) {
        Optional<User> oUser = userRepo.findByPersonalInfoPhone(phone);
        if(oUser.isPresent()) {
            user.getPersonalInfo().setPhone(oUser.get().getPersonalInfo().getPhone());
            userRepo.save(user);
        }
    }

}
