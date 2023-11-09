package com.pocketpay.transactionservice.controller;

import com.pocketpay.transactionservice.dto.TransactionDTO;
import com.pocketpay.transactionservice.service.TransactionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/transaction")
public class TransactionController {
    private final TransactionService transactionService;

    @GetMapping("/{user_id}")
    public List<TransactionDTO> getTransactionsByUserId(@PathVariable Integer user_id) {
        log.info(String.format("GET: /transactions, User-Id: %d", user_id));
        return transactionService.getTransactionsByUserId(user_id);
    }

    @PostMapping("/{userId}")
    @ResponseStatus(HttpStatus.CREATED)
    public TransactionDTO createTransaction(@PathVariable Integer userId,@RequestBody TransactionDTO transactionDTO) {
        log.info(String.format("POST: /transactions, RequestBody: %s", transactionDTO));
        return transactionService.createTransaction(userId,transactionDTO);
    }

    @PatchMapping("/{id}")
    public TransactionDTO updateTransaction(@PathVariable Integer id, @RequestBody TransactionDTO transactionDTO) {
        log.info(String.format("PATCH: /transactions/%d , RequestBody: %s",id,transactionDTO));
        return transactionService.updateTransaction(id, transactionDTO);
    }

}
