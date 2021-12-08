const HTTP = require("http");
const fs = require("fs");

const HOST = "127.0.0.1";
const PORT = 7000;
const audioFilePath = "serving-audio.mp3";

const server = HTTP.createServer((request, response) => {
  fs.exists(audioFilePath, (exists) => {
    if (exists) {
      response.writeHead(200, { "Content-Type": "application/mp3" });
      const audioStream = fs.createReadStream(audioFilePath);
      audioStream.pipe(response);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("It's a 404");
    }
  });

  // Not Recommended
  // fs.readFile(audioFilePath, (error, fileData) => {
  //   response.writeHead(200, { "Content-Type": "application/mp3" });
  //   response.end(fileData);
  // });
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log(`Error Ocurred: ${error}`);
  }

  console.log(`Server is Listening on:\n\thttp://${HOST}:${PORT}`);
});
