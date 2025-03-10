import alert from "alertify-cli";
export const debug = (isDebug, cli) => {
  if (!isDebug) {
    return;
  }
  alert({ type: `warning`, msg: "clii data view" });
  console.log();
  //   console.log(`cli`, cli);
  console.log(`Input`, cli.input);
  console.log(`Flags`, cli.flags);
  console.log();
};
