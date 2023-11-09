package com.pocketpay.businessservice.controller;

import com.pocketpay.businessservice.dto.TradingAddressDto;
import com.pocketpay.businessservice.service.TradingAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/business/tradeAddress")
public class TradingAddressController {

    private TradingAddressService tradingAddressService;

    @Autowired
    public TradingAddressController(TradingAddressService tradingAddressService) {
        this.tradingAddressService = tradingAddressService;
    }

    @PostMapping
    public ResponseEntity<TradingAddressDto> saveTradingAddress(@RequestBody TradingAddressDto tradingAddressDto) {
        TradingAddressDto savedTradingAddressDto = tradingAddressService.saveTradingAddress(tradingAddressDto);
        return new ResponseEntity<>(savedTradingAddressDto, HttpStatus.CREATED);
    }

}
