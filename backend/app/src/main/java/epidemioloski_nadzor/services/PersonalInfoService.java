package epidemioloski_nadzor.services;

import java.util.Optional;

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

    public Optional<PersonalInfo> getPersonalInfoById(Long id) {
        return personalInfoRepo.findById(id);
    }

    public void addPersonalInfo(PersonalInfo personalInfo) {
        personalInfoRepo.save(personalInfo);
    }

    public void removePersonalInfo(Long id) {
        Optional<PersonalInfo> personalInfo = personalInfoRepo.findById(id);
        personalInfoRepo.delete(personalInfo.get());
    }

    public void updatePersonalInfo(Long id, PersonalInfo personalInfo) {
        Optional<PersonalInfo> Per = personalInfoRepo.findById(id);
        if(Per.isPresent()) {
            personalInfo.setId(Per.get().getId());
            personalInfoRepo.save(personalInfo);
        }
    }

}
