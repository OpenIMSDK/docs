"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[38895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(r),d=a,u=s["".concat(l,".").concat(d)]||s[d]||k[d]||p;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<p;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"\u5185\u7f51\u90e8\u7f72",sidebar_position:4},l=void 0,m={unversionedId:"gettingStarted/internalDeployment",id:"gettingStarted/internalDeployment",title:"\u5185\u7f51\u90e8\u7f72",description:"\ud83d\udccc open-im-server \u5185\u7f51\u90e8\u7f72\u6307\u5357",source:"@site/docs/guides/gettingStarted/internalDeployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/internalDeployment",permalink:"/guides/gettingStarted/internalDeployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/internalDeployment.mdx",tags:[],version:"current",lastUpdatedAt:1734516063,formattedLastUpdatedAt:"Dec 18, 2024",sidebarPosition:4,frontMatter:{title:"\u5185\u7f51\u90e8\u7f72",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Verification",permalink:"/guides/gettingStarted/quickTestServer"},next:{title:"k8s Deployment",permalink:"/guides/gettingStarted/k8s-deployment"}},c={},s=[{value:"\ud83d\udccc open-im-server \u5185\u7f51\u90e8\u7f72\u6307\u5357",id:"-open-im-server-\u5185\u7f51\u90e8\u7f72\u6307\u5357",level:2},{value:"<strong>Docker\u90e8\u7f72</strong>",id:"docker\u90e8\u7f72",level:3},{value:"<strong>\u6e90\u7801\u90e8\u7f72</strong>",id:"\u6e90\u7801\u90e8\u7f72",level:3}],k={toc:s},d="wrapper";function u(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-open-im-server-\u5185\u7f51\u90e8\u7f72\u6307\u5357"},"\ud83d\udccc open-im-server \u5185\u7f51\u90e8\u7f72\u6307\u5357"),(0,n.kt)("p",null,"\u672c\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5728\u4e00\u53f0\u6ca1\u6709\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u673a\u5668\u4e0a\u90e8\u7f72",(0,n.kt)("inlineCode",{parentName:"p"},"open-im-server"),"\u3002"),(0,n.kt)("h3",{id:"docker\u90e8\u7f72"},(0,n.kt)("strong",{parentName:"h3"},"Docker\u90e8\u7f72")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4e00\u53f0\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u673a\u5668\uff0c\u514b\u9686\u4ed3\u5e93\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/openimsdk/openim-docker\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u4ee5\u62c9\u53d6\u955c\u50cf\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u76f8\u5e94\u7684\u955c\u50cf\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker save -o image-name.tar image-name:tag\n")),(0,n.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u9700\u8981\u4fdd\u5b58",(0,n.kt)("inlineCode",{parentName:"p"},"openim-server"),"\u955c\u50cf\uff0c\u547d\u4ee4\u5e94\u4e3a\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker save -o openim-server.tar openim/openim-server:release-v3.8.1\n")),(0,n.kt)("p",{parentName:"li"},"\u4fdd\u5b58",(0,n.kt)("inlineCode",{parentName:"p"},"mongo"),"\u955c\u50cf\uff0c\u547d\u4ee4\u5e94\u4e3a\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker save -o mongo.tar mongo:7.0\n")),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"docker images"),"\u67e5\u770b\u62c9\u53d6\u7684\u955c\u50cf\u4fe1\u606f\uff0c\u6216\u8005\u5728",(0,n.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6\u4e2d\u786e\u8ba4\u955c\u50cf\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,n.kt)("p",{parentName:"li"},"\u6240\u6709\u9700\u8981\u4fdd\u5b58\u7684\u955c\u50cf\u4e3a\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mongo:7.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redis:7.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bitnami/kafka:3.5.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"minio/minio:RELEASE.2024-01-11T07-46-16Z")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"quay.io/coreos/etcd:v3.5.13")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"openim/openim-web-front:release-v3.8.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"openim/openim-admin-front:release-v1.8.3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"openim/openim-server:release-v3.8.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"openim/openim-chat:v1.8.2"))),(0,n.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u4e3a\u76d1\u63a7\u544a\u8b66\u7ec4\u4ef6\u955c\u50cf\uff0c\u53ef\u6839\u636e\u9700\u6c42\u9009\u62e9\u6027\u90e8\u7f72\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prom/prometheus:v2.51.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prom/alertmanager:v0.27.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grafana/grafana:11.0.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prom/node-exporter:v1.7.0")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5185\u7f51\u6216\u8005\u7269\u7406\u4ecb\u8d28\u5c06",(0,n.kt)("strong",{parentName:"p"},"\u955c\u50cf\u6587\u4ef6"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"docker\u4ed3\u5e93\u6587\u4ef6"),"\u62f7\u8d1d\u5230\u90e8\u7f72\u673a\u5668\u4e0a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bfc\u5165\u955c\u50cf\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"docker"),"\u4e2d\uff0c\u547d\u4ee4\u4e3a\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i image-name.tar\n")),(0,n.kt)("p",{parentName:"li"},"\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"p"},"openim-server"),"\u955c\u50cf\u5bfc\u5165\u547d\u4ee4\u4e3a\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker load -i openim-server.tar\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u4ed3\u5e93\u76ee\u5f55\u4e0b\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker copose up -d\n")),(0,n.kt)("p",{parentName:"li"},"\u9700\u8981\u542f\u52a8\u76d1\u63a7\u7ec4\u4ef6\u5219\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose --profile m up -d\n")))),(0,n.kt)("h3",{id:"\u6e90\u7801\u90e8\u7f72"},(0,n.kt)("strong",{parentName:"h3"},"\u6e90\u7801\u90e8\u7f72")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4e00\u53f0\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u673a\u5668\uff0c\u514b\u9686server\u4ed3\u5e93\u5efa\u8bae\u5207\u6362\u5230 release-v3.8.2 \u5206\u652f\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/openimsdk/open-im-server\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u514b\u9686",(0,n.kt)("inlineCode",{parentName:"p"},"chat"),"\u4ed3\u5e93\u5efa\u8bae\u5207\u6362\u5230 release-v1.8.3 \u5206\u652f"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openimsdk/chat\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"#Docker%E9%83%A8%E7%BD%B2"},"docker\u90e8\u7f72"),"\u6b65\u9aa4\uff0c\u4fdd\u5b58\u955c\u50cf\uff0c\u533a\u522b\u4e3a\u4e0d\u9700\u8981",(0,n.kt)("inlineCode",{parentName:"p"},"openim/openim-server:release-v3.8.2"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"openim/openim-chat:v1.8.2"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5185\u7f51\u6216\u8005\u7269\u7406\u4ecb\u8d28\u5c06",(0,n.kt)("strong",{parentName:"p"},"\u955c\u50cf\u6587\u4ef6"),"\u3001",(0,n.kt)("strong",{parentName:"p"},"server\u4ed3\u5e93\u6587\u4ef6"),"\u3001",(0,n.kt)("strong",{parentName:"p"},"chat\u4ed3\u5e93\u6587\u4ef6"),"\u62f7\u8d1d\u5230\u90e8\u7f72\u673a\u5668\u4e0a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bfc\u5165\u955c\u50cf\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"docker"),"\u4e2d\uff0c\u547d\u4ee4\u4e3a\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i image-name.tar\n")),(0,n.kt)("p",{parentName:"li"},"\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"p"},"mongo"),"\u955c\u50cf\u5bfc\u5165\u547d\u4ee4\u4e3a\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker load -i mongo.tar\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"server"),"\u76ee\u5f55\u4e0b\u4f9d\u6b21\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d  # \u5982\u9700\u542f\u7528\u76d1\u63a7\u7ec4\u4ef6\u5219\u4e3a docker compose --profile m up -d\nmage\nmage start\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"chat"),"\u76ee\u5f55\u4e0b\u8fd0\u884c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mage\nmage start\n")))))}u.isMDXComponent=!0}}]);