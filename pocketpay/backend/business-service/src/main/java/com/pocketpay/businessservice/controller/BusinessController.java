package com.pocketpay.businessservice.controller;

import com.pocketpay.businessservice.dto.BusinessDto;
import com.pocketpay.businessservice.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/business")
public class BusinessController {

    private BusinessService businessService;

    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @PostMapping("/")
    public ResponseEntity<BusinessDto> saveBusiness(@RequestBody BusinessDto businessDto) {
        BusinessDto savedBusinessDto = businessService.saveBusiness(businessDto);
        return new ResponseEntity<>(savedBusinessDto, HttpStatus.CREATED);
    }
    @GetMapping("/{userId}")
    public ResponseEntity<List<BusinessDto>> getBusinessByUserId(@PathVariable Integer userId) {
        List<BusinessDto> businessDto = businessService.getBusinessByUserId(userId);
        return new ResponseEntity<>(businessDto, HttpStatus.OK);
    }

}
