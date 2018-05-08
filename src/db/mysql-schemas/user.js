const { _sequelize, Sequelize } = require("../mysql-models/connect");
/**
 * Schema
 * tableName  user
 */
const T_USER = _sequelize.define(
  "user_info",
  {
    id: {
      type: Sequelize.INTEGER(11), //字段类型
      allowNull: false, //是否允许为空
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      field: "login_name",
      type: Sequelize.STRING(20),
      allowNull: false
    },
    password: {
      field: "pwd",
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  {
    freezeTableName: true, //自定义表名
    tableName: "user_info",
    underscored: false, //驼峰命名 转 下划线
    timestamps: false // 是否需要增加createdAt、updatedAt、deletedAt字段
  }
);
module.exports = T_USER;
