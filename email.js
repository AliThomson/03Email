const fs = require("fs");
const txtFile = fs.readFileSync("test.txt", {encoding: 'utf8'});

const regex = /@softwire.com\b/g //regex for softwire.com domain
const domainRegex = /@[^.]*/g //regex for all domains, without regard for different top-level domain. For example hotmail.com and hotmail.co.uk are considered to be the same.
 
let found = txtFile.match(domainRegex); //creates array of all domains in text file

//loops through found array to idenity unique domains, add to dictionary, and keep track of count
const dictionary = found.reduce(function (allDomains, domain) {
  if (domain in allDomains) {
    allDomains[domain]++
  }
  else {
    allDomains[domain] = 1
  }
  return allDomains
}, {})
//console.log(dictionary);

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

//returns the domains that occur more than x number of times
const minNumOfDomains = (array, n) => {
  return array.filter(domain => domain[1] > n);
}
//console.log(minNumOfDomains(domainArray, 200));