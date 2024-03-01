const dgram = require('dgram');

// 创建UDP服务器
const server = dgram.createSocket('udp4');

// 监听消息接收事件
server.on('message', (msg, rinfo) => {
  console.log(`接收到来自 ${rinfo.address}:${rinfo.port} 的消息: ${msg.toString()}`);

  // 发送响应消息
  const response = Buffer.from('服务器收到消息', 'utf8');
  server.send(response, 0, response.length, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.log('发送响应消息失败:', err);
    }
  });
});

// 监听错误事件
server.on('error', (err) => {
  console.log('服务器发生错误:', err);
});

// 监听端口
const port = 3001;
server.bind(port, () => {
  console.log('服务器正在监听端口:', port);
});