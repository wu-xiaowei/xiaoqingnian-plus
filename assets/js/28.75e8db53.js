(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{325:function(t,a,s){"use strict";s.r(a);var v=s(4),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bug-解决-前端无法正确请求后端接口并得到响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-解决-前端无法正确请求后端接口并得到响应"}},[t._v("#")]),t._v(" Bug 解决  前端无法正确请求后端接口并得到响应？")]),t._v(" "),a("blockquote",[a("p",[t._v("程序员鱼皮的编程宝典：https://codefather.cn/")])]),t._v(" "),a("p",[t._v("前端请求后端接口发现得到的响应不对，或者通过 f12 明明看到了后端的响应，但是前端页面无法正常的展示出来")]),t._v(" "),a("p",[t._v("这种情况该怎么排查呢？这篇我们就来好好的理一理！")]),t._v(" "),a("h3",{attrs:{id:"配置问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置问题"}},[t._v("#")]),t._v(" 配置问题")]),t._v(" "),a("p",[t._v("1）跨域问题：这样会导致请求不正确，详情看这篇文章"),a("a",{attrs:{href:"https://yuyuanweb.yuque.com/org-wiki-yuyuanweb-zvq1bg/uhisqo/arphxdsktr0gbkvo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bug 解决 | 无法正常登录或获取不到用户信息"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("2）SSL/HTTPS配置问题：如果项目使用了HTTPS，在配置不正确的情况下可能导致请求出现问题。确保SSL证书配置正确。")]),t._v(" "),a("p",[t._v("3）权限问题：确保前端项目有权访问后端接口，比如确认当前的账号是否有权限访问当前的接口？")]),t._v(" "),a("h3",{attrs:{id:"代码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码问题"}},[t._v("#")]),t._v(" 代码问题")]),t._v(" "),a("p",[t._v("1）接口地址错误，确保前端项目中请求的后端接口地址是正确的，包括主机名、端口和路径等信息。")]),t._v(" "),a("p",[t._v("2）前端代码问题：比如前端没有等待后端数据返回就结束页面的渲染")]),t._v(" "),a("p",[t._v("举个例子，在用户列表页，按照标签搜索后，后端数据正常返回，但页面卡住，一直处于加载状态？")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161053642.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("在图示位置加 "),a("code",[t._v(':loading="loading"')]),t._v("，并在下面定义一个变量"),a("code",[t._v("const loading = ref(true);")]),t._v("。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161053645.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("在红线处加"),a("code",[t._v("loading.value = false;")]),t._v("。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202404161053655.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("3）前后端交互的数据格式不匹配，前端发送请求时的数据格式与后端接收数据的格式不一致，导致解析失败。确保前后端约定的数据格式一致。")]),t._v(" "),a("p",[t._v("4）请求方法不正确：确保前端项目中使用的请求方法（GET、POST、PUT、DELETE等）与后端接口要求的方法相匹配。")]),t._v(" "),a("h3",{attrs:{id:"网络问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络问题"}},[t._v("#")]),t._v(" 网络问题")]),t._v(" "),a("p",[t._v("可能是由于网络问题导致前端无法连接到后端服务器。切换网络或者查看是否有代理等等。")])])}),[],!1,null,null,null);a.default=r.exports}}]);