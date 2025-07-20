import User from "../models/User.js";



const findAllUsers = () => User.find();
const findById = (id) => User.findById(id)
const create = (body) => User.create(body)



export default {
    create,
    findAllUsers,
    findById
}