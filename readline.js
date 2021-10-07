const readline = require("readline");

// create interface as per online docs
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask the user a question
rl.question("What's up, doc? ", answer => {
    // print their response
    console.log("you responded: " + answer);
    // close the interface
    rl.close();
});

