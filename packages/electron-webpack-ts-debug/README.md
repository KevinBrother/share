# webpack-debug

## 主进程

- 需要先把 ts 编译为 js，然后在让 electron 执行。
- Webstorm 可以直接在 ts 中调试，vscode 只能调试 编译出来的 js 文件。

## 渲染进程
- 由于渲染进程在开发模式是走的 http/，而且不由调试工具的浏览器打开，所以调试也无法进入。
- TODO 直接改为 不走 http，直接由 electron 走文件形式起来 渲染进程

```json
{
  "name": "webpack-debug ",
  "request": "launch",
  "type": "chrome",
  "url": "http://localhost:8080",
  "webRoot": "${workspaceFolder}"
}
```


## vscode 的launch 配置
``` json

    {
      "name": "Launch via NPM",
      "request": "launch",
      "runtimeArgs": [
        "run",
        "dev:main"
      ],
      "runtimeExecutable": "npm",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "cwd": "${workspaceRoot}/packages/electron-webpack-ts-debug",
      "type": "node"
    },
```