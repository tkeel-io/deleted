"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1819],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>v});var i=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var r=i.createContext({}),d=function(e){var t=i.useContext(r),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},c=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=d(l),v=n,m=h["".concat(r,".").concat(v)]||h[v]||o[v]||a;return l?i.createElement(m,p(p({ref:t},c),{},{components:l})):i.createElement(m,p({ref:t},c))}));function v(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,p=new Array(a);p[0]=h;var u={};for(var r in t)hasOwnProperty.call(t,r)&&(u[r]=t[r]);u.originalType=e,u.mdxType="string"==typeof e?e:n,p[1]=u;for(var d=2;d<a;d++)p[d]=l[d];return i.createElement.apply(null,p)}return i.createElement.apply(null,l)}h.displayName="MDXCreateElement"},50363:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>r,contentTitle:()=>p,default:()=>o,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var i=l(87462),n=(l(67294),l(3905));const a={},p=void 0,u={unversionedId:"api/appendix/plantuml/fluxswitch",id:"api/appendix/plantuml/fluxswitch",title:"fluxswitch",description:"1.3.4 \u7f51\u7edc\u670d\u52a1",source:"@site/docs/api/appendix/plantuml/fluxswitch.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/fluxswitch",permalink:"/en/api/appendix/plantuml/fluxswitch",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/fluxswitch.md",tags:[],version:"current",lastUpdatedAt:1656316982,formattedLastUpdatedAt:"6/27/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"data_query",permalink:"/en/api/appendix/plantuml/data_query"},next:{title:"metrics-monitor",permalink:"/en/api/appendix/plantuml/metrics-monitor"}},r={},d=[{value:"1.3.4 \u7f51\u7edc\u670d\u52a1",id:"134-\u7f51\u7edc\u670d\u52a1",level:3},{value:"1.3.4.1 \u6dfb\u52a0\u4ee3\u7406\u7f51\u5173",id:"1341-\u6dfb\u52a0\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.1.1 \u65f6\u5e8f\u56fe",id:"13411-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.1.2 \u72b6\u6001\u56fe",id:"13412-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13413-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.2 \u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173",id:"1342-\u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.2.1 \u65f6\u5e8f\u56fe",id:"13421-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.2.2 \u72b6\u6001\u56fe",id:"13422-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13423-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.3 \u542f\u7528\u4ee3\u7406\u7f51\u5173",id:"1343-\u542f\u7528\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.3.1 \u65f6\u5e8f\u56fe",id:"13431-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.3.2 \u72b6\u6001\u56fe",id:"13432-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13433-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.4 \u7981\u7528\u4ee3\u7406\u7f51\u5173",id:"1344-\u7981\u7528\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.4.1 \u65f6\u5e8f\u56fe",id:"13441-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.4.2 \u72b6\u6001\u56fe",id:"13442-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13443-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.5 \u7f16\u8f91\u4ee3\u7406\u7f51\u5173",id:"1345-\u7f16\u8f91\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.5.1 \u65f6\u5e8f\u56fe",id:"13451-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.5.2 \u72b6\u6001\u56fe",id:"13452-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.5.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13453-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.6 \u5220\u9664\u4ee3\u7406\u7f51\u5173",id:"1346-\u5220\u9664\u4ee3\u7406\u7f51\u5173",level:4},{value:"1.3.4.6.1 \u65f6\u5e8f\u56fe",id:"13461-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.6.2 \u72b6\u6001\u56fe",id:"13462-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.6.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13463-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.7 \u6dfb\u52a0\u4ee3\u7406\u670d\u52a1",id:"1347-\u6dfb\u52a0\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.7.1 \u65f6\u5e8f\u56fe",id:"13471-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.7.2 \u72b6\u6001\u56fe",id:"13472-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.7.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13473-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.8 \u8bbf\u95ee\u4ee3\u7406\u670d\u52a1",id:"1348-\u8bbf\u95ee\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.8.1 \u65f6\u5e8f\u56fe",id:"13481-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.8.2 \u72b6\u6001\u56fe",id:"13482-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.8.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13483-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.9 \u542f\u7528\u4ee3\u7406\u670d\u52a1",id:"1349-\u542f\u7528\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.9.1 \u65f6\u5e8f\u56fe",id:"13491-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.9.2 \u72b6\u6001\u56fe",id:"13492-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.9.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"13493-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.10 \u7981\u7528\u4ee3\u7406\u670d\u52a1",id:"13410-\u7981\u7528\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.10.1 \u65f6\u5e8f\u56fe",id:"134101-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.10.2 \u72b6\u6001\u56fe",id:"134102-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.10.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"134103-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.11 \u7f16\u8f91\u4ee3\u7406\u670d\u52a1",id:"13411-\u7f16\u8f91\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.11.1 \u65f6\u5e8f\u56fe",id:"134111-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.11.2 \u72b6\u6001\u56fe",id:"134112-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.11.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"134113-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5},{value:"1.3.4.12 \u5220\u9664\u4ee3\u7406\u670d\u52a1",id:"13412-\u5220\u9664\u4ee3\u7406\u670d\u52a1",level:4},{value:"1.3.4.12.1 \u65f6\u5e8f\u56fe",id:"134121-\u65f6\u5e8f\u56fe",level:5},{value:"1.3.4.12.2 \u72b6\u6001\u56fe",id:"134122-\u72b6\u6001\u56fe",level:5},{value:"1.3.4.12.3 \u8868\u793a\u5c42\u8bbe\u8ba1",id:"134123-\u8868\u793a\u5c42\u8bbe\u8ba1",level:5}],c={toc:d};function o(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"134-\u7f51\u7edc\u670d\u52a1"},"1.3.4 \u7f51\u7edc\u670d\u52a1"),(0,n.kt)("h4",{id:"1341-\u6dfb\u52a0\u4ee3\u7406\u7f51\u5173"},"1.3.4.1 \u6dfb\u52a0\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13411-\u65f6\u5e8f\u56fe"},"1.3.4.1.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV1i--wdNGkUx5xyV48RqFIdhPkvaEGnbB_itF9iRZDU9SyMDpoRl_HfVnF83JFMFvsmxEc4ZcURfnAX2U80gAQrCvxEMO6kAIK9f7ZsbcVJDi2zYAu6x56OpvvrJ7ZQDPyB0000",alt:null}),(0,n.kt)("h5",{id:"13412-\u72b6\u6001\u56fe"},"1.3.4.1.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13413-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.1.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1342-\u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173"},"1.3.4.2 \u6279\u91cf\u5bfc\u5165\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13421-\u65f6\u5e8f\u56fe"},"1.3.4.2.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VP3RQi9048RlzocMtFi2NlHTug4qK4HCH2-bhJK6nVL8yPIMrDQhHb0yhRxDpgo-XMu2eXPoFTytyyzFidhECf96LizOL9ETATehZUecpPlf7BaTxfkI3t5O1-ShG1wVyqMpO5Z9friGkpEi_y6shL65fHA4g6qq5dkuScYSOdLph3J0tq5v8hWdsVlv1fJdv8hw9nsh2nozHYBebT2TGED59VdmWVq0it7UZPGElnwEcLWxOlSf-s_OgmY-Z3J07W3VXf6XLGi_2Fkvzr895MkmmDxiqaxaRjbnqMR0V72cqDmB_dsF1vMUGmJjATPnoGa0",alt:null}),(0,n.kt)("h5",{id:"13422-\u72b6\u6001\u56fe"},"1.3.4.2.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13423-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.2.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1343-\u542f\u7528\u4ee3\u7406\u7f51\u5173"},"1.3.4.3 \u542f\u7528\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13431-\u65f6\u5e8f\u56fe"},"1.3.4.3.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV1qmdgWZKzsBtu-eGre-jFMpLn8yXZANtPkUJQt6Q-IPuiRdirV2Z7hsOprJoSiUxfsnjCvAz0rfII15C_UycpQ1cJhdqxg0P8l6gSydzK24OTuztdNjcSDZUY6W3q5yyMpZWbFk-Pp0G00",alt:null}),(0,n.kt)("h5",{id:"13432-\u72b6\u6001\u56fe"},"1.3.4.3.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13433-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.3.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1344-\u7981\u7528\u4ee3\u7406\u7f51\u5173"},"1.3.4.4 \u7981\u7528\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13441-\u65f6\u5e8f\u56fe"},"1.3.4.4.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV1yMIFGnYUx5p-Vq0Oq_MdhPYuaUGpbBpktF9lRZ5V9iyKDp-OlXPZrRCRwfnEMFLqxu-cS5UYQKf90YcTlUJPj0xBrJoVr0CaNZLEUpsg1Y4Ey-xnhsxE6HdH3m9w2-U9PnuIdNVEv0000",alt:null}),(0,n.kt)("h5",{id:"13442-\u72b6\u6001\u56fe"},"1.3.4.4.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13443-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.4.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1345-\u7f16\u8f91\u4ee3\u7406\u7f51\u5173"},"1.3.4.5 \u7f16\u8f91\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13451-\u65f6\u5e8f\u56fe"},"1.3.4.5.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV1izfPdqpOysRtu-OGseEbFMpTp8SbZA7_PkUNPt6QyIfujRdWsV-dJ_YQG6sQiVpfXsTC97SysJoL24yG1K4rhPpoTim9TKqeItCrmBwAh0NiKhgfZmjEk-Lm0",alt:null}),(0,n.kt)("h5",{id:"13452-\u72b6\u6001\u56fe"},"1.3.4.5.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13453-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.5.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1346-\u5220\u9664\u4ee3\u7406\u7f51\u5173"},"1.3.4.6 \u5220\u9664\u4ee3\u7406\u7f51\u5173"),(0,n.kt)("h5",{id:"13461-\u65f6\u5e8f\u56fe"},"1.3.4.6.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV2qOy7BcKkUx5xyV48RqFIdhPkvaEGnbB_itF9iRZDU9SyMDpoRl_HfVnF83JFMFvsmxEc4ZcURfnAX2U80gAQrCvxEMO6kAIK9xcQ8ugUJUe3aYyOf42z0WWPT5zZhC7tFEYOyxPhF1G00",alt:null}),(0,n.kt)("h5",{id:"13462-\u72b6\u6001\u56fe"},"1.3.4.6.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13463-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.6.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1347-\u6dfb\u52a0\u4ee3\u7406\u670d\u52a1"},"1.3.4.7 \u6dfb\u52a0\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"13471-\u65f6\u5e8f\u56fe"},"1.3.4.7.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZP1B2e9W58Nd_of-dBk11kt5h4Y8Y3Hgc4LXacNq8CgeaCf93oW8CdVJlUAeBPJbG0kauRtdEuV38KMk90cyKEGA4cNSeONAXQ6SICjYfaIYejDtRGCD3TJL6ydcorMn8aXyBWhYw8ZQ7gu3XlfOEaM8dqPPDXdoq0J5YmtgycwRhjxwv9AG_eDxxJFE6x48cZLShA5NzpjC3g1lG5VmD8erXGi4fjq43ElRb4xzrPdF2vdN32-qQtarsMjghhCdmJSApCuuFdw0nwqJdDEj9m--Gzy39YWeCx2lgEYWBiWJ",alt:null}),(0,n.kt)("h5",{id:"13472-\u72b6\u6001\u56fe"},"1.3.4.7.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13473-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.7.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1348-\u8bbf\u95ee\u4ee3\u7406\u670d\u52a1"},"1.3.4.8 \u8bbf\u95ee\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"13481-\u65f6\u5e8f\u56fe"},"1.3.4.8.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-sRtu-OGseFAdhPkL540gatCoK_DAK5KzRMi5cJXxtRC5xJ13GMfB4elIKqkuk40EKD3LjKEoHi5AuSMw_I-dhuFO0D75XIIFeVnbvvPdSvlHbK2S0vH-sj_xTC94Y6bSK56G0eWR4FgXV5IzatkVxfg2h0l5PgWqcirWJraf8FiQeX0O6a_NxUG20000",alt:null}),(0,n.kt)("h5",{id:"13482-\u72b6\u6001\u56fe"},"1.3.4.8.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13483-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.8.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"1349-\u542f\u7528\u4ee3\u7406\u670d\u52a1"},"1.3.4.9 \u542f\u7528\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"13491-\u65f6\u5e8f\u56fe"},"1.3.4.9.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV1qmdgWZKzsBtu-eGrYBXUIF8RobvrRdirjnglasUA6P_ENFkrl0hbXnlgd4vOzdT3nRFDKl9gG7G3Lj7R6qpahq3Mb985icBtbsRGDo5gUTsrxrj28hXZiOvWNdtLCUDerdmi0",alt:null}),(0,n.kt)("h5",{id:"13492-\u72b6\u6001\u56fe"},"1.3.4.9.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"13493-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.9.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"13410-\u7981\u7528\u4ee3\u7406\u670d\u52a1"},"1.3.4.10 \u7981\u7528\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"134101-\u65f6\u5e8f\u56fe"},"1.3.4.10.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV1yMIFGnYUx5p-Vq0Onbmj97aFvoyujp-OsurNoR773i_bBd_OtWTmmO_tJ2SkUJkXujdagNat83e1gMZlZwPmLw9fIaa0spDxoRDe6P2tFkxOzQsX4LmpsCSoBppecFEsQpmK0",alt:null}),(0,n.kt)("h5",{id:"134102-\u72b6\u6001\u56fe"},"1.3.4.10.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"134103-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.10.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"13411-\u7f16\u8f91\u4ee3\u7406\u670d\u52a1"},"1.3.4.11 \u7f16\u8f91\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"134111-\u65f6\u5e8f\u56fe"},"1.3.4.11.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV1izfPdqpOysRtu-OGsYBbSIF8OobzsRdasjnclacUB6vxDN_gqlmdaXXdhdqvOzdH2nxFDK_5gGdO0LDFQ6K_dh43Nb994b9kJSp9JWS40LDgtucL3uylMtkTxrt51HL4LWCs2A7Y_fmVAdRNyPUDaT4F10GZJyQnZmjEk-Lm0",alt:null}),(0,n.kt)("h5",{id:"134112-\u72b6\u6001\u56fe"},"1.3.4.11.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"134113-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.11.3 \u8868\u793a\u5c42\u8bbe\u8ba1"),(0,n.kt)("h4",{id:"13412-\u5220\u9664\u4ee3\u7406\u670d\u52a1"},"1.3.4.12 \u5220\u9664\u4ee3\u7406\u670d\u52a1"),(0,n.kt)("h5",{id:"134121-\u65f6\u5e8f\u56fe"},"1.3.4.12.1 \u65f6\u5e8f\u56fe"),(0,n.kt)("img",{src:"https://www.plantuml.com/plantuml/png/uof8B2h9JCuiICmhKL1wFcN5iuxjIWg9nGgbnQb5NAYIUoS-tptdsPpUfrqBmKhISaehYiipIv8pK1K-cxhXMU-wfxicAoc0bAKaSN61J5FGrRL3qgDWfV2qOy7BcKkUx5xyV48Rn5mk97aCvIyxjpoRsunNoRF53S_cBttQtmHomuprJoSiUpgXuzdcgNWr8Ji0gcdjZATpLg1hIaaYoit9EPcfm600EgPlnSk6nfUjlS_thkE2Yg8gcBtbsRGD40Nlz_H0kREMlsoSZ6ueE01XjZ_hcF2qQpuN0000",alt:null}),(0,n.kt)("h5",{id:"134122-\u72b6\u6001\u56fe"},"1.3.4.12.2 \u72b6\u6001\u56fe"),(0,n.kt)("p",null,"\u4e0d\u6d89\u53ca"),(0,n.kt)("h5",{id:"134123-\u8868\u793a\u5c42\u8bbe\u8ba1"},"1.3.4.12.3 \u8868\u793a\u5c42\u8bbe\u8ba1"))}o.isMDXComponent=!0}}]);