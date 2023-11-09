package com.pocketpay.businessservice.controller;

import com.pocketpay.businessservice.dto.BusinessOwnerDto;
import com.pocketpay.businessservice.service.BusinessOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/business/businessOwner")
public class BusinessOwnerController {

    private BusinessOwnerService businessOwnerService;

    @Autowired
    public BusinessOwnerController(BusinessOwnerService businessOwnerService) {
        this.businessOwnerService = businessOwnerService;
    }

    @PostMapping
    public ResponseEntity<BusinessOwnerDto> saveBusinessOwner(@RequestBody BusinessOwnerDto businessOwnerDto) {
        BusinessOwnerDto savedBusinessOwnerDto = businessOwnerService.saveBusinessOwner(businessOwnerDto);
        return new ResponseEntity<>(savedBusinessOwnerDto, HttpStatus.CREATED);
    }

}
