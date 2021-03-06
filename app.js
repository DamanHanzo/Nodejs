// var greet = require('./Nodejs/greetings') //way to reference other js files in the same folder
// greet();

// var Emitter = require('./emitter');
// var eventConfig = require('./config').events;

// var emtr = new Emitter();

// emtr.on(eventConfig.GREET, function(){
//     console.log('Hello, I am a listener number 1!');
// });

// emtr.on(eventConfig.GREET, function(){
//     console.log('Hello, I am a listener number 2!');
// });

// emtr.emit(eventConfig.GREET);


//function statement
// function greet(h){
//     console.log("Hello Human!"+ " " + h);
// }
// greet();

// // functions are first-class
// function logGreeting(fn){
//     fn();
// }
// logGreeting(greet);
// //function in JS are objects. They can be passed around like variables.

// //function expression
// var greetMe = function(){
//     console.log("Hello World!");
// } 

// //it's still first-class
// logGreeting(greetMe);


// // use a function expression on the fly
// logGreeting(function(){
//     console.log("Hello peeps!");
// })


// Object literal 

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function() {
//         console.log('Hello, ' + this.firstName + ' ' + this.lastName);
//     }
// };

// person['firstName'] = 'Daman'; // same as person.firstName = 'Daman';
// person['lastName'] = 'Singh';// same as person.lastName = 'Singh';
// person.greet();


// //Function constructor

// function Func(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// };
// //prototypal inheritance
// Func.prototype.greet = function() {
//     console.log('Hello,'+ this.firstName + ' '+ this.lastName);
// };

// var daman = new Func('Daman', 'Singh');
// daman.greet();
// console.log(daman.__proto__);

// //pass by reference
// function changeObj(d){
//     d.prop1 = function(){};
//     d.prop2 = {};
// };

// var c = {};
// c.prop1 = {}; 
// changeObj(c);// objects are passed by reference
// console.log(c);


var person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = Object.create(person);

john.firstName = 'Johnny';
john.lastName = 'Boy';

// console.log(john.greet());


//`: called a back tick

var userName = 'John Doe';
var saySomething = `Hello ${userName}`; //template literal but only available in ES 6
// console.log(saySomething);

var obj = {
    name: 'Johnny Boy',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet.call({name: "Jane Doe"});
obj.greet.apply({name: "Jane Doe"});

//call vs apply: for takes in additional paramaters followed by a comma ex:
//obj.greet.call({name: 'Jane Doe'}, param1, param 2, ...);
//apply takes additional parameters in the form of an array for ex
//obj.greet.apply({name: 'Jane Doe'}, [param1, params2, params3, ...]);


 //Class keyword is just a syntactic sugar. Nothing behind the scenes really changes.

 class Insaan {
     constructor(firstName, lastName) {
         this.firstName = firstName;
         this.lastName = lastName; 
     }

     greet() {
         console.log(`Hello, ${this.firstName} ${this.lastName}`);
     }
 }

 var aadmi = new Insaan('Chand', 'Singh');
 aadmi.greet();

var EventEmitter = require('events'); // loads up the events lib
var util = require('util'); // loads up the util lib

var Greetr = require('./greetr');

// function Greetr() {
//     EventEmitter.call(this); // pointing the 'this' variable to 'events' lib
//     this.greeting = 'Hello World!'; 
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
//     console.log(this.greeting + ':' + data);
//     this.emit('greet', data);
// }

var greetr1 = new Greetr();

greetr1.on('greet', function(data){
    console.log('Someone greeted!: '+ data);
});

greetr1.greet('Tony');

