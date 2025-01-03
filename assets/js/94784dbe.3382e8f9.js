"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[80372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,u=c["".concat(o,".").concat(g)]||c[g]||m[g]||l;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},14901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Callback Before Sending Single Chat Message",hide_title:!0},o="Callback Before Sending Single Chat Message",p={unversionedId:"webhooks/msg/sendSingleMsgBefore",id:"webhooks/msg/sendSingleMsgBefore",title:"Callback Before Sending Single Chat Message",description:"Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/msg/sendSingleMsgBefore.mdx",sourceDirName:"webhooks/msg",slug:"/webhooks/msg/sendSingleMsgBefore",permalink:"/restapi/webhooks/msg/sendSingleMsgBefore",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/msg/sendSingleMsgBefore.mdx",tags:[],version:"current",lastUpdatedAt:1735884673,formattedLastUpdatedAt:"Jan 3, 2025",frontMatter:{title:"Callback Before Sending Single Chat Message",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback After Sending Single Chat Message",permalink:"/restapi/webhooks/msg/sendSingleMsgAfter"},next:{title:"Callback After Single Chat Message Read Report",permalink:"/restapi/webhooks/msg/singleMsgRead"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Scenarios that Trigger This Callback",id:"scenarios-that-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Example Request URL",id:"example-request-url",level:3},{value:"Example Request Package",id:"example-request-package",level:3},{value:"Request Package Field Descriptions",id:"request-package-field-descriptions",level:3},{value:"Example Response Package",id:"example-response-package",level:2},{value:"Allow Message Sending",id:"allow-message-sending",level:3},{value:"Response Package Field Descriptions",id:"response-package-field-descriptions",level:3}],m={toc:c},g="wrapper";function u(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callback-before-sending-single-chat-message"},"Callback Before Sending Single Chat Message"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The App backend can use this callback to take action on single chat messages in real-time, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logging single chat messages."),(0,a.kt)("li",{parentName:"ul"},"Blocking user requests with inappropriate content.")),(0,a.kt)("h2",{id:"important-notes"},"Important Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To enable this callback, configure the callback URL and activate the corresponding protocol switch. For configuration details, see the ",(0,a.kt)("a",{parentName:"li",href:"../introduction"},"Callback Introduction")," document."),(0,a.kt)("li",{parentName:"ul"},"The callback direction is from OpenIMServer to the App backend as an HTTP/HTTPS POST request."),(0,a.kt)("li",{parentName:"ul"},"The App backend must respond to this request within the specified timeout.")),(0,a.kt)("h2",{id:"scenarios-that-trigger-this-callback"},"Scenarios that Trigger This Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A user sends a single chat message through the client."),(0,a.kt)("li",{parentName:"ul"},"An administrator sends a single chat message via the REST API.")),(0,a.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After OpenIMServer receives the user\u2019s single chat message but before distributing it to the target user.")),(0,a.kt)("h2",{id:"interface-description"},"Interface Description"),(0,a.kt)("h3",{id:"example-request-url"},"Example Request URL"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CallbackCommand")," here is: ",(0,a.kt)("inlineCode",{parentName:"p"},"callbackBeforeSendSingleMsgCommand")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackBeforeSendSingleMsgCommand?contenttype=json\n")),(0,a.kt)("h3",{id:"example-request-package"},"Example Request Package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sendID": "user123",\n  "callbackCommand": "callbackBeforeSendSingleMsgCommand",\n  "serverMsgID": "msg001",\n  "clientMsgID": "clientmsg001",\n  "operationID": "1646445464564",\n  "senderPlatformID": 1,\n  "senderNickname": "User123",\n  "sessionType": 1,\n  "msgFrom": 1,\n  "contentType": 1,\n  "status": 1,\n  "sendTime": 1673048592000,\n  "createTime": 1673048592000,\n  "content": "Hello, this is a test message",\n  "seq": 1001,\n  "atUserList": ["user456", "user789"],\n  "faceURL": "http://example.com/path/to/user/image.png",\n  "ex": "Extra data",\n  "recvID": "user456"\n}\n')),(0,a.kt)("h3",{id:"request-package-field-descriptions"},"Request Package Field Descriptions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's user ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback command, used for callback before sending a single chat message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"serverMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Server-assigned message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientMsgID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Client-assigned message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Used for global tracking")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderPlatformID"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's platform ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"senderNickname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender's nickname")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sessionType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msgFrom"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Source of the message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contentType"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"int32"),(0,a.kt)("td",{parentName:"tr",align:null},"Status of the message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sendTime"),(0,a.kt)("td",{parentName:"tr",align:null},"int64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp of message sent (milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createTime"),(0,a.kt)("td",{parentName:"tr",align:null},"int64"),(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp of message creation (milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Message content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seq"),(0,a.kt)("td",{parentName:"tr",align:null},"uint32"),(0,a.kt)("td",{parentName:"tr",align:null},"Sequence number of the message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"List of group member IDs; ignore for single chat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"URL for sender's avatar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Extra data field")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recvID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Receiver's user ID")))),(0,a.kt)("h2",{id:"example-response-package"},"Example Response Package"),(0,a.kt)("h3",{id:"allow-message-sending"},"Allow Message Sending"),(0,a.kt)("p",null,"Allowing the user to send the message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": 0\n}\n')),(0,a.kt)("h3",{id:"response-package-field-descriptions"},"Response Package Field Descriptions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates whether the callback was successfully executed. ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," means success.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errCode"),(0,a.kt)("td",{parentName:"tr",align:null},"5001"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error code, ranges from 5000-9999, set when ",(0,a.kt)("inlineCode",{parentName:"td"},"actionCode")," is not 0, or ",(0,a.kt)("inlineCode",{parentName:"td"},"nextCode")," is 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:null},'"Message"'),(0,a.kt)("td",{parentName:"tr",align:null},"Simple error message for the custom error code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:null},'"Detailed information"'),(0,a.kt)("td",{parentName:"tr",align:null},"Detailed error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Next step directive, ",(0,a.kt)("inlineCode",{parentName:"td"},"1")," to halt further action if ",(0,a.kt)("inlineCode",{parentName:"td"},"actionCode")," is ",(0,a.kt)("inlineCode",{parentName:"td"},"0"))))))}u.isMDXComponent=!0}}]);