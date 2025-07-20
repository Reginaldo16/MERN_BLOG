import User from "../models/User.js";



const findAllUsers = () => User.find();
const findById = (id) => User.findById(id)
const create = (body) => User.create(body)
const update = (id, name, username, email, avatar, background) => User.findOneAndUpdate({ _id: id, }, {
    name, username, email, avatar, background
})



export default {
    create,
    findAllUsers,
    findById,
    update
}