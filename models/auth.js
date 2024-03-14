const db = require('../config/database')

const getEmail = (email) => {
    const user = `SELECT * FROM users WHERE email = '${email}'`
    return db.execute(user);
}

module.exports = {
    getEmail,
}