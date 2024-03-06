什么是async/await，它们如何简化异步代码的编写？
`async/await`是JavaScript中用于处理异步操作的语法糖，引入了更直观和顺序执行异步代码的方式。这对于避免回调地狱和更清晰地表示异步控制流非常有用。`async`函数用于定义一个返回`Promise`对象的异步函数，而`await`用于等待一个`Promise`对象的解决。

下面是一个简单的例子，演示了`async/await`如何简化异步代码

```js
// 传统的Promise写法
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('数据已获取')
        }, 1000)
    })
}

function processResult(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(result)
            resolve('结果已处理')
        }, 1000)
    })
}

function handleError(error) {
    console.error(error)
}

// 使用Promise
fetchData()
    .then((result) => processResult(result))
    .catch((error) => handleError(error))

// 使用async/await
async function fetchDataAsync() {
    try {
        const result = await fetchData()
        const processedResult = await processResult(result)
        console.log(processedResult)
    } catch (error) {
        handleError(error)
    }
}

fetchDataAsync()
```

在这个例子中，`fetchDataAsync` 是一个使用 `async/await` 的异步函数，使用它可以更清晰地表达异步代码。`await` 表示等待 `fetchData` 和 `processResult` 的 Promise 解决，然后继续执行下一步。而在传统的 Promise 写法中，需要通过 `.then()`进行链式调用，使代码看起来较为繁琐。

`async/await` 的优势包含：
- **清晰的控制流**：代码的结构更类似于同步代码，易于理解和维护
- **错误处理**： 使用` try/catch`可以轻松捕获和处理错误
- **避免回调地狱**：不需要嵌套多层回调，代码更扁平

需要注意的是，`async/await` 只能在异步函数内部使用，而且异步函数总是返回一个 Promise 对象。这种语法糖使得异步编程在可读性和写法上变得更加优雅。