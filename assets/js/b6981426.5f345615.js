"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),g=n,s=c["".concat(u,".").concat(g)]||c[g]||m[g]||l;return r?a.createElement(s,i(i({ref:t},d),{},{components:r})):a.createElement(s,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u5220\u9664\u8def\u7531\u76ee\u6807",description:"DeleteRuleTarget"},i=void 0,o={unversionedId:"api/rule_manager/method_DeleteRuleTarget",id:"api/rule_manager/method_DeleteRuleTarget",title:"\u5220\u9664\u8def\u7531\u76ee\u6807",description:"DeleteRuleTarget",source:"@site/docs/api/rule_manager/method_DeleteRuleTarget.md",sourceDirName:"api/rule_manager",slug:"/api/rule_manager/method_DeleteRuleTarget",permalink:"/api/rule_manager/method_DeleteRuleTarget",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rule_manager/method_DeleteRuleTarget.md",tags:[],version:"current",lastUpdatedAt:1655886579,formattedLastUpdatedAt:"2022/6/22",frontMatter:{title:"\u5220\u9664\u8def\u7531\u76ee\u6807",description:"DeleteRuleTarget"},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664\u8def\u7531",permalink:"/api/rule_manager/method_DeleteRule"},next:{title:"\u9519\u8bef\u4fe1\u606f\u8ba2\u9605",permalink:"/api/rule_manager/method_ErrSubscribe"}},u={},p=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,n.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u5220\u9664\u8def\u7531\u76ee\u6807\u3002"),(0,n.kt)("h2",{id:"uri"},"URI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"delete /rules/{id}/target/{target_id}\n")),(0,n.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8def\u7531id"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target_id"),(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u76ee\u6807id"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,n.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"OK"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0}}]);