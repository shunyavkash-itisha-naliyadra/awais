const modifier = {
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  overline: [53, 55],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
};

const colorNames = {
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  blackBright: [90, 39],
  gray: [90, 39],
  grey: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
};

const bgColor = {
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgBlackBright: [100, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49],
};

const color = {
  ansi16m: (r, g, b) => ({
    open: `\x1b[38;2;${r};${g};${b}m`,
    close: "\x1b[39m",
  }),
  ansi256: (n) => ({
    open: `\x1b[38;5;${n}m`,
    close: "\x1b[39m",
  }),
};

const hexToRgb = (hex) => {
  const hexNum = hex.replace(/^#/, "");
  if (hexNum.length !== 6) throw new Error("Invalid hex color");
  const r = parseInt(hexNum.slice(0, 2), 16);
  const g = parseInt(hexNum.slice(2, 4), 16);
  const b = parseInt(hexNum.slice(4, 6), 16);
  return [r, g, b];
};

export default {
  modifier,
  colorNames,
  bgColor,
  color,
  hexToRgb,
};
