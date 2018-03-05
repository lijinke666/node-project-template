const express = require('express')
const router = express.Router()
const { httpLogger } = require('../helper/logHelper')

router.get('/testApi', async (req, res, next) => {
    const {name} = req.query
    try {
        httpLogger.info('testApi-success',name)
        res.resRawData = {
            yourInput:name
        }
        next()
    } catch (error) {
        next(error)
    }
})


module.exports = router