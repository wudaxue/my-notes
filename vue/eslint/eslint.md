# Eslint 支持
- eslint 安装
    yarn add eslint --dev
- eslint 插件安装
    - yarn add eslint-plugin-vue --dev
    - yarn add @typescript-eslint/eslint-plugin --dev
    - yarn add eslint-plugin-prettier --dev
- typescript parser
  - yarn add @typescript-eslint/parser --dev
- 安装 prettier
  yarn add prettier --dev


# 注意: 如果 eslint 安装报错:
[img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/799c7eee7a66421294a69676b24b1010~tplv-k3u1fbpfcp-zoom-in-crop-mark:1434:0:0:0.awebp)

可以尝试运行以下命令:
yarn config set ignore-engines true

# 项目下新建.eslintignore
  - eslint 忽略检查 (根据项目需要自行添加)
      ```
        node_modules
        dist
      ```

# 解决 eslint 和 prettier 冲突
  > 解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效

# 项目下新建 .prettier.js
# 项目下新建 .prettierignore
  忽略格式化文件 (根据项目需要自行添加)
  ```
    node_modules
    dist

  ```



  <!-- https://juejin.cn/post/7036745610954801166 -->