"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[37937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},71924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>o,toc:()=>m});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_position:14,title:"is_friend",hide_title:!0},s=void 0,o={unversionedId:"apis/friendsManagement/checkFriend",id:"apis/friendsManagement/checkFriend",title:"is_friend",description:"is_friend",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/friendsManagement/checkFriend.mdx",sourceDirName:"apis/friendsManagement",slug:"/apis/friendsManagement/checkFriend",permalink:"/restapi/apis/friendsManagement/checkFriend",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/friendsManagement/checkFriend.mdx",tags:[],version:"current",lastUpdatedAt:1736476238,formattedLastUpdatedAt:"Jan 10, 2025",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"is_friend",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"update_friends",permalink:"/restapi/apis/friendsManagement/updateFriends"},next:{title:"delete_friend",permalink:"/restapi/apis/friendsManagement/deleteFriend"}},d={},m=[{value:"is_friend",id:"is_friend",level:2},{value:"Description",id:"description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Body Example",id:"request-body-example",level:3},{value:"Success Response Example",id:"success-response-example",level:3},{value:"Success Response Parameters",id:"success-response-parameters",level:3},{value:"Failure Response Example",id:"failure-response-example",level:3},{value:"Failure Response Parameters",id:"failure-response-parameters",level:3}],u={toc:m},c="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("center",null,(0,n.kt)("h2",{id:"is_friend"},"is_friend")),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check if two users are friends.")),(0,n.kt)("h3",{id:"request-method"},"Request Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"post"))),(0,n.kt)("h3",{id:"request-url"},"Request URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/friend/is_friend"))),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Used for global traceability, recommended to use a timestamp for uniqueness in each request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/restapi/apis/authenticationManagement/getAdminToken"},"Admin token"))))),(0,n.kt)("h3",{id:"request-body-example"},"Request Body Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userID1": "11111111",\n  "userID2": "11111112"\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"userID1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"userID2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID")))),(0,n.kt)("h3",{id:"success-response-example"},"Success Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "inUser1Friends": true,\n    "inUser2Friends": true\n  }\n}\n')),(0,n.kt)("h3",{id:"success-response-parameters"},"Success Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code, 0 means success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty if successful")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error information, empty if successful")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"General data object, structure below")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"inUser1Friends"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true: ",(0,n.kt)("inlineCode",{parentName:"td"},"userID2")," is in ",(0,n.kt)("inlineCode",{parentName:"td"},"userID1"),"'s friend list")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"inUser2Friends"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true: ",(0,n.kt)("inlineCode",{parentName:"td"},"userID1")," is in ",(0,n.kt)("inlineCode",{parentName:"td"},"userID2"),"'s friend list")))),(0,n.kt)("h3",{id:"failure-response-example"},"Failure Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,n.kt)("h3",{id:"failure-response-parameters"},"Failure Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code, refer to the global error code documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error message")))))}f.isMDXComponent=!0}}]);