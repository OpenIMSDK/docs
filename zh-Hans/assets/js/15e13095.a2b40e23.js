"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[32421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),b=o,m=s["".concat(l,".").concat(b)]||s[b]||f[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},23385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={sidebar_position:1,title:"\u56de\u8c03\u8bf4\u660e",hide_title:!0},l="\ud83d\udcde \u56de\u8c03\u8bf4\u660e",c={unversionedId:"webhooks/introduction",id:"webhooks/introduction",title:"\u56de\u8c03\u8bf4\u660e",description:"\ud83d\udce2 OpenIM \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u56de\u8c03\u529f\u80fd\u3002\u5f53\u67d0\u4e2a\u7279\u5b9a\u4e8b\u4ef6\u53d1\u751f\u524d\u6216\u540e\uff0cOpenIMServer \u901a\u8fc7HTTP/HTTPS \u8bf7\u6c42\u65b9\u5f0f\uff0c\u4e3b\u52a8\u901a\u77e5 APP \u7684\u4e1a\u52a1\u670d\u52a1\u5668\u3002\u8fd9\u6837\uff0cAPP \u4e1a\u52a1\u670d\u52a1\u5668\u53ef\u4ee5\u4f9d\u636e\u8fd9\u4e9b\u56de\u8c03\u6765\u5e72\u9884\u4e8b\u4ef6\u7684\u540e\u7eed\u6d41\u7a0b\u6216\u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002",source:"@site/docs/restapi/webhooks/introduction.mdx",sourceDirName:"webhooks",slug:"/webhooks/introduction",permalink:"/zh-Hans/restapi/webhooks/introduction",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1725247657,formattedLastUpdatedAt:"2024\u5e749\u67082\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u56de\u8c03\u8bf4\u660e",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",permalink:"/zh-Hans/restapi/apis/messageManagement/batchSendMessage"},next:{title:"\u56de\u8c03\u4f8b\u5b50",permalink:"/zh-Hans/restapi/webhooks/example"}},u={},s=[{value:"\ud83d\udcd1 \u56de\u8c03\u5206\u7c7b",id:"-\u56de\u8c03\u5206\u7c7b",level:2},{value:"\u2699\ufe0f \u914d\u7f6e\u8bf4\u660e",id:"\ufe0f-\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\ud83d\udd04 \u56de\u8c03\u534f\u8bae",id:"-\u56de\u8c03\u534f\u8bae",level:2}],f={toc:s},b="wrapper";function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(b,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-\u56de\u8c03\u8bf4\u660e"},"\ud83d\udcde \u56de\u8c03\u8bf4\u660e"),(0,n.kt)("p",null,"\ud83d\udce2 ",(0,n.kt)("strong",{parentName:"p"},"OpenIM")," \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u56de\u8c03\u529f\u80fd\u3002\u5f53\u67d0\u4e2a\u7279\u5b9a\u4e8b\u4ef6\u53d1\u751f\u524d\u6216\u540e\uff0c",(0,n.kt)("strong",{parentName:"p"},"OpenIMServer")," \u901a\u8fc7HTTP/HTTPS \u8bf7\u6c42\u65b9\u5f0f\uff0c\u4e3b\u52a8\u901a\u77e5 APP \u7684\u4e1a\u52a1\u670d\u52a1\u5668\u3002\u8fd9\u6837\uff0cAPP \u4e1a\u52a1\u670d\u52a1\u5668\u53ef\u4ee5\u4f9d\u636e\u8fd9\u4e9b\u56de\u8c03\u6765\u5e72\u9884\u4e8b\u4ef6\u7684\u540e\u7eed\u6d41\u7a0b\u6216\u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002"),(0,n.kt)("h2",{id:"-\u56de\u8c03\u5206\u7c7b"},"\ud83d\udcd1 \u56de\u8c03\u5206\u7c7b"),(0,n.kt)("p",null,"\u6839\u636e\u5904\u7406\u65f6\u673a\uff0c\u56de\u8c03\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udeab ",(0,n.kt)("strong",{parentName:"p"},"\u53d1\u9001\u4e8b\u4ef6\u53d1\u751f\u4e4b\u524d\u7684\u56de\u8c03"),"\uff1a\u6b64\u7c7b\u56de\u8c03 (before \u7c7b\u578b) \u65e8\u5728\u8ba9 APP \u4e1a\u52a1\u670d\u52a1\u5668\u5e72\u9884\u4e8b\u4ef6\u5904\u7406\uff0c\u4f8b\u5982\uff0c\u5bf9\u6d88\u606f\u8fdb\u884c\u654f\u611f\u8bcd\u8fc7\u6ee4\u3002",(0,n.kt)("strong",{parentName:"p"},"OpenIMServer")," \u4f1a\u6839\u636e\u56de\u8c03\u8fd4\u56de\u6765\u786e\u5b9a\u540e\u7eed\u6d41\u7a0b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udce4 ",(0,n.kt)("strong",{parentName:"p"},"\u53d1\u9001\u4e8b\u4ef6\u53d1\u751f\u4e4b\u540e\u7684\u901a\u77e5"),"\uff1a\u6b64\u7c7b\u56de\u8c03 (after \u7c7b\u578b) \u4e3b\u8981\u7528\u4e8e\u901a\u77e5 APP \u4e1a\u52a1\u670d\u52a1\u5668\u8fdb\u884c\u6570\u636e\u540c\u6b65\uff0c\u4f8b\u5982\uff0c\u7528\u6237\u52a0\u5165\u7fa4\u7ec4\u3002\u6b64\u65f6\uff0c",(0,n.kt)("strong",{parentName:"p"},"OpenIMServer")," \u4f1a\u5ffd\u7565\u56de\u8c03\u7684\u8fd4\u56de\u548c\u9519\u8bef\u7801\u3002"))),(0,n.kt)("h2",{id:"\ufe0f-\u914d\u7f6e\u8bf4\u660e"},"\u2699\ufe0f \u914d\u7f6e\u8bf4\u660e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"callback:\n  url:\n  beforeCreateGroup:\n    enable: true\n    timeout: 5\n    failedContinue: true\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"url\uff1aAPP\u4e1a\u52a1\u670d\u52a1\u5668 callback \u5730\u5740\uff0c\u652f\u6301HTTP/HTTPS"),(0,n.kt)("li",{parentName:"ul"},"enable\uff1a\u662f\u5426\u5f00\u542f\u6b64\u56de\u8c03\uff0ctrue \u4e3a\u5f00\u542f"),(0,n.kt)("li",{parentName:"ul"},"timeout\uff1a\u54cd\u5e94\u8d85\u65f6\u65f6\u95f4\uff08\u79d2\uff09"),(0,n.kt)("li",{parentName:"ul"},"failedContinue\uff1a\u8d85\u65f6\u6216\u8005API\u5931\u8d25\u540e\u662f\u5426\u7ee7\u7eed\u6267\u884c\u6d41\u7a0b\uff0c\u4e00\u822c\u53ea\u5bf9before\u7c7b\u578b\u56de\u8c03\u6709\u6548\uff0ctrue \u4e3a\u7ee7\u7eed\u6267\u884c")),(0,n.kt)("h2",{id:"-\u56de\u8c03\u534f\u8bae"},"\ud83d\udd04 \u56de\u8c03\u534f\u8bae"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OpenIMServer")," \u5229\u7528\u7b2c\u4e09\u65b9\u56de\u8c03\u673a\u5236\uff0c\u57fa\u4e8e ",(0,n.kt)("strong",{parentName:"p"},"HTTP/HTTPS")," \u534f\u8bae\u3002\u5f53\u53d1\u8d77\u56de\u8c03\u8bf7\u6c42\u65f6\uff0c",(0,n.kt)("strong",{parentName:"p"},"OpenIMServer")," \u91c7\u7528 ",(0,n.kt)("strong",{parentName:"p"},"POST")," \u8bf7\u6c42\u65b9\u6cd5\u6765\u901a\u77e5 APP \u4e1a\u52a1\u670d\u52a1\u5668\u3002\u8fd9\u4e9b\u8bf7\u6c42\u7684\u5177\u4f53\u5185\u5bb9\u5c06\u76f4\u63a5\u5305\u542b\u5728\u8bf7\u6c42\u5305\u4f53\u4e2d\u3002"))}m.isMDXComponent=!0}}]);