import userService from "../services/user.service.js";
import { hashpassword } from "../utils/hashpassword.js";

const getAllUsers = async (req, res) => {
    const users = await userService.findAllUsers()
    if (!users) {
        return []
    }
    res.status(200).json({ message: 'users', users });
};

const findById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'ID inválido' });
    }
    const user = await userService.findById(id)
    res.status(200).json({ user });
};

const createuser = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).send({ message: "Preencha todos os campos obrigatórios" });
    }

    const hashedpassword = await hashpassword(password);
    try {

        const user = await userService.create({
            name,
            username,
            email,
            password: hashedpassword,
            avatar,
            background
        }
        );

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
                password: user.password,
                background: user.background
            }
        });

    } catch (error) {
        return res.status(500).send({ message: "Erro interno no servidor" });
    }
};

const update = async (req, res) => {
    const id = req.params.id

    const user = await userService.findById(id)
    if (!user) {
        return res.status(400).send({ message: 'Usuario nao existe' })
    }
    const { name, email, username, avatar, background } = req.body

    if (!name && !email && !username && !avatar && !background) {
        return res.status(400).send({ message: 'Preencha um campo' })
    }

    const updatedUser = await userService.update(
        id, name, username, email, avatar, background
    )

    res.status(201).send({ message: "Sucesso", updatedUser })
}


export default {
    getAllUsers,
    findById,
    createuser,
    update
};
