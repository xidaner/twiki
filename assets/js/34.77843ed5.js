(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{829:function(s,t,a){"use strict";a.r(t);var n=a(112),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("center",[a("h1",[s._v("使用用户数据执行命令")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("在创建云服务器时，用户可以通过指定自定义数据，进行配置实例，当云服务器启动时，自定义数据将以文本的方式传递到云服务器中，并执行该文本，而且文本里的命令默认以 root 权限执行。")]),s._v(" "),a("p",[s._v("通过这一功能，攻击者可以修改实例的用户数据并向其中写入待执行的命令，这些代码将会在实例每次启动时自动执行。")]),s._v(" "),a("h2",{attrs:{id:"控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制台"}},[s._v("#")]),s._v(" 控制台")]),s._v(" "),a("p",[s._v("在控制台界面可以直接编辑实例的用户数据。")]),s._v(" "),a("p",[s._v("在 AWS 下，修改用户数据需要停止实例，在 AWS 下停止实例会擦除实例存储卷上的所有数据，如果没设置弹性 IP，实例的公有 IP 也会变化，因此停止实例需谨慎。")]),s._v(" "),a("p",[s._v("修改用户数据的位置在：操作-> 实例设置->编辑用户数据")]),s._v(" "),a("br"),s._v(" "),a("p",[a("img",{attrs:{width:"400",src:"/img/1649998078.png"}}),a("br")]),s._v(" "),a("p",[s._v("这里以执行 touch 命令为例，如果用户数据设置为以下内容，那么实例只有才第一次启动才会运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /tmp/teamssix.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果用户数据设置为以下内容，那么实例只要重启就会运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Content-Type: multipart/mixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("boundary")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//"')]),s._v("\nMIME-Version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n\n--//\nContent-Type: text/cloud-config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"us-ascii"')]),s._v("\nMIME-Version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\nContent-Transfer-Encoding: 7bit\nContent-Disposition: attachment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cloud-config.txt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cloud-config")]),s._v("\ncloud_final_modules:\n- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("scripts-user, always"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n--//\nContent-Type: text/x-shellscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"us-ascii"')]),s._v("\nMIME-Version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\nContent-Transfer-Encoding: 7bit\nContent-Disposition: attachment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userdata.txt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /tmp/teamssix.txt\n--//--\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("br"),s._v(" "),a("p",[a("img",{attrs:{width:"800",src:"/img/1649998187.png"}}),a("br")]),s._v(" "),a("p",[s._v("保存用户数据后启动实例，这时进入实例，就可以看到刚才创建的文件了，这说明刚才的命令已经被执行了")]),s._v(" "),a("br"),s._v(" "),a("p",[a("img",{attrs:{width:"600",src:"/img/1649998204.png"}}),a("br")]),s._v(" "),a("h2",{attrs:{id:"命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[s._v("#")]),s._v(" 命令行")]),s._v(" "),a("p",[s._v("除了在控制台上操作的方式外，也可以使用 aws cli 操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws ec2 run-instances --image-id ami-abcd1234 --count "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --instance-type m3.medium "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--key-name my-key-pair --subnet-id subnet-abcd1234 --security-group-ids sg-abcd1234 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--user-data file://my_script.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("my_script.txt")]),s._v("就是要执行的脚本")]),s._v(" "),a("p",[s._v("查看实例用户数据")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("aws ec2 describe-instance-attribute --instance-id i-1234567890abcdef0 --attribute userData --output text --query "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UserData.Value"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64 --decode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("参考资料：")]),s._v(" "),a("p",[s._v("https://aws.amazon.com/cn/premiumsupport/knowledge-center/execute-user-data-ec2/")])]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);