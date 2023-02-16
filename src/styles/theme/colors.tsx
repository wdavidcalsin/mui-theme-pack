import { type IColors, type IColorsMode } from '@/types';

export const colorNavyBlueLight: IColors = {
  primary_main: '#222831',
  secondary_main: '#EEEEEE',
  secondary_contrastText: '#222831',
  custom_primary_text: '#6B6F75',
  custom_secondary_text: '#00ADB5',
  custom_border: '#6B6F75',
};

export const colorNavyBlueDark: IColors = {
  primary_main: '#EEEEEE',
  secondary_main: '#222831',
  secondary_contrastText: '#EEEEEE',
  custom_primary_text: '#434850',
  custom_secondary_text: '#00ADB5',
  custom_border: '#434850',
};

export const colorNavyBlue: IColorsMode = {
  light: colorNavyBlueLight,
  dark: colorNavyBlueDark,
};

export const colorLightOrangeLight: IColors = {
  primary_main: '#FF7C55',
  secondary_main: '#FFD570',
  secondary_contrastText: '#FF7C55',
  custom_primary_text: '#FFB26C',
  custom_secondary_text: '#E64A1C',
  custom_border: '#FFB26C',
};

export const colorLightOrangeDark: IColors = {
  primary_main: '#FFD570',
  secondary_main: '#FF7C55',
  secondary_contrastText: '#FFD570',
  custom_primary_text: '#939B63',
  custom_secondary_text: '#E64A1C',
  custom_border: '#939B63',
};

export const colorLightOrange: IColorsMode = {
  light: colorLightOrangeLight,
  dark: colorLightOrangeDark,
};
