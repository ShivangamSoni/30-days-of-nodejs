# Day-2: File System in Node.js

## Introduction

- Node provides the `fs` module using which we can manipulate the File System Programmatically.
- `fs` provides Synchronous & Asynchronous methods to perform File I/O.
- These methods are just a wrapper around the standard POSIX functions.

---

**POSIX:**

The **Portable Operating System Interface** is a family of Standards specified by the IEEE.

POSIX helps in maintaining Compatibility between different Operating Systems.

POSIX defines System-Level & User-Level API's, Command Line Shells & Utility Interfaces.

---

## Reading File Data

[Code for Reference](./read-file.js)

- We can Read the File in two ways:
  1. Synchronous:
     - We use the `fs.readFileSync()` method
     - It takes the Filepath as it's argument & returns the Content.
  2. Asynchronous:
     - We use `fs.readFile()` method for Asynchronous Read
     - It takes two arguments: Filepath & a Callback function
     - The callback receives two arguments:
       - Error In case of an Error
       - File Data

## Writing a File

[Code for Reference](./write-file.js)

- We can Write the File in two ways:
  1. Synchronous:
     - We use the `fs.writeFileSync()` method
     - It takes two Arguments Filepath & the Content to write.
  2. Asynchronous:
     - We use `fs.writeFile()` method for Asynchronous Write
     - It takes three arguments: Filepath, Content & a Callback function
     - The callback receives one argument i.e. a Error in case of an error
- If the File doesn't exist then Node Creates a new one.
- If the File exists then the Content overwrites the existing file Contents.

## Append to a File

[Code for Reference](./append-file.js)

- We can Append to a File in two ways:
  1. Synchronous:
     - We use the `fs.appendFileSync()` method
     - It takes two Arguments Filepath & the Content to write.
  2. Asynchronous:
     - We use `fs.appendFile()` method for Asynchronous Append
     - It takes three arguments: Filepath, Content & a Callback function
     - The callback receives one argument i.e. a Error in case of an error
- If the File doesn't exist then Node Creates a new one.
- If the File exists then the Content are appended/added after the existing Contents

## Rename a File

[Code for Reference](./rename-file.js)

- We can Rename the File in two ways:
  1. Synchronous:
     - We use the `fs.renameSync()` method
     - It takes two arguments Existing FilePath & New FilePath/Name
  2. Asynchronous:
     - We use `fs.rename()` method for Asynchronous Rename
     - It takes three arguments: Filepath, new FilePath & a Callback function
     - The callback receives one Error argument In case of an Error

## Delete File

[Code for Reference](./delete-file.js)

- We can Delete/Unlink the File in two ways:
  1. Synchronous:
     - We use the `fs.unlinkSync()` method
     - It takes the FilePath as it only argument
  2. Asynchronous:
     - We use `fs.unlink()` method for Asynchronous Delete
     - It takes two arguments: Filepath & a Callback function
     - The callback receives one Error argument In case of an Error

## Learning Summary

- Using Node.JS `fs` module for File Manipulation
- Performing Synchronous & Asynchronous Operations:
  - Read: `fs.readFile()` & `fs.readFileSync()`
  - Write: `fs.writeFile()` & `fs.writeFileSync()`
  - Append: `fs.appendFile()` & `fs.appendFileSync()`
  - Rename: `fs.rename()` & `fs.renameSync()`
  - Delete: `fs.unlink()` & `fs.unlinkSync()`
