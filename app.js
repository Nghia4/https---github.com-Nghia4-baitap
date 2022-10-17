const http = require('http')
const mongoose = require('mongoose')

const hostname = '127.0.0.1';
const port = 3000; 

const  getRoute  = require('./router/router.js');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const router = getRoute(req);
  router(req , res);
})



mongoose.connect('mongodb+srv://nghia1:nghia123@baitap.mgnbrjn.mongodb.net/test')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected!')
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
