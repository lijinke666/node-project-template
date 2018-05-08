const express = require("express");
const router = express.Router();
const verror = require("verror");
const { httpLogger } = require("../helper/logHelper");
const debug = require("debug")("testApi");

const { T_USER } = require("../db/mysql-models");

router.get("/testApi", async (req, res, next) => {
  try {
    const users = await T_USER.find({});
    if (users.length < 1) {
      throw verror("users cant not be empty.");
    }
    httpLogger.info("testApi-success", users);
    res.resRawData = {
      users
    };
    next();
  } catch (error) {
    debug(error);
    next(error);
  }
});

module.exports = router;
