const fs = require("fs");

const path = "./data.html";
const data = fs.readFileSync(path, { encoding: "utf-8" });

const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

const matches = data.match(pattern);
console.log(`Occurrences of Tags: ${matches.length}`);
