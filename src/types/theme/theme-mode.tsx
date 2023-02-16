export type themeMode = 'dark' | 'light';

export type ListNameTheme = 'navy-blue' | 'light-orange';

export type IListOfColor = Record<string, IColorsMode> & {
  [K in ListNameTheme]: IColorsMode;
};

export interface IThemeModeContext {
  toggleColorMode: () => void;
  mode: themeMode;
}

export interface ThemeProps {
  children: React.ReactNode;
  nameTheme: ListNameTheme;
}

export interface IColors {
  primary_main: string;
  secondary_main: string;
  secondary_contrastText: string;
  custom_primary_text: string;
  custom_secondary_text: string;
  custom_border: string;
}

export interface IColorsMode {
  dark: IColors;
  light: IColors;
}
