const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authModel = require('../models/auth');

async function verifyPassword(password, hashedPassword){
    const passwordString = password.toString();

    return bcrypt.compare(passwordString, hashedPassword);
}

async function login(req,res) {
    const {email, password} = req.body;
    try {
        const [user]= await authModel.getEmail(email);
        // if(!user[0]) return res.status(400).json({message:'User not found'});
        // if(!user[0] || (await verifyPassword(password, user[0].password))){
        //     return res.status(401).json({message: 'Email or password is incorrect'}); 
        // }
        const isPasswordValid = await verifyPassword(password, user[0].password);
        if(!isPasswordValid) return  res.status(401).json({message: 'Email or password is incorrect'}); 

        const payload = {
            id: user[0].id,
            fullname : user[0].fullname,
            email : user[0].email,
        }
        const secret = process.env.JWT_SECRET;
        const expiredIn = 60 * 60 * 1;
        const token = jwt.sign(payload, secret, {expiresIn: expiredIn} )

        return res.json({
            status: 200,
            token : token,
        });
    } catch (error) {
        res.status(500).json({
            message:"Request Failed",
            serverMessage: error,
        })
    }
}




module.exports = {
    login
}

