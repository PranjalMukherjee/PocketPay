package com.pocketpay.businessservice.service;

import com.pocketpay.businessservice.dao.BusinessRepository;
import com.pocketpay.businessservice.dto.BusinessDto;
import com.pocketpay.businessservice.entity.Business;
import com.pocketpay.businessservice.mapper.BusinessMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessServiceImpl implements BusinessService {

    private BusinessRepository businessRepository;

    private BusinessMapper businessMapper;

    @Autowired
    public BusinessServiceImpl(BusinessRepository businessRepository, BusinessMapper businessMapper) {
        this.businessRepository = businessRepository;
        this.businessMapper = businessMapper;
    }

    @Override
    public BusinessDto saveBusiness(BusinessDto businessDto) {
        Business business = businessMapper.convertDtoToEntity(businessDto);
        Business saveBusiness = businessRepository.save(business);
        return businessMapper.convertEntityToDto(saveBusiness);
    }
    @Override
    public List<BusinessDto> getBusinessByUserId(int userId) {
        List<Business> businesses = businessRepository.findByUserId(userId);
        return businessMapper.entityToDto(businesses);
    }
}
