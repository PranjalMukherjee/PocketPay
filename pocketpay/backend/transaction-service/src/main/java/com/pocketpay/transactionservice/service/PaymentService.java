package com.pocketpay.transactionservice.service;

import com.pocketpay.transactionservice.dto.PaymentDTO;
import com.pocketpay.transactionservice.entity.PaymentMode;

import java.util.*;

public interface PaymentService {
    List<PaymentDTO> getUserPayments(int userId, PaymentMode paymentMode);

    PaymentDTO getPaymentById(Integer id);
}
