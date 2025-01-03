"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[82674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>g});r(67294);var n=r(3905);const a=r.p+"assets/images/pc-web-981838781d374d3bddb9719c8f77f3c3.png",i=r.p+"assets/images/1688095532548-f4dbc43550242238543bd53a2cb4d36a.jpg",o=r.p+"assets/images/1688095537589-f56ff847aa73544b8c4760c2a1f5b972.jpg";function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Quick Verification",sidebar_position:3},d=void 0,u={unversionedId:"gettingStarted/quickTestServer",id:"gettingStarted/quickTestServer",title:"Quick Verification",description:"\ud83d\udccc Part 1: Deploying the Server",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/quickTestServer.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/quickTestServer",permalink:"/guides/gettingStarted/quickTestServer",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/quickTestServer.mdx",tags:[],version:"current",lastUpdatedAt:1735884673,formattedLastUpdatedAt:"Jan 3, 2025",sidebarPosition:3,frontMatter:{title:"Quick Verification",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Source Code Deployment",permalink:"/guides/gettingStarted/imSourceCodeDeployment"},next:{title:"\u5185\u7f51\u90e8\u7f72",permalink:"/guides/gettingStarted/internalDeployment"}},m={},g=[{value:"\ud83d\udccc Part 1: Deploying the Server",id:"-part-1-deploying-the-server",level:2},{value:"Part 2: Opening Ports",id:"part-2-opening-ports",level:2},{value:"\ud83d\udce1 IM Ports",id:"-im-ports",level:3},{value:"\ud83d\udcac Chat Ports",id:"-chat-ports",level:3},{value:"\ud83d\udcbb PC Web and Admin Frontend Resource Ports",id:"-pc-web-and-admin-frontend-resource-ports",level:3},{value:"\ud83d\udcbb Grafana Port",id:"-grafana-port",level:3},{value:"Part 3: Verification",id:"part-3-verification",level:2},{value:"PC Web Verification",id:"pc-web-verification",level:3},{value:"App Verification",id:"app-verification",level:3}],f={toc:g},b="wrapper";function k(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(b,p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-part-1-deploying-the-server"},"\ud83d\udccc Part 1: Deploying the Server"),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"./dockerCompose"},"Docker Deployment")," or ",(0,n.kt)("a",{parentName:"p",href:"./imSourceCodeDeployment"},"Source Code Deployment")," for deployment instructions."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"part-2-opening-ports"},"Part 2: Opening Ports"),(0,n.kt)("h3",{id:"-im-ports"},"\ud83d\udce1 IM Ports"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"TCP Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Operation \u2699\ufe0f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:10001"),(0,n.kt)("td",{parentName:"tr",align:null},"ws protocol, message port for client SDK"),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:10002"),(0,n.kt)("td",{parentName:"tr",align:null},"api port, for interfaces like user, friends, groups, messages"),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:10005"),(0,n.kt)("td",{parentName:"tr",align:null},"Needed when choosing MinIO storage (OpenIM defaults to MinIO storage)"),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")))),(0,n.kt)("h3",{id:"-chat-ports"},"\ud83d\udcac Chat Ports"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"TCP Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Operation \u2699\ufe0f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:10008"),(0,n.kt)("td",{parentName:"tr",align:null},"Business systems, such as registration, login, etc."),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:10009"),(0,n.kt)("td",{parentName:"tr",align:null},"Admin backend, such as statistics, account suspension, etc."),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")))),(0,n.kt)("h3",{id:"-pc-web-and-admin-frontend-resource-ports"},"\ud83d\udcbb PC Web and Admin Frontend Resource Ports"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"TCP Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Operation \u2699\ufe0f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:11001"),(0,n.kt)("td",{parentName:"tr",align:null},"PC Web frontend resources"),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:11002"),(0,n.kt)("td",{parentName:"tr",align:null},"Admin frontend resources"),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")))),(0,n.kt)("h3",{id:"-grafana-port"},"\ud83d\udcbb Grafana Port"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"TCP Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Operation \u2699\ufe0f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TCP:13000"),(0,n.kt)("td",{parentName:"tr",align:null},"Grafana port"),(0,n.kt)("td",{parentName:"tr",align:null},"Open port")))),(0,n.kt)("h2",{id:"part-3-verification"},"Part 3: Verification"),(0,n.kt)("h3",{id:"pc-web-verification"},"PC Web Verification"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"http://ip:11001")," in the browser to access PC Web. This IP is the server's OPENIM_IP; ensure the browser can access it. For first-time use, please register with a mobile number; the default verification code is ",(0,n.kt)("inlineCode",{parentName:"p"},"666666"),".")),(0,n.kt)("img",{src:a,width:"700",alt:"PC Web Interface"}),(0,n.kt)("h3",{id:"app-verification"},"App Verification"),(0,n.kt)("p",null,"Scan the QR code below or click ",(0,n.kt)("a",{parentName:"p",href:"https://www.pgyer.com/IM-FCER"},"here")," to download."),(0,n.kt)("img",{src:"https://www.openim.io/_next/image?url=https%3A%2F%2Fwww.pgyer.com%2Fapp%2Fqrcode%2FIM-FCER&w=256&q=75",width:"300",alt:"Download App"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Double-click the OpenIM logo, then change the IP to the server's OPENIM_IP and restart the App.\nPlease ensure relevant ports are open and restart the App after making changes. For first-time use, please register with a mobile number; the default verification code is ",(0,n.kt)("inlineCode",{parentName:"p"},"666666"),".")),(0,n.kt)("img",{src:i,width:"400",alt:"Server Address Modification - Step 1"}),(0,n.kt)("img",{src:o,width:"400",alt:"Server Address Modification - Step 2"}))}k.isMDXComponent=!0}}]);