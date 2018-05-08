const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    id: String,
    username: String,
    password: String
  },
  {
    collection: "user"
  }
);

module.exports = {
  userSchema
};
