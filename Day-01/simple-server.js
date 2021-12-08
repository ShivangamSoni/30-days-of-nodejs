const HTTP = require("http");

const HOST = "127.0.0.1";
const PORT = 7000;

const server = HTTP.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log("Server Working");
  response.end("Server Worked Successfully");
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log(`Error Ocurred: ${error}`);
  }

  console.log(`Server is Listening on:\n\thttp://${HOST}:${PORT}`);
});
