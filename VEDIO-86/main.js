// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1> Hello world </h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//import http from "http"
// import { a,b,d } from "./mymodules.js";
// console.log(a,b,d)
// import obj from "./mymodules.js"
// console.log(obj)

// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)