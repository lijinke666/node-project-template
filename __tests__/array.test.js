/**
 * @description 工具函数单元测试
 */
const assert = require("power-assert")

const {
    flatten
} = require("../src/utils/array")

describe('Array', ()=>{
    describe('#flatten()', () => {
        const test = [[1,2,3],[4],5]
        const result = [1,2,3,4,5]
        it(`should transform ${test} to ${result}`, () => {
            assert.deepEqual(
                flatten(test),
                result
            );
        })
    });
});