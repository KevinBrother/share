# electron-debug

## 基础版

### 当渲染进程时 并不是服务启动，只是静态文件时

- vscode

  ```json
  {
    "name": "Electron Main",
    "program": "${workspaceFolder}/packages/electron-debug/main.js",
    "request": "launch",
    "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
    "skipFiles": ["<node_internals>/**"],
    "type": "node"
  }
  ```

- WebStorm
  查看 xml 文件
  [electron-main.run.xml](electron-main.run.xml)
