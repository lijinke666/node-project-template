/*global ENV,VERSION,APPNAME,__dirname */
const bodyParser = require("body-parser");
const session = require("express-session");
const http = require("http");
const timeOut = require("connect-timeout");
const cookieParser = require("cookie-parser");
const express = require("express");
const helmet = require("helmet");
const app = express();
const { host: HOST, port: PORT } = require("../config");

const { log4js, httpLogger } = require("./helper/logHelper");

//安全设置
app.use(
  helmet({
    contentSecurityPolicy: false,
    hsts: false //是否强制客户端使用https连接
  })
);
//日志输出
app.use(
  log4js.connectLogger(httpLogger, {
    format: ":remote-addr :method :url :status :headers :response-time ms",
    nolog: "\\.js|\\.html$"
  })
);

app.use(express.static(`${__dirname}/../public`));
//解析body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "dawdler",
    name: "dawdler",
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // 设置 cookie 7天后过期
    resave: true,
    rolling: true,
    saveUninitialized: false
  })
);
// app.use(require('./middleware/isLogin'))
// app.use(require('./middleware/jwt'))

//api
app.use("/api", timeOut("10s"), require("./api/test"));

app.use(require("./middleware/apiHandler"));
app.use(require("./middleware/errorHandler"));

const serverInfo = `
| ******************************************************************************** |
| *******  server is running at ${HOST}:${PORT} && [mode]: ${ENV} *******  |
| ********  version : ${VERSION} &  app name  : ${APPNAME}  *******  |
| ******************************************************************************** |
`;

/*eslint-disable no-console*/
http.createServer(app).listen(PORT, () => console.log(serverInfo));
