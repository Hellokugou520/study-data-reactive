/**
 * create date:2021-3-17
 */
import { def } from "./utils";
import defineReactive from "./defineReactive";
import { arrayMethods } from "./array";

export default class Observer {
  constructor(value) {
    // this代表实例
    def(value, "__ob__", this, false);
    console.log("Observer构造器执行了", value);
    // 检查是数组还是对象
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods);
    } else {
      this.walk(value);
    }
  }

  //   遍历
  walk(value) {
    for (let k in value) {
      defineReactive(value, k);
    }
  }
}
