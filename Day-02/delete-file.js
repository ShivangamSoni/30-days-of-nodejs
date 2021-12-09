// Create file-to-be-deleted-async.txt & file-to-be-deleted-sync.txt for it to run successfully
const fs = require("fs");

const AsyncFilePath = "file-to-be-deleted-async.txt";
const SyncFilePath = "file-to-be-deleted-sync.txt";

fs.unlink(AsyncFilePath, (err) => {
  if (err) {
    throw err;
  }

  console.log("Async Remove Complete");
});

fs.unlinkSync(SyncFilePath);
console.log("Sync Remove Complete");
