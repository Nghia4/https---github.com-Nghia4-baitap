const fs = require ('fs');

// function writeFile (tasks){
//     fs.writeFileSync("./name.json", JSON.stringify(tasks))
//    }
   
   function readFile () {
     const data = fs.readFileSync("name.json")
     console.log(data);
     return JSON.parse(data); 
   }

//    module.exports = {
//     writeFile,
//     readFile
//    }
module.exports = {
    readFile
}