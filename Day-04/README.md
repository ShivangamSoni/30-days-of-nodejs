# Day-4: Console Module in NodeJS

## Introduction

- `console` module provides us the Debugging Console
- It Exports two components:
  1. **console class**: It includes `console.log()`, `console.warn()`, `console.error()` which allow us to write to NodeJS Stream.
  2. **Global console instance**: This method is configured to write on `process.stderr()` , `process.stdout()`

## Different Console Methods

[Code for Reference](./log.js)

### `console.log()`

- Used to print to `stdout` on a newline. We can pass multiple arguments to it:
  - Any Data Literal
  - Any Variable
  - Multiple Values Comma Separated: It adds space between each value
  - Using String Formatters/Placeholders & passing values Comma Separated

### `console.clear()`

- Clears the `stdout`

### `console.count()` & `console.countReset()`

- Counts a Log using a Unique Label
- Makes easy to keep count of Certain Outputs Count
- `countReset()` is used to clear a particular Count

### `console.error()`

- Print an Error to `stderr`

### `console.warn()`

- Print an Warning to `stderr`

### `console.time() & console.timeEnd()`

- `time()` starts the timer & `timeEnd()` ends it & console the Elapsed Time since Start
- Helpful in calculating the Execution time of a Piece of Code
- Takes a Label argument for Timer

## Learning Summary

- Console
- console methods:
  - console.log()
  - console.warn()
  - console.error()
  - console.clear()
  - console.count()
  - console.countReset()
  - console.time()
  - console.timeEnd()
