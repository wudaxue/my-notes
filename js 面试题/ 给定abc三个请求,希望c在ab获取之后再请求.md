### 每次请求三个函数
```js
function sendRequest(request) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log(`请求${request}完成`)
       resolve(`响应${request}`)
    }, Math.random() * 1000)
  })
}

async function processRequests() {
  const requestList = ['a', 'b', 'c'];  // 您的请求列表
  const concurrentLimit = 3;  // 同时处理的请求数量
  const executeRequests = async function(requests) {
    const responses = []
    for (const request of requests) {
      const response = await sendRequest(request)
      responses.push(response)
    }

    return responses
  }

    // 将请求分组，每组处理concurrentLimit个请求
    for (let i = 0; i < requsetList.length; i += concurrentLimit) {
      const currentRequests = requestList.slice(i, i + concurrentLimit)
      const response = await executeRequests(currentRequests)
      // 处理当前组的响应
        for (const response of responses) {
            console.log(response);
        }
    }
}

processRequests()
```



### 给定abc三个请求,希望c在ab获取之后再请求

```js
function sendRequest(request) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`请求${request}完成`)
      resolve(`响应${request}`)
    }, Math.random() * 1000)
  })
}

async processRequests() {
  try {
    const [responseA, responseB] = await Promise.all([
      sendRequest['a']
      sendRequest['b']
    ])

    console.log(responseA)
    console.log(responseB)

    const responseC = await sendRequest('c')
    console.log(responseC)
  } catch(error) {
    console.error(error)
  }
}

```