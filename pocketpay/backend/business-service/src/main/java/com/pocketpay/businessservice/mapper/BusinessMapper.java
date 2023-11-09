package com.pocketpay.businessservice.mapper;

import com.pocketpay.businessservice.dto.BusinessDto;
import com.pocketpay.businessservice.entity.Business;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BusinessMapper {
    private final ModelMapper modelMapper;

    public BusinessMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Business convertDtoToEntity(BusinessDto businessDto){
        return modelMapper.map(businessDto, Business.class);
    }
    public BusinessDto convertEntityToDto(Business business){
        return modelMapper.map(business, BusinessDto.class);
    }
    public  List<BusinessDto> entityToDto(List<Business> businesses){
        return businesses.stream().map(business -> modelMapper.map(business, BusinessDto.class)).toList();
    }
}
