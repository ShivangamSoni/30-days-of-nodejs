const HTTP = require("http");

const HOST = "127.0.0.1";
const PORT = 7000;

const json_response = {
  status: 200,
  message: "Successful",
  results: {
    name: "Shivi",
    age: 22,
  },
};

const server = HTTP.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(json_response));
  response.end();
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log(`Error Ocurred: ${error}`);
  }

  console.log(`Server is Listening on:\n\thttp://${HOST}:${PORT}`);
});
