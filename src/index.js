const { exec } = require("child_process");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  

mainShellLoop = () => {
    readline.question('_>', (result) => {
        exec(result, (error, stdout, stderr) =>{
            if(error) {
                console.log('BlazeShell: error: ${error.message}');
                mainShellLoop();
            }
            if (stderr) {
                console.log(`${stderr}`);
                mainShellLoop();
            }
            console.log(`${stdout}`);
            mainShellLoop();
        });   
    });
}
mainShellLoop();