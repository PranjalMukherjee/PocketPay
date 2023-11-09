package com.pocketpay.businessservice.dao;


import com.pocketpay.businessservice.entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusinessRepository extends JpaRepository<Business, Integer> {
    List<Business> findByUserId(int userId);
}
