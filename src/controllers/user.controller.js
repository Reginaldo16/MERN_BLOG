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

const createuser = (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar) {
        return res.status(400).send({ message: "Preencha todos campos" })
    }


    return res.status(201).json({
        message: "Usuario criado com sucesso!",
        user: {
            name,
            username,
            email,
            avatar,
            background
        }
    })

}

export default {
    getAllUsers,
    findById,
    createuser
};
