'use client';

import IconButton from '@mui/material/IconButton';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeHelper } from '@context';

export const SwitchTheme: React.FC = () => {
  const { isDark, toggleTheme } = useThemeHelper();
  return (
    <IconButton onClick={toggleTheme}>
      {isDark ? <NightlightRoundIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
