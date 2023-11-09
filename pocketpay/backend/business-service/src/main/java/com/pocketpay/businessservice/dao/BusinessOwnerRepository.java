package com.pocketpay.businessservice.dao;


import com.pocketpay.businessservice.entity.BusinessOwner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessOwnerRepository extends JpaRepository<BusinessOwner,Integer> {
}
