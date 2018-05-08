/**
 * 统一处理 response 格式
 * api  使用 res.resRawData = xxx; next()  发送到前端
 */
/*global ISPROD */
const { httpLogger } = require("../helper/logHelper");

module.exports = (req, res, next) => {
  if (!res.resRawData) return next();
  let resRawData = {
    api: req.originalUrl, //请求接口
    code: 200,
    message: "SUCCESS",
    method: req.method,
    version: "0.0.1",
    production: ISPROD,
    result: res.resRawData,
    total: res.total || 0
  };

  httpLogger.info(
    "apiHandler:",
    JSON.stringify({
      query: req.query,
      body: req.body,
      session: req.session || req.headers["session"],
      resRawData
    })
  );

  res.status(200).send(resRawData);
};
