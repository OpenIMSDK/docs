"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[27862],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),l=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(m.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=l(n),u=a,k=s["".concat(m,".").concat(u)]||s[u]||c[u]||i;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99462:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>s});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={title:"SDK Description",hide_title:!0,sidebar_position:1},m=void 0,l={unversionedId:"introduction",id:"introduction",title:"SDK Description",description:"OpenIMSDK",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/sdks/introduction",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1736476238,formattedLastUpdatedAt:"Jan 10, 2025",sidebarPosition:1,frontMatter:{title:"SDK Description",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Integration",permalink:"/sdks/quickstart/"}},d={},s=[{value:"OpenIMSDK",id:"openimsdk",level:2},{value:"iOS Integration",id:"ios-integration",level:3},{value:"Android Integration",id:"android-integration",level:3},{value:"Web Integration",id:"web-integration",level:3},{value:"Client SDK and Demos",id:"client-sdk-and-demos",level:2}],c={toc:s},u="wrapper";function k(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)(u,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"openimsdk"},"OpenIMSDK"),(0,r.kt)("p",null,"With this SDK, you can add instant messaging capabilities to your application. By connecting to a self-hosted ",(0,r.kt)("strong",{parentName:"p"},"OpenIM Server")," server, you can easily integrate instant messaging functions into your app with just a few lines of code."),(0,r.kt)("p",null,"The core functionality of OpenIMSDK is implemented based on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/openimsdk/openim-sdk-core"},"open-im-sdk-core")),". Here are its details on different platforms:"),(0,r.kt)("h3",{id:"ios-integration"},"iOS Integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tool"),": gomobile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output File"),": XCFramework"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interaction"),": iOS interacts with the SDK through JSON"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API"),": The SDK offers a re-wrapped API for easier integration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Storage"),": iOS utilizes the SQLite layer provided internally by the SDK")),(0,r.kt)("h3",{id:"android-integration"},"Android Integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tool"),": gomobile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Output File"),": AAR"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interaction"),": Android interacts with the SDK through JSON"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API"),": The SDK offers a re-wrapped API for easier integration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Storage"),": Android utilizes the SQLite layer provided internally by the SDK")),(0,r.kt)("h3",{id:"web-integration"},"Web Integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Language"),": Go"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Features"),": Uses Go's WebAssembly support to compile into wasm"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interaction"),": Web pages interact with the SDK via JSON"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API"),": The SDK offers a re-wrapped API for easier integration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Storage"),": JavaScript employs ",(0,r.kt)("a",{parentName:"li",href:"https://sql.js.org/"},"sql.js")," to virtualize SQLite and store it in IndexedDB to handle SQL logic")),(0,r.kt)("h2",{id:"client-sdk-and-demos"},"Client SDK and Demos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Platform/Language"),(0,r.kt)("th",{parentName:"tr",align:"center"},"SDK Resource Link"),(0,r.kt)("th",{parentName:"tr",align:"center"},"SDK Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Demo Resource Link"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Golang")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/openim-sdk-core"},"open-im-sdk-core")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Golang version SDK, implemented with Gomobile/wasm/cgo"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"iOS")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-sdk-ios"},"open-im-sdk-ios")),(0,r.kt)("td",{parentName:"tr",align:"center"},"iOS version SDK"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-ios-demo"},"open-im-ios-demo")),(0,r.kt)("td",{parentName:"tr",align:"center"},"iOS Demo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Android")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-sdk-android"},"open-im-sdk-android")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Android version SDK"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-android-demo"},"open-im-android-demo")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Android Demo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Flutter")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-sdk-flutter"},"open-im-sdk-flutter")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flutter version SDK"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-flutter-demo"},"open-im-flutter-demo")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flutter Demo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"uni-app")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-sdk-uniapp"},"open-im-sdk-uniapp")),(0,r.kt)("td",{parentName:"tr",align:"center"},"uni-app version SDK"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-uniapp-demo"},"open-im-uniapp-demo")),(0,r.kt)("td",{parentName:"tr",align:"center"},"uni-app Demo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"JS SDK")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-sdk-web-wasm"},"open-im-sdk-web-wasm")),(0,r.kt)("td",{parentName:"tr",align:"center"},"JS SDK version"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/openim-electron-demo"},"open-im-pc-web-demo")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Electron Demo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"React Native")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-sdk-reactnative"},"open-im-sdk-reactnative")),(0,r.kt)("td",{parentName:"tr",align:"center"},"React Native SDK"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/openim-reactnative-demo"},"open-im-reactnative-demo")),(0,r.kt)("td",{parentName:"tr",align:"center"},"React Native Demo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Unity")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-sdk-unity.git"},"open-im-sdk-unity")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Unity SDK"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openimsdk/open-im-unity-demo.git"},"open-im-sdk-unity-demo")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Unity Demo")))))}k.isMDXComponent=!0}}]);