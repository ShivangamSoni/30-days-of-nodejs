const fs = require("fs");

const callback = (error, data) => {
  if (error) {
    console.error(`Error Occurred: ${error}`);
    return;
  }

  console.log(`Data: ${data}`);
};

const config = { encoding: "utf-8" };

fs.readFile("data.txt", config, callback);
fs.readFile("nonExistingFile.txt", config, callback);
