package com.pocketpay.businessservice.service;


import com.pocketpay.businessservice.dao.TradingAddressRepository;
import com.pocketpay.businessservice.dto.TradingAddressDto;
import com.pocketpay.businessservice.entity.TradingAddress;
import com.pocketpay.businessservice.mapper.TradingAddressMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TradingAddressServiceImpl implements TradingAddressService {

    private TradingAddressRepository tradingAddressRepository;

    private TradingAddressMapper tradingAddressMapper;

    @Autowired
    public TradingAddressServiceImpl(TradingAddressRepository tradingAddressRepository, TradingAddressMapper tradingAddressMapper) {
        this.tradingAddressRepository = tradingAddressRepository;
        this.tradingAddressMapper = tradingAddressMapper;
    }

    @Override
    public TradingAddressDto saveTradingAddress(TradingAddressDto tradingAddressDto) {
        TradingAddress tradingAddress = tradingAddressMapper.convertDtoToEntity(tradingAddressDto);
        TradingAddress saveTradingAddress = tradingAddressRepository.save(tradingAddress);
        return tradingAddressMapper.convertEntityToDto(saveTradingAddress);
    }
}
