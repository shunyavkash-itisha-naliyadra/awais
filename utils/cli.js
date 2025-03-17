import meow from "meow";
import chalk from "./chalk.js";
let helperText = `
                    Usage
                      ${chalk.green(`npx awais`)} ${chalk.yellow(`[--option]`)} ${chalk.cyan(`<command>`)}

                    Options
                      ${chalk.yellow(`--bio`)}                       Print the bio ${chalk.dim(`(DEFAULT: true)`)}
                      ${chalk.yellow(`--social`)}                    Print the social 
                      ${chalk.yellow(`--no-social`)}                 Don't print the social ${chalk.dim(`(DEFAULT: true)`)}
                      ${chalk.yellow(` --add`)}                      Print the social 
                      ${chalk.yellow(`--no-ad`)}                     Don't print the social ${chalk.dim(`(DEFAULT: true)`)}
                      ${chalk.yellow(`--clear`)}                     Clear the console ${chalk.dim(`(DEFAULT: true)`)}
                      ${chalk.yellow(`--no-clear`)}                  Don't clear the console 
                      ${chalk.yellow(`-m`)}, ${chalk.yellow(`--minimal`)}               Print minimal info 
                      ${chalk.yellow(`-d`)}, ${chalk.yellow(`--debug`)}                 Print debug info 
                      ${chalk.yellow(`-v`)}, ${chalk.yellow(`--version`)}               Print CLI version
                      ${chalk.yellow(`-p`)}, ${chalk.yellow(`--post`)}                  Print lat 10 post
                    
                    Command
                     ${chalk.cyan(`help`)}        Print CLI information

                    Examples
                      ${chalk.green(`npx awais`)} ${chalk.yellow(`--no-social`)}
                      ${chalk.green(`npx awais`)} ${chalk.yellow(`--no-ad`)}
                `;
let options = {
  importMeta: import.meta,
  inferType: true,
  hardRejection: undefined,
  flags: {
    minimal: {
      type: "boolean",
      shortFlag: "m",
    },
    clear: {
      type: "boolean",
      default: true,
      shortFlag: "clear",
    },
    bio: {
      type: "boolean",
      default: true,
    },
    social: {
      type: "boolean",
      default: true,
    },
    ad: {
      type: "boolean",
      default: true,
    },
    debug: {
      type: "boolean",
      default: false,
      shortFlag: "d",
    },
    version: {
      type: "boolean",
      default: false,
      shortFlag: "v",
    },
    post: {
      type: "boolean",
      default: false,
      shortFlag: "p",
    },
  },
};
export const cli = meow(helperText, options);
