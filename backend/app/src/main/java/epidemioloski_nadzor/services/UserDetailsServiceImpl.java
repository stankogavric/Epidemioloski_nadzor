package epidemioloski_nadzor.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import epidemioloski_nadzor.models.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserService userService;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
		Optional<User> oUser = userService.getUserById(id);
		
		if(oUser.isPresent()) {
            User user = oUser.get();
			ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();

			grantedAuthorities.add(new SimpleGrantedAuthority(user.getRole()));
			
			return new org.springframework.security.core.userdetails.User(user.getPersonalInfo().getPhone(), user.getPin(), grantedAuthorities);
		}
		
		return null;
	}
}