import { type IColorsMode, type IListOfColor, type themeMode } from '@/types';
import { type ThemeOptions } from '@mui/material';
import { colorLightOrange, colorNavyBlue } from './colors';

const ListOfColors: IListOfColor = {
  'navy-blue': colorNavyBlue,
  'light-orange': colorLightOrange,
};

export const getDesignTokens = (
  mode: themeMode,
  modeColor: string = 'navy-blue'
): ThemeOptions => {
  const selectedColor: IColorsMode = ListOfColors[modeColor];

  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: selectedColor.light.primary_main,
            },
            secondary: {
              main: selectedColor.light.secondary_main,
              contrastText: selectedColor.light.secondary_contrastText,
            },
            custom: {
              text_primary: selectedColor.light.custom_primary_text,
              text_secondary: selectedColor.light.custom_secondary_text,
              border: selectedColor.light.custom_border,
            },
          }
        : {
            primary: {
              main: selectedColor.dark.primary_main,
            },
            secondary: {
              main: selectedColor.dark.secondary_main,
              contrastText: selectedColor.dark.secondary_contrastText,
            },
            custom: {
              text_primary: selectedColor.dark.custom_primary_text,
              text_secondary: selectedColor.dark.custom_secondary_text,
              border: selectedColor.dark.custom_border,
            },
          }),
    },
    typography: {
      fontFamily: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ].join(','),
    },
  };
};
