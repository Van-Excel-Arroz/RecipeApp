import { createTheme } from '@mui/material/styles';

function createCustomTheme(themeMode) {
  return createTheme({
    typography: {
      fontFamily: ['Raleway', 'sans-serif'].join(','),
    },
    palette: {
      mode: themeMode,
      primary: {
        main: '#ffdbb6',
      },
      secondary: {
        main: '#ffcca2',
      },
      tertiary: {
        main: '#ff9d8b',
      },
    },
  });
}

export default createCustomTheme;
