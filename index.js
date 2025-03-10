#!/usr/bin/env node
// const clearConsole = require("clear-any-console");const package = require("./package.json");
import alert from "alertify-cli";
import handleError from "cli-handle-error";
import { init } from "./utils/init.js";
import { social, title, bio, errorInfo, msg } from "./utils/data.js";
import { cli } from "./utils/cli.js";
import { debug } from "./utils/debug.js";
const argv = process.argv.slice(2);
/*let socialInfo = `${twitterBlue("Twitter")}: ${grayText("https://x.com/i/flow/login")}`;
let printSocialIcon = argv.indexOf(`--no-social`) === -1;
process.on("unhandLeadRejection", (error) => {
  console.log("unhandLeadRejection", error);
 });
clearConsole();*/
//Meow
const flags = cli.flags;
const input = cli.input;
(() => {
  init(flags.minimal, flags.clear);
  input.includes("help") && cli.showHelp(0);
  console.log(title);
  console.log();
  flags.bio && console.log(bio);
  flags.social && console.log(social);
  flags.add && alert({ type: `info`, msg: msg });
  debug(flags.debug, cli);

  handleError();
  // console.log(errorInfo);
  /* alert({ type: `info`, msg: argv, name: `ARGV` });
   let err = new Error(`Something went wrong !!!!!!!`);
 handleError(`CUSTOM ERROR`, err, false, false); */
})(); // IIFE function
