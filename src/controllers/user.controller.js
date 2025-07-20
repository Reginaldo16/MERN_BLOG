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

export default {
    getAllUsers,
    findById
};
