package com.pocketpay.businessservice.service;

import com.pocketpay.businessservice.dao.BusinessOwnerRepository;
import com.pocketpay.businessservice.entity.BusinessOwner;
import com.pocketpay.businessservice.mapper.BusinessOwnerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pocketpay.businessservice.dto.BusinessOwnerDto;

@Service
public class BusinessOwnerServiceImpl implements BusinessOwnerService {

    private BusinessOwnerRepository businessOwnerRepository;

    private BusinessOwnerMapper businessOwnerMapper;

    @Autowired
    public BusinessOwnerServiceImpl(BusinessOwnerRepository businessOwnerRepository, BusinessOwnerMapper businessOwnerMapper) {
        this.businessOwnerRepository = businessOwnerRepository;
        this.businessOwnerMapper = businessOwnerMapper;
    }

    @Override
    public BusinessOwnerDto saveBusinessOwner(BusinessOwnerDto businessOwnerDto) {
        BusinessOwner businessOwner = businessOwnerMapper.convertDtoToEntity(businessOwnerDto);
        BusinessOwner saveBusinessOwner = businessOwnerRepository.save(businessOwner);
        return businessOwnerMapper.convertEntityToDto(saveBusinessOwner);
    }
}
