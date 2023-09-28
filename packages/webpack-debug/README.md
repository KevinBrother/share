# webpack-debug

## 方法一 和浏览器直接调试没什么差别

```json

    {
      "name": "webpack-debug ",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:8080", // debuger 会自己打开一个浏览器，浏览器输入这串url， 监听 webpack-server 启的服务地址和端口，
      "webRoot": "${workspaceFolder}"
    }

```
