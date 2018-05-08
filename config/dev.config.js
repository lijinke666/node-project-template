//本地开发 相关配置
module.exports = {
    host:"http://0.0.0.0",
    port:8080,
    socketPort:8090,
    emailService: "qq", //邮件服务商
    adminEmail: "xx@qq.com", //发邮件的人邮箱 [手动填写]
    AUTHCODE: "xxxxxxxxxxx", //授权码 [手动填写]
    //仅作示范,请自行更改
    mysqlDbPath: {
        "host": "localhost",
        "port": 3306,
        "user": "dawdler",
        "password": "123456",
        "dataBase": "dawdler"
    },
    mongoDbPath:'mongodb://localhost/dawdler',
}