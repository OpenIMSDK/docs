"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[31735],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,k=u["".concat(m,".").concat(g)]||u[g]||d[g]||l;return a?n.createElement(k,s(s({ref:t},o),{},{components:a})):n.createElement(k,s({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={sidebar_position:28,toc_min_heading_level:2,toc_max_heading_level:2},m="searchLocalMessages",p={unversionedId:"api/message/searchLocalMessages",id:"api/message/searchLocalMessages",title:"searchLocalMessages",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/message/searchLocalMessages.mdx",sourceDirName:"api/message",slug:"/api/message/searchLocalMessages",permalink:"/sdks/api/message/searchLocalMessages",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/searchLocalMessages.mdx",tags:[],version:"current",lastUpdatedAt:1729476751,formattedLastUpdatedAt:"Oct 21, 2024",sidebarPosition:28,frontMatter:{sidebar_position:28,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"deleteAllMsgFromLocalAndSvr",permalink:"/sdks/api/message/deleteAllMsgFromLocalAndSvr"},next:{title:"getAdvancedHistoryMessageList",permalink:"/sdks/api/message/getAdvancedHistoryMessageList"}},o={},u=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Result",id:"return-result",level:3},{value:"SearchResult",id:"searchresult",level:4},{value:"Code Sample",id:"code-sample",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"OIMSearchResultInfo",id:"oimsearchresultinfo",level:4},{value:"Code Sample",id:"code-sample-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Return Results",id:"return-results",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-3",level:3},{value:"Input Parameters",id:"input-parameters-3",level:3},{value:"Return Results",id:"return-results-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Prototype",id:"function-prototype-4",level:3},{value:"Input Parameters",id:"input-parameters-4",level:3},{value:"Return Result",id:"return-result-2",level:3},{value:"Code Example",id:"code-example-2",level:3},{value:"Function Prototype",id:"function-prototype-5",level:3},{value:"Input Parameter",id:"input-parameter",level:3},{value:"Return Result",id:"return-result-3",level:3},{value:"SearchMessageResult",id:"searchmessageresult",level:4},{value:"Code Example",id:"code-example-3",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},g=d("Tabs"),k=d("TabItem"),c={toc:u},N="wrapper";function h(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(N,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"searchlocalmessages"},"searchLocalMessages"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{title:"Description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Search local messages.")),(0,n.kt)(g,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future<SearchResult> searchLocalMessages({\n    String? conversationID,\n    List<String> keywordList = const [],\n    int keywordListMatchType = 0,\n    List<String> senderUserIDList = const [],\n    List<int> messageTypeList = const [],\n    int searchTimePosition = 0,\n    int searchTimePeriod = 0,\n    int pageIndex = 1,\n    int count = 40,\n    String? operationID,\n  })\n")),(0,n.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"conversationID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Search by conversation. If it's a global search, pass null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordList"),(0,n.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of search keywords, currently supports searching for one keyword only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordListMatchType"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'Keyword matching mode, 1 means "and", 2 means "or", not used at the moment')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"senderUserIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"List of specified sender uids. Not used currently")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageTypeList"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/enum/messageContentType"},"int"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of message types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePosition"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Starting point of the search. Default is 0, meaning search starts now. UTC timestamp in seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePeriod"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Time range from the starting point, in seconds. Default is 0, meaning no time limit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageIndex"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of items per page")))),(0,n.kt)("h3",{id:"return-result"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},"SearchResult"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful return")))),(0,n.kt)("h4",{id:"searchresult"},"SearchResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"totalCount"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Total number of messages found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchResultItems"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/searchResultItem"},"SearchResultItems"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Search results returned by the searchXXX method")))),(0,n.kt)("h3",{id:"code-sample"},"Code Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    SearchResult result =  await OpenIM.iMManager.messageManager.searchLocalMessages();\n    // todo\n"))),(0,n.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)searchLocalMessages:(OIMSearchParam *)param\n                  onSuccess:(nullable OIMMessageSearchCallback)onSuccess\n                  onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,n.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"conversationID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Conversation ID. If null, it's a global search")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordList"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray<NSString *>"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of search keywords, currently supports searching for one keyword only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordListMatchType"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'Keyword matching mode, 1 means "and", 2 means "or", not used at the moment')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"senderUserIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray<NSString *>"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"List of specified sender uids. Not used currently")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageTypeList"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray<",(0,n.kt)("a",{parentName:"td",href:"/sdks/enum/messageContentType"},"MessageContentType"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of message types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePosition"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Starting point of the search. Default is 0, meaning search starts now. UTC timestamp in seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePeriod"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Time range from the starting point, in seconds. Default is 0, meaning no time limit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageIndex"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page number, starts from 1. Invalid when conversationID is null, i.e., in global search")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of items per page. Invalid when conversationID is null, i.e., in global search")))),(0,n.kt)("h3",{id:"return-result-1"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,n.kt)("td",{parentName:"tr",align:null},"OIMSearchResultInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful return")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,n.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,n.kt)("td",{parentName:"tr",align:null},"Failed return")))),(0,n.kt)("h4",{id:"oimsearchresultinfo"},"OIMSearchResultInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"totalCount"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"Total number of messages found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchResultItems"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray< ",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/searchResultItem"},"OIMSearchResultItemInfo")," *>"),(0,n.kt)("td",{parentName:"tr",align:null},"Search results")))),(0,n.kt)("h3",{id:"code-sample-1"},"Code Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\nOIMSearchParam *param = [OIMSearchParam new];\nparam.conversationID = @"";\nparam.keywordList = @[];\n\n[OIMManager.manager searchLocalMessages:param\n                              onSuccess:^(OIMSearchResultInfo * _Nullable result) {\n\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n\n}];\n\n'))),(0,n.kt)(k,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"type SearchMessageResult = {\n  totalCount: number;\n  searchResultItems: SearchMessageResultItem[];\n};\n\nIMSDK.searchLocalMessages({\n  conversationID?: string;\n  keywordList: string[];\n  keywordListMatchType?: number;\n  senderUserIDList?: string[];\n  messageTypeList: MessageType[];\n  searchTimePosition: number;\n  searchTimePeriod: number;\n  pageIndex: number;\n  count: number;\n}, operationID?: string): Promise<WsResponse<SearchMessageResult>>\n")),(0,n.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"conversationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Search based on a conversation. If it's a global search, pass an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Search keyword list, currently only supports one keyword search.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordListMatchType"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'Keyword matching mode, 1 means "AND", 2 means "OR", currently unused.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"senderUserIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the list of message sending userIDs, currently unused.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageTypeList"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/enum/messageContentType"},"MessageType"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of message types.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePosition"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting point of the search. By default, 0 means to start the search from now. UTC timestamp, in seconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePeriod"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The time range from the starting point, in seconds. By default, 0 means no time limit, 24x60x60 means the past day.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageIndex"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of items per page.")))),(0,n.kt)("h3",{id:"return-results"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<SearchMessageResult",">",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Success callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,n.kt)("h3",{id:"code-example"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.searchLocalMessages({\n  conversationID: '',\n  keywordList: ['keyword'],\n  keywordListMatchType: 0,\n  senderUserIDList: [],\n  messageTypeList: [101],\n  searchTimePosition: 0,\n  searchTimePeriod: 0,\n  pageIndex: 1,\n  count: 20,\n})\n  .then(({ data }) => {\n    // On successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // On failed call\n  });\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"function-prototype-3"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"type SearchMessageResult = {\n  totalCount: number;\n  searchResultItems: SearchMessageResultItem[];\n};\n\nIMSDK.asyncApi('searchLocalMessages', operationID: string, {\n    conversationID?: string;\n    keywordList: string[];\n    keywordListMatchType?: number;\n    senderUserIDList?: string[];\n    messageTypeList: MessageType[];\n    searchTimePosition: number;\n    searchTimePeriod: number;\n    pageIndex: number;\n    count: number;\n}): Promise<SearchMessageResult>\n")),(0,n.kt)("h3",{id:"input-parameters-3"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem localization, keep unique, recommend using the current time and a random number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"conversationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Search based on a conversation. If it's a global search, pass an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Search keyword list, currently only supports one keyword search.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordListMatchType"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'Keyword matching mode, 1 means "AND", 2 means "OR", currently unused.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"senderUserIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the list of message sending userIDs, currently unused.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageTypeList"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/enum/messageContentType"},"MessageType"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of message types.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePosition"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting point of the search. By default, 0 means to start the search from now. UTC timestamp, in seconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePeriod"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The time range from the starting point, in seconds. By default, 0 means no time limit, 24x60x60 means the past day.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageIndex"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of items per page.")))),(0,n.kt)("h3",{id:"return-results-1"},"Return Results"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The function is made into a Promise via the ",(0,n.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill")," package. When calling, use ",(0,n.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"catch")," to handle success and failure callbacks.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<SearchMessageResult",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Success callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,n.kt)("h3",{id:"code-example-1"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('searchLocalMessages', IMSDK.uuid(), {\n  conversationID: '',\n  keywordList: ['keyword'],\n  keywordListMatchType: 0,\n  senderUserIDList: [],\n  messageTypeList: [101],\n  searchTimePosition: 0,\n  searchTimePeriod: 0,\n  pageIndex: 1,\n  count: 20,\n})\n  .then((data) => {\n    // On successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // On failed call\n  });\n"))),(0,n.kt)(k,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-4"},"Function Prototype"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/sdks/class/message/searchResultItem"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchMessageResultItem")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"type SearchMessageResult = {\n  totalCount: number;\n  searchResultItems: SearchMessageResultItem[];\n};\n\nOpenIMSDKRN.searchLocalMessages( {\n  conversationID?: string,\n  keywordList: string[],\n  keywordListMatchType?: number,\n  senderUserIDList?: string[],\n  messageTypeList: MessageType[],\n  searchTimePosition: number,\n  searchTimePeriod: number,\n  pageIndex: number,\n  count: number,\n}, operationID: string): Promise<SearchMessageResult>\n")),(0,n.kt)("h3",{id:"input-parameters-4"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem localization, keep unique, recommend using the current time and a random number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"conversationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Search based on a conversation. If it's a global search, pass an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Search keyword list, currently only supports one keyword search.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"keywordListMatchType"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'Keyword matching mode, 1 means "AND", 2 means "OR", currently unused.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"senderUserIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the list of message sending userIDs, currently unused.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageTypeList"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/enum/messageContentType"},"MessageType"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of message types.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePosition"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting point of the search. By default, 0 means to start the search from now. UTC timestamp, in seconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchTimePeriod"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The time range from the starting point, in seconds. By default, 0 means no time limit, 24x60x60 means the past day.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageIndex"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Current page number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of items per page.")))),(0,n.kt)("h3",{id:"return-result-2"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<SearchMessageResult",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback on successful call")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback on failed call")))),(0,n.kt)("h3",{id:"code-example-2"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.searchLocalMessages({\n  conversationID: '',\n  keywordList: ['keyword'],\n  keywordListMatchType: 0,\n  senderUserIDList: [],\n  messageTypeList: [101],\n  searchTimePosition: 0,\n  searchTimePeriod: 0,\n  pageIndex: 1,\n  count: 20,\n}, 'operationID')\n  .then((data) => {\n    // On successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // On failed call\n  });\n"))),(0,n.kt)(k,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-5"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static void SearchLocalMessages(OnBase<SearchMessageResult> cb, SearchMessagesParams searchParam)\n\n")),(0,n.kt)("h3",{id:"input-parameter"},"Input Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cb"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase"),"< SearchMessageResult>"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"searchParam"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/SearchMessagesParams"},"SearchMessagesParams")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Search Setting")))),(0,n.kt)("h3",{id:"return-result-3"},"Return Result"),(0,n.kt)("h4",{id:"searchmessageresult"},"SearchMessageResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TotalCount"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Total number of messages found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SearchResultItems"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/searchResultItem"},"SearchResultItems"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Search results")))),(0,n.kt)("h3",{id:"code-example-3"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.SearchLocalMessages((res,errCode,errMsg)=>{\n\n},new SearchMessagesParams(){\n\n});\n")))))}h.isMDXComponent=!0}}]);