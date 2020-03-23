package epidemioloski_nadzor.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.Contact;
import epidemioloski_nadzor.repositories.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepo;

    public ContactService() {
    }

    public Iterable<Contact> getContacts() {
        return contactRepo.findAll();
    }

}
