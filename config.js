require('dotenv').config();

const config = {
    PORT: 3000,
    DB_URL: 'mongodb://dba:12345@localhost:27017/miapp?authSource=admin',
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN
}

module.exports = config