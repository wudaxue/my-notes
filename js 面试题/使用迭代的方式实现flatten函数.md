```js
let arr = [1, [3, 45, 7, 5], 44, 2, 4, [0, 19, 18, [21, 24]]]
const flatten = function (arr) {
  while(arr.some(v = > Array.isArray(v))) {
    arr = [].concat(...arr)
  }
  return arr
}
```

```js
const flatten = function(arr) {
  return [].concat(...arr.map(v => Array.isArray(v) ? flatten(v) : v))
}
```