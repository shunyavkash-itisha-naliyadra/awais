import chalk from "chalk";
import sym from "log-symbols";
// use chalk color full cli
const blueText = chalk.hex("#0000FF");
const greenText = chalk.hex("#00FF00");
const twitterBlue = chalk.hex("#1DA1F2").bold;
const grayText = chalk.gray;
// inverse bgcolore
const success = chalk.hex("#0abf53");
const warning = chalk.hex("#FFA500");
const info = chalk.hex("#037ef3");
const error = chalk.hex("#ff0000");

let social = `
${twitterBlue("Twitter")}: ${grayText("https://x.com/i/flow/login")}
`;
let title = blueText("Itisha Awais -- hello");

let bio = greenText(`Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled
    it to make a type specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
    release of Letraset sheets containing Lorem Ipsum passages, and more
    recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`);

let errorInfo = `
    ${sym.success} ${success("SUCCESS: Thank you for checking out my CLI")}

     ${sym.info} ${info(`INFO: I'm creating a course on NodeCLI.com`)}

     ${sym.warning} ${warning(`WARNING: Please don't copy`)}

     ${sym.error} ${error("ERROR: Internal server error!")}
`;
let msg = `Check NodeCli`;

export { social, title, bio, errorInfo, msg };
