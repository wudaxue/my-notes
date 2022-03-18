1. Number 类型和 undefined 类型运算

   > 输出的都是 NaN

   ```javascript
   console.log(5 + undefined) // NaN
   console.log(5 - undefined) // NaN
   console.log(5 * undefined) // NaN
   console.log(5 / undefined) // NaN
   ```

2. Number 类型 和 Null 类型运算

   > Null 类型数据转换为 0，进行数值运算

   ```javascript
   console.log(5 + null) // 5
   console.log(5 - null) // 4
   console.log(5 * null) // 0
   console.log(5 / null) // infinty
   ```

# 比较运算

1.  Number 类型 和 String 类型数据运算
    > 字符串为纯数字串，转换为 Number 类型进行比较，字符串中包含字母，输出结果都是 false
    ```javascript
    console.log(5 > '4') // true
    console.log(5 > '4ab') // false
    ```
2.  Number 类型与 Boolean 类型数据运算

    > Boolean 类型数据先转换为 Number 类型再进行比较

    ```javascript
    console.log(5 > true) //true
    console.log(5 < false) //false
    ```

3.  Number 类型与 undefined 类型数据运算
    > 输出的结果都是 false
    ```javascript
    console.log(5 > undefined) //false
    console.log(5 < undefined) //false
    ```
4.  Number 类型与 Null 类型数据运算

    > null 类型先转换为 Number 类型再进行比较

    ```javascript
    console.log(5 > null) //true
    console.log(5 < null) //false
    ```

# String 类型与其他数据类型计算

1.  String 类型与 Boolean 类型数据运算

    > 若字符串中有非数字字符串, 加号(+)为连接操作.其余输出结果为 NaN
    > 若字符串中是纯数字字符串, 加号(+)为连接操作,其余为数值运算

    ```javascript
    console.log('5' + true) //5true
    console.log('5' - true) //4
    console.log('5' * true) //5
    console.log('5' / false) //infinity

    console.log('5a' + true) //5atrue
    console.log('5a' - true) //NaN
    console.log('5a' * true) //NaN
    console.log('5a' / true) //NaN
    ```

2.  String 类型与 undefined 类型数据运算

        > 无论字符串是纯数字串还是含有字符的字符串,都遵循与加号 (+) 运算
        > 实现的是连接操作,其余的运算输出的是 NaN

            ```javascript
            console.log('5' + undefined) //5undefined
            console.log('5' - undefined) //NaN
            console.log('5' * undefined) //NaN
            console.log('5' / undefined) //NaN

            console.log('5a' + undefined) //5aundefined
            console.log('5a' - undefined) //NaN
            console.log('5a' * undefined) //NaN
            console.log('5a' / undefined) //NaN
            ```

    function debounce(fn, delay) {
    let timer = null
    return function () {
    if(timer) clearTimeOut(timer)

            let context = this
            let arg = arguments
            timer = setTimeout(() => {
                timer = null
                fn.apply(context, arg)
            })
        }

    }
