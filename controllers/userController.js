const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await  UsersModel.getAllUsers();     
        res.json({
            data:data,
            message: "Request Success",
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Request Failed",
            serverMessage: error,
        })
        
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;
    try {
        await UsersModel.insertUser(body);
        res.json({
            data:body,
            message: "Create Request Success",
        })
    } catch (error) {
        res.status(500).json({
            message:"Request Failed",
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser
}