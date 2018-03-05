/**
 * @description 工具函数单元测试
 */
const assert = require("assert")

const {
    flatten
} = require("../src/utils/array")

describe('Array', ()=>{
    describe('#flatten()', () => {
        const test = [[1,2,3],[4],5]
        const result = [1,2,3,4,5]
        it(`需要将 ${test} 转换成1维数组,返回 ${result}`, () => {
            assert.deepEqual(
                flatten(test),
                result
            );
        })
    });
});