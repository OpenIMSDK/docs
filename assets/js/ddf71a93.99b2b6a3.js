"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[42443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>m});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={sidebar_position:1,title:"user_register",hide_title:!0},p=void 0,s={unversionedId:"apis/userManagement/userRegister",id:"apis/userManagement/userRegister",title:"user_register",description:"user_register",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/userManagement/userRegister.mdx",sourceDirName:"apis/userManagement",slug:"/apis/userManagement/userRegister",permalink:"/restapi/apis/userManagement/userRegister",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/userManagement/userRegister.mdx",tags:[],version:"current",lastUpdatedAt:1727678663,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"user_register",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"force_logout",permalink:"/restapi/apis/authenticationManagement/forceLogout"},next:{title:"account_check",permalink:"/restapi/apis/userManagement/checkUserRegistered"}},u={},m=[{value:"user_register",id:"user_register",level:2},{value:"Brief Description",id:"brief-description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Parameter Example",id:"request-parameter-example",level:3},{value:"Successful Response Example",id:"successful-response-example",level:3},{value:"Explanation for Successful Response Parameters",id:"explanation-for-successful-response-parameters",level:3},{value:"Failed Response Example",id:"failed-response-example",level:3},{value:"Explanation for Failed Response Parameters",id:"explanation-for-failed-response-parameters",level:3}],c={toc:m},d="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("h2",{id:"user_register"},"user_register")),(0,a.kt)("h3",{id:"brief-description"},"Brief Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After users complete account registration through the AppServer, the AppServer then calls this interface to import into OpenIM, achieving account integration.")),(0,a.kt)("h3",{id:"request-method"},"Request Method"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,a.kt)("h3",{id:"request-url"},"Request URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/user/user_register")," ")),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID for global link tracking")))),(0,a.kt)("h3",{id:"request-parameter-example"},"Request Parameter Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "secret": "openIM123",\n  "users": [\n    {\n      "userID": "11111112",\n      "nickname": "yourNickname",\n      "faceURL": "yourFaceURL"\n    }\n  ]\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"openIM secret key, see the secret field in config/config.yaml")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"users"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"users.userID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"User ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"users.nickname"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"User nickname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"users.faceURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"User profile picture link")))),(0,a.kt)("h3",{id:"successful-response-example"},"Successful Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": ""\n}\n')),(0,a.kt)("h3",{id:"explanation-for-successful-response-parameters"},"Explanation for Successful Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Error code, 0 means success")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty if no error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Detailed error information, empty if no error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"General data object, specific structure below")))),(0,a.kt)("h3",{id:"failed-response-example"},"Failed Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1001,\n  "errMsg": "ArgsError",\n  "errDlt": ""\n}\n')),(0,a.kt)("h3",{id:"explanation-for-failed-response-parameters"},"Explanation for Failed Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Error code, refer to the global error code document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Detailed error information")))))}f.isMDXComponent=!0}}]);