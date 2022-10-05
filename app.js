const http = require ('http');
const fs = require ('fs');

const { readMyData, readMyDataById, deleteDataById, createData } = require('./Controller/nameController.js')
const hostname = '127.0.0.1';
const port = 3000; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === "/tasks" && req.method === "GET") {
    readMyData(req, res);
  }else if (req.url === '/tasks' && req.method === "POST") {
    createData(req,res);
  } else if ( req.url.match(/\/tasks\/\w+/) && req.method === "GET") {
    readMyDataById(req,res);
  } else if (req.url.match(/\/tasks\/\w+/) && req.method === "DELETE") {
    deleteDataById(req,res)
  } else {
    res.end('Hello World');
}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
