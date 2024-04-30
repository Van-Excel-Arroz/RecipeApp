import { CssBaseline, ThemeProvider } from '@mui/material';
import RecipeNavbar from './RecipeNavbar';

import { useState } from 'react';
import createCustomTheme from './utils/createTheme';

export default function RecipeLayout({ children }) {
  const [themeMode, setThemeMode] = useState('light');
  const theme = createCustomTheme(themeMode);

  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecipeNavbar theme={themeMode} onThemeChange={handleThemeChange} />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
