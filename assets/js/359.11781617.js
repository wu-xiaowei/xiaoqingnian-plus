(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{663:function(t,a,s){"use strict";s.r(a);var _=s(4),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"老弟做了个网盘-炸了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#老弟做了个网盘-炸了"}},[t._v("#")]),t._v(" 老弟做了个网盘，炸了！")]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("趣讲文件上传功能的巧妙设计")])]),t._v(" "),a("p",[t._v("大家好，我是鱼皮。")]),t._v(" "),a("p",[t._v("不知道大家有没有想过制作一款自己的网盘呢？这不，我学编程的老弟小阿巴做了一个，非常激动地找我来体验。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433749.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("打开网盘，界面仿的还不错，我简单试了下文件的上传和下载，没有什么问题。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433891.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("阿巴网盘")])]),t._v(" "),a("p",[t._v("正当小阿巴洋洋得意时，我试着上传一个 1 GB 大小的文件。结果文件上传到 99% 时，网络一抖，文件上传失败，竟然还要从 0 开始重新上传？！")]),t._v(" "),a("p",[t._v("小阿巴无奈地挠挠头：网络不好，怪我咯？")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433753.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("我直接一巴掌甩过去，要知道，制作网盘可不是一件容易的事！")]),t._v(" "),a("p",[t._v("先从最基础的功能来说，要实现文件的上传、存储、下载、文件和目录管理。如果要真正上线、开放给其他人使用，还要考虑到权限管理、接口访问、CDN 加速，无论哪点自己来做都是很麻烦的。")]),t._v(" "),a("p",[t._v("所以除了学习之外，如果想要搭建自己的私人网盘，建议直接选择一些开源的，比如主流的 Seafile、Nextcloud、Cloudreve、OwnCloud 都可以。")]),t._v(" "),a("p",[t._v("当然，公用网盘最要命的还是带宽、存储等资源的费用，所以为了节约成本、支持更多用户访问，很多网盘都采取了限速、限制容量策略。")]),t._v(" "),a("p",[t._v("小阿巴：做了网盘这么麻烦啊，我放弃我放弃。。。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433900.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("我笑到：虽然想做好网盘很难，但我们可以一步步来，学习每个功能中的优秀设计，相信最后也能做出一款不错的网盘。今天就先从 "),a("strong",[t._v("文件上传")]),t._v(" 讲起吧，解决下刚刚上传失败必须从 0 重新上传的问题等。")]),t._v(" "),a("h3",{attrs:{id:"文件上传设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传设计"}},[t._v("#")]),t._v(" 文件上传设计")]),t._v(" "),a("p",[t._v("文件上传顾名思义就是把文件从本地电脑发送到存储文件的远程服务器上，小文件的上传倒没有什么好说的，主要考虑的是大文件上传怎么 "),a("strong",[t._v("更快、更稳定、更灵活、更快响应")]),t._v(" 等等，以提高用户的体验。")]),t._v(" "),a("p",[t._v("这里分享几个经典的大文件上传设计，包括文件分块、并发上传、断点续传、秒传、异步上传。")]),t._v(" "),a("h4",{attrs:{id:"文件分块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件分块"}},[t._v("#")]),t._v(" 文件分块")]),t._v(" "),a("p",[t._v("既然小文件的处理相对容易，那不妨在发送前，把大文件分割为多个连续的小文件，一块一块地发送。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433759.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("文件分块")])]),t._v(" "),a("p",[t._v("此外，需要在发送每一个文件块时，额外传输一些信息，比如当前块数、文件总块数、文件大小、所属原文件标识（MD5）等：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433739.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这样，服务器就能一块一块地接收，把这些文件块保存到临时目录中。当接收到最后一块时，把之前的所有文件块再拼接到一起，就能组成完成的原文件啦。")]),t._v(" "),a("h4",{attrs:{id:"并发上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发上传"}},[t._v("#")]),t._v(" 并发上传")]),t._v(" "),a("p",[t._v("将大文件分块后，就可以通过多线程并发上传，同时传输多个块：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433530.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("串行上传和并发上传")])]),t._v(" "),a("p",[t._v("要根据网络情况决定是否并发上传、同时并发上传多少个块，不是并发数越多越好。网络好的话，并发数量调大一些，能够大大提高文件整体上传效率；相反，盲目调整并发数，上传可能会更慢。")]),t._v(" "),a("h4",{attrs:{id:"断点续传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断点续传"}},[t._v("#")]),t._v(" 断点续传")]),t._v(" "),a("p",[t._v("对于大文件来说，上传中断后如果要从 0 开始重传，就太让人崩溃了！")]),t._v(" "),a("p",[t._v("推荐使用断点续传技术，原理很简单，在文件分块的基础上，服务器记录一下原文件对应的上传进度，每接收到一个块，就更新一下进度。这样，即使网络故障导致上传失败，也能从上传进度中知道哪些文件块已上传、接下来需要从哪一块重新开始了，而不用从第 1 块开始重新传输。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433981.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("断点续传")])]),t._v(" "),a("blockquote",[a("p",[t._v("该原理同样适用于文件下载。")])]),t._v(" "),a("p",[t._v("断点续传有很多种实现方式，自主实现、HTTP 协议 1.1 等，感兴趣的同学可以了解下。")]),t._v(" "),a("h4",{attrs:{id:"秒传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#秒传"}},[t._v("#")]),t._v(" 秒传")]),t._v(" "),a("p",[t._v("不知道大家有没有发现，有时，我们上传一个几 GB 的超大文件竟然可以在 1 秒内完成！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433509.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这是咋实现的呢？真相只有一个，该文件肯定之前已经被上传过了！")]),t._v(" "),a("p",[t._v("这就是经典的秒传技术。")]),t._v(" "),a("p",[t._v("上传文件前，先在客户端（比如浏览器）根据文件内容计算出文件的 MD5 值，相同内容的文件 MD5 值必然相同。然后在服务器已上传文件数据库中查找该 MD5 对应的文件是否已存在。如果不存在，上传文件并在上传成功后将该文件信息插入数据库，过程如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433010.png",loading:"lazy"}}),t._v("文件秒传 - 文件不存在")]),t._v(" "),a("p",[t._v("若文件已存在，直接新建一个对该文件的引用就行了，不必重复上传，过程如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433098.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("文件秒传 - 文件已存在")])]),t._v(" "),a("p",[t._v("不过要注意，不同内容文件的 MD5 值也可能会相同（碰撞），导致用户下载到不是自己上传的文件，所以检验重复时，还可以补充一些校验，比如针对文件前几位再生成一个 MD5、用其他 Hash 算法再生成一个校验值等。")]),t._v(" "),a("h4",{attrs:{id:"异步上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步上传"}},[t._v("#")]),t._v(" 异步上传")]),t._v(" "),a("p",[t._v("除了同步上传外，当我们要上传的文件不在本地而是已经存在对应 url 时，也可以采用 "),a("strong",[t._v("全异步上传")]),t._v(" 的方式，将文件上传变成一个 "),a("strong",[t._v("任务")]),t._v(" 。")]),t._v(" "),a("p",[t._v("用户输入要上传的文件 url，点击上传后，不需要一直在文件上传页面等着，而是只需要告诉后台 “我要执行文件上传”，并向后台新建一个文件上传任务，就可以快速响应用户了，比如 “文件上传中，请留意通知”。等后台取出并真正完成文件上传的任务后，给用户发送通知就可以了。")]),t._v(" "),a("p",[t._v("整体步骤如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433786.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("异步上传")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("最后，如果只是需要在开发中用到文件上传，大可不必自己实现上述功能，用个现成的对象存储服务就好了。比如七牛云，分块上传什么的都给我们做好了，也可以参考七牛云 SDK 文档（https://github.com/qiniu）来了解它们的实现方式。")]),t._v(" "),a("p",[t._v("以上就是本期分享，我是鱼皮，"),a("strong",[t._v("点赞 + 在看")]),t._v(" 还是要求一下的，祝大家都能心想事成、发大财、行大运。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071433278.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);