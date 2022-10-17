const fs = require('fs')

const { readFile } = require('../datasource/read.js')
const { writeFile } = require('../datasource/read.js');
const parseRequestBody = require('../middlewares/middleware.js');

const { User } = require('../model/user.model.js')

const myData = readFile();


async function readMyData(req, res) {

    const data = req.body
    
    const user = await User.find()
    console.log(user)
    console.log(data)
    res.end(JSON.stringify(user))
}

async function findAndUpdateData(req, res) {
    try {
        const updateData = req.body
        const newDatas = await User.findOneAndUpdate({ _id: updateData._id }, updateData, { new: true });
        console.log(updateData)
        console.log(newDatas)
        res.end(JSON.stringify(newDatas))
    } catch (error) {
        console.log(error)
    }
}

async function findAndDeleteData(req, res) {
    try {
        const deleteData = req.body._id
        const newDatas = await User.findOneAndDelete({_id: deleteData});
        res.end(JSON.stringify(newDatas))
    } catch (error) {
        console.log(error)
    }
}

function readMyDataById(req, res) {
    const ID = req.url.split('/')[2];
    const task = myData.find(item => item.id == ID)
    res.end(JSON.stringify(task))
    console.log(ID)
    console.log(myData.find(item => item.id == ID))
}

function deleteDataById(req, res) {
    const ID = req.url.split('/')[2];
    const taskArray = myData.filter(item => item.id != ID)
    res.end(JSON.stringify(taskArray));
    console.log(taskArray);
    writeFile(taskArray)
}

function createData(req, res) {

    let newUser = req.body
    myData.push(newUser)
    res.end(JSON.stringify(User.create(newUser)));
    console.log(newUser)
    writeFile(myData);
}




module.exports = {
    readMyData,
    readMyDataById,
    deleteDataById,
    createData,
    findAndUpdateData,
    findAndDeleteData
}