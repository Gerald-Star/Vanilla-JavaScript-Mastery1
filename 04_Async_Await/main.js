
// How does async/await work?

// The async keyword is used to create an async function that returns a promise that is either resolved with the value returned by the function or rejected with an exception thrown from the function.

// The await keyword is used to pause the execution of the async function and wait for the promise to be resolved. It can only be used inside an async function.

// Here is an example of an async function that fetches data from an API using the fetch function and returns the result as a promise:

// JS is a single-threaded language, meaning that it can only execute one task at a time. This can be a problem when working with asynchronous operations like fetching data from an API, as it can block the execution of other tasks.

// The browser needs to stay responsive to user input and other events, so it uses a mechanism called the event loop to handle asynchronous operations. When an async operation is started, it is added to a queue, and the event loop continues to execute other tasks. When the async operation is complete, a callback is added to the queue to handle the result.

// The async/await syntax provides a more readable and concise way to work with promises in JavaScript. It allows you to write asynchronous code that looks like synchronous code, making it easier to understand and maintain.

// The browser needs to stay responsive to user input and other events, so it uses a mechanism called the event loop to handle asynchronous operations. When an async operation is started, it is added to a queue, and the event loop continues to execute other tasks. When the async operation is complete, a callback is added to the queue to handle the result.


//! JS runtime environment has a single-threaded event loop that handles executing code, responding to events, and scheduling tasks. When an async operation is started, it is added to a queue, and the event loop continues to execute other tasks. When the async operation is complete, a callback is added to the queue to handle the result.

// Functions lives in heap memory, and the call stack is used to keep track of the functions that are currently being executed. When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack.
// JS has a callstack that keeps track of the functions that are currently being executed. When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack.
// What is happening in the stack is that the function is being called, and the result is being returned. The stack is used to keep track of the functions that are currently being executed. When a function is called, it is added to the stack, and when it returns, it is removed from the stack.
// The event loop is responsible for handling asynchronous operations in JS. When an async operation is started, it is added to a queue, and the event loop continues to execute other tasks. When the async operation is complete, a callback is added to the queue to handle the result.


async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}