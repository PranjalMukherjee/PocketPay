package com.pocketpay.businessservice.controller;



import com.pocketpay.businessservice.dto.TradingAddressDto;
import com.pocketpay.businessservice.service.TradingAddressService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class TradingAddressControllerTest {

    @InjectMocks
    private TradingAddressController tradingAddressController;

    @Mock
    private TradingAddressService tradingAddressService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSaveTradingAddress() {
        TradingAddressDto inputTradingAddressDto = new TradingAddressDto();
        TradingAddressDto savedTradingAddressDto = new TradingAddressDto();

        when(tradingAddressService.saveTradingAddress(inputTradingAddressDto)).thenReturn(savedTradingAddressDto);

        ResponseEntity<TradingAddressDto> response = tradingAddressController.saveTradingAddress(inputTradingAddressDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedTradingAddressDto, response.getBody());
    }
}
