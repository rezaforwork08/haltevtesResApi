const pool = require('../config/database')

const getAllUsers = () => {
    const sqlQuery = "SELECT * FROM users";
    return pool.execute(sqlQuery);
}

const insertUser = (body) => {
    const insert = `INSERT INTO users (fullname, password, email) VALUES
     ('${body.fullname}','${body.password}','${body.email}')`;
    return pool.execute(insert);
}

module.exports = {
    getAllUsers,
    insertUser
}