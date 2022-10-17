const taskRouter = require('../router/task.router')
const updateTaskRouter = require('./updatetask.router')

const routers = {
   "tasks": taskRouter,
   "updatetask": updateTaskRouter
} 

module.exports = routers