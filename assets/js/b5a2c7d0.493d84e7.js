"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[94642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Callback After Transferring Group Ownership",hide_title:!0},s="Callback After Transferring Group Ownership",p={unversionedId:"webhooks/group/transferGroupOwnerAfter",id:"webhooks/group/transferGroupOwnerAfter",title:"Callback After Transferring Group Ownership",description:"Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/group/transferGroupOwnerAfter.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/transferGroupOwnerAfter",permalink:"/restapi/webhooks/group/transferGroupOwnerAfter",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/transferGroupOwnerAfter.mdx",tags:[],version:"current",lastUpdatedAt:1733823305,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"Callback After Transferring Group Ownership",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback Before Setting Group Member Information",permalink:"/restapi/webhooks/group/setMemberInfoBefore"},next:{title:"Callback After Single Chat Message Recall",permalink:"/restapi/webhooks/introduction"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Scenarios that Trigger This Callback",id:"scenarios-that-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Example Request URL",id:"example-request-url",level:3},{value:"Example Request Package",id:"example-request-package",level:3},{value:"Request Package Field Descriptions",id:"request-package-field-descriptions",level:3},{value:"Example Response Package",id:"example-response-package",level:2},{value:"Success Response",id:"success-response",level:3},{value:"Failure Response",id:"failure-response",level:3},{value:"Response Package Field Descriptions",id:"response-package-field-descriptions",level:2}],d={toc:u},m="wrapper";function k(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"callback-after-transferring-group-ownership"},"Callback After Transferring Group Ownership"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The App backend can use this callback to receive information about group ownership transfers and, if needed, to carry out follow-up processing or logging of the transferred group."),(0,n.kt)("h2",{id:"important-notes"},"Important Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To enable this callback, configure the callback URL and activate the corresponding protocol switch. For configuration details, see the ",(0,n.kt)("a",{parentName:"li",href:"../introduction"},"Callback Introduction")," document."),(0,n.kt)("li",{parentName:"ul"},"The callback direction is from OpenIMServer to the App backend as an HTTP/HTTPS POST request."),(0,n.kt)("li",{parentName:"ul"},"The App backend must respond to this request within the specified timeout.")),(0,n.kt)("h2",{id:"scenarios-that-trigger-this-callback"},"Scenarios that Trigger This Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A user or administrator transfers group ownership via the client or API interface.")),(0,n.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After OpenIMServer successfully transfers group ownership.")),(0,n.kt)("h2",{id:"interface-description"},"Interface Description"),(0,n.kt)("h3",{id:"example-request-url"},"Example Request URL"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CallbackCommand")," here is: ",(0,n.kt)("inlineCode",{parentName:"p"},"callbackAfterTransferGroupOwnerCommand")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackAfterTransferGroupOwnerCommand?contenttype=json\n")),(0,n.kt)("h3",{id:"example-request-package"},"Example Request Package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackAfterTransferGroupOwnerCommand",\n  "groupID": "G12345",\n  "oldOwnerUserID": "userOld123",\n  "newOwnerUserID": "userNew456"\n}\n')),(0,n.kt)("h3",{id:"request-package-field-descriptions"},"Request Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback command; here, it's the callback after transferring group ownership")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier of the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oldOwnerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the previous group owner")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"newOwnerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the new group owner")))),(0,n.kt)("h2",{id:"example-response-package"},"Example Response Package"),(0,n.kt)("h3",{id:"success-response"},"Success Response"),(0,n.kt)("p",null,"Indicates that the business system successfully processed the group ownership transfer callback."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": 0\n}\n')),(0,n.kt)("h3",{id:"failure-response"},"Failure Response"),(0,n.kt)("p",null,"Indicates that the business system could not process the callback, with error details."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 1,\n    "errCode": 5002,\n    "errMsg": "Unable to process the request",\n    "errDlt": "The group ownership transfer cannot be processed due to internal policy",\n    "nextCode": 1\n}\n')),(0,n.kt)("h2",{id:"response-package-field-descriptions"},"Response Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates if the callback was successfully executed. ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," for success.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error code; use ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," to ignore the callback result")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Simple error message for the custom error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Detailed error information for the custom error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Next step directive; set to ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to stop further action if ",(0,n.kt)("inlineCode",{parentName:"td"},"actionCode")," = ",(0,n.kt)("inlineCode",{parentName:"td"},"0"))))))}k.isMDXComponent=!0}}]);