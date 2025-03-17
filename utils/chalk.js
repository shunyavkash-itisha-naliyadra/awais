import ansiStyles from "./chalk/ansi-styles.js";
import {
  stringReplaceAll,
  stringEncaseCRLFWithFirstIndex,
} from "./chalk/string-utils.js";
function wrapStyle(pair) {
  const [openCode, closeCode] = pair;
  return {
    open: `\x1b[${openCode}m`,
    close: `\x1b[${closeCode}m`,
  };
}

function ChalkFactory(styles = []) {
  const builder = (...args) => {
    let text = args.join(" ");
    let openAll = "";
    let closeAll = "";

    for (const { open, close } of styles) {
      openAll += open;
      closeAll = close + closeAll;
    }
    const index = text.indexOf("\n");
    if (index !== -1) {
      text = stringEncaseCRLFWithFirstIndex(text, closeAll, openAll, index);
    }
    for (const { close, open } of styles) {
      text = stringReplaceAll(text, close, open);
    }
    return openAll + text + closeAll;
  };
  builder.styles = styles;
  builder._addStyle = (open, close) =>
    ChalkFactory([...styles, { open, close }]);
  return new Proxy(builder, {
    get(target, prop) {
      if (ansiStyles.modifier[prop]) {
        const { open, close } = wrapStyle(ansiStyles.modifier[prop]);
        return target._addStyle(open, close);
      }
      if (ansiStyles.colorNames[prop]) {
        const { open, close } = wrapStyle(ansiStyles.colorNames[prop]);
        return target._addStyle(open, close);
      }
      if (ansiStyles.bgColor[prop]) {
        const { open, close } = wrapStyle(ansiStyles.bgColor[prop]);
        return target._addStyle(open, close);
      }
      if (["hex", "rgb", "ansi256"].includes(prop)) {
        return (...args) => {
          let open, close;
          if (prop === "hex") {
            const rgb = ansiStyles.hexToRgb(...args);
            ({ open, close } = ansiStyles.color.ansi16m(...rgb));
          } else if (prop === "rgb") {
            ({ open, close } = ansiStyles.color.ansi16m(...args));
          } else if (prop === "ansi256") {
            ({ open, close } = ansiStyles.color.ansi256(...args));
          }
          return target._addStyle(open, close);
        };
      }
      return target[prop];
    },
    apply(target, thisArg, argumentsList) {
      return target(...argumentsList);
    },
  });
}
const chalk = ChalkFactory();
export default chalk;
