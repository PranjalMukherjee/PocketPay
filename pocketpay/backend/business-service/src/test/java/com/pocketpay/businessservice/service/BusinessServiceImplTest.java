package com.pocketpay.businessservice.service;


import com.pocketpay.businessservice.dao.BusinessRepository;
import com.pocketpay.businessservice.dto.BusinessDto;
import com.pocketpay.businessservice.entity.Business;
import com.pocketpay.businessservice.mapper.BusinessMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class BusinessServiceImplTest {

    @InjectMocks
    private BusinessServiceImpl businessService;

    @Mock
    private BusinessRepository businessRepository;
    @Mock
    private BusinessMapper businessMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateBusiness() {
        BusinessDto business = BusinessDto.builder()
                .id(1)
                .name("Sample Business")
                .registrationNo("12345")
                .address("123 Main St")
                .businessCategory("Retail")
                .subCategory("Clothing")
                .businessSize("10-50")
                .build();

        assertNotNull(business);
        assertEquals(1, business.getId());
        assertEquals("Sample Business", business.getName());
        assertEquals("12345", business.getRegistrationNo());
        assertEquals("123 Main St", business.getAddress());
        assertEquals("Retail", business.getBusinessCategory());
        assertEquals("Clothing", business.getSubCategory());
        assertEquals("10-50", business.getBusinessSize());
    }


    @Test
    void testSaveBusiness() {
        BusinessDto businessDto = BusinessDto.builder()
                .id(1)
                .name("Sample Business")
                .registrationNo("12345")
                .address("123 Main St")
                .businessCategory("Retail")
                .subCategory("Clothing")
                .businessSize("10-50")
                .build();
        Business business = Business.builder()
                .id(1)
                .name("Sample Business")
                .registrationNo("12345")
                .address("123 Main St")
                .businessCategory("Retail")
                .subCategory("Clothing")
                .businessSize("10-50")
                .build();
        when(businessMapper.convertDtoToEntity(businessDto)).thenReturn(business);

        when(businessRepository.save(business)).thenReturn(business);
        when(businessMapper.convertEntityToDto(business)).thenReturn(businessDto);
        BusinessDto result = businessService.saveBusiness(businessDto);

        assertNotNull(result);
    }
}
