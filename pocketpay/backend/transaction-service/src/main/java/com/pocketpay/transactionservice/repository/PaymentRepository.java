package com.pocketpay.transactionservice.repository;

import com.pocketpay.transactionservice.entity.Payment;
import com.pocketpay.transactionservice.entity.PaymentMode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;
@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    List<Payment> findByUserIdAndPaymentMode(int userId, PaymentMode paymentMode);
}
