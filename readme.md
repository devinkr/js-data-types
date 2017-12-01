# Introduction to JavaScript: Data Types

## Learning Objectives
* Start using JavaScript and use developer tools.
* Introduce the syntax of the JavaScript language.
* Work with the primitive data types in JavaScript.
* Start working with arrays in JavaScript.

## Intro (5 minutes / 10:05)

Today we are going to get started with our first real programming language of the course! We've learned about HTML + CSS in previous classes this week, so we know how to make static webpages where there isn't much user interaction. Today we are going to move towards making our pages interactive and dynamic.

## Linking a JavaScript file (10 minutes / 10:15)

From the command line:

```shell
$ cd ~/wdi/sandbox
$ mkdir js-data-types-and-control-flow
$ cd js-data-types-and-control-flow
$ touch index.html script.js
$ atom .
```

Update the files as follows:

In index.html:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>This is the Title</title>
    <script src="script.js"></script>
  </head>
  <body>
  </body>
</html>
```

In script.js
```js
console.log("hello world")
```

Back at the command line run:
```bash
open index.html
```

Your default browser will open (we ask for this class you use Chrome but other browsers will have similar tools you should definitely explore).

You can bring up the Development Tools (DevTools) with the command **Command + Ctrl + J** (`⌘ + ⌥ + J`) and should see:

![DevTools Console says 'Hello World!'](https://user-images.githubusercontent.com/7882341/27314092-830ea8ac-553f-11e7-954f-c8502b382d6d.png)

Again, back at the command line run:
```bash
touch script2.js
```

In script2.js add:
```js
console.log("hello world, from script2")
```

In index.html, in the head after the other script tag, add:
```html
...
  <script src="script2.js"></script>
...
```

Go back to the browser and refresh the page.

**Bonus** [async and deferred attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

## Development Tools (5 minutes / 10:20)

### `console.log`

We have seen `console.log` frequently in the pre-work and we will see it much more.
The most difficult aspect of programming is not having insight into the exact value of things in a running program.
`console.log` provides us this insight.

This console is also known as a REPL.

![REPL 42](https://user-images.githubusercontent.com/7882341/27314489-4275c7b4-5542-11e7-8c16-6b6431f9cc42.png)

This is a REPL.
When you hit **Enter**, you tell the computer:

1. **R**ead the JavaScript I just wrote (`42`).
2. **E**valuate it (calculate its value, `42`).
3. **P**rint the value that was evaluated (`42`).
4. **L**oop, returning control to the user and wait to be asked to read the next line.

```js
const randomNum = Math.floor(Math.random() * 10)

console.log(`The random number is ${randomNum}`)

```

```
Arithmetic Operations
  + : Addition
  – : Subtraction
  * : Multiplication
  / : Division
```
#### Exercise (5 minutes / 10:25)

1. Print out your name in the console.
2. Print out the sum of 1 to 10.
3. Type in the following code and explain how it works:
```
  console.log("I'm a " + "programmer");
