const express = require('express')
const router = express.Router()
const VError = require('verror')
const { httpLogger } = require('../helper/logHelper')
const debug = require('debug')("testApi")
const { T_USER } = require('../db/models')

router.get('/testApi', async (req, res, next) => {
    const {name} = req.query
    try {
        const users = await T_USER.find({})
        httpLogger.info('testApi-success',users)
        res.resRawData = {
            users
        }
        next()
    } catch (error) {
        debug(error)
        next(error)
    }
})


module.exports = router