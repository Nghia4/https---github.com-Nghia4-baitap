const taskController = require('../controller/taskController.js')
const parseRequestBody = require('../middlewares/middleware.js')

const updateTaskRouter = {
    POST: {
        middlewares: [parseRequestBody],
        controller: taskController.findAndUpdateData
    },
    DELETE: {
        middlewares: [parseRequestBody],
        controller: taskController.findAndDeleteData
    }
}




module.exports =  updateTaskRouter