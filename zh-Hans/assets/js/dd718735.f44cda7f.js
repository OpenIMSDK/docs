"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[76549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"SDK\u8bf4\u660e",hide_title:!0,sidebar_position:1},p=void 0,u={unversionedId:"introduction",id:"introduction",title:"SDK\u8bf4\u660e",description:"OpenIM SDK",source:"@site/docs/sdks/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/zh-Hans/sdks/introduction",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1729216731,formattedLastUpdatedAt:"2024\u5e7410\u670818\u65e5",sidebarPosition:1,frontMatter:{title:"SDK\u8bf4\u660e",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5feb\u901f\u96c6\u6210",permalink:"/zh-Hans/sdks/quickstart/"}},s={},c=[{value:"OpenIM SDK",id:"openim-sdk",level:2},{value:"iOS \u96c6\u6210",id:"ios-\u96c6\u6210",level:3},{value:"Android \u96c6\u6210",id:"android-\u96c6\u6210",level:3},{value:"Web \u96c6\u6210",id:"web-\u96c6\u6210",level:3},{value:"Electron \u96c6\u6210",id:"electron-\u96c6\u6210",level:3},{value:"Unity \u96c6\u6210",id:"unity-\u96c6\u6210",level:3},{value:"\u5ba2\u6237\u7aef SDK \u53ca demo",id:"\u5ba2\u6237\u7aef-sdk-\u53ca-demo",level:2}],m={toc:c},d="wrapper";function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"openim-sdk"},"OpenIM SDK"),(0,n.kt)("p",null,"\u4f7f\u7528\u6b64 SDK\uff0c\u60a8\u53ef\u4ee5\u4e3a\u60a8\u7684\u5e94\u7528\u6dfb\u52a0\u5373\u65f6\u901a\u8baf\u529f\u80fd\u3002\u8fde\u63a5\u5230\u81ea\u6258\u7ba1\u7684",(0,n.kt)("strong",{parentName:"p"},"OpenIM Server"),"\u670d\u52a1\u5668\u540e\uff0c\u4ec5\u9700\u51e0\u884c\u4ee3\u7801\uff0c\u5373\u53ef\u5c06\u5373\u65f6\u901a\u8baf\u529f\u80fd\u8f7b\u677e\u96c6\u6210\u5230\u60a8\u7684\u5e94\u7528\u3002"),(0,n.kt)("p",null,"OpenIM SDK \u7684\u6838\u5fc3\u529f\u80fd\u662f\u57fa\u4e8e",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/openimsdk/openim-sdk-core"},"open-im-sdk-core")," "),"\u6765\u5b9e\u73b0\u7684\u3002\u4ee5\u4e0b\u662f\u5176\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u7684\u8be6\u60c5\uff1a"),(0,n.kt)("h3",{id:"ios-\u96c6\u6210"},"iOS \u96c6\u6210"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5de5\u5177"),": gomobile"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8f93\u51fa\u6587\u4ef6"),": XCFramework"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ea4\u4e92"),": iOS \u901a\u8fc7 JSON \u4e0e SDK \u8fdb\u884c\u4ea4\u4e92"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API"),": SDK \u63d0\u4f9b\u4e86\u91cd\u65b0\u5c01\u88c5\u7684 API \u4ee5\u4fbf\u4e8e\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6570\u636e\u5b58\u50a8"),": iOS \u4f7f\u7528 SDK \u5185\u90e8\u63d0\u4f9b\u7684 SQLite \u5c42")),(0,n.kt)("h3",{id:"android-\u96c6\u6210"},"Android \u96c6\u6210"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5de5\u5177"),": gomobile"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8f93\u51fa\u6587\u4ef6"),": AAR"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ea4\u4e92"),": Android \u901a\u8fc7 JSON \u4e0e SDK \u8fdb\u884c\u4ea4\u4e92"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API"),": SDK \u63d0\u4f9b\u4e86\u91cd\u65b0\u5c01\u88c5\u7684 API \u4ee5\u4fbf\u4e8e\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6570\u636e\u5b58\u50a8"),": Android \u4f7f\u7528 SDK \u5185\u90e8\u63d0\u4f9b\u7684 SQLite \u5c42")),(0,n.kt)("h3",{id:"web-\u96c6\u6210"},"Web \u96c6\u6210"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bed\u8a00"),": Go"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7279\u6027"),": \u4f7f\u7528 Go \u8bed\u8a00\u63d0\u4f9b\u7684 WebAssembly \u652f\u6301\u7f16\u8bd1\u4e3a wasm"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ea4\u4e92"),": \u7f51\u9875\u901a\u8fc7 JSON \u4e0e SDK \u8fdb\u884c\u4ea4\u4e92"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API"),": SDK \u63d0\u4f9b\u4e86\u91cd\u65b0\u5c01\u88c5\u7684 API \u4ee5\u4fbf\u4e8e\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6570\u636e\u5b58\u50a8"),": JavaScript \u4f7f\u7528",(0,n.kt)("a",{parentName:"li",href:"https://sql.js.org/"},"sql.js"),"\u865a\u62df\u5316 SQLite \u5e76\u5b58\u50a8\u5728 IndexedDB \u4e2d\u6765\u5904\u7406 SQL \u903b\u8f91")),(0,n.kt)("h3",{id:"electron-\u96c6\u6210"},"Electron \u96c6\u6210"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8bed\u8a00"),": Go"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7279\u6027"),": \u4f7f\u7528 cgo \u5c06\u6838\u5fc3\u5bfc\u51fa\u4e3a C \u63a5\u53e3\uff0c\u5e76\u63d0\u4f9b\u5982 DLL\u3001SO\u3001DYLIB \u7b49\u52a8\u6001\u5e93\u4f9b\u5176\u4ed6\u8bed\u8a00\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ea4\u4e92"),": \u901a\u8fc7 JSON \u4f7f\u7528 FFI (\u5916\u90e8\u51fd\u6570\u63a5\u53e3) \u4e0e C \u63a5\u53e3\u901a\u4fe1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API"),": SDK \u63d0\u4f9b\u4e86\u91cd\u65b0\u5c01\u88c5\u7684 API \u4ee5\u4fbf\u4e8e\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6570\u636e\u5b58\u50a8"),": \u4f7f\u7528 SDK \u5185\u90e8\u63d0\u4f9b\u7684 SQLite \u5c42\u8fdb\u884c\u6570\u636e\u5b58\u50a8")),(0,n.kt)("h3",{id:"unity-\u96c6\u6210"},"Unity \u96c6\u6210"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u94fe\u63a5\u5e93"),": go\u7f16\u8bd1\u751f\u6210C\u52a8\u6001\u94fe\u63a5\u5e93"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8f93\u51fa\u6587\u4ef6"),": \u5bf9\u5e94\u5e73\u53f0\u751f\u6210openimsdk.dll\u6216libopenimsdk.so"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4ea4\u4e92"),": C#(PInvoke)\u7ed1\u5b9a\u5bfc\u51fa\u7684C\u51fd\u6570"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API"),": C#\u6570\u636e\u7ed3\u6784\u5b9a\u4e49\u4e0eJson\u6570\u636e\u7ed1\u5b9a")),(0,n.kt)("h2",{id:"\u5ba2\u6237\u7aef-sdk-\u53ca-demo"},(0,n.kt)("a",{parentName:"h2",href:"../guides/introduction/product#%EF%B8%8F-sdk-demo"},"\u5ba2\u6237\u7aef SDK \u53ca demo")))}k.isMDXComponent=!0}}]);