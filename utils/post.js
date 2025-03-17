const apiUrl = `https://Awais.dev/api/posts`;
import cliHandleError from "cli-handle-error";
import strip from "cli-strip-html";
import fetch from "node-fetch";
import ora from "ora";
import chalk from "./chalk.js";
const spinner = ora({ test: `` });
let blue = chalk.hex("#0000FF");
const green = chalk.hex("#00FF00");
export const posts = async () => {
  try {
    spinner.start();
    spinner.color = "yellow";
    spinner.text = "Loading rainbows";
    let res = await fetch(apiUrl);
    if (!res.ok) {
      console.log(`GitHub API error: ${res.status} ${res.statusText}`);
      return;
    }
    let data = await res.json();
    spinner.succeed("successfully api call done !");
    data.map(({ title, link }, index) => {
      console.log(`${++index} ${green(title?.rendered)}`);
      console.log(blue(link));
      console.log();
    });
  } catch (error) {
    cliHandleError("Error fetching GitHub API:", error.message, true, false);
  }
};
