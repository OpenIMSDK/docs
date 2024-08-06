"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[71776],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),u=a,s=c["".concat(p,".").concat(u)]||c[u]||k[u]||l;return n?r.createElement(s,i(i({ref:e},m),{},{components:n})):r.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63524:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>c});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={sidebar_position:2,title:"\u4ee5secret\u83b7\u53d6token",hide_title:!0},p=void 0,d={unversionedId:"apis/authenticationManagement/getToken",id:"apis/authenticationManagement/getToken",title:"\u4ee5secret\u83b7\u53d6token",description:"\u4ee5secret\u83b7\u53d6token",source:"@site/docs/restapi/apis/authenticationManagement/getToken.mdx",sourceDirName:"apis/authenticationManagement",slug:"/apis/authenticationManagement/getToken",permalink:"/zh-Hans/restapi/apis/authenticationManagement/getToken",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/authenticationManagement/getToken.mdx",tags:[],version:"current",lastUpdatedAt:1722932252,formattedLastUpdatedAt:"2024\u5e748\u67086\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4ee5secret\u83b7\u53d6token",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6\u666e\u901a\u7528\u6237token",permalink:"/zh-Hans/restapi/apis/authenticationManagement/getUserToken"},next:{title:"\u5f3a\u5236\u7528\u6237\u4e0b\u7ebf",permalink:"/zh-Hans/restapi/apis/authenticationManagement/forceLogout"}},m={},c=[{value:"\u4ee5secret\u83b7\u53d6token",id:"\u4ee5secret\u83b7\u53d6token",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],k={toc:c},u="wrapper";function s(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(u,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("center",null,(0,r.kt)("h2",{id:"\u4ee5secret\u83b7\u53d6token"},"\u4ee5secret\u83b7\u53d6token")),(0,r.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7528\u6237\u6216 APP \u7ba1\u7406\u5458token\u3002")),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": OpenIMServer \u5185\u7f6e\u4e86\u4e00\u4e2aAPP \u7ba1\u7406\u5458\uff0c\u5b83\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"userID")," \u662f",(0,r.kt)("inlineCode",{parentName:"p"},"imAdmin"),"\uff1a"),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,r.kt)("h3",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://x.x.x.x:10002/auth/user_token")," ")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"operationID\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "secret": "openIM123",\n  "platformID": 1,\n  "userID": "111111"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"openIM \u5bc6\u94a5\uff0c\u89c1config/config.yaml\u4e2dsecret\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"platformID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0ID, 1\uff1aIOS\uff0c2\uff1aAndroid\uff0c3\uff1aWindows\uff0c4\uff1aOSX\uff0c5\uff1aWeb\uff0c6\uff1aMiniWeb\uff0c7\uff1aLinux\uff0c8\uff1aAndroid Pad\uff0c9\uff1aIPad\uff0c10\uff1aadmin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID\u6216\u7ba1\u7406\u5458ID\uff0c \u5982\u751f\u6210\u7ba1\u7406\u5458token\uff0c \u9700\u586b\u5199 ",(0,r.kt)("inlineCode",{parentName:"td"},"imAdmin"))))),(0,r.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJvcGVuSU1BZG1pbiIsIlBsYXRmb3JtSUQiOjEsImV4cCI6MTY5Njc1NDgwNSwibmJmIjoxNjg4OTc4NTA1LCJpYXQiOjE2ODg5Nzg4MDV9.SAu86X3PzfYjtjBeYA4vZefNr1IiFKRgg12FeiXSm14",\n    "expireTimeSeconds": 7776000\n  }\n}\n')),(0,r.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,0\u8868\u793a\u6210\u529f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f,\u65e0\u9519\u8bef\u65f6\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u6570\u636e\u5bf9\u8c61\uff0c\u5177\u4f53\u7ed3\u6784\u89c1\u4e0b\u65b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u83b7\u53d6\u5230\u7684\u7528\u6237token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expireTimeSeconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token\u7684\u8fc7\u671f\u65f6\u95f4\uff08\u5355\u4f4d\u79d2\uff09")))),(0,r.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,r.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,\u5177\u4f53\u67e5\u770b\u5168\u5c40\u9519\u8bef\u7801\u6587\u6863")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f")))))}s.isMDXComponent=!0}}]);