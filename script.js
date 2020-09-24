// console.log('Hello from script 1')

// const number = 9
// console.log(number)




////////////// STRINGS ////////////
// 'Hello World' -- single quotes
// "Hello world!" -- double quotes
// `Hello World` -- backticks



// String interpolation

// let greetings = 'Hello my name Carlos'
// let secondSentence = "What is your name?"


// console.log("Hello" + greetings +  " world")
// console.log(`Hello ${name}`)

////////// Escape Characters //////
// let str = 'What\'s your name?'
// console.log(str)

// console.log(`Hey\nyou`)

//////// Numbers ////////////

// No quotes!!!


/////////// Modulus /////////////
// console.log(5 % 3)
// Result is 2 because 3 goes into 5 once evenly.
// Two is left over

// console.log(10 % 4)


//////// Booleans //////////////
// Will always be true or false!!!!

//True -- double equals checks only for value
// console.log(10 == "10")


//False -- triple equals checks for value AND data-type
// console.log(10 === "10")


// != - not equal
// console.log(10 != 10)


// console.log(10 != "10")

// console.log(10 !== "10")

// console.log(5 <= 3)



////////// Logical Operators ////////
// const pizza = false
// const chipotle = false

// ! -- NOT
// console.log(!pizza)
// console.log(!chipotle)

// && -- AND - checks values on either side.
// If both are true the response is true
// If either value is false then the response is false
// const happy = pizza && chipotle
// console.log(pizza && chipotle)


// || - OR - check if EITHER value is true
// If just one value is true, then the response is true

// const happy = !pizza || chipotle
// console.log(true && false)



///////// Variables  ////////////////
var nowadays = 'outdated'

let current = true
const current2 = true

// let - you can reassign
current = 'something else'
// console.log(current)


// Cannot reassign a const
// current2 = false
// console.log(current2)


// const url = "https://mysite.com"

// Returns undefined - variable has been declared but
// intentionally not set to a value
// let noValue;
// console.log(noValue)

// Will return 'not defined' -- it has not been declared
// // console.log(noVal)

// noValue = 'I have a value'
// console.log(noValue)

// let myOtherVar = 10 ** 5
// console.log(myOtherVar)

// const myVar = 42
// console.log(myVar)

// const sum = myVar + 8
// console.log(sum)

// let doubleSum = 2 * sum
// console.log(doubleSum)

// const equation = (1 + 1) * 2;


// const person = {
//     name: 'Clay Stevens', 
//     profession: 'sales', 
//     contact: '111-111-1111'
// };

// // Can change properties inside the object
// person.name = 'Fred Johnson'

// console.log(person)

// Not allowed to change the entire variable
// person = { name: 'Carlos', happy: true }

// const mobilePhone = {
//     type: 'iphone'
//   };
  

// console.log(mobilePhone)

// mobilePhone.type = 'samsung'
// console.log(mobilePhone)

// // mobilePhone = {
// //     type: 'samsung'
// // }

// mobilePhone.type = 'microsoft windows'
// console.log(mobilePhone)



////////////// Null //////////////////
// let undef
// console.log(undef)


// // Intentionally setting a variable to have no value
// let nullValue = null
// console.log(nullValue)


// const myFavoriteNumber = 5

// // => false, because 5 is valid

// const myUnrealNumber = 0 / 0
// isNaN(myUnrealNumber)



// Variables in JS should be camel cased
const camelCaseInJSTrue = true
// const snake_case = 'python'


// Will throw an error
// let kebab-case = null;

// const pizzatopping = 'not the way to do it'
// const pizzaTopping = 'pepperoni'
// console.log(pizzatopping)
// console.log(pizzaTopping)



// Command + "/" will comment out any line where the cursor is
// Or any highlighted lines
// Ex:
// This is where I want to have a comment



////////// Type conversion /////////////
const str = "18"
const cat = "kitten"


// Number() new function
// console.log(Number(str))
// console.log(Number(cat))
// console.log(Number('five'))


// console.log('-----------')
// parseInt() old version -- either way is fine!
// console.log(parseInt(str))
// console.log(parseInt(cat))
// console.log(parseInt('five'))




////////////// Arrays /////////////////////
                        //    0              1            2
// const mountRushmore = ["Washington", "Jefferson", "Roosevelt"]

// console.log(mountRushmore[1])

// mountRushmore.push('Lincoln')


const letters = [
    ["a", "b", "c"], 
    ["d", "e", "f"], 
    ["g", "h", "i"]
];

// Returns 'i'
// console.log(letters[2][2])



// Any data type can live inside of an array
let mixed = [
    { object: "value" },
    "one string",
    function() {
      console.log("I'm fun")
    },
    0,
    "a second string"
  ];

// console.log(mixed[2])



////////// Objects //////////////
let student = {
    name: 'Kway',
    age: 25,
    profession: 'Software Engineer',
    walk: () => {
        return 'I am walking'
    }
}


const student2 = {name: 'Mike'}

// console.log(student.walk())
// console.log(student2)


// Bracket notation requires key name in quotes!
// console.log(student['name'])
// console.log(student['age'])

// // Dot notation
// console.log(student.name)




//////////// Methods //////////////


///// String Methods ///////

// let greetings = "Hi there friend!"

// let buddy = greetings.substr(9, 6)
// console.log(buddy)

// let greeting = "Hello";
// let place = "Las Vegas";

// console.log(greeting.concat(" ", place))
// console.log(`${greeting} ${place}`)
// console.log(greeting + place)

// let nooo = "Luke, I am your father";
// console.log(nooo.indexOf("father"))


// let phrase = "Rubber baby buggy bumpers is a hard one";

// const phraseArr = phrase.split(" ")
// // console.log(phraseArr)


// console.log(phrase.length)
// // phrase.split()



//////////// Number Methods /////////////


// Converts a number to a string

// let makeMeAString = 82456725781561872
// console.log(makeMeAString)
// console.log(makeMeAString.toString())



// Trims the end of the number after the decimal to the specified
// argument
const num = 7 / 3 
console.log(num.toFixed(2))



const colors = ['red', 'blue', 'purple']

// Adds to the end of the array
colors.push('pink')

// Takes off the last element in the array
colors.pop()

// Takes off the first element in the array
colors.shift()


// Adds an element to the front of the array
colors.unshift('green')


console.log(colors.indexOf('green'))

console.log(colors.indexOf('magenta'))







