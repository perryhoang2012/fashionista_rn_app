#!/usr/bin/env node

const childProcess = require('child_process');
const os = require('os');

console.log('🚀 ~ Pre install');

[
  // Kill the metro bundler if it's running.
  {
    command: 'pkill -f "cli.js start" || set exit 0',
    onlyPlatforms: ['darwin', 'linux'],
  },
]
  .filter(
    ({onlyPlatforms}) =>
      !onlyPlatforms || onlyPlatforms.includes(os.platform()),
  )
  .forEach(commandAndOptions => {
    const {command, onlyPlatform: _, ...options} = commandAndOptions;
    try {
      childProcess.execSync(command, {
        stdio: 'inherit',
        ...options,
      });
      console.log('✅ ~ Done running command and options for ' + command);
    } catch (error) {
      console.log('🤯 ~ Failed ' + command + ': ' + error.message);
      process.exit(error.status);
    }
  });

console.log('✅ ~ Done Pre install');
