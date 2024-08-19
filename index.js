// console.log("Hello, world");

// create a file
// const { error } = require('console');
// const fs = require('fs');

// write to a file
// fs.writeFileSync('newFile.txt', 'hello, world');

//  read from a file
// console.log('start reading file...')
// const data = fs.readFileSync('newFile.txt', 'utf-8')
// console.log(data)
// console.log('end of program')

// fs.readFile('newFile.txt', 'utf-8', (error, data) => {
//     if(error){
//         console.log("error reading file")
//     }
//     console.log(data)
// },
//     console.log("end of program")
// )

// const fs = require('fs').promises;

// fs.writeFile('newFile.txt', 'hello, world');

// fs.readFile('newFile.txt', 'utf8')
//     .then(data => {
//         console.log('Content of the file:', data);
//     })
//     .catch(error => {
//         console.error('Error reading from file:', error);
//     });

const fs = require('fs').promises;

async function readContentOfFile() {
    try {
        const data = await fs.readFile('newFile.txt', 'utf8');
        console.log('Content of the file:', data);
    } catch (error) {
        console.error('Error reading from the file:', error);
    }
}
readContentOfFile()

const day = false;
let theme;
if(day){
   console.log( theme = "light");
} 
else {
    console.log (theme = "dark");
}

