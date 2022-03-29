// 柯里化
// 所谓柯里化， 就是把一个多参数的函数转化为单一的参数函数，curry有3个作用： 缓存函数、暂缓函数、分解执行任务

function sum(x) {
  return function(y) {
    return x + y
  }
}



// eg:
sum(1).valueOf() => 1
sum(1, 2).valueOf() => 2
sum(1, 2)(3).valueOf => 6

function sum(...args) {
  let saveArg = args || []
  function sub(...args) {
    saveArg = saveArg.concat(args)
    return sub
  }
  sub.valueOf = function() {
    return saveArg.reduce((a, b) => a + b, 0)
  }
  return sub
}
