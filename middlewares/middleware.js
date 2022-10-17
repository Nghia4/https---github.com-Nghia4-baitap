function parseRequestBody (req,res) {
    try {
        return new Promise((resolve, reject) => {
            let body = ""
            req.on("data", (chunk) => {
                body += chunk;
            })
            req.on("end", () => {
                const data = JSON.parse(body.length > 0 ? body : '{}')
                req.body = data
                resolve();
            })
        })
    } catch (err) {
        if (!err.message) {
            console.log(err)
          }
          const message = err.message || 'Invalid request!'
          res.statusCode = 400
          res.end(message)
        }
    }


    module.exports = parseRequestBody
