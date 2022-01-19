const fs = require("fs");
const txtFile = fs.readFileSync("test.txt", {encoding: 'utf8'});

const regex = /@softwire.com\b/g
const domainRegex = /@\S*/g
 
let found = txtFile.match(domainRegex);

const dictionary = {

}
//array1.forEach(element => console.log(element));

for (let i = 0; i < found.length; i++) {
  if (dictionary[found[i]] === undefined) {
    dictionary[found[i]] = 1;
  } else {
    dictionary[found[i]] = dictionary[found[i]] + 1;
  }
}
 
console.log(Object.keys(dictionary).length);
console.log(dictionary);
console.log(dictionary['@yahoo.com'] + 1)