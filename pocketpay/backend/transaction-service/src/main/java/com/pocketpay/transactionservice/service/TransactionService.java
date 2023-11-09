package com.pocketpay.transactionservice.service;

import com.pocketpay.transactionservice.dto.TransactionDTO;

import java.util.*;

public interface TransactionService {
    TransactionDTO createTransaction(Integer userId,TransactionDTO transactionDTO);

    List<TransactionDTO> getTransactionsByUserId(int userId);

    TransactionDTO updateTransaction(int transactionId, TransactionDTO transactionDTO);
}
