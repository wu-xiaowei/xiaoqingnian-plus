(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{674:function(t,a,v){"use strict";v.r(a);var _=v(4),s=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"反向压力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向压力"}},[t._v("#")]),t._v(" 反向压力")]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("大家好，我是鱼皮，今天分享一个实用的编程小知识 —— 反向压力。")]),t._v(" "),a("p",[t._v("在介绍反向压力前，我们先聊聊什么是压力？")]),t._v(" "),a("h3",{attrs:{id:"什么是压力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是压力"}},[t._v("#")]),t._v(" 什么是压力？")]),t._v(" "),a("p",[t._v("我是一个打工人，日常工作就是听产品经理的话，写代码做需求。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858224.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("正常打工")])]),t._v(" "),a("p",[t._v("正常情况下，我每天能写 500 行代码，一周能做完 1 个需求就不错了。")]),t._v(" "),a("p",[t._v("但如果某天，领导突然发话了：对手公司已经荣华富贵了，我们也得抓紧，发财发财发财！")]),t._v(" "),a("p",[t._v("于是产品经理收到了更多来自领导的需求，也就给我安排了更多的需求。但我毕竟能力有限，每天只能写那么几行代码，因此只能每天加班苦不堪言，整个人处于超负荷状态，感受到了 "),a("strong",[t._v("压力")]),t._v(" 。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858372.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("有压力了")])]),t._v(" "),a("p",[t._v("那把这个场景类比到程序系统中，就是服务调用方对服务提供者的压力，或者说是请求方对处理方的压力。每个服务单位时间的处理能力是有限的，一旦请求量过大，服务的压力就会逐渐增大（可能是内存等资源不断被占用），严重时会导致服务停机。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858223.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("服务调用")])]),t._v(" "),a("p",[t._v("也可以把整个过程理解为泳池蓄水吧，进水管比排水管的水量更大，那泳池一会儿就水满溢出了。")]),t._v(" "),a("p",[t._v("了解什么是压力后，反向压力就很简单了。")]),t._v(" "),a("h3",{attrs:{id:"什么是反向压力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是反向压力"}},[t._v("#")]),t._v(" 什么是反向压力？")]),t._v(" "),a("p",[t._v("先接着做个比喻，假如领导和产品经理要给我增加过多的工作量，那我干嘛要傻傻的默默忍受呢？不是还有其他选择么？")]),t._v(" "),a("ol",[a("li",[t._v("跟上级们反映一下，工作量太多")]),t._v(" "),a("li",[t._v("实在欺人太甚的话，直接甩下一句话：劳资不干了！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858526.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("当然，对于领导来说，可能也会给你两种结果：")]),t._v(" "),a("ol",[a("li",[t._v("倾听你的反馈，动态调整你的工作量，先让你做高优先级的需求，其他的排到后面慢慢做。")]),t._v(" "),a("li",[t._v("爱干不干，不干滚蛋！")])]),t._v(" "),a("p",[t._v("显然第一种情况比较好对吧。这便是反向压力（Back Pressure），又叫 "),a("strong",[t._v("背压")]),t._v(" 。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858665.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("类比到程序系统中，就是根据服务处理方的处理能力和状态动态地调整调用方的请求频率。")]),t._v(" "),a("p",[t._v("可以是处理方 "),a("strong",[t._v("主动通知")]),t._v(" 调用方：哦我压力太大了、活干不完了！然后调用方可以减少请求频率。")]),t._v(" "),a("p",[t._v("也可以是调用方 "),a("strong",[t._v("被动监测")]),t._v(" 处理方：看见员工开始摸鱼了，肯定是工作不饱和！然后调用方可以逐渐增大请求频率。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858554.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("反向压力")])]),t._v(" "),a("h3",{attrs:{id:"反向压力的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向压力的好处"}},[t._v("#")]),t._v(" 反向压力的好处")]),t._v(" "),a("p",[t._v("反向压力实际上是 "),a("strong",[t._v("流量控制")]),t._v(" 的一种解决方案，可以使得调用方和处理方的能力相匹配，从而保护系统的各节点处于持续的正常工作状态。")]),t._v(" "),a("p",[t._v("如果不使用反向压力，只能人为去评估系统中各个节点能承受的压力，再给每个服务调用者的调用频率加一个 "),a("strong",[t._v("固定")]),t._v(" 的限制。限制设小了，就很容易产生资源浪费；限制设大了，服务又可能承受不住，导致挂掉或被剔除。")]),t._v(" "),a("p",[t._v("而且最致命的是，系统中的节点变化是不可控的，可能现在的系统状态很稳定，但如果突然多了个服务调用方，就又增加了服务提供者的压力。而这种压力没有被感知到，才是最恐怖的！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858462.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("新服务调用方")])]),t._v(" "),a("p",[t._v("因此，如今动态流控、甚至是智能流控也被应用的越来越广泛。")]),t._v(" "),a("h3",{attrs:{id:"反向压力的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向压力的应用"}},[t._v("#")]),t._v(" 反向压力的应用")]),t._v(" "),a("p",[t._v("有流量控制的需求，就会有反向压力的身影。")]),t._v(" "),a("p",[t._v("我是从一本 "),a("strong",[t._v("实时流式计算")]),t._v(" 的书籍中第一次真正了解到反向压力的概念，这也是它应用最广泛的领域，像几个流处理框架 Flink、Spark Streaming、Storm 中，都有相应的反向压力实现。")]),t._v(" "),a("p",[t._v("反向压力的概念也被广泛应用于 "),a("strong",[t._v("反应式编程")]),t._v("（Reactive Programming）中，比如 Spring WebFlux、RxJava 框架等，可以实现异步非阻塞、低延迟、高吞吐量的处理系统。")]),t._v(" "),a("p",[t._v("此外，反向压力的思想也很实用，比如 TCP 网络协议的流量和拥塞控制中，实际是由发送方和接收方共同确认数据包滑动窗口的大小，从而控制传输包的速率。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858339.jpeg",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("TCP 协议数据包传输")])]),t._v(" "),a("p",[t._v("因此，反向压力还是很值得学习的！")]),t._v(" "),a("p",[t._v("至于它如何实现，还是有很大学问的，不同框架的实现方式也不同，大家可以自行了解。（等我学好了再分享哈哈）")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("以上就是本期分享。")]),t._v(" "),a("p",[t._v("我是鱼皮，学到的话还请 "),a("strong",[t._v("点赞 + 在看")]),t._v(" 支持，这是我持续更新的最大动力！🙏")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://pic.yupi.icu/5563/202311080858922.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);