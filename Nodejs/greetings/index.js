const readline = require('readline');

var english = require('./english');
var russian = require('./russian');

var genericGreet = function(){
    console.log("Hello, user!");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function evalGreet(){
    rl.question('Please select a language: 1) English 2) Russian: ',(answer) => {
        if(answer == '1'){
            english();
            rl.close();
        } else if(answer == '2'){
            russian();
            rl.close();
        } else{
            genericGreet();
            rl.close();
        }
    });
}

module.exports = evalGreet;
