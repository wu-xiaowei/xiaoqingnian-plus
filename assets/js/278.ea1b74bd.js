(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{585:function(a,t,s){"use strict";s.r(t);var i=s(4),p=Object(i.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("Linux 虚拟机 + 远程开发保姆级教程，轻松搭建高效开发环境！")])]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("大家好，我是鱼皮。最近我正在带大家开发 OJ 系统，需要用 "),t("strong",[a._v("Docker 容器技术")]),a._v(" 来实现隔离的代码沙箱。")]),a._v(" "),t("p",[a._v("随之而来的是一个难题：很多同学的电脑都是 Windows 的，直接在 Windows 上安装 Docker 容器比较麻烦，需要依赖 WSL（Windows Subsystem for Linux），很容易出现各种报错。")]),a._v(" "),t("p",[a._v("比如 WSL 内核版本太低：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934938.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("缺少 WSL：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934934.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("所以，我们不妨直接搞一台 Linux 系统的服务器来安装 Docker 吧，不仅不会影响现有的系统，以后开发和部署项目也都会更方便。")]),a._v(" "),t("p",[a._v("那么如何拥有一台 Linux 服务器呢？")]),a._v(" "),t("p",[a._v("比较常见的有 2 种方式：")]),a._v(" "),t("ul",[t("li",[a._v("购买第三方云服务商的云服务器")]),a._v(" "),t("li",[a._v("使用虚拟机软件，在自己电脑上额外运行 Linux 系统")])]),a._v(" "),t("p",[a._v("第一种方式要花钱，就不多说了。本篇文章我会带大家实践第 2 种方式，只需几分钟的时间，手把手带大家在 Windows 上安装 Linux 虚拟机，并且实践 2 种远程开发方法，让大家像使用 Windows 一样轻松地在 Linux 上开发程序。")]),a._v(" "),t("p",[a._v("⭐️ 本文对应视频教程：https://www.bilibili.com/video/BV1h94y1k7Jf/（讲解会更细节，建议配合本文使用）")]),a._v(" "),t("h2",{attrs:{id:"一、虚拟机安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、虚拟机安装"}},[a._v("#")]),a._v(" 一、虚拟机安装")]),a._v(" "),t("h3",{attrs:{id:"_1、下载安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载安装"}},[a._v("#")]),a._v(" 1、下载安装")]),a._v(" "),t("p",[a._v("首先我们要下载虚拟机软件，这里比较推荐 VMware Workstation Player，个人不商业使用是 "),t("strong",[a._v("免费")]),a._v(" 的。")]),a._v(" "),t("p",[a._v("直接到 VMware 官网下载：")]),a._v(" "),t("p",[a._v("指路：https://www.vmware.com/cn/products/workstation-player.html")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934362.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这里有条件的朋友也可以使用 VMware Workstation Pro，功能更全，但是要付费。")]),a._v(" "),t("p",[a._v("在官网点击免费下载后，即可进入安装流程。")]),a._v(" "),t("p",[a._v("这里要注意勾选 “自动安装 Windows Hypervisor Platform” 和 “将 VMware Workstation 控制台工具添加到系统 PATH” 两个选项：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934651.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934344.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("选择免费、非商用版本：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934937.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后就安装成功了，比起在 Windows 上折腾 WSL，安装虚拟机可方便太多了~")]),a._v(" "),t("h3",{attrs:{id:"_2、安装系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装系统"}},[a._v("#")]),a._v(" 2、安装系统")]),a._v(" "),t("p",[a._v("虚拟机软件安装完成后，我们打开软件，接下来要先新建虚拟机来安装一个 Linux 操作系统：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934477.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("点击创建新虚拟机，然后它让我们提供一个 Linux 操作系统的镜像：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934323.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("问题是，Linux 操作系统有很多的发行版，我们安装哪个版本呢？")]),a._v(" "),t("p",[a._v("我学生时代的时候，特别喜欢用 CentOS，但可惜的是，CentOS 已经停止维护了。。。")]),a._v(" "),t("p",[a._v("所以这里我们选择 Linux Ubuntu 18.04 LTS 版本来给大家演示，有图形界面，会更能照顾到新手同学。")]),a._v(" "),t("p",[a._v("Ubuntu 镜像下载：https://releases.ubuntu.com/18.04/")]),a._v(" "),t("p",[a._v("拉到底部，找到 "),t("code",[a._v(".iso")]),a._v(" 后缀的文件下载即可：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934327.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("当然，萝卜青菜，各有所爱，会玩 Linux 的同学可以自由选择版本~")]),a._v(" "),t("p",[a._v("指定完操作系统后，我们继续新建虚拟机，可以根据实际的电脑情况来自定义虚拟机的硬件。如果你的电脑配置还不错，内存和 CPU 可以分配多一点：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934321.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("点击完成，然后稍等片刻，系统就安装完成并启动啦！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934336.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_3、修改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、修改配置"}},[a._v("#")]),a._v(" 3、修改配置")]),a._v(" "),t("p",[a._v("像购买一台新电脑一样，我们有了新的操作系统后，可以自行修改一些配置，比如修改语言为中文。")]),a._v(" "),t("h4",{attrs:{id:"修改语言为中文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改语言为中文"}},[a._v("#")]),a._v(" 修改语言为中文")]),a._v(" "),t("p",[a._v("按 "),t("code",[a._v("windows")]),a._v(' 键，弹出功能搜索按钮，输入 "language"，打开 "语言支持"：')]),a._v(" "),t("p",[a._v("我这台虚拟机是已经改完语言的，所以截图中已经是中文了")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934166.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后点击添加语言，选择中文简体，并且把汉语拖到语言列表的最上面，最后点击应用到整个系统：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934916.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("稍等片刻，中文语言包、输入法等内容就安装好了，点击右上角重启虚拟机：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934776.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("重启后，同样是按 "),t("code",[a._v("windows")]),a._v(' 键，弹出功能搜索按钮，输入 "language"，打开 "区域和语言"：')]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934075.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在区域和语言设置中，新增输入源，添加已安装的中文输入法：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934066.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"修改分辨率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改分辨率"}},[a._v("#")]),a._v(" 修改分辨率")]),a._v(" "),t("p",[a._v("用同样的方法，我们可以调整系统的分辨率。")]),a._v(" "),t("p",[a._v("先打开显示设置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934181.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后可以调整分辨率和字体大小：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934860.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"修改时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改时间"}},[a._v("#")]),a._v(" 修改时间")]),a._v(" "),t("p",[a._v("默认情况下系统的时区可能是有问题的，我们可以打开“日期和时间”设置，选择时区为“中国上海”：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934640.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_4、安装软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装软件"}},[a._v("#")]),a._v(" 4、安装软件")]),a._v(" "),t("p",[a._v("基本配置修改完成后，我们就可以给 Linux 系统安装软件并使用了。")]),a._v(" "),t("p",[a._v("和其他操作系统一样，Linux Ubuntu 也有自己的应用商店，能够可视化一键安装软件，比如防火墙之类的，适合新手操作：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934990.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("当然，大家用 Linux 更多地还是要学习它的终端命令行操作，所以这里我们以 Docker 为例，使用命令行来快速安装。")]),a._v(" "),t("p",[a._v("按 "),t("code",[a._v("Ctrl + Alt + T")]),a._v(" 快速打开终端，输入以下命令来一键安装 Docker：")]),a._v(" "),t("p",[a._v("apt 命令是软件包管理工具，能够让我们方便地安装软件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt install docker.io\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如下图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934642.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("安装完成后，输入 "),t("code",[a._v("docker -v")]),a._v(" ，查看版本号，如下图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934646.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后输入 "),t("code",[a._v("docker run")]),a._v(" 命令，测试 Docker 能否正常运行：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo docker run hello-world\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("能看到如下信息，表示 Docker 安装成功：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934721.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("怎么样，比在 Windows 安装方便多了吧？")]),a._v(" "),t("h2",{attrs:{id:"二、java-远程开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、java-远程开发"}},[a._v("#")]),a._v(" 二、Java 远程开发")]),a._v(" "),t("p",[a._v("有了 Linux 系统后，我们怎么在 Linux 上开发呢？")]),a._v(" "),t("p",[a._v("是直接在 Linux 上安装常用的开发工具，然后在虚拟机里编写代码么？")]),a._v(" "),t("p",[a._v("No、No、No，这样不仅要改变你原本的编码习惯，还可能会出现卡顿。如果你的项目有的在 Windows、有的在 Linux，需要同时开发的话，来回切换系统可太麻烦了。")]),a._v(" "),t("p",[a._v("所以这里我会教大家使用远程开发，直接在自己的 Windows 电脑上操作 Linux 服务器，和之间的开发方式完全一致！")]),a._v(" "),t("p",[a._v("两个字：“丝滑”！")]),a._v(" "),t("p",[a._v("下面我会以 Java 开发为例，带大家掌握 2 种远程开发的方式："),t("strong",[a._v("远程部署")]),a._v(" 和 "),t("strong",[a._v("纯远程开发")]),a._v(" ，大家可以根据实际情况选择合适的方式。")]),a._v(" "),t("h3",{attrs:{id:"_1、前置准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、前置准备"}},[a._v("#")]),a._v(" 1、前置准备")]),a._v(" "),t("p",[a._v("在学习远程开发前，我们要先做一些准备工作。")]),a._v(" "),t("h4",{attrs:{id:"_1-网络连通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-网络连通"}},[a._v("#")]),a._v(" 1）网络连通")]),a._v(" "),t("p",[a._v("要确保我们本地的 Windows 电脑能够连接到 Linux 虚拟机。")]),a._v(" "),t("p",[a._v("首先在设置中搜索网络，点击查看网络设置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934732.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("获取到虚拟机的 IPv4 地址，这个地址一定要记好了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934012.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在自己的 Windows 电脑上 ping 这个 IP 地址，测试能否 ping 通。")]),a._v(" "),t("p",[a._v("如下图，表示网络正常连通：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934731.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_2-开启-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-开启-ssh"}},[a._v("#")]),a._v(" 2）开启 SSH")]),a._v(" "),t("p",[a._v("光能 ping 通虚拟机还不够，很多远程开发工具都是通过 SSH 协议连接远程服务器的，所以我们要在 Linux 虚拟机上开启 SSH。")]),a._v(" "),t("p",[a._v("在 Linux 虚拟机上打开终端，输入下列命令安装 SSH 服务器：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt-get install openssh-server\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("安装后，输入下列命令检查 SSH 是否已开启：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ps -e |grep ssh\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如下图，则表示 SSH 开启成功：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934784.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("如果未启动，执行 sudo service ssh start 手动启动服务试试")]),a._v(" "),t("h4",{attrs:{id:"_3-安装-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-java"}},[a._v("#")]),a._v(" 3）安装 Java")]),a._v(" "),t("p",[a._v("因为我们要演示 Java 远程开发，所以 Java JDK 的安装是必不可少的。")]),a._v(" "),t("p",[a._v("Linux 下安装 JDK 还是很方便的，首先打开终端，输入命令来更新软件源信息：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt update\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后执行下列命令来安装 Java 8（经典版本）：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt install openjdk-8-jdk\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("安装完成后，输入命令检查 Java 版本：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java -version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("看到如下输出，表示 Java 安装成功：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934981.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_4-安装-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装-maven"}},[a._v("#")]),a._v(" 4）安装 Maven")]),a._v(" "),t("p",[a._v("除了安装 Java 外，我们还要安装 Java 的项目依赖管理工具 Maven，便于接下来我们测试 Spring Boot 项目的远程开发。")]),a._v(" "),t("p",[a._v("打开终端，输入如下命令安装 Maven：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt install maven\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("安装完成后，输入命令来查看 Maven 的版本号：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mvn -v\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("看到如下输出，表示 Maven 安装成功：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934566.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("环境准备完毕，接下来开始远程开发之旅~")]),a._v(" "),t("h3",{attrs:{id:"_2、远程部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、远程部署"}},[a._v("#")]),a._v(" 2、远程部署")]),a._v(" "),t("p",[a._v("第一种远程开发方式是 "),t("strong",[a._v("远程部署")]),a._v("，就像我们真实做项目时，先在本地用代码编辑器完成开发，再把代码放到 Linux 服务器上去部署一样。远程部署的思路是在本地编写代码，然后把本地的代码文件定期同步到 Linux 服务器，再用本地电脑操作远程服务器完成部署和运行。")]),a._v(" "),t("p",[a._v("如下图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934122.jpeg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这种方式更多地是为了提高将代码放到服务器部署的效率，不算是真正意义上的远程开发，但可以达到接近的效果。")]),a._v(" "),t("p",[a._v("远程开发主要分为 6 个阶段：编码、文件同步、运行、编译构建、部署、调试。接下来让我们以一个最简单干净的 Spring Boot 项目为例，实战上述几个操作。")]),a._v(" "),t("h4",{attrs:{id:"_0-编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-编码"}},[a._v("#")]),a._v(" 0）编码")]),a._v(" "),t("p",[a._v("假设我们本地已经有了一个示例项目，仅提供一个 checkHealth 接口，用于测试服务能否正常访问，端口为 8080。")]),a._v(" "),t("p",[a._v("核心代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('@RestController("/")\npublic class MainController {\n\n    @GetMapping("/health")\n    public String checkHealth() {\n        return "ok";\n    }\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h4",{attrs:{id:"_1-文件同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件同步"}},[a._v("#")]),a._v(" 1）文件同步")]),a._v(" "),t("p",[a._v("打开 JetBrains IDEA 开发工具，点击 Tools => Development => Configuration：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934776.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("进入到如下操作界面，需要先来配置 SSH，和服务器建立连接：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934571.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("进入 SSH 配置，输入自己实际的服务器 IP！不一定和下图的 IP 地址相同！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934329.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("点击测试连接，能看到连接成功的弹窗；如果报错，可能是 IP 地址、用户名或密码输错了。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934647.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("回到部署界面，点击 Mappings 来配置路径映射，就是把本地电脑的文件同步到远程服务器的指定路径：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934675.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("保存，在 IDEA 右侧就能看到我们虚拟机的所有文件列表啦：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934340.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后点击 Tools => Development => Automatic Upload，开启自动同步：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934226.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("现在，尝试在自己电脑的代码文件夹中新建一个文件，该文件就会自动同步到 Linux 虚拟机~")]),a._v(" "),t("p",[a._v("但目前如果你删除了自己电脑的文件，Linux 虚拟机的对应文件不会删除，所以我们还要进入 Options 配置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934991.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("勾选上文件删除的同步：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934000.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("至此，你在本地编写的代码都会自动同步到服务器上了。")]),a._v(" "),t("h4",{attrs:{id:"_2-运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行项目"}},[a._v("#")]),a._v(" 2）运行项目")]),a._v(" "),t("p",[a._v("可以直接在 IDEA 的终端中快速创建一个能够远程访问远程服务器的终端：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934681.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后使用 "),t("code",[a._v("cd")]),a._v(" 命令进入到代码目录：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934935.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("输入 Maven 命令来运行项目：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mvn clean\nmvn spring-boot:run\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("能够看到项目成功启动：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934979.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后访问远程服务器的接口地址（比如 http://192.168.170.132:8080/health），能够看到如下输出：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934135.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("表示我们已经能够正常访问到 Linux 服务器上运行的项目了。")]),a._v(" "),t("p",[a._v("还可以在 Deployment 界面中配置 web server url，相当于一个快捷访问方式：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934740.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_3-构建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建项目"}},[a._v("#")]),a._v(" 3）构建项目")]),a._v(" "),t("p",[a._v("和上面运行项目的方式相同，在自己的电脑打开终端访问远程虚拟机，然后执行 Maven 打包命令：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mvn package\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("看到如下输出，表示打包成功：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934062.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934178.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后在服务器上就能看到生成的可执行 jar 包：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934970.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_4-部署项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署项目"}},[a._v("#")]),a._v(" 4）部署项目")]),a._v(" "),t("p",[a._v("现在项目可执行 jar 包已经放到了服务器上，我们只需启动即可。")]),a._v(" "),t("p",[a._v("输入下列命令，以生产环境运行 jar 包：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java -jar /home/yupi/code/target/yuoj-code-sandbox-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("看到如下信息，启动成功：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934272.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_5-远程调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-远程调试"}},[a._v("#")]),a._v(" 5）远程调试")]),a._v(" "),t("p",[a._v("现在程序已经在 Linux 虚拟机上启动了，那么我们如何调试远程的程序呢？比如打断点、查看变量信息等。")]),a._v(" "),t("p",[a._v("首先强调一点，远程调试不要乱用，可以在开发时调试，但千万别给线上打断点！影响正常用户的访问。")]),a._v(" "),t("p",[a._v("开启远程调试的方法很简单，首先在 IDEA 右上角找到编辑配置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934281.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后新建一个远程 JVM Debug 配置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934283.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("更改配置，修改自己虚拟机的 IP、希望占用的远程调试端口、JDK 版本等，IDEA 会自动生成一段远程调试参数：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934484.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在启动项目时，给启动命令追加上述界面生成的 command line 参数，"),t("strong",[a._v("注意要加到 jar 包路径之前")]),a._v(" 。")]),a._v(" "),t("p",[a._v("示例命令如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -jar /home/yupi/code/target/yuoj-code-sandbox-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("启动项目后，在右上角开启 Debug：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934737.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后给代码打个断点：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934066.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("再访问对应的端口，可以看到 Debug 已经生效：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934537.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("现在，你就可以把 Linux 虚拟机当做自己的电脑进行远程开发啦~")]),a._v(" "),t("h3",{attrs:{id:"_3、纯远程开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、纯远程开发"}},[a._v("#")]),a._v(" 3、纯远程开发")]),a._v(" "),t("p",[a._v("除了上面的方式外，还有一种更简单的远程开发方法。")]),a._v(" "),t("p",[a._v("使用 IDEA 自带的远程开发功能，可以直接将本地的编译、构建、调试、运行等工作全部都放在远程服务器上执行！而本地仅运行客户端软件连接服务器，像之前一样编写代码、进行其他开发操作即可。")]),a._v(" "),t("p",[a._v("这种方式就很像云游戏，自己的电脑不存放代码、不负责程序的运行，只需要运行一个操作界面即可，而 “脏活累活”都交给服务器。适合本地电脑性能差（服务器性能强）、开发环境多人协作开发、需要统一开发环境的场景。")]),a._v(" "),t("p",[a._v("如下图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934222.jpeg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这种方式也更简单，进入 IDEA 主页，找到 SSH 选项，点击新建项目：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934016.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("配置 SSH 连接：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934019.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("指定远程开发的代码路径：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935072.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("首次使用时，需要等待下载 JetBrains Client 客户端：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080934886.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("服务器上也会自动安装对应的远程开发后端：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935070.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后进入远程开发：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935925.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("打开任务管理器，可以看到 JetBrains 的 client 非常 “轻量”：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935786.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("进入客户端界面，软件会自动加载 Maven 项目，但是需要手动指定服务器上已安装的 JDK：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935669.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后直接以 Debug 模式启动项目：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935314.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("还可以配置请求转发，像访问本地服务一样访问远程端口：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935307.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935115.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("接下来访问本机地址 http://127.0.0.1:8080/health，就能够访问到项目啦，而且直接支持 Debug！无须做任何多余的配置！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311080935071.png",loading:"lazy"}})]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("至此，使用 Linux 虚拟机 + 远程开发的教程就结束了，个人更喜欢第二种远程开发方式，非常简单、而且丝滑，接下来大家就可以愉快地学习 Linux、Docker 等技术啦~")]),a._v(" "),t("p",[a._v("原创不易，大家如果学会了的话，希望能点赞收藏支持下 🌹")])])}),[],!1,null,null,null);t.default=p.exports}}]);