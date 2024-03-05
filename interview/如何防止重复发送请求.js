// 问题： 业务需求中，经常有只需要请求一次，以防止用户重复点击行为导致的触发重复请求。
// 传递请求方法（执行后返回promise），返回一个新方法。连续触发时，只执行一次

// 示例
let count = 1;
let promiseFunction = () =>
  new Promise(rs =>
    window.setTimeout(() => {
      rs(count++);
    })
  );
let firstFn = firstPromise(promiseFunction);
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1

// 题目解析
// 题目的愿意是阻止重复发送请求，firstFn执行的回调复用这一个请求的结果，那么实现就很简单啦！可以将请求的实例先存储起来，而成功和失败内部都可以感知到，进而将其重新置空，接受下一次请求


function firstPromise(promiseFunction) {
  let p = null;
  return function (...args) {
    // 请求的实例，已存在意味着正在请求中，直接返回实例，不触发新的请求
    return p
      ? p
      // 否则发送请求，且在finally时将p置空，那么下一次请求可以重新发起
      : (p = promiseFunction.apply(this, args).finally(() => (p = null)));
  };
}


// 测试一下
let count1 = 1;
let promiseFunction1 = () =>
  new Promise((rs) =>
    setTimeout(() => {
      rs(count1++);
    }, 1000)
  );
let firstFn1 = firstPromise(promiseFunction1);
firstFn1().then(console.log); // 1
firstFn1().then(console.log); // 1
firstFn1().then(console.log); // 1

setTimeout(() => {
  firstFn1().then(console.log); // 2
  firstFn1().then(console.log); // 2
  firstFn1().then(console.log); // 2
}, 3000);


// https://juejin.cn/post/7072149856139083812

