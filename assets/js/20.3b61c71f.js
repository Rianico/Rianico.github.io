(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{373:function(e,a,o){"use strict";o.r(a);var r=o(25),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hdfs-磁盘数据分配策略"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-磁盘数据分配策略"}},[e._v("#")]),e._v(" HDFS 磁盘数据分配策略")]),e._v(" "),o("p",[e._v("HDFS 写入数据到磁盘时，有两种策略：")]),e._v(" "),o("ul",[o("li",[e._v("基于轮询："),o("code",[e._v("org.apache.hadoop.hdfs.server.datanode.fsdataset.RoundRobinVolumeChoosingPolicy")]),e._v("，一个个磁盘遍历，从而达到负载均衡的目的。")]),e._v(" "),o("li",[e._v("基于磁盘用量："),o("code",[e._v("org.apache.hadoop.hdfs.server.datanode.fsdataset.AvailableSpaceVolumeChoosingPolicy")]),e._v("，根据磁盘使用量，在不同磁盘用量差距到达阈值（"),o("code",[e._v("dfs.datanode.available-space-volume-choosing-policy.balanced-space-threshold")]),e._v("，默认 10G）时，会对空闲空间较大的磁盘进行"),o("strong",[e._v("加权轮询")]),e._v("，由 "),o("code",[e._v("dfs.datanode.available-space-volume-choosing-policy.balanced-space-preference-fraction")]),e._v(" 控制，默认 0.75。")])]),e._v(" "),o("p",[e._v("HDFS 默认采用基于轮询的方式分配数据到磁盘，但是一旦有大量的数据写入（每次写的块大小差距较大）或者删除大量数据，则可能会出现磁盘数据分配不均匀的情况，因此在磁盘 I/0 负载不是很重的前提下，基于磁盘用量是一个更加好的选择。")]),e._v(" "),o("p",[e._v("HDFS 在 3.0 后还推出了 "),o("a",{attrs:{href:"https://hadoop.apache.org/docs/r3.0.0/hadoop-project-dist/hadoop-hdfs/HDFSDiskbalancer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS Disk Balancer"),o("OutboundLink")],1),e._v(" ，是针对单个节点内磁盘之间数据的平衡，与 "),o("a",{attrs:{href:"https://hadoop.apache.org/docs/r3.0.0/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html#Balancer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Balancer"),o("OutboundLink")],1),e._v(" 用于平衡节点之间的数据要区分开来。")]),e._v(" "),o("p",[e._v("HDFS Disk Balancer 有 Apache 官方版本以及 CDH 5.8 开始推出的版本，用法分别详见：")]),e._v(" "),o("ul",[o("li",[e._v("Apache："),o("a",{attrs:{href:"https://hadoop.apache.org/docs/r3.0.0/hadoop-project-dist/hadoop-hdfs/HDFSDiskbalancer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS Disk Balancer"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("CDH："),o("a",{attrs:{href:"https://blog.cloudera.com/how-to-use-the-new-hdfs-intra-datanode-disk-balancer-in-apache-hadoop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How-to: Use the New HDFS Intra-DataNode Disk Balancer in Apache Hadoop"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);