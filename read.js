const fs = require ('fs');
 
   function readFile () {
     const data = fs.readFileSync("name.json")
     console.log(data);
     return JSON.parse(data); 
   }

   function writeFile (tasks){
    fs.writeFileSync("name.json", JSON.stringify(tasks))
   }

module.exports = {
    readFile,
    writeFile
}