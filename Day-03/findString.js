const fs = require("fs");

const path = "./Data.txt";
const str = fs.readFileSync(path, { encoding: "utf-8" });

const pattern = /man/gim;
const matchedArray = str.match(pattern);

console.log(`Occurrences of Pattern in the String is: ${matchedArray.length}`);
