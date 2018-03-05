const debug = require('debug')('config')
const path = require('path')
const { DEV_NAME } = require('./env')
const ENV = process.env.NODE_ENV || DEV_NAME
const CONFIG_NAME = path.resolve(__dirname,`./${ENV.toLocaleLowerCase()}.config.js`)
const config = require(CONFIG_NAME)

debug('[USE CONFIG]:',CONFIG_NAME)

module.exports = require(CONFIG_NAME)