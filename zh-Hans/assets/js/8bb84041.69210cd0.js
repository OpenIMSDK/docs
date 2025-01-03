"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[19560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),k=a,f=s["".concat(l,".").concat(k)]||s[k]||m[k]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},80624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={title:"API\u8bf4\u660e",sidebar_position:1},l="OpenIM Server APIs",c={unversionedId:"apis/introduction",id:"apis/introduction",title:"API\u8bf4\u660e",description:"\ud83d\ude80 REST API",source:"@site/docs/restapi/apis/introduction.mdx",sourceDirName:"apis",slug:"/apis/introduction",permalink:"/zh-Hans/restapi/apis/introduction",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1735884673,formattedLastUpdatedAt:"2025\u5e741\u67083\u65e5",sidebarPosition:1,frontMatter:{title:"API\u8bf4\u660e",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u83b7\u53d6\u7ba1\u7406\u5458token",permalink:"/zh-Hans/restapi/apis/authenticationManagement/getAdminToken"}},u={},s=[{value:"\ud83d\ude80 REST API",id:"-rest-api",level:2},{value:"\u534f\u8bae\u8bf4\u660e",id:"\u534f\u8bae\u8bf4\u660e",level:3},{value:"\u91cd\u8981\u8bf4\u660e",id:"\u91cd\u8981\u8bf4\u660e",level:3},{value:"API\u8c03\u7528\u8fc7\u7a0b",id:"api\u8c03\u7528\u8fc7\u7a0b",level:3},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:3}],m={toc:s},k="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"openim-server-apis"},"OpenIM Server APIs"),(0,n.kt)("h2",{id:"-rest-api"},"\ud83d\ude80 REST API"),(0,n.kt)("p",null,"OpenIM Server \u63d0\u4f9b\u4e86 ",(0,n.kt)("strong",{parentName:"p"},"REST API"),"\uff0c\u5141\u8bb8\u60a8\u4ee5\u8d85\u7ea7\u6743\u9650\u76f4\u63a5\u4ece\u670d\u52a1\u7aef\u53d1\u8d77\u8bf7\u6c42\u64cd\u4f5c IM \u7cfb\u7edf\uff0c\u4ee5\u589e\u5f3a\u4e1a\u52a1\u529f\u80fd\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udee0 ",(0,n.kt)("strong",{parentName:"li"},"\u521b\u5efa\u7fa4\u7ec4")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,n.kt)("strong",{parentName:"li"},"\u63a8\u9001\u6d88\u606f"))),(0,n.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff0c\u4f8b\u5982\uff0c\u7cfb\u7edf\u81ea\u52a8\u5411\u65b0\u6ce8\u518c\u7528\u6237\u53d1\u9001\u6b22\u8fce\u6d88\u606f\u3002"),(0,n.kt)("h3",{id:"\u534f\u8bae\u8bf4\u660e"},"\u534f\u8bae\u8bf4\u660e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u534f\u8bae"),"\uff1a\u4f7f\u7528\u6807\u51c6\u7684 HTTP \u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6570\u636e\u683c\u5f0f"),"\uff1a\u8bf7\u6c42\u548c\u54cd\u5e94\u5747\u4e3a JSON \u683c\u5f0f")),(0,n.kt)("h3",{id:"\u91cd\u8981\u8bf4\u660e"},"\u91cd\u8981\u8bf4\u660e"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"API \u5730\u5740"),"\uff1a"),(0,n.kt)("p",{parentName:"blockquote"},"\u8bf7\u6c42 URL \u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"{API_ADDRESS}")," \u4e3a OpenIM Server \u5bf9\u5916\u670d\u52a1\u7684 API \u5730\u5740\uff0c\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"http://{your_im_server_ip}:10002"),"\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6743\u9650\u8981\u6c42"),"\uff1a"),(0,n.kt)("p",{parentName:"blockquote"},"\u8c03\u7528 ",(0,n.kt)("strong",{parentName:"p"},"REST API")," \u9700\u8981\u4ee5 ",(0,n.kt)("strong",{parentName:"p"},"APP \u7ba1\u7406\u5458")," \u8eab\u4efd\u8fdb\u884c\uff0c\u6b64\u7528\u6237\u5177\u6709\u8d85\u7ea7\u6743\u9650\u3002OpenIM Server \u5185\u7f6e\u4e86\u4e00\u4e2a APP \u7ba1\u7406\u5458\uff0c\u5176 ",(0,n.kt)("inlineCode",{parentName:"p"},"userID")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"imAdmin"),"\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\u9650\u5236"),"\uff1a"),(0,n.kt)("p",{parentName:"blockquote"},"API \u8bf7\u6c42\u53c2\u6570\u4e2d\u6240\u6709\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"array")," \u7c7b\u578b\u7684\u6700\u5927\u957f\u5ea6\u9650\u5236\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"1000"),"\u3002")),(0,n.kt)("h3",{id:"api\u8c03\u7528\u8fc7\u7a0b"},"API\u8c03\u7528\u8fc7\u7a0b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u83b7\u53d6APP\u7ba1\u7406\u5458 Token"),"\uff1a"),(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/restapi/apis/authenticationManagement/getAdminToken"},(0,n.kt)("inlineCode",{parentName:"a"},"user_token API"))," \u83b7\u53d6\u7ba1\u7406\u5458 Token\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8c03\u7528\u5176\u4ed6 API"),"\uff1a"),(0,n.kt)("p",{parentName:"li"},"\u5c06\u83b7\u53d6\u5230\u7684 APP \u7ba1\u7406\u5458 Token \u6dfb\u52a0\u5230 HTTP \u8bf7\u6c42\u7684 Header \u4e2d\uff0c\u7136\u540e\u8c03\u7528\u5176\u4ed6 REST API\u3002"))),(0,n.kt)("h3",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,n.kt)("p",null,"\u4e3a\u5b89\u5168\u8d77\u89c1\uff0cREST API \u53ea\u80fd\u5728\u670d\u52a1\u7aef\u4f7f\u7528\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528\u76f8\u5e94\u7684\u5ba2\u6237\u7aef SDK \u8fdb\u884c\u64cd\u4f5c\u3002"))}f.isMDXComponent=!0}}]);