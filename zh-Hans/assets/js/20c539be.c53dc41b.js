"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[85714],{3905:(t,n,a)=>{a.d(n,{Zo:()=>k,kt:()=>o});var e=a(67294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=e.createContext({}),m=function(t){var n=e.useContext(d),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},k=function(t){var n=m(t.components);return e.createElement(d.Provider,{value:n},t.children)},u="mdxType",N={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},g=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),u=m(a),g=r,o=u["".concat(d,".").concat(g)]||u[g]||N[g]||l;return a?e.createElement(o,i(i({ref:n},k),{},{components:a})):e.createElement(o,i({ref:n},k))}));function o(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4660:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>k,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>u});a(67294);var e=a(3905);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})),t}function i(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={sidebar_position:5,toc_min_heading_level:2,toc_max_heading_level:2},d="FriendApplication",m={unversionedId:"class/relation/friendApplication",id:"class/relation/friendApplication",title:"FriendApplication",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/relation/friendApplication.mdx",sourceDirName:"class/relation",slug:"/class/relation/friendApplication",permalink:"/zh-Hans/sdks/class/relation/friendApplication",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/relation/friendApplication.mdx",tags:[],version:"current",lastUpdatedAt:1735884673,formattedLastUpdatedAt:"2025\u5e741\u67083\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"UserIDResult",permalink:"/zh-Hans/sdks/class/relation/UserIdResult"},next:{title:"FriendInfo",permalink:"/zh-Hans/sdks/class/relation/friendInfo"}},k={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"FriendApplicationInfo",id:"friendapplicationinfo",level:3},{value:"OIMFriendApplication",id:"oimfriendapplication",level:3},{value:"FriendApplicationInfo",id:"friendapplicationinfo-1",level:3},{value:"FriendApplicationItem",id:"friendapplicationitem",level:3},{value:"FriendApplicationItem",id:"friendapplicationitem-1",level:3},{value:"FriendApplicationItem",id:"friendapplicationitem-2",level:3},{value:"FriendApplicationInfo",id:"friendapplicationinfo-2",level:3}],N=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",n)},g=N("Tabs"),o=N("TabItem"),s={toc:u},c="wrapper";function b(t){var{components:n}=t,a=i(t,["components"]);return(0,e.kt)(c,l(function(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},e=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),e.forEach((function(n){r(t,n,a[n])}))}return t}({},s,a),{components:n,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"friendapplication"},"FriendApplication"),(0,e.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,e.kt)("admonition",{type:"info"},(0,e.kt)("p",{parentName:"admonition"},"\u597d\u53cb\u7533\u8bf7\u4fe1\u606f\u3002")),(0,e.kt)(g,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,e.kt)(o,{value:"Flutter",mdxType:"TabItem"},(0,e.kt)("h3",{id:"friendapplicationinfo"},"FriendApplicationInfo"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c\uff081 \u540c\u610f/-1 \u62d2\u7edd/0 \u672a\u5904\u7406\uff09")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u6dfb\u52a0\u597d\u53cb\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handlerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u597d\u53cb\u7533\u8bf7\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528"))))),(0,e.kt)(o,{value:"iOS",mdxType:"TabItem"},(0,e.kt)("h3",{id:"oimfriendapplication"},"OIMFriendApplication"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"HandleResult")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c\uff08\u540c\u610f/\u62d2\u7edd/\u672a\u5904\u7406\uff09")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u6dfb\u52a0\u597d\u53cb\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handlerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u597d\u53cb\u7533\u8bf7\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleTime"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528"))))),(0,e.kt)(o,{value:"Android",mdxType:"TabItem"},(0,e.kt)("h3",{id:"friendapplicationinfo-1"},"FriendApplicationInfo"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"ApplicationHandleResult")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c\uff08\u540c\u610f/\u62d2\u7edd/\u672a\u5904\u7406\uff09")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u6dfb\u52a0\u597d\u53cb\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handlerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u597d\u53cb\u7533\u8bf7\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleTime"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5"))))),(0,e.kt)(o,{value:"Web",mdxType:"TabItem"},(0,e.kt)("h3",{id:"friendapplicationitem"},"FriendApplicationItem"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"ApplicationHandleResult")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c\uff08\u540c\u610f/\u62d2\u7edd/\u672a\u5904\u7406\uff09")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u6dfb\u52a0\u597d\u53cb\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handlerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u597d\u53cb\u7533\u8bf7\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528"))))),(0,e.kt)(o,{value:"uni-app",mdxType:"TabItem"},(0,e.kt)("h3",{id:"friendapplicationitem-1"},"FriendApplicationItem"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"ApplicationHandleResult")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c\uff08\u540c\u610f/\u62d2\u7edd/\u672a\u5904\u7406\uff09")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u6dfb\u52a0\u597d\u53cb\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handlerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u597d\u53cb\u7533\u8bf7\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528"))))),(0,e.kt)(o,{value:"React-Native",mdxType:"TabItem"},(0,e.kt)("h3",{id:"friendapplicationitem-2"},"FriendApplicationItem"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"fromFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"toFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"ApplicationHandleResult")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c\uff08\u540c\u610f/\u62d2\u7edd/\u672a\u5904\u7406\uff09")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u6dfb\u52a0\u597d\u53cb\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handlerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u597d\u53cb\u7533\u8bf7\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"attachedInfo"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528"))))),(0,e.kt)(o,{value:"Unity",mdxType:"TabItem"},(0,e.kt)("h3",{id:"friendapplicationinfo-2"},"FriendApplicationInfo"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"FromUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"FromNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"FromFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ToUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ToNickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ToFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"HandleResult"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c\uff081 \u540c\u610f/-1 \u62d2\u7edd/0 \u672a\u5904\u7406\uff09")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ReqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u6dfb\u52a0\u597d\u53cb\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"CreateTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"HandlerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8005ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"HandleMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u597d\u53cb\u7533\u8bf7\u65f6\u9644\u5e26\u7684\u6d88\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"HandleTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u65f6\u95f4(\u6beb\u79d2)")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Ex"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"AttachedInfo"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6682\u672a\u4f7f\u7528")))))))}b.isMDXComponent=!0}}]);