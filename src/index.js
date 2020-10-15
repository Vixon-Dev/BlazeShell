const { spawn } = require("child_process");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
mainShellLoop = () => {
    readline.question('_>', input => {
        var splitInput = input.split(' ');
        console.dir(splitInput);
        spawn(splitInput[0], splitInput);
    });
}
mainShellLoop();