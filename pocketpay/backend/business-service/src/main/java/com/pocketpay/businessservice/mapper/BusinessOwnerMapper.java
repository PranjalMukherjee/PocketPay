package com.pocketpay.businessservice.mapper;

import com.pocketpay.businessservice.dto.BusinessOwnerDto;
import com.pocketpay.businessservice.entity.BusinessOwner;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class BusinessOwnerMapper {
    private final ModelMapper modelMapper;

    public BusinessOwnerMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public  BusinessOwner convertDtoToEntity(BusinessOwnerDto businessOwnerDto) {
        return modelMapper.map(businessOwnerDto, BusinessOwner.class);
    }

    public  BusinessOwnerDto convertEntityToDto(BusinessOwner businessOwner) {
        return modelMapper.map(businessOwner, BusinessOwnerDto.class);
    }
}
