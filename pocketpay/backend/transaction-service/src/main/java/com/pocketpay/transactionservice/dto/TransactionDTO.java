package com.pocketpay.transactionservice.dto;


import com.pocketpay.transactionservice.entity.TransactionStatus;
import lombok.*;

import java.util.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class TransactionDTO {
    private Integer id;
    private Double senderAmount;
    private String senderCurrency;
    private String receiverCurrency;
    private Double receiverAmount;
    private String purpose;
    private Date date;
    private String transferNumber;
    private TransactionStatus status;
    private Integer paymentId;
    private RecipientDTO recipient;
}
