const JsonServer = require('json-server')
const MPServer= JsonServer.create()
const router= JsonServer.router("db.json")
const middlleware = JsonServer.defaults()
const PORT = 3000 || process.env.PORT
MPServer.use(middlleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`MP Server started at port: ${PORT} and waiting for client request!!!`);
})