//files
const fs = require('fs');
//server
const http = require('http');
// routing 
const url = require('url');

//FILES
/////////////////////////
//fs.readFileSync()   //rFS, takes two argument the file we are reading and the character included

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn)

//How to write to a new file 

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!')

//Blocking in Syinchronous and Asynchronous way

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn)
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!')

//Non-blocking asynchronous way\const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3)
        
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has be written')  
//             })
//         })
//     })
// })
// console.log('Will read file')


/*Cretaing a Simple web server & Routing*/
///////////////////////////////////

const server = http.createServer((req, res) => {
    const patName = req.url;

    if (patName === '/' || patName ==='/overview') {
        res.end('This is the OVERVIEW');
    } else if (patName === '/product') {
        res.end('This is the PRODUCT')
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});
//Listening incoming request from client 
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
});

/*Building a simple API*/