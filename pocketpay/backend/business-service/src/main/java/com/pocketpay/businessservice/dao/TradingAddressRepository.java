package com.pocketpay.businessservice.dao;


import com.pocketpay.businessservice.entity.TradingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradingAddressRepository extends JpaRepository<TradingAddress, Integer> {
}
