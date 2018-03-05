const jwt = require('jwt-simple')

module.exports = (req,res,next) => {
    if(req.originalUrl.includes("/login")) return next()
    const token = req.headers.authorization
    if (token) {
        const decoded = jwt.decode(token,"nodemq")
        // 判断是否token已过期
        if (decoded.exp <= Date.now()) {
            res.status(401)
            next('token已过期,请重新登录')
        } else {
            next()
        }
    }else{
        res.status(401)
        next('无效的token!')
    }
}