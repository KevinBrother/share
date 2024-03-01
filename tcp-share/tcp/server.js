const net = require('net');

// 创建服务器
const server = net.createServer({keepAlive: true},(socket) => {
  // 当有新的TCP连接时触发
  console.log('客户端已连接');

  // 监听数据接收事件
  socket.on('data', (data) => {
    console.log('接收到数据:', data.toString());

    // 发送数据回客户端
    const serverData = Buffer.from('服务器收到消息', 'utf8');
    socket.write(serverData);
  });

  // 监听连接断开事件
  socket.on('end', () => {
    console.log('客户端已断开连接');
  });
});

// 监听指定端口
const port = 3000;
server.listen(port, () => {
  console.log('服务器正在监听端口:', port);
});