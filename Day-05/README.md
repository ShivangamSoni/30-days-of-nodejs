# Day-5: All about Errors

## Introduction

Errors are issues that makes the program not Execute Properly or Stop it's Execution Completely.

## Types of Errors:

1. Syntax Errors:
   - These Errors occur when the Code fails to follow the Languages Grammar/Syntax.
   - E.g.: invoking a function without the second parentheses, or creating a string literal with quotes, or starting a variable name with a Number
1. Logic Errors:
   - Logical Error doesn't break the Code but results in Unexpected/Incorrect Output.
1. Compilation Errors:
   - These Errors occur when the Compiler is not able to Translate our Code properly.
   - Or the Compiler is not able able to understand the Code.
1. Runtime Errors:
   - These errors occur when the Program is beng Executed
   - These errors could happen due to mismatching configuration between Development & Production , or due to lack of some expected Data
   - E.g.: Accessing a Non-Existing Property from an Object
1. Arithmetic Errors
   - Its a Logical Error specific to Mathematical Operations/Calculations
   - e.g.: Any Number Divided by 0 in most Languages lead to an Error. In JS in results in Global Numerical Value `Infinity`
1. Resource Errors:
   - Every Computer allocates an amount of Resource to every Program.
   - Resource Error occurs when we try to use more Resources than Allocated.
1. Interface Errors:
   - It Occurs when there is a disconnect between the Purpose & Use of Program
   - E.g.: an API that requires a Parameter or Header to be set but those Parameters & Headers are not set.

## Errors in NodeJS

- An `error` object in NodeJS captures the **Stack Trace**
- **Stack Trace** provides a Detail of Error including: Point where Error Occurred & it may provide an Error Description.

## Error Object

[Code for Reference](./error.js)

Every Error in NodeJS is an Instance of Error Error Object have following Methods & Properties:

1. `new Error(message)`: It's used to create a new Error Object. It also sets the `error.message`
1. `error.message`: It shows the Description of the Error. Mostly Message is Displayed at the First Line of Stack Tace.
1. `error.code`: A String Label Identifier for Error Type. [Node Error Codes](https://nodejs.org/api/errors.html#nodejs-error-codes)
1. `error.stack`: returns a string providing detail about where in the code the error was instantiated.
1. `Error.captureStackTrace()`: This method creates the `error.stack` property
1. `Error.stackTraceLimit`: Specifies the Number of Stack Frames captured. It can be any Valid JS Number. 10 is the default Limit.

## Error Propagation & Interception

There are Several ways in which Errors may Propagate & can be handled. The way in which errors are Reported & handled depends upon the type of Error & API Style.

1. **Synchronous API**: These API's use Blocking methods & use `throw` to report Errors
1. **Asynchronous API**: Async Errors can be reported in multiple ways:
   1. Errors can be routed to the Object's `error` event.
   1. Async methods accept Callbacks that are implemented as: Error-First Callback Approach i.e., the first argument passed to the callback is an Error Object for handling any potential Errors. In case of no error this argument is kept as `null`.
   1. Few Async Methods still use `throw` to raise exception which can be handled using `try/catch` block.

## NodeJS Styled Callbacks

[Code for Reference](./error-first-callbacks.js)

NodeJs follows Error-First Callback Pattern where the Callback is executed by Async Process & gets two arguments:

1. Error Object which is used for error handling. In case there are no Errors this argument is `null`.
1. Data which contains the data after successful completion of Operation.

## **`try/catch`** not useful for Callback based Async

- If we enclose the Async Method call in a try/catch in the hopes of error being handled. It would not work.
- Reason for it is that the Actual Scripts has finished working by the Time Async Method is Executed.
- try/catch is useful for Promise based Async Methods because there we can use async/await.

## NodeJS Error Categories

In NodeJS all Errors belong to one of the following Categories:

1. Standard JS Errors:
   - **\<URI> error:** Thrown when a Global URI handling function is misused.
   - **\<Eval> error:** Thrown when call to Eval Fails
   - **\<Type> error:** This is a Subclass of Error which shows that the argument provided is not of the allowed type. e.g.: passing an `object` to a function where `string` was expected.
   - **\<Range> error:** This is a Subclass of Error which shows that the provided argument was not in the acceptable range of values
   - **\<Syntax> error:** This is a Subclass of Error which indicates that the code written in not valid JavaScript.
   - **\<Reference> error:** This is a Subclass of Error that occurs when we try to access a variable which is not defined.
1. System Errors: These errors are generated on runtime. These happen when an operation violates the Constraints set by the Operating System. Properties of System Error:
   - `error.code`: a String representing the error code or type of error. e.g.: ENOENT, EACCES, etc.
   - `error.port`: Represents the Connection Port which is not available
   - `error.address`: Address to the failed Connection.
   - `error.path`: Relevant Invalid Pathname
   - `error.syscall`: A string representing failed `syscall`
   - `error.errno`: This can be a Number or a String. Number value will be negative corresponding to Error Code. String Value is equivalent to `error.code`.
1. User-Specific Errors: These error are generated by Client-Side application code
1. Assertion Errors: This type of error is raised by `assert`. this types of error occurs when an Exceptional Logic Violation is detected.

## Learning Summary

- Error & Types of Error
- Propagation & Interception of Errors
- NodeJS style of Async Callbacks
- Potential Error categories
