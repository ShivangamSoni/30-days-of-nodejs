const fs = require("fs");

const filePath = "message.txt";

// Async Reader
fs.readFile(filePath, (err, fileData) => {
  if (err) {
    throw err;
  }

  console.log(`Async Reader Content: ${fileData}`);
});

// Sync Reader
const fileData = fs.readFileSync(filePath);
console.log(`Sync Reader Content: ${fileData}`);
