package com.pocketpay.businessservice.service;
import com.pocketpay.businessservice.dto.BusinessDto;

import java.util.List;

public interface BusinessService {
    BusinessDto saveBusiness(BusinessDto businessDto);

    List<BusinessDto> getBusinessByUserId(int userId);
}
