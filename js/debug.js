// @ts-check
const { spawn } = require('child_process');
const path = require('path');
const { EOL } = require('os');

const splitStr = (str) => {
  return str.split(EOL);
};

class Debug {
  worker;
  breakpoints = {};
  filePath = path.resolve(__dirname, './test.py');

  constructor(filePath) {
    if (filePath) {
      this.filePath = filePath;
    }
  }

  async init(cb) {
    const worker = spawn('python3', ['-m', 'pdb', this.filePath]);
    worker.stdout.on('data', (chunk) => {
      let data = chunk.toString();
      // data 实际是会和 ui 交互并处理后显示给运行日志
      if (data) {
        cb(data);
      }
    });

    worker.stdout.on('end', () => {
      cb('PDB ended!!');
    });

    worker.stdout.on('error', (error) => {
      cb(error);
    });

    this.worker = worker;
  }

  sendToPDB(command) {
    // command 经过处理过后再给 PDB
    this.worker?.stdin?.write(command);
  }
}

module.exports.Debug = Debug;
