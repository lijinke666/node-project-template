/**
 * @description 接口单元测试
 */
const assert = require("power-assert")
const request = require('request-promise')
const {
    host,
    port
} = require('../config')

const testAPi = `${host}:${port}/api/test/testApi`

describe('Test api', () => {
    describe(`#${testAPi}`, () => {
        it(`should return {users:[xxx]}`, async () => {
            const { result } = JSON.parse(await request(testAPi))
            assert(Array.isArray(result.users))
        })
    });
});