const HTTP = require("http");
const fs = require("fs");

const HOST = "127.0.0.1";
const PORT = 7000;
const videoFilePath = "serving-video.mp4";

const server = HTTP.createServer((request, response) => {
  fs.exists(videoFilePath, (exists) => {
    if (exists) {
      response.writeHead(200, { "Content-Type": "application/mp3" });
      const videoStream = fs.createReadStream(videoFilePath);
      videoStream.pipe(response);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("It's a 404");
    }
  });
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    return console.log(`Error Ocurred: ${error}`);
  }

  console.log(`Server is Listening on:\n\thttp://${HOST}:${PORT}`);
});
