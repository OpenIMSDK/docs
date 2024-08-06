"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[13684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Flutter",hide_title:!0,sidebar_position:3},l=void 0,c={unversionedId:"quickstart/flutter",id:"quickstart/flutter",title:"Flutter",description:"\ud83d\ude80 Using the Demo",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/quickstart/flutter.mdx",sourceDirName:"quickstart",slug:"/quickstart/flutter",permalink:"/sdks/quickstart/flutter",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/flutter.mdx",tags:[],version:"current",lastUpdatedAt:1722932252,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:3,frontMatter:{title:"Flutter",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Unity",permalink:"/sdks/quickstart/unity"},next:{title:"React Native",permalink:"/sdks/quickstart/reactNative"}},u={},p=[{value:"\ud83d\ude80 Using the Demo",id:"-using-the-demo",level:2},{value:"Integration Steps",id:"integration-steps",level:2},{value:"1. Add Dependencies to yaml",id:"1-add-dependencies-to-yaml",level:3},{value:"2. Import the Package",id:"2-import-the-package",level:3},{value:"3. Initialization",id:"3-initialization",level:3},{value:"4. Set Listeners",id:"4-set-listeners",level:3},{value:"5. Login",id:"5-login",level:3}],d={toc:p},g="wrapper";function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-using-the-demo"},"\ud83d\ude80 Using the Demo"),(0,r.kt)("p",null,"We strongly recommend you start by running the framework-specific sample ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenIMSDK/Open-IM-Flutter-Demo"},"DEMO")," we've prepared for you. This will not only give you a firsthand experience of OpenIMSDK's functionalities but will also assist you in swiftly identifying and resolving potential issues during the integration process."),(0,r.kt)("h2",{id:"integration-steps"},"Integration Steps"),(0,r.kt)("h3",{id:"1-add-dependencies-to-yaml"},"1. Add Dependencies to yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   flutter_openim_sdk: latest\n")),(0,r.kt)("h3",{id:"2-import-the-package"},"2. Import the Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  import 'package:flutter_openim_sdk/flutter_openim_sdk.dart';\n")),(0,r.kt)("h3",{id:"3-initialization"},"3. Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'final success = await OpenIM.iMManager.initSDK(\n    platform: 0, // Platform, refer to IMPlatform class,\n    apiAddr: "", // API address of the SDK.\n    wsAddr: "",  // Web socket address of the SDK.\n    dataDir: "", // Data storage path. E.g., var apath =(await getApplicationDocumentsDirectory()).path\n    objectStorage: \'cos\', // Image server, default is \'cos\'\n    logLevel: 6, // Log level, default is 6\n    listener: OnConnectListener(\n      onConnectSuccess: () {\n        // Successfully connected to the server.\n      },\n      onConnecting: () {\n        // Connecting to the server, ideal for displaying a "Connecting" status on the UI.\n      },\n      onConnectFailed: (code, errorMsg) {\n        // Failed to connect to the server; you can notify the user that the current network connection is unavailable.\n      },\n      onUserSigExpired: () {\n        // The login ticket has expired. Please log in with a newly issued UserSig.\n      },\n      onKickedOffline: () {\n        // The current user has been kicked offline. You can prompt the user, "You have logged into this account on another device. Would you like to log in again?"\n      },\n    ),\n  );\n')),(0,r.kt)("h3",{id:"4-set-listeners"},"4. Set Listeners"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Set listener\n    OpenIM.iMManager\n      //\n      ..userManager.setUserListener(OnUserListener(\n      ))\n      // Add message listener (remove when not in use)\n      ..messageManager.setAdvancedMsgListener(OnAdvancedMsgListener(\n      ))\n\n      // Set up message sending progress listener\n      ..messageManager.setMsgSendProgressListener(OnMsgSendProgressListener(\n      ))\n      ..messageManager.setCustomBusinessListener(\n      )\n      // Set up friendship listener\n      ..friendshipManager.setFriendshipListener(OnFriendshipListener(\n      ))\n\n      // Set up conversation listener\n      ..conversationManager.setConversationListener(OnConversationListener(\n      ))\n\n      // Set up group listener\n      ..groupManager.setGroupListener(OnGroupListener(\n      ));\n")),(0,r.kt)("h3",{id:"5-login"},"5. Login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'// Returns the profile of the currently logged-in user.\nfinal userInfo = await OpenIM.iMManager.login(\n      userID: "", // userID comes from your business server.\n      token: "", // token needs to be exchanged from the OpenIM server by your business server using the secret.\n    );\n')))}f.isMDXComponent=!0}}]);