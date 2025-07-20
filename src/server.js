import app from './app.js';
import dotenv from 'dotenv'
import connectDatabase from './database/db.js';

dotenv.config()
const PORT = process.env.PORT || 3001
connectDatabase()

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))