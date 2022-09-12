import colors from "../foundations/colors"

const textStyles = {
    h1: {
        color: `${colors.black}`,
        fontSize: ['48px', '52px', '62px', '62px'],
        fontWeight: '900',
        lineHeight: ['108%, 118%'],
    },
    h2: {
        color: `${colors.black}`,
        fontSize: ['30px', '32px', '38px', '38px'],
        fontWeight: '900',
        lineHeight: '118%'
    },
    h3: {
        color: `${colors.black}`,
        fontSize: ['18px', '24px', '20px', '20px'],
        fontWeight: '900',
        lineHeight: '118%'
    },
    body: {
        color: `${colors.black}`,
        fontSize: ['20px', '24px', '20px', '20px'],
        fontWeight: '400',
        lineHeight: '135%'
    },
    small: {
        color: `${colors.black}`,
        fontSize: ['16px', '18px', '16px', '16px'],
        fontWeight: '400',
        lineHeight: '135%',
    },
    micro: {
        color: `${colors.black}`,
        fontSize: ['12px', '14px', '16px', '16px'],
        fontWeight: '400',
        lineHeight: '135%',
        letterSpacing: '0.02em'
    }
  }

  export default textStyles