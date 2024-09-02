"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[64864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={},s="OIMWS SDK Server User Guide",p={unversionedId:"gettingStarted/jssdk",id:"gettingStarted/jssdk",title:"OIMWS SDK Server User Guide",description:"OIMWS SDK Server is a server-side program written in Go, designed to handle WebSocket connections and provide instant messaging services. This document aims to guide you through the installation and operation of OIMWS SDK Server, explaining its main features and parameter configurations.",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/jssdk.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/jssdk",permalink:"/guides/gettingStarted/jssdk",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/jssdk.mdx",tags:[],version:"current",lastUpdatedAt:1725247657,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Deployment for OpenIM",permalink:"/guides/gettingStarted/dockerCompose"},next:{title:"Nginx Domain Configuration",permalink:"/guides/gettingStarted/nginxDomainConfig"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Execution",id:"execution",level:2},{value:"Parameter Explanation",id:"parameter-explanation",level:3},{value:"Running Example",id:"running-example",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u},m="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oimws-sdk-server-user-guide"},"OIMWS SDK Server User Guide"),(0,r.kt)("p",null,"OIMWS SDK Server is a server-side program written in Go, designed to handle WebSocket connections and provide instant messaging services. This document aims to guide you through the installation and operation of OIMWS SDK Server, explaining its main features and parameter configurations."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can install OIMWS SDK Server in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Clone the GitHub Repository"),": Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/oimws"},"OIMWS GitHub Repository")," to your local environment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/openimsdk/oimws\n")),(0,r.kt)("p",{parentName:"li"},"After doing so, please read the README file and execute the program in the ",(0,r.kt)("inlineCode",{parentName:"p"},"example/")," directory."))),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"Before running OIMWS SDK Server, ensure it is correctly installed."),(0,r.kt)("p",null,"Running the program requires configuring some parameters, which you can set through command-line flags. Here is the main function of the program and its parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'openimApi: "http://127.0.0.1:10002"\nopenimWs: "ws://127.0.0.1:10001"\nsdkWsPort: [ 10003 ]\ndbDir: "../../../../db/"\n')),(0,r.kt)("h3",{id:"parameter-explanation"},"Parameter Explanation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openimApi"),": The listening address for the openIM API, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:10002"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openimWs"),": The WebSocket listening address for openIM, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"ws://127.0.0.1:10001"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sdkWsPort"),": The listening port for openIMSDK WebSocket, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"10003"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"dbDir"),": The directory for the openIM database, default is the ",(0,r.kt)("inlineCode",{parentName:"li"},"./db")," folder in the current directory.")),(0,r.kt)("h3",{id:"running-example"},"Running Example"),(0,r.kt)("p",null,"In the command line, you can modify these parameters by adding flags. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# compile\nmage\n# start\nmage start\n")),(0,r.kt)("p",null,"This will start the server and configure the service based on the provided parameters."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"OIMWS SDK Server offers a flexible and powerful platform for handling instant messages and WebSocket connections. By following this guide, you should be able to successfully install and operate OIMWS SDK Server, as well as understand and configure its main parameters. For more advanced configurations and detailed information, refer to the project's GitHub page and related documentation."))}g.isMDXComponent=!0}}]);