const userHandler = require("../handlers/userHandler")
const mongoose = require("mongoose")

module.exports = [
    {
        method:"GET",
        path:"/users",
        handler:async(request, h) => {
            try {
                const resp = await userHandler.getUsers()
                return h.response(resp).code(200)
            } catch (error) {
                return h.response(error).code(500)
            }
        }
    }, 
    {
        method:"POST",
        path:"/user",
        handler:async(request, h) => {
            try {
                const resp = await userHandler.postUser(request.payload)
                return h.response(resp).code(201)
            } catch (error) {
                return h.response(error).code(500)
            }
        }
    }, 
    {
        method:"GET",
        path:"/user/{id}",
        handler:async(request, h) => {
            try {
                let {id} = request.params
                if(!mongoose.isValidObjectId(id))
                    return h.response("Id inválido").code(400)
                else 
                    id = mongoose.mongo.ObjectId(id)
                const resp = await userHandler.getUser(id)
                return h.response(resp).code(200)
            } catch (error) {
                return h.response(error).code(500)
            }
        }
    }, 
    {
        method:"PUT",
        path:"/user/{id}",
        handler:async(request, h) => {
            try {
                let {id} = request.params
                if(!mongoose.isValidObjectId(id))
                    return h.response("Id inválido").code(400)
                else 
                    id = mongoose.mongo.ObjectId(id)
                const resp = await userHandler.putUser(id, request.payload)
                return h.response(resp).code(200)
            } catch (error) {
                return h.response(error).code(500)
            }
        }
    }, 
    {
        method:"DELETE",
        path:"/user/{id}",
        handler:async(request, h) => {
            try {
                let {id} = request.params
                if(!mongoose.isValidObjectId(id))
                    return h.response("Id inválido").code(400)
                else 
                    id = mongoose.mongo.ObjectId(id)
                const resp = await userHandler.deleteUser(id)
                return h.response(resp).code(200)
            } catch (error) {
                return h.response(error).code(500)
            }
        }
    }
]