"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9786],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),d=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},u=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=d(r),s=n,c=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return r?a.createElement(c,p(p({ref:e},u),{},{components:r})):a.createElement(c,p({ref:e},u))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var d=2;d<l;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},30393:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u67e5\u8be2\u5b9e\u4f53\u6620\u5c04",description:"GetMapper",sidebar_position:40},p=void 0,i={unversionedId:"api/core/method_GetMapper",id:"api/core/method_GetMapper",title:"\u67e5\u8be2\u5b9e\u4f53\u6620\u5c04",description:"GetMapper",source:"@site/docs/api/core/method_GetMapper.md",sourceDirName:"api/core",slug:"/api/core/method_GetMapper",permalink:"/api/core/method_GetMapper",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core/method_GetMapper.md",tags:[],version:"current",lastUpdatedAt:1655966912,formattedLastUpdatedAt:"2022/6/23",sidebarPosition:40,frontMatter:{title:"\u67e5\u8be2\u5b9e\u4f53\u6620\u5c04",description:"GetMapper",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"API\u5217\u8868",permalink:"/api/core/tag"},next:{title:"\u6279\u91cf\u66f4\u65b0\u5b9e\u4f53\u5c5e\u6027",permalink:"/api/core/method_PatchEntityPropsZ"}},o={},d=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1GetMapperResponse",id:"v1getmapperresponse",level:4},{value:"v1Mapper",id:"v1mapper",level:3}],u={toc:d};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,n.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u67e5\u8be2\u5b9e\u4f53\u6620\u5c04\u3002"),(0,n.kt)("h2",{id:"uri"},"URI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"get /entities/{entity_id}/mappers/{id}\n")),(0,n.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b")))),(0,n.kt)("p",null,"| entity_id | path | string | \u5b9e\u4f53id |  Required |\n| id | path | string | \u6620\u5c04id |  Required | "),(0,n.kt)("p",null,"| type | query | string | \u5b9e\u4f53\u7c7b\u578b |  false |\n| owner | query | string | \u7528\u6237id |  false |\n| source | query | string | \u6765\u6e90id |  false |"),(0,n.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,n.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"Object(",(0,n.kt)("a",{parentName:"td",href:"#v1GetMapperResponse"},"v1GetMapperResponse"),")")))),(0,n.kt)("h4",{id:"v1getmapperresponse"},"v1GetMapperResponse"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"entity_id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mapper"),(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04\u4fe1\u606f [ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,n.kt)("a",{parentName:"td",href:"#v1Mapper"},"v1Mapper")," ]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"owner"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6765\u6e90id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7c7b\u578b")))),(0,n.kt)("h3",{id:"v1mapper"},"v1Mapper"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"description"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04\u63cf\u8ff0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tql"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04tql\u8bed\u53e5")))))}m.isMDXComponent=!0}}]);