```
4. Print whatever you want in the console. Tip: if you want to write multiline command, use Shift + Enter to change line.

### `debugger` (5 minutes / 10:30)

`debugger` is like a super powered `console.log`.
Where `console.log` leaves us a little evidence about what's going on in the program execution, debugger puts the process on hold and lets us look at any part of the paused process.
It then lets you walk through your script step by step.

```js
let greeting = "Hello"
let subject = "World"
debugger;
let message = `${greeting}, ${subject}!`
console.log(message)
let messageParts = message.split(", ")
```

We don't actually need to have a `debugger` line and StandardJS doesn't like it.

Instead we can set breakpoints directly through the developer tools.

Much more information on debugging with Chrome Dev Tools is available [here](https://developers.google.com/web/tools/chrome-devtools/javascript/).

You can also [debug using VS Code](https://code.visualstudio.com/docs/editor/debugging)!

## Syntax (10 minutes / 10:40)

### Semicolons
- Wouldn't recommend using them, but if you do be consistent!
- The only catch with not using semicolons is that you can't start a line of code with `(`, `[`, or a backtick (`). 
- References:
    - [JavaScript Semicolon Insertion](http://inimino.org/~inimino/blog/javascript_semicolons)
    - [Are Semicolons Necessary in JavaScript](https://www.youtube.com/watch?v=gsfbh17Ax9I)
    - [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
    - [Hacking Semicolons (by Evan You who wrote Vue.js)](http://slides.com/evanyou/semicolons#/)
NPM, Bootstrap, Vue, and Lodash don't use semicolons!

### camelCase

Javascript variables and function names are written using camel case syntax. That works
- First letter of first word lowercase
- First letter of remaining words uppercase
- No spaces or punctuation between words

> You should use kebab-case for HTML classes -- CSS is case insensitive so camelCase could give you issues! Kebab case is where words are separated by `-`s, snake_case uses underscores! 

#### Examples

```js
var pizzaTopping = "pepperoni"
var isThisVarCamelCase = true

// Function expression
var helloWorld = function () {
  console.log("Hello World!")
}

// Function declaration
function helloWorld () {
  console.log("Hello World!")
}
```

### Comments

Comments are an extremely important part of writing code. They help us make sense of our code, especially for other people reading our code, or when we have walked away from some code and have completely forgotten what certain sections of it do. This happens much more quickly than you may imagine.

If you are working on a team, your documentation and commenting practices often translate to how easy you are to work with!

```js
// Single line comment

/*
  Multiple
  line
  comments
*/
```

## Break (10 minutes / 10:55)

Simply defined, a primitive data type is one that represents a single value. In JavaScript there are five primitive types:

1. Numbers
2. Strings
3. Booleans
4. Undefined
5. Null

### Numbers (10 minutes / 11:00)

Numbers are simply represented by their digits. In JS `4`, `13`, `-3`, `2.5` and `10e3` all mean just what you would expect.
To create a number in JS, just write it.

In your browser console, type `42` and hit **Enter**.

You can also do math in JavaScript. Type `42 + 3` into the console and see what happens.

```js
// Addition
10 + 2
// => 12

// Subtraction
10 - 2
// => 8

// Multiplication
10 * 2
// => 20

// Division
10 / 2
// => 5
```

- You can find a full list of arithmetic operators [in the expressions and operators MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators).

#### % (Modulus)

The modulus operator - `%` - returns the remainder of a division operation.

```js
12 % 5
// => 2, which is the remainder of 12 / 5
```

Modulus has a pretty handy use case: to check if a number is even. We can do this by running `NUMBER % 2`. If a number is even, the result should be 0 (i.e., there should be no remainder).

```js
4 % 2
// => 0, because 4 is even

5 % 2
// => , because 5 is odd. When 5 is divided by 2, the remainder is 1.
```

### NaN ("Not a number")

A special number...that's not a number?

```js
typeof NaN
// => Number
```

You usually get `NaN` when the result of a math operation is not real (e.g., dividing 0 by 0, multiplying strings together).

```js
0/0
// => NaN
```

You can test whether a value is a valid number using the `isNaN()` function. The method will return false if the argument passed into it is a valid number.

```js
var myFavoriteNumber = 5
isNaN(myFavoriteNumber)
// => false, because 5 is valid

var myUnrealNumber = 0/0
isNaN(myUnrealNumber)
// => true, because 0 divided by 0 is NaN
```

### Variables (10 minutes / 11:10)

**Variables** are containers for information -- we can store any value in them. We can use them to help repeat, change, store, or edit our data.

In order to **declare** a variable in JavaScript we use the keywords `var`, `const`, and `let`. The original declaration keyword was `var`, but in newer versions of JavaScript `const` and `let` were implemented. `const` is used on variables that will not be changed in your JavaScript code. `let` is used for variables that do change. People tend to use either `var` for everything or `const` and `let` consistently.

Here is an example of variable declaration in JavaScript.
```js
let unassigned
console.log(unassigned)
```

Most of the time, we want our variables to immediately store a value. Therefore, we **assign** values to our variables when we declare them. Here are three examples of variable assignment and declaration at the same time.

```js
const myVar = 42
console.log(myVar)

const sum = myVar + 8
console.log(sum)

let doubleSum = 2 * sum
console.log(doubleSum)
```

Once we have a declared variable, we can change its value. Here are some examples of both assigning our original `unassigned` variable

```js
unassigned = 'assigned now'
console.log(assigned)

doubleSum = doubleSum + 1
// or
doubleSum += 1
```

Javascript is a "dynamically-typed" language, meaning a variable can switch between data types. The following change is valid.

```js
var myFavoriteNumber = 5

myFavoriteNumber
// => 5

myFavoriteNumber = "five"

myFavoriteNumber
// => "five"
```

## Null + Undefined (5 minutes / 11:15)

* If we declare a variable without assigning a value to it, it will, by default, have a value of `undefined`.

* Null is very similar to `undefined` but we have to explicitly assign it to a variable.

In summary, the difference is that `undefined` implies nothing because it never was anything while `null` implies explicitly set to nothing.


## Strings (10 minutes / 11:25)

Strings are how JavaScript represents text. They are a series of 0+ characters in single or double quotes. `'Hello World!'`, `"Hello World!"`, `'h'`, and `''` are all examples of strings in JavaScript.

In order to join multiple strings together, you can use **concatenation** or **interpolation**.

Concatenation is when you add multiple strings together.
```js
let hello_world = "Hello" + "world"
```

Interpolation is where you use one string as a variable within another string. You use backticks for the entire string, and the dollar sign with brackets for the variable.
```js
let hello = "Hello"

let hello_world = `${hello} world`
```

There are also a bunch of **methods** you can run on strings.

```js
// .search(): find the starting index of a string value.
// String indexes are 0-based, so the index of a string's first character is 0.
var greetings = "Hi there friend!"
greetings.search("friend")

// .substr(): return and store a portion of a string.
// First argument is the start position, second argument is length of section you copy
var buddy = greetings.substr(9, 6)

// .slice(): returns a copy of a section of a string.
// First argument is the start position, second argument is the end position
var buddy = greetings.slice(9, 14)
```
[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) are a bunch more examples.

#### Escape sequences

Sometimes you will need to use special characters or formatting in strings that can't be entered the same way as you would in a word processor. In these cases, you use "escape sequences".
- Syntax: backslash + letter (e.g., `"\n"`).

```js
// "\n" = new line
"Hello\nGoodbye"
// returns"Hello"
// returns"Goodbye"

// "\t" = tab
"\tOnce upon a time..."
// returns "     Once upon a time..."
```

> You can check out more escape sequence examples [here](http://www.javascriptkit.com/jsref/escapesequence.shtml).  

#### You Do (5 minutes / 11:30)
* Write your full name in JavaScript.
* Get the first letter of your name using a string method.
* Write your address using proper spacing in JavaScript.
* Get just your first name from your name.
* Use a string method we haven't learned yet to do something else to your name!

## Break (10 minutes / 11:40)

## Booleans (10 minutes / 11:50)
These are the most simple JavaScript data type. They can have the values `true` or `false`

### Comparison Operators (10 minutes / 12:00)

We encounter booleans most often when comparing two values using comparison operators like...
* `==` - equal (in value)
* `===` - equal (in value and data type)
* `!=` - not equal (in value)
* `!==` - not equal (in value and data type)
* `<` - less than
* `>` - greater than
* `<=` - less than or equal to
* `>=` - greater than or equal to

What is the difference between `==` and `===`?
* `===` checks for both the data type and value.
* `==` only checks for value.

```js
1 == 1
// Does 1 equal 1? Yes ==> true

1 == 2
// Does 1 equal 2? No ==> false

1 === 1
// Does 1 equal 1 AND are both values numbers? Yes ==> true

1 == "1"
// Does 1 equal 1? Yes ==> true
// In this scenario, the numerical value inside "1" is evaluated. Javascript doesn't care that the right side is a string because we are using `==`

1 === "1"
// Does 1 equal 1 AND are both values numbers? No ==> false
// This time, Javascript does care about data types because we are using `===`. Because the left side is a Number and the right side is a String, this evaluates to false.
```

Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

|a|!a|
|---|---|
|true|false|
|false|true|

Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
>
> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

| a | b | a AND b |
| --- | --- | --- |
| true | true | ? |
| true | false | ? |
| false | true | ? |
| false | false | ? |

|a|b|a OR b|
|---|---|---|
|true|true|?|
|true|false|?|
|false|true|?|
|false|false|?|

|a|b|a `!=` b|
|---|---|---|
|3|3|?|
|1|5|?|
|2|"2"|?|

|a|b|!a AND (a OR b)|
|---|---|---|
|true|true|?|
|true|false|?|
|false|true|?|
|false|false|?|

## Type Conversion (5 minutes / 12:10)

With the person next to you, spend five minutes on the following activity. First, predict what the line of code will do, next run the code in your REPL and see what it actually does.

```js
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction:
// Actual:

"1" + "3"
// Prediction:
// Actual:

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "luftbaloons"
// Prediction:
// Actual:
```

Javascript will try to make sense of any strange operations you throw at it.
- Examples of "strange": subtracting a number from a string, multiplying `null` by 100
- It does this by converting data types using a process called "type coercion"

You might encounter this when dealing with numerical values but for whatever reason some of them are in string form.

```js
// In some cases Javascript is helpful and converts strings to numbers in the correct way.
"3" - "2"
// => 1

// ...but sometimes it doesn't. In this example, the + operator acts as if it's concatenating two strings.
"3" + "2"
// => 32

// And this?
"five" * 5
// => NaN
```

When in doubt, convert data types that should be numbers using `parseInt()`.

```js
parseInt("3")
// => 3
// parseInt converts a string to a number value, if available.

parseInt("burrito")
// => NaN, because "burrito" cannot be converted into a number
```

There are other examples of type coercion, but the point here isn't to remember them all. Just be aware that sometimes Javascript will fire weird results back at you with no explanation. Sometimes, type coercion might be the culprit.

## Arrays (15 minutes / 12:25)

Arrays are ordered collection of related data types and are organized by index.
- Indexing begins at 0 (e.g., first element in an array has an index of 0, the second has an index of 1, and so on).

We instantiate an array like this...

```js
// Instantiate with an array literal.
var mountRushmore = [ "Washington", "Jefferson", "Roosevelt" ]
```

And access its values like so...

```js
mountRushmore[0]
// => "Washington"

mountRushmore[1]
// => "Jefferson"

mountRushmore[2]
// => "Roosevelt"

mountRushmore.push("Lincoln")
// mountRushmore = [ "Washington", "Jefferson", "Roosevelt", "Lincoln" ]

mountRushmore[3]
// returns "Lincoln"

// You can also place arrays within arrays.
var letters = [ ["a","b","c"], ["d","e","f"], ["g","h","i"] ]

// How would we go about accessing the letter "f" in the above array?
letters[1][2]
// => "f"
```

### Array Methods

There are a lot of useful methods that come with Javascript we can use to inspect and modify arrays. To learn what some of them are...
* `.split`
* `.length`
* `.push`
* `.indexOf`
* `.reverse`

> There are many more, but these are the most widely-used.

#### You Do: Array Practice
1. Write an array that contains the names of the people at your row.
2. Get the index of your name in that array (using an array method).
3. Add the person in front of you to the array (using an array method).
4. Use an array method to get the first two people in the row.
5. Use an array method we haven't yet seen in class to manipulate the array.

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is more documentation on arrays.


#### The Spread Operator
The spread operator `...` allows an expression to be expanded into multiple elements.

This is useful for separating an array into individual elements...

```js
var dimensions = [10, 5, 2]

// ES5
console.log(dimensions[0], dimensions[1], dimensions[2])

// ES6
console.log(...dimensions)
```

#### Copying Arrays
Variables in JavaScript only store references to arrays rather than the array itself. Therefore, if we do something like the following, both arrays will be impacted.
```js
let arr = [1, 2, 3]
let arr2 = arr

arr2.pop()
arr
// => [1, 2]

arr2
// => [1, 2]
```

The spread operator makes it really easy to deep copy arrays in JavaScript, or create a new array with the same values as the old one:
```js
let arr = [1, 2, 3]
let arr2 = [...arr]

arr2.pop()
arr
// => [1, 2, 3]

arr2
// => [1, 2]
```

#### Destructuring Arrays

Let's say we want to pull some values out of an array and save them in variables. With what we know so far, we would do something like this...

```js
// ES5

const numbers = [1, 2, 3, 4]

const first = numbers[0]
const second = numbers[1]
const third = numbers[2]
const fourth = numbers[3]
```

With ES6, we can now destructure arrays and assign those variables like the below example. This can be very useful when you need to assign multiple variables at the same time.

```js
// ES6

const [first, second, third, fourth] = [1, 2, 3, 4]

console.log(first)
// => 1

console.log(second)
// => 2
```

We could also use this approach...

```js
const numbers = [1, 2, 3, 4]
const [first, second, third] = numbers

console.log(first)
// => 1

console.log(second)
// => 2

console.log(third)
// => 3
```

> Array destructuring knows to begin assigning values from left to right. If we had also included a `fourth` variable inside of the array destructuring in the above example, it would have set it to 4.

## Closing

## Additional Practice + Resources
- [Khan Academy Intro to Programming JS](https://www.khanacademy.org/computing/computer-programming/programming#intro-to-programming)
- [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going)
- [Eloquent JavaScript](http://eloquentjavascript.net/)

## Bonus: Linting

- Install [Linter](https://github.com/steelbrain/linter)
- Install [linter-js-standard](https://github.com/ricardofbarros/linter-js-standard)
- Install [atom-standard-formatter](https://github.com/stephenkubovic/atom-standard-formatter)
- Install [standardjs-snippets](https://github.com/gaboesquivel/atom-standardjs-snippets)

The errors we get in the linter might be confusing at first.
There is a standard list of rules [here](https://standardjs.com/rules.html).
The errors for the most part should be understandable plain English but if the meaning of an error isn't clear, google "Standard JS [Error Message Here]".

To use the formatter press `ctrl-alt-f` and the formatter will correct any errors it can in your file.

https://github.com/ga-wdi-exercises/js-data-types/blob/master/exercise.md

https://git.generalassemb.ly/ga-wdi-lessons/es6#destructuring-10-minutes--055



https://git.generalassemb.ly/ga-wdi-lessons/js-intro/blob/master/data-types-and-collections.md
