package epidemioloski_nadzor.services;

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

}
