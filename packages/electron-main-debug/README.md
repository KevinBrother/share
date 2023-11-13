# electron-debug

## 基础版

### 当渲染进程时 并不是服务启动，只是静态文件时

- vscode

  ```json
  {
    "name": "Electron Main",
    "program": "${workspaceFolder}/packages/electron-main-debug/main.js",
    "request": "launch",
    "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
    "skipFiles": ["<node_internals>/**"],
    "type": "node"
  }
  ```

- WebStorm
  查看 xml 文件
  [electron-main.run.xml](electron-main.run.xml)

## electron 主进程热更新

- electron-reloader
  能生效，但是重启不会进入 debug 模式

## doc

https://cloud.tencent.com/developer/article/1880267
https://www.jianshu.com/p/7ae7dfff8ed8
