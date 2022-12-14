/* eslint-disable no-proto */
/*
 * Author       : OBKoro1
 * Date         : 2021-07-30 15:02:10
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 16:10:43
 * FilePath     : /js-base/src/js/intanceof.js
 * description  :  instanceOf实现原理
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */
// 作用：一个对象是否在另一个对象的原型链上

// 思路：右边变量的原型存在于左边变量的原型链上
function instanceOf(left, right) {
  let leftValue = left.__proto__
  const rightValue = right.prototype
  while (true) {
    if (leftValue === null) {
      return false // 左边变量的原型链上没找到
    }
    if (leftValue === rightValue) {
      return true // 右边变量的原型在左边变量的原型链上
    }
    leftValue = leftValue.__proto__ // 找下层原型
  }
}
