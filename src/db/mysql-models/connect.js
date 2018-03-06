const Sequelize = require('sequelize')
const {
    mysql_db: {
        host,
        port,
        user,
        password,
        dataBase
    }
} = require('../../../config')

const sequelize = new Sequelize(
    dataBase,
    user,
    password,
    {
        dialect: "mysql",
        host,
        port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        'define':{
            'underscored':true  //字段以下划线(_)来分割 (默认是驼峰命名风格)
        }
    }
)
module.exports = {
    _sequelize:sequelize,
    Sequelize
}