# TCP 和 UDP

## tcp

1. tcp的服务端 怎么在 客户端断开连接后 仍然 不断开，只产生两次挥手

> 在TCP协议中，当客户端主动断开连接时，服务器会收到一个连接关闭的通知，并触发服务器端> 的close事件。这是TCP协议的正常行为，无法直接控制只产生两次挥手。

> TCP连接的关闭过程通常经历四次挥手（Four-way handshake）：

> 客户端发送连接关闭请求给服务器。
> 服务器收到请求后，发送确认响应给客户端。
> 服务器发送连接关闭请求给客户端。
> 客户端收到请求后，发送确认响应给服务器。
> 这四次挥手是为了确保双方都知道连接已经关闭，以防止数据丢失。因此，无法直接控制只产生两> 次挥手。
> 
> 如果您想控制连接关闭的行为，您可以考虑在应用层进行处理。例如，可以在客户端发送连接关闭> 请求后，服务器先不进行确认响应，而是等待一段时间再进行响应。这样可以模拟只产生两次挥手> 的效果。但请注意，这不符合TCP协议的规范，可能会导致连接状态不一致或数据丢失的问题。
> 
> 总结而言，TCP协议的连接关闭是由协议规范决定的，无法直接控制只产生两次挥手。如果您有特殊> 的连接关闭需求，建议在应用层进行处理，并确保不会引入潜在的问题。
