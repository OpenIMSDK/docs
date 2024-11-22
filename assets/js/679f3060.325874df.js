"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[78765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},i="onSyncServerStart",s={unversionedId:"callback/onSyncServerStart",id:"callback/onSyncServerStart",title:"onSyncServerStart",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/callback/onSyncServerStart.mdx",sourceDirName:"callback",slug:"/callback/onSyncServerStart",permalink:"/sdks/callback/onSyncServerStart",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onSyncServerStart.mdx",tags:[],version:"current",lastUpdatedAt:1732280367,formattedLastUpdatedAt:"Nov 22, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onSyncServerFinish",permalink:"/sdks/callback/onSyncServerFinish"},next:{title:"onTotalUnreadMessageCountChanged",permalink:"/sdks/callback/onTotalUnreadMessageCountChanged"}},c={},p=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Return Prototype",id:"return-prototype",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Return Prototype",id:"return-prototype-1",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Return Prototype",id:"return-prototype-2",level:3},{value:"Return Result",id:"return-result-2",level:3},{value:"Return Prototype",id:"return-prototype-3",level:3},{value:"Return Result",id:"return-result-3",level:3},{value:"Example Call",id:"example-call",level:3},{value:"Return Prototype",id:"return-prototype-4",level:3},{value:"Return Result",id:"return-result-4",level:3},{value:"Example Call",id:"example-call-1",level:3},{value:"Prototype",id:"prototype",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("Tabs"),y=d("TabItem"),b={toc:p},v="wrapper";function f(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(v,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"onsyncserverstart"},"onSyncServerStart"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Callback when starting to sync the session with the server.")),(0,n.kt)(m,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(y,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"Function()? onSyncServerStart;\n")),(0,n.kt)("h3",{id:"return-result"},"Return Result"),(0,n.kt)("p",null,"None")),(0,n.kt)(y,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-1"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)onSyncServerStart;\n\n")),(0,n.kt)("h3",{id:"return-result-1"},"Return Result"),(0,n.kt)("p",null,"None")),(0,n.kt)(y,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-2"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"    void onSyncServerStart()\n")),(0,n.kt)("h3",{id:"return-result-2"},"Return Result"),(0,n.kt)("p",null,"None")),(0,n.kt)(y,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-3"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonSyncServerStart(): void;\n\n")),(0,n.kt)("h3",{id:"return-result-3"},"Return Result"),(0,n.kt)("p",null,"None"),(0,n.kt)("h3",{id:"example-call"},"Example Call"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n// or\n// import { getSDK, CbEvents } from '@openim/client-sdk';\n// const IMSDK = getSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnSyncServerStart, () => {});\n"))),(0,n.kt)(y,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-4"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonSyncServerStart(): void;\n\n")),(0,n.kt)("h3",{id:"return-result-4"},"Return Result"),(0,n.kt)("p",null,"None"),(0,n.kt)("h3",{id:"example-call-1"},"Example Call"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnSyncServerStart, () => {});\n"))),(0,n.kt)(y,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"prototype"},"Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"void OnSyncServerStart();\n")))))}f.isMDXComponent=!0}}]);