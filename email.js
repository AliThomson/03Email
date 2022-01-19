const fs = require("fs");
const txtFile = fs.readFileSync("test.txt", {encoding: 'utf8'});

const regex = /@softwire.com\b/g //regex for softwire.com domain
const domainRegex = /@\S*/g //regex for all domains
 
let found = txtFile.match(domainRegex); //creates array of all domains in text file

const dictionary = {}; //empty dictionary oject

//loops through found array to idenity unique domains, add to dictionary, and keep track of count
for (let i = 0; i < found.length; i++) {
  if (dictionary[found[i]] === undefined) {
    dictionary[found[i]] = 1;
  } else {
    dictionary[found[i]] = dictionary[found[i]] + 1;
  }
}

//creating 2d array from domain data in dictionary
const domainArray = []; 
for (var domain in dictionary) {
    domainArray.push([domain, dictionary[domain]]);
}

//logs top x domains to the console
const logTopDomains = (array, n) => {
  array.sort((a, b) => a[1] - b[1]).reverse();
  return array.slice(0, n);
}
console.log(logTopDomains(domainArray, 10));