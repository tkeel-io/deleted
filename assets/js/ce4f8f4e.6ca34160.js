"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(n),s=l,f=d["".concat(o,".").concat(s)]||d[s]||c[s]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={},i=void 0,p={unversionedId:"api/appendix/plantuml/tenant-manager-admin",id:"api/appendix/plantuml/tenant-manager-admin",title:"tenant-manager-admin",description:"1.2.2 \u79df\u6237\u7ba1\u7406",source:"@site/docs/api/appendix/plantuml/tenant-manager-admin.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/tenant-manager-admin",permalink:"/api/appendix/plantuml/tenant-manager-admin",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/tenant-manager-admin.md",tags:[],version:"current",lastUpdatedAt:1656377675,formattedLastUpdatedAt:"2022/6/28",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"server-monitor",permalink:"/api/appendix/plantuml/server-monitor"},next:{title:"user-manager-tenant",permalink:"/api/appendix/plantuml/user-manager-tenant"}},o={},u=[{value:"1.2.2 \u79df\u6237\u7ba1\u7406",id:"122-\u79df\u6237\u7ba1\u7406",level:3},{value:"1.2.2.1 \u521b\u5efa\u79df\u6237\u7a7a\u95f4",id:"1221-\u521b\u5efa\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.1.1 \u65f6\u5e8f\u56fe",id:"12211-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.2 \u7f16\u8f91\u79df\u6237\u7a7a\u95f4",id:"1222-\u7f16\u8f91\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.2.1 \u65f6\u5e8f\u56fe",id:"12221-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.3 \u5220\u9664\u79df\u6237\u7a7a\u95f4",id:"1223-\u5220\u9664\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.3.1 \u65f6\u5e8f\u56fe",id:"12231-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.4 \u67e5\u770b\u7528\u6237\u5217\u8868",id:"1224-\u67e5\u770b\u7528\u6237\u5217\u8868",level:4},{value:"1.2.2.4.1 \u65f6\u5e8f\u56fe",id:"12241-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.5 \u91cd\u7f6e\u7528\u6237\u5bc6\u7801",id:"1225-\u91cd\u7f6e\u7528\u6237\u5bc6\u7801",level:4},{value:"1.2.2.5.1 \u65f6\u5e8f\u56fe",id:"12251-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.6 \u5355\u70b9\u767b\u5f55",id:"1226-\u5355\u70b9\u767b\u5f55",level:4},{value:"1.2.2.6.1 \u65f6\u5e8f\u56fe",id:"12261-\u65f6\u5e8f\u56fe",level:5}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"122-\u79df\u6237\u7ba1\u7406"},"1.2.2 \u79df\u6237\u7ba1\u7406"),(0,l.kt)("h4",{id:"1221-\u521b\u5efa\u79df\u6237\u7a7a\u95f4"},"1.2.2.1 \u521b\u5efa\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12211-\u65f6\u5e8f\u56fe"},"1.2.2.1.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZP7FIiGm48VlVOhGqmhR5-YXu74HKTGNc4q63PicSP8AVO5b4GGF7htipPDNdyZjQzZf7wI8tRqDoJVVBva16Hs9vktZiFiI44GLa18F5BNK7cmKwVdrwXRf2MbnWMZEKi7OfYsdMFEvRrwtX_UNx-VzWYgba0Osecq9TcY9YO88QmWeqiiwF9gK2Lg3lF99mk5PmUwyRrgfvPsE1fStM09j4hxAYedm7tB2P4MVa4j2Y3YyI9HEjRyuXIHdS1O7fOHtHiiwxs6FLEeGjBD2sq4pqmkgRB5k-CS3Vc7nmDFZl5D2xibL_azxD_HGXspqS7tKDRvbsis-yUTstjLjcJ1u6t3OAxl6eny0",alt:null}),(0,l.kt)("h4",{id:"1222-\u7f16\u8f91\u79df\u6237\u7a7a\u95f4"},"1.2.2.2 \u7f16\u8f91\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12221-\u65f6\u5e8f\u56fe"},"1.2.2.2.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/TOyz2i9044Rxd6995I6vG8e5oo2Yg1UOPATOyhVERWGl82885fOswQniFP79DSp6D17jXfd7zxw1n9J4skkzEJuPQ5Pf94S16Pb81OLXxdGPhP5sIDuCCPkup69fDuwnzb6tbqDpExzEjKUL44W3Qx3e29iX4tG468X18tFdUxtDN4jG3Cb2ZVA6bMFx1DpgmazE9FoDD393VuKvKEhOMy17ad_e20hunn5Mgkk4GqsMbw9xxOli_R-uNXvmsp8arAeiDBu1",alt:null}),(0,l.kt)("h4",{id:"1223-\u5220\u9664\u79df\u6237\u7a7a\u95f4"},"1.2.2.3 \u5220\u9664\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12231-\u65f6\u5e8f\u56fe"},"1.2.2.3.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/bP11Yi8m68NtEKNeHbta0YuABcKG1K-G9Wy94vlu9nMyW0j1y01kUW5lDUCrfgaTfHkfk-JbU-_zVwIAZdWLGCnBYaOPByl8izbglWRjGUClm4uopcNWtysnZzrlzVro_BsUVqxrc2gjGHqRKJP4oZ0AJCie2nd0iyKXx6oM22gaMdh6Khd8K_RqOPhhJkjbl1vxiiWVELF2rktHzGfo5jmxQzHX4DyMjgODkSgBjrODY_Xl7JMR9D_MQGpXMz0EJ4vZVMJmjjgOyjtwxKSJWdTb04itaQUQf_O7",alt:null}),(0,l.kt)("h4",{id:"1224-\u67e5\u770b\u7528\u6237\u5217\u8868"},"1.2.2.4 \u67e5\u770b\u7528\u6237\u5217\u8868"),(0,l.kt)("h5",{id:"12241-\u65f6\u5e8f\u56fe"},"1.2.2.4.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/POzD2i9038NtSuhGLLtq0bqKBDs82e9uW3WDE3Zq9pCLl80BGV00Rde1RwMzXZErADNTI_BblKJi27DYM2XZDuPOeBGbG-DbXMoLL1KM5eBfQhOcFX27So8z2G3GmDx9CTRTs-vwUjukZtCRSfCxxu6rL3Z2UoX98aUBMpG4mV9eQXru8ak5puqIRniprGqPAtmH9QFjpspKZP8iZILg7VVVGFzEblxk0fEfoi95-p3Gwjzdo7zZmm4U_lPU",alt:null}),(0,l.kt)("h4",{id:"1225-\u91cd\u7f6e\u7528\u6237\u5bc6\u7801"},"1.2.2.5 \u91cd\u7f6e\u7528\u6237\u5bc6\u7801"),(0,l.kt)("h5",{id:"12251-\u65f6\u5e8f\u56fe"},"1.2.2.5.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NO_12S9G38RlcIBqL0zTe8U2fHSHGHG7Y6t0OcbhygguW0T1S00lNS2jj6ludXQbtf8_N_u_WGrJne8BLZOhPPcJwg6I381IKmasLeEQnEHfNbDfq1lF9qkMFOi_PIv67Y8fRcqvnBfxsrrFpzlbSMvzQJARqhE6IqiuZpnboCZGcfJHcnrrLtYEI6805nn4pZSKtZMi1bmJH8FrxsoW1b4IXoaLHOXDRGCOtMkGnF_RAAnrLThqddk_--VLt_01-oCSzzDU",alt:null}),(0,l.kt)("h4",{id:"1226-\u5355\u70b9\u767b\u5f55"},"1.2.2.6 \u5355\u70b9\u767b\u5f55"),(0,l.kt)("h5",{id:"12261-\u65f6\u5e8f\u56fe"},"1.2.2.6.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/TLDBJiCm4Dtx52CMg5tW4igt2qI505KiG7oNo4gcr2BOrNZ2xm0ia90u09jUW5i1ry2Eaq2GkdJqlZEJ7SUAkBZDXKhP4XGEIKpz9vtggJ8C2yFZqIdI7LBd437lBW0e1sEoXjkuxu_Pzzlpr_lhvykiGqMM8LNW-10YQ2zjbzG193Atrzg8yhcq7J43M95mi7S6FQiAdlG6ZCOelj9PZ-qD6X5XZKXV0c6c2LE-AYY7JdyvwTQImMu0gx-GAi3U0oCPbOyoDApvyPZidIxDroIKeS3d4lDWjV1w0AUAjJLrtSgWxh8XVGdRsCEzvWc4NfRqKqc4r6ROb9eVR5F2XQR7iKQ2HJX0FlT6S1dqXYsztQ0tFtcTR4jUg5ndNki4tTGQXn0KHsPicpGrDbcM-veS7z4keM8ihKC8W-IVC4nJT0xEMlk98qgIt-53frnB5sHZ6PcHsBuDVmKgoiQr_pkIf1ycEmdjuWAgqVwbr4cWqWm6Vg--OEiyN56IXDX1a_dV0CGF",alt:null}))}c.isMDXComponent=!0}}]);