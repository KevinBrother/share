const net = require('net');

// 创建TCP客户端
const client = new net.Socket();

// 连接到服务器
const port = 3000;
const host = 'localhost'; // 或者您可以使用服务器的IP地址
client.connect(port, host, () => {
  console.log('已连接到服务器');

  // 发送数据到服务器
  client.write('Hello, server!');
});

// 监听数据接收事件
client.on('data', (data) => {
  console.log('接收到服务器响应:', data.toString('utf8'));

  // 关闭客户端连接
  // client.end();
});

// 监听连接关闭事件
client.on('close', () => {
  console.log('连接已关闭');
});