# webpack-debug

## 方法一
- debugger 会自己打开一个精简浏览器，浏览器输入的url，可以直接在 ide 中拦截到断点
- webstorm 比 vscode 做的更好，webstorm 拦截到的断点是直接在源码上起作用
- vscode 是对webpack-server 处理后的代码起作用，目前猜测是 webstorm 比 vscode 多做了一步，监测 webpack-server 的代码并映射到源码上。

```json

    {
      "name": "webpack-debug ",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:8080", 
      "webRoot": "${workspaceFolder}"
    }

```
