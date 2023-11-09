package com.pocketpay.userservice.mapper;

import com.pocketpay.userservice.dto.UserDTO;
import com.pocketpay.userservice.entity.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceMapper {
    @Autowired
    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }
    public static User convertDtoToEntity(UserDTO userDTO){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(userDTO, User.class);
    }
    public static UserDTO convertEntityToDto(User user){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(user, UserDTO.class);
    }

}
