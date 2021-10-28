const mongoose = require("../MongooseConnection")
const UserSchema = require("../schema/UserSchema")

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel