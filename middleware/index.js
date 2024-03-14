const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({ message: 'Unauthorized' });

        const token = authorization.split(' ')[1];
        const secret = process.env.JWT_SECRET;

        try {
            const jwtDecode = jwt.verify(token, secret);
            req.userData = jwtDecode;
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    }
}

module.exports ={
    verifyToken
}