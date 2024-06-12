(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{329:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bug-解决-无法访问线上服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bug-解决-无法访问线上服务"}},[a._v("#")]),a._v(" Bug 解决  无法访问线上服务")]),a._v(" "),s("p",[a._v("程序员鱼皮的编程宝典：https://codefather.cn/")]),a._v(" "),s("p",[a._v("分享一个非常经典的问题：明明服务器没挂，为啥访问不了云服务器的端口？")]),a._v(" "),s("p",[a._v("这篇文章，我列举了常见的、无法访问服务器的情况和解决方案，便于大家排查问题。")]),a._v(" "),s("h4",{attrs:{id:"_1、应用程序未启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、应用程序未启动"}},[a._v("#")]),a._v(" 1、应用程序未启动")]),a._v(" "),s("p",[a._v("这是最低级的错误，明明自己的项目都没有启动成功，就开始排查是不是服务器的问题了。")]),a._v(" "),s("p",[a._v("如果你使用的是宝塔 Linux 面板，而不是自己通过执行 jar 包命令来启动项目，那么这个坑更容易出现。因为有时候，项目刚启动的时候显示 “运行中”，但可能由于系统异常，过几秒钟就变成 “未启动了”。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546625.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("想确保项目已启动，可以使用 Linux 的 "),s("code",[a._v("ps")]),a._v("  命令查看应用进程，比如：")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("ps aux | grep <你的项目名>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果项目已启动，将看到类似下图的输出：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546605.png",loading:"lazy"}})]),a._v(" "),s("h4",{attrs:{id:"_2、端口监听错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、端口监听错误"}},[a._v("#")]),a._v(" 2、端口监听错误")]),a._v(" "),s("p",[a._v("除了正确启动项目外，要保证项目监听了正确的端口，可以通过 "),s("code",[a._v("netstat")]),a._v(" 命令查看服务器的端口占用情况。")]),a._v(" "),s("p",[a._v("比如：")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("netstat -ntlp | grep <你的端口号>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果端口正确监听，将看到类似下图的输出：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546596.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("需要注意输出信息中的 "),s("code",[a._v(":::8104")]),a._v("  和  "),s("code",[a._v(":::*")]),a._v("  ，表示程序监听在所有 IPv4 地址上的 8104 端口，并且允许所有来源的 IP 地址连接。")]),a._v(" "),s("p",[a._v("如果是其他值，可能会出现无法远程访问端口的情况，这时就需要调整应用程序的启动端口配置。")]),a._v(" "),s("h4",{attrs:{id:"_3、云服务商安全组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、云服务商安全组"}},[a._v("#")]),a._v(" 3、云服务商安全组")]),a._v(" "),s("p",[a._v("第一次使用云服务器很容易踩这个坑！你在哪家服务商购买了服务器，就要进入到对应的服务器后台安全组设置界面，确保允许指定来源的流量通过端口。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546690.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("上图中，来源设置为 0.0.0.0/0，表示允许所有用户访问，建议谨慎设置。如果是学习用，可以把来源改为自己家的 IP 地址，先只允许自己访问。")]),a._v(" "),s("h4",{attrs:{id:"_4、服务器防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、服务器防火墙"}},[a._v("#")]),a._v(" 4、服务器防火墙")]),a._v(" "),s("p",[a._v("为了保护系统安全，Linux 系统内置了防火墙，除了在云服务商侧开放端口外，最好也检查一下防火墙的配置。")]),a._v(" "),s("p",[a._v("不同 Linux 发行版操作系统对应的防火墙命令可能不同，以下是 Ubuntu 的查看防火墙命令，两种方式都可以。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看防火墙状态")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl status firewalld\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("执行效果如图：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546795.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546736.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("如果应用访问不了，可以关闭防火墙试试（不过一般不建议这么做）：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl stop firewalld\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl disable firewalld\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"_5、应用层限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、应用层限制"}},[a._v("#")]),a._v(" 5、应用层限制")]),a._v(" "),s("p",[a._v("除了操作系统的防火墙之外，我们的应用程序也可能 “暗藏玄 🐓”，禁止一些 IP 的访问。")]),a._v(" "),s("p",[a._v("比如宝塔 Linux 的安全 / 防火墙面板：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546154.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("还可以通过 Nginx 或者业务代码对访问的 IP 进行限制，这些是常用的安全策略，别因为这些把正常用户的访问也限制了哦。")]),a._v(" "),s("h4",{attrs:{id:"_6、服务器网络问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、服务器网络问题"}},[a._v("#")]),a._v(" 6、服务器网络问题")]),a._v(" "),s("p",[a._v("这是一种比较极端的情况，比如服务器突然断网了、或者自己瞎折腾把服务器网络设置搞错了等等。")]),a._v(" "),s("p",[a._v("可以通过 "),s("code",[a._v("ping")]),a._v("  或者 "),s("code",[a._v("traceroute")]),a._v("  命令，检测服务器的网络连通性：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("你的服务器地址"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("traceroute")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("你的服务器地址"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"_7、用户自身问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、用户自身问题"}},[a._v("#")]),a._v(" 7、用户自身问题")]),a._v(" "),s("p",[a._v("最后这种情况最有意思，也是最意外、最难被排查出的问题。")]),a._v(" "),s("p",[a._v("那就是用户自己有问题！")]),a._v(" "),s("p",[a._v("我们之前就遇到过一个情况，用户说访问不了我们的网站了，结果后来反馈说是自己家的网络突然断了。。我们还纳闷呢！")]),a._v(" "),s("p",[a._v("当时我们就是这个表情：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546231.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("还有一种情况，就是服务器禁用了海外的 IP，导致部分用户能访问、部分用户无法访问。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546303.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("刚刚问我服务器无法访问这个问题的同学，最后就发现是因为海外 ip 的原因，切个网络就正常了~")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161546316.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);