"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1292],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||k[m]||a;return n?l.createElement(d,o(o({ref:t},c),{},{components:n})):l.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8079:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],p={title:"\ud83d\ude80 \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd",sidebar_position:40},i="\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd",u={unversionedId:"getting_started/how-to-use-plugin",id:"getting_started/how-to-use-plugin",isDocsHomePage:!1,title:"\ud83d\ude80 \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd",description:"tKeel \u5f00\u653e\u5e73\u53f0\u6709\u5f3a\u5927\u7684\u62d3\u5c55\u529f\u80fd\uff0c\u652f\u6301\u5b89\u88c5\u4efb\u610f\u60a8\u9700\u8981\u7684\u63d2\u4ef6\u3002",source:"@site/docs/getting_started/how-to-use-plugin.md",sourceDirName:"getting_started",slug:"/getting_started/how-to-use-plugin",permalink:"/getting_started/how-to-use-plugin",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/getting_started/how-to-use-plugin.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"\ud83d\ude80 \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\u521d\u59cb\u5316 tKeel \u5e73\u53f0",permalink:"/init"},next:{title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",permalink:"/use"}},c=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[],level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",children:[{value:"\u4f7f\u7528 CLI \u5b89\u88c5\u63d2\u4ef6",id:"\u4f7f\u7528-cli-\u5b89\u88c5\u63d2\u4ef6",children:[],level:3},{value:"\u4f7f\u7528 CLI \u6ce8\u518c\u63d2\u4ef6",id:"\u4f7f\u7528-cli-\u6ce8\u518c\u63d2\u4ef6",children:[],level:3},{value:"\u4f7f\u7528 CLI \u67e5\u770b\u5e73\u53f0\u4e2d\u63d2\u4ef6",id:"\u4f7f\u7528-cli-\u67e5\u770b\u5e73\u53f0\u4e2d\u63d2\u4ef6",children:[],level:3},{value:"\u4f7f\u7528 CLI \u6ce8\u9500\u63d2\u4ef6",id:"\u4f7f\u7528-cli-\u6ce8\u9500\u63d2\u4ef6",children:[],level:3},{value:"\u4f7f\u7528 CLI \u5378\u8f7d\u63d2\u4ef6",id:"\u4f7f\u7528-cli-\u5378\u8f7d\u63d2\u4ef6",children:[],level:3}],level:2}],k={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd"},"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u529f\u80fd"),(0,a.kt)("p",null,"tKeel \u5f00\u653e\u5e73\u53f0\u6709\u5f3a\u5927\u7684\u62d3\u5c55\u529f\u80fd\uff0c\u652f\u6301\u5b89\u88c5\u4efb\u610f\u60a8\u9700\u8981\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u672c\u9875\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7 tKeel CLI \u5b8c\u6210\u5728 tKeel \u4e0a\u5b89\u88c5\u548c\u6ce8\u518c\u4e00\u4e2a\u6307\u5b9a helm \u6e90\u7684\u63d2\u4ef6\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ","[\u5728 tKeel \u4e0a\u5b89\u88c5\u63d2\u4ef6]"," \u548c\u5728 ","[tKeel \u4e0a\u6ce8\u518c\u63d2\u4ef6]","\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u786e\u4fdd\u5df2\u7ecf\u6b63\u786e ",(0,a.kt)("a",{parentName:"p",href:"/#install-and-initialize-your-tkeel"},"\u5b89\u88c5 tKeel \u5e73\u53f0")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/cli#install-cli"},"\u5b89\u88c5 tKeel CLI"),"\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u5e73\u53f0\u5185\u5bf9\u63d2\u4ef6\u7684\u58f0\u660e\u5468\u671f\u6709\u5982\u4e0b\u4e00\u4e2a\u660e\u786e\u7684\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      developer         +        paas manager         +     tantent manager\n                        |                             |\n   +------------+       |       +-----------+         |      +----------+\n   |            |       |       |           |         |      |          |\n   | developing |       |       | published |         |      | disabled |\n   |            |       |       |           |         |      |          |\n   +----+-------+       |       +---+-------+         |      +---+------+\n        |               |   install |                 |          |\n        |  ^            |           v   ^             |          | ^\n        |  |            |               | uninstall   |          | |\n        |  |            |       +-------+---+         |          | |\nrelease |  |            |       |           |         |   enable | |\n        |  | upgrade    |       | installed |         |          | | disable\n        |  |            |       |           |         |          | |\n        |  |            |       +---+-------+         |          | |\n        |  |            |  register |                 |          | |\n        v  |            |           v  ^              |          v |\n           |            |              | remove       |            |\n   +-------+----+       |       +------+----+         |      +-----+----+\n   |            |       |       |           |         |      |          |\n   |  release   |       |       |registered |         |      | enabled  |\n   |            |       |       |           |         |      |          |\n   +------------+       +       +-----------+         +      +----------+\n\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u6f14\u793a\u5185\u5bb9\u4e3a\u5b89\u88c5\u4e00\u6b3e\u5df2\u7ecf\u5f00\u53d1\u5b8c\u6210\u88ab\u53d1\u5e03\u7684\uff08published\uff09\u63d2\u4ef6\u5230 tKeel \u5e73\u53f0\u7684\u7b80\u5355\u8fc7\u7a0b\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-cli-\u5b89\u88c5\u63d2\u4ef6"},"\u4f7f\u7528 CLI \u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("em",{parentName:"p"},"tkeel")," CLI \u5de5\u5177 ",(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5")," \u6307\u5b9a\u6e90\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin install https://tkeel-io.github.io/helm-charts/keel-echo@v0.2.0 tkeel-echo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u4e2d\u6240\u5b89\u88c5\u7684\u63d2\u4ef6\u4e3a keel-echo \u4e3a\u5e73\u53f0\u5b98\u65b9\u63d0\u4f9b\u7684\u4e00\u4e2a\u6f14\u793a\u63d2\u4ef6\uff0c\u6e90\u5730\u5740\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"https://tkeel-io.github.io/helm-charts/")," \u63d2\u4ef6 chart \u7248\u672c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.2.0"),"\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u7248\u672c\u4fe1\u606f\u5c06\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u53d1\u884c\u7684\u6700\u65b0\u7248\u672c\u3002\u6700\u540e\u4e00\u4e2a\u53c2\u6570 \u300ctkeel-echo\u300d\u662f\u4e3a\u8be5\u63d2\u4ef6\u521b\u5efa\u7684\u5b9e\u4f53\u540d\u79f0\uff0c\u6700\u540e\u5bf9\u5e94\u4e3a\u90e8\u7f72\u5728 Kubernetes \u4e2d\u7684\u90e8\u7f72\u5b9e\u4f8b\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u6709\u81ea\u5df1\u60f3\u8981\u5b89\u88c5\u7684\u63d2\u4ef6\uff0c\u8bf7\u5c06\u5bf9\u5e94\u4fe1\u606f\u8fdb\u884c\u66ff\u6362\u5e76\u6267\u884c\u547d\u4ee4\u3002")),(0,a.kt)("p",null,"\u6267\u884c\u540e\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u2139\ufe0f  install tKeel plugin<keel-echo> done.\n\u2705  Install "keel-echo" success! It\'s named "tkeel-echo" in k8s\n')),(0,a.kt)("p",null,"\u5728\u4e0e tKeel \u5e73\u53f0\u90e8\u7f72\u76f8\u901a\u7684\u8282\u70b9\u6267\u884c ",(0,a.kt)("em",{parentName:"p"},"helm")," \u547d\u4ee4\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u4e86 \u300ctkeel-echo\u300d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm list\nNAME            NAMESPACE       REVISION        UPDATED                                      STATUS          CHART           APP VERSION\ndapr            tkeel-platform     1          2021-11-30 14:18:25.7012086 +0800 CST         deployed         dapr-1.5.0         1.5.0\ntkeel-echo       tkeel-platform     1          2021-11-30 17:11:47.6146906 +0800 CST         deployed         keel-echo-0.2.0    0.2.0\ntkeel-platform  tkeel-platform     1          2021-11-30 16:05:57.5570544 +0800 CST         deployed         keel-0.2.0         0.2.0\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-cli-\u6ce8\u518c\u63d2\u4ef6"},"\u4f7f\u7528 CLI \u6ce8\u518c\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177 ",(0,a.kt)("em",{parentName:"p"},"tkeel")," \u5728\u5e73\u53f0\u4e0a ",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u518c")," \u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin register -k keel-echo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\n\u5b9e\u4f8b\u4e2d tKeel \u8fd0\u884c\u73af\u5883\u4e3a Kubernetes\uff0c\u6240\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-k")," \u53c2\u6570\u6307\u5b9a\u8fd0\u884c\u73af\u5883\uff0c\u5982\u4f7f\u7528 host \u6a21\u5f0f\u8fd0\u884c\uff0c\u5219\u65e0\u9700\u6b64\u53c2\u6570\u3002\n\u793a\u4f8b\u4e2d\u6240\u6ce8\u518c\u7684\u63d2\u4ef6 ID \u4e3a 'keel-echo'\u3002\n\u5982\u9700\u5b89\u88c5\u5176\u4ed6\u63d2\u4ef6\uff0c\u8bf7\u5c06\u5bf9\u5e94\u63d2\u4ef6 ID \u8fdb\u884c\u66ff\u6362\u5e76\u6267\u884c\u547d\u4ee4\u3002")),(0,a.kt)("p",null,"\u547d\u4ee4\u884c\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u2705  Success! Plugin<keel-echo> has been Registered to tKeel Platform . To verify, run `tkeel plugin list -k' in your terminal.\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-cli-\u67e5\u770b\u5e73\u53f0\u4e2d\u63d2\u4ef6"},"\u4f7f\u7528 CLI \u67e5\u770b\u5e73\u53f0\u4e2d\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("em",{parentName:"p"},"tkeel")," CLI ",(0,a.kt)("strong",{parentName:"p"},"\u67e5\u770b")," \u5e73\u53f0\u4e2d\u5df2\u7ecf\u6ce8\u518c\u7684\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin list -k\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\n\u5b9e\u4f8b\u4e2d tKeel \u8fd0\u884c\u73af\u5883\u4e3a Kubernetes\uff0c\u6240\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-k")," \u53c2\u6570\u6307\u5b9a\u8fd0\u884c\u73af\u5883\uff0c\u5982\u4f7f\u7528 host \u6a21\u5f0f\u8fd0\u884c\uff0c\u5219\u65e0\u9700\u6b64\u53c2\u6570\u3002")),(0,a.kt)("p",null,"\u547d\u4ee4\u884c\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  NAME       NAMESPACE    HEALTHY  STATUS   PLUGINSTATUS  REPLICAS  VERSION  AGE  CREATED\n  keel-echo  keel-system  True     Running  RUNNING       1         0.2.0    1h   2021-11-30 17:11.48\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-cli-\u6ce8\u9500\u63d2\u4ef6"},"\u4f7f\u7528 CLI \u6ce8\u9500\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("em",{parentName:"p"},"tkeel")," CLI \u5c06\u5df2\u7ecf\u5728\u5e73\u53f0\u4e0a\u6ce8\u518c\u7684\u63d2\u4ef6 ",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u9500"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin unregister -k keel-echo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\n\u5b9e\u4f8b\u4e2d tKeel \u8fd0\u884c\u73af\u5883\u4e3a Kubernetes\uff0c\u6240\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-k")," \u53c2\u6570\u6307\u5b9a\u8fd0\u884c\u73af\u5883\uff0c\u5982\u4f7f\u7528 host \u6a21\u5f0f\u8fd0\u884c\uff0c\u5219\u65e0\u9700\u6b64\u53c2\u6570\u3002\n\u793a\u4f8b\u4e2d\u6240\u6ce8\u518c\u7684\u63d2\u4ef6 ID \u4e3a keel-echo\u3002\n\u5982\u9700\u5b89\u88c5\u5176\u4ed6\u63d2\u4ef6\uff0c\u8bf7\u5c06\u5bf9\u5e94\u63d2\u4ef6 ID \u8fdb\u884c\u66ff\u6362\u5e76\u6267\u884c\u547d\u4ee4\u3002")),(0,a.kt)("p",null,"\u547d\u4ee4\u884c\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u2139\ufe0f  Unregister plugin: {"id":"keel-echo","tkeel_version":"v0.2.0","secret":"changeme","register_timestamp":1638267026,"status":2}\n\u2705  Success! Plugin<keel-echo> has been Registered to tKeel Platform . To verify, run `tkeel plugin list -k\' in your terminal. \n')),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("em",{parentName:"p"},"tkeel plugin list")," \u67e5\u770b\u5e73\u53f0\u4e0a\u7684\u63d2\u4ef6\uff0c\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"PLUGINSTATUS")," \u5b57\u6bb5\u53ef\u4ee5\u786e\u8ba4 \u300ckeel-echo\u300d \u5df2\u7ecf\u6210\u529f\u6ce8\u9500\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ tkeel plugin list -k\nNAME       NAMESPACE    HEALTHY  STATUS   PLUGINSTATUS  REPLICAS  VERSION  AGE  CREATED\nkeel-echo  keel-system  True     Running  NOT_REGISTER  1         0.2.0    1h   2021-11-30 17:11.48\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-cli-\u5378\u8f7d\u63d2\u4ef6"},"\u4f7f\u7528 CLI \u5378\u8f7d\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("em",{parentName:"p"},"tkeel")," CLI \u53ef\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"\u5220\u9664")," \u6307\u5b9a\u63d2\u4ef6\u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin uninstall tkeel-echo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\n\u793a\u4f8b\u4e2d\u6240\u5378\u8f7d\u7684\u63d2\u4ef6\u5b9e\u4f8b\u4e3a\u4e0a\u6587 install \u4e2d\u547d\u540d\u7684 \u300ctkeel-echo\u300d\u3002\n\u5982\u9700\u5b89\u88c5\u5176\u4ed6\u63d2\u4ef6\uff0c\u8bf7\u5c06\u5bf9\u5e94\u63d2\u4ef6\u5b9e\u4f8b\u540d\u5b57\u8fdb\u884c\u66ff\u6362\u5e76\u6267\u884c\u547d\u4ee4\u3002")),(0,a.kt)("p",null,"\u547d\u4ee4\u884c\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u2705  Remove "tkeel-echo" success!\n')),(0,a.kt)("p",null,"\u518d\u6b21\u4f7f\u7528\u4e0e tKeel \u5e73\u53f0\u90e8\u7f72\u76f8\u901a\u7684\u8282\u70b9\u6267\u884c ",(0,a.kt)("em",{parentName:"p"},"helm")," \u547d\u4ee4\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u4e86 \u300ctkeel-echo\u300d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm list\nNAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION\ndapr            keel-system     1               2021-11-30 14:18:25.7012086 +0800 CST   deployed        dapr-1.5.0      1.5.0\ntkeel-platform  keel-system     1               2021-11-30 16:05:57.5570544 +0800 CST   deployed        keel-0.2.0      0.2.0\n")))}s.isMDXComponent=!0}}]);