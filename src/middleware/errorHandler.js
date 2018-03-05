const { errorLogger } = require('../helper/logHelper')
const { sendEmail } = require('../helper/emailHelper')

module.exports = function (err, req, res, next) {
    const resultData = {
        api: req.originalUrl,
        method: req.method,
        message: "ERROR",
        version:"0.0.1",
        production:ISPROD,
        code: 500,
        result: err && err.message ? err.message : err
    }
    const errorInfo = JSON.stringify({
        query: req.query,
        body: req.body,
        session: req.headers['session'],
        functionName: require.main.filename,
        resultData
    })
    errorLogger.info('errorHandler:',errorInfo)

    res.status(err.status || 500).send(resultData)

    //生产环境 服务器出错 向管理员发送邮件
    if(ISPROD){
        sendEmail({
            to:"xx@qq.com",
            subject: "server error",
            html: `<p><pre>${errorInfo}</pre></p>`
        })
    }
}