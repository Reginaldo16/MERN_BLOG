import { Router } from "express";

const mainRoutes = Router();


mainRoutes.get('/', (req, res) => {
    res.status(200).json({ message: true })
})

export default mainRoutes