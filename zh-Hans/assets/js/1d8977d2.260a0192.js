"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[39494],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),f=a,c=u["".concat(p,".").concat(f)]||u[f]||g[f]||l;return n?r.createElement(c,i(i({ref:e},d),{},{components:n})):r.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65362:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>u});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={sidebar_position:8,title:"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4",hide_title:!0},p=void 0,m={unversionedId:"apis/groupManagement/getJoinedGroupList",id:"apis/groupManagement/getJoinedGroupList",title:"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4",description:"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4",source:"@site/docs/restapi/apis/groupManagement/getJoinedGroupList.mdx",sourceDirName:"apis/groupManagement",slug:"/apis/groupManagement/getJoinedGroupList",permalink:"/zh-Hans/restapi/apis/groupManagement/getJoinedGroupList",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/groupManagement/getJoinedGroupList.mdx",tags:[],version:"current",lastUpdatedAt:1725247657,formattedLastUpdatedAt:"2024\u5e749\u67082\u65e5",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u7fa4\u6210\u5458\u5217\u8868",permalink:"/zh-Hans/restapi/apis/groupManagement/getGroupMemberList"},next:{title:"\u4fee\u6539\u7fa4\u6210\u5458\u4fe1\u606f",permalink:"/zh-Hans/restapi/apis/groupManagement/setGroupMemberInfo"}},d={},u=[{value:"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4",id:"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],g={toc:u},f="wrapper";function c(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(f,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("center",null,(0,r.kt)("h2",{id:"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4"},"\u83b7\u53d6\u5df2\u52a0\u5165\u7fa4\u7ec4")),(0,r.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6307\u5b9a\u7528\u6237\u5df2\u52a0\u5165\u7684\u7fa4\u7ec4\u3002")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,r.kt)("h3",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://x.x.x.x:10002/group/get_joined_group_list")," ")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"operationID\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458token")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fromUserID": "9906953281",\n  "pagination": {\n    "showNumber": 10,\n    "pageNumber": 1\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fromUserID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5206\u9875\u53c2\u6570\u7ed3\u6784\u4f53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination.showNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875\u7801\uff0c\u4ece1\u5f00\u59cb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination.pageNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875\u8bf7\u6c42\u6570\u91cf")))),(0,r.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "total": 3,\n    "groups": [\n      {\n        "groupID": "2137448827",\n        "groupName": "11111",\n        "notification": "",\n        "introduction": "",\n        "faceURL": "",\n        "ownerUserID": "3517105008",\n        "createTime": 1687753739612,\n        "memberCount": 3,\n        "ex": "",\n        "status": 0,\n        "creatorUserID": "2699373280",\n        "groupType": 2,\n        "needVerification": 0,\n        "lookMemberInfo": 0,\n        "applyMemberFriend": 0,\n        "notificationUpdateTime": 0,\n        "notificationUserID": ""\n      },\n      {\n        "groupID": "2759960147",\n        "groupName": "\u54fc\u54fc\u5527\u5527",\n        "notification": "",\n        "introduction": "",\n        "faceURL": "",\n        "ownerUserID": "4771680259",\n        "createTime": 1688106933734,\n        "memberCount": 7,\n        "ex": "",\n        "status": 0,\n        "creatorUserID": "4771680259",\n        "groupType": 2,\n        "needVerification": 0,\n        "lookMemberInfo": 0,\n        "applyMemberFriend": 0,\n        "notificationUpdateTime": 0,\n        "notificationUserID": ""\n      },\n      {\n        "groupID": "3686066424",\n        "groupName": "chao\u3001\u591a\u4e45\u65f6\u95f4\u30012234",\n        "notification": "",\n        "introduction": "",\n        "faceURL": "",\n        "ownerUserID": "9906953281",\n        "createTime": 1687933342067,\n        "memberCount": 3,\n        "ex": "",\n        "status": 0,\n        "creatorUserID": "9906953281",\n        "groupType": 2,\n        "needVerification": 0,\n        "lookMemberInfo": 0,\n        "applyMemberFriend": 0,\n        "notificationUpdateTime": 0,\n        "notificationUserID": ""\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,0\u8868\u793a\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u6570\u636e\u5bf9\u8c61\uff0c\u5177\u4f53\u7ed3\u6784\u89c1\u4e0b\u65b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"total"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a0\u5165\u7684\u7fa4\u603b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"groups"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/commonFields#groupinfo"},"\u7fa4\u4fe1\u606f"),"\u5217\u8868")))),(0,r.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,r.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,\u5177\u4f53\u67e5\u770b\u5168\u5c40\u9519\u8bef\u7801\u6587\u6863")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f")))))}c.isMDXComponent=!0}}]);