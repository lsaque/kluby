const typographies = {
  fontFamily: ['sans-serif'].join(','),
  htmlFontSize: 10,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  allVariants: {},
  h1: {
    fontSize: '3.6rem',
  },
  h2: {
    fontSize: '3.2rem',
  },
  h3: {
    fontSize: '2.8rem',
  },
  h4: {
    fontSize: '2.4rem',
  },
  h5: {
    fontSize: '2.0rem',
  },
  h6: {
    fontSize: '1.8rem',
  },
  body1: {
    fontSize: '1.6rem',
  },
  body2: {
    fontSize: '1.4rem',
  },
  button: {
    fontSize: '1.8rem',
  },
  caption: {
    fontSize: '1.2rem',
  },
  subtitle1: {
    fontSize: '1.8rem',
  },
  subtitle2: {
    fontSize: '1.6rem',
  },
  overline: {
    fontSize: '1.2rem',
  },
} as const

export default Object.freeze(typographies)
