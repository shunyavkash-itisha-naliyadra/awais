import cliHandleError from "cli-handle-error";
import fetch from "node-fetch";
import ora from "ora";
let apiUrl = `https://api.github.com/users/ahmadawais`;
const spinner = ora({ test: `` });
export const stage = async () => {
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
    // console.log("GitHub user data:", data);
    console.log("GitHub followers:", data.followers);
  } catch (error) {
    cliHandleError("Error fetching GitHub API:", error.message, true, false);
  }
};
