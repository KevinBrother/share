# node-server

## 结果

- WebStorm 可以参考 文件夹下的几个 xml 配置文件

- vscode
  ```json
  {
    "name": "node-server的调试方式",
    "program": "${workspaceFolder}/packages/node-server/a.js",
    "request": "launch",
    "skipFiles": ["<node_internals>/**"],
    "type": "node"
  }
  ```

## 复合模式

- WebStorm
- vscode 参考下面的配置

```json
  "compounds": [
    {
      "name": "Server/Client",
      "configurations": [
        "node-server的调试方式 a.js",
        "node-server的调试方式 b.js",
      ],
      // "preLaunchTask": "${defaultBuildTask}",
      // "stopAll": true //  停一个都会停止
    }
  ]
```

- 多服务调试可以尝试 docker-compose
