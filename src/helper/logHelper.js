const log4js = require('log4js')

log4js.configure({
    appenders: [
        {
            "type": "dateFile",
            "filename": "logs/log_http",
            "maxLogSize": 204800,
            "pattern": '-yyyy-MM-dd.log',
            "alwaysIncludePattern": true,
            "backups": 10,
            "category": "http"
        },
        {
            "type": "dateFile",
            "filename": "logs/log_auth",
            "maxLogSize": 204800,
            "pattern": '-yyyy-MM-dd.log',
            "alwaysIncludePattern": true,
            "backups": 10,
            "category": "auth"
        },
        {
            "type": "dateFile",
            "filename": "logs/log_debug",
            "maxLogSize": 204800,
            "pattern": '-yyyy-MM-dd.log',
            "alwaysIncludePattern": true,
            "backups": 10,
            "category": "debug"
        },
        {
            "type": "dateFile",
            "filename": "logs/log_error",
            "maxLogSize": 204800,
            "pattern": '-yyyy-MM-dd.log',
            "alwaysIncludePattern": true,
            "backups": 10,
            "category": "error"
        },
    ],
    "replaceConsole": false,
    "levels": {
        "http": "ALL",  //等级可以设置ALL,AUTO,INFO,WARN,ERROR
        "auth": "ALL",
        "debug": "ALL",
        "error": "ALL"
    }
})

module.exports = {
    log4js,
    httpLogger:log4js.getLogger('http'),
    debugLogger:log4js.getLogger('debug'),
    errorLogger:log4js.getLogger('error')
}