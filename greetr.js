var EventEmitter = require('events'); // loads up the events lib

module.exports = class Greetr extends EventEmitter {
    constructor(){
        super(); //same as EventEmitter.call(this); but we need to add 'extends' next to class declaration
        this.greeting = "Hello World!";
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet',data);
    }
}