"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[80082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"API Documentation",sidebar_position:1},l="OpenIM Server APIs",s={unversionedId:"introduction",id:"introduction",title:"API Documentation",description:"\ud83d\ude80 REST API",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/restapi/introduction",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1732280367,formattedLastUpdatedAt:"Nov 22, 2024",sidebarPosition:1,frontMatter:{title:"API Documentation",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"get_admin_token",permalink:"/restapi/apis/authenticationManagement/getAdminToken"}},c={},u=[{value:"\ud83d\ude80 REST API",id:"-rest-api",level:2},{value:"\ud83d\udd17 Webhooks",id:"-webhooks",level:2}],m={toc:u},d="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openim-server-apis"},"OpenIM Server APIs"),(0,r.kt)("h2",{id:"-rest-api"},"\ud83d\ude80 REST API"),(0,r.kt)("p",null,"OpenIM Server offers a ",(0,r.kt)("strong",{parentName:"p"},"REST API")," for integration with business systems to enhance functionality. Examples include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udee0 Creating groups"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec Sending messages")),(0,r.kt)("p",null,"For more details, refer to the API documentation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note"),":\nIn the request URL, ",(0,r.kt)("inlineCode",{parentName:"p"},"{API_ADDRESS}")," refers to the host address where OpenIM Server is deployed, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"http://IP:10002"),"."),(0,r.kt)("p",{parentName:"blockquote"},"To call the ",(0,r.kt)("strong",{parentName:"p"},"REST API"),", you need to use an ",(0,r.kt)("strong",{parentName:"p"},"APP Administrator")," account. This service is accessible via port ",(0,r.kt)("inlineCode",{parentName:"p"},"10002"),". An ",(0,r.kt)("strong",{parentName:"p"},"APP Administrator")," is a user with super admin privileges. OpenIM Server includes a built-in APP Administrator with the userID ",(0,r.kt)("inlineCode",{parentName:"p"},"imAdmin"),"."),(0,r.kt)("p",{parentName:"blockquote"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," request have a maximum length limit of ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"API Authentication Process:")),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"./apis/authenticationManagement/getAdminToken"},(0,r.kt)("inlineCode",{parentName:"a"},"user_token API"))," to retrieve the admin token."),(0,r.kt)("li",{parentName:"ol"},"Use the admin token to call other APIs.")),(0,r.kt)("p",{parentName:"blockquote"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," request have a maximum length limit of ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),".")),(0,r.kt)("h2",{id:"-webhooks"},"\ud83d\udd17 Webhooks"),(0,r.kt)("p",null,"OpenIM Server also offers powerful callback functionality to accommodate various business needs. A ",(0,r.kt)("strong",{parentName:"p"},"webhook")," triggers an outbound request to the business server when certain events occur, either before or after processing. Examples include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce4 Pre-message send callback"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce5 Post-message send callback")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the request URL, ",(0,r.kt)("inlineCode",{parentName:"p"},"{WEBHOOK_ADDRESS}")," refers to the host address where ",(0,r.kt)("inlineCode",{parentName:"p"},"webhook")," is deployed.")))}f.isMDXComponent=!0}}]);