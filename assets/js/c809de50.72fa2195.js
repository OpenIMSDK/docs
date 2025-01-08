"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Callback After Group Creation",hide_title:!0},p="Callback After Group Creation",u={unversionedId:"webhooks/group/createAfter",id:"webhooks/group/createAfter",title:"Callback After Group Creation",description:"Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/group/createAfter.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/createAfter",permalink:"/restapi/webhooks/group/createAfter",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/createAfter.mdx",tags:[],version:"current",lastUpdatedAt:1736341155,formattedLastUpdatedAt:"Jan 8, 2025",frontMatter:{title:"Callback After Group Creation",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback Before Applying to Join Group",permalink:"/restapi/webhooks/group/applyJoinGroupBefore"},next:{title:"Callback Before Group Creation",permalink:"/restapi/webhooks/group/createBefore"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Scenarios that Trigger This Callback",id:"scenarios-that-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Example Request URL",id:"example-request-url",level:3},{value:"Example Request Package",id:"example-request-package",level:3},{value:"Request Package Field Descriptions",id:"request-package-field-descriptions",level:3},{value:"Example Response Package",id:"example-response-package",level:2},{value:"Response Package Field Descriptions",id:"response-package-field-descriptions",level:2}],m={toc:s},d="wrapper";function k(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"callback-after-group-creation"},"Callback After Group Creation"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The App\u2019s business server can use this callback to monitor information about newly created groups in real time, including notifications to the App backend that a group was created successfully. This allows the backend to perform data synchronization and other operations."),(0,n.kt)("h2",{id:"important-notes"},"Important Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To enable the callback, you must configure the callback URL and turn on the switch for this specific callback protocol. For configuration details, refer to the ",(0,n.kt)("a",{parentName:"li",href:"../introduction"},"Callback Introduction")," document."),(0,n.kt)("li",{parentName:"ul"},"The callback is initiated from the OpenIM Server to the App backend as an HTTP/HTTPS POST request."),(0,n.kt)("li",{parentName:"ul"},"The App business server must respond within the timeout period.")),(0,n.kt)("h2",{id:"scenarios-that-trigger-this-callback"},"Scenarios that Trigger This Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Successful group creation by an App user through the client."),(0,n.kt)("li",{parentName:"ul"},"Successful group creation by an App admin via REST API.")),(0,n.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Triggered ",(0,n.kt)("strong",{parentName:"li"},"after")," the OpenIM Server successfully creates a group.")),(0,n.kt)("h2",{id:"interface-description"},"Interface Description"),(0,n.kt)("h3",{id:"example-request-url"},"Example Request URL"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CallbackCommand")," here is: ",(0,n.kt)("inlineCode",{parentName:"p"},"callbackAfterCreateGroupCommand")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackAfterCreateGroupCommand?contenttype=json\n")),(0,n.kt)("h3",{id:"example-request-package"},"Example Request Package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackAfterCreateGroupCommand",\n  "groupID": "12345",\n  "groupName": "MyGroup",\n  "notification": "Welcome to MyGroup!",\n  "introduction": "This is a group for discussing example topics.",\n  "faceURL": "http://example.com/path/to/face/image.png",\n  "ownerUserID": "user123",\n  "createTime": 1673048592000,\n  "memberCount": 10,\n  "ex": "Extra data",\n  "status": 1,\n  "creatorUserID": "user123",\n  "groupType": 1,\n  "needVerification": 1,\n  "lookMemberInfo": 1,\n  "applyMemberFriend": 0,\n  "notificationUpdateTime": 1673048592000,\n  "notificationUserID": "user456",\n  "initMemberList": [\n    {\n      "userID": "user789",\n      "roleLevel": 60\n    },\n    {\n      "userID": "user101112",\n      "roleLevel": 20\n    }\n  ]\n}\n')),(0,n.kt)("h3",{id:"request-package-field-descriptions"},"Request Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback command for group creation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier for the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notification"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Group notification message.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"introduction"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Group introduction.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"URL for the group\u2019s icon.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the group owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"int64"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp for when the group was created (in ms).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,n.kt)("td",{parentName:"tr",align:null},"uint32"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of members in the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional data field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Group status.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the group creator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupType"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Group type, fixed at 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"needVerification"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether verification is needed to join the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lookMemberInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether group members\u2019 information is visible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"applyMemberFriend"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether members can add each other as friends.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notificationUpdateTime"),(0,n.kt)("td",{parentName:"tr",align:null},"int64"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp for when the notification was last updated (in ms).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notificationUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the person who updated the notification.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"initMemberList"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"List of initial group members, each with userID and roleLevel fields.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"initMemberList.userID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the initial group member.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"initMemberList.roleLevel"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Role level of the initial group member.")))),(0,n.kt)("h2",{id:"example-response-package"},"Example Response Package"),(0,n.kt)("p",null,"The App backend sends the following response package after synchronizing data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": 1\n}\n')),(0,n.kt)("h2",{id:"response-package-field-descriptions"},"Response Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates if the callback was executed correctly. ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," means success.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error code. Set to ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," to ignore callback results.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,n.kt)("td",{parentName:"tr",align:null},"Simple error message for the custom error code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,n.kt)("td",{parentName:"tr",align:null},"Detailed error information for the custom error code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Next action code, set to ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to halt further action if actionCode is ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),".")))))}k.isMDXComponent=!0}}]);