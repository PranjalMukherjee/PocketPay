package com.pocketpay.businessservice.controller;


import com.pocketpay.businessservice.dto.BusinessDto;
import com.pocketpay.businessservice.service.BusinessService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


class BusinessControllerTest {

    @InjectMocks
    private BusinessController businessController;

    @Mock
    private BusinessService businessService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testSaveBusiness() {
        BusinessDto inputBusinessDto = new BusinessDto();
        BusinessDto savedBusinessDto = new BusinessDto();

        when(businessService.saveBusiness(inputBusinessDto)).thenReturn(savedBusinessDto);

        ResponseEntity<BusinessDto> response = businessController.saveBusiness(inputBusinessDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedBusinessDto, response.getBody());
    }
    @Test
    void testGetBusinessByUserId() {
        int userId = 1;
        List<BusinessDto> mockBusinessDtoList = new ArrayList<>();
        mockBusinessDtoList.add(new BusinessDto());

        when(businessService.getBusinessByUserId(userId)).thenReturn(mockBusinessDtoList);

        ResponseEntity<List<BusinessDto>> response = businessController.getBusinessByUserId(userId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockBusinessDtoList, response.getBody());
    }
}
