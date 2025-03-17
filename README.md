# awais-tool

awais-tool is a Node.js command-line interface (CLI) tool that displays information about awais-tool including a title, bio, social media links, and custom alert messages. It leverages various npm packages to create an interactive, colorful, and user-friendly terminal experience.

## usage

To use this CLI run the following command :

```sh
npx awais-tool
```

## Usage

You can run the CLI directly using npx:

```sh
npx awais-tool [options] <command>
```

## CLI Options

- **--add**: Triggers an alert message.
- **--no-ad**: Does not trigger the alert message. (Default: true)
- **--clear**: Clears the console before displaying output. (Default: true)
- **--no-clear**: Does not clear the console.
- **-m, --minimal**: Prints minimal information.
- **-d, --debug**: -d, --debug
- **-v, --version**: Prints the CLI version.
- **-p, --post**: Prints the CLI version.

## Example Commands

- Display CLI information without social links:

```sh
npx itisha-awais-cli --no-social
```

- Run the CLI in minimal mode with debug info:

```sh
npx itisha-awais-cli -m -d
```

## Features

- Welcome Message: Uses a custom welcome message with project details.
- Colorful Output: Utilizes color and symbol packages for a vibrant terminal interface.
- Node Version Check: Ensures that the CLI runs on Node v22 or above.
- Error Handling: Gracefully handles errors and unhandled rejections.
- Custom Alerts: Displays information alerts based on CLI flags.
  3License

# License

This project is licensed under the **_MIT License._**
