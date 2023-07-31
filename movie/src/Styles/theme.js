const COLOR = {
  main: "#E51013",
  common: {
    white: "#FFF",
    black: "#070707",
    gray: {
      box: "rgb(132, 132, 132)",
      100: "#EEE", // shape 용도
      200: "#777", // text 용도
      300: "#AAA", // button 용도
      400: "#CCC", // select 용도
    },
  },
};

const FONT_WEIGHT = {
  light: "LINESeed-Th",
  regular: "LINESeed-Rg",
  bold: "LINESeed-Bd",
};

const DEVICE_WIDTH = {
  mobile: 414,
  tablet: 768,
  desktop: 1440,
};

const DEVICE = {
  mobile: `screen and (max-width: ${DEVICE_WIDTH.mobile}px)`,
  tablet: `screen and (max-width: ${DEVICE_WIDTH.tablet}px)`,
  desktop: `screen and (max-width: ${DEVICE_WIDTH.desktop}px)`,
};

const theme = {
  COLOR,
  FONT_WEIGHT,
  DEVICE_WIDTH,
  DEVICE,
};

export default theme;
