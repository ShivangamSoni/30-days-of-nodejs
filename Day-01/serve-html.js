const HTTP = require("http");
const fs = require("fs");

const HOST = "127.0.0.1";
const PORT = 7000;

const server = HTTP.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile("index.html", (err, fileData) => {
    if (err) {
      console.log(`Error Ocurred while Reading File: ${err}`);
      return;
    }

    response.end(fileData);
  });
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log(`Error Ocurred: ${error}`);
  }

  console.log(`Server is Listening on:\n\thttp://${HOST}:${PORT}`);
});
