package com.pocketpay.businessservice.service;


import com.pocketpay.businessservice.dao.TradingAddressRepository;
import com.pocketpay.businessservice.dto.TradingAddressDto;
import com.pocketpay.businessservice.entity.TradingAddress;
import com.pocketpay.businessservice.mapper.TradingAddressMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class TradingAddressServiceImplTest {

    @InjectMocks
    private TradingAddressServiceImpl tradingAddressService;

    @Mock
    private TradingAddressRepository tradingAddressRepository;
    @Mock
    private TradingAddressMapper tradingAddressMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateTradingAddress() {
        TradingAddressDto tradingAddress = TradingAddressDto.builder()
                .id(1)
                .address("123 Main St")
                .businessId(100)
                .build();
        assertNotNull(tradingAddress);
        assertEquals(1, tradingAddress.getId());
        assertEquals("123 Main St", tradingAddress.getAddress());
        assertEquals(100, tradingAddress.getBusinessId());
    }


    @Test
    void testSaveTradingAddress() {

        TradingAddressDto tradingAddressDto = TradingAddressDto.builder()
                .id(1)
                .address("123 Main St")
                .businessId(100)
                .build();
        TradingAddress tradingAddress = TradingAddress.builder()
                .id(1)
                .address("123 Main St")
                .businessId(100)
                .build();
        when(tradingAddressMapper.convertDtoToEntity(tradingAddressDto)).thenReturn(tradingAddress);
        when(tradingAddressRepository.save(tradingAddress)).thenReturn(tradingAddress);
        when(tradingAddressMapper.convertEntityToDto(tradingAddress)).thenReturn(tradingAddressDto);
        TradingAddressDto result = tradingAddressService.saveTradingAddress(tradingAddressDto);

        assertNotNull(result);
    }
}
