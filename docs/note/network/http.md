### 输入URL到渲染页面
输入 URL   redirect 之后

先走强缓存  不走网络

如果强缓存没有 再走协商缓存 走网络

DNS 解析  内置到路由器里面  UDP 协议 （阿里云的DNS 基于TCP   移动端应用加速） 得到IP地址

TCP 协议是http协议 也就是TCP协议 

建立TCP连接 

（三次握手）（connetStart）

  可能加密层面的握手（secureConnectionStart） 

受到影响的 因素 ： 服务器的请求并发数 (...K),  (https  SSL)配置到nginx上,  物理结构

requestStart： 从数据的第一个字节开始计时 ,  什么结束 并不知道

responseStart： 

responseEnd:

如果是长连接 不在这路挥手 如果是短连接 这里四次挥手

processing：

- domLoading
- domInteractive
- domContentLoaded
- domComplate
- loadEventStart
- loadEventEnd







###  DNS （域名系统） 用于将域名转换为IP

顶级域名 ：  比如： baidu.com  （一级域名）, www.baidu.com （二级域名） .com (顶级域名)

域名资源记录： AAA 记录  Ipv4  、AAAA Ipv6

域名服务器： 解析IP的服务器 

- 分级别管理

- - 域名解析服务器（内置在本机里面）

    - 根服务器（root server） 顶级域名  哪一个顶级域名 归哪个TLD服务器管理
    - 名称服务器（Name server）二级、三级域名等等和IP的对应关系
    - TLD服务器 （TLD server） 某一个顶级域名的解析

    ### CDN

    网络加速 


### TCP三次握手与四次挥手

> 网络分层

- 应用层   http
- 表现层 
- 会话层
- 传输层  再打一次包 TCP UDP QUIC
- 网络层  IP层
- 数据链路层
- 物理层

> 协议特性

tcp 追求稳定性和严密性  发送数据必须知道对方收到没收到 



#### 三次握手

- 客户端发起一个请求 SYN seq = x 服务端listen（ 第一次握手）
- 服务端返回俩个指令  SYN seq = y  ACK = x + 1 （对应客户端发过来的SYN）（第二次握手）  保证双向通信  TCP是双工通信 同时向俩个方向通信  （ 对讲机： 单向） 
- 客户端收到服务端 SYN seq = y  然后客户端相应 给服务端 ACK = y + 1 （第三次握手）

#### 四次挥手

- 一般是客户端断开链接 向服务器发送一个 FIN  seq = x + 2 ，ACK = y + 1 （第一次挥手）
- 服务端回应了 ACK seq = x + 3  这个时候服务端端不再处理客户端的请求 （除了应答包）（第二次挥手）服务端的协议栈 维护着数据 先处理完这些数据 再返回应答包 也就是收尾工作 
- 服务端再次 返回应答包（ FIN seq = y + 1)（第三次挥手）
-  客户端给服务器 应答包（ACK = y + 2）

Tcp 半链接 ：tcp如果是俩次握手或者是俩次挥手   tcp就会处于半链接状态 DOS （j）

UDP 只管发  不管稳定性 不过可以设置 顶层

QUIC  比UDP稳定  

### https

### SSL/TLS 加密方式

验证过程是非对称加密和对称加密结合

**对称加密**：也叫密钥加密，就是指加密和解密相同的是相同的密钥。

**非对称加密**：也叫公钥加密，就是指加密和解密使用的是不同的密钥

#### 密钥交换算法

Alice 和 Bob 确定俩个大素数 n和g, 这俩个数可以不保密
Alice 选择一个大随机数x, const A = g * x % n
Alice 将A发给Bob
Bob 选择一个大随机数y,   const B = g * y % g
Bob   将B发给Alice
计算密钥K1 = B * x % n
计算密钥K2 = A * y % n
K1 === K2, 就可以加解密


##### SSL/TLS特性

- 认证用户和服务器，确保数据发送到正确的客户机和服务器
- 加密数据以防止数据中途被窃取
- 维护数据的完整性，确保数据在传输过程中不被改变

##### SSL的握手过程



先DNS 解析域名 成 IP 端口  然后发起 IP:端口的网络请求 然后进行TCP连接

### TCP慢启动

TCP数据传输的性能取决于TCP连接的使用期，TCP连接会随着时间进行自我“调谐”，起初会限制连接的最大速度，如果数据成功传输， 会随着时间的推移提高传输的速度。这种调谐被称为TCP慢启动，用于防止网络的突然过载和拥塞。


### http1 http1.1 加入长链接


### 缓存机制

1. 浏览器发送请求前，根据请求头的expires和cache-control 判断是否命中 或者 是否过期 强缓存策略, 如果命中直接从缓存读取资源, 并不会发送请求 。 如果没有命中 则进入下一步。
2. 浏览器会发送请求没根据请求偷的last-modified 和etag判断是否命中协商缓存，如果命中，直接从缓存获取资源，如果没有命中, 则进入下一步
3. 直接从服务端获取资源


#### 强制缓存
1. 当浏览器向服务器发起请求时，服务器将缓存规则放入HTTP相应豹纹的HTTP头中和请求结果一起返回给浏览器, 控制强制缓存的字段分别是Expires 和 cache-control , cache-control 的优先级高于expires

> Expires 是http1的产物, 受限于本地时间 如果修改本地时间 可能导致缓存失效

2. cache-control 
- public 所有内容都将被缓存
- private 所有内容只有客户端可以缓存
- no-cache 客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
- no-store 所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
- max-age=xxx 缓存内容将在xxx秒后失效

> 需要注意的是, no-cache 并不是浏览器就不再缓存数据, 只是浏览器在使用缓存数据时, 需要先确认一下数据是否还跟服务器保持一致, 也就是协商缓存

### 缓存存放在哪里

- from disk cache
1. 快速读取 (内存缓存会将变异解析后的文件， 直接存入该进程的内存中, 占据该进程一定的内存资源, 以方便下次运行使用时的快速读取)

2. 时效性 (一旦进程关闭, 则该进程的内存则会清空)
- from memory cache
1. 写入硬盘文件
2. 进行I/O操作
3. 速度比memory cache 慢

### 协商缓存
协商缓存就是强缓存失效后, 浏览器携带缓存表示向服务器发起请求， 由服务器根据缓存表示决定是否使用缓存的过程

- 协商缓存生效, 返回304和Not Modified （资源未改变）

- 协商缓存失效, 返回200和请求结果

#### Last-Modified 和 If-Modified-Since
走协商缓存的时候 浏览器首先会发送一个请求, 让服务端在Response Header中返回请求资源上次更新时间last-modified, 浏览器会缓存下这个时间.然后再下次请求中 request header 中带上 If-Modified-Since: 上次服务器返回的last-modified。 根据这个时间 和 服务器的时间 进行比对, 一致的话, 表示资源未改变， 服务端返回正文为空的响应, 让浏览器从缓存中读取资源 
> 由于last-modified 保存的是绝对时间 以秒为单位 , 所以一秒内的多次改变 是无法捕捉到的, 故, 提出了etag策略

#### ETag 和 If-None-Match

Etag 哈希

请求头带 If-None-Match: 上次服务端生成的ETag值