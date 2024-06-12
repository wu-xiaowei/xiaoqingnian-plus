(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{673:function(t,_,v){"use strict";v.r(_);var a=v(4),e=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"我们学并发时-到底在学什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#我们学并发时-到底在学什么"}},[t._v("#")]),t._v(" 我们学并发时，到底在学什么？")]),t._v(" "),_("blockquote",[_("p",[t._v("本文作者："),_("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("本站地址："),_("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),_("OutboundLink")],1)])]),t._v(" "),_("p",[t._v("大家好，我是鲏。")]),t._v(" "),_("p",[t._v("前段时间，星球里一位朋友问我：")]),t._v(" "),_("blockquote",[_("p",[t._v("鱼皮，高并发项目牵扯的知识有哪些？")]),t._v(" "),_("p",[t._v("之前看到的一个回答：既要解决性能的问题又要考虑业务完整性，还有网络资源、服务器资源等，我不太能理解，希望鱼皮细说。")])]),t._v(" "),_("p",[t._v("我就简单分享下自己对高并发的理解，水平有限还请见谅。")]),t._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080909641.png",loading:"lazy"}})]),t._v(" "),_("p",[t._v("技术是为了解决实际问题服务的，那么并发是为了解决什么问题呢？我用一句话总结，就是：在资源有限、并且不改变程序执行结果（正确性）的情况下，合理运用并发编程和架构设计来尽可能多地 "),_("strong",[t._v("提高你程序的性能和稳定性")]),t._v(" 。")]),t._v(" "),_("p",[t._v("其中的关键字就是：")]),t._v(" "),_("ol",[_("li",[t._v("资源有限")]),t._v(" "),_("li",[t._v("不改变程序执行结果")]),t._v(" "),_("li",[t._v("并发编程")]),t._v(" "),_("li",[t._v("提升性能")]),t._v(" "),_("li",[t._v("提升稳定性")])]),t._v(" "),_("blockquote",[_("p",[t._v("其实你会发现这几个点基本就把上述问题描述中提到的东西覆盖到了。")])]),t._v(" "),_("p",[t._v("举个例子：你只有 3 台 4 核 8 G 内存的服务器，如何在最短的时间内对 1000 万行数据进行汇总运算，就可以运用并发来解决。比如你可以把数据均摊到 3 台机器上同时汇总，最后再对 3 台机器的汇总数据再汇总（大数据 Map Reduce 的思想）。")]),t._v(" "),_("p",[t._v("那么并发编程要学习哪些知识呢？")]),t._v(" "),_("p",[t._v("这里说一下我自己的学习顺序：")]),t._v(" "),_("p",[t._v("1）先了解并发的思想和概念，比如什么是同步和异步，什么是并发和并行，什么是进程 / 线程 / 协程、什么是线程安全性、什么是线程池、什么是 IO，还有锁、资源共享、性能指标 QPS / TPS / P95 / P99 等。")]),t._v(" "),_("p",[t._v("很多知识都是操作系统课上学到的，好好听课或者自己看书都可以，星球的同学可以看我的操作系统学习路线：")]),t._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080909793.png",loading:"lazy"}})]),t._v(" "),_("p",[t._v("2）学习如何编写高并发程序，比如 Java 的 JUC 并发包，里面提供了很多现成的类和方法，比如 CompletableFuture、ExecutorService 等，了解它们的用法后，能够轻松实现并发编程，不用自己写 new Thread。")]),t._v(" "),_("p",[t._v("3）学习并发测试、监控和排障工具，比如压测工具 jmeter、监控工具 jconsole、线程分析工具 jstack 等，便于我们根据实际情况来分析并发编程占用的资源、有无死锁，从而更好地提升性能指标。")]),t._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080909797.png",loading:"lazy"}})]),t._v(" "),_("blockquote",[_("p",[t._v("jconsole 控制台")])]),t._v(" "),_("p",[t._v("4）以上这些都学会后，我们就要在做项目的过程中多思考以下问题：")]),t._v(" "),_("ul",[_("li",[t._v("什么时候用并发编程（有无必要）？")]),t._v(" "),_("li",[t._v("怎么设置并发编程的参数（比如线程池的核心线程数）？")]),t._v(" "),_("li",[t._v("怎么划分并发资源（比如划分任务队列）？")]),t._v(" "),_("li",[t._v("怎么防止和解决并发过程中的操作冲突（比如死锁）？")])]),t._v(" "),_("p",[t._v("要做到合理运用并发来解决问题，而不是滥用。")]),t._v(" "),_("p",[t._v("5）跳出单个程序的代码，从上帝视角来设计规划整个系统。")]),t._v(" "),_("p",[t._v("比如选择何种技术来实现高并发？也就是技术选型，如使用 Nginx、消息队列等。")]),t._v(" "),_("p",[t._v("还有如何组合 / 编排多个服务来增加并发度？也就是架构设计（或者说部署）层面的问题，比如动静分离、分库分表、读写分离、弹性 / 线性扩容、冷热分离、批流一体等。")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("在学完基本的开发框架后，大家就可以开始学习并发编程了，这块知识还是很重要的。不了解并发就乱用的话不仅程序会出错、甚至可能出现性能还不如同步执行的情况。")]),t._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080909637.png",loading:"lazy"}})]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("欢迎加入 "),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247524126&idx=1&sn=34af4ba1b3f9d7f93e02a6671a9cfe6d&chksm=e9c278e9deb5f1ffa1b8370fe1a78a5240bc62038d4b78d8f0f9eafef9c4da524d0483db843c&token=253629297&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("鱼皮的编程知识星球（点击了解详情）"),_("OutboundLink")],1),t._v("，带你一起学编程做项目，想加入的同学可添加鱼皮微信 yupi5927 备注【想加星球】，无备注不通过，非诚勿扰谢谢。")])])}),[],!1,null,null,null);_.default=e.exports}}]);