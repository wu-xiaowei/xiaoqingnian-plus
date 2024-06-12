(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{609:function(a,s,t){"use strict";t.r(s);var v=t(4),r=Object(v.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"大厂的-sdk-写法-偷学到了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大厂的-sdk-写法-偷学到了"}},[a._v("#")]),a._v(" 大厂的 SDK 写法，偷学到了！")]),a._v(" "),s("blockquote",[s("p",[a._v("本文作者："),s("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("本站地址："),s("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),s("OutboundLink")],1)])]),a._v(" "),s("blockquote",[s("p",[a._v("自己动手写 SDK 的经验技巧分享")])]),a._v(" "),s("p",[a._v("大家好，我是鱼皮。")]),a._v(" "),s("p",[a._v("最近因为工作需要，自己动手写了一些项目的通用 SDK。在编写的过程中，我阅读和参考了不少公司中其他大佬写的 SDK，也总结了一些开发 SDK 的经验和技巧，给大家分享下~")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913646.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("在此之前，必须先给大家解释一下啥是 SDK。")]),a._v(" "),s("h2",{attrs:{id:"啥是-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#啥是-sdk"}},[a._v("#")]),a._v(" 啥是 SDK ？")]),a._v(" "),s("p",[a._v("SDK（Software Development Kit）即 "),s("strong",[a._v("软件开发工具包")]),a._v(" ，就是帮助我们开发出软件的工具集合，除了代码之外，一般还要搭配文档、示例等。")]),a._v(" "),s("p",[a._v("一般 SDK 都是需要 "),s("strong",[a._v("引入")]),a._v(" 到项目中使用的。比如学 Java 的朋友最早接触的 JDK，就是用来开发 Java 软件的工具包，使用时需要编写 类似 "),s("code",[a._v("import java.util.*")]),a._v(" 的语法来引入。此外，大部分的 SDK，都是需要通过人工或项目管理工具，将其文件下载到指定路径才能引入。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913437.png",loading:"lazy"}})]),a._v(" "),s("blockquote",[s("p",[a._v("引入 SDK")])]),a._v(" "),s("h4",{attrs:{id:"使用-sdk-有什么好处呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-sdk-有什么好处呢"}},[a._v("#")]),a._v(" 使用 SDK 有什么好处呢？")]),a._v(" "),s("p",[a._v("举个例子，假设公司有很多系统都需要实现文件上传功能。之前看过我文章的朋友应该知道，一个优秀的文件上传功能并不好做，要考虑很多点，比如分块、断点续传、秒传、文件存储、文件管理等。")]),a._v(" "),s("blockquote",[s("p",[a._v("文件上传设计：https://mp.weixin.qq.com/s/3QXe4MSObJTP43M2gXWSlA")])]),a._v(" "),s("p",[a._v("显然，我们不需要给每个系统都去开发文件上传，而是只需要有一个团队舍身而出，编写一套 "),s("strong",[a._v("通用的")]),a._v(" 文件上传 SDK，然后让需要实现同样功能的系统引用就行了，这样就 "),s("strong",[a._v("大大减少了工作量、提高了开发效率")]),a._v(" 。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913889.png",loading:"lazy"}}),a._v("通用 SDK")]),a._v(" "),s("p",[a._v("有点前人造车，后人享乐的意思~")]),a._v(" "),s("p",[a._v("编写 SDK 又称 "),s("strong",[a._v("造轮子")]),a._v(" ，好的轮子不仅能够帮助团队省时省力，还能够减少一些项目在相同功能上的差异。就不要说同一个功能，小王写的要运行 1 秒，小李写的要运行 1 小时！")]),a._v(" "),s("p",[a._v("而假设每个系统都去开发同样的功能，那就是 "),s("strong",[a._v("重复造轮子")]),a._v(" ，在大多数情况下，不是明智之举。")]),a._v(" "),s("p",[a._v("理解了啥是 SDK 后，来看看如何写出优秀的 SDK 吧~")]),a._v(" "),s("h2",{attrs:{id:"手写-sdk-经验总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手写-sdk-经验总结"}},[a._v("#")]),a._v(" 手写 SDK 经验总结")]),a._v(" "),s("p",[a._v("好的 SDK 应该具有简单易用、通俗易懂、便于扩展、高效稳定等特点。")]),a._v(" "),s("h3",{attrs:{id:"易用性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#易用性"}},[a._v("#")]),a._v(" 易用性")]),a._v(" "),s("p",[a._v("如今，现成的轮子实在太多了！如何让你的轮子脱颖而出呢？那就要先提升 SDK 的易用性。")]),a._v(" "),s("p",[a._v("我自己在技术选型时，就会倾向于优先选择简单易用的 SDK，最好是几行代码就能轻松使用，而不是必须要我读完老长一份文档，再写个几十行代码才能生效。")]),a._v(" "),s("p",[a._v("就和产品说明书一样，太复杂直接把人劝退。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913648.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("我们可以通过以下几点提高易用性：")]),a._v(" "),s("h4",{attrs:{id:"统一调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统一调用"}},[a._v("#")]),a._v(" 统一调用")]),a._v(" "),s("p",[a._v("将复杂的功能进行封装，对外提供统一的调用入口，尽量屏蔽一些实现细节，减少用户调用的流程和对参数的理解成本。")]),a._v(" "),s("p",[a._v("举个例子，下面是两种日期处理函数。用户不需要关心他们是如何实现的，只需要知道怎么用、传递哪些参数、得到哪些返回值就行了。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 第 1 种：需要 new 对象\nDateUtils dateUtils = new DateUtils();\ndateUtils.setDate('2021-08-31');\nDate date = dateUtils.parse();\n\n// 第 2 种：直接调用\nDate date = DateUtils.parse('2021-08-13');\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("那大家觉得哪种更易用呢？")]),a._v(" "),s("h4",{attrs:{id:"集中配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集中配置"}},[a._v("#")]),a._v(" 集中配置")]),a._v(" "),s("p",[a._v("将复杂的参数配置化，不需要让用户到处写参数，而是通过一个配置文件统一管理。")]),a._v(" "),s("p",[a._v("Java 主流开发框架 SpringBoot 就是典型的例子，假如用户想改变内嵌服务器启动的端口、亦或是改变数据库的连接地址，不需要写代码，而是改一下配置文件就行了：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 服务器配置\nserver:\n  port: 8081\n# 数据库配置\ndb:\n ip: 10.0.0.1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("此外，这样也便于维护项目和实现多环境。")]),a._v(" "),s("h4",{attrs:{id:"良好命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#良好命名"}},[a._v("#")]),a._v(" 良好命名")]),a._v(" "),s("p",[a._v("给 SDK 的函数取名称时，尽量让它符合用户的习惯。")]),a._v(" "),s("p",[a._v('比如具有解析功能的函数，可以叫 "parseXXX"；判断是否为空的函数，可以叫 "xx.isEmpty" 等。最好能做到让用户不看文档，只通过函数名称和参数，就知道你这个函数是做什么的。')]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913655.png",loading:"lazy"}}),a._v("好坏命名")]),a._v(" "),s("p",[a._v("因此，想要写出好的 SDK，首先要多用、多参考别人的 SDK，养成习惯后你就会发现，大家起名儿都差不多。")]),a._v(" "),s("p",[a._v("但也要注意一点，如果可以，尽量不要让你 SDK 中的类名（函数名）和别人的完全一致，否则可能给用户带来困扰：这么多同名的函数，我该用哪个呢？哪个是你开发的 SDK 呢？")]),a._v(" "),s("h3",{attrs:{id:"可理解性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可理解性"}},[a._v("#")]),a._v(" 可理解性")]),a._v(" "),s("p",[a._v("有时，用户可能不满足于简单地使用你的 SDK，而是希望阅读你的 SDK 源码来进一步了解，用的才更放心。")]),a._v(" "),s("p",[a._v("因此，除了易用外，还要让你的 SDK 便于理解，不能金玉其外败絮其中。")]),a._v(" "),s("p",[a._v("这个就和编码习惯有很大的关系了，无论是写 SDK 也好，还是做项目也罢，都要做到以下几点：")]),a._v(" "),s("h4",{attrs:{id:"结构清晰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构清晰"}},[a._v("#")]),a._v(" 结构清晰")]),a._v(" "),s("p",[a._v("把代码按照功能或类别进行整理，放到指定的目录下。常见的做法有分包、分层等，让人一眼就知道每个目录下的文件的作用。")]),a._v(" "),s("p",[a._v("比如下面这个经典的 Java 项目结构，service 目录是编写业务逻辑的、constant 是存放常量的、utils 是存放工具类的等等，都很清晰：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913892.png",loading:"lazy"}}),a._v("Java MVC 项目结构")]),a._v(" "),s("h4",{attrs:{id:"统一风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统一风格"}},[a._v("#")]),a._v(" 统一风格")]),a._v(" "),s("p",[a._v("统一风格的目标很简单：让项目看起来是同一个人写出来的。")]),a._v(" "),s("p",[a._v('比如代码缩进都用 4 个空格、命名都用驼峰式等。尤其是功能相似的代码，一定要保持命名和用法的统一！比如解析文本的函数，不要一会叫 "parseXXX"、一会儿又叫 "jiexiXXX"，给用户都整乐了~')]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913830.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("但实际上，团队开发中，很难做到这点。因此才需要有一套通用的代码规范，大家都去遵守规范，才能让项目更好理解、更便于维护。")]),a._v(" "),s("h4",{attrs:{id:"编写注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写注释"}},[a._v("#")]),a._v(" 编写注释")]),a._v(" "),s("p",[a._v("最好给 SDK 中的每个类和函数的 "),s("strong",[a._v("开头")]),a._v(" 都加上注释，这样用户在使用 SDK 时，甚至都不需要看文档，直接看代码注释就能知道它是干嘛的、怎么用。")]),a._v(" "),s("p",[a._v("随便打开 Java SDK 或者网上知名 SDK 中的一个函数，一般都能看到这些注释，包括对函数功能的描述、参数含义、返回值含义等：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913261.png",loading:"lazy"}}),a._v("添加注释")]),a._v(" "),s("h4",{attrs:{id:"说明文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明文档"}},[a._v("#")]),a._v(" 说明文档")]),a._v(" "),s("p",[a._v("除了注释外，还要编写一个说明文档（用户手册），包括如何引入 SDK 、有哪些功能、应该怎么使用等等，甚至还可以补充一些关键的实现细节、以及常见的问题列表。")]),a._v(" "),s("p",[a._v("这点也会极大地影响用户的选择。就我个人而言，没有文档的 SDK 我一般是不会选用的，万一出了事我找谁呢？")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913175.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"可扩展性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可扩展性"}},[a._v("#")]),a._v(" 可扩展性")]),a._v(" "),s("p",[a._v("编写 SDK 的一大难点是：不仅要考虑到大部分通用的使用场景，还要满足小部分用户定制化的需求。")]),a._v(" "),s("p",[a._v("因此，SDK 的可扩展性是很重要的，但怎么提升呢？")]),a._v(" "),s("h4",{attrs:{id:"轻量依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轻量依赖"}},[a._v("#")]),a._v(" 轻量依赖")]),a._v(" "),s("p",[a._v("一方面，我们可以尽量减少 SDK 本身对其他类库的依赖。")]),a._v(" "),s("p",[a._v("举个例子，假如你要做一个很轻小的工具类，可能只有几十 KB，那就没有必要再引入一个几百 KB 的依赖库了，得不偿失！别人也不乐意用啊！")]),a._v(" "),s("p",[a._v("轻量依赖不仅可以减少 SDK 的体积，更关键的是可以减少依赖冲突的可能性。我自己也曾经遇到过很多次这样的尴尬局面：引入一个工具类后，整个项目就跑不起来了！")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913116.png",loading:"lazy"}})]),a._v(" "),s("h4",{attrs:{id:"自定义实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义实现"}},[a._v("#")]),a._v(" 自定义实现")]),a._v(" "),s("p",[a._v("为了提高 SDK 的通用性和灵活性，在设计 SDK 时，除了提供默认实现外，建议提供一个通用接口或抽象类，让用户来继承，编写自己的实现方式。")]),a._v(" "),s("p",[a._v("举个例子，假设我们要编写一个日期解析类，默认的解析规则是按照短横分割字符串：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 按照 '-' 切分\ndate = DateUtils.parse('2021-01-18')\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("如果只能做到这点，那这个 SDK 就很死板。因为用户可能想按照冒号或其他规则来解析。")]),a._v(" "),s("p",[a._v("怎么实现呢？")]),a._v(" "),s("p",[a._v("我们可以允许用户自己传入分割字符：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 按照 '-' 切分\nparseRule = ':'\ndate = DateUtils.parse('2021-01-18', parseRule)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("还可以让用户自己来控制解析的方式：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 自定义解析器\ninterface MyParser extends Parser {\n  // 需要用户自己实现\n  void doParse();\n}\n// 指定解析器\ndate = DateUtils.parse('2021-01-18', MyParser.class);\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("这两种方式在 SDK 的设计中屡见不鲜，此外还可以让用户自行编写或指定配置文件，也能提高灵活性。")]),a._v(" "),s("h3",{attrs:{id:"高效稳定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高效稳定"}},[a._v("#")]),a._v(" 高效稳定")]),a._v(" "),s("p",[a._v("其实，开发 SDK，尤其是在大厂开发 SDK，是个很 “坑” 的工作，我相信做过的朋友会感同身受。")]),a._v(" "),s("p",[a._v("因为随着使用你 SDK 的用户越来越多，可能会发现各种各样莫名其妙的问题；而且 SDK 作为相对底层的依赖，对使用方的影响也是无法估量的。所以，不想经常加班改 Bug 的话，就要保证你 SDK 的稳定性。")]),a._v(" "),s("p",[a._v("我们需要注意以下几点：")]),a._v(" "),s("h4",{attrs:{id:"_1-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-测试"}},[a._v("#")]),a._v(" 1. 测试")]),a._v(" "),s("p",[a._v("为了保证每个功能都是正常的，我们可以编写 "),s("strong",[a._v("单元测试")]),a._v("（UT）来最大程度上地覆盖 SDK 的功能和代码。")]),a._v(" "),s("p",[a._v("尤其是每次改动代码后、发布新版本之前，都要再完整地执行一遍测试，不要盲目自信。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913236.png",loading:"lazy"}}),a._v("接口测试报告")]),a._v(" "),s("p",[a._v("此外，还可以通过 "),s("strong",[a._v("压力测试")]),a._v(" 来估算 SDK 的执行效率，比如每秒最多同时执行 3 次、每次要执行 500 毫秒等。建议将这些信息补充到说明文档中，给用户一些预期。当然也可以尝试通过压测来优化 SDK 的性能。")]),a._v(" "),s("h4",{attrs:{id:"_2-兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-兼容性"}},[a._v("#")]),a._v(" 2. 兼容性")]),a._v(" "),s("p",[a._v("重要的函数和接口尽量减少改动，尤其是函数名、入参和返回值！")]),a._v(" "),s("p",[a._v("举个例子，SDK 0.1 版本时，函数的定义是这样的：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("boolean isValid(String str)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("结果突然在 0.2 版本时改成了：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("String checkValid(StringBuilder str)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这样就会导致用户升级时一脸懵逼，怎么报了一堆找不到函数呢？")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913195.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("因此，对于比较大的改动，可以新写一个函数，并且给老函数打上类似 "),s("code",[a._v("@Deprecated")]),a._v(" 的注释，表示已过时，引导用户去用新的。")]),a._v(" "),s("p",[a._v("此外，还可以在 "),s("strong",[a._v("版本号")]),a._v(" 上做做文章，小改动时只改变小版本号，比如 0.0.1 到 0.0.2；大改动时才改变大版本号，比如 1.0 到 2.0。这样可以给用户一个预期：这次改动很大，可能会存在不兼容。")]),a._v(" "),s("h4",{attrs:{id:"_3-暴露异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-暴露异常"}},[a._v("#")]),a._v(" 3. 暴露异常")]),a._v(" "),s("p",[a._v("要让用户感知到 SDK 代码中可能抛出的异常，交给他们去进行相应的处理，防止出现一些意料之外的错误。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913037.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("此外，SDK 要合理地打印日志，尤其是异常日志，在出了问题时要让调用者知道是出了什么问题，便于排查。")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("以上就是本期分享，建议学编程的同学多自己动手写 SDK，并且按照本文的总结去优化它，对提升编程能力真的很有帮助！")]),a._v(" "),s("p",[a._v("我是鱼皮，最后求个 "),s("strong",[a._v("点赞 + 在看")]),a._v(" ，这将是我持续创作的最大动力，谢谢 🙏")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311060913314.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);