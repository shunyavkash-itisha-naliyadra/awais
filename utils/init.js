import checkNode from "cli-check-node";
import unhandled from "cli-handle-unhandled";
import welcome from "cli-welcome";
import packLog from "../package.json" with { type: "json" };
export const init = (isMinimal, clear) => {
  unhandled();
  !isMinimal &&
    welcome({
      title: packLog.name,
      tagLine: `Get know awais`,
      description: packLog.description,
      version: packLog.version,
      bgColor: `#FADC00`,
      color: `#000000`,
      bold: true,
      clear, // log clear
    });
  isMinimal && console.log("Itisha Naliyadra");

  checkNode("22");
};
