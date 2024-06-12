(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{614:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"如何超前完成工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何超前完成工作"}},[a._v("#")]),a._v(" 如何超前完成工作？")]),a._v(" "),s("blockquote",[s("p",[a._v("本文作者："),s("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("本站地址："),s("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),s("OutboundLink")],1)])]),a._v(" "),s("blockquote",[s("p",[a._v("原计划 7 天的工作，1 小时完成！是我开挂了么？")])]),a._v(" "),s("p",[a._v("大家好，我是鱼皮，今天分享自己工作中的小欢喜，也希望给大家带来一些编程上的思考。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061008148.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"孽起"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#孽起"}},[a._v("#")]),a._v(" 孽起")]),a._v(" "),s("p",[a._v("事情是这样的，最近在开发一个 "),s("strong",[a._v("仅限内部使用")]),a._v(" 的数据分析系统，我做后端，另外一个哥们做前端。")]),a._v(" "),s("p",[a._v("我们要实现的功能是：用户可以在界面上任意输入 SQL 数据查询语句，并将它保存下来，生成一个数据看板。以后用户可以随时打开这个看板来浏览和分析 SQL 查询出的最新数据，而无需反复输入 SQL 语句。")]),a._v(" "),s("p",[s("strong",[a._v("举个例子！")])]),a._v(" "),s("p",[a._v("假如我们有一个很大的数据仓库，存了海量的数据，有男有女：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061008134.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("产品同学可能只想对部分数据进行分析，于是写了下列 SQL 语句来查询所有男性：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("select * from table\n where 性别 = '男';\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("将该 SQL 语句保存，得要一个 “男性数据看板”，之后，就可以在该看板页面查看和分析所有男性数据啦。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061008145.png",loading:"lazy"}})]),a._v(" "),s("blockquote",[s("p",[a._v("数据看板")])]),a._v(" "),s("p",[a._v("要实现这个需求，一种最简单的方式就是，直接将用户在界面上输入的 SQL 字符串发给后端保存，需要看数据时，后端再用这个字符串从数据库中查询数据即可。")]),a._v(" "),s("p",[a._v("写 SQL 配置流程：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061008117.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("打开看板浏览数据流程：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061008123.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("既然是允许用户任意输入的，那么问题就来了。")]),a._v(" "),s("p",[a._v("假如小粗心不小心打错了 SQL 语句：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 错误 ❌\nsleetc * from table\n# 正确 ✅\nselect * from table;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("又或者小迷糊记错了 SQL 的语法：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 错误 ❌\nselect table from a;\n# 正确 ✅\nselect a from table;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("甚至是小捣蛋不按规矩出牌，输入一些乱七八糟的字符：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 错误 ❌\nselect q^q from table;\n# 正确 ✅\nselect q from table;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("如果把这些错误的 SQL 语句发给后端，后端直接用它来查数据库，必然会导致查询错误，查了个寂寞。")]),a._v(" "),s("p",[a._v("对于实时查询来说，这没啥问题，查询失败了大不了再修改语句查询一次呗。")]),a._v(" "),s("p",[a._v("但我要做的需求是允许用户将查询语句作为看板配置永久保存下来，便于后续自动查询数据。而且写 SQL 配置的用户可能和看数据的用户不是同一个人，如果小 A 在配置时就没有发现 SQL 语句是错误的，那到时候来查看数据看板的小 B 就会一脸懵逼，咋特么看不到数据呢？是数据还没准备好，还是查询出来的数据就是 0 行呢，还是说我没有浏览权限呢？")]),a._v(" "),s("p",[a._v("他根本不会想到，已经配置成功的 SQL 语句，竟然是错误的！")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061008175.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("因此，需要在配置时就对用户输入的 SQL 进行校验，看看它是否合法。")]),a._v(" "),s("p",[a._v("做个比喻，前端是一名底层员工（无知的小开发），后端是小组长，数据库是大老板。小开发做了个需求之后，应该先交给小组长检查，小组长说没问题之后，再给大老板验收。")]),a._v(" "),s("p",[s("strong",[a._v("那如何校验 SQL 语句呢？")])]),a._v(" "),s("p",[a._v("因为用户的输入是完全不确定的，他们写的 SQL 语句可能又臭又长。所以我刚想到这个需求，就觉得脑阔疼，感觉贼麻烦，不保守地给自己计划 7 天完成。")]),a._v(" "),s("p",[a._v("大家可以先想想如果让你实现 SQL 语句校验，你会怎么做？")]),a._v(" "),s("p",[a._v("下面是我的思考过程。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061008891.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"绞尽脑汁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绞尽脑汁"}},[a._v("#")]),a._v(" 绞尽脑汁")]),a._v(" "),s("p",[a._v("首先，我们要明确：是在前端，还是在后端校验？")]),a._v(" "),s("p",[a._v("其实，无论在前端还是后端，校验都至关重要，可以有效防止很多错误的输入。但由于最终是后端程序来直接操作数据库，可以说是数据库的最后一道防线，因此建议 "),s("strong",[a._v("将校验逻辑写在后端")]),a._v("。数据库很嫩，他自己把握不住，需要后端程序来帮他把握把握。")]),a._v(" "),s("p",[a._v("那如何在后端去校验 SQL 呢？")]),a._v(" "),s("h4",{attrs:{id:"找现成的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找现成的"}},[a._v("#")]),a._v(" 找现成的")]),a._v(" "),s("p",[a._v("首先，遇事不决问百度，不行再去搜仓库。现在网上的开源项目很多，那不妨搜搜看，有没有现成的 SQL 校验类库。最理想的情况是，有一个工具类函数，我传给他 SQL 字符串作为参数，他直接返回给我 true 或 false。")]),a._v(" "),s("p",[a._v("然而，我发现自己在想 peach，各种开源项目都搜遍了，没有找到能开箱即用的 PostgreSQL 校验库。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009060.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("看来，只能自己动手，丰衣足食了。")]),a._v(" "),s("h4",{attrs:{id:"模拟查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模拟查询"}},[a._v("#")]),a._v(" 模拟查询")]),a._v(" "),s("p",[a._v("要自己实现校验，我第一时间想到的方法是模拟一次查询。用户刚刚写好 SQL 语句后，即便他现在并不需要浏览数据查询结果，我也可以在他保存配置时，用他写的 SQL 去查询一次数据库。假如查询没报错，就说明 SQL 语句合法，允许保存。")]),a._v(" "),s("p",[a._v("这种方式最直接，也最方便，基本没有任何的开发成本，贼香！就好比一名小开发写完烂代码后，交给小组长，但小组长不讲武德，自己看不懂代码（也可能是不想看），索性就把代码直接丢给大老板，大老板说没问题了，小开发再上线。小组长狂喜！")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009009.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("但是，有个致命的问题：用户在配置 SQL 语句时，数据表可能还没准备好，无论语句是否正确，都无法查出数据。")]),a._v(" "),s("p",[a._v("所以，在将 SQL 语句直接发向数据库前，要先确认数据表是否存在。若存在，可以通过模拟查询的方式校验；若不存在，只能在后端通过其他方式校验。")]),a._v(" "),s("p",[a._v("就好比小组长想把烂代码直接丢给大老板时，大老板不在，这时，只能靠自己来检查了。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009003.jpeg",loading:"lazy"}})]),a._v(" "),s("h4",{attrs:{id:"正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[a._v("#")]),a._v(" 正则表达式")]),a._v(" "),s("p",[a._v("要在程序中校验字符串，我最先想到的是 "),s("strong",[a._v("正则表达式")]),a._v("，即用特定语法来匹配同一类具有相似规则的字符串，常见的有校验手机号、校验邮箱、校验身份证等。")]),a._v(" "),s("p",[a._v("在使用正则表达式进行校验前，我们要先对字符串进行分析，看它们是否具有相似的结构、哪些部分相似。比如 QQ 邮箱，结构很规整，基本都是 "),s("code",[a._v("xxx@qq.com")]),a._v("，因此，可以用正则表达式 "),s("code",[a._v("/^\\w+@qq.com$/")]),a._v(" 来校验。")]),a._v(" "),s("p",[a._v("回过头来看我们的需求，要校验的是 SQL 语句，似乎也比较规整，无非就是查询哪个表、选哪些行、选哪些列、怎么排序等等，大概的结构是这样：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT select_list \n[ INTO new_table ] \nFROM table_source \n[ WHERE search_condition ] \n[ GROUP BY group_by_expression ] \n[ HAVING search_condition ] \n[ ORDER BY order_expression [ ASC | DESC ] ]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("根据这个结构，很容易编写出粗略的正则表达式。但是，数据业务中的 SQL 语句可比这复杂得多，包含各种四则运算、IF ... ELSE 条件判断、CASE ... WHEN ... 分支，字符串、日期类型处理函数，还有各种聚合函数等，比如下面这个 SQL：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("select a as b, \n sum(case when (false) then d / a else 2 end) as c\n from table\n where a = 1\n group by b, c;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("如果以上这些零碎的语法都用正则表达式来匹配，可就太麻烦了！想想脑阔又疼了。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009001.png",loading:"lazy"}})]),a._v(" "),s("h4",{attrs:{id:"解析表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析表达式"}},[a._v("#")]),a._v(" 解析表达式")]),a._v(" "),s("p",[a._v("既然编写一套正则表达式比较麻烦，那我能想到的就只有把 SQL 打的稀吧碎了。可以用类似编译原理语法分析的方式，搞一个 SQL 解析器，将完整的 SQL 语句转换为一颗抽象语法树（AST），每个节点都是一个小表达式，从而能够更精细地校验 SQL 语句的合法性。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009116.png",loading:"lazy"}})]),a._v(" "),s("blockquote",[s("p",[a._v("SQL 表达式抽象语法树")])]),a._v(" "),s("p",[a._v("如果自己从零开始实现这样一套 SQL 解析器，实在是太麻烦了，而且不具备一定的专业知识也写不出来。因此，我先到网上去搜索一番，看看有没有现成的解析器引擎。")]),a._v(" "),s("p",[a._v("这次的搜索结果还算满意，找到了一些知名解析引擎，但是看了一圈，读了半天，发现很难直接去使用他们的源码。那委曲求全的方式就是照着他们的源码自己写一个解析器了。")]),a._v(" "),s("p",[a._v("想到这里，头顶不仅感受到了一丝寒凉，感觉给自己估时 7 天都少了。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009959.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"移花接木"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移花接木"}},[a._v("#")]),a._v(" 移花接木")]),a._v(" "),s("p",[a._v("第二天，我又思考了一下，网上有那么多现成的类库，难道就没有一个能满足我的需求？即使没有完全现成的，能不能找个相对好用的呢？")]),a._v(" "),s("p",[a._v("毕竟自己来写这复杂的校验逻辑实在太麻烦了，所以我必须再挣扎一下！")]),a._v(" "),s("p",[a._v("于是，我掏出了御用小黄鸭，开始对着它念叨：SQL 校验、SQL 校验、SQL 校验。。。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009162.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("我：什么时候会用到 SQL 校验呢？")]),a._v(" "),s("p",[a._v("小黄鸭：需要查数据库的时候。")]),a._v(" "),s("p",[a._v("我：什么东西会去查数据库呢？")]),a._v(" "),s("p",[a._v("小黄鸭：框架、数据库连接池、或者代理。")]),a._v(" "),s("p",[a._v("我：那这些玩意在查数据库的时候，会帮我们做校验么？")]),a._v(" "),s("p",[a._v("小黄鸭：校验校验，你就知道校验，你需要的功能一定是校验么？")]),a._v(" "),s("p",[s("strong",[a._v("等等，我好像恍然大悟了！")])]),a._v(" "),s("p",[a._v("既然没办法直接搜到现成的 SQL 校验类库，那不妨来个 "),s("strong",[a._v("移花接木")]),a._v("，想一想其他的类库中是否包含 SQL 解析功能，如果解析失败，不就表示 SQL 非法，校验不通过么！")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009097.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("我开始回想自己以前用过的和访问数据库有关的技术，突然想到，阿里的 Druid 数据库连接池类库好像有一个 SQL 语句格式化的功能，能把杂乱的 SQL 重新排版。既然能对 SQL 格式化，是不是意味着，这个类库有能力对 SQL 语句进行解析呢？")]),a._v(" "),s("p",[a._v("仔细一查 Druid 的文档，发现还真有一个类叫 "),s("code",[a._v("SQLUtils")]),a._v("，这个类有一个方法叫 "),s("code",[a._v("parseStatements")]),a._v("，可以对多种不同的 SQL 方言进行解析，比如 MySQL、PostgreSQL 等。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 解析，接受 sql 语句和数据库方言为参数\nSQLUtils.parseStatements(sql, POSTGRESQL);\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("解析失败时，会抛出异常，表示 SQL 语句非法，正好能够满足我的需求！")]),a._v(" "),s("p",[a._v("最终，我写出的代码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('try {\n  String sql = "select * from a";\n  SQLUtils.parseStatements(sql, POSTGRESQL);\n  return true;\n} catch (ParserException e) {\n  LOGGER.error("解析失败", e);\n return false;\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("几分钟就写完了代码，然后又花了一些时间输入各种 SQL 语句来测试，虽然只能实现基本的语法校验，但综合衡量效果和成本上，我觉得已经不错了，省下的大量时间可以继续完善和优化项目的其他代码。")]),a._v(" "),s("p",[a._v("关键是，心不累了，头发又支棱起来了！")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009121.png",loading:"lazy"}})]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("通过这件事，带给我三点思考：")]),a._v(" "),s("ol",[s("li",[a._v("在我们找项目代码、找类库的时候，如果没办法找到直接满足需求的，那么可以把思维从整体转向局部，想想在其他的项目中是否包含了你要找的功能。就像查词典一样，你要查单词 "),s("code",[a._v("apple")]),a._v("，但是翻目录只有首字母 "),s("code",[a._v("a")]),a._v("，这个时候，就不能只盯着 "),s("code",[a._v("a")]),a._v(" 看，而是要看到词典里面的内容，其实 "),s("code",[a._v("apple")]),a._v(" 就藏在 "),s("code",[a._v("a")]),a._v(" 之中。")]),a._v(" "),s("li",[a._v("前人栽树，后人乘凉，现在网上现成的项目代码太多了，如果不是为了学习，很多东西没必要自己再去实现一遍。")]),a._v(" "),s("li",[a._v("写代码时要注重积累，多学习和了解技术，并归纳总结到你的武器库中，否则前人栽的树你找不到，就可惜了。")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009158.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("当然，有条件的话，前端也是可以加校验的，但目前没啥必要，这里我们先用 "),s("code",[a._v("CodeMirror")]),a._v(" 做一个 SQL 代码高亮来替代。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009263.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("如果真的让你实现前端 SQL 校验，你会怎么做呢？")]),a._v(" "),s("p",[a._v("我是鱼皮，原创不易，如果觉得文章还不错的话，希望朋友们 "),s("strong",[a._v("点赞 + 在看")]),a._v(" 支持下，给俺点创作动力。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061009026.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);