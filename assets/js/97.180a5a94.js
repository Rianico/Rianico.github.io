(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{450:function(s,a,t){"use strict";t.r(a);var r=t(25),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos-7-安装-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-安装-mariadb"}},[s._v("#")]),s._v(" CentOS 7 安装 MariaDB")]),s._v(" "),t("p",[s._v("CentOS 7 下默认的数据库改为 MariaDB 了，使用方式跟 MySQL 基本一致，兼容 MySQL，如果要强行安装 MySQL 还需要更换 yum 源等，较为麻烦，因此决定使用默认的 MariaDB，这里记录下一些相关步骤。")]),s._v(" "),t("h2",{attrs:{id:"_1-安装-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-mariadb"}},[s._v("#")]),s._v(" 1. 安装 MariaDB")]),s._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[s._v("yum install mariadb mariadb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server    # 安装客户端与服务端\nsystemctl start mariadb   #启动mariadb\nsystemctl enable mariadb  #设置开机自启动\n\nmysql_secure_installation #设置root密码等相关\nmysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("p")]),s._v("           #测试登录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这里我安装完后是 5.5.60 版本。")]),s._v(" "),t("h2",{attrs:{id:"_2-开启远程登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-开启远程登录"}},[s._v("#")]),s._v(" 2. 开启远程登录")]),s._v(" "),t("div",{staticClass:"language-vim line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("vim")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cnf")]),s._v("    # 修改配置文件\n\n# 在 mysqld 模块下下配置允许远程登陆\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbind"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("\n\n# 登录 mysql，执行下列 sql 语句：\ngrant "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" privileges "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n# 验证，在其他主机执行下列命令，$ip 替换为 mariadb 节点的 ip\nmysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("h")]),s._v(" $ip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("p")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);