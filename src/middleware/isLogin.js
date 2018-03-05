module.exports = (req,res,next)=>{
    if(req.originalUrl.includes("/login")) return next()
    if(!req.session.userInfo){
        return next('用户未登录!')
    }
    next()
}