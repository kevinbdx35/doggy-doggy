const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, dat) => {
  console.log(`Breed : ${data}`);
});
