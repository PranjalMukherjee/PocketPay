package com.pocketpay.transactionservice.service.impl;

import com.pocketpay.transactionservice.dto.PaymentDTO;
import com.pocketpay.transactionservice.entity.Payment;
import com.pocketpay.transactionservice.entity.PaymentMode;
import com.pocketpay.transactionservice.exception.RecordNotFoundException;
import com.pocketpay.transactionservice.mapper.PaymentMapper;
import com.pocketpay.transactionservice.repository.PaymentRepository;
import com.pocketpay.transactionservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepository paymentRepository;

    @Override
    public List<PaymentDTO> getUserPayments(int userId, PaymentMode paymentMode) {
        return PaymentMapper.entityToDTO(paymentRepository.findByUserIdAndPaymentMode(userId, paymentMode));
    }

    @Override
    public PaymentDTO getPaymentById(Integer id) {
        Payment payment = paymentRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Payment not found by id:" + id));
        return PaymentMapper.entityToDTO(payment);
    }
}
