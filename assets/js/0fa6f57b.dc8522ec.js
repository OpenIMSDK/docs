"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[67610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"React Native",hide_title:!0,sidebar_position:4},l=void 0,c={unversionedId:"quickstart/reactNative",id:"quickstart/reactNative",title:"React Native",description:"Using Demo \ud83d\ude80",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/quickstart/reactNative.mdx",sourceDirName:"quickstart",slug:"/quickstart/reactNative",permalink:"/sdks/quickstart/reactNative",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/reactNative.mdx",tags:[],version:"current",lastUpdatedAt:1722932252,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:4,frontMatter:{title:"React Native",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Flutter",permalink:"/sdks/quickstart/flutter"},next:{title:"Browser",permalink:"/sdks/quickstart/browser"}},p={},d=[{value:"Using Demo \ud83d\ude80",id:"using-demo-",level:2},{value:"Tips \u2757\ufe0f",id:"tips-\ufe0f",level:2},{value:"Integration Steps ( React Native CLI )",id:"integration-steps--react-native-cli-",level:2},{value:"1. Add Dependencies",id:"1-add-dependencies",level:3},{value:"2. Init SDK",id:"2-init-sdk",level:3},{value:"3. Log in and set listening",id:"3-log-in-and-set-listening",level:3},{value:"4. Send and receive messages",id:"4-send-and-receive-messages",level:3}],u={toc:d},m="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-demo-"},"Using Demo \ud83d\ude80"),(0,r.kt)("p",null,"We strongly recommend that you first run the framework-related example  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/openim-reactnative-demo"},"DEMO"),"  we prepared for you. This will not only give you an intuitive experience of OpenIMSDK's capabilities, but will also help you quickly locate and solve problems during the actual integration process."),(0,r.kt)("h2",{id:"tips-\ufe0f"},"Tips \u2757\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"open-im-sdk-rn@3.5.1")," has contains ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"significant disruptive updates")),". If you need to upgrade, please check the incoming data and the returned data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unlike other SDKS, ",(0,r.kt)("inlineCode",{parentName:"p"},"React Native SDK")," operationID is not optional, but required.(operationID is used for back-end log query)"))),(0,r.kt)("h2",{id:"integration-steps--react-native-cli-"},"Integration Steps ( React Native CLI )"),(0,r.kt)("h3",{id:"1-add-dependencies"},"1. Add Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add open-im-sdk-rn\n")),(0,r.kt)("p",null,"For android add following urls to build gradle :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'// Top-level build file where you can add configuration options common to all sub-projects/modules.\nbuildscript {\n    ext {\n        buildToolsVersion = "33.0.0"\n        minSdkVersion = 21\n        compileSdkVersion = 33\n        targetSdkVersion = 33\n\n        // We use NDK 23 which has both M1 support and is the side-by-side NDK version from AGP.\n        ndkVersion = "23.1.7779620"\n    }\n    repositories {\n        google()\n        mavenCentral()\n        maven {\n            allowInsecureProtocol = true\n            url \'https://open-im-online.rentsoft.cn:51000/repository/maven2/\'\n        }\n    }\n    dependencies {\n        classpath("com.android.tools.build:gradle")\n        classpath("com.facebook.react:react-native-gradle-plugin")\n    }\n}\nallprojects {\n    repositories {\n        maven {\n            allowInsecureProtocol = true\n            url \'https://open-im-online.rentsoft.cn:51000/repository/maven2/\'\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"2-init-sdk"},"2. Init SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import OpenIMSDKRN from 'open-im-sdk-rn';\nimport RNFS from 'react-native-fs';\n\nRNFS.mkdir(RNFS.DocumentDirectoryPath + '/tmp');\n\nOpenIMSDKRN.initSDK({\n  platformID: 2,  // 1: ios, 2: android\n  apiAddr: 'http://your-server-ip:10002',\n  wsAddr: 'ws://your-server-ip:10001',\n  dataDir: RNFS.DocumentDirectoryPath + '/tmp',\n  logLevel: 5,\n  isLogStandardOutput: true,\n}, 'opid');\n")),(0,r.kt)("h3",{id:"3-log-in-and-set-listening"},"3. Log in and set listening"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import OpenIMSDKRN, { OpenIMEmitter } from 'open-im-sdk-rn';\n\nOpenIMSDKRN.login({\n  userID: 'IM user ID',\n  token: 'IM user token',\n}, 'opid');\n\nOpenIMEmitter.addListener('onConnecting', () => {\n  console.log('onConnecting');\n});\n\nOpenIMEmitter.addListener('onConnectSuccess', () => {\n  console.log('onConnectSuccess');\n});\n\nOpenIMEmitter.addListener('onConnectFailed', ({ errCode, errMsg }) => {\n  console.log('onConnectFailed', errCode, errMsg);\n});\n")),(0,r.kt)("h3",{id:"4-send-and-receive-messages"},"4. Send and receive messages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import OpenIMSDKRN, { OpenIMEmitter } from 'open-im-sdk-rn';\nimport type { MessageItem } from 'open-im-sdk-rn';\n\nOpenIMEmitter.addListener('onRecvNewMessages', (data: MessageItem[]) => {\n  console.log('onRecvNewMessages', data);\n});\n\nconst message = await OpenIMSDKRN.createTextMessage('hello openim', 'opid');\n\nOpenIMSDKRN.sendMessage({\n  recvID: 'recipient user ID',\n  groupID: '',\n  message,\n}, 'opid')\n  .then(() => {\n    // Message sent successfully \u2709\ufe0f\n  })\n  .catch(err => {\n    // Failed to send message \u274c\n    console.log(err);\n  });\n")))}g.isMDXComponent=!0}}]);