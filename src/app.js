import express from "express";
import mainRoutes from "./routes.js";

const app = express();
app.use(express.json())
app.use(mainRoutes)



export default app;