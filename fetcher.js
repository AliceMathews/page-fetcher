const request = require('request');
const fs = require('fs');

//defining URL and filepath from user input
const userInput = process.argv.slice(2);
const URL = userInput[0];
const localFilePath = userInput[1];

//check filepath is valid


//make HTTP request
request(URL, (error, response, body) => {
  if (error === null){
    //write file once request is complete
    fs.writeFile(localFilePath, body, (err) => { 
      if (err) throw err; 
  
      const stats = fs.statSync(localFilePath);
      console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`); 
    })

  } else { 
    console.log(`Invalid URL:...Exiting app`);
  }
  
});

