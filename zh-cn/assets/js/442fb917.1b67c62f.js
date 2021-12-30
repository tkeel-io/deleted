"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9785],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2648:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],l={title:"tentacle \u4e00\u81f4\u6027",sidebar_position:13},i=void 0,p={unversionedId:"developer_cookbook/core/specs/tentacle-consistency",id:"developer_cookbook/core/specs/tentacle-consistency",isDocsHomePage:!1,title:"tentacle \u4e00\u81f4\u6027",description:"\u5728 core \u4e2d Entity\uff0cActor\uff0cTentacle \u662f\u4e09\u4e2a\u975e\u5e38\u91cd\u8981\uff0c\u4e14\u5173\u7cfb\u7d27\u5bc6\u7684\u6982\u5ff5\uff0cActor \u548cEntity \u662f\u8fd0\u884c\u65f6\u548c\u975e\u8fd0\u884c\u65f6\u5173\u7cfb\uff0cTentacle \u662f Actor \u5728\u88ab\u6d88\u606f\u89e6\u53d1\u540e\uff0c\u4e3a Actor \u7684\u4e0b\u4e00\u6b65\u884c\u4e3a\u63d0\u4f9b\u6307\u5bfc\uff0c\u5efa\u7acb Actor \u4e0e Actor \u4fe1\u606f\u4ea4\u4e92\u7684\u6865\u6881\u3002\u5982\u6b64\u770b\u6765\uff0c Tantacle \u5176\u5b9e\u53ef\u4ee5\u770b\u505a Actor \u8fd0\u884c\u7684\u8fd0\u884c\u73af\u5883\uff08\u4e0a\u4e0b\u6587\uff09\u4e2d\u7684\u90e8\u5206\u4fe1\u606f\u3002",source:"@site/docs/developer_cookbook/core/specs/tentacle-consistency.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/tentacle-consistency",permalink:"/zh-cn/developer_cookbook/core/specs/tentacle-consistency",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/tentacle-consistency.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"tentacle \u4e00\u81f4\u6027",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/zh-cn/developer_cookbook/core/specs/persistent-strategy"},next:{title:"Interfaces",permalink:"/zh-cn/developer_cookbook/core/specs/interfaces"}},s=[{value:"TQL \u4e2d\u7684\u901a\u914d\u7b26",id:"tql-\u4e2d\u7684\u901a\u914d\u7b26",children:[],level:2},{value:"Feature",id:"feature",children:[],level:2}],u={toc:s};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5728 core \u4e2d Entity\uff0cActor\uff0cTentacle \u662f\u4e09\u4e2a\u975e\u5e38\u91cd\u8981\uff0c\u4e14\u5173\u7cfb\u7d27\u5bc6\u7684\u6982\u5ff5\uff0cActor \u548cEntity \u662f\u8fd0\u884c\u65f6\u548c\u975e\u8fd0\u884c\u65f6\u5173\u7cfb\uff0cTentacle \u662f Actor \u5728\u88ab\u6d88\u606f\u89e6\u53d1\u540e\uff0c\u4e3a Actor \u7684\u4e0b\u4e00\u6b65\u884c\u4e3a\u63d0\u4f9b\u6307\u5bfc\uff0c\u5efa\u7acb Actor \u4e0e Actor \u4fe1\u606f\u4ea4\u4e92\u7684\u6865\u6881\u3002\u5982\u6b64\u770b\u6765\uff0c Tantacle \u5176\u5b9e\u53ef\u4ee5\u770b\u505a Actor \u8fd0\u884c\u7684\u8fd0\u884c\u73af\u5883\uff08\u4e0a\u4e0b\u6587\uff09\u4e2d\u7684\u90e8\u5206\u4fe1\u606f\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"tentacle-consistency",src:n(5740).Z})),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u901a\u8fc7 API \u8c03\u7528\uff0c\u521b\u5efa\uff0c\u66f4\u65b0\uff0c\u6216\u5220\u9664\u5b9e\u4f53\u4e2d\u4e2d\u7684 Mapper\uff0c\u5f15\u8d77 TQL \u7684\u53d8\u66f4\uff0c\u53d8\u66f4\u88ab\u540c\u6b65\u5230 ETCD \u4e2d\u3002"),(0,c.kt)("li",{parentName:"ol"},"Core \u670d\u52a1\u8282\u70b9\u76d1\u542c ETCD \u4e2d\u7684 TQL \u7684\u53d8\u66f4\uff0c\u611f\u77e5\u53d8\u66f4\u3002"),(0,c.kt)("li",{parentName:"ol"},"Core \u670d\u52a1\u8282\u70b9\u5c06 \u53d8\u66f4\u7684 TQL \u5728\u672c\u5730\u91cd\u65b0\u751f\u6210 Tentacle\uff0c\u5e76\u66f4\u65b0\u672c\u5730 Actor \u8fd0\u884c\u73af\u5883\u4e2d\u7684 ",(0,c.kt)("inlineCode",{parentName:"li"},"tentacles"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u65f6\u73af\u5883\u7684\u53d8\u66f4\u89e6\u53d1\u90e8\u5206 Actor \u88ab ",(0,c.kt)("inlineCode",{parentName:"li"},"reload"),"\uff0c\u5b8c\u6210\u5bf9 TQL \u53d8\u66f4\u54cd\u5e94\u3002")),(0,c.kt)("h2",{id:"tql-\u4e2d\u7684\u901a\u914d\u7b26"},"TQL \u4e2d\u7684\u901a\u914d\u7b26"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u5b9e\u4f53\n*.x\n# a \u5b9e\u4f53\u7684\u6240\u6709\u5c5e\u6027\na.*\n# \u6240\u6709\u5b9e\u4f53\u7684\u6240\u6709\u5c5e\u6027\n*.*\n")),(0,c.kt)("p",null,"TQL \u4e2d\u7684\u901a\u914d\u7b26\u5b58\u5728\u4e0a\u8ff0\u4e09\u79cd\u60c5\u51b5\uff0c\u5b9e\u4f53\u6216\u8005\u5c5e\u6027\u7684\u901a\u914d\u7b26\u6211\u4eec\u90fd\u4fdd\u5b58\u5728 Tentacle \u4e2d\uff0c\u7136\u540e\u5f53 Actor \u88ab\u89e6\u53d1\u62c9\u53d6 ",(0,c.kt)("inlineCode",{parentName:"p"},"tentacles")," \u65f6\u8fdb\u884c\u5339\u914d\u5b9e\u4f53\u901a\u914d\u7b26\u3002\u5bf9\u4e8e\u5c5e\u6027\u4f4d\u7f6e\u7684\u901a\u914d\u7b26\uff0c\u5728 Actor \u6267\u884c\u5b8c\u6d88\u606f\uff0c\u7136\u540e\u8fdb\u884c\u4e0b\u4e00\u6b65\u884c\u52a8\u65f6\u89e3\u6790\u3002"),(0,c.kt)("h2",{id:"feature"},"Feature"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5bf9\u4e8e TQL \u4e2d\u7684\u51fd\u6570\u5728\u4ec0\u4e48\u65f6\u5019\u88ab\u6267\u884c\uff1f"),(0,c.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u51fd\u6570\uff0c\u5728\u529f\u80fd\u4e0a\u548c\u901a\u914d\u7b26\u662f\u76f8\u540c\u7684\uff0c\u4e0d\u540c\u5728\u4e8e\u5176\u6267\u884c\u8fc7\u7a0b\u9700\u8981\u901a\u8fc7\u7279\u5b9a\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u7ed3\u5408 Core \u96c6\u7fa4\u7684\u72b6\u6001\u3002\u6211\u4eec\u53ef\u4ee5\u5728 Environment \u4e2d\u5b9a\u65f6\u6267\u884c\u3002"))))}d.isMDXComponent=!0},5740:function(e,t,n){t.Z=n.p+"assets/images/tentacle-consistency-c88d570a21e42f9294db11cd410f3ed8.png"}}]);