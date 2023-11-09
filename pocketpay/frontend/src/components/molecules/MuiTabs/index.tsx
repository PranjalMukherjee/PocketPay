import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import theme from '../../../theme';

export interface MuiTabsProps {
  variant?: 'standard' | 'scrollable' | 'fullWidth';
  tabNames: string[];
  sxProps?: any;
  selectedColor?: string;
  backgroundColor?: string;
  notSelectedColor?: string;
  borderBottom?: string;
  isTabDisabled?: boolean;
  onSelectTab?: (tabName: string) => void;
  selectedTab: string;
}

const MuiTabs: React.FC<MuiTabsProps> = ({
  variant = 'standard',
  tabNames,
  sxProps,
  selectedColor,
  backgroundColor,
  notSelectedColor,
  borderBottom,
  isTabDisabled = false,
  onSelectTab,
  selectedTab
}) => {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onSelectTab(tabNames[newValue]);
  };

  const selectedTabIndex = tabNames.indexOf(selectedTab);

  return (
    <Box
      sx={{
        width: '100%',
        ...sxProps,
        backgroundColor: backgroundColor,
        '& .MuiTab-root': { ...theme.typography.caption },
        borderBottom: 1, 
        borderColor: theme.palette.Greys.stroke,
        
      }}
      data-testid="mui-tabs">
      <Tabs value={selectedTabIndex} onChange={handleChange} variant={variant} sx={{marginLeft:"50px"}}>
        {tabNames.map((name) => (
          <Tab
            key={name}
            label={name}
            disabled={isTabDisabled}
            sx={{
              height: '100%',
              maxHeight: '100%',
              textTransform: 'none',
              fontWeight: '600',
              color: notSelectedColor,
              borderBottom: borderBottom,
              fontSize: '14px',
              '&.Mui-selected': { color: selectedColor }
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MuiTabs;
