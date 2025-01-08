"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[77157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"uni-app",hide_title:!0,sidebar_position:6},o=void 0,u={unversionedId:"quickstart/uniapp",id:"quickstart/uniapp",title:"uni-app",description:"\u4f7f\u7528 Demo",source:"@site/docs/sdks/quickstart/uniapp.mdx",sourceDirName:"quickstart",slug:"/quickstart/uniapp",permalink:"/zh-Hans/sdks/quickstart/uniapp",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/uniapp.mdx",tags:[],version:"current",lastUpdatedAt:1736341155,formattedLastUpdatedAt:"2025\u5e741\u67088\u65e5",sidebarPosition:6,frontMatter:{title:"uni-app",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Electron",permalink:"/zh-Hans/sdks/quickstart/electron"},next:{title:"Mini Program",permalink:"/zh-Hans/sdks/quickstart/miniProgram"}},c={},s=[{value:"\u4f7f\u7528 Demo",id:"\u4f7f\u7528-demo",level:2},{value:"\u2757\ufe0f\u5e38\u89c1\u95ee\u9898",id:"\ufe0f\u5e38\u89c1\u95ee\u9898",level:2},{value:"1. \u4ec5\u5f00\u53d1 H5\u3001\u5c0f\u7a0b\u5e8f",id:"1-\u4ec5\u5f00\u53d1-h5\u5c0f\u7a0b\u5e8f",level:3},{value:"2. \u4f7f\u7528 Uni \u540c\u65f6\u5f00\u53d1\u591a\u7aef ( APP\u3001H5\u3001\u5c0f\u7a0b\u5e8f )",id:"2-\u4f7f\u7528-uni-\u540c\u65f6\u5f00\u53d1\u591a\u7aef--apph5\u5c0f\u7a0b\u5e8f-",level:3},{value:"3. \u5173\u4e8e\u4f9d\u8d56\u9879",id:"3-\u5173\u4e8e\u4f9d\u8d56\u9879",level:3},{value:"\u2699\ufe0f \u96c6\u6210\u6b65\u9aa4",id:"\ufe0f-\u96c6\u6210\u6b65\u9aa4",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56",id:"1-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"2. \u5728\u9879\u76ee\u4e2d\u5f15\u5165 ( \u7eaf APP \u9879\u76ee )",id:"2-\u5728\u9879\u76ee\u4e2d\u5f15\u5165--\u7eaf-app-\u9879\u76ee-",level:3},{value:"3. \u5728\u9879\u76ee\u4e2d\u5f15\u5165 ( APP\u3001H5\u3001\u5c0f\u7a0b\u5e8f )",id:"3-\u5728\u9879\u76ee\u4e2d\u5f15\u5165--apph5\u5c0f\u7a0b\u5e8f-",level:3},{value:"3.1 \u8de8\u5e73\u53f0\u60c5\u51b5\u4e0b\u4f7f\u7528\u65b9\u5f0f",id:"31-\u8de8\u5e73\u53f0\u60c5\u51b5\u4e0b\u4f7f\u7528\u65b9\u5f0f",level:4},{value:"4. \ud83d\udee0\ufe0f \u672c\u5730\u5f00\u53d1",id:"4-\ufe0f-\u672c\u5730\u5f00\u53d1",level:3},{value:"4.1 \u5236\u4f5c\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7",id:"41-\u5236\u4f5c\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7",level:4},{value:"4.2. \u8fd0\u884c\u5230\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7\u542f\u52a8 \uff08 iOS \u4ec5\u652f\u6301\u5728\u771f\u673a\u8c03\u8bd5 \uff09",id:"42-\u8fd0\u884c\u5230\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7\u542f\u52a8--ios-\u4ec5\u652f\u6301\u5728\u771f\u673a\u8c03\u8bd5-",level:4},{value:"5. \ud83d\ude80 \u6253\u5305\u53d1\u5e03",id:"5--\u6253\u5305\u53d1\u5e03",level:3}],m={toc:s},d="wrapper";function k(e){var{components:t}=e,p=l(e,["components"]);return(0,r.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-demo"},"\u4f7f\u7528 Demo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aDemo \u53ea\u662f\u7528\u4e8e\u6f14\u793a SDK \u7684\u5f15\u5165\u4e0e\u4f7f\u7528\uff0c\u5e76\u4e0d\u662f\u4e0d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u5e94\u7528\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u9996\u5148\u8fd0\u884c\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u7684\u6846\u67b6\u76f8\u5173\u7684\u793a\u4f8b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-uniapp-demo"},"DEMO")," \u3002\u8fd9\u4e0d\u4ec5\u53ef\u4ee5\u8ba9\u60a8\u76f4\u89c2\u4f53\u9a8c OpenIM SDK \u7684\u529f\u80fd\uff0c\u8fd8\u5c06\u5e2e\u52a9\u60a8\u5728\u5b9e\u9645\u96c6\u6210\u8fc7\u7a0b\u4e2d\u8fc5\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\ufe0f\u5e38\u89c1\u95ee\u9898"},"\u2757\ufe0f\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"1-\u4ec5\u5f00\u53d1-h5\u5c0f\u7a0b\u5e8f"},"1. \u4ec5\u5f00\u53d1 H5\u3001\u5c0f\u7a0b\u5e8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5f00\u53d1 App \u7aef\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 uniapp \u5f00\u53d1 h5 \u548c \u5c0f\u7a0b\u5e8f\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"/zh-Hans/sdks/quickstart/miniProgram"},"JSSDK")," \uff0c",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u4e0d\u9700\u8981"))," \u53c2\u8003\u4e0b\u9762\u6b65\u9aa4\u3002")),(0,r.kt)("h3",{id:"2-\u4f7f\u7528-uni-\u540c\u65f6\u5f00\u53d1\u591a\u7aef--apph5\u5c0f\u7a0b\u5e8f-"},"2. \u4f7f\u7528 Uni \u540c\u65f6\u5f00\u53d1\u591a\u7aef ( APP\u3001H5\u3001\u5c0f\u7a0b\u5e8f )"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c iOS \u548c Android ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u5fc5\u987b"))," \u5b89\u88c5\u539f\u751f\u63d2\u4ef6\uff0c\u4e2d\u95f4\u5c42 ",(0,r.kt)("inlineCode",{parentName:"li"},"openim-uniapp-polyfill")," \u7ed3\u5408 App \u539f\u751f\u63d2\u4ef6\u548c JSSDK \u80fd\u529b\uff0c\u517c\u5bb9\u4e00\u5957\u4ee3\u7801\u540c\u65f6\u5f00\u53d1 APP\u3001H5\u3001\u5c0f\u7a0b\u5e8f\uff08 SDK \u548c im-server \u7248\u672c >= 3.8.2 \uff09\u3002")),(0,r.kt)("h3",{id:"3-\u5173\u4e8e\u4f9d\u8d56\u9879"},"3. \u5173\u4e8e\u4f9d\u8d56\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"@openim/client-sdk : JSSDK\uff0c\u662f\u8fd0\u884c H5\u3001\u5c0f\u7a0b\u5e8f\u65f6\u5fc5\u987b\u7684\u4f9d\u8d56\u9879\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"App \u539f\u751f\u8bed\u8a00\u63d2\u4ef6\uff1a\u8fd0\u884c iOS \u548c Android \u65f6\u5fc5\u987b\u7684\u4f9d\u8d56\u9879\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"openim-uniapp-polyfill : \u5fc5\u987b\u5b89\u88c5\uff0c \u7edf\u4e00\u5c01\u88c5 JSSDK \u548c\u539f\u751f\u63d2\u4ef6\uff0c \u517c\u5bb9\u4e00\u5957\u4ee3\u7801\u540c\u65f6\u5f00\u53d1\u591a\u5e73\u53f0\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ufe0f-\u96c6\u6210\u6b65\u9aa4"},"\u2699\ufe0f \u96c6\u6210\u6b65\u9aa4"),(0,r.kt)("h3",{id:"1-\u6dfb\u52a0\u4f9d\u8d56"},"1. \u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 npm \u5b89\u88c5\u4f9d\u8d56")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install openim-uniapp-polyfill @openim/client-sdk\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ext.dcloud.net.cn/plugin?id=6577"},"dcloud \u63d2\u4ef6\u5e02\u573a")," \u9009\u62e9\u5bf9\u5e94\u9879\u76ee\u548c\u5305\u540d\u5f15\u5165 SDK")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_import",src:n(51649).Z,width:"1196",height:"703"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u5f15\u5165 SDK \u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.json")," \u6587\u4ef6\uff0c\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"App \u539f\u751f\u63d2\u4ef6\u914d\u7f6e"),"\uff0c\u9009\u62e9\u4e91\u7aef\u63d2\u4ef6\u8fdb\u884c\u5bfc\u5165\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_import_manifest",src:n(64549).Z,width:"904",height:"692"})),(0,r.kt)("h3",{id:"2-\u5728\u9879\u76ee\u4e2d\u5f15\u5165--\u7eaf-app-\u9879\u76ee-"},"2. \u5728\u9879\u76ee\u4e2d\u5f15\u5165 ( \u7eaf APP \u9879\u76ee )"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('login', IMSDK.uuid(), {\n  userID: '123',\n  token: 'token',\n});\n\nconst onConnectSuccess = () => {\n  // \u8fde\u63a5\u6210\u529f\n};\n// \u8bbe\u7f6e\u76d1\u542c\nIMSDK.subscribe(IMSDK.IMEvents.OnConnectSuccess, onConnectSuccess);\n// \u5378\u8f7d\u76d1\u542c\nIMSDK.unsubscribe(IMSDK.IMEvents.OnConnectSuccess, onConnectSuccess);\n")),(0,r.kt)("h3",{id:"3-\u5728\u9879\u76ee\u4e2d\u5f15\u5165--apph5\u5c0f\u7a0b\u5e8f-"},"3. \u5728\u9879\u76ee\u4e2d\u5f15\u5165 ( APP\u3001H5\u3001\u5c0f\u7a0b\u5e8f )"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f1\uff1a\u76d1\u542c\u5668\u4f7f\u7528 uniapp \u7684\u65b9\u5f0f\u8c03\u7528\u76d1\u542c\u5668\uff0c\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"IMSDK.IMEvents")," \u4e2d\u7684\u65b9\u6cd5\uff0c\u56e0\u4e3a JSSDK \u4e0e APP \u7684\u76d1\u542c\u5668\u5927\u5c0f\u5199\u6709\u533a\u522b , npm \u5305\u4e2d\u5df2\u7ecf\u505a\u81ea\u52a8\u8f6c\u6362\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f2\uff1a\u5728\u90e8\u5206 API \u4e2d\u4e0d\u540c\u7aef\u53ef\u80fd\u56e0\u4e3a\u5e73\u53f0\u7684\u652f\u6301\uff0c\u7528\u6cd5\u4e0a\u4f1a\u6709\u6240\u533a\u522b\uff0c\u4f7f\u7528\u65f6\u67e5\u770b\u5bf9\u5e94\u5e73\u53f0 API \u7684\u6587\u6863\uff0c\u6ce8\u610f\u5dee\u522b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8981\u6839\u636e\u5e73\u53f0\u53bb\u4f20\u5165\u6b63\u786e\u7684 platformID"),(0,r.kt)("li",{parentName:"ul"},"Login API \u53c2\u6570\u4e0d\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ul"},"APP \u7aef\u9700\u8981 ",(0,r.kt)("a",{parentName:"li",href:"/zh-Hans/sdks/api/initialization/initSDK"},"initSDK")," \u540e\u624d\u80fd\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u56fe\u7247\u3001\u89c6\u9891\u6d88\u606f\u4f7f\u7528\u7684 API \u4e0d\u4e00\u81f4\uff0c\u8981\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"\u6761\u4ef6\u7f16\u8bd1"))," \u8c03\u7528\u4e0d\u540c\u7684\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6...")))),(0,r.kt)("h4",{id:"31-\u8de8\u5e73\u53f0\u60c5\u51b5\u4e0b\u4f7f\u7528\u65b9\u5f0f"},"3.1 \u8de8\u5e73\u53f0\u60c5\u51b5\u4e0b\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd5\u4e00 \uff1a\u8de8\u5e73\u53f0\u53c2\u6570\u548c\u65b9\u6cd5\u540d\u4e00\u81f4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 uniapp \u7684\u65b9\u5f0f\u6765\u8c03\u7528\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b64\u4e3a\u591a\u7aef\u517c\u5bb9\u5f0f\u5199\u6cd5\uff0c\u5728\u8de8\u5e73\u53f0\u60c5\u51b5\u4e0b\uff0c\u8981\u68c0\u67e5 API \u8fd4\u56de\u5185\u5bb9\u7ed3\u6784\u662f\u5426\u4e00\u81f4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('createTextMessage', IMSDK.uuid(), 'text')\n  .then((data) => {\n    // do something\n  })\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd5\u4e8c \uff1a\u8de8\u5e73\u53f0\u53c2\u6570\u548c\u65b9\u6cd5\u540d\u4e0d\u4e00\u81f4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/tutorial/platform.html"},"\u6761\u4ef6\u7f16\u8bd1")," \u5904\u7406\u53c2\u6570\u5dee\u5f02\u8f83\u5927\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import IMSDK from 'openim-uniapp-polyfill';\n\n// #ifdef H5 || MP-WEIXIN\nIMSDK.asyncApi('login', IMSDK.uuid(), {\n  userID : '123',\n  token: 'token',\n  platformID: 5,\n  wsAddr: 'ws://your-server-ip:10001',\n  apiAddr: 'http://your-server-ip:10002',\n});\n// #endif\n\n// #ifdef APP-PLUS\nIMSDK.asyncApi('login', IMSDK.uuid(), {\n  userID: '123',\n  token: 'token',\n});\n// #endif\n")),(0,r.kt)("h3",{id:"4-\ufe0f-\u672c\u5730\u5f00\u53d1"},"4. \ud83d\udee0\ufe0f \u672c\u5730\u5f00\u53d1"),(0,r.kt)("h4",{id:"41-\u5236\u4f5c\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7"},"4.1 \u5236\u4f5c\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5305\u540d\u9700\u8981\u4e0e\u7b2c\u4e00\u6b65\u5f15\u5165\u4e91\u63d2\u4ef6\u65f6\u8bbe\u7f6e\u7684\u5305\u540d\u4e00\u81f4\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_build",src:n(46317).Z,width:"1072",height:"739"})),(0,r.kt)("h4",{id:"42-\u8fd0\u884c\u5230\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7\u542f\u52a8--ios-\u4ec5\u652f\u6301\u5728\u771f\u673a\u8c03\u8bd5-"},"4.2. \u8fd0\u884c\u5230\u81ea\u5b9a\u4e49\u8c03\u8bd5\u57fa\u5ea7\u542f\u52a8 \uff08 iOS \u4ec5\u652f\u6301\u5728\u771f\u673a\u8c03\u8bd5 \uff09"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5730\u8fdb\u884c APP \u7aef\u8c03\u8bd5\u65f6\uff0c\u5fc5\u987b\u6253\u5305\u81ea\u5b9a\u4e49\u57fa\u5ea7\uff0c\u5728\u542f\u52a8\u81ea\u5b9a\u4e49\u57fa\u5ea7\u8fdb\u884c\u8c03\u8bd5\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uni_run",src:n(92793).Z,width:"680",height:"428"})),(0,r.kt)("h3",{id:"5--\u6253\u5305\u53d1\u5e03"},"5. \ud83d\ude80 \u6253\u5305\u53d1\u5e03"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"APP \u7aef\u6253\u5305\u53d1\u5e03\u65f6\uff0c\u4f7f\u7528 \u53d1\u884c -> \u539f\u751fAPP\u4e91\u6253\u5305\u3002")))}k.isMDXComponent=!0},46317:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_build-aeb84d625aa6c4e46e1bea1028811882.png"},51649:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_import-d2df7601622e180c8138e7120e9daa3e.png"},64549:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_import_manifest-efebaea0ac2455f8c6a42135aeda748b.png"},92793:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/uni_run-e4308274c099eaf4f2d3e3130b435e98.png"}}]);