package com.pocketpay.businessservice.service;


import com.pocketpay.businessservice.dao.BusinessOwnerRepository;
import com.pocketpay.businessservice.dto.BusinessOwnerDto;
import com.pocketpay.businessservice.entity.BusinessOwner;
import com.pocketpay.businessservice.enums.BusinessUserType;
import com.pocketpay.businessservice.mapper.BusinessOwnerMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import java.util.Date;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class BusinessOwnerServiceImplTest {

    @InjectMocks
    private BusinessOwnerServiceImpl businessOwnerService;

    @Mock
    private BusinessOwnerRepository businessOwnerRepository;
    @Mock
    private BusinessOwnerMapper businessOwnerMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateBusinessOwner() {
        BusinessOwnerDto businessOwner = BusinessOwnerDto.builder()
                .id(1)
                .firstName("John")
                .lastName("Doe")
                .dob(new Date())
                .country("USA")
                .businessUserType(BusinessUserType.DIRECTOR)
                .businessId(100)
                .build();

        assertNotNull(businessOwner);
        assertEquals(1, businessOwner.getId());
        assertEquals("John", businessOwner.getFirstName());
        assertEquals("Doe", businessOwner.getLastName());
        assertEquals("USA", businessOwner.getCountry());
        assertEquals(BusinessUserType.DIRECTOR, businessOwner.getBusinessUserType());
        assertEquals(100, businessOwner.getBusinessId());
    }


    @Test
    void testSaveBusinessOwner() {
        BusinessOwnerDto businessOwnerDto = BusinessOwnerDto.builder()
                .id(1)
                .firstName("John")
                .lastName("Doe")
                .dob(new Date())
                .country("USA")
                .businessUserType(BusinessUserType.DIRECTOR)
                .businessId(100)
                .build();
        BusinessOwner businessOwner = BusinessOwner.builder()
                .id(1)
                .firstName("John")
                .lastName("Doe")
                .dob(new Date())
                .country("USA")
                .businessUserType(BusinessUserType.DIRECTOR)
                .businessId(100)
                .build();
        when(businessOwnerMapper.convertDtoToEntity(businessOwnerDto)).thenReturn(businessOwner);


        when(businessOwnerRepository.save(businessOwner)).thenReturn(businessOwner);
        when(businessOwnerMapper.convertEntityToDto(businessOwner)).thenReturn(businessOwnerDto);

        BusinessOwnerDto result = businessOwnerService.saveBusinessOwner(businessOwnerDto);


        assertNotNull(result);
    }

}
