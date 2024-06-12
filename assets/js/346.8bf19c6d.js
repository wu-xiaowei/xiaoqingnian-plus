(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{649:function(a,t,s){"use strict";s.r(t);var _=s(4),v=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"千万别强制停机-我嘴都气歪了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#千万别强制停机-我嘴都气歪了"}},[a._v("#")]),a._v(" 千万别强制停机！我嘴都气歪了！")]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("有一天，鱼皮正在愉快地写技术文章，结果电脑啪地一下就蓝屏了！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933242.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("哦豁，完蛋，写了几千字，忘了保存！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933070.jpeg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("我盲猜很多同学都有这种体验，可能因为一些突发意外，导致自己的电脑强制停机了，丢失了自己当前的工作。")]),a._v(" "),t("p",[a._v("同样，对于企业，所有的网站、应用、数据、服务都是挂在服务器上的，一旦意外发生，比如被挖断了电线、遭遇了自然灾害，会导致服务器被强制停机，使得机器上 "),t("strong",[a._v("所有进行中的程序被强制中断")]),a._v("，后果不堪设想！")]),a._v(" "),t("p",[a._v("有同学就笑了，不就是程序被强制中断么，我们自己偶尔也会用任务管理器或者 "),t("code",[a._v("kill -9")]),a._v(" 命令杀个进程啊，抓紧重新启动程序不就好了，有啥大不了的？")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933114.jpeg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("的确，我以前也是通过强杀进程来下线和升级服务的，干脆利落爽。但直到后来有一次，因为强杀进程导致了线上事故，造成了经济损失和加班，把我嘴都气歪了！我才意识到自己之前太粗暴、想法太简单了。")]),a._v(" "),t("p",[t("strong",[a._v("其实，一个程序被强制中断，除了无法提供服务外，还有很多严重的后果！")])]),a._v(" "),t("h4",{attrs:{id:"_1-请求丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求丢失"}},[a._v("#")]),a._v(" 1. 请求丢失")]),a._v(" "),t("p",[a._v("对于一个 web 服务器，比如 Java Web 开发中主流的 Tomcat。当接受到请求时，会开启一个线程来处理该请求。而如果请求数较多，线程处理不过来，就会将此请求放入等待队列中，排队等待空闲线程。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933060.png",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("等待队列")])]),a._v(" "),t("p",[a._v("假设 web 服务进程突然中断，会导致所有在内存队列中等待执行的请求丢失，等了半天，等了个空！")]),a._v(" "),t("h4",{attrs:{id:"_2-业务中断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-业务中断"}},[a._v("#")]),a._v(" 2. 业务中断")]),a._v(" "),t("p",[a._v("一旦进程中断，会导致 "),t("strong",[a._v("所有")]),a._v(" 正在执行的业务中断，会导致很多意想不到的后果。")]),a._v(" "),t("p",[a._v("比如有一个检查数据的任务，要检查所有数据库中状态为 0 的数据是否正确，代码流程如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 开始检查，数据状态由 0 置为 1\nstartCheck();\n// 检查\ndoCheck();\n// 结束检查，将正确的数据状态置为 2\nendCheck();\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("假设刚把数据的状态置为 1，表示正在检查中。然后程序就中断了，会导致以后这条数据的状态始终为 1，再也不会被检查。")]),a._v(" "),t("p",[a._v("同理，如果已经检查完，并且数据正确，本来应该将数据状态置为 2，但这时程序中断，也会导致 "),t("strong",[a._v("数据的状态和预期不一致")]),a._v("。")]),a._v(" "),t("p",[a._v("以上只是一个简单的例子，但实际的业务场景中，业务中断可能直接影响收益，尤其是涉及交易的支付转账业务，如果用户已经付款，却因为程序的中断，没有存储付款记录，那这个支付业务不是真要凉凉？")]),a._v(" "),t("h4",{attrs:{id:"_3-事务中断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-事务中断"}},[a._v("#")]),a._v(" 3. 事务中断")]),a._v(" "),t("p",[a._v("数据库事务是指对数据库的一系列 "),t("strong",[a._v("不可分割")]),a._v(" 的操作，具有一致性，每次执行必须使数据库从一个一致性状态变到另一个一致性状态。")]),a._v(" "),t("p",[a._v("比如转账业务中，用户 A 要给用户 B 转账 1 元，用户 A 扣除 1 元，用户 B 就要增加 1 元。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933073.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("但如果用户 A 已扣除 1元后，应用程序或者数据库系统突然挂了，导致事务尚未完成就被迫中断，结果用户 B 的总金额并没有变化。这时数据库就处于不一致状态。同理，即使在程序中设计了回滚，回滚过程也可能会被中断！")]),a._v(" "),t("p",[a._v("除了数据不一致外，事务中断还可能导致锁行、锁表，使得这部分 "),t("strong",[a._v("数据的可用性受到影响")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"_4-文件损坏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件损坏"}},[a._v("#")]),a._v(" 4. 文件损坏")]),a._v(" "),t("p",[a._v("假设程序正在向一个文件进行写操作，还未完成，就被中断了，可能会导致文件的不完整、甚至损坏。")]),a._v(" "),t("p",[a._v("这让我想起小时候，电脑配置不高，有时玩游戏会卡住，然后我就强制杀了进程，结果导致游戏文件损坏，只能重新下载游戏。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933122.jpeg",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("文件损坏")])]),a._v(" "),t("h4",{attrs:{id:"_5-任务丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-任务丢失"}},[a._v("#")]),a._v(" 5. 任务丢失")]),a._v(" "),t("p",[a._v("我们在编写业务代码时，经常会将比较耗时的任务异步化，将任务提交到线程池后立即返回成功。线程池会从任务队列中依次读取并执行任务。")]),a._v(" "),t("p",[a._v("而一旦程序中断，线程池中的任务就会丢失，"),t("strong",[a._v("好像他从来没有被提交过一样")]),a._v("。这种感觉就像你答应别人要做一件事，别人对你很放心，但你最后却放了鸽子跑路了。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933794.jpeg",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_6-数据丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-数据丢失"}},[a._v("#")]),a._v(" 6. 数据丢失")]),a._v(" "),t("p",[a._v("有时，我们会先将数据临时放在内存中，然后定期、定时、或者分批地持久化到数据库或本地磁盘中。")]),a._v(" "),t("p",[a._v("比如 Redis 数据库的 RDB 机制，每隔一段时间，会将内存中的数据进行本地备份，从而降低大量数据并发写入时的负载，提升性能。")]),a._v(" "),t("p",[a._v("但就像上面提到的任务丢失一样，一旦程序中断，可能会导致很多 "),t("strong",[a._v("未持久化的数据丢失")]),a._v("，比如缓存、分批提交数据等。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933971.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_7-消息丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-消息丢失"}},[a._v("#")]),a._v(" 7. 消息丢失")]),a._v(" "),t("p",[a._v("在分布式系统中，各个节点间经常通过消息来进行交互和协作，而程序的中断可能会在不同情况下导致消息丢失。")]),a._v(" "),t("h5",{attrs:{id:"_1-消息未发出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-消息未发出"}},[a._v("#")]),a._v(" 1. 消息未发出")]),a._v(" "),t("p",[a._v("假设某支付业务中，已经扣除了用户的账户余额，并更新了数据库，接下来要向客户端返回应答消息。")]),a._v(" "),t("p",[a._v("但是消息正在发送队列中排队等待发送时，由于进程被强制退出导致消息未发出，从而导致应答消息丢失。客户端久久接收不到消息后，可能会发起重试，导致重复更新。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933147.png",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("消息未发出")])]),a._v(" "),t("h5",{attrs:{id:"_2-消息未确认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息未确认"}},[a._v("#")]),a._v(" 2. 消息未确认")]),a._v(" "),t("p",[a._v("比如说某段业务代码从消息队列中取出了一个消息，进行消费处理，代码流程如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 获取下一个消息\nMessage msg = getNextMsg();\n// 处理消息\nint res = handleMsg(msg);\n// 处理成功？\nif(res == 0) {\n // 确认消息\n  ack();\n} else {\n  // 拒绝确认消息\n  nack();\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("p",[a._v("无论消息处理成功与否，都必须要给消息队列一个回复！如果处理成功，要告诉他这条消息已经被我处理完成啦，请给我下一条消息；即使处理失败，也要告诉消息队列，请给我重发本条消息。")]),a._v(" "),t("p",[a._v("而一旦程序中断，这条消息的处理结果便无人知晓，可能导致消息队列的 "),t("strong",[a._v("阻塞或者无限重发")]),a._v("（根据具体消息队列来决定）。")]),a._v(" "),t("h4",{attrs:{id:"_8-资源占用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-资源占用"}},[a._v("#")]),a._v(" 8. 资源占用")]),a._v(" "),t("p",[a._v("程序的强制中断可能会导致很多资源的占用未被释放。比如：")]),a._v(" "),t("ol",[t("li",[a._v("空间占用：如已分配的内存未回收，临时文件未被删除等。")]),a._v(" "),t("li",[a._v("端口占用：会导致这个端口无法被其他应用程序使用。很多同学在本地调试时，应该也会遇到因为强退导致的 3000、8080 端口未被释放的问题。")]),a._v(" "),t("li",[a._v("连接占用：比如和远程的服务建立了 Http 连接，由于连接未被释放，会浪费一个连接数，就像买了电影票却不去一样。")])]),a._v(" "),t("h4",{attrs:{id:"_9-服务未下线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-服务未下线"}},[a._v("#")]),a._v(" 9. 服务未下线")]),a._v(" "),t("p",[a._v("在微服务场景下，服务通常由集中的注册中心进行统一的服务发现和管理。")]),a._v(" "),t("p",[a._v("比如 Eureka 注册中心，服务生产者向注册中心注册服务，服务消费者从注册中心获取服务地址，然后远程调用：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071933160.jpeg",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("Eureka 注册中心")])]),a._v(" "),t("p",[a._v("而一旦某个服务进程还没有即时通知注册中心它要下线，就中断了，会导致服务消费者仍能获取到该服务的路由，从而调用失败。")]),a._v(" "),t("p",[a._v("此外，服务下线时如果未向上游（该服务调用方）通知，还可能导致上游的持续调用，严重时会产生雪崩效应，整条服务链路中断！")]),a._v(" "),t("p",[a._v("尤其是在分布式场景下，出现进程强制中断对集群的影响（比如数据一致性）非常大。正如 "),t("strong",[a._v("FLP不可能定理")]),a._v(" 的描述：在异步通信场景，即使只有一个进程失败，也没有任何算法能保证非失败进程达到一致性。")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("其实，相比起这些问题，更可怕的是，如果没有完善的数据监控和检测机制，你甚至完全不知道在强制停机后有没有出现问题？出现了哪些问题？哪些数据丢失？哪些数据不一致？哪些任务需要补偿？看不见的危险才最可怕啊！")]),a._v(" "),t("p",[a._v("因此，预防大于治疗。一方面要养成良好习惯，无论是对自己的电脑还是服务器，都千万不要再主动强制停机了；另一方面，也要在程序设计时，做好应对意外停机的防控措施。不要等到失去了，才追悔莫及。")])])}),[],!1,null,null,null);t.default=v.exports}}]);