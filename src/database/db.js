import mongoose from "mongoose";


const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('🟢 Conectado ao MongoDB');
    } catch (err) {
        console.error('🔴 Erro ao conectar no MongoDB:', err.message);
        process.exit(1);
    }
};


export default connectDatabase;