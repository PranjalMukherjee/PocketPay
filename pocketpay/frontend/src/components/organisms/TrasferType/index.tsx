import { Stack } from '@mui/material';
import React, { useState } from 'react';
import TypographyComponent from '../../atoms/Typography';
import PaymentCard from '../../molecules/PaymentSelectionOption';
import theme from '../../../theme';
import transfertype from '../../../../public/assets/icons/pillar.svg';
import card from '../../../../public/assets/icons/card.svg';
import swift from '../../../../public/assets/icons/swift.svg';
import { ARRIVAL_DESCRIPTION, CARD_DESCRIPTION, CARD_HEADER } from '../../../utils/constants';
import { DownBox, InnerBox, OuterBox, UpBox } from '../../../utils/styledComponents';
export interface PaymentOptionsProps {
  onRadioChange?: (value: string) => void;
}

const TransferType = (props: PaymentOptionsProps) => {
  const [selectedRadioValue, setSelectedRadioValue] = useState('');

  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(event.target.value);
    props.onRadioChange?.(event.target.value);
  };

  return (
    <OuterBox data-testid="PaymentOptions">
      <Stack>
        <TypographyComponent
          variant={'h1'}
          color={theme.palette.text.highEmphasis}
          children={'Choose your transfer type'}
        />
      </Stack>
      <InnerBox>
        <Stack spacing={'3vh'}>
          <TypographyComponent
            variant="caption"
            color={theme.palette.text.mediumEmphasis}
            children={' Fast and easy transfer'}
          />
          <UpBox>
            <PaymentCard
              icon={card}
              cardHeader={CARD_HEADER[0]}
              value="debit"
              isSelected={selectedRadioValue === 'debit'}
              cardDescription={CARD_DESCRIPTION[0]}
              arrivalDescription={ARRIVAL_DESCRIPTION}
              onChange={radioChangeHandler}
              data-testid={'debitcard-pay'}
            />

            <PaymentCard
              icon={card}
              cardHeader={CARD_HEADER[1]}
              value="credit"
              isSelected={selectedRadioValue === 'credit'}
              cardDescription={CARD_DESCRIPTION[0]}
              arrivalDescription={ARRIVAL_DESCRIPTION}
              onChange={radioChangeHandler}
              data-testid={'lloydsBank-pay'}
            />
          </UpBox>
        </Stack>
        <DownBox>
          <TypographyComponent
            variant="caption"
            color={theme.palette.text.mediumEmphasis}
            children={'Low cost transfer'}
          />
          <PaymentCard
            cardHeader={CARD_HEADER[2]}
            icon={transfertype}
            value="bank"
            isSelected={selectedRadioValue === 'bank'}
            onChange={radioChangeHandler}
            cardDescription={CARD_DESCRIPTION[1]}
            arrivalDescription={ARRIVAL_DESCRIPTION}
          />
        </DownBox>
        <DownBox>
          <TypographyComponent
            variant="caption"
            color={theme.palette.text.mediumEmphasis}
            children={'Account transfer'}
          />

          <PaymentCard
            icon={swift}
            value="swift"
            isSelected={selectedRadioValue === 'swift'}
            cardHeader={CARD_HEADER[3]}
            cardDescription={CARD_DESCRIPTION[2]}
            arrivalDescription={ARRIVAL_DESCRIPTION}
            onChange={radioChangeHandler}
          />
        </DownBox>
      </InnerBox>
    </OuterBox>
  );
};

export default TransferType;
