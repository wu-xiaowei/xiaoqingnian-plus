(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{759:function(a,t,s){"use strict";s.r(t);var e=s(4),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"一键生成几千套代码模板的前端神器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一键生成几千套代码模板的前端神器"}},[a._v("#")]),a._v(" 一键生成几千套代码模板的前端神器")]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员鱼皮"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("大家好，我是鱼皮。")]),a._v(" "),t("p",[a._v("要问我在工作中最讨厌的事情是什么，那必然是 "),t("strong",[a._v("重复工作")]),a._v(" 。尤其是每次搞新项目的时候，每次都得写不少重复的基础代码和配置文件，要不就是从老项目中复制粘贴过来一大堆再自行修改，麻烦的一批。")]),a._v(" "),t("p",[a._v("我们可以使用 "),t("strong",[a._v("脚手架")]),a._v(" 来解决这个问题，所谓脚手架，就是为了方便你工作、保障工作有序且顺利进行的工具。放到编程做项目中，就是能够自动生成一些基础代码和默认配置，从而减少重复劳动，用最简单和快速的方式帮助你完成项目的开发。")]),a._v(" "),t("p",[a._v("今天给大家推荐一款知名的前端脚手架工具 "),t("code",[a._v("Yeoman")]),a._v(" ，上手简单、功能强大，只需一键，就能从 9000 多套项目模板中生成你想要的代码！")]),a._v(" "),t("blockquote",[t("p",[a._v("不止前端，还有各种后端、全栈的项目模板。")])]),a._v(" "),t("p",[a._v("在给大家演示它的用法前，必须得先吐槽一下，这个项目虽说放到了代码开源平台 GitHub 上，还收获了近万个 star。但仔细一看代码仓库，就会发现它开源了个锤子 🔨 ！根本就没有工具本身的代码，合着把 GitHub 当做流量入口了是吧？？？")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090921471.png",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("yeoman 仓库")])]),a._v(" "),t("p",[a._v("下面给大家简单演示下 Yeoman 的使用。")]),a._v(" "),t("h3",{attrs:{id:"使用-yeoman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-yeoman"}},[a._v("#")]),a._v(" 使用 Yeoman")]),a._v(" "),t("p",[a._v("进入官方文档（yeoman.io），首先打开终端，用一行 npm 命令来全局安装 yeoman：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -g yo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后输入 "),t("code",[a._v("yo")]),a._v(" 即可使用工具，看到如下菜单表示安装成功：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090921433.png",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("使用 yo")])]),a._v(" "),t("p",[a._v("然后你可以在菜单中安装代码生成器，输入要安装的生成器包名即可：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090921392.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("你也可以直接在官网搜索生成器，然后自行安装。")]),a._v(" "),t("p",[a._v("比如我们要开发一个 Chrome 插件，可以直接搜索 Chrome 插件项目生成器：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090921461.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("得知插件名为 chrome-extension，然后使用 npm 命令安装（记得名称前加上 generator）：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -g generator-chrome-extension\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后新建一个空的项目目录，使用 yo 命令执行生成器即可：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 创建项目目录\nmkdir test-chrome\n# 进入目录\ncd test-chrome\n# 启动生成器\nyo chrome-extension\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("可以根据情况来选择生成的代码，效果如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090921444.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以看到生成的代码，默认会自动帮我们安装依赖，直接运行项目就行了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090921440.png",loading:"lazy"}})]),a._v(" "),t("blockquote",[t("p",[a._v("生成的代码")])]),a._v(" "),t("p",[a._v("除了生成初始项目代码外，有些生成器也自带生成部分文件的功能，比如 angular 生成器支持一行命令生成新控制器：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yo angular:controller NewController\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("是不是贼简单，基本上各种编程语言和框架的项目生成器都有！以后做新项目时，除了使用框架官方自带的模板外，yeoman 也是一个不错的选择~")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("以上就是本期分享，有帮助的话还请给鱼皮一个 "),t("strong",[a._v("点赞 + 在看")]),a._v(" ，谢谢大家！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311090921815.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);