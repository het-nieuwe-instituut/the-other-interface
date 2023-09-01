import colors from '../foundations/colors'

const oldTextStyles = {
  h1: {
    color: `${colors.black}`,
    fontSize: ['48px', '52px', '62px', '62px'],
    fontWeight: '900',
    lineHeight: '118%',
    fontFamily: 'Univers bold',
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
    fontSize: '2.5vw',
    lineHeight: '3.2vw',
    color: 'brownAlpha.100',
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
}

const socialLarge = {
  lg: {
    fontFamily: "'ABC Social'",
    fontSize: '21px',
    fontWeight: 400,
    lineHeight: '27px',
  },
  sm: { fontFamily: "'ABC Social'", fontSize: '12px', fontWeight: 400, lineHeight: '15px' },
}

const textStyles = {
  ...oldTextStyles,

  headingTimesLarge,
  socialLarge,
}

export default textStyles
