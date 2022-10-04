import http from 'http';
import chalk from 'chalk';
import fs from 'fs';

//  import {readFile} from './source/name-data'
// import {getName} from './nameController/nameController';
// import { writeFile} from './dataSource/nameDataSource'
import { readFile } from '../source/name-data'
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === "/tasks" && req.method === "GET") {
    const myData = readFile();
     res.end(JSON.stringify(myData));
  }else if (req.url === '/tasks' && req.method === "POST") {
       let body = '';
       req.on("data", (chunk) => {
        body += chunk.toString();
       });

       req.on("end",()=> {
        const tasks = readFile();
        const task = JSON.parse(body);
        tasks.push(task);
        res.end(JSON.stringify(tasks));
        writeFile(tasks);
       });
      } else if ( req.url.match(/\/tasks\/\w+/) && req.method === "GET") {
        const tasks = readFile();

        const ID = req.url.split('/')[2];
        const task = tasks.find(item => item.id == ID)
        res.end(JSON.stringify(task))
        console.log(ID)
        
        console.log(tasks.find(item => item.id == ID))

       } else if (req.url.match(/\/tasks\/\w+/) && req.method === "DELETE") {
          const tasks = readFile();
          const ID = req.url.split('/')[2];
          const taskArray = tasks.filter(item => item.id != ID)
          res.end(JSON.stringify(taskArray));
          console.log(taskArray);
          writeFile(taskArray)
       } else {
      res.end('Hello World');
  

}
});




function writeFile (tasks){
 fs.writeFileSync("name.json", JSON.stringify(tasks))
}

// function readFile () {
//   const data = fs.readFileSync("name.json")
//   console.log(data);
//   return JSON.parse(data); 
// }



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(chalk.blue('Hello') + ' World ' + chalk.red('!'));
})
