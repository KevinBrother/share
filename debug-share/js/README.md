# 可视化 debug

## 如果基于 pdb 实现下一步，继续等功能

下一步： pdb => until + （下一个 block 生成代码的第一行）
继续（跳转到下一个断点）：pdb => c
重试：pdb => jump + (当前 block 的第一行)
修改后面的 block：


## 基于 debugpy 实现可视化 debug

```python
python3 -Xfrozen_modules=off -m debugpy --listen 5678 --wait-for-client ./debug-share/js/test.py
```
### 参考

服务： [debugpy](https://github.com/microsoft/debugpy)
连接界面与服务：[vscode-python-debugger](https://github.com/Microsoft/vscode-python-debugger)
界面：[vscode-python](https://github.com/Microsoft/vscode-python)