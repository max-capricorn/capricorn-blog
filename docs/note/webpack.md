### webpack整体运行流程分析
webpack本质上是一个JS Module Bundler ，用于将多个代码模块进行打包，bundler从一个钩子建入口出发，解析代码，分析出代码模块的依赖关系，然后将依赖的代码模块组合在一起，在Javascript bundler 中，还需要提供一些胶水代码让多个模块代码可以协同工作，相互引用。

```javascript
创建compiler -> 调用compiler.run 开始构建，创建compilation -> 构建配置开始创建chunk -> 使用parser
从chunk开始打包 -> 使用module和dependency管理代码模块相互依赖关系 -> 使用Template基于compilation的数据生成结果代码
```

<img src="https://pic3.zhimg.com/80/v2-e8dd140fa3852daf25371de3b57aa6fe_720w.jpg"/>

### loader整体运行流程分析

- loader是以相反的顺序执行的
- 最后的loader最早被调用，传入的原始的资源内容（可能是代码，也可能是二进制文件，用buffer处理）第一个loader最后调用，返回的js代码和sourcemap对象，中间的loader执行时 传入的是上一个loader执行的结果
- 多个loader执行顺序是这样的，但是对于大多数单个loader来说是无感知的，只需要处理好传入的内容就好
- 还有一种情况是，loader中异步处理的，有一些loader 处理依赖于外部I/O的结果，导致他必须使用异步的方式来处理，这个使用需要在loader 执行的时候调用this.async()来标识此loader 为异步处理，然后使用this.callback来返回loader处理的结果

- file-loader
可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。
- url-loader
允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。
#### url-loader和file-loader关系
简答地说，url-loader 封装了 file-loader。url-loader 不依赖于 file-loader，即使用 url-loader 时，只需要安装 url-loader 即可，不需要安装 file-loader，因为 url-loader 内置了 file-loader。


### plugin