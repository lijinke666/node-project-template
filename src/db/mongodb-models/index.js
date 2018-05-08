const mongoose = require("mongoose");
const debug = require("debug")("connect-db");
const { mongoDbPath } = require("../../../config");
const { userSchema } = require("../mongodb-schemas");

mongoose.connect(mongoDbPath);
const db = mongoose.connection;

db.on("open", () => {
  debug("mongose 连接成功");
});
db.on("error", e => {
  debug(`[errr] : 连接失败 ${e}`);
});

const T_USER = mongoose.model("user", userSchema);

module.exports = {
  T_USER
};
