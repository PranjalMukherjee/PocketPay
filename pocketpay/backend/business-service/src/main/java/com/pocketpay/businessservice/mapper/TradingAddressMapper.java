package com.pocketpay.businessservice.mapper;
import com.pocketpay.businessservice.dto.TradingAddressDto;
import com.pocketpay.businessservice.entity.TradingAddress;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class TradingAddressMapper {
    private final ModelMapper modelMapper;

    public TradingAddressMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public  TradingAddress convertDtoToEntity(TradingAddressDto tradingAddressDto){
        return modelMapper.map(tradingAddressDto, TradingAddress.class);
    }
    public  TradingAddressDto convertEntityToDto(TradingAddress tradingAddress){
        return modelMapper.map(tradingAddress, TradingAddressDto.class);
    }

}
