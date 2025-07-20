import userService from "../services/user.service.js";

const getAllUsers = (req, res) => {
    res.status(200).json({ message: 'users' });
};

const findById = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    res.status(200).json({ message: `Usuario com id  ${id}` });
};

const createuser = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).send({ message: "Preencha todos os campos obrigatórios" });
    }

    try {
        const user = await userService.create(req.body);

        if (!user) {
            return res.status(400).send({ message: "Erro ao cadastrar usuário" });
        }

        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: {
                name: user.name,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                background: user.background
            }
        });

    } catch (error) {
        return res.status(500).send({ message: "Erro interno no servidor" });
    }
};


export default {
    getAllUsers,
    findById,
    createuser
};
