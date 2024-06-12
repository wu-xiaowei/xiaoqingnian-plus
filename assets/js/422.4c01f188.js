(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{725:function(a,t,_){"use strict";_.r(t);var v=_(4),r=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"log4j-炸了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#log4j-炸了"}},[a._v("#")]),a._v(" Log4j，炸了！！！")]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("大家好，我是鱼皮，开门见山，知名的开源项目 Apache Log4j 出事了！")]),a._v(" "),t("p",[a._v("2021 年 12 月 9 日，该项目被曝存在 "),t("strong",[a._v("严重安全漏洞")]),a._v(" ，攻击者只需要向目标机传入一段特殊代码，就能触发漏洞，自由地在远程执行任意代码来控制目标机器！")]),a._v(" "),t("p",[a._v("老实说，光听到这个消息，我就觉得很可怕了。因为 Log4j 作为 Java 的知名日志记录框架，凭借其灵活高效的日志生成能力，不仅被众多自研项目所使用，还被很多明星项目作为了基础框架使用，像 Redis、Kafka、Elasticsearch、Apache Flink、Apache Druid 等等。可以想象这个漏洞的影响范围有多大，甚至被很多媒体称之为 “核弹级” 漏洞！")]),a._v(" "),t("p",[a._v("在漏洞被曝光之后，第一时间做出行动的不是无辜躺枪的程序员们，而是那些坏的一批的小子们。据说，在漏洞被公开的第一天，就发生了近万次利用该漏洞的攻击行为！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091229275.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"漏洞细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞细节"}},[a._v("#")]),a._v(" 漏洞细节")]),a._v(" "),t("p",[a._v("根据 CVE 漏洞公开网站的记录，该漏洞存在于 Apache log4j <= 2.14.1 的版本（但事实上，影响的版本范围比这更大）。攻击者可以通过 log4j 的 lookup 替换功能向其配置文件的任意位置注入代码（类似 SQL 注入，把 变量替换为{实际代码}），再加上这些版本中用到的 JNDI 特性并没有为 LDAP 提供足够的保护，使得注入的任意代码都能被肆无忌惮地执行。")]),a._v(" "),t("blockquote",[t("p",[a._v("JNDI：Java 命名与目录接口，提供了用名称来访问资源的能力")]),a._v(" "),t("p",[a._v("LDAP：轻型目录访问协议，定义了如何访问目录服务中的内容")]),a._v(" "),t("p",[a._v("两者配合，可以完成对服务器目录的操作，比如增删改查。")])]),a._v(" "),t("p",[a._v("CVE 漏洞记录")]),a._v(" "),t("p",[a._v("有一些用 Minecraft Java 版本开服的小伙伴就被坑了，因为该项目用到了 log4j 来记录用户聊天日志，因此玩家只需要在聊天窗口输入一些这个那个的命令代码，就被注入执行了，从而轻松作弊。")]),a._v(" "),t("h3",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),t("p",[a._v("我整理了三种解决方案，可以根据实际情况选用。")]),a._v(" "),t("h4",{attrs:{id:"_1-升级版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-升级版本"}},[a._v("#")]),a._v(" 1. 升级版本")]),a._v(" "),t("p",[a._v("目前 Apache 官方已经针对该漏洞发布了补丁版本 "),t("code",[a._v("2.15.0-rc2")]),a._v("，默认禁用了 lookup 行为，在确保升级该版本不会对项目的其他依赖产生冲突的情况下，建议升级。")]),a._v(" "),t("p",[a._v("该方案虽然比较简单粗暴，但这个版本是否稳定？是否没有漏洞呢？这很难说。")]),a._v(" "),t("h4",{attrs:{id:"_2-修改参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改参数"}},[a._v("#")]),a._v(" 2. 修改参数")]),a._v(" "),t("p",[a._v("如果你不想升级 log4j 的版本，担心会和项目其他依赖产生冲突的话，可以采用 Apache 官方推荐的临时解决方案 —— 修改参数。")]),a._v(" "),t("p",[a._v("如果你的 log4j 版本 >= 2.10，可以通过设置系统属性 "),t("code",[a._v("log4j2.formatMsgNoLookups")]),a._v(" 或者环境变量 "),t("code",[a._v("LOG4J_FORMAT_MSG_NO_LOOKUPS")]),a._v(" 为 "),t("code",[a._v("true")]),a._v(" 来禁用 lookup 行为；如果版本在 2.0-beta9 到 2.10.0 之间， 可以直接移除从 classpath 中移除  "),t("code",[a._v("JndiLookup")]),a._v(" 类，用以下命令即可：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这个方案相对不容易引发项目的冲突，如果项目很紧急且重要，先用它处理吧。")]),a._v(" "),t("h4",{attrs:{id:"_3-换框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-换框架"}},[a._v("#")]),a._v(" 3. 换框架")]),a._v(" "),t("p",[a._v("最暴力、也是解决最彻底的方案就是干脆不用 log4j 了，用别的！")]),a._v(" "),t("p",[a._v("比如我自己很早之前就弃用 log4j，改用 logback 了，不说别的，logback 的测试更加充分，质量相对有保障一些。毕竟日志框架作为一个项目必备的核心依赖，稳定性是至关重要的。")]),a._v(" "),t("p",[a._v("当然，这种方式对项目的影响可能会很大，如果一定要整体替换框架，建议进行充分的测试（覆盖率越高越好），可不是改几行代码那么简单。")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("最后鱼皮再多说几句吧，这次的事件又印证了软件开发中的 "),t("strong",[a._v("不信任原则")]),a._v(" ，没有绝对可信、完全不出问题的服务，所以我们开发者要做的就是时刻多留一个心眼儿，尽量针对一些服务的不稳定去设计一些保护或降级措施。比如假设分布式缓存会挂掉，可以再设计本地缓存继续提供临时服务，保障系统的可用性。")]),a._v(" "),t("p",[a._v("不过还好这次漏洞对我没什么影响，一是项目本身没用 log4j 而是 logback；二是在公司做的业务是内部系统，大多数基础设施和中间件都是内网的，有网络层面的隔离保护；三是我自己的项目用到的服务也都是云服务商提供的，哪怕出了问题，基本也不用自己解决（不过还是存在一定的安全风险就是了）。")]),a._v(" "),t("p",[a._v("唉，不知道有多少小伙伴周末要加班了，"),t("strong",[a._v("你躺枪了么")]),a._v("？")]),a._v(" "),t("p",[a._v("我是鱼皮，原创不易，如果觉得文章还不错，希望 "),t("strong",[a._v("点赞 + 在看")]),a._v(" 支持下，给俺点创作动力。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311091229294.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);