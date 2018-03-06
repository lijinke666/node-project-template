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

describe('Test api', () => {
    describe(`#${testAPi}`, () => {
        it(`请求测试接口,需要返回 {users:[xxx]}`, async () => {
            const { result } = JSON.parse(await request(testAPi))
            assert(Array.isArray(result.users))
        })
    });
});