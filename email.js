const fs = require("fs");
const txtFile = fs.readFileSync("test.txt", {encoding: 'utf8'});

let counter = 0;

 
for(let i = 0; i <= txtFile.length; i++) {
  if (txtFile.substring(i, i+13) === "@softwire.com") { 
      counter += 1
    }
}
 
console.log(counter);