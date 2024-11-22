"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[26541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={},s="Callback Before Message Push in Online Status",p={unversionedId:"webhooks/push/onlinePushBefore",id:"webhooks/push/onlinePushBefore",title:"Callback Before Message Push in Online Status",description:"Function Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/push/onlinePushBefore.mdx",sourceDirName:"webhooks/push",slug:"/webhooks/push/onlinePushBefore",permalink:"/restapi/webhooks/push/onlinePushBefore",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/push/onlinePushBefore.mdx",tags:[],version:"current",lastUpdatedAt:1732280367,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callback Before Pushing Messages in Offline State",permalink:"/restapi/webhooks/push/offlinePushBefore"},next:{title:"Callback for Adding a User to the Blacklist",permalink:"/restapi/webhooks/relationship/addBlack"}},u={},d=[{value:"Function Description",id:"function-description",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Scenarios That May Trigger This Callback",id:"scenarios-that-may-trigger-this-callback",level:2},{value:"Timing of the Callback",id:"timing-of-the-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Request URL Example",id:"request-url-example",level:3},{value:"Request Parameters Description",id:"request-parameters-description",level:3},{value:"Header",id:"header",level:3},{value:"Request Packet Example",id:"request-packet-example",level:3},{value:"Request Packet Fields Explanation",id:"request-packet-fields-explanation",level:3},{value:"Response Packet Example",id:"response-packet-example",level:2},{value:"Allow Push",id:"allow-push",level:3},{value:"Response Packet Fields Explanation",id:"response-packet-fields-explanation",level:2}],m={toc:d},c="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callback-before-message-push-in-online-status"},"Callback Before Message Push in Online Status"),(0,a.kt)("h2",{id:"function-description"},"Function Description"),(0,a.kt)("p",null,"Before sending messages to the client, the App business server can receive the request of sending messages through this callback. The business server can intercept, modify, or add additional push information to the message as needed."),(0,a.kt)("h2",{id:"precautions"},"Precautions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To enable the callback, a callback URL must be configured, and the switch corresponding to this callback protocol must be turned on. See the ",(0,a.kt)("a",{parentName:"li",href:"../introduction"},"Callback Instructions")," document for configuration methods."),(0,a.kt)("li",{parentName:"ul"},"The direction of the callback is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend."),(0,a.kt)("li",{parentName:"ul"},"After receiving the callback request, the App business server needs to respond within the timeout period.")),(0,a.kt)("h2",{id:"scenarios-that-may-trigger-this-callback"},"Scenarios That May Trigger This Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Group member leaves the group."),(0,a.kt)("li",{parentName:"ul"},"Group member is removed from the group."),(0,a.kt)("li",{parentName:"ul"},"Dissolution of the group.")),(0,a.kt)("h2",{id:"timing-of-the-callback"},"Timing of the Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before OpenIM Server prepares to push messages to the client.")),(0,a.kt)("h2",{id:"interface-description"},"Interface Description"),(0,a.kt)("h3",{id:"request-url-example"},"Request URL Example"),(0,a.kt)("p",null,"In the following example, the callback URL configured by the App is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://callbackurl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://callbackurl?command=$CallbackCommand&contenttype=json\n")),(0,a.kt)("h3",{id:"request-parameters-description"},"Request Parameters Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https"),(0,a.kt)("td",{parentName:"tr",align:null},"Request protocol is HTTPS, and the method is POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"https://callbackurl"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CallbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: callbackBeforePushCommand")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,a.kt)("td",{parentName:"tr",align:null},"Fixed value: JSON")))),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID is used for global link tracking")))),(0,a.kt)("h3",{id:"request-packet-example"},"Request Packet Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackBeforePushCommand",\n  "platformID": 1,\n  "platform": "iOS",\n  "userIDList": ["user123", "user456"],\n  "title": "New Message",\n  "desc": "You have a new message",\n  "ex": "Extra push info",\n  "iOSPushSound": "default",\n  "iOSBadgeCount": true,\n  "signalInfo": "Signal data",\n  "clientMsgID": "msg123",\n  "sendID": "user789",\n  "groupID": "group123",\n  "contentType": 1,\n  "sessionType": 2,\n  "atUserIDList": ["user101", "user102"],\n  "content": "Hello, this is a test message"\n}\n')),(0,a.kt)("h3",{id:"request-packet-fields-explanation"},"Request Packet Fields Explanation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback command, here it is the callback before message push")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platformID"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Platform ID (e.g., 1 for iOS, 2 for Android)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"platform"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Platform name (e.g., iOS, Android)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"List of user IDs who will receive this message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Title of the push message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"desc"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Description or main content of the push message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Extra push information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iOSPushSound"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sound used for push messages on iOS devices")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iOSBadgeCount"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to show the number of unread messages on the iOS app icon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"signalInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional signal data for transmitting extra information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Client message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Group ID (if the message is sent to a group)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contentType"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the message content type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sessionType"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the session type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"atUserIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"List of user IDs who are mentioned in the message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Content of the message being sent")))),(0,a.kt)("h2",{id:"response-packet-example"},"Response Packet Example"),(0,a.kt)("h3",{id:"allow-push"},"Allow Push"),(0,a.kt)("p",null,"Allow the message to be pushed to the client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": "",\n    "userIDList": ["user123", "user456"],\n    "offlinePushInfo": {\n        "title": "New Message",\n        "desc": "You have a new message",\n        "ex": "Extra push info",\n        "iOSPushSound": "default",\n        "iOSBadgeCount": true,\n        "signalInfo": "Signal data"\n    }\n}\n')),(0,a.kt)("h2",{id:"response-packet-fields-explanation"},"Response Packet Fields Explanation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates whether the business system callback was executed correctly. ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," means the operation was successful.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errCode"),(0,a.kt)("td",{parentName:"tr",align:null},"5001"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates a custom error code, ranging between 5000-9999. Set when actionCode is not 0; set when nextCode is 1.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,a.kt)("td",{parentName:"tr",align:null},"Simple error message corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,a.kt)("td",{parentName:"tr",align:null},"Detailed error information corresponding to the custom error code.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Next step instruction, ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," indicates refusal to continue execution, set when actionCode is ",(0,a.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"List of user IDs allowed to receive the message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"offlinePushInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Object of offline push information.")))))}k.isMDXComponent=!0}}]);