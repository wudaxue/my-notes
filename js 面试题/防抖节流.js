// 防抖
const debounce = (callback, delay = 200, immediate = false) => {
  let timeutID = null
  return function() {
    // 第一次触发时立即执行
    if (immediate && !timeutID) callback.apply(this, arguments)
    // 避免开启过多计时器
    if (timeutID)  clearTimeout(timeutID)
    timeutID = setTimeout(() => {
      // 借用外部第一个普通函数的this和arguments对象
      callback.apply(this, arguments)
      // 执行后将timeoutID置为null
      timeutID = null
    }, delay)
  }
}
/**
 * @desc 函数防抖
 * @param fn 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表示非立即执行
 */

const debounce1 = (func, wait = 200, immediate = true) => {
  let timer = null
  return function() {
    timer && clearTimeout(timer)
    if (immediate) {
      const now = !timer
      timer = setTimeout(() => { timer = null }, wait)
      timer && func.apply(this, arguments)
    } else {
      timer = setTimeout(() => {
        func.apply(this, arguments)
      }, wait)
    }
  }
}


// throttle
const throttle = (callback, delay = 200, im = false) => {
  let timeutID = null
  return function() {
    // 第一次触发时立即执行
    if (!timeutID && im) {
      callback.apply(this, arguments)
      // 执行后立即关闭
      im = false
    }

    if (!timeutID) {
      timeutID = setTimeout(() => {
        // 外部第一个普通函数this和arguments对象
        callback.apply(this, arguments)
        // 执行后将timeoutID置为null
        timeutID = null
      }, delay)
    }
  }
}