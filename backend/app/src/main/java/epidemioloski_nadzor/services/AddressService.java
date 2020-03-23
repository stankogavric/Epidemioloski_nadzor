package epidemioloski_nadzor.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.Address;
import epidemioloski_nadzor.repositories.AddressRepository;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepo;

    public AddressService() {
    }

    public Iterable<Address> getAddresses() {
        return addressRepo.findAll();
    }

    public Optional<Address> getAddressById(Long id) {
        return addressRepo.findById(id);
    }

    public void addAddress(Address address) {
        addressRepo.save(address);
    }

    public void removeAddress(Long id) {
        Optional<Address> address = addressRepo.findById(id);
        addressRepo.delete(address.get());
    }

    public void updateAddress(Long id, Address address) {
        Optional<Address> Add = addressRepo.findById(id);
        if(Add.isPresent()) {
            address.setId(Add.get().getId());
            addressRepo.save(address);
        }
    }

}
