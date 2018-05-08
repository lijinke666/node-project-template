const nodemailer = require("nodemailer");
const debug = require("debug")("helpr:sendEmail");
const { errorLogger, httpLogger } = require("../helper/logHelper");
const {
  AUTHCODE,
  defaultEmailTitle,
  adminEmail,
  emailService
} = require("../../config");
module.exports = {
  sendEmail(options = {}) {
    let defaultOptions = {
      from: adminEmail,
      to: adminEmail,
      subject: defaultEmailTitle,
      pass: AUTHCODE,
      html: "<p>无内容</p>"
    };
    let currentOptions = Object.assign({}, defaultOptions, options);
    const { from, to, subject, pass, html } = currentOptions;
    const mailTransport = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: from, //qq邮箱账户
        pass // 安全授权密码
      }
    });
    const mailOptions = {
      from, //发件人  必须和auth 认证用户名一致
      to, //收件人
      subject, //邮件标题
      html //邮件内容可以嵌入  html代码 图片都可以
    };
    return new Promise((res, rej) => {
      mailTransport.sendMail(mailOptions, (err, { messageId, response }) => {
        if (err) {
          debug("邮件发送失败", err);
          errorLogger.info("sendEmail-error:", err);
          rej(err);
        }
        debug(`邮件发送成功!`, messageId, response);
        httpLogger.info("sendEmail-success", mailOptions);
        res(true);
      });
    });
  }
};
