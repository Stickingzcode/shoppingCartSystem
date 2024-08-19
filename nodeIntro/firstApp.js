console.log("Hello from Node.js");
//write output to a file using node's built in functionality(file system).
const fs = require('fs'); 
// step 1: import the fs object
fs.writeSync(1, "this is a new file"); 
// fs calls a method writeSync that writes a file to our harddrive
// it takes in two parameters: the name of the file, and the content of the file.
fs.writeFileSync('anotherFile.txt', "this is me trying out another fs method");
// apparently, writeSync takes a number while writeFileSync takes a string
