const fs = require("fs");

const asyncFilePath = "async-write.txt";
const SyncFilePath = "sync-write.txt";
const Content = "\n\nThis String will be Appended below the Existing File Contents\n";

// Async Append
fs.appendFile(asyncFilePath, Content, (err) => {
  if (err) {
    throw err;
  }

  console.log("Async Appended Successfully");
});

// Sync Append
fs.appendFileSync(SyncFilePath, Content);
console.log("Sync Appended Successfully");
