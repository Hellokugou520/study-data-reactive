/**
 * create date:2021-3.18
 */
import { def } from "./utils";
const arrayPrototype = Array.prototype;

// 以Array.prototype为原型创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype);
console.log(arrayMethods);

// 要被改写的7个数组方法
const methodsNeedChange = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

methodsNeedChange.forEach((methodName) => {
  // 备份原生方法
  const original = arrayPrototype[methodName];
  // 定义新的方法
  def(
    arrayMethods,
    methodName,
    function () {
      console.log(666);
      original.apply(this, arguments);
    },
    false
  );
});
