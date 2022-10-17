const taskController = require('../controller/taskController.js')
const parseRequestBody = require('../middlewares/middleware.js')

const taskRouter = {
    GET: { 
        middlewares: [],
        controller: taskController.readMyData
    },
    POST: {
        middlewares: [parseRequestBody],
        controller: taskController.createData
    }
}




module.exports =  taskRouter
   

