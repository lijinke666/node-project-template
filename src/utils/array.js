const arrayUtils = {
  /**
   * 将二维数组 转为 1维
   * @param {Array} arr
   */
  flatten(arr) {
    return arr.reduce((prev, next) => prev.concat(next));
  },

  /**
   * 数组去重 支持复合类型
   * @param {Array} arr
   */
  distinctArray(arr) {
    if (!Array.isArray(arr)) {
      return arr;
    }
    if (arr.some(item => Object.is(typeof item, "object"))) {
      return arr
        .map(item => JSON.stringify(item))
        .filter(
          (item, idx, arry) =>
            idx === arry.findIndex(current => current === item)
        )
        .map(item => JSON.parse(item));
    }
    return [...new Set(arr)];
  }
};

module.exports = arrayUtils;
