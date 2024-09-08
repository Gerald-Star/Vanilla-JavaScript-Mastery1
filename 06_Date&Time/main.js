
// ? Date and Time in JS
// The Date object is used to work with dates and times in JavaScript. It provides methods for creating, formatting, and manipulating dates and times.

// Creating a Date Object

// You can create a new Date object using the new keyword followed by the Date constructor:

const now = new Date();

// The Date object represents a specific point in time, with millisecond precision. By default, the Date object is initialized to the current date and time.

// You can also create a Date object with a specific date and time by passing the year, month, day, hour, minute, second, and millisecond values to the Date constructor:

const date = new Date(2022, 0, 1, 12, 0, 0, 0);

// The month parameter is zero-based, so January is represented by 0, February by 1, and so on.

// ? Formatting Dates Methods

// The Date object provides methods for formatting dates and times. The toDateString, toTimeString, and toLocaleString methods return a string representation of the date and time in different formats:

const date1 = new Date();

console.log(date1.toDateString()); // "Sat Jan 01 2022"
 
console.log(date1.toTimeString()); // "12:00:00 GMT+0000 (Coordinated Universal Time)"

console.log(date1.toLocaleString()); // "1/1/2022, 12:00:00 PM"

//? You can also use the toISOString method to get a string representation of the date and time in ISO 8601 format:

console.log(date.toISOString()); // "2022-01-01T12:00:00.000Z"

// Manipulating Dates

// The Date object provides methods for manipulating dates and times. You can set the year, month, day, hour, minute, second, and millisecond values using the setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, and setMilliseconds methods:

// const date = new Date();

// date.setFullYear(2023);

// date.setMonth(1);



// ? Console.time

//! The console.time method is used to start a timer that can be used to measure the time taken to execute a block of code. You can give the timer a name as an argument, and then use the console.timeEnd method with the same name to stop the timer and log the elapsed time to the console:

/*
console.time('fetchData');

fetchData().then((data) => {
    console.log(data);
    console.timeEnd('fetchData');
});
*/
//! The console.time method is useful for measuring the performance of your code and identifying bottlenecks that may be slowing down your application.

/*
console.time("stopwatch");
runAround();

console.timeEnd("stopwatch");
console.timeLog("stopwatch");
console.time("lap")

*/


// ! setTimeout()

// The setTimeout function is used to schedule a function to be executed after a specified delay in milliseconds. The function is added to the call stack after the specified delay, and the event loop will execute it when the call stack is empty.

// The setTimeout function takes two arguments: a callback function to be executed and a delay in milliseconds:

setTimeout(() => {
    console.log("Hello!> 3 second later");
}, 3000);
console.log("This is the browser API");

  setTimeout(() => {
        console.log("Hello World!");
    }, 3000);


     setTimeout(() => {
    console.log("Hello!> 1 second later");
    }, 1000);
    console.log("This is the browser API");


// The setTimeout function is commonly used to create delays in JavaScript code, such as animations, loading indicators, and other time-based operations.


// ! setInterval()

const traveling = setInterval(() => {
    console.log("I am traveling");
}, 1000);

clearInterval(traveling);
console.log("I am back");


// Math.random

Math.P1
