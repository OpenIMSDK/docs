"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[35750],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,g=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},14901:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>u});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},p="initSDK",d={unversionedId:"api/initialization/initSDK",id:"api/initialization/initSDK",title:"initSDK",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/initialization/initSDK.mdx",sourceDirName:"api/initialization",slug:"/api/initialization/initSDK",permalink:"/zh-Hans/sdks/api/initialization/initSDK",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/initialization/initSDK.mdx",tags:[],version:"current",lastUpdatedAt:1733823305,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"\u521d\u59cb\u5316\u3001\u767b\u5f55",permalink:"/zh-Hans/sdks/api/initialization/"},next:{title:"login",permalink:"/zh-Hans/sdks/api/initialization/login"}},m={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u53c2\u6570\u8be6\u89e3",id:"\u53c2\u6570\u8be6\u89e3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u53c2\u6570\u8be6\u89e3",id:"\u53c2\u6570\u8be6\u89e3-1",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-4",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-6",level:3}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},k=s("Tabs"),g=s("TabItem"),c={toc:u},N="wrapper";function b(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(N,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initsdk"},"initSDK"),(0,a.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,a.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u521d\u59cb\u5316\u662f\u5ba2\u6237\u7aef\u8c03\u7528 SDK \u7684\u7b2c\u4e00\u6b65\uff0c\u5728\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u5185\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\uff0c\u91cd\u590d\u8c03\u7528\u53ef\u80fd\u4f1a\u5bfc\u81f4\u672a\u77e5\u7684\u95ee\u9898\u3002")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\uff081\uff09\u521d\u59cb\u5316\u6210\u529f\u540e\uff0c\u518d\u8bbe\u7f6e\u5404\u79cd\u76d1\u542c\u5668\uff0c\u5e76\u8fdb\u884c\u767b\u5f55\uff0c\u786e\u4fdd\u5728\u540c\u6b65\u7b49\u5f85\u767b\u9646\u56de\u8c03\u5b8c\u6210\u540e\u518d\u8c03\u7528\u5176\u4ed6API\u3002\u5177\u4f53\u6d41\u7a0b\u5728\u5404\u7aef\u7684",(0,a.kt)("a",{parentName:"p",href:"../../quickstart"},"\u5feb\u901f\u96c6\u6210"),"\u4e2d\u6709\u793a\u4f8b\uff1b",(0,a.kt)("br",{parentName:"p"}),"\n","\uff082\uff09\u5ba2\u6237\u7aef\u7684\u5e95\u5c42\u65e5\u5fd7\u4f1a\u5b58\u653e\u5728\u6307\u5b9a\u76ee\u5f55\uff0c\u4f9b\u8c03\u8bd5\u67e5\u770b\uff0c\u4f46",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5efa\u8bae"),"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u542f\u7528\u3002")),(0,a.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"\n    // \u65b9\u6cd5\u4e00\n   Future<dynamic> initSDK({\n      required int platform,\n      required String apiAddr,\n      required String wsAddr,\n      required String dataDir,\n      required OnConnectListener listener,\n      int logLevel = 6,\n      bool isLogStandardOutput = true,\n      String? logFilePath,\n      String? operationID,\n    });\n\n    // \u65b9\u6cd5\u4e8c\n    Future<bool?> init(\n    InitConfig config,\n    OnConnectListener listener, {\n    String? operationID,\n  });\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/init/config"},"InitConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u53c2\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u503c\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~"),(0,a.kt)("td",{parentName:"tr",align:null},"dynamic"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u662f\u5426\u521d\u59cb\u5316\u6210\u529f")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"     OpenIM.iMManager.initSDK(\n          platform: IMPlatform.android,\n          apiAddr: '',\n          wsAddr: '',\n          dataDir: '',\n          listener: OnConnectListener(\n            onConnectFailed: (code, errorMsg) {},\n            onConnecting: () {},\n            onConnectSuccess: () {},\n            onKickedOffline: () {},\n            onUserTokenExpired: () {},\n          ),\n        );\n"))),(0,a.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"- (BOOL)initSDKWithConfig:(OIMInitConfig *)config\n             onConnecting:(nullable OIMVoidCallback)onConnecting\n         onConnectFailure:(nullable OIMFailureCallback)onConnectFailure\n         onConnectSuccess:(nullable OIMVoidCallback)onConnectSuccess\n          onKickedOffline:(nullable OIMVoidCallback)onKickedOffline\n       onUserTokenExpired:(nullable OIMVoidCallback)onUserTokenExpired;\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/init/config"},"OIMInitConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u53c2\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u503c\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"success"),(0,a.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u662f\u5426\u521d\u59cb\u5316\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onConnecting"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMVoidCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u4e2d\u7684\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onConnectFailure"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5931\u8d25\u7684\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onConnectSuccess"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6210\u529f\u7684\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onKickedOffline"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMVoidCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8e22\u4e0b\u7ebf\u7684\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onUserTokenExpired"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMVoidCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"token \u8fc7\u671f\u7684\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'OIMInitConfig *config = [OIMInitConfig new];\nconfig.apiAddr = @"";\nconfig.wsAddr = @"";\nconfig.objectStorage = @"";\n\nBOOL success = [OIMManager.manager initSDKWithConfig:config\n                                        onConnecting:^{\n\n} onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {\n    // \u8fde\u63a5\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570\n    // code \u9519\u8bef\u7801\n    // error \u9519\u8bef\u4fe1\u606f\n} onConnectSuccess:^{\n    // SDK \u5df2\u7ecf\u6210\u529f\u8fde\u63a5\u5230IM\u670d\u52a1\u5668\n} onKickedOffline:^{\n    // SDK \u6b63\u5728\u8fde\u63a5\u5230IM\u670d\u52a1\u5668\n} onUserTokenExpired:^{\n    // \u5728\u7ebf\u65f6\u7968\u636e\u8fc7\u671f\uff1a\u6b64\u65f6\u60a8\u9700\u8981\u751f\u6210\u65b0\u7684 token \u5e76\u518d\u6b21\u8c03\u7528 \u7684 login() \u51fd\u6570\u91cd\u65b0\u767b\u5f55\u3002\n}];\n\n'))),(0,a.kt)(g,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u53c2\u6570\u8be6\u89e3"},"\u53c2\u6570\u8be6\u89e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public boolean initSDK(Application application, InitConfig initConfig, @NotNull OnConnListener listener)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"application"),(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"Application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"initConfig"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/init/config"},"InitConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"listener"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/connectListener"},"OnConnectListener")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"InitConfig initConfig=new InitConfig(\n            Constant.getImApiUrl(),//SDK api\u5730\u5740\n            Constant.getImWsUrl(),//SDK WebSocket\u5730\u5740\n            getStorageDir(),//SDK\u6570\u636e\u5e93\u5b58\u50a8\u76ee\u5f55\n            );\n     OpenIMClient.getInstance().initSDK(application,\n          initConfig,\n          new OnConnListener() {\n                 @Override\n                public void onConnectFailed(long code, String error) {\n                    //\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\n                }\n\n                @Override\n                public void onConnectSuccess() {\n                    //\u8fde\u63a5\u670d\u52a1\u5668\u6210\u529f\n                }\n\n                @Override\n                public void onConnecting() {\n                    //\u8fde\u63a5\u670d\u52a1\u5668\u4e2d...\n                }\n\n                @Override\n                public void onKickedOffline() {\n                    //\u5f53\u524d\u7528\u6237\u88ab\u8e22\u4e0b\u7ebf\n                }\n\n                @Override\n                public void onUserTokenExpired() {\n                    //\u767b\u5f55\u7968\u636e\u5df2\u7ecf\u8fc7\u671f\n                }\n            });\n\n"))),(0,a.kt)(g,{value:"Web",mdxType:"TabItem"},(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@openim/client-sdk"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"@openim/wasm-client-sdk")," \u4e0d\u9700\u8981\u521d\u59cb\u5316\uff0c\u76f4\u63a5\u8c03\u7528 login \u5373\u53ef\u3002\u53ea\u6709\u5728electron\u4e2d\u5f15\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"@openim/electron-client-sdk"),"\u91c7\u7528\u4e86ffi\u7684\u65b9\u5f0f\uff0c\u624d\u9700\u8981\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"initSDK"),"\u521d\u59cb\u5316\u3002")),(0,a.kt)("h3",{id:"\u53c2\u6570\u8be6\u89e3-1"},"\u53c2\u6570\u8be6\u89e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.initSDK(config: InitConfig, operationID?: string):Promise<boolean>\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-2"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/init/config"},"InitConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<boolean",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<void",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n\nconst { instance: IMSDK } = getWithRenderProcess();\n\nIMSDK.initSDK({\n  platformID: 'your-platform-id',\n  apiAddr: 'http://your-server-ip:10002',\n  wsAddr: 'ws://your-server-ip:10001',\n  dataDir: 'your-db-dir',\n  logFilePath: 'your-log-file-path',\n  logLevel: LogLevel.Debug,\n  isLogStandardOutput: true,\n});\n"))),(0,a.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},'IMSDK.asyncApi("initSDK",operationID: string, config: InitConfig): Promise<boolean>\n')),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-3"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/init/config"},"InitConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u53c2\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill"),"\u5305\u5c06\u51fd\u6570 Promise \u5316\uff0c\u8c03\u7528\u65f6\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u5224\u65ad\u5e76\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\u56de\u8c03\u3002")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<boolean",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u521d\u59cb\u5316\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-4"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"// App.vue\nimport IMSDK from 'openim-uniapp-polyfill';\n\nconst path = await getDbDir();\nconst config = {\n  apiAddr: 'http://xxx:10002', // IM\u7684API\u63a5\u53e3\u5730\u5740\u3002\u5982\uff1ahttp://xxx:10002\n  wsAddr: 'ws://xxx:10001', // IM\u7684websocket\u5730\u5740\u3002\u5982\uff1a ws://xxx:10001\n  platformID: uni.$u.os() === 'ios' ? 1 : 2, // \u5e73\u53f0\uff0c\u53c2\u7167Platform\u7c7b,\n  dataDir: path, // \u6570\u636e\u5b58\u50a8\u8def\u5f84\n  logLevel: 6, // \u65e5\u5fd7\u6253\u5370\u7ea7\u522b\n  logFilePath: path, // \u65e5\u5fd7\u5b58\u50a8\u7684\u76ee\u5f55\n  isLogStandardOutput: true, // \u662f\u5426\u8f93\u51fa\u5230\u63a7\u5236\u53f0\n};\nconst flag = await IMSDK.asyncApi('initSDK', IMSDK.uuid(), config);\n\n// utils.js\nexport const getDbDir = () =>\n  new Promise((resolve, reject) => {\n    plus.io.requestFileSystem(plus.io.PRIVATE_DOC, (fs) => {\n      fs.root.getDirectory(\n        'user',\n        {\n          create: true,\n        },\n        (entry) => {\n          resolve(entry.fullPath);\n        },\n        (error) => {\n          reject(error);\n        }\n      );\n    });\n  });\n"))),(0,a.kt)(g,{value:"React-Native",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.initSDK(config: InitConfig, optionalID:string): Promise<boolean>\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-4"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/init/config"},"InitConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<boolean",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u521d\u59cb\u5316\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-5"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from 'open-im-sdk-rn';\nimport RNFS from 'react-native-fs';\n\nRNFS.mkdir(RNFS.DocumentDirectoryPath + '/tmp');\n\nOpenIMSDKRN.initSDK({\n  platformID: 2,  // 1: ios, 2: android\n  apiAddr: 'http://your-server-ip:10002',\n  wsAddr: 'ws://your-server-ip:10001',\n  dataDir: RNFS.DocumentDirectoryPath + '/tmp',\n  logLevel: 5,\n  isLogStandardOutput: true,\n}, 'operationID');\n"))),(0,a.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-4"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static bool InitSDK(IMConfig config, IConnCallBack cb)\n\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-5"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/init/config"},"IMConfig")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"SDK\u914d\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cb"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/listener/connectListener"},"IConnListener")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u8fde\u63a5\u72b6\u6001\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-6"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\nvar config = new IMConfig()\n{\n    PlatformID = (int)PlatformID,\n    WsAddr = wsAddr,\n    ApiAddr = apiAddr,\n    DataDir = dataDir,\n    LogLevel = 5,\n    IsLogStandardOutput = true,\n    LogFilePath = logDir,\n    IsExternalExtensions = true,\n};\nvar connListener = new IConnListener();\nvar res = IMSDK.InitSDK(config, connListener);\n\n")))))}b.isMDXComponent=!0}}]);