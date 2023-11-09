package com.pocketpay.userservice.repository;

import com.pocketpay.userservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
     Optional<User> findByEmail(String email);
     User getUserByEmail(String email);
}
