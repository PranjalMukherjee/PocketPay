import React from 'react';
import { render,screen } from '@testing-library/react';
import IconComponent from './index';
import BANK_ICON from './../../../public/assets/icons/BankIcon.svg';
import { ICON_ALT_TEXT } from  '../../../utils/constants';

it('should render icon',()=>{
    render(<IconComponent src={BANK_ICON} height="20.02px" width="18px" padding="10px" alt={ICON_ALT_TEXT}/>);
    const icon = screen.getByTestId("iconComponent");
    expect(icon).toBeDefined();
})
