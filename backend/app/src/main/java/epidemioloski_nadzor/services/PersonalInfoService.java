package epidemioloski_nadzor.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import epidemioloski_nadzor.models.PersonalInfo;
import epidemioloski_nadzor.repositories.PersonalInfoRepository;

@Service
public class PersonalInfoService {

    @Autowired
    private PersonalInfoRepository personalInfoRepo;

    public PersonalInfoService() {
    }

    public Iterable<PersonalInfo> getPersonalInfo() {
        return personalInfoRepo.findAll();
    }

}
