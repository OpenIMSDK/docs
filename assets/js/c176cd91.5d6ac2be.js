"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[31280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={sidebar_position:2,title:"Callback Example",hide_title:!0},c="Implementing Chatbot Functionality with OpenIM",s={unversionedId:"webhooks/example",id:"webhooks/example",title:"Callback Example",description:"Brief Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/example.mdx",sourceDirName:"webhooks",slug:"/webhooks/example",permalink:"/restapi/webhooks/example",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/example.mdx",tags:[],version:"current",lastUpdatedAt:1722932252,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Callback Example",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback Description",permalink:"/restapi/webhooks/introduction"},next:{title:"Callback Before a User Joins a Group",permalink:"/restapi/webhooks/group/applyJoinGroupBefore"}},p={},u=[{value:"Brief Description",id:"brief-description",level:3},{value:"1. Modify the Configuration File",id:"1-modify-the-configuration-file",level:2},{value:"2. Create a Chatbot Account",id:"2-create-a-chatbot-account",level:2},{value:"3. Write the <strong>afterSendSingleMsg</strong> Interface",id:"3-write-the-aftersendsinglemsg-interface",level:2},{value:"4. Demonstration of Results",id:"4-demonstration-of-results",level:2}],m={toc:u},f="wrapper";function b(e){var{components:t}=e,l=a(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"implementing-chatbot-functionality-with-openim"},"Implementing Chatbot Functionality with OpenIM"),(0,r.kt)("h3",{id:"brief-description"},"Brief Description"),(0,r.kt)("p",null,"Implement chatbot functionality using the Webhook mechanism in OpenIM. After sending a text message or an image message to the chatbot, the bot will return the same message. Developers can replace this logic by calling the LLM interface to enable intelligent question-answering."),(0,r.kt)("h2",{id:"1-modify-the-configuration-file"},"1. Modify the Configuration File"),(0,r.kt)("p",null,"Refer to the template below to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/webhooks.yml")," configuration in open-im-server."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PC Web Interface",src:n(58295).Z,width:"371",height:"333"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," is the callback URL."),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"afterSendSingleMsg.enable")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to enable this callback."))),(0,r.kt)("h2",{id:"2-create-a-chatbot-account"},"2. Create a Chatbot Account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the admin console, refer to ",(0,r.kt)("a",{parentName:"li",href:"../../guides/gettingStarted/quickTestServer"},"this document"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a chatbot account in user management and note the ",(0,r.kt)("strong",{parentName:"li"},"userID")," of the account."),(0,r.kt)("li",{parentName:"ol"},"For convenience, set this ",(0,r.kt)("strong",{parentName:"li"},"userID")," as a default friend.")),(0,r.kt)("h2",{id:"3-write-the-aftersendsinglemsg-interface"},"3. Write the ",(0,r.kt)("strong",{parentName:"h2"},"afterSendSingleMsg")," Interface"),(0,r.kt)("p",null,"Refer to the example code below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("strong",{parentName:"li"},"robotics")," in the example with the ",(0,r.kt)("strong",{parentName:"li"},"userID")," obtained in step ",(0,r.kt)("strong",{parentName:"li"},"2"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Go"},'func (m *ChatApi) CallbackExample(c *gin.Context) {\n    // 1. Handling callbacks after sending a single chat message\n    msgInfo, err := handlingCallbackAfterSendMsg(c)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2. If the user receiving the message is a customer service bot, return the message.\n    // 2.1 UserID of the robot account\n    robotics := "robotics"\n\n    // 2.2 ChatRobot account validation and determining if messages are text and images\n    if msgInfo.SendID == robotics || msgInfo.RecvID != robotics {\n        return\n    }\n    if msgInfo.ContentType != constant.Picture && msgInfo.ContentType != constant.Text {\n        return\n    }\n\n    // 2.3 Get administrator token\n    adminToken, err := getAdminToken(c)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2.4 Get RobotAccount info\n    robUser, err := getRobotAccountInfo(c, adminToken.AdminToken, robotics)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2.5 Constructing the contents of the message field or invoking an LLM to implement AI-driven question answering.\n    mapStruct, err := contextToMap(c, msgInfo)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n\n    // 2.6 Send Message\n    err = sendMessage(c, adminToken.ImToken, robotics, msgInfo, robUser, mapStruct)\n    if err != nil {\n        apiresp.GinError(c, err)\n        return\n    }\n}\n')),(0,r.kt)("p",null,"For detailed code, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/chat/blob/main/example/callback/callback.go"},"this link")),(0,r.kt)("h2",{id:"4-demonstration-of-results"},"4. Demonstration of Results"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PC Web Interface",src:n(61433).Z,width:"588",height:"607"})))}b.isMDXComponent=!0},58295:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-4758c4b878c1af538e5f01394f420bd2.png"},61433:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/result-015cb7338598a6182110ee75ccdbb9e8.png"}}]);