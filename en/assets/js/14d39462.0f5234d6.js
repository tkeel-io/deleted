"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4352],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return b}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=i,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},766:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],l={title:"\u8bbe\u5907\u57fa\u7840\u6570\u636e",sidebar_position:2},c=void 0,d={unversionedId:"developer_cookbook/device/devices/device_basicInfo",id:"developer_cookbook/device/devices/device_basicInfo",title:"\u8bbe\u5907\u57fa\u7840\u6570\u636e",description:"\u6982\u5ff5",source:"@site/docs/developer_cookbook/device/devices/device_basicInfo.md",sourceDirName:"developer_cookbook/device/devices",slug:"/developer_cookbook/device/devices/device_basicInfo",permalink:"/en/developer_cookbook/device/devices/device_basicInfo",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/device/devices/device_basicInfo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u8bbe\u5907\u57fa\u7840\u6570\u636e",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u5907\u751f\u547d\u5468\u671f\u53ca\u7ec4\u7ec7",permalink:"/en/developer_cookbook/device/devices/device"},next:{title:"\u8bbe\u5907\u8ba2\u9605\u6570\u636e",permalink:"/en/developer_cookbook/device/devices/device_data"}},s=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[],level:2},{value:"\u8bbe\u5907\u57fa\u672c\u4fe1\u606f",id:"\u8bbe\u5907\u57fa\u672c\u4fe1\u606f",children:[],level:2},{value:"\u8bbe\u5907\u8fde\u63a5\u4fe1\u606f",id:"\u8bbe\u5907\u8fde\u63a5\u4fe1\u606f",children:[],level:2},{value:"\u8bbe\u5907\u6a21\u677f\u4fe1\u606f",id:"\u8bbe\u5907\u6a21\u677f\u4fe1\u606f",children:[],level:2},{value:"\u8bbe\u5907\u5173\u7cfb\u4fe1\u606f",id:"\u8bbe\u5907\u5173\u7cfb\u4fe1\u606f",children:[{value:"\u5b9a\u4e49\u5173\u7cfb",id:"\u5b9a\u4e49\u5173\u7cfb",children:[],level:3},{value:"\u83b7\u53d6\u5173\u7cfb",id:"\u83b7\u53d6\u5173\u7cfb",children:[],level:3}],level:2}],u={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("p",null,"\u8bbe\u5907\u662f\u4e00\u4e2a\u5b9e\u4f53\uff0c\u627f\u8f7d\u8fd9\u5404\u4e2a\u7ef4\u5ea6\u7684\u4fe1\u606f\uff0c\u4ee5\u4e0b\u51e0\u4e2a\u7ef4\u5ea6\u7684\u4fe1\u606f\u53ef\u76f4\u63a5\u901a\u8fc7\u67e5\u8be2\u8bbe\u5907\u5b9e\u4f53\u76f4\u63a5\u83b7\u53d6"),(0,a.kt)("p",null,"\u5982\u4e0b\u4e3a\u4e00\u4e2a\u6307\u5b9a\u4e86\u8bbe\u5907\u6a21\u677f\u7684\u8bbe\u5907\u5b9e\u4f53\u7684\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "msg": "ok",\n    "data": {\n        "@type": "type.googleapis.com/api.device.v1.CreateDeviceResponse",\n        "deviceObject": {\n            "id": "bba16255-bf35-468a-b000-25181bfcdb02",\n            "plugin": "",\n            "source": "device",\n            "owner": "usr-33737945c2b718db4c309d633d2f",\n            "type": "device",\n            "mappers": [],\n            "configs": {\n                "attributes": {\n                    "define": {\n                        "fields": {\n                            "serial-2": {\n                                "define": {\n                                    "default_value": "xxxxxxxx",\n                                    "rw": "r"\n                                },\n                                "description": "\u8bbe\u5907\u6279\u6b21",\n                                "enabled": false,\n                                "enabled_search": false,\n                                "enabled_time_series": false,\n                                "id": "serial-2",\n                                "last_time": 1644460865172,\n                                "type": "string",\n                                "name":"\u5e8f\u5217\u53f7"\n                                "weight": 0\n                            }\n                        }\n                    },\n                    "description": "",\n                    "enabled": true,\n                    "enabled_search": true,\n                    "enabled_time_series": true,\n                    "id": "attributes",\n                    "last_time": 1644460865172,\n                    "type": "struct",\n                    "weight": 0\n                },\n                "telemetry": {\n                    "define": {\n                        "fields": {\n                            "voltage": {\n                                "define": {\n                                    "ext": {\n                                        "alias": "EM_BI",\n                                        "ratio_of_transformation": "0.001"\n                                    },\n                                    "max": "1000",\n                                    "min": "0",\n                                    "step": "0.1",\n                                    "unit": "v",\n                                    "unitName": "\u4f0f"\n                                },\n                                "description": "A\u76f8\u7535\u538b",\n                                "enabled": false,\n                                "enabled_search": false,\n                                "enabled_time_series": false,\n                                "id": "voltage",\n                                "last_time": 1644460950290,\n                                "type": "int",\n                                "name":"\u7535\u538b",\n                                "weight": 0\n                            }\n                        }\n                    },\n                    "description": "",\n                    "enabled": true,\n                    "enabled_search": true,\n                    "enabled_time_series": true,\n                    "id": "telemetry",\n                    "last_time": 1644460950290,\n                    "type": "struct",\n                    "weight": 0\n                }\n            },\n            "properties": {\n                "basicInfo": {\n                    "description": "test",\n                    "directConnection": false,\n                    "ext": {\n                        "commany": "qingcloud",\n                        "location": "wuhan"\n                    },\n                    "name": "sensor1",\n                    "parentId": "",\n                    "selfLearn": false,\n                    "templateId": "935b39e4-11fc-43d7-9c08-0eab66f94cc5"\n                },\n                "sysField": {\n                    "_createdAt": 1644461780472115700,\n                    "_enable": true,\n                    "_id": "bba16255-bf35-468a-b000-25181bfcdb02",\n                    "_owner": "usr-33737945c2b718db4c309d633d2f",\n                    "_source": "device",\n                    "_spacePath": "bba16255-bf35-468a-b000-25181bfcdb02",\n                    "_status": false,\n                    "_token": "OGIxMTdlMTYtZWE5Yy0zNDE4LWE3YTktYjhiM2U3Yzk3YzE1",\n                    "_updatedAt": 1644461780472115700\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"\u8bbe\u5907\u57fa\u672c\u4fe1\u606f"},"\u8bbe\u5907\u57fa\u672c\u4fe1\u606f"),(0,a.kt)("p",null,"\u8bbe\u5907\u57fa\u672c \u4fe1\u606f\u5305\u542b\u521b\u5efa\u5b9a\u4e49\u7684\u4fe1\u606f \u548c \u7cfb\u7edf\u751f\u6210\u7684\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"basicInfo": {  //\u521b\u5efa\u5b9a\u4e49\u7684\u8bbe\u5907\u57fa\u672c\u4fe1\u606f\n    "description": "test",       //\u8bbe\u5907\u8bf4\u660e\n    "directConnection": true,    // \u662f\u5426\u76f4\u8fde\n    "ext": {                     //\u6269\u5c55\u4fe1\u606f  \n        "commany": "qingcloud",  \n        "location": "wuhan" \n    },\n    "name": "sensor1",   //\u8bbe\u5907\u540d\u79f0\n    "parentId": "",      //\u8bbe\u5907\u7ec4ID\n    "selfLearn": false,  //\u81ea\u5b66\u4e60\u5f00\u5173\n    "templateId": "935b39e4-11fc-43d7-9c08-0eab66f94cc5" //\u8bbe\u5907\u6a21\u677fId\n},\n"sysField": {  //\u7cfb\u7edf\u751f\u4ea7\u7684\u4fe1\u606f\n    "_createdAt": 1644461780472115700,   //\u521b\u5efa\u65f6\u95f4\n    "_enable": true,                     //\u7981\u7528or \u542f\u7528  \uff08\u6682\u672a\u4f7f\u7528\uff09\n    "_id": "bba16255-bf35-468a-b000-25181bfcdb02", //\u8bbe\u5907\u5b9e\u4f53ID\n    "_owner": "usr-33737945c2b718db4c309d633d2f", //\u6240\u6709\u8005\n    "_source": "device",                          //\u6765\u6e90\u63d2\u4ef6\n    "_spacePath": "bba16255-bf35-468a-b000-25181bfcdb02", //\u7a7a\u95f4\u8def\u5f84\uff0c\u5185\u5bb9\u7531\u6240\u6709\u4e0a\u5c42\u7236ID\uff08\u8bbe\u5907\u7ec4\uff09\u62fc\u63a5\u800c\u6210\uff0c\uff08\u6b64\u5904\u6ca1\u6709\u8bbe\u5907\u7ec4\u6545\u662f\u81ea\u5df1\u7684id\uff09\u3002\n    "_status": false,   //\u72b6\u6001 \uff08\u6682\u672a\u4f7f\u7528\uff09\n    "_token": "OGIxMTdlMTYtZWE5Yy0zNDE4LWE3YTktYjhiM2U3Yzk3YzE1",  //\u8fde\u63a5\u7684token  \uff0c\u5982\u679c\u662f\u76f4\u8fde\u8bbe\u5907\u9700\u8fd4\u56de\u7ed9\u7528\u6237\u3002\n    "_updatedAt": 1644461780472115700  //\u66f4\u65b0\u65f6\u95f4\n}\n')),(0,a.kt)("h2",{id:"\u8bbe\u5907\u8fde\u63a5\u4fe1\u606f"},"\u8bbe\u5907\u8fde\u63a5\u4fe1\u606f"),(0,a.kt)("p",null,"\u8fde\u63a5\u4fe1\u606f\u7531\u8bbe\u5907\u6709\u6570\u636e\u8fde\u63a5\u7684\u65f6\u5019 \uff0c\u81ea\u52a8\u521b\u5efa\uff0c\u76f4\u8fde\u8bbe\u5907\u624d\u6709\u8fde\u63a5\u4fe1\u606f"),(0,a.kt)("p",null,"\u76ee\u524d\u6709\u5982\u4e0b\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")),(0,a.kt)("h2",{id:"\u8bbe\u5907\u6a21\u677f\u4fe1\u606f"},"\u8bbe\u5907\u6a21\u677f\u4fe1\u606f"),(0,a.kt)("p",null,"\u8bbe\u5907\u6307\u5b9a\u6a21\u677f\u521b\u5efa\u540e\uff0ccore \u7684\u64cd\u4f5c\u662f  \u5c06\u6a21\u677f\u5b9e\u4f53\u7684config \u90e8\u5206\u62f7\u8d1d\u81f3\u8bbe\u5907\u5b9e\u4f53\u7684config \u90e8\u5206\uff0c\u6b64\u90e8\u5206\u7ea6\u675f\u8bbe\u5907\u7684\u6570\u636e\uff0c\u662f\u6a21\u677f\u7ea6\u675f\u5b9a\u4e49\uff0c\u4e0d\u662f\u6a21\u677f\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"configs": {\n    "attributes": {    //\u5c5e\u6027\n        "define": {\n            "fields": {  //\u5c5e\u6027\u5217\u8868\u5b57\u6bb5\n                "serial-2": {   \n                    "define": {\n                        "default_value": "xxxxxxxx",\n                        "rw": "r"\n                    },\n                    "description": "\u8bbe\u5907\u6279\u6b21",\n                    "enabled": false,\n                    "enabled_search": false,\n                    "enabled_time_series": false,\n                    "id": "serial-2",\n                    "last_time": 1644460865172,\n                    "type": "string",\n                    "name": "\u5e8f\u5217\u53f7"\n                                "weight": 0\n                }\n            }\n        },\n        "description": "",\n        "enabled": true,\n        "enabled_search": true,\n        "enabled_time_series": true,\n        "id": "attributes",\n        "last_time": 1644460865172,\n        "type": "struct",\n        "weight": 0\n    },\n    "telemetry": {   //\u9065\u6d4b\n        "define": {\n            "fields": {   //\u8981\u6d4b\u5217\u8868\u5b57\u6bb5\n                "voltage": {\n                    "define": {\n                        "ext": {\n                            "alias": "EM_BI",\n                            "ratio_of_transformation": "0.001"\n                        },\n                        "max": "1000",\n                        "min": "0",\n                        "step": "0.1",\n                        "unit": "v",\n                        "unitName": "\u4f0f"\n                    },\n                    "description": "A\u76f8\u7535\u538b",\n                    "enabled": false,\n                    "enabled_search": false,\n                    "enabled_time_series": false,\n                    "id": "voltage",\n                    "last_time": 1644460950290,\n                    "type": "int",\n                    "name": "\u7535\u538b",\n                    "weight": 0\n                }\n            }\n        },\n        "description": "",\n        "enabled": true,\n        "enabled_search": true,\n        "enabled_time_series": true,\n        "id": "telemetry",\n        "last_time": 1644460950290,\n        "type": "struct",\n        "weight": 0\n    }\n},\n')),(0,a.kt)("h2",{id:"\u8bbe\u5907\u5173\u7cfb\u4fe1\u606f"},"\u8bbe\u5907\u5173\u7cfb\u4fe1\u606f"),(0,a.kt)("h3",{id:"\u5b9a\u4e49\u5173\u7cfb"},"\u5b9a\u4e49\u5173\u7cfb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")),(0,a.kt)("h3",{id:"\u83b7\u53d6\u5173\u7cfb"},"\u83b7\u53d6\u5173\u7cfb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}p.isMDXComponent=!0}}]);