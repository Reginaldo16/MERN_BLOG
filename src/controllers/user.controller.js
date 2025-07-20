const getAllUsers = (req, res) => {
    res.status(200).json({ message: 'users' });
};

export default {
    getAllUsers
};
