package com.pocketpay.transactionservice.controller;

import com.pocketpay.transactionservice.dto.PaymentDTO;
import com.pocketpay.transactionservice.entity.PaymentMode;
import com.pocketpay.transactionservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/transaction/payments")
public class PaymentController {
    private final PaymentService paymentService;

    @GetMapping("/users/{userId}")
    public List<PaymentDTO> getPaymentsByUserId(@PathVariable Integer userId, @RequestParam PaymentMode paymentMode) {
        return paymentService.getUserPayments(userId, paymentMode);
    }

    @GetMapping("/{id}")
    public PaymentDTO getPaymentById(@PathVariable Integer id) {
        return paymentService.getPaymentById(id);
    }
}
