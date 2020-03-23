package epidemioloski_nadzor.services;

import java.util.Optional;

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

    public Optional<Contact> getContactById(Long id) {
        return contactRepo.findById(id);
    }

    public void addContact(Contact contact) {
        contactRepo.save(contact);
    }

    public void removeContact(Long id) {
        Optional<Contact> contact = contactRepo.findById(id);
        contactRepo.delete(contact.get());
    }

    public void updateContact(Long id, Contact contact) {
        Optional<Contact> Con = contactRepo.findById(id);
        if(Con.isPresent()) {
            contact.setId(Con.get().getId());
            contactRepo.save(contact);
        }
    }

}
