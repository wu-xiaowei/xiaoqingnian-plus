(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{729:function(a,t,v){"use strict";v.r(t);var _=v(4),p=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"spring-boot-船新版本-我却很失望"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-船新版本-我却很失望"}},[a._v("#")]),a._v(" Spring Boot 船新版本？我却很失望")]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247529515&idx=1&sn=eb5e2af507ce35e3c4159dad7e1424f1&chksm=e9c293dcdeb51acac148fd14c0677ab3c1076c47ab52a33ffe7d682a3e1d1d8f37c4d3c7d167&token=1411297570&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("最近在带大家做新项目，欢迎参与"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("大家好，我是鱼皮。")]),a._v(" "),t("p",[a._v("先讲个故事，我大二的老弟小阿巴，昨天用 IDEA 开发工具初始化了个 Java Spring Boot 的项目。明明操作流程和往常一模一样，结果项目却跑不起来。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091241331.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("奇怪了，明明选的是 Java 8 来初始化项目，为什么提示需要 Java 17？")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091241353.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("哦，原来现在初始化项目时，默认选中的 Spring Boot 版本变成 3.0 了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091241374.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("3.0 也是前几天刚刚发布的 Spring Boot 重大版本，这个版本 "),t("strong",[a._v("对 Java 的最低版本要求是 17")]),a._v(" ！")]),a._v(" "),t("p",[a._v("看到这里，我就知道 Spring Boot 3.0 版本和我没什么关系了，短期之内我也不打算使用它。")]),a._v(" "),t("p",[a._v("因为我自己项目中使用的 Java 版本，绝大多数都是 Java 8，只有个别项目用了 Java 11。。。Java 17 尝个鲜还可以，但是让我长期使用它，估计是不太可能。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091241356.jpeg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("看了下 JRebel 于 2022 年的 Java 生产力报告，如今 Java 8 的使用率仍是第一、Java 11 其次，越来越多的小公司开始尝试使用 Java 11。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091241358.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("问题来了，为什么大多数开发者现在仍在使用 Java 8，而不去拥抱船新版本的 Java 呢？")]),a._v(" "),t("p",[a._v("说说我自己的感受：")]),a._v(" "),t("p",[a._v("1）兼容性")]),a._v(" "),t("p",[a._v("Java 一直是主流的企业开发语言，存量项目非常多，大部分的老项目和类库支持都是 Java 8 及以下的版本，如果强行升级了 JDK 这种基础环境，很难保证项目的运行和之前完全一致。")]),a._v(" "),t("p",[a._v("我自己就经历过一次 JDK 8 升级 JDK 11 的大坑，升级后项目虽然能跑，但在做一个导出 Excel 表格功能时，升级版本后部分字符就乱码了，折腾了好久才搞定，比做几个新需求还心累。")]),a._v(" "),t("p",[a._v("所以还是谨记编程铁律第一条："),t("strong",[a._v("程序能运行，就不要动它。")])]),a._v(" "),t("p",[a._v("2）稳定性")]),a._v(" "),t("p",[a._v("Java 8 已经经过成千上万个企业项目的检验，都很难做到绝对的稳定。如果用一个新版本的 Java，很难说会遇到什么乱七八糟的线上问题，所以建议规模较大的项目慎用太新的东西。")]),a._v(" "),t("p",[a._v("3）生态不足")]),a._v(" "),t("p",[a._v("现在网上的项目教程也好、解决 Bug 的博客方案也罢，几乎都是基于 Java 8 的。如果你使用高版本的 Java，哪怕是同样的代码，可能项目也根本运行不起来，可能还有一些语法细节的不一致等。而且你可能在网上都搜不到相关的解决方案，这个对于 Java 开发经验不足的同学来说，是非常致命的。为什么不建议大家学习小众编程语言，也有这个原因。")]),a._v(" "),t("p",[a._v("我印象中自己使用 Java 11 的时候就遇到过一些莫名其妙的小 Bug，很多是去 stack overflow 等国外平台才找到了解决方案。")]),a._v(" "),t("p",[a._v("4）提升不明显")]),a._v(" "),t("p",[a._v("当一个框架发布新版本的时候，我们最关心的往往是它有什么 “革命性” 的改动，吸引我们去升级。")]),a._v(" "),t("p",[a._v("那 Spring Boot 3.0 有哪些新特性呢？")]),a._v(" "),t("p",[a._v("我关注到的、值得一提的有 2 点：")]),a._v(" "),t("ol",[t("li",[a._v("支持 GraalVM 原生镜像。GraalVM 是一个多语言通用的虚拟机，号称是云原生时代的虚拟机王者。大家可以先简单理解为 Spring Boot 项目运行在这个虚拟机上可以更快地启动、节约一些内存之类的，便于弹性扩容等。")]),a._v(" "),t("li",[a._v("提升应用的可观测性。可以简单理解为你可以更轻松地收集和监控应用的运行状态。")])]),a._v(" "),t("p",[a._v("哦，好像我关注的也就这两点，其他的都是一些依赖升级之类的了（对开发者没有那么利好）。")]),a._v(" "),t("p",[a._v("关于这两个点，对我（或者对很多开发者）其实也没有那么强的吸引力了。想搞云原生、追求高性能，但如果要改变开发者的使用习惯的话，为什么我们不直接试试 Go 呢？")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091241371.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("至于可观测性，现在很多框架、第三方组件已经做得很好的，这不足以成为大家升级框架（还有 JDK）的契机。")]),a._v(" "),t("p",[a._v("所以我这里也是不建议没有足够经验的开发者（尤其是 Java 的初学者）去追求 Java 11、Java 17 等高版本。先老老实实用 Java 8，先把 Java 8 的特性学好吧~")]),a._v(" "),t("p",[a._v("这里我也留个小 Flag：3 年之后再来看，Java 8 依然会是主流。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091241849.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("那么，Spring Boot 3.0 的出现，"),t("strong",[a._v("真的跟我们没关系么？")])]),a._v(" "),t("p",[a._v("答案当然是否定的。")]),a._v(" "),t("p",[a._v("作为开发者（哪怕是小白），其实多了解一些技术发展趋势是有绝对的好处的，比如 Spring Boot 为什么要这么更新？可以从中预见到未来的发展方向 —— 云原生的发展应该是大势所趋。对于求职写简历、想进大厂的同学来说，在学好 Java 8 基础的前提下，可以多了解这方面的内容（比如 Spring Native、Quarkus 等）并且写在简历上；面试的时候也可以跟面试官多聊几句，体现出自己的学习积极性，是绝对的加分项。")]),a._v(" "),t("p",[a._v("讲真大家真的可以去试试 Quarkus，这玩意启动速度是真的快哈哈！")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("以上就是本期分享。欢迎学编程的朋友们加入我的 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247524980&idx=2&sn=9ddcdb6c52aa096ed4c5ad0ced946a7d&chksm=e9c28583deb50c95f3c2665713a8bbc372c68332b3bfb846cf4b23af3f1cc07164832a291335&token=689599617&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("编程知识星球"),t("OutboundLink")],1),a._v(" ，我会 1 对 1 解决你的问题，并且直播带大家开发完整项目。可以加我微信 yupi1085，备注【加入星球】和自己的情况领取优惠加入星球，不备注不通过，非诚勿扰谢谢。")])])}),[],!1,null,null,null);t.default=p.exports}}]);