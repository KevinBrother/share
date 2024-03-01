const dgram = require('dgram');

// 创建UDP客户端
const client = dgram.createSocket('udp4');

// 监听消息接收事件
client.on('message', (msg, rinfo) => {
  console.log(`接收到来自服务器的消息: ${msg.toString('utf8')}`);

  // 关闭客户端
  client.close();
});

// 发送消息到服务器
const serverPort = 3001;
const serverHost = 'localhost'; // 或者您可以使用服务器的IP地址
const message = 'Hello, server!';
client.send(message, serverPort, serverHost, (err) => {
  if (err) {
    console.log('发送消息失败:', err);
    client.close();
  } else {
    console.log('已发送消息到服务器');
  }
});