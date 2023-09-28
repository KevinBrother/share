# node-server

## 结果

- webstorm 可以参考 文件夹下的几个 xml 配置文件

- vscode
  ```json
      {
          "name": "node-server的调试方式",
          "program": "${workspaceFolder}/packages/node-server/a.js",
          "request": "launch",
          "skipFiles": [
            "<node_internals>/**"
          ],
          "type": "node"
      }
  ```

## 问题

- 目前发现不能执行前置任务为服务，只能为脚本，猜测为服务时，他不知道何时结束
- 多服务调试可以尝试 docker-compose
