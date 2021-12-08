const HTTP = require("http");
const fs = require("fs");

const HOST = "127.0.0.1";
const PORT = 7000;

const server = HTTP.createServer((request, response) => {
  fs.readFile("serving-pdf.pdf", (error, fileData) => {
    if (error) {
      // JSON Response in case of Error
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ status: "Error", msg: error }));
    } else {
      response.writeHead(200, { "Content-Type": "application/pdf" });
      response.write(fileData);
      response.end();
    }
  });
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log(`Error Ocurred: ${error}`);
  }

  console.log(`Server is Listening on:\n\thttp://${HOST}:${PORT}`);
});
