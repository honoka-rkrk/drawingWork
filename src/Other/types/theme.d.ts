import {} from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    red?: CstmPaletteColorOptions;
    orange?: CstmPaletteColorOptions;
    yellow?: CstmPaletteColorOptions;
    green?: CstmPaletteColorOptions;
    blue?: CstmPaletteColorOptions;
    purple?: CstmPaletteColorOptions;
    darkGreen?: CstmPaletteColorOptions;
    darkBlue?: CstmPaletteColorOptions;
    white?: CstmPaletteColorOptions;
    settings?: CstmPaletteColorOptions;
  }
  interface Palette {
    red: CstmPaletteColor;
    orange: CstmPaletteColor;
    yellow: CstmPaletteColor;
    green: CstmPaletteColor;
    blue: CstmPaletteColor;
    purple: CstmPaletteColor;
    darkGreen: CstmPaletteColor;
    darkBlue: CstmPaletteColor;
    white: CstmPaletteColor;
    settings: CstmPaletteColor;
  }
  interface CstmPaletteColorOptions {
    main: string;
    second?: string;
    disabled?: string;
    dark?: string;
  }
  interface CstmPaletteColor {
    main: string;
    second?: string;
    disabled?: string;
    dark?: string;
  }
}
