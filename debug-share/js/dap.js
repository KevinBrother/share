const net = require('net');

const client = net.createConnection({ port: 56789, host: 'localhost' }, () => {
  console.log('Connected to localhost:56789');
  
  // 在连接建立后，可以发送和接收数据
  client.write('Hello server!');

  // 当从服务器接收到数据时触发
  client.on('data', (data) => {
    console.log('Received data from server: ' + data.toString());
    // 在这里处理从服务器返回的数据
  });

  // 当连接关闭时触发
  client.on('close', () => {
    console.log('Connection closed');
  });
});

// 当连接发生错误时触发
client.on('error', (err) => {
  console.error('Error: ' + err.message);
});