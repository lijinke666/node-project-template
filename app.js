const { 
    version : VERSION,
    name : APPNAME
} = require('./package.json')

const { DEV_NAME,PROD_NAME,TEST_NAME } = require('./config/env')
const ENV = process.env.NODE_ENV || DEV_NAME

/** =================== 全局变量配置 ================= **/
global.ENV = ENV
global.ISPROD = ENV === PROD_NAME
global.ISTEST = ENV === TEST_NAME
global.ISDEV = ENV === DEV_NAME
global.VERSION = VERSION
global.APPNAME = APPNAME
/** =================== end ================= **/

//服务入口
require('./src/server')