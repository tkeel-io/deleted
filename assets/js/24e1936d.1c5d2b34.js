"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[3580],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),k=i,m=s["".concat(p,".").concat(k)]||s[k]||u[k]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"IoTHub \u5feb\u901f\u5165\u95e8",sidebar_position:1},p=void 0,c={unversionedId:"developer_cookbook/iothub/getting_started",id:"developer_cookbook/iothub/getting_started",title:"IoTHub \u5feb\u901f\u5165\u95e8",description:"[TOC]",source:"@site/docs/developer_cookbook/iothub/getting_started.md",sourceDirName:"developer_cookbook/iothub",slug:"/developer_cookbook/iothub/getting_started",permalink:"/developer_cookbook/iothub/getting_started",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/iothub/getting_started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"IoTHub \u5feb\u901f\u5165\u95e8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Artisan",permalink:"/developer_cookbook/tools/artisan"},next:{title:"\u8bbe\u5907\u63a5\u5165\u89c4\u8303",permalink:"/developer_cookbook/iothub/devices_access_specification"}},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2},{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",children:[{value:"\u539f\u59cb\u6570\u636e",id:"\u539f\u59cb\u6570\u636e",children:[],level:3},{value:"\u5c5e\u6027\u6570\u636e",id:"\u5c5e\u6027\u6570\u636e",children:[],level:3},{value:"\u9065\u6d4b\u6570\u636e",id:"\u9065\u6d4b\u6570\u636e",children:[],level:3},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[],level:3}],level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[],level:2},{value:"Steps:",id:"steps",children:[{value:"\u7b2c 1 \u6b65\uff1a \u521b\u5efa\u8bbe\u5907(\u8fd9\u91cc\u6a21\u62df\u8bbe\u5907\u7ba1\u7406\u7684 2\u4e2a\u6b65\u9aa4)",id:"\u7b2c-1-\u6b65-\u521b\u5efa\u8bbe\u5907\u8fd9\u91cc\u6a21\u62df\u8bbe\u5907\u7ba1\u7406\u7684-2\u4e2a\u6b65\u9aa4",children:[],level:3},{value:"\u7b2c 2 \u6b65\uff1a \u5411\u5e73\u53f0\u63a8\u9001\u539f\u59cb\u6570\u636e\u3001 \u5c5e\u6027\u6570\u636e\u548c\u9065\u6d4b\u6570\u636e\uff1b\u7c7b\u4f3c\uff0c \u53ea\u9700\u8981\u6539\u53d8 topic \u5373\u53ef",id:"\u7b2c-2-\u6b65-\u5411\u5e73\u53f0\u63a8\u9001\u539f\u59cb\u6570\u636e-\u5c5e\u6027\u6570\u636e\u548c\u9065\u6d4b\u6570\u636e\u7c7b\u4f3c-\u53ea\u9700\u8981\u6539\u53d8-topic-\u5373\u53ef",children:[],level:3},{value:"\u7b2c 3 \u6b65\uff1a \u67e5\u8be2\u8bbe\u5907\u539f\u59cb\u6570\u636e\uff0c\u5373\u524d\u9762\u63a8\u9001\u7684\u6570\u636e",id:"\u7b2c-3-\u6b65-\u67e5\u8be2\u8bbe\u5907\u539f\u59cb\u6570\u636e\u5373\u524d\u9762\u63a8\u9001\u7684\u6570\u636e",children:[],level:3},{value:"\u7b2c 4 \u6b65\uff1a \u5ba2\u6237\u7aef\u8ba2\u9605\u5c5e\u6027\u6570\u636e\uff08\u9065\u6d4b\u6570\u636e\uff0c\u547d\u4ee4\u6570\u636e\u540c\u7406\uff09",id:"\u7b2c-4-\u6b65-\u5ba2\u6237\u7aef\u8ba2\u9605\u5c5e\u6027\u6570\u636e\u9065\u6d4b\u6570\u636e\u547d\u4ee4\u6570\u636e\u540c\u7406",children:[],level:3},{value:"\u7b2c 5 \u6b65\uff1a \u63a8\u9001 \u5c5e\u6027\u6570\u636e\uff08\u9065\u6d4b\u6570\u636e\uff0c\u547d\u4ee4\u6570\u636e\u540c\u7406\uff09",id:"\u7b2c-5-\u6b65-\u63a8\u9001-\u5c5e\u6027\u6570\u636e\u9065\u6d4b\u6570\u636e\u547d\u4ee4\u6570\u636e\u540c\u7406",children:[],level:3},{value:"\u7b2c 6 \u6b65\uff1a \u67e5\u770b\u63a8\u9001 \u5c5e\u6027\u6570\u636e\uff08\u9065\u6d4b\u6570\u636e\uff0c\u547d\u4ee4\u6570\u636e\u540c\u7406\uff09",id:"\u7b2c-6-\u6b65-\u67e5\u770b\u63a8\u9001-\u5c5e\u6027\u6570\u636e\u9065\u6d4b\u6570\u636e\u547d\u4ee4\u6570\u636e\u540c\u7406",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[TOC]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u6587\u6863\u4ec5\u4f9b\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u8ba4\u8bc6 IoTHub\u3002")),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IoTHub")," \u662f",(0,r.kt)("inlineCode",{parentName:"p"},"tkeel")," \u5e73\u53f0\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5176\u4e3b\u8981\u529f\u80fd\u662f\u652f\u6301\u8bbe\u5907\u63a5\u5165\uff0c\u6570\u636e\u5feb\u901f\u4e0a\u4e91\uff1b\u652f\u6301\u4e0a\u884c\u6570\u636e\uff08\u539f\u59cb\u6570\u636e\uff0c \u5c5e\u6027\uff0c \u9065\u6d4b\uff09\u548c\u4e0b\u884c\u6570\u636e\uff08\u5c5e\u6027\uff0c \u9065\u6d4b\uff0c \u547d\u4ee4\uff09\n\u76ee\u524d\u652f\u6301 MQTT, CoAP \u534f\u8bae\u3002\n\u8ba9\u6211\u4eec\u4f7f\u7528 MQTT \u5feb\u901f\u63a5\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"IoTHub"),"\uff0c \u5e76\u5b9e\u73b0\u6570\u636e\u4e0a\u4e91\u3002"),(0,r.kt)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,r.kt)("h3",{id:"\u539f\u59cb\u6570\u636e"},"\u539f\u59cb\u6570\u636e"),(0,r.kt)("p",null,"\u4e3b\u52a8\u63a8\u9001\u5230\u5e73\u53f0\u7684\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"\u5c5e\u6027\u6570\u636e"},"\u5c5e\u6027\u6570\u636e"),(0,r.kt)("p",null,"\u4e0e\u4e00\u7c7b\u8bbe\u5907\u76f8\u5173\u8054\u7684\u9759\u6001\u952e\u503c\u5bf9\u3002\u4f8b\u5982\u7248\u672c\u3001\u6240\u5c5e\u90e8\u95e8\u3001\u5382\u5546\u7b49\uff0c\uff08kv\uff09"),(0,r.kt)("h3",{id:"\u9065\u6d4b\u6570\u636e"},"\u9065\u6d4b\u6570\u636e"),(0,r.kt)("p",null,"\u5e26\u6709\u65f6\u95f4\u5e8f\u5217\u7684\u6570\u636e\u6d4b\u70b9\u3002\u4f8b\u5982\u7535\u538b\u3001\u7535\u6d41\u3001\u529f\u7387\u3001\u6e29\u5ea6\u3001\u6e7f\u5ea6\u7b49\uff0c\u53ef\u7528\u4e8e\u5b58\u50a8\u3001\u67e5\u8be2\u3001\u53ef\u89c6\u5316\u89c6\u56fe\u3002(\u6570\u636e\u7c7b\u578b\uff0c \u5355\u4f4d\uff0c \u6700\u5927\u503c\uff0c\u6700\u5c0f\u503c)"),(0,r.kt)("h3",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("p",null,"\u53ef\u8c03\u7528\u7684\u53cd\u63a7\u547d\u4ee4\u3001\u51b3\u5b9a\u8bbe\u5907\u7684\u884c\u4e3a"),(0,r.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f  \u5b89\u88c5 tKeel \u5e73\u53f0\uff0c \u5b89\u88c5 tkeel-device \u548c iothub \u4e24\u4e2a\u63d2\u4ef6\u5e76\u6ce8\u518c\uff0c \u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OdysseusC/quickstarts/blob/feat/hello-tkeel/tkeel-manager/README_zh.md"},"\u7ba1\u7406\u4fa7-\u5feb\u901f\u5165\u95e8")," \u3002"),(0,r.kt)("p",{parentName:"blockquote"},"   \u521b\u5efa\u5bf9\u5e94\u7684\u79df\u6237\u548c\u7528\u6237\uff0c \u542f\u7528\u63d2\u4ef6\uff0c \u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OdysseusC/quickstarts/blob/feat/hello-tkeel/tkeel-user/README_zh.md"},"\u7528\u6237\u4fa7-\u5feb\u901f\u5165\u95e8"))),(0,r.kt)("h2",{id:"steps"},"Steps:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u884c\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8bbe\u5907, \u83b7\u53d6 ",(0,r.kt)("em",{parentName:"li"},"\u8bbe\u5907 token"),"\uff0c",(0,r.kt)("em",{parentName:"li"},"\u8bbe\u5907 ID"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 MQTT \u534f\u8bae\u8fde\u63a5 IoTHub,  ",(0,r.kt)("em",{parentName:"li"},"1")," \u83b7\u53d6\u5230\u7684 \u8bbe\u5907 token \u4f5c\u4e3a password, \u8bbe\u5907 ID \u4f5c\u4e3a username."),(0,r.kt)("li",{parentName:"ol"},"\u5411 tkeel \u5e73\u53f0\u63a8\u9001 \u539f\u59cb\u6570\u636e\uff0c\u5c5e\u6027\u6570\u636e, \u9065\u6d4b\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u5e73\u53f0\u67e5\u770b\u63a8\u9001\u7684\u6570\u636e\ntopic \u5b9a\u4e49\uff1a"),(0,r.kt)("li",{parentName:"ol"},"\u539f\u59cb\u6570\u636e\uff0ctopic \u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/raw")),(0,r.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u6570\u636e\uff0ctopic \u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/attributes")),(0,r.kt)("li",{parentName:"ol"},"\u9065\u6d4b\u6570\u636e\uff0ctopic \u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/telemetry"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u884c\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8bbe\u5907, \u83b7\u53d6 ",(0,r.kt)("em",{parentName:"li"},"\u8bbe\u5907 token"),"\uff0c",(0,r.kt)("em",{parentName:"li"},"\u8bbe\u5907 ID"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 MQTT \u534f\u8bae\u8fde\u63a5 IoTHub,  1 \u83b7\u53d6\u5230\u7684 \u8bbe\u5907token \u4f5c\u4e3a password, \u8bbe\u5907 ID \u4f5c\u4e3a username."),(0,r.kt)("li",{parentName:"ol"},"\u8ba2\u9605\u5e73\u53f0\u7684 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u5c5e\u6027")),"\uff0c ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"\u9065\u6d4b"))," \u547d\u4ee4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u5907\u7ba1\u7406\u53d1\u8d77\u4fee\u6539\u5c5e\u6027\uff0c \u9065\u6d4b\uff0c \u547d\u4ee4\u7684\u8bf7\u6c42\uff0c \u8bbe\u5907\u7aef\u67e5\u770b\u8ba2\u9605\u4e4b\u540e\u6536\u5230\u7684\u4e0b\u884c\u6d88\u606f\u3002\ntopic \u5b9a\u4e49\uff1a"),(0,r.kt)("li",{parentName:"ol"},"\u8ba2\u9605\u5c5e\u6027\u6570\u636e\uff0ctopic \u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/attributes")),(0,r.kt)("li",{parentName:"ol"},"\u8ba2\u9605\u9065\u6d4b\u6570\u636e\uff0ctopic \u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/telemetry")),(0,r.kt)("li",{parentName:"ol"},"\u8ba2\u9605\u547d\u4ee4\u6570\u636e\uff0ctopic \u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"v1/devices/me/commands")," (TODO)")),(0,r.kt)("h3",{id:"\u7b2c-1-\u6b65-\u521b\u5efa\u8bbe\u5907\u8fd9\u91cc\u6a21\u62df\u8bbe\u5907\u7ba1\u7406\u7684-2\u4e2a\u6b65\u9aa4"},"\u7b2c 1 \u6b65\uff1a \u521b\u5efa\u8bbe\u5907(\u8fd9\u91cc\u6a21\u62df\u8bbe\u5907\u7ba1\u7406\u7684 2\u4e2a\u6b65\u9aa4)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5411 security \u521b\u5efa \u8bbe\u5907 token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://192.168.123.9:30707/apis/security/v1/entity/token\' \\\n--header \'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entity_id":"device_123",\n    "entity_type":"device",\n    "owner":"admin"\n}\'\n')),(0,r.kt)("p",null,"response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "msg": "ok",\n    "data": {\n        "token": "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK"\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 API \u521b\u5efa\u4e00\u4e2a\u8bbe\u5907\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'192.168.123.12:30707/apis/core/v1/entities?id=device_123\' \\\n--header \'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ\' \\\n--header \'Type: DEVICE\' \\\n--header \'Source: tkeel-device\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "name": "device_123",\n  "desc": "description info",\n  "group": "default",\n  "token": "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK",\n  "ext": {\n      "address": "http://xxx.yyy.com",\n      "alias": "dev"\n  }\n}\'\n')),(0,r.kt)("p",null,"response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device_123",\n    "source": "tkeel-device",\n    "type": "DEVICE",\n    "configs": {},\n    "properties": {\n        "desc": "description info",\n        "ext": {\n            "address": "http://xxx.yyy.com",\n            "alias": "dev"\n        },\n        "group": "default",\n        "name": "device_123",\n        "token": "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK",\n    }\n}\n')),(0,r.kt)("p",null,"\u8bb0\u5f55\u5e76\u4fdd\u5b58 ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"\u8bbe\u5907 ID"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"device_123")," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u8bbe\u5907 token"))," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK\n")),(0,r.kt)("h3",{id:"\u7b2c-2-\u6b65-\u5411\u5e73\u53f0\u63a8\u9001\u539f\u59cb\u6570\u636e-\u5c5e\u6027\u6570\u636e\u548c\u9065\u6d4b\u6570\u636e\u7c7b\u4f3c-\u53ea\u9700\u8981\u6539\u53d8-topic-\u5373\u53ef"},"\u7b2c 2 \u6b65\uff1a \u5411\u5e73\u53f0\u63a8\u9001\u539f\u59cb\u6570\u636e\u3001 \u5c5e\u6027\u6570\u636e\u548c\u9065\u6d4b\u6570\u636e\uff1b\u7c7b\u4f3c\uff0c \u53ea\u9700\u8981\u6539\u53d8 topic \u5373\u53ef"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 MQTT \u534f\u8bae\u63a8\u9001\u6570\u636e\u5230\u5bf9\u5e94\u7684\u8bbe\u5907. \u8fd9\u91cc\u4f7f\u7528 mosquitto_pub \u6a21\u62df\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mosquitto_pub -h 192.168.123.9 -d -t v1/devices/me/raw  -m "{\\"message\\": \\"hello, tkeel\\",\\"value\\":0}" -p 30563 -u "device_123" -P "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK" -i "client_id"\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 CoAP \u534f\u8bae\u63a8\u9001\u6570\u636e\u5230\u5bf9\u5e94\u7684\u8bbe\u5907\uff0c \u8fd9\u91cc\u4f7f\u7528 coap-client \u6a21\u62df\u3002\n\u8ba2\u9605\u6d88\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'coap-client -m get -s 1000  "coap://192.168.123.9:30588/mqtt/device_123/v1/devices/me/raw?c=demo_sub&p=MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK&u=device_123"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"device_123/v1/devices/me/raw"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8fd9\u91cc\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907ID/v1/devices/me/raw")))),(0,r.kt)("li",{parentName:"ul"},"Client ID \uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"<\u5ba2\u6237\u7aefID>"),", \u5b57\u7b26\u4e32\u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907ID>"),"\uff0c \u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907token>"),", \u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u7684\u6301\u7eed\u65f6\u95f4\uff1a1000 \u79d2")),(0,r.kt)("p",null,"\u53d1\u5e03\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'coap-client -m put -e 1234   "coap://192.168.123.9:30588/mqtt/device_123/v1/devices/me/raw?c=demo_pub&p=MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK&u=device_123"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"device_123/v1/devices/me/raw"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8fd9\u91cc\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907ID/v1/devices/me/raw")))),(0,r.kt)("li",{parentName:"ul"},"Client ID \uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"<\u5ba2\u6237\u7aefID>"),", \u5b57\u7b26\u4e32\u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907ID>"),"\uff0c \u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"<\u8bbe\u5907token>"),", \u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"Payload \u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"1234"))),(0,r.kt)("p",null,"\u67e5\u770b\u8ba2\u9605\u7684\u6d88\u606f\u6536\u5230\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1234\n")),(0,r.kt)("h3",{id:"\u7b2c-3-\u6b65-\u67e5\u8be2\u8bbe\u5907\u539f\u59cb\u6570\u636e\u5373\u524d\u9762\u63a8\u9001\u7684\u6570\u636e"},"\u7b2c 3 \u6b65\uff1a \u67e5\u8be2\u8bbe\u5907\u539f\u59cb\u6570\u636e\uff0c\u5373\u524d\u9762\u63a8\u9001\u7684\u6570\u636e"),(0,r.kt)("p",null,"\u67e5\u770b\u6211\u4eec\u521b\u5efa\u7684\u5b9e\u4f53\uff0c\u6838\u5bf9\u524d\u9762\u64cd\u4f5c\u7684\u53d8\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET '192.168.123.12:30707/apis/core/v1/entities/device_123' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ' \\\n--header 'Type: DEVICE' \\\n--header 'Source: tkeel-device' \\\n--header 'Owner: admin'\n")),(0,r.kt)("p",null,"response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device_123",\n    "source": "tkeel-device",\n    "type": "DEVICE",\n    "configs": {},\n    "properties": {\n        "connectinfo": {\n            "_clientid": "",\n            "_online": false,\n            "_owner": "",\n            "_peerhost": "",\n            "_protocol": "",\n            "_socketport": "",\n            "_username": ""\n        },\n        "desc": "description info",\n        "ext": {\n            "address": "http://xxx.yyy.com",\n            "alias": "dev"\n        },\n        "group": "default",\n        "name": "device_123",\n        "rawData": {\n            "data": {\n                "message": "hello, tkeel",\n                "value": 0\n            },\n            "timestamp": 1641349927430079500,\n            "topic": "device_123/v1/devices/me/raw"\n        }\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connectinfo \u8868\u793a\u8fde\u63a5\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"rawData \u8868\u793a\u539f\u59cb\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"attributes \u8868\u793a\u5c5e\u6027\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"telemetry \u8868\u793a\u9065\u6d4b\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"commands \u8868\u793a\u547d\u4ee4\u6570\u636e")),(0,r.kt)("h3",{id:"\u7b2c-4-\u6b65-\u5ba2\u6237\u7aef\u8ba2\u9605\u5c5e\u6027\u6570\u636e\u9065\u6d4b\u6570\u636e\u547d\u4ee4\u6570\u636e\u540c\u7406"},"\u7b2c 4 \u6b65\uff1a \u5ba2\u6237\u7aef\u8ba2\u9605\u5c5e\u6027\u6570\u636e\uff08\u9065\u6d4b\u6570\u636e\uff0c\u547d\u4ee4\u6570\u636e\u540c\u7406\uff09"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528 mosquitto_sub \u6a21\u62df"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mosquitto_sub -h 192.168.123.9 -d -t v1/devices/me/attributes  -p 30563 -u "device_123" -P "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK" -i "client_sub"\n')),(0,r.kt)("h3",{id:"\u7b2c-5-\u6b65-\u63a8\u9001-\u5c5e\u6027\u6570\u636e\u9065\u6d4b\u6570\u636e\u547d\u4ee4\u6570\u636e\u540c\u7406"},"\u7b2c 5 \u6b65\uff1a \u63a8\u9001 \u5c5e\u6027\u6570\u636e\uff08\u9065\u6d4b\u6570\u636e\uff0c\u547d\u4ee4\u6570\u636e\u540c\u7406\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mosquitto_pub -h 192.168.123.9 -d -t v1/devices/me/attributes  -m "{\\"attribute1\\": \\"length\\",\\"attribute2\\":40}" -p 30563 -u "device_123" -P "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK" -i "client_id"\n')),(0,r.kt)("p",null,"\u67e5\u770b \u8ba2\u9605\u7684 \u5c5e\u6027\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"attribute1": "length","attribute2":40}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:n(4660).Z,width:"1788",height:"323"})),(0,r.kt)("h3",{id:"\u7b2c-6-\u6b65-\u67e5\u770b\u63a8\u9001-\u5c5e\u6027\u6570\u636e\u9065\u6d4b\u6570\u636e\u547d\u4ee4\u6570\u636e\u540c\u7406"},"\u7b2c 6 \u6b65\uff1a \u67e5\u770b\u63a8\u9001 \u5c5e\u6027\u6570\u636e\uff08\u9065\u6d4b\u6570\u636e\uff0c\u547d\u4ee4\u6570\u636e\u540c\u7406\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET '192.168.123.12:30707/apis/core/v1/entities/device_123' \\\n--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ' \\\n--header 'Type: DEVICE' \\\n--header 'Source: tkeel-device' \\\n--header 'Owner: admin'\n")),(0,r.kt)("p",null,"response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device_123",\n    "source": "tkeel-device",\n    "type": "DEVICE",\n    "configs": {},\n    "properties": {\n        "attributes": {\n            "data": {\n                "attribute1": "length",\n                "attribute2": 40\n            },\n            "timestamp": 1641352125602253300,\n            "topic": "device_123/v1/devices/me/attributes"\n        },\n        "connectinfo": {\n            "_clientid": "",\n            "_online": false,\n            "_owner": "",\n            "_peerhost": "",\n            "_protocol": "",\n            "_socketport": "",\n            "_username": ""\n        },\n        "desc": "description info",\n        "ext": {\n            "address": "http://xxx.yyy.com",\n            "alias": "dev"\n        },\n        "group": "default",\n        "name": "device_123",\n        "rawData": {\n            "data": 1234,\n            "timestamp": 1641351393170103600,\n            "topic": "device_123/v1/devices/me/raw"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 properties \u4e0b\u9762\u591a\u4e86\u4e00\u4e2a\u5c5e\u6027 attributes\u3002"))}s.isMDXComponent=!0},4660:function(e,t,n){t.Z=n.p+"assets/images/attributes_sub-371e7e7edfc2bbbcdfa575440c5fe366.png"}}]);