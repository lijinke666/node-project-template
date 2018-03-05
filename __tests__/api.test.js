/**
 * @description 接口单元测试
 */
const assert = require("assert")
const request = require('request-promise')
const {
    host,
    port
} = require('../config')

const testAPi = `${host}:${port}/api/test/testApi`

describe('node mq api', ()=>{
    describe(`#${testAPi}`, () => {
        const testParams = "hello"
        it(`请求测试接口,需要返回 ${testParams}`, async () => {
            const {result} = JSON.parse(await request(`${testAPi}?name=${testParams}`))
            assert( result.yourInput ===  testParams)
        })
    });
});