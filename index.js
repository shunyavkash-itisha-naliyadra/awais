#!/usr/bin/env node
import clearConsole from "./utils/clearLog.js";
// const package = require("./package.json");
import alert from "alertify-cli";
import handleError from "./utils/errorHandler.js";
import { init } from "./utils/init.js";
import { social, title, bio, errorInfo, msg, data } from "./utils/data.js";
import { cli } from "./utils/cli.js";
import { debug } from "./utils/debug.js";
import { stage } from "./utils/state.js";
import { posts } from "./utils/post.js";
// const argv = process.argv.slice(2);
/*let socialInfo = `${twitterBlue("Twitter")}: ${grayText("https://x.com/i/flow/login")}`;
let printSocialIcon = argv.indexOf(`--no-social`) === -1;
process.on("unhandLeadRejection", (error) => {
  console.log("unhandLeadRejection", error);
 });
clearConsole();*/
//Meow
const flags = cli.flags;
const input = cli.input;
(async () => {
  try {
    clearConsole();
    init(flags.minimal, flags.clear);
    input.includes("help") && cli.showHelp(0);
    console.log(title);
    console.log();
    flags.bio && console.log(bio);
    flags.social && console.log(social);
    flags.add && alert({ type: `info`, msg: msg });
    flags.post && alert({ type: `info`, msg: data });
    flags.post && (await posts());
    debug(flags.debug, cli);

    await stage();
  } catch (error) {
    handleError(error);
  }
  // console.log(errorInfo);
  /* alert({ type: `info`, msg: argv, name: `ARGV` });
   let err = new Error(`Something went wrong !!!!!!!`);*/
  handleError(`CUSTOM ERROR`, err, false, false);
})(); // IIFE function
