package com.pocketpay.transactionservice.dto;

import com.pocketpay.transactionservice.entity.BankPayment;
import com.pocketpay.transactionservice.entity.DebitCardPayment;
import com.pocketpay.transactionservice.entity.PaymentMode;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentDTO {
    private Integer id;
    private PaymentMode paymentMode;
    private DebitCardPayment debitCardPayment;
    private BankPayment bankPayment;
}
