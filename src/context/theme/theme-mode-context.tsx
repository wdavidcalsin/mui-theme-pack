import { getDesignTokens } from '@/styles';
import {
  type IThemeModeContext,
  type themeMode,
  type ThemeProps,
} from '@/types';
import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';

export const colorModeContext = React.createContext<IThemeModeContext>({
  toggleColorMode: () => null,
  mode: 'light',
});

export const ThemeContextProvider: React.FC<ThemeProps> = ({
  children,
  nameTheme = 'navy-blue',
}) => {
  const [mode, setMode] = React.useState<themeMode>('light');

  const colorMode = React.useMemo(
    (): IThemeModeContext => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(mode, nameTheme)),
    [mode]
  );

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  );
};
