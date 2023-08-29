import colors from '../foundations/colors'

const oldTextStyles = {
  h1: {
    color: colors.black,
    fontSize: '80px',
    lineHeight: '100%',
    letterSpacing: '-0.01em',
    fontFamily: 'Impact',
  },
  h2: {
    color: colors.black,
    fontSize: '80px',
    lineHeight: '100%',
    letterSpacing: '-0.01em',
    fontFamily: 'Impact',
  },
  h3: {
    color: colors.black,
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-0.01em',
    fontFamily: 'Social',
  },
  h4: {
    color: colors.black,
    fontSize: '21px',
    fontWeight: 'bold',
    lineHeight: '130%',
    letterSpacing: '-0.01em',
    fontFamily: 'Social',
  },
  galaxyH4: {
    color: colors.black,
    fontSize: ['16px'],
    fontWeight: '400',
    lineHeight: '125%',
  },
  h5: {
    color: colors.black,
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '130%',
    letterSpacing: '0',
    fontFamily: 'Impact',
  },
  body: {
    color: colors.black,
    fontSize: '21px',
    fontWeight: 'normal',
    lineHeight: '130%',
    fontFamily: 'Social',
    letterSpacing: '0.01em',
  },
  small: {
    color: colors.black,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '130%',
    fontFamily: 'Social',
  },
  micro: {
    color: colors.black,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '130%',
    letterSpacing: '0.02em',
    fontFamily: 'Social',
  },
  pullquote: {
    color: colors.black,
    fontSize: '32px',
    fontWeight: 'normal',
    lineHeight: '120%',
    fontFamily: 'Impact',
  },
  // these are not present in the font mappers
  cloudText: {
    fontFamily: 'Univers',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '135%',
    color: 'black',
    textShadow: '0px 0px 4px #CCCED0, 0px 0px 4px #CCCED0',
  },
  galaxyButton: {
    color: colors.black,
    fontFamily: 'Univers',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '135%',
  },
  cloudTextLarge: {
    fontFamily: 'Univers',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '115%',
    color: 'black',
    textShadow: '0px 0px 4px #CCCED0, 0px 0px 4px #CCCED0',
  },
  cloudTextMicro: {
    fontFamily: 'Univers',
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
    fontSize: '1.5vw',
    lineHeight: '2vw',
  },
}

const textStyles = {
  ...oldTextStyles,

  headingTimesLarge,
}

export default textStyles
