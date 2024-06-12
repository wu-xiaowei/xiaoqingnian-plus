(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{569:function(t,a,s){"use strict";s.r(a);var _=s(4),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vs-code-远程开发实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-远程开发实战"}},[t._v("#")]),t._v(" VS Code 远程开发实战")]),t._v(" "),a("blockquote",[a("p",[t._v("本文作者："),a("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本站地址："),a("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("从 0 开始体验一波远程开发")])]),t._v(" "),a("p",[t._v("大家好，我是鱼皮。")]),t._v(" "),a("p",[t._v("记得刚开始学编程的时候，我理所应当地以为只能编辑自己电脑上的代码文件。如果想要修改服务器上的代码，只能先把代码从服务器上拷贝下来，然后在本地修改好再上传到服务器上。")]),t._v(" "),a("p",[t._v("但是这样效率实在太低了！")]),t._v(" "),a("p",[t._v("后来我学聪明了，利用 git 在本地和远程之间同步。先在本地修改好代码，"),a("code",[t._v("git push")]),t._v(" 推送到 Github 代码托管平台上，再到服务器上 "),a("code",[t._v("git pull")]),t._v(" 拉取。虽然方便了不少，不过遇到频繁修改的情况还是很抓狂。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005864.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("那有没有更高效的方式，能够保持本地和远程代码的实时同步呢？")]),t._v(" "),a("p",[t._v("请出今天的主角：远程开发技术，下面我带大家体验一波。")]),t._v(" "),a("h2",{attrs:{id:"远程开发实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程开发实战"}},[t._v("#")]),t._v(" 远程开发实战")]),t._v(" "),a("p",[t._v("本文大纲：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005210.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("鱼皮远程开发实战导图")])]),t._v(" "),a("h3",{attrs:{id:"何为远程开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何为远程开发"}},[t._v("#")]),t._v(" 何为远程开发？")]),t._v(" "),a("p",[t._v("远程是相对于本地的。")]),t._v(" "),a("p",[t._v("传统开发中，我们都是本地写好代码再放到服务器上运行。")]),t._v(" "),a("p",[t._v("而远程开发的特点是：")]),t._v(" "),a("ol",[a("li",[t._v("代码不放在自己电脑上，而是在远程连接的服务器上")]),t._v(" "),a("li",[t._v("可以在本地直接实时查看和修改远程服务器上的代码")])]),t._v(" "),a("p",[t._v("也就是说，我们可以蹲在家里，用自己的一台电脑去灵活编辑远在天边的服务器上的代码。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005716.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("注意！不要把远程开发理解为远程办公哈哈。")])]),t._v(" "),a("p",[t._v("听起来还是挺爽的，有很多种技术可以实现远程开发，比如最古老的远程控制方式。这里推荐大家直接使用开发工具自带的远程开发插件，比如 JetBrains 全家桶和 VS Code。")]),t._v(" "),a("p",[t._v("由于 VS Code 相对轻量易用，这里带大家实战一波 VS Code 远程开发。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005763.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"实战体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战体验"}},[t._v("#")]),t._v(" 实战体验")]),t._v(" "),a("h4",{attrs:{id:"_1-安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装插件"}},[t._v("#")]),t._v(" 1. 安装插件")]),t._v(" "),a("p",[t._v('首先打开 VS Code，点击左侧扩展按钮，搜索 "remote"，能够看到一些远程开发插件，支持 SSH 远程连接、连接 Docker 容器、连接Windows 上的 Linux 子系统等。')]),t._v(" "),a("p",[t._v("这里我们选择下图第二个 "),a("code",[t._v("Remote - SSH")]),t._v(" ，点击安装即可：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005521.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("安装插件")])]),t._v(" "),a("h4",{attrs:{id:"_2-远程连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-远程连接"}},[t._v("#")]),t._v(" 2. 远程连接")]),t._v(" "),a("p",[t._v("安装好之后，按 "),a("code",[t._v("ctrl")]),t._v(" + "),a("code",[t._v("shift")]),t._v(" + "),a("code",[t._v("p")]),t._v(' 打开命令面板，输入 "remote"，找到 '),a("code",[t._v("Remote - SSH: Add New SSH Host")]),t._v(" ，添加一个 SSH 远程连接。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005081.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("根据提示输入你要连接的远程服务器的用户名、主机地址（如果没有服务器，在本地启动虚拟机也可以），记得带上 "),a("code",[t._v("-A")]),t._v(" 参数（开启代理转发功能）：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005014.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("输入连接信息后，选择将该信息保存到一个配置文件中：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005074.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("然后连接信息就添加成功了：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005929.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("点击 connect 按钮，就连接成功了，在左侧面板中可看到 “已连接到远程”：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005089.png",loading:"lazy"}})]),t._v(" "),a("h4",{attrs:{id:"_3-实时浏览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实时浏览"}},[t._v("#")]),t._v(" 3. 实时浏览")]),t._v(" "),a("p",[t._v("连接到远程后，我们就可以像操作自己本地电脑一样，浏览远程服务器上的文件。")]),t._v(" "),a("p",[t._v("比如说我这里进入自己的项目目录：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005674.png",loading:"lazy"}})]),t._v(" "),a("blockquote",[a("p",[t._v("打开文件夹")])]),t._v(" "),a("p",[t._v("在左侧可以看到目录下的文件：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005515.png",loading:"lazy"}})]),t._v(" "),a("h4",{attrs:{id:"_4-远程编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-远程编辑"}},[t._v("#")]),t._v(" 4. 远程编辑")]),t._v(" "),a("p",[t._v("让我们在编辑器中新建一个文件 "),a("code",[t._v("test.java")]),t._v(" ，")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005670.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("可以使用 XShell 等其他远程 SSH 连接软件访问同一台服务器，进入同一个目录，用 "),a("code",[t._v("ls")]),t._v(" 查看目录下的文件，能看到在 VS Code 中新建的 java 文件：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005258.png",loading:"lazy"}})]),t._v(" "),a("h4",{attrs:{id:"_5-实时协作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-实时协作"}},[t._v("#")]),t._v(" 5. 实时协作")]),t._v(" "),a("p",[t._v("我们可以用 VS Code 和其他 SSH 连接软件（如 XShell）来模拟两个用户正在同时协作编写同一个代码文件。")]),t._v(" "),a("p",[t._v("先在 VS Code 中写下一行优质代码：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005228.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("再在 XShell 中编辑该文件，可以立即看到 VS Code 写下的那行代码，在它下面再写一行：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005082.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("保存之后，在 VS Code 中就能看到全部代码了：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005518.png",loading:"lazy"}})]),t._v(" "),a("h4",{attrs:{id:"_6-端口转发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-端口转发"}},[t._v("#")]),t._v(" 6. 端口转发")]),t._v(" "),a("p",[t._v("既然我们编辑的代码是在远程的，那代码也是运行在远程的，假如说要查看远程项目的运行效果，怎么办呢？")]),t._v(" "),a("p",[t._v("VS Code 提供了端口转发功能，可以配置远程服务器和本地端口的映射，以支持本地直接访问到远程服务器的应用。")]),t._v(" "),a("p",[t._v("按 "),a("code",[t._v("ctrl")]),t._v(" + "),a("code",[t._v("shift")]),t._v(" + "),a("code",[t._v("p")]),t._v(' 打开命令面板，搜索 "forward"，选择转发端口：')]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005687.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("输入要转发的端口号（应用占用的端口），就添加成功了，非常方便！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005516.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("然后就能在本地访问运行的项目啦！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005419.png",loading:"lazy"}})]),t._v(" "),a("h4",{attrs:{id:"_7-远程调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-远程调试"}},[t._v("#")]),t._v(" 7. 远程调试")]),t._v(" "),a("p",[t._v("除了远程编辑代码外，我们可以利用 VS Code 本身的代码提示能力和调试能力。由于远程调试和本地调试几乎没有任何区别，此处不再演示。")]),t._v(" "),a("h3",{attrs:{id:"感受"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感受"}},[t._v("#")]),t._v(" 感受")]),t._v(" "),a("p",[t._v("虽然之前早就听说了远程开发，但一直觉得这玩意配置肯定会很麻烦，而且没啥用。但实际体验下来，不仅安装方便，而且操作友好、基本感受不到延迟，就像在用自己的电脑一样，真心非常爽！")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005061.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("远程开发有很多好处：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("由于代码运行在远程服务器，能够大大节省自己电脑的资源，不会出现多开几个项目电脑就卡如狗的情况。")])]),t._v(" "),a("li",[a("p",[t._v("可以多人协同编辑，提高协作效率。")])]),t._v(" "),a("li",[a("p",[t._v("不用在本地搭建环境，就能快速上手开发。尤其是一条龙开发、啥都让你干的时候，更爽，比如之前我去紧急支持一个项目的时候，同事有一台开发机，上面有现成的可运行环境和项目代码。下次再遇到这种情况，我就直接连他的服务器远程开发就行了。")])]),t._v(" "),a("li",[a("p",[t._v("如果对 Linux 服务器操作不太熟悉，也可以把远程开发当成一个傻瓜式服务器管理软件。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("以上就是本期分享，感兴趣的同学可以看下我在 B 站最新发布的 VS Code 远程开发演示视频~（三连 + 评论 “三连了”）抽红包 🧧")]),t._v(" "),a("p",[t._v("⬇️ 点击下方阅读原文一键跳转到视频")]),t._v(" "),a("p",[t._v("我是鱼皮，"),a("strong",[t._v("点赞 + 在看")]),t._v(" 还是要求一下的，祝大家都能心想事成、发大财、行大运。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311081005960.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);