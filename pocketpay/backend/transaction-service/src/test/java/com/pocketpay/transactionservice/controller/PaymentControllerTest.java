package com.pocketpay.transactionservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pocketpay.transactionservice.dto.PaymentDTO;
import com.pocketpay.transactionservice.service.impl.PaymentServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

@WebMvcTest(value = PaymentController.class, excludeAutoConfiguration = {SecurityAutoConfiguration.class})
class PaymentControllerTest {
    @MockBean
    private PaymentServiceImpl paymentService;

    @Autowired
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    PaymentDTO paymentDTO = PaymentDTO.builder().id(1).build();
    List<PaymentDTO> paymentDTOList = Collections.singletonList(paymentDTO);

    @Test
    void givenUserIdAndPaymentMode_thenReturnPaymentsList() throws Exception {
        when(paymentService.getUserPayments(anyInt(), any())).thenReturn(paymentDTOList);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/transaction/payments/users/125?paymentMode=CARD")
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(paymentDTOList)));
    }

    @Test
    void givenPaymentId_whenIdExists_thenReturnPayment() throws Exception {
        when(paymentService.getPaymentById(anyInt())).thenReturn(paymentDTO);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/transaction/payments/1")
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(paymentDTO)));
    }
}
