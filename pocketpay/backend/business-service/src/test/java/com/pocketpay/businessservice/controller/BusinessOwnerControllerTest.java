package com.pocketpay.businessservice.controller;

import com.pocketpay.businessservice.dto.BusinessOwnerDto;
import com.pocketpay.businessservice.service.BusinessOwnerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class BusinessOwnerControllerTest {

    @InjectMocks
    private BusinessOwnerController businessOwnerController;

    @Mock
    private BusinessOwnerService businessOwnerService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSaveBusinessOwner() {
        BusinessOwnerDto inputBusinessOwnerDto = new BusinessOwnerDto();
        BusinessOwnerDto savedBusinessOwnerDto = new BusinessOwnerDto();

        when(businessOwnerService.saveBusinessOwner(inputBusinessOwnerDto)).thenReturn(savedBusinessOwnerDto);

        ResponseEntity<BusinessOwnerDto> response = businessOwnerController.saveBusinessOwner(inputBusinessOwnerDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedBusinessOwnerDto, response.getBody());
    }
}
