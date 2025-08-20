const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('music', 'root', 'Supa@11243', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;