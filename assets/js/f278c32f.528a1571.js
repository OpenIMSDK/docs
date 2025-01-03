"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[72002],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Callback Before Setting Group Member Information",hide_title:!0},p="Callback Before Setting Group Member Information",c={unversionedId:"webhooks/group/setMemberInfoBefore",id:"webhooks/group/setMemberInfoBefore",title:"Callback Before Setting Group Member Information",description:"Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/group/setMemberInfoBefore.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/setMemberInfoBefore",permalink:"/restapi/webhooks/group/setMemberInfoBefore",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/setMemberInfoBefore.mdx",tags:[],version:"current",lastUpdatedAt:1735884673,formattedLastUpdatedAt:"Jan 3, 2025",frontMatter:{title:"Callback Before Setting Group Member Information",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback After Setting Group Member Information",permalink:"/restapi/webhooks/group/setMemberInfoAfter"},next:{title:"Callback After Transferring Group Ownership",permalink:"/restapi/webhooks/group/transferGroupOwnerAfter"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Scenarios that Trigger This Callback",id:"scenarios-that-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Example Request URL",id:"example-request-url",level:3},{value:"Example Request Package",id:"example-request-package",level:3},{value:"Request Package Field Descriptions",id:"request-package-field-descriptions",level:3},{value:"Example Response Package",id:"example-response-package",level:2},{value:"Allow Modification",id:"allow-modification",level:3},{value:"Response Package Field Descriptions",id:"response-package-field-descriptions",level:2}],s={toc:u},d="wrapper";function k(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},s,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"callback-before-setting-group-member-information"},"Callback Before Setting Group Member Information"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The App backend can use this callback to review the updated group member information before changes are applied. This allows the backend to review or modify the request before the information is actually updated."),(0,n.kt)("h2",{id:"important-notes"},"Important Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To enable this callback, configure the callback URL and activate the corresponding protocol switch. For configuration details, see the ",(0,n.kt)("a",{parentName:"li",href:"../introduction"},"Callback Introduction")," document."),(0,n.kt)("li",{parentName:"ul"},"The callback direction is from OpenIMServer to the App backend as an HTTP/HTTPS POST request."),(0,n.kt)("li",{parentName:"ul"},"The App business server must respond within the specified timeout period.")),(0,n.kt)("h2",{id:"scenarios-that-trigger-this-callback"},"Scenarios that Trigger This Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A group administrator modifies group member-related information through the client.")),(0,n.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before OpenIMServer updates the group member information.")),(0,n.kt)("h2",{id:"interface-description"},"Interface Description"),(0,n.kt)("h3",{id:"example-request-url"},"Example Request URL"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CallbackCommand")," here is: ",(0,n.kt)("inlineCode",{parentName:"p"},"callbackBeforeSetGroupMemberInfoCommand")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackBeforeSetGroupMemberInfoCommand?contenttype=json\n")),(0,n.kt)("h3",{id:"example-request-package"},"Example Request Package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackBeforeSetGroupMemberInfoCommand",\n  "groupID": "12345",\n  "userID": "user789",\n  "nickName": "user",\n  "faceURL": "http://example.com/path/to/face/image.png",\n  "roleLevel": 20,\n  "ex": "Extra data"\n}\n')),(0,n.kt)("h3",{id:"request-package-field-descriptions"},"Request Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback command; here it\u2019s the callback before setting group member info")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier of the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the member joining the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickName"),(0,n.kt)("td",{parentName:"tr",align:null},"*string"),(0,n.kt)("td",{parentName:"tr",align:null},"Nickname of the user in the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"*string"),(0,n.kt)("td",{parentName:"tr",align:null},"URL of the member\u2019s icon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roleLevel"),(0,n.kt)("td",{parentName:"tr",align:null},"*int32"),(0,n.kt)("td",{parentName:"tr",align:null},"User\u2019s permission level in the group. Regular member (20) or admin (60)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"*string"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional data field")))),(0,n.kt)("h2",{id:"example-response-package"},"Example Response Package"),(0,n.kt)("h3",{id:"allow-modification"},"Allow Modification"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": 0,\n    "ex": "Some extra data",\n    "nickName": "user",\n    "faceURL": "http://example.com/path/to/face/image.png",\n    "roleLevel": 20\n}\n')),(0,n.kt)("h2",{id:"response-package-field-descriptions"},"Response Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates whether the callback was successful. ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," means success.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"5001"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error code; in the range of 5000-9999. Set when ",(0,n.kt)("inlineCode",{parentName:"td"},"actionCode")," is not ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"nextCode")," equals ",(0,n.kt)("inlineCode",{parentName:"td"},"1"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,n.kt)("td",{parentName:"tr",align:null},"Simple error message for the custom error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,n.kt)("td",{parentName:"tr",align:null},"Detailed error information for the custom error code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Next step directive; set to ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to stop further action if ",(0,n.kt)("inlineCode",{parentName:"td"},"actionCode")," = ",(0,n.kt)("inlineCode",{parentName:"td"},"0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"*string"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional data field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nickName"),(0,n.kt)("td",{parentName:"tr",align:null},"*string"),(0,n.kt)("td",{parentName:"tr",align:null},"Nickname of the user in the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"*string"),(0,n.kt)("td",{parentName:"tr",align:null},"URL of the member\u2019s icon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roleLevel"),(0,n.kt)("td",{parentName:"tr",align:null},"*int32"),(0,n.kt)("td",{parentName:"tr",align:null},"User\u2019s permission level in the group. Regular member (20) or admin (60)")))))}k.isMDXComponent=!0}}]);