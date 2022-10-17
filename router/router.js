const taskController = require('../controller/taskController.js')
const taskRouter = require('./task.router.js')
const routers = require('../router/index.js')
const { tasks } = require('../router/index.js')



function getRoute(req) {
    const url = req.url
    const method = req.method
    const endPoint = url.split('/')[1]
    console.log(routers[method])
    const currentRouteData = taskRouter[method]
    console.log(currentRouteData.middlewares)
    // console.log(taskRouter[method])
    // console.log(taskRouter[method])
    if (currentRouteData.middlewares && currentRouteData.middlewares.length > 0) {
        return function controller(req, res) {
          try {
            let promise = currentRouteData.middlewares[0](req, res)
            // currentRouteData.middlewares.forEach((middleware, index) => {
            //   if (index > 0) {
            //     promise.then(() => middleware(req, res))
            //   }
            // })     
            promise.then(() => routers[endPoint][method].controller(req, res))
            return promise
          } catch (error) {
            console.log(error)
            res.statusCode = 500
            res.end()
          }
        }
      }
        return routers[endPoint][method].controller
}



module.exports = getRoute