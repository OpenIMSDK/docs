"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=a,c=s["".concat(i,".").concat(b)]||s[b]||d[b]||l;return n?r.createElement(c,o(o({ref:t},m),{},{components:n})):r.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},26884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},i="onGroupMemberInfoChanged",u={unversionedId:"callback/onGroupMemberInfoChanged",id:"callback/onGroupMemberInfoChanged",title:"onGroupMemberInfoChanged",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/callback/onGroupMemberInfoChanged.mdx",sourceDirName:"callback",slug:"/callback/onGroupMemberInfoChanged",permalink:"/zh-Hans/sdks/callback/onGroupMemberInfoChanged",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onGroupMemberInfoChanged.mdx",tags:[],version:"current",lastUpdatedAt:1732280367,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onGroupMemberDeleted",permalink:"/zh-Hans/sdks/callback/onGroupMemberDeleted"},next:{title:"onJoinedGroupAdded",permalink:"/zh-Hans/sdks/callback/onJoinedGroupAdded"}},m={},s=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b-1",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-5",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-5",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},b=d("Tabs"),c=d("TabItem"),k={toc:s},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ongroupmemberinfochanged"},"onGroupMemberInfoChanged"),(0,r.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7fa4\u6210\u5458\u4fe1\u606f\u6539\u53d8\uff08\u7fa4\u6635\u79f0\u3001\u5934\u50cf\u7b49\uff09\u540e\u56de\u8c03\uff0c\u8be5\u7fa4\u6240\u6709\u7fa4\u6210\u5458\u4f1a\u6536\u5230\u6b64\u56de\u8c03\u3002")),(0,r.kt)(b,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,r.kt)(c,{value:"Flutter",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b"},"\u8fd4\u56de\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Function(GroupMembersInfo info)? onGroupMemberInfoChanged;\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMembersInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f"))))),(0,r.kt)(c,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-1"},"\u8fd4\u56de\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)onGroupMemberInfoChanged:(OIMGroupMemberInfo *)memberInfo;\n\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memberInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"OIMGroupMemberInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f"))))),(0,r.kt)(c,{value:"Android",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-2"},"\u8fd4\u56de\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"  void onGroupMemberInfoChanged(GroupMembersInfo info);\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMembersInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u4fe1\u606f"))))),(0,r.kt)(c,{value:"Web",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-3"},"\u8fd4\u56de\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonGroupMemberInfoChanged(data: WSEvent<GroupMemberItem>): void;\n\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b"},"\u8c03\u7528\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n// or\n// import { getSDK, CbEvents } from '@openim/client-sdk';\n// const IMSDK = getSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnGroupMemberInfoChanged, ({ data }) => {\n  // data \u7fa4\u6210\u5458\u4fe1\u606f\n});\n"))),(0,r.kt)(c,{value:"uni-app",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-4"},"\u8fd4\u56de\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonGroupMemberInfoChanged(data: WSEvent<GroupMemberItem>): void;\n\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b-1"},"\u8c03\u7528\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnGroupMemberInfoChanged, ({ data }) => {\n  // data \u7fa4\u6210\u5458\u4fe1\u606f\n});\n"))),(0,r.kt)(c,{value:"Unity",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-5"},"\u8fd4\u56de\u539f\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"void OnGroupMemberInfoChanged(GroupMember info);\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-5"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupMemberInfo"},"GroupMember")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u4fe1\u606f")))))))}f.isMDXComponent=!0}}]);