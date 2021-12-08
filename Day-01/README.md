# Day-1: All about Servers

## Introduction

- NodeJs is a Run-Time Environment built on Google Chrome's JavaScript Engine: V8.
- It allows us to Execute JavaScript outside the browser hence using for Server-Side Scripting
- It uses Event-Driven, Non-Blocking I/O Operation Model which makes it Efficient & Light-Weight.
- For Package Management it used NPM (Node Package Manager).
- NPM is the Largest Ecosystem of Open-Source Libraries in the World.

## Creating a Server

[Code for Reference](./simple-server.js)

NodeJS has a built-in module `http` using which we can create a Server:

- Import the `http` module
- Create Variables for HOST IP & PORT Number
- Use the `http.createServer()` method to create a Server
- `createServer()` takes a Callback Function as it's Argument. This Callback Executes for every Request.
- The callback receives two Arguments:
  1. request: It contains all the Information regarding the Received Request, Like: URL, Headers, etc.
  2. response: It is used to return the data back to Client.
- To set the Response Header Info we use `response.writeHead()`.
- To end an Response we use the `response.end()` method. This method tells the server that the request has been fulfilled. `end()` can also send a response as an argument string.
- To bind the HOST & PORT to the Server & to Start Listening to Incoming Requests we use the `server.listen()` method which takes in Three Arguments:
  1. PORT
  2. HOST
  3. Callback: This callback executes when we start the Server & receives an error argument in case of any Errors.

## Serving String Response

[Code For Reference](./serve-string.js)

- We can use `response.end()` to serve a string but It can serve only a single String.
- `response.write()` is the built-in method which is used to send the response.
- We can send as many responses using `response.write()`

## Serving HTML Response

[Code for Reference](./serve-html.js)

Serving Strings of Data is not useful in a Real Application. So, instead we can serve files using `fs` Built-in Module:

- `fs` is a NodeJS Built-in Module which is used for FileSystem Manipulation.
- To use it we import `fs` which gives us access to several Methods for FileSystem Manipulation
- We can use `fs.readFile()` method to read a Files data.
- `fs.readFile()` takes Two Arguments:
  1. File Path
  2. Callback Function: This function receives two arguments:
     1. `Error` which receive a value in case any error occurs
     2. `fileData` which contains the Data Contents of the Target File.
- After Reading the File we can send it using `response.end()`

## Serving JSON Response

[Code for Reference](./serve-json.js)

Usually in Web Apps data is shared via API's in the form of JSON. which is another option we have while Serving the Response:

- Set the Content-Type to `application/json`
- send the JSON response using `response.end()` or `response.write()`

## Serving PDF File

[Code for Reference](./serve-pdf.js)

Sending PDF's need two steps:

- Set the Content-Type to `application/pdf`
- Use `fs` to read the PDF File & send it through `response.write()` or `response.end()`

## Serving Audio File

[Code for Reference](./serve-audio.js)

Similar to html we can serve Audio Files using `fs.readFile()` but its better to use `fs.createReadStream()`

- Create a File Stream using `fs.createReadStream()`. `createReadStream()` method takes on argument i.e., the File Path & returns a File Stream.
- Send the Stream using `stream.pipe(response)`.

### fs.readFile() vs fs.createReadStream()

| `fs.readFile()`                                                                                 | `fs.createReadStream()`                                                                |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| It reads the file into the Memory i.e., Buffer before making it available for use               | It reads the file in chunks according to the need                                      |
| NodeJs can handle Memory Cleaning Process Easily as the entire file is read once                | Memory Cleaning is not easy because of multiple chunks                                 |
| It's slow because it reads of whole File                                                        | It's fast because it divides the file into chunks                                      |
| Not recommended in case of Large & More Quantity of Files because it will load the data at once | In this case the files will be loaded into Chunks hence significantly Fast & Efficient |

## Serving Video File

[Code for Reference](./serve-video.js)

Similar to Audio Files we can serve Video Files using `fs.createReadStream()`

## Learning Summary

- Node
- http
- fs
- Creating a Server
- Serving Different Types of Data
  - Text
  - JSON
  - HTML
  - PDF
  - Audio
  - Video
- Difference between `fs.readFile()` & `fs.createReadStream()`
