"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[95552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},i="onRecvNewMessages",p={unversionedId:"callback/onRecvNewMessages",id:"callback/onRecvNewMessages",title:"onRecvNewMessages",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/callback/onRecvNewMessages.mdx",sourceDirName:"callback",slug:"/callback/onRecvNewMessages",permalink:"/sdks/callback/onRecvNewMessages",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onRecvNewMessages.mdx",tags:[],version:"current",lastUpdatedAt:1733823305,formattedLastUpdatedAt:"Dec 10, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onRecvNewMessage",permalink:"/sdks/callback/onRecvNewMessage"},next:{title:"onRecvOfflineNewMessage",permalink:"/sdks/callback/onRecvOfflineNewMessage"}},u={},c=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Return Prototype",id:"return-prototype",level:3},{value:"Return Prototype",id:"return-prototype-1",level:3},{value:"Parameter Details",id:"parameter-details",level:3},{value:"Return Prototype",id:"return-prototype-2",level:3},{value:"Return Results",id:"return-results",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Return Prototype",id:"return-prototype-3",level:3},{value:"Return Results",id:"return-results-1",level:3},{value:"Usage Example",id:"usage-example-1",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=m("Tabs"),g=m("TabItem"),b={toc:c},v="wrapper";function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(v,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"onrecvnewmessages"},"onRecvNewMessages"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This callback is triggered when new messages are received, possibly containing multiple messages.")),(0,n.kt)(d,{groupId:"sdks-language",values:[{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,n.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype"},"Return Prototype")),(0,n.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-1"},"Return Prototype")),(0,n.kt)(g,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"parameter-details"},"Parameter Details")),(0,n.kt)(g,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-2"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvNewMessages(data: WSEvent<MessageItem[]>): void;\n\n")),(0,n.kt)("h3",{id:"return-results"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),"[]>"),(0,n.kt)("td",{parentName:"tr",align:null},"New messages")))),(0,n.kt)("h3",{id:"usage-example"},"Usage Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n// or\n// import { getSDK, CbEvents } from '@openim/client-sdk';\n// const IMSDK = getSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnRecvNewMessages, ({ data }) => {\n  // data is the list of new messages\n});\n"))),(0,n.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-3"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonRecvNewMessages(data: WSEvent<MessageItem[]>): void;\n\n")),(0,n.kt)("h3",{id:"return-results-1"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WSEvent"),"<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),"[]>"),(0,n.kt)("td",{parentName:"tr",align:null},"New messages")))),(0,n.kt)("h3",{id:"usage-example-1"},"Usage Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnRecvNewMessages, ({ data }) => {\n  // data is the list of new messages\n});\n")))))}f.isMDXComponent=!0}}]);