(self.webpackChunkcapricorn_blog=self.webpackChunkcapricorn_blog||[]).push([[372],{7152:(e,i,l)=>{"use strict";l.r(i),l.d(i,{data:()=>t});const t={key:"v-059532ee",path:"/note/Brower/1.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"现在浏览器的结构",slug:"现在浏览器的结构",children:[]},{level:3,title:"CA的工作流程",slug:"ca的工作流程",children:[]},{level:3,title:"https协议分析",slug:"https协议分析",children:[]}],filePathRelative:"note/Brower/1.md",git:{updatedTime:1657074241e3,contributors:[]}}},9096:(e,i,l)=>{"use strict";l.r(i),l.d(i,{default:()=>r});const t=(0,l(6252).uE)('<h3 id="现在浏览器的结构" tabindex="-1"><a class="header-anchor" href="#现在浏览器的结构" aria-hidden="true">#</a> 现在浏览器的结构</h3><ul><li>用户界面</li><li>浏览器引擎</li><li>渲染引擎</li><li>网络</li><li>XML解析器</li><li>显示后端</li><li>数据持久层</li></ul><h3 id="ca的工作流程" tabindex="-1"><a class="header-anchor" href="#ca的工作流程" aria-hidden="true">#</a> CA的工作流程</h3><ol><li>服务器example.com将从CA请求TLS证书, 例如Digicert</li><li>Digicert将为example.com创建证书 证书将包含必要的数据</li><li>例如, 名称， 公钥，Digigert创建证书的哈希值, 将使用自己的私钥对其加密</li><li>浏览器和操作系统自带DIgicert 等CA机构的公钥</li><li>当浏览器收到签名证书时, 它将使用公钥从签名生成哈希, 它将使用证书中指定的散列算法生成数据的散列, 如果俩个哈希匹配, 则签名证明成功, CA可信</li><li>浏览器可以使用证书中指定的example.com 的公钥继续进行身份验证过程.</li></ol><h3 id="https协议分析" tabindex="-1"><a class="header-anchor" href="#https协议分析" aria-hidden="true">#</a> https协议分析</h3><h4 id="tls握手的步骤" tabindex="-1"><a class="header-anchor" href="#tls握手的步骤" aria-hidden="true">#</a> TLS握手的步骤:</h4><ol><li><p>clientHello: 客户端发送所支持的 SSL/TLS 最高协议版本号和所支持的加密算法集合及压缩方法集合等信息给服务器端。</p></li><li><p>SeverHello: 服务器收到客户端信息后选定双方都支持的SSL/TLS协议版本和加密方法及压缩方法返回给客户端</p></li><li><p>（可选）SendcertIficate: 服务器发送服务端证书给客户端</p></li><li><p>（可选）RequestcertIficate: 如果是双向验证，服务器端向客户端证书</p></li><li><p>severHelloDone 服务器通知客户端初始协议结束</p></li><li><p>ResponseCertIficate（可选）: 如果选择双向验证, 客户端向服务器发送客户端证书</p></li><li><p>ClientKeyExchge: 客户端使用服务器的公钥, 对客户端公钥和密钥种子进行加密, 再发送给服务器</p></li><li><p>certificateVerify(可选): 如果选择双向验证, 客户端用本地私钥生成数字签名, 并发送给服务器, 让其通过收到的客户端公钥进行身份验证</p></li><li><p>createSecretKey 通讯双方基于密钥种子等信息生成通讯密钥</p></li><li><p>ChangeCipherSpec: 客户端通知服务器已将通讯方式切换到加密模式</p></li><li><p>Finished: 客户端做好加密通讯的准备</p></li><li><p>ChangeCipherSpec: 服务器通知客户端已将通讯方式切换到加密模式</p></li><li><p>Finished: 服务器做好加密通讯的准备</p></li><li><p>EncryptedDecrytedData: 双方使用客户端密钥, 通过对成加密算法对通讯内容进行加密</p></li><li><p>closedConnection: 通讯结束后,任何一方发出断开SSL连接的消息</p></li></ol>',7),r={render:function(e,i){return t}}}}]);