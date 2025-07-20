import { Router } from "express";
import route from "./routes/users.routes.js";

const mainRoutes = Router();
mainRoutes.use('/users', route)

export default mainRoutes