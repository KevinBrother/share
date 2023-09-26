const { Debug } = require('./debug');
const debug = new Debug();

debug.init(showDebugLog);

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  // 处理输入流数据
  debug.sendToPDB(data);
  setTimeout(() => {
    debug.getLocalVars('a');
  }, 100);
  console.log('Received input:', data);
});

process.stdin.on('end', () => {
  // 输入流结束
  console.log('Input stream ended');
});

process.stdin.on('error', (err) => {
  // 处理错误
  console.error('Error:', err);
});

function showDebugLog(logs) {
  console.log('logs :>> ', logs);
}
