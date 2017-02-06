//function statement

function greet(h){
    console.log("Hello Human!"+ " " + h);
}
greet();

// functions are first-class

function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function in JS are objects. They can be passed around like variables.