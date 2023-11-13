# remote debugging


- 开启 Chrome 的远程调试功能

``` bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

# 通过执行这个命令，Chrome 浏览器将会以远程调试模式启动，并监听指定的端口号（9222）。这意味着你可以使用远程调试协议（Remote Debugging Protocol）与 Chrome 进行通信，以便进行开发、调试和测试等操作。例如，你可以使用 Chrome DevTools 或其他支持远程调试协议的工具与 Chrome 进行通信，检查页面的 DOM 结构、网络请求、执行 JavaScript 代码等等。

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/Users/caojunjie/Desktop/tmp/Chrome
```

- 查看可调试的列表
<http://localhost:9222/json/list>


## 相关文档
[开发者工具协议](https://chromedevtools.github.io/devtools-protocol/)
