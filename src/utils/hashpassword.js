import bcrypt from 'bcrypt';
import dotenv from 'dotenv'


dotenv.config()
const salt = process.env.SALT

export const hashpassword = async (password) => {
    try {
        const n = parseInt(salt)
        const hashed = await bcrypt.hash(password, n);
        return hashed;
    } catch (err) {
        throw new Error('Erro ao gerar hash da senha');
    }
};
