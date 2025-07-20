import { Router } from "express";
import userController from '../controllers/user.controller.js'


const route = Router();
route.get('/', userController.getAllUsers)
route.post('/', userController.createuser)
route.get('/:id', userController.findById)
route.patch('/:id', userController.update)


export default route