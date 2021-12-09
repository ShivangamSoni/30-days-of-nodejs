const fs = require("fs");

const asyncFilePath = "async-write.txt";
const SyncFilePath = "sync-write.txt";
const content = "This string is written into this file using Node.JS fs module";

// Async Write
fs.writeFile(asyncFilePath, content, (err) => {
  if (err) {
    throw err;
  }

  console.log("Async Writer Operation Complete");
});

// Sync Write
fs.writeFileSync(SyncFilePath, content);
console.log("Sync Writer Operation Complete");
