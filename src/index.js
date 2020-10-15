const DefaultCursor = ">";
var fs = require('fs');
const { exec } = require("child_process");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

CSCursorJson = fs.readFileSync("../src/cursorconfig.json", 'utf8');
console.dir(CSCursorJson)

ShellLoop = () => {
    readline.question('>', (result) => {
        exec(result, (stdout, stderr) =>{
            if (stderr) {
                console.log(`${stderr}`);
                ShellLoop();
            }
            console.log(`${stdout}`);
            ShellLoop();
        });   
    });
}
ShellLoop();

