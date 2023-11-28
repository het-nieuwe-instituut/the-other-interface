import colors from '../foundations/colors'

const oldTextStyles = {
  h1: {
    color: `${colors.blackAlpha}`,
    fontSize: '80px',
    fontFamily: "'Impact'",
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '80px',
    latterSpacing: '-0.8px',
  },
  h2: {
    color: `${colors.black}`,
    fontSize: ['30px', '32px', '38px', '38px'],
    fontWeight: '900',
    lineHeight: '118%',
    fontFamily: 'Univers bold',
  },
  h3: {
    color: `${colors.black}`,
    fontSize: ['18px', '24px', '20px', '20px'],
    fontWeight: '900',
    lineHeight: '118%',
    fontFamily: 'Univers bold',
  },
  h4: {
    color: `${colors.black}`,
    fontSize: ['16px'],
    fontWeight: '900',
    lineHeight: '125%',
    fontFamily: 'Univers bold',
  },
  galaxyH4: {
    color: `${colors.black}`,
    fontSize: ['16px'],
    fontWeight: '400',
    lineHeight: '125%',
  },
  h5: {
    color: `${colors.black}`,
    fontSize: ['12px', '14px', '12px', '12px'],
    fontWeight: '900',
    lineHeight: '125%',
    fontFamily: 'Univers bold',
  },
  body: {
    color: `${colors.black}`,
    fontSize: ['20px', '24px', '20px', '20px'],
    fontWeight: '400',
    lineHeight: '135%',
    fontFamily: 'Univers',
  },
  small: {
    color: `${colors.black}`,
    fontSize: ['16px', '18px', '16px', '16px'],
    fontWeight: '400',
    lineHeight: '135%',
    fontFamily: 'Univers',
  },
  micro: {
    color: `${colors.black}`,
    fontSize: ['12px', '14px', '12px', '12px'],
    fontWeight: '400',
    lineHeight: '135%',
    letterSpacing: '0.02em',
    fontFamily: 'Univers',
  },
  pullquote: {
    color: `${colors.black}`,
    fontSize: ['22px', '28px'],
    fontWeight: '900',
    lineHeight: '125%',
    fontFamily: 'Univers bold',
  },
  cloudText: {
    fontFamily: "'Univers'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '135%',
    color: 'black',
    textShadow: '0px 0px 4px #CCCED0, 0px 0px 4px #CCCED0',
  },
  galaxyButton: {
    color: `${colors.black}`,
    fontFamily: "'Univers'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '135%',
  },
  cloudTextLarge: {
    fontFamily: "'Univers'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '115%',
    color: 'black',
    textShadow: '0px 0px 4px #CCCED0, 0px 0px 4px #CCCED0',
  },
  cloudTextMicro: {
    fontFamily: "'Univers'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '135%',
    color: 'black',

    /* or 16px */
    textShadow: '0px 0px 4px #CCCED0, 0px 0px 4px #CCCED0',
  },
  recordText: {
    fontSize: { sm: '32px', md: '32px', lg: '32px', xl: '21px', '2xl': '21px' },
    fontFamily: "'Social'",
    fontStyle: 'normal',
    lineHeight: '130%',
    letterSpacing: { sm: '0.32px', md: '0.32px', lg: '0.32px', xl: '0.21px', '2xl': '0.21px' },
  },
}

const headingTimesLarge = {
  '2xl': {
    fontFamily: "'Times Dot'",
    fontWeight: '400',
    fontSize: '96px',
    lineHeight: '96px',
  },
  lg: {
    fontFamily: "'Times Dot'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '33.6px',
  },
  md: {
    fontFamily: "'Times Dot'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '21px',
  },
  sm: {
    fontFamily: "'Times Dot'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px',
  },
  sx: {
    fontFamily: "'Times Dot'",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '9px',
    lineHeight: '9px',
  },
}

const impactNew = {
  xl: {
    fontFamily: "'Impact'",
    fontSize: '80px',
    lineHeight: '80px',
    fontWeight: 400,
  },
  md: {
    fontFamily: "'Impact'",
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: 400,
  },
}

const socialLarge = {
  xl: {
    fontFamily: "'Social'",
    fontSize: '21px',
    fontWeight: 400,
    lineHeight: '27px',
  },
  lg: {
    fontFamily: "'Social'",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20.8px',
  },
  md: { fontFamily: "'Social'", fontSize: '14px', fontWeight: 400, lineHeight: '14px' },
  sm: { fontFamily: "'Social'", fontSize: '12px', fontWeight: 400, lineHeight: '15px' },
}

const socialMedium = {
  md: {
    fontFamily: "'Social'",
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '31.2px',
  },
}

const textStyles = {
  ...oldTextStyles,
  headingTimesLarge,
  socialLarge,
  socialMedium,
  impactNew,
}

export default textStyles
