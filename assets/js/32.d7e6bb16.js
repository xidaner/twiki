(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{824:function(v,_,t){"use strict";t.r(_);var r=t(112),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("center",[t("h1",[v._v("EC2 子域名接管")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("存在这个漏洞的前提是目标的 AWS EC2 没有配置弹性 IP，此时如果目标子域 CNAME 配置了该公有 IPv4 DNS 地址或者 A 记录配置了公有 IPv4 IP 地址，那么当该 EC2 被关机或者销毁时，该实例的公有 IP 也会随之释放，此时这个 IP 就会被分配给新的 EC2 实例，造成子域名接管。")]),v._v(" "),t("p",[v._v("例如下面这个这个域名，可以看到 CNAME 绑定到了 AWS 的 EC2 上，可以看到现在 EC2 IP 地址是 15 开头的。")]),v._v(" "),t("br"),v._v(" "),t("p",[t("img",{attrs:{width:"1000",src:"/img/1650004075.png"}}),t("br")]),v._v(" "),t("p",[v._v("访问下，可以看到是正常访问的")]),v._v(" "),t("br"),v._v(" "),t("p",[t("img",{attrs:{width:"1000",src:"/img/1650004139.png"}}),t("br")]),v._v(" "),t("p",[v._v("此时我们将这个 EC2 实例停止再开机，在控制台可以看到 IP 地址已经变成了 3 开头的了")]),v._v(" "),t("br"),v._v(" "),t("p",[t("img",{attrs:{width:"1000",src:"/img/1650004158.png"}}),t("br")]),v._v(" "),t("p",[v._v("此时，因为 CNAME 记录还是原来的记录，再次访问 ec2.teamssix.com 可以看到已经访问不到了，因为原来的那个 15 开头的 IP 此时已经不是我们的了，这样便造成了域名接管。")]),v._v(" "),t("br"),v._v(" "),t("p",[t("img",{attrs:{width:"1000",src:"/img/1650004183.png"}}),t("br")]),v._v(" "),t("p",[v._v("只是这个域名不是被我们接管的，而是被别人接管了，或许自己的域名会被定向到别人的 Jenkins 上也说不定【手动狗头】")]),v._v(" "),t("br"),v._v(" "),t("p",[t("img",{attrs:{width:"1000",src:"/img/1650004202.png"}}),t("br")]),v._v(" "),t("br"),v._v(" "),t("p",[t("img",{attrs:{width:"1200",src:"/img/1650004221.png"}}),t("br")]),v._v(" "),t("blockquote",[t("p",[v._v("白帽子：你资产里的有个 Jenkins RCE ！！！")]),v._v(" "),t("p",[v._v("厂家回复：感谢提交，我们正在调查。哦，这个域名的 DNS 记录看起来是个悬挂 DNS 记录，这个 Jenkins 资产不是我们的哦。")])]),v._v(" "),t("p",[v._v("那么其实这里问题来了，怎么判断 DNS 记录里的 EC2 IP 是公有 IP 还是弹性 IP 呢？大概有以下几种方法：")]),v._v(" "),t("ol",[t("li",[v._v("证书判断，如果某个子域绑定了 AWS EC2 IP，但是这个网站证书和其他子域名的证书明显不一致，那么可能这个 EC2 就是使用的公有 IP，而且当前的 IP 已经是别人的 IP 了，当然前提是网站使用了 HTTPS")]),v._v(" "),t("li",[v._v("网络空间搜索引擎历史记录，通过对该 IP 的历史搜索记录进行查询，如果该 IP 的历史扫描记录一直在变化，那么可能就是公有 IP")]),v._v(" "),t("li",[v._v("通过谷歌、百度搜索的历史记录去判断，这个原理和上面的第 2 点一样，都是通过有没有变化去判断。")])]),v._v(" "),t("p",[v._v("不过其实上面三种方法也没法百分百的确定，所以其实最好的办法就是直接问对方，当前 IP 是不是对方所属，虽然这种做法不太 Hacker，但确实是最有效的办法了。")]),v._v(" "),t("br"),v._v(" "),t("p",[t("img",{attrs:{width:"700",src:"/img/1650004239.png"}}),t("br")]),v._v(" "),t("p",[v._v("最后如果子域名要绑定 EC2，建议为 EC2 绑定个弹性 IP，这样即使实例重启，IP 也不会变，避免自己的域名绑到了其他人的 EC2 的尴尬场景。")]),v._v(" "),t("p",[v._v("不过 u1s1，这个问题影响不算太大，毕竟攻击者想劫持到这个域名的成本还是蛮高的。")]),v._v(" "),t("blockquote",[t("p",[v._v("参考资料：")]),v._v(" "),t("p",[v._v("https://blog.melbadry9.xyz/dangling-dns/aws/ddns-ec2")])]),v._v(" "),t("Vssue")],1)}),[],!1,null,null,null);_.default=s.exports}}]);