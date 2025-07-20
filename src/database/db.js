import mongoose from "mongoose";


const connectDatabase = () => {
    console.log("conectando ao banco de dados...");

    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log("Banco de dados conectado"))
        .catch((error) => console.log(error));

}

export default connectDatabase;