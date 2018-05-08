/**
 * 时间工具类
 */
const moment = require("moment");
const dateUtils = {
  getNowTime() {
    return moment()
      .locale("zh-cn")
      .utcOffset(8);
  }
};

module.exports = dateUtils;
