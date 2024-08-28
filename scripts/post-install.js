#!/usr/bin/env node

const childProcess = require('child_process');
const os = require('os');

console.log('🚀 ~ Post install');

[
  // on iOS, make sure our native modules are installed
  {
    command: 'arch -x86_64 pod install --repo-update',
    cwd: 'ios',
    onlyPlatforms: ['darwin'],
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
console.log('✅ ~ Done Post install');
