import sym from "log-symbols";
import chalk from "../utils/chalk.js";
let red = chalk.red();
let yellow = chalk.yellow();
/**
 * @param {String} heading
 * @param {Error} err
 * @param {Boolean} displayError
 * @param {Boolean} exit
 */
export const handleError = (
  heading = `ERROR: `,
  err,
  displayError = true,
  exit = true
) => {
  if (err) {
    console.log();
    if (displayError) {
      console.log(`${sym.error} ${red(heading)}`);
      console.log(`${sym.error} ${red(`ERROR →`)} ${err.name}`);
      console.log(`${sym.info} ${red(`REASON →`)} ${err.message}`);
      console.log(`${sym.info} ${red(`ERROR STACK ↓ \n`)} ${err.stack}\n`);
    } else {
      console.log(`${sym.warning}  ${yellow(heading)}\n`);
    }
    if (exit) {
      process.exit(0);
    } else {
      return false;
    }
  }
};
export default handleError;
