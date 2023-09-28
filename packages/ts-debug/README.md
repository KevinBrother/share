# ts-debug

## 库

需要本地安装 ts-node 和 typescript，安装在全局的不行

实际使用的命令为

```bash
node -r ts-node/register xxx.ts

```

配置

```json

  "configurations": [
    {
      "name": "使用ts-node 调用ts",
      "type": "node",
      "request": "launch",
      "args": [
        "${relativeFile}"
      ],
      "runtimeArgs": [
        "-r",
        "ts-node/register"
      ],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "internalConsoleOptions": "openOnSessionStart",
      // "program": "${workspaceFolder}/multi-type/ts-debug/index.ts"
    }
  ]
```

在需要调试的文件上按下 f5 即可
