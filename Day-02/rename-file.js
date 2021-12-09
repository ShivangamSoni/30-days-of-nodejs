const fs = require("fs");

const asyncFilePath = "rename-async.txt";
const asyncNewFilePath = "async-renamed.txt";
const syncFilePath = "rename-sync.txt";
const syncNewFilePath = "sync-renamed.txt";

fs.rename(asyncFilePath, asyncNewFilePath, (err) => {
  if (err) {
    throw err;
  }

  console.log("Async Rename Complete");
});

fs.renameSync(syncFilePath, syncNewFilePath);
console.log("Sync Rename Complete");
