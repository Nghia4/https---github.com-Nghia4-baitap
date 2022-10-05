const fs = require ('fs')

const { readFile } = require('../source/read.js')
const { writeFile } = require('../source/read.js')

const myData = readFile();


function readMyData (req, res) {
    console.log(myData)
    res.end(JSON.stringify(myData));
}

function readMyDataById (req,res) {
        const ID = req.url.split('/')[2];
        const task = myData.find(item => item.id == ID)
        res.end(JSON.stringify(task))
        console.log(ID)
        console.log(myData.find(item => item.id == ID))
}

function deleteDataById (req,res) {
          const ID = req.url.split('/')[2];
          const taskArray = myData.filter(item => item.id != ID)
          res.end(JSON.stringify(taskArray));
          console.log(taskArray);
          writeFile(taskArray)
}

function createData (req, res) {
    let body = '';
    req.on("data", (chunk) => {
    body += chunk.toString();
});

    req.on("end",()=> {
    const task = JSON.parse(body);
    myData.push(task);
    res.end(JSON.stringify(myData));
    writeFile(myData);
})
}

module.exports = {
    readMyData,
    readMyDataById,
    deleteDataById,
    createData
}