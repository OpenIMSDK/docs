"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[32466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,N=d["".concat(m,".").concat(k)]||d[k]||g[k]||r;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[d]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const s={sidebar_position:11.2,toc_min_heading_level:2,toc_max_heading_level:2},m="createFileMessageByURL",p={unversionedId:"api/message/createFileMessageByURL",id:"api/message/createFileMessageByURL",title:"createFileMessageByURL",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/message/createFileMessageByURL.mdx",sourceDirName:"api/message",slug:"/api/message/createFileMessageByURL",permalink:"/zh-Hans/sdks/api/message/createFileMessageByURL",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/createFileMessageByURL.mdx",tags:[],version:"current",lastUpdatedAt:1716081647,formattedLastUpdatedAt:"2024\u5e745\u670819\u65e5",sidebarPosition:11.2,frontMatter:{sidebar_position:11.2,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"createFileMessageFromFullPath",permalink:"/zh-Hans/sdks/api/message/createFileMessageFromFullPath"},next:{title:"createFileMessageByFile",permalink:"/zh-Hans/sdks/api/message/createFileMessageByFile"}},u={},d=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-4",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-5",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-5",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-6",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-6",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-6",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-6",level:3}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},k=g("Tabs"),N=g("TabItem"),o={toc:d},c="wrapper";function h(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(c,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},o,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"createfilemessagebyurl"},"createFileMessageByURL"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u9700\u8981\u81ea\u884c\u5b58\u50a8\u8d44\u6e90\u65f6\uff0c\u81ea\u884c\u901a\u8fc7api\u4e0a\u4f20\u6587\u4ef6\u5e76\u83b7\u53d6\u4e0b\u8f7d\u5730\u5740\u540e\u8c03\u7528\u6b64api\u521b\u5efa\u6587\u4ef6\u6d88\u606f\u3002")),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u8be5api\u521b\u5efa\u7684\u6d88\u606f\u5fc5\u987b\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),"\u53d1\u9001\u3002")),(0,n.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(N,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future<Message> createFileMessageByURL({\n    required FileElem fileElem,\n    String? operationID,\n  })\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileElem"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/fileElem"},"FileElem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7edd\u5bf9\u8def\u5f84")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"   Message msg = await OpenIM.iMManager.messageManager.createFileMessageByURL(fileElem: FileElem());\n    //todo\n"))),(0,n.kt)(N,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n+ (OIMMessageInfo *)createFileMessageByURL:(NSString *)fileURL\n                                  fileName:(NSString * _Nullable)fileName\n                                      size:(NSInteger)size;\n\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileURL"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7edd\u5bf9\u8def\u5f84")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileName"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d\u5b57")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5927\u5c0f")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"OIMMessageInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\nOIMMessageInfo *message = [OIMMessageInfo createFileMessageByURL:@"" fileName:nil, size:1];\n\n'))),(0,n.kt)(N,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    public Message createFileMessageByURL(FileElem fileElem)\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-2"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileElem"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/fileElem"},"FileElem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7edd\u5bf9\u8def\u5f84")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Message Message= OpenIMClient.getInstance().messageManager.createFileMessageByURL( fileElem)\n"))),(0,n.kt)(N,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.createFileMessage({\n  filePath: string;\n  fileName: string;\n  uuid: string;\n  sourceUrl: string;\n  fileSize: number;\n  fileType?: string;\n}, operationID?: string): Promise<WsResponse<MessageItem>>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-3"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filePath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u8def\u5f84\uff0c\u4f20\u7a7a\u5b57\u7b26\u4e32\u5373\u53ef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u552f\u4e00 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sourceUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u4e0b\u8f7d\u5730\u5740\uff0c\u81ea\u884c\u4e0a\u6587\u4ef6\u5e76\u901a\u8fc7",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss")," \u53d1\u9001\u65f6\uff0c\u9700\u8981\u4f20\u5165\u8fdc\u7a0b url\uff0c\u5426\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileSize"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5927\u5c0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7c7b\u578b\uff0c\u4e00\u822c\u4e3a\u540e\u7f00\u540d")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem"),">",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WsResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from 'open-im-sdk-wasm';\nconst IMSDK = getSDK();\n// or\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.createFileMessage({\n  filePath: '',\n  fileName: 'fileName.mp4',\n  uuid: 'uuid',\n  sourceUrl: '',\n  fileSize: 1024,\n  fileType: 'mp4',\n})\n  .then(({ data }) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(N,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-4"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('createFileMessageByURL', operationID: string, {\n  filePath: string;\n  fileName: string;\n  uuid: string;\n  sourceUrl: string;\n  fileSize: number;\n  fileType: string;\n}): Promise<MessageItem>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-4"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filePath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u8def\u5f84\uff0c\u4f20\u7a7a\u5b57\u7b26\u4e32\u5373\u53ef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u552f\u4e00 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sourceUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u4e0b\u8f7d\u5730\u5740\uff0c\u81ea\u884c\u4e0a\u6587\u4ef6\u540e\u83b7\u5f97\u7684\u8fdc\u7a0b url \u5730\u5740\uff0c\u9700\u8981\u901a\u8fc7",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss")," \u53d1\u9001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileSize"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5927\u5c0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7c7b\u578b\uff0c\u4e00\u822c\u4e3a\u540e\u7f00\u540d")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill"),"\u5305\u5c06\u51fd\u6570 Promise \u5316\uff0c\u8c03\u7528\u65f6\u9700\u8981\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"then"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"catch"),"\u5224\u65ad\u5e76\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\u56de\u8c03\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-4"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('createFileMessageByURL', IMSDK.uuid(), {\n  filePath: '',\n  fileName: 'fileName.mp4',\n  uuid: 'uuid',\n  sourceUrl: 'https://sourceUrl.mp4',\n  fileSize: 1024,\n  fileType: 'mp4',\n})\n  .then((data) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(N,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-5"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.createFileMessageByURL( {\n  filePath: string,\n  fileName: string,\n  uuid: string,\n  sourceUrl: string,\n  fileSize: number,\n  fileType: string,\n}, operationID: string): Promise<MessageItem>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-5"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filePath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u8def\u5f84\uff0c\u4f20\u7a7a\u5b57\u7b26\u4e32\u5373\u53ef")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uuid"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u552f\u4e00 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sourceUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u4e0b\u8f7d\u5730\u5740\uff0c\u81ea\u884c\u4e0a\u6587\u4ef6\u540e\u83b7\u5f97\u7684\u8fdc\u7a0b url \u5730\u5740\uff0c\u9700\u8981\u901a\u8fc7",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss")," \u53d1\u9001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileSize"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5927\u5c0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7c7b\u578b\uff0c\u4e00\u822c\u4e3a\u540e\u7f00\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-5"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-5"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.createFileMessageByURL({\n  filePath: '',\n  fileName: 'fileName.mp4',\n  uuid: 'uuid',\n  sourceUrl: 'https://sourceUrl.mp4',\n  fileSize: 1024,\n  fileType: 'mp4',\n}, 'operationID')\n  .then((data) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(N,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-6"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static MsgStruct CreateFileMessageByURL(FileElem fileElem)\n\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-6"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileElem"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/fileElem"},"FileElem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7edd\u5bf9\u8def\u5f84")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-6"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MsgStruct")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-6"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\nvar msg = IMSDK.CreateFileMessageByURL(new FileElem(){\n\n});\n\n")))))}h.isMDXComponent=!0}}]);