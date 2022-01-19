const fs = require("fs");
const txtFile = fs.readFileSync("test.txt", {encoding: 'utf8'});

const regex = /@softwire.com\b/g
 
let found = txtFile.match(regex);
 
console.log(found.length);