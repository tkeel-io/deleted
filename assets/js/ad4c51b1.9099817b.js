"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>v});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),d=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=d(n),v=r,s=m["".concat(u,".").concat(v)]||m[v]||c[v]||a;return n?l.createElement(s,i(i({ref:t},o),{},{components:n})):l.createElement(s,i({ref:t},o))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var l=n(87462),r=(n(67294),n(3905));const a={},i=void 0,p={unversionedId:"api/appendix/plantuml/plugin-manager-admin",id:"api/appendix/plantuml/plugin-manager-admin",title:"plugin-manager-admin",description:"1.1.1 \u63d2\u4ef6\u7ba1\u7406",source:"@site/docs/api/appendix/plantuml/plugin-manager-admin.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/plugin-manager-admin",permalink:"/api/appendix/plantuml/plugin-manager-admin",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/plugin-manager-admin.md",tags:[],version:"current",lastUpdatedAt:1656316982,formattedLastUpdatedAt:"2022/6/27",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metrics-monitor",permalink:"/api/appendix/plantuml/metrics-monitor"},next:{title:"plugin-manager-tenant",permalink:"/api/appendix/plantuml/plugin-manager-tenant"}},u={},d=[{value:"1.1.1 \u63d2\u4ef6\u7ba1\u7406",id:"111-\u63d2\u4ef6\u7ba1\u7406",level:3},{value:"1.1.1.1 \u521b\u5efa\u63d2\u4ef6\u6e90",id:"1111-\u521b\u5efa\u63d2\u4ef6\u6e90",level:4},{value:"1.1.1.1.1 \u65f6\u5e8f\u56fe",id:"11111-\u65f6\u5e8f\u56fe",level:5},{value:"1.1.1.1.2 \u72b6\u6001\u56fe",id:"11112-\u72b6\u6001\u56fe",level:5},{value:"1.1.1.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"11113-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.1.1.2 \u5b89\u88c5\u63d2\u4ef6",id:"1112-\u5b89\u88c5\u63d2\u4ef6",level:4},{value:"1.1.1.2.1 \u65f6\u5e8f\u56fe",id:"11121-\u65f6\u5e8f\u56fe",level:5},{value:"1.1.1.2.2 \u72b6\u6001\u56fe",id:"11122-\u72b6\u6001\u56fe",level:5},{value:"1.1.1.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"11123-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.1.1.3 \u5378\u8f7d\u63d2\u4ef6",id:"1113-\u5378\u8f7d\u63d2\u4ef6",level:4},{value:"1.1.1.3.1 \u65f6\u5e8f\u56fe",id:"11131-\u65f6\u5e8f\u56fe",level:5},{value:"1.1.1.3.2 \u72b6\u6001\u56fe",id:"11132-\u72b6\u6001\u56fe",level:5},{value:"1.1.1.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"11133-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.1.1.4 \u67e5\u770b\u63d2\u4ef6\u8be6\u60c5",id:"1114-\u67e5\u770b\u63d2\u4ef6\u8be6\u60c5",level:4},{value:"1.1.1.4.1 \u65f6\u5e8f\u56fe",id:"11141-\u65f6\u5e8f\u56fe",level:5},{value:"1.1.1.4.2 \u72b6\u6001\u56fe",id:"11142-\u72b6\u6001\u56fe",level:5},{value:"1.1.1.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"11143-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.1.1.5 \u67e5\u770b\u63d2\u4ef6\u542f\u7528\u5217\u8868",id:"1115-\u67e5\u770b\u63d2\u4ef6\u542f\u7528\u5217\u8868",level:4},{value:"1.1.1.5.1 \u65f6\u5e8f\u56fe",id:"11151-\u65f6\u5e8f\u56fe",level:5},{value:"1.1.1.5.2 \u72b6\u6001\u56fe",id:"11152-\u72b6\u6001\u56fe",level:5},{value:"1.1.1.5.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"11153-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5}],o={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"111-\u63d2\u4ef6\u7ba1\u7406"},"1.1.1 \u63d2\u4ef6\u7ba1\u7406"),(0,r.kt)("h4",{id:"1111-\u521b\u5efa\u63d2\u4ef6\u6e90"},"1.1.1.1 \u521b\u5efa\u63d2\u4ef6\u6e90"),(0,r.kt)("h5",{id:"11111-\u65f6\u5e8f\u56fe"},"1.1.1.1.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKddRCVhfxrxF-IKzsRtksQm8NL0Aa9ZirDGUeucNdbcTpcv4bu9gVBLZuSbKFLiq8DTsTJ_kdGTGyxPZ-Ok4AP6KfII0bixSycxRXsTGDpthNFTqr6LaUx62uApicFEsQpyNba9gN0lGD0000",alt:null}),(0,r.kt)("h5",{id:"11112-\u72b6\u6001\u56fe"},"1.1.1.1.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"11113-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.1.1.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,r.kt)("h4",{id:"1112-\u5b89\u88c5\u63d2\u4ef6"},"1.1.1.2 \u5b89\u88c5\u63d2\u4ef6"),(0,r.kt)("h5",{id:"11121-\u65f6\u5e8f\u56fe"},"1.1.1.2.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdgxhVB6uzLd_f2Uxjt51HK4AibDJSu3IBpktF9lRZ2m1r_baH_UBlNkJCu16F-rfnQe4BFbi--wdNGkUx9lxOkkqztjwiakBI_9pCwjIdytUycpQXif4eBEGz6QavkJ2dVLqrvJdKrPmvUJd5oWa5bVc9NCf004scvujRdWsV-cp6UkVJbW6rRkkvrd71DmQDgzusjO3yRS6n2b0ZxwSEU5nG-EB_ZbFUwU26DlNFv-oKPChDIy5sOqfII0387gcRdZMk-xfhid8yk1GXWTjnuIdNVEvk1o0XW2Z0000",alt:null}),(0,r.kt)("h5",{id:"11122-\u72b6\u6001\u56fe"},"1.1.1.2.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"11123-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.1.1.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,r.kt)("h4",{id:"1113-\u5378\u8f7d\u63d2\u4ef6"},"1.1.1.3 \u5378\u8f7d\u63d2\u4ef6"),(0,r.kt)("h5",{id:"11131-\u65f6\u5e8f\u56fe"},"1.1.1.3.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdlRkUB5txxF-IKzsR-E2Ye8KPAUcvW2bNtPkUJQt6La2hlFPuePdyvS-cx7-wOHbp-PqFby-_rd7zgSJrZ-ViWAx-iqhNavfWDYayRHZmSkPIu16lvmvuN53uul-EKzxfu8Osu7wDseY6v2HcfCBT-ZJNLFGp0Tx2UwFZWbFk-PpSJcavgK0_Gi0",alt:null}),(0,r.kt)("h5",{id:"11132-\u72b6\u6001\u56fe"},"1.1.1.3.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"11133-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.1.1.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,r.kt)("h4",{id:"1114-\u67e5\u770b\u63d2\u4ef6\u8be6\u60c5"},"1.1.1.4 \u67e5\u770b\u63d2\u4ef6\u8be6\u60c5"),(0,r.kt)("h5",{id:"11141-\u65f6\u5e8f\u56fe"},"1.1.1.4.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdirV-dnEzxF-IKzsRtknVjcpvbOkg1n8MNPgQWvGqSlEBS_cDYDB8FGlRW0Q0T7_RCRwfnEMFLqxu-cS5SYAKvA02b_qRN_QFmsYyCd-XSyQroCh0JiCQ1goExWSKlDIWAu60000",alt:null}),(0,r.kt)("h5",{id:"11142-\u72b6\u6001\u56fe"},"1.1.1.4.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"11143-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.1.1.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,r.kt)("h4",{id:"1115-\u67e5\u770b\u63d2\u4ef6\u542f\u7528\u5217\u8868"},"1.1.1.5 \u67e5\u770b\u63d2\u4ef6\u542f\u7528\u5217\u8868"),(0,r.kt)("h5",{id:"11151-\u65f6\u5e8f\u56fe"},"1.1.1.5.1 \u65f6\u5e8f\u56fe"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIejJYrIqDMrKoWgJKa1CgqKdirV-dnEzxF-IKzsRtiwOVtpAIkUTan_iN055rG5I75sQceEKEdBpYtFvZOZIwGa0OLVz6r_sZyDQWA6NhX5oCgUTsrxrj28h0piCA1hCDt1vP2Qbm9qEm00",alt:null}),(0,r.kt)("h5",{id:"11152-\u72b6\u6001\u56fe"},"1.1.1.5.2 \u72b6\u6001\u56fe"),(0,r.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,r.kt)("h5",{id:"11153-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.1.1.5.3 \u8868\u793a\u5c42\u8bbe\u8ba1"))}c.isMDXComponent=!0}}]);