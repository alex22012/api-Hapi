const Hapi = require("@hapi/hapi")
const userRoute = require("./api/route/userRoute")

const init = async () => {
    const server = Hapi.server({
        port:8080,
        host:"localhost"
    })
    await server.start()
    server.route(userRoute)
    console.log('OK')
}

init()