#Nodejs Tutorial

Trying out Nodejs. The current version I'm using is v6.9.5.

#Big Words(words and concepts)

First Class functions: You can use like strings, numbers, etc. (i.e. pass them around
,set variables equal to them, put them in arrays, and more)
e.g. JS functions are First Class functions.

Function Expression: An expression is a block of code that results in a value. So a function
expression are possible because functions are first-class in JS.

Prototypal Inheritance: Object can be chained to each other by their prototypes.

Function Construtors: A normal function that is used to construct objects. The 'this' 
variable points to a new empty object, and that object is returned from the 
function automatically.

Immediately Invoked Function Expressions(IIFE): Self invoking anonymous function e.g:
````(function(){console.log('Hello, I'm an IIFE');}());````

Magic String: A string that has some special meaning in our code.

"class" keyword is nothing fancy. It's just syntactic sugar i.e behind the scenes 
everything is still based on prototypal Inheritance.

Callback: A function passed to some other function, which we assume will be Invoked
at some point.

Non-blocking: Doing other things without stopping your program from running.

MIME Type: A standard for specifying the type of data being sent.
- Stands for 'Multipurpose Internet Mail Extensions'

Semantic Versioning: MAJOR.MINOR.PATCH for example 6.9.5.

"^" in "express": "^4.14.1" tells npm to automatically update if there is a minor or patch release but don't update if there is a major release.
"~" in "express": "^4.14.1" tells npm to automatically update if there is a patch release and patch relase only.