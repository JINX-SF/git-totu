const first = readFileSync('./content/First.txt','utf8');
const second = readFileSync('./content/Second.txt','utf8');
console.log(first,second);
writeFileSync('./content/result.txt',`here the good result : ${first},${second}`,{flag : 'a'})


const {readFileSync,writeFileSync} = require('fs');


const { readFile, writeFile } = require("fs");

readFile("./content/First.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;

  writeFile("./content/result2.txt", `here the good result : ${first}`, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File written successfully!");
  });
});
console.log('starting next one');