(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(s,a,t){"use strict";t.r(a);var e=t(25),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"spark指定hadoop实际操作用户（非安全环境下）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spark指定hadoop实际操作用户（非安全环境下）"}},[s._v("#")]),s._v(" Spark指定Hadoop实际操作用户（非安全环境下）")]),s._v(" "),t("p",[s._v("在集群执行"),t("code",[s._v("spark-shell --master yarn")]),s._v("的时候，由于集群机器上的spark安装文件属于"),t("strong",[s._v("root")]),s._v("用户，而HDFS文件系统上的用户名又是"),t("strong",[s._v("hdfs")]),s._v("，因此无法使用"),t("code",[s._v("sudo -u hdfs")]),s._v("来使用hdfs用户启动spark，而使用root用户启动在对HDFS进行读写操作时又会出现权限问题，报错为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("org.apache.hadoop.security.AccessControlException: Permission denied: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("access")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("WRITE, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("inode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/xxx"')]),s._v(":hdfs:supergroup:drwxr-xr-x\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("解决思路")]),s._v("：指定Spark操作HDFS的用户为hdfs。")]),s._v(" "),t("p",[t("strong",[s._v("问题解决")]),s._v("：由于Spark的"),t("code",[s._v("saveAsTextFile(...)")]),s._v("实质上调用的是Hadoop中保存文件的API，而Hadoop获取用户的代码如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isSecurityEnabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" envUser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HADOOP_USER_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("envUser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    envUser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HADOOP_USER_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" envUser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("envUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("由上可得知，在Hadoop是通过获取系统参数来指定用户的。")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("Note")]),s._v("：在Kerberos安全集群环境下，获取用户的方式又有所不同，详细可以参考"),t("a",{attrs:{href:"http://www.udpwork.com/item/7047.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hadoop Authentication"),t("OutboundLink")],1),s._v("，此处不做讨论。")])]),s._v(" "),t("p",[s._v("到此思路比较明朗了，只要修改系统参数"),t("code",[s._v("HADOOP_USER_NAME")]),s._v("的值为hdfs即可，可以通过以下两种方式指定用户。")]),s._v(" "),t("p",[t("strong",[s._v("方法一：")])]),s._v(" "),t("p",[s._v("在Linux环境下，可以先执行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_USER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hdfs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后再启动spark-shell，执行"),t("code",[s._v('System.getProperty("HADOOP_USER_NAME")')]),s._v("，即可看到用户已经为hdfs。")]),s._v(" "),t("p",[t("strong",[s._v("方法二（推荐）：")])]),s._v(" "),t("p",[s._v("对spark-shell的运行时环境进行设置，如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# spark.executor.extraJavaOptions：指定executor端的参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# spark.driver.extraJavaOptions：指定driver端的参数")]),s._v("\nspark-shell --master "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" --conf spark.executor.extraJavaOptions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-DHADOOP_USER_NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hdfs --conf spark.driver.extraJavaOptions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-DHADOOP_USER_NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hdfs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("执行"),t("code",[s._v('System.getProperty("HADOOP_USER_NAME")')]),s._v("，即可看到用户已经为hdfs。")]),s._v(" "),t("p",[s._v("再次执行Spark的保存文件操作，保存成功！")]),s._v(" "),t("p",[s._v("个人比较推荐第二种方法，不仅在spark-shell可以使用，在spark-submit等提交作业的时候也是通用的。")]),s._v(" "),t("p",[s._v("参考：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.huqiwen.com/2013/07/18/hdfs-permission-denied/",target:"_blank",rel:"noopener noreferrer"}},[s._v("HDFS客户端的权限错误：Permission denied"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://spark.apache.org/docs/latest/configuration.html#runtime-environment",target:"_blank",rel:"noopener noreferrer"}},[s._v("Spark官方文档"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);