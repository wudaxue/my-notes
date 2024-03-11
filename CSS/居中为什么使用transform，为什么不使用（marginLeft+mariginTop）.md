## 居中为什么使用transform，为什么不使用（marginLeft/Top）

transform主要是因为它提供了更灵活和一致的居中方案，特别是对于不定宽高的元素或者需要在垂直和水平方向同时居中的情况

下面是一些原因：
1. **灵活性**
`transform` 属性允许您使用 `translate(-50%, -50%)` 来以元素自身的百分比值进行偏移。这是非常灵活的，因为不需要关心元素的具体尺寸，只需将其居中即可。
2. **不定宽高元素**
对于不定宽高的元素，使用`marginLeft/Top` 并不是一个理想的解决方案。通过 `transform: translate(-50%, -50%)`，无论元素的尺寸如何变化，都能保持在其容器中居中。
3. **垂直和水平居中一致性**
使用 `transform`可以同时在垂直和水平方向上居中元素，而使用 `marginLeft/Top` 等属性可能需要不同的设置来实现水平和垂直方向的居中，不够一致。

```css
.center-using-transform {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

总体来说，transform 提供了更为一致和灵活的居中方案，尤其适用于不定宽高元素或需要同时在水平和垂直方向上居中的情况。

