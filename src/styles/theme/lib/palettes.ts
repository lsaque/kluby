const palettes = {
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  primary: {
    50: '#c1a7f6',
    100: '#ae97f6',
    200: '#9b88f5',
    300: '#8a78f5',
    400: '#7859f4',
    500: '#902bf5',
    600: '#6f21d2',
    700: '#5d1cb4',
    800: '#4c178f',
    900: '#3a1269',
    A100: '#b3aff6',
    A200: '#bca9f7',
    A400: '#c6a4f8',
    A700: '#cf9ff9',
    light: '#ae97f6',
    main: '#902bf5',
    dark: '#5d1cb4',
    contrastText: '#ffffff',
  },
  secondary: {
    50: '#63a5ea',
    100: '#63a5ea',
    200: '#63a5ea',
    300: '#c0dbf6',
    400: '#63a5ea',
    500: '#63a5ea',
    600: '#5994d2',
    700: '#4f84bb',
    800: '#4573a3',
    900: '#3b638c',
    A100: '#c0dbf6',
    A200: '#d0e4f8',
    A400: '#dfedfa',
    A700: '#eff6fc',
    light: '#c0dbf6',
    main: '#63a5ea',
    dark: '#4f84bb',
    contrastText: '#ffffff',
  },
  success: {
    50: '#34dd1e',
    100: '#34dd1e',
    200: '#34dd1e',
    300: '#adf1a5',
    400: '#34dd1e',
    500: '#34dd1e',
    600: '#2ec61b',
    700: '#29b018',
    800: '#249a15',
    900: '#1f8412',
    A100: '#adf1a5',
    A200: '#c2f4bb',
    A400: '#d6f8d2',
    A700: '#eafbe8',
    light: '#adf1a5',
    main: '#34dd1e',
    dark: '#29b018',
    contrastText: '#ffffff',
  },
  error: {
    50: '#ff515a',
    100: '#ff515a',
    200: '#ff515a',
    300: '#ffb9bd',
    400: '#ff515a',
    500: '#ff515a',
    600: '#e54851',
    700: '#cc4048',
    800: '#b2383e',
    900: '#993036',
    A100: '#ffb9bd',
    A200: '#ffcacd',
    A400: '#ffdcde',
    A700: '#ffedee',
    light: '#ffb9bd',
    main: '#ff515a',
    dark: '#cc4048',
    contrastText: '#ffffff',
  },
  warning: {
    50: '#ffcc00',
    100: '#ffcc00',
    200: '#ffcc00',
    300: '#ffea99',
    400: '#ffcc00',
    500: '#ffcc00',
    600: '#e5b700',
    700: '#cca300',
    800: '#b28e00',
    900: '#997a00',
    A100: '#ffea99',
    A200: '#ffefb2',
    A400: '#fff4cc',
    A700: '#fff9e5',
    light: '#ffea99',
    main: '#ffcc00',
    dark: '#cca300',
    contrastText: '#ffffff',
  },
  info: {
    50: '#5990ff',
    100: '#5990ff',
    200: '#5990ff',
    300: '#bcd2ff',
    400: '#5990ff',
    500: '#5990ff',
    600: '#5081e5',
    700: '#4773cc',
    800: '#3e64b2',
    900: '#355699',
    A100: '#bcd2ff',
    A200: '#cdddff',
    A400: '#dde8ff',
    A700: '#eef3ff',
    light: '#bcd2ff',
    main: '#5990ff',
    dark: '#4773cc',
    contrastText: '#ffffff',
  },
  text: {
    primary: '#000000',
    secondary: '#69707E',
    disabled: '#8D8D8D',
  },
  grey: {
    A100: '#FEFEFD',
    A200: '#F8F7F5',
    A400: '#F5F5F5',
    A700: '#DDDDDD',
    50: '#E2E2E2',
    100: '#E2E2E2',
    200: '#C6C6C6',
    300: '#AAAAAA',
    400: '#8D8D8D',
    600: '#555555',
    800: '#1C1C1C',
    light: '#717171',
    main: '#383838',
    dark: '#000000',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F6F8FC',
  },
} as const

export default Object.freeze(palettes)
