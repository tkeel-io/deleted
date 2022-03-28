"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7429],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),k=o,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3868:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"\u67b6\u6784",sidebar_position:1},c=void 0,p={unversionedId:"developer_cookbook/core/introduction/architecture",id:"developer_cookbook/core/introduction/architecture",title:"\u67b6\u6784",description:"core \u6574\u4f53\u67b6\u6784",source:"@site/docs/developer_cookbook/core/introduction/architecture.md",sourceDirName:"developer_cookbook/core/introduction",slug:"/developer_cookbook/core/introduction/architecture",permalink:"/developer_cookbook/core/introduction/architecture",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/introduction/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67b6\u6784",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/developer_cookbook/core/getting_started"},next:{title:"\u914d\u7f6e",permalink:"/developer_cookbook/core/introduction/configuration"}},u={},s=[{value:"core \u6574\u4f53\u67b6\u6784",id:"core-\u6574\u4f53\u67b6\u6784",level:2},{value:"Restful APIs",id:"restful-apis",level:3},{value:"\u5b9e\u4f53",id:"\u5b9e\u4f53",level:3},{value:"\u5b9e\u4f53\u7ba1\u7406",id:"\u5b9e\u4f53\u7ba1\u7406",level:3},{value:"Runtime",id:"runtime",level:3},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",level:3},{value:"\u6a21\u578b",id:"\u6a21\u578b",level:3},{value:"\u6620\u5c04",id:"\u6620\u5c04",level:3},{value:"\u8ba2\u9605",id:"\u8ba2\u9605",level:3},{value:"Inbox",id:"inbox",level:3},{value:"Channel Endpoint",id:"channel-endpoint",level:3},{value:"Storege",id:"storege",level:3}],d={toc:s};function k(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"core-\u6574\u4f53\u67b6\u6784"},"core \u6574\u4f53\u67b6\u6784"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture",src:r(8168).Z,width:"1440",height:"1000"})),(0,i.kt)("h3",{id:"restful-apis"},"Restful APIs"),(0,i.kt)("p",null,"core \u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"RESTFUL")," \u89c4\u8303\u5b9e\u73b0 API\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u6b63\u4ea4\u7684APIs\uff0c\u5411\u5916\u63d0\u4f9b\u7b80\u6d01\uff0c\u7a33\u5b9a\u7684API\u3002"),(0,i.kt)("h3",{id:"\u5b9e\u4f53"},"\u5b9e\u4f53"),(0,i.kt)("p",null,"\u5b9e\u4f53\uff08",(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/entity"},"Entity"),"\uff09 \u662f\u6211\u4eec\u5728\u7269\u8054\u7f51\u4e16\u754c\u4e2d\u5bf9 Things \u7684\u4e00\u79cd\u62bd\u8c61\uff0c\u662f Core \u64cd\u4f5c\u7684\u57fa\u7840\u5bf9\u8c61\u3002\u5305\u62ec\u667a\u80fd\u706f\u3001\u7a7a\u8c03\u3001\u7f51\u5173\uff0c\u623f\u95f4\uff0c\u697c\u5c42\uff0c\u751a\u81f3\u662f\u901a\u8fc7\u6570\u636e\u805a\u5408\u751f\u6210\u7684\u865a\u62df\u8bbe\u5907\u7b49\u7b49\uff0c\u6211\u4eec\u5c06\u8fd9\u4e9b ",(0,i.kt)("inlineCode",{parentName:"p"},"Things")," \u8fdb\u884c\u62bd\u8c61\uff0c\n\u5b9a\u4e49\u4e3a\u5b9e\u4f53\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u5c5e\u6027")," \u662f\u5bf9\u67d0\u79cd\u5b9e\u4f53\u4e00\u90e8\u5206\u4fe1\u606f\u7684\u63cf\u8ff0\u3002\u4e00\u4e2a\u5b9e\u4f53\u5305\u542b\u4e24\u7c7b\u5c5e\u6027\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u57fa\u7840\u5c5e\u6027"),": \u6bcf\u4e2a\u5b9e\u4f53\u90fd\u5fc5\u5907\u7684\u5c5e\u6027\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"type"),"\u7b49\u7528\u4e8e\u6807\u8bc6\u5b9e\u4f53\u5171\u6709\u7279\u5f81\u7684\u5c5e\u6027\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u6269\u5c55\u5c5e\u6027"),": \u5b9e\u4f53\u9664\u57fa\u7840\u5c5e\u6027\u5916\u7684\u5c5e\u6027\uff0c\u8fd9\u79cd\u5c5e\u6027\u5c5e\u4e8e\u67d0\u4e00\u7c7b\u6216\u67d0\u4e00\u4e2a\u5b9e\u4f53\u7684\u7279\u5f81\u63cf\u8ff0\uff0c\u6bd4\u5982\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"li"},"\u6e29\u5ea6\u8ba1")," \u7684\u6e29\u5ea6\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u6280\u672f\u7ec6\u8282\u8bf7\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/entity"},"\u5b9e\u4f53\u6587\u6863"))),(0,i.kt)("h3",{id:"\u5b9e\u4f53\u7ba1\u7406"},"\u5b9e\u4f53\u7ba1\u7406"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u7ba1\u7406")," \u5bf9 core \u4e2d\u7684\u5b9e\u4f53\u8fdb\u884c\u7ba1\u7406\uff0c\u5e76\u4ee3\u7406\u5b9e\u4f53\u76f8\u5173\u7684 ",(0,i.kt)("a",{parentName:"p",href:"../../../api/Core/tag"},"APIs")," \u64cd\u4f5c\uff0c\u4e3a\u5b9e\u4f53\u548c\u5b9e\u4f53\u8fd0\u884c\u65f6\uff08",(0,i.kt)("a",{parentName:"p",href:"../specs/actor"},"Actor"),"\uff09\u5411\u5916\u66b4\u9732\u63a5\u53e3\u3002"),(0,i.kt)("h3",{id:"runtime"},"Runtime"),(0,i.kt)("p",null,"Runtime \u4e3a\u5b9e\u4f53\u7684\u8fd0\u884c\u65f6\uff08Actor\uff09\u63d0\u4f9b\u73af\u5883\u652f\u6301\uff0c\u5bf9 Actor \u8fdb\u884c\u8c03\u5ea6\u548c\u7ba1\u7406\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor",src:r(9223).Z,width:"1200",height:"651"})),(0,i.kt)("h3",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,i.kt)("p",null,"\u5728\u7269\u7406\u4e16\u754c\u4e2d\uff0c\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u5f80\u5f80\u4e0d\u662f\u76f8\u4e92\u5b64\u7acb\u7684\uff0c\u5b83\u4eec\u4e4b\u95f4\u5f80\u5f80\u5b58\u5728\u5404\u5f0f\u5404\u6837\u7684\u8054\u7cfb\uff0c\u5982\u4ea4\u6362\u673a\uff0c\u8def\u7531\u5668\uff0c\u7ec8\u7aef\u8bbe\u5907\uff0c\u670d\u52a1\u5668\u901a\u8fc7\u5149\u7ea4\u8fde\u63a5\uff0c\u5728\u7f51\u7edc\u62d3\u6251\u56fe\u4e2d\u8fd9\u4e9b\u8bbe\u5907\u5b9e\u4f53\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fde\u63a5\u5173\u7cfb"),"\u3002\u8fd9\u4e9b\u5173\u7cfb\u5c06\u8fd9\u4e9b\u72ec\u7acb\u7684\u8bbe\u5907\u5b9e\u4f53\u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u7ec4\u6210\u590d\u6742\u800c\u7cbe\u5bc6\u7684\u7f51\u7edc\uff0c\u5411\u5916\u63d0\u4f9b\u7a33\u5b9a\u800c\u9ad8\u901f\u7684\u7f51\u7edc\u901a\u4fe1\u670d\u52a1\u3002\u5173\u7cfb\u7684\u6838\u5fc3\u5728\u4e8e\u6709\u6548\u7684\u7ec4\u7ec7\u72ec\u7acb\u7684\u5b9e\u4f53\uff0c\u4f7f\u5f97\u4ed6\u4eec\u80fd\u591f\u7ec4\u6210\u4e00\u4e2a\u529f\u80fd\u9f50\u5168\u7684\u96c6\u5408\uff0c\u4ee5\u96c6\u5408\u4e3a\u5355\u4f4d\u5411\u5916\u63d0\u4f9b\u4e30\u5bcc\u591a\u5f69\u7684\u529f\u80fd\u3002core \u4e2d\u7684\u5173\u7cfb\uff08",(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/relationship"},"Relationship"),"\uff09\u5c31\u6a21\u62df\u7269\u7406\u4e16\u754c\u4e2d\u7684\u5173\u7cfb\uff0c\u62bd\u8c61\u51fa\u6765\uff0c\u7528\u4ee5\u7ec4\u7ec7\u5b9e\u4f53\uff0c\u6784\u5efa\u5e9e\u5927\u7684\u5e94\u7528\u573a\u666f\u3002"),(0,i.kt)("h3",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,i.kt)("p",null,"\u6211\u4eec\u5c06\u5b9e\u4f53\u5c5e\u6027\u7684\u7ea6\u675f\u96c6\u5408\u5b9a\u4e49\u4e3a\u6a21\u578b\u3002\u5b9e\u4f53\u662f\u5c5e\u6027\u6570\u636e\u7684\u8f7d\u4f53\uff0c\u4f46\u662f\u5982\u4f55\u89e3\u6790\u548c\u4f7f\u7528\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u4f53\u5c5e\u6027\u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u5982\u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u7b49\uff0c\u6211\u4eec\u5c06\u8fd9\u4e9b\u63cf\u8ff0\u4fe1\u606f\u79f0\u4e4b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u7ea6\u675f"),"\u3002\u800c\u6a21\u578b\u5c31\u662f\u4e00\u4e2a\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"\u7ea6\u675f"),"\u96c6\u5408\u7684\u8f7d\u4f53\uff0c\u6a21\u578b\u4e5f\u4ee5\u5b9e\u4f53\u7684\u5f62\u5f0f\u5b58\u5728\uff0c ",(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/model"},"\u66f4\u591a\u8bbe\u8ba1\u7ec6\u8282\u8bf7\u9605\u8bfb\u6a21\u578b\u6587\u6863")," \u3002"),(0,i.kt)("h3",{id:"\u6620\u5c04"},"\u6620\u5c04"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/mapper"},"\u6620\u5c04")," \u662f\u5b9e\u4f53\u95f4\u5c5e\u6027\u4f20\u64ad\u7684\u62bd\u8c61\uff0c\u5b9e\u73b0\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u4e92\u3002 "),(0,i.kt)("p",null,"\u501f\u7528\u6620\u5c04\u673a\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u5b9e\u73b0 iot \u573a\u666f\u4e0b\u8bbe\u5907\u6570\u636e\u7684\u5411\u4e0a\u4f20\u9012\u4ee5\u53ca\u63a7\u5236\u547d\u4ee4\u7684\u5411\u4e0b\u4f20\u9012\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:r(2018).Z,width:"1102",height:"898"})),(0,i.kt)("p",null,"\u4e0a\u56fe\u4e2d\u84dd\u8272\u7ebf\u6761\u4ee3\u8868\u6570\u636e\u7684\u4e0a\u884c\uff0c\u5982\u8bbe\u5907\u6570\u636e\u4e0a\u62a5\uff0c\u9ed1\u8272\u4ee3\u8868\u6570\u636e\u7684\u4e0b\u884c\uff0c\u5982\u6307\u4ee4\u6570\u636e\u7684\u4e0b\u884c\u3002"),(0,i.kt)("p",null,"\u6620\u5c04\u64cd\u4f5c\u7684\u6267\u884c\u5305\u542b\u4e24\u6b65:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5199\u590d\u5236: \u5b9e\u73b0\u5b9e\u4f53\u5c5e\u6027\u53d8\u66f4\u65f6\uff0c\u5c06\u53d8\u66f4\u5411\u4e0b\u6e38\u5b9e\u4f53\u4f20\u9012\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u66f4\u65b0: \u5bf9\u4e0a\u6e38\u5b9e\u4f53\u4ea7\u751f\u7684\u53d8\u66f4\u7ec4\u5408\u8ba1\u7b97\uff0c\u7136\u540e\u5c06\u8ba1\u7b97\u7ed3\u679c\u66f4\u65b0\u5230\u5f53\u524d\u5b9e\u4f53\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:r(3134).Z,width:"1200",height:"586"})),(0,i.kt)("h3",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),(0,i.kt)("p",null,"\u5728\u5f00\u53d1\u4e0a\u5c42\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u7684\u9700\u6c42\u5f80\u5f80\u662f\u805a\u7126\u4e00\u4e2a\u6216\u8005\u4e00\u4e9b\u5b9e\u4f53\uff0c\u5982 PUE \u7684\u8ba1\u7b97\u3002\u7531\u6b64 core \u63d0\u4f9b\u4e86\u7b80\u6377\u65b9\u4fbf\u7684\u8ba2\u9605(",(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/subscription"},"Subscription"),") \uff0c\u4f9b\u5f00\u53d1\u8005\u5b9e\u65f6\u83b7\u53d6\u81ea\u5df1\u5173\u5fc3\u7684\u6570\u636e\u3002"),(0,i.kt)("h3",{id:"inbox"},"Inbox"),(0,i.kt)("p",null,"Inbox \u5b9e\u73b0\u4ece\u6570\u636e\u6e90\uff08MQ\uff0c\u6570\u636e\u5e93\u7b49\uff09\u4e2d\u6d88\u8d39\u6d88\u606f\uff0c\u5b9e\u73b0\u53ef\u9760\u7684\u6d88\u606f\u6d88\u8d39\u673a\u5236\uff0c \u4e3a Runtime \u4e2d\u7684 Actor \u63d0\u4f9b\u53ef\u9760\u6d88\u606f\u4fdd\u8bc1\u3002"),(0,i.kt)("h3",{id:"channel-endpoint"},"Channel Endpoint"),(0,i.kt)("p",null,"\u9ad8\u9891\uff0c\u9ad8\u541e\u5410\u91cf\u7684\u6d88\u606f\u6d41\u5bf9\u4f20\u8f93\u6548\u7387\u7684\u8981\u6c42\u603b\u662f\u82db\u523b\u7684\uff0c core \u91c7\u7528\u9ad8\u6548 \u6570\u636e\u901a\u9053\uff08",(0,i.kt)("a",{parentName:"p",href:"/developer_cookbook/core/specs/channel"},"Channel"),"\uff09\uff0c \u5c01\u88c5\u901a\u9053\u7aef\u70b9\uff0c\u4e3a\u9ad8\u9891\u6d88\u606f\u63d0\u4f9b\u9ad8\u901f\u901a\u9053\u3002"),(0,i.kt)("h3",{id:"storege"},"Storege"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../specs/actor"},"Storege")," \u662f core \u6301\u4e45\u5316\u7f13\u51b2\u6a21\u5757\uff0c\u7528\u4e8e\u5c01\u88c5  core \u7528\u5230\u7684\u6838\u5fc3\u4e2d\u95f4\u4ef6\u8d44\u6e90\uff0c\u5e76\u4f7f\u7528\u7f13\u51b2\u533a\u5bf9\u65f6\u5e8f\u6570\u636e\u7684\u8bfb\u5199\u8fdb\u884c\u4f18\u5316\u3002"))}k.isMDXComponent=!0},9223:function(e,t,r){t.Z=r.p+"assets/images/architecture-actor1207-bfe72540f82dcce64a404412d5c32134.png"},8168:function(e,t,r){t.Z=r.p+"assets/images/architecture-pitrix-72f35b54d7d91dd9e36c7df23b252345.png"},3134:function(e,t,r){t.Z=r.p+"assets/images/mapping1207-f8393603c44debe13801a0b4d8504c77.png"},2018:function(e,t,r){t.Z=r.p+"assets/images/message_passing1207-aa8204de53c0059b44c6be56e0eda372.png"}}]);