# 图片裁剪
  - [demo地址](https://zhuye1993.github.io/img-cropper/dist/index.html)
  - [仓库地址](https://github.com/zhuye1993/img-cropper)
  ## 图片裁剪流程
    - 首先使用el-upload组件，渲染已经存在或者裁剪过的图片
    - 点击文件上传，选中需要裁剪的图片
    - 弹出一个弹框，在弹框中使用vue-cropperjs实现图片裁剪
    - 裁剪完成后，通过回调函数，将处理后的图片文件（Blob格式）上传到服务器或者本地预览出来
    - 裁剪完成的图片列表，通过v-viewer实现点击全屏预览（辅助作用）
  ## 参考链接
    [链接](https://juejin.cn/post/7079779110792200223)
