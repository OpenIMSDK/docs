"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[6217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,u=c["".concat(i,".").concat(d)]||c[d]||s[d]||o;return n?r.createElement(u,l(l({ref:t},k),{},{components:n})):r.createElement(u,l({ref:t},k))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"docker\u90e8\u7f72",sidebar_position:3},i=void 0,m={unversionedId:"gettingStarted/dockerCompose",id:"gettingStarted/dockerCompose",title:"docker\u90e8\u7f72",description:"\u73af\u5883\u51c6\u5907 \ud83c\udf0d",source:"@site/docs/guides/gettingStarted/dockerCompose.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/dockerCompose",permalink:"/zh-Hans/guides/gettingStarted/dockerCompose",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/dockerCompose.mdx",tags:[],version:"current",lastUpdatedAt:1725247657,formattedLastUpdatedAt:"2024\u5e749\u67082\u65e5",sidebarPosition:3,frontMatter:{title:"docker\u90e8\u7f72",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6e90\u7801\u90e8\u7f72",permalink:"/zh-Hans/guides/gettingStarted/imSourceCodeDeployment"},next:{title:"\u76d1\u63a7\u53ca\u544a\u8b66",permalink:"/zh-Hans/guides/gettingStarted/admin"}},k={},c=[{value:"\u73af\u5883\u51c6\u5907 \ud83c\udf0d",id:"\u73af\u5883\u51c6\u5907-",level:2},{value:"\u4ed3\u5e93\u514b\u9686 \ud83d\uddc2\ufe0f",id:"\u4ed3\u5e93\u514b\u9686-\ufe0f",level:2},{value:"\u914d\u7f6e\u4fee\u6539 \ud83d\udd27",id:"\u914d\u7f6e\u4fee\u6539-",level:2},{value:"\u670d\u52a1\u542f\u52a8 \ud83d\ude80",id:"\u670d\u52a1\u542f\u52a8-",level:2},{value:"\u5feb\u901f\u4f53\u9a8c \u26a1",id:"\u5feb\u901f\u4f53\u9a8c-",level:2},{value:"\u4ee5\u4e0b\u662frelease-v3.6\u53ca\u4e4b\u524d\u7684\u7248\u672c\u90e8\u7f72\u6d41\u7a0b",id:"\u4ee5\u4e0b\u662frelease-v36\u53ca\u4e4b\u524d\u7684\u7248\u672c\u90e8\u7f72\u6d41\u7a0b",level:2},{value:"1. \u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42",id:"1-\u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42",level:2},{value:"2. docker\u90e8\u7f72",id:"2-docker\u90e8\u7f72",level:2},{value:"2.1 \u514b\u9686\u4ed3\u5e93\u5e76\u521d\u59cb\u5316",id:"21-\u514b\u9686\u4ed3\u5e93\u5e76\u521d\u59cb\u5316",level:2},{value:"2.2 \u8bbe\u7f6eOPENIM_IP",id:"22-\u8bbe\u7f6eopenim_ip",level:2},{value:"2.3 \u542f\u52a8\u670d\u52a1\u53ca\u67e5\u770b\u65e5\u5fd7",id:"23-\u542f\u52a8\u670d\u52a1\u53ca\u67e5\u770b\u65e5\u5fd7",level:2},{value:"3. \u5feb\u901f\u9a8c\u8bc1",id:"3-\u5feb\u901f\u9a8c\u8bc1",level:2},{value:"4. \u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf",id:"4-\u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf",level:2},{value:"5. \u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539",id:"5-\u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539",level:2},{value:"5.1 \u5171\u7528\u914d\u7f6e\u9879",id:"51-\u5171\u7528\u914d\u7f6e\u9879",level:3},{value:"5.2 \u4fee\u6539\u65b9\u6cd5",id:"52-\u4fee\u6539\u65b9\u6cd5",level:3},{value:"5.3 \u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539",id:"53-\u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539",level:3},{value:"\u2753 6. \u5e38\u89c1\u95ee\u9898",id:"-6-\u5e38\u89c1\u95ee\u9898",level:2},{value:"6.1 \u80fd\u6b63\u5e38\u53d1\u9001\u6587\u672c\u6d88\u606f\uff0c\u4f46\u53d1\u9001\u56fe\u7247\u5931\u8d25 \ud83d\ude15",id:"61-\u80fd\u6b63\u5e38\u53d1\u9001\u6587\u672c\u6d88\u606f\u4f46\u53d1\u9001\u56fe\u7247\u5931\u8d25-",level:3},{value:"\u89e3\u51b3\u65b9\u6848\uff1a",id:"\u89e3\u51b3\u65b9\u6848",level:4},{value:"6.2 \u5173\u4e8e Docker \u7248\u672c \ud83d\udc0b",id:"62-\u5173\u4e8e-docker-\u7248\u672c-",level:3},{value:"6.3 \u65e5\u5fd7\u67e5\u770b \ud83d\udcdc",id:"63-\u65e5\u5fd7\u67e5\u770b-",level:3}],s={toc:c},d="wrapper";function u(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},s,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u73af\u5883\u51c6\u5907-"},"\u73af\u5883\u51c6\u5907 \ud83c\udf0d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u5e26\u6709 Compose \u63d2\u4ef6\u7684 Docker \u6216 docker-compose\u3002\u5b89\u88c5\u8be6\u60c5\u8bf7\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/"},"Docker Compose \u5b89\u88c5\u6307\u5357"),"\u3002")),(0,r.kt)("h2",{id:"\u4ed3\u5e93\u514b\u9686-\ufe0f"},"\u4ed3\u5e93\u514b\u9686 \ud83d\uddc2\ufe0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openimsdk/openim-docker\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u4fee\u6539-"},"\u914d\u7f6e\u4fee\u6539 \ud83d\udd27"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff0c\u914d\u7f6e\u5916\u7f51 IP\u3002\u5982\u679c\u4f7f\u7528\u57df\u540d\uff0c\u9700\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/zh-Hans/guides/gettingStarted/nginxDomainConfig"},"Nginx")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'# \u8bbe\u7f6e MinIO \u670d\u52a1\u7684\u5916\u7f51\u8bbf\u95ee\u5730\u5740\uff08\u5916\u7f51IP\u6216\u57df\u540d\uff09\nMINIO_EXTERNAL_ADDRESS="http://external_ip:10005"\n# \u8bbe\u7f6e Grafana \u670d\u52a1\u7684\u5916\u7f51\u8bbf\u95ee\u5730\u5740\uff08\u5916\u7f51IP\u6216\u57df\u540d\uff09\nGRAFANA_URL="http://external_ip:13000/"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5176\u4ed6\u914d\u7f6e\u8bf7\u53c2\u8003 .env \u4e2d\u7684\u6ce8\u91ca"))),(0,r.kt)("h2",{id:"\u670d\u52a1\u542f\u52a8-"},"\u670d\u52a1\u542f\u52a8 \ud83d\ude80"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8\u670d\u52a1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62\u670d\u52a1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u65e5\u5fd7\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f openim-server\ndocker logs -f openim-chat\n")),(0,r.kt)("h2",{id:"\u5feb\u901f\u4f53\u9a8c-"},"\u5feb\u901f\u4f53\u9a8c \u26a1"),(0,r.kt)("p",null,"\u5feb\u901f\u4f53\u9a8c OpenIM \u670d\u52a1\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./quickTestServer"},"\u5feb\u901f\u9a8c\u8bc1"),"\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4ee5\u4e0b\u662frelease-v36\u53ca\u4e4b\u524d\u7684\u7248\u672c\u90e8\u7f72\u6d41\u7a0b"},"\u4ee5\u4e0b\u662frelease-v3.6\u53ca\u4e4b\u524d\u7684\u7248\u672c\u90e8\u7f72\u6d41\u7a0b"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"-docker\u90e8\u7f72"},"\ud83d\udee0 docker\u90e8\u7f72"),(0,r.kt)("h2",{id:"1-\u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42"},"1. \u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u670d\u52a1\u5668\u73af\u5883\u3001\u7cfb\u7edf\u3001\u4ee5\u53ca\u5b58\u50a8\u7ec4\u4ef6\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./env-comp"},"\u6b64\u6587\u6863")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-docker\u90e8\u7f72"},"2. docker\u90e8\u7f72"),(0,r.kt)("h2",{id:"21-\u514b\u9686\u4ed3\u5e93\u5e76\u521d\u59cb\u5316"},"2.1 \u514b\u9686\u4ed3\u5e93\u5e76\u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"git clone https://github.com/openimsdk/openim-docker openim-docker && cd openim-docker && make init\n\n")),(0,r.kt)("p",null,"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"p"},"Tips")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4e0d\u662f\u672c\u673aclone\uff0c\u800c\u662f\u901a\u8fc7\u4e0b\u8f7d\u538b\u7f29\u5305\u83b7\u53d6\u7684 ",(0,r.kt)("strong",{parentName:"p"},"openim-docker"),"\uff0c\u6267\u884c\u547d\u4ee4 ",(0,r.kt)("strong",{parentName:"p"},'find ./ -name "*.sh" | xargs chmod +x'),"\uff0c\u4ee5\u8d4b\u4e88\u811a\u672c\u6267\u884c\u6743\u9650")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"22-\u8bbe\u7f6eopenim_ip"},"2.2 \u8bbe\u7f6eOPENIM_IP"),(0,r.kt)("p",null,"\ud83d\udd14 ",(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u8981\u8bbe\u7f6eOPENIM_IP\uff0c\u4e14\u4e0d\u80fd\u662f127.0.0.1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'# \u5982\u679c\u670d\u52a1\u5668\u6709\u5916\u7f51IP\nexport OPENIM_IP="\u5916\u7f51IP"\n\n# \u5982\u679c\u4ec5\u63d0\u4f9b\u5185\u7f51\u670d\u52a1\nexport OPENIM_IP="\u5185\u7f51IP"\n')),(0,r.kt)("h2",{id:"23-\u542f\u52a8\u670d\u52a1\u53ca\u67e5\u770b\u65e5\u5fd7"},"2.3 \u542f\u52a8\u670d\u52a1\u53ca\u67e5\u770b\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"docker compose up -d\ndocker ps\ndocker compose logs -f openim-chat\ndocker compose logs -f openim-server\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-\u5feb\u901f\u9a8c\u8bc1"},"3. \u5feb\u901f\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./quickTestServer"},"\u5feb\u901f\u9a8c\u8bc1"),"\u6587\u6863"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-\u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf"},"4. \u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"./admin"},"\u7ba1\u7406\u540e\u53f0\u548c\u76d1\u63a7\u7cfb\u7edf")," \u6587\u6863\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"5-\u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539"},"5. \u5173\u4e8e\u914d\u7f6e\u9879\u7684\u4fee\u6539"),(0,r.kt)("p",null,"\u6b64\u9879\u76ee\u914d\u7f6e\u9879\u8f83\u4e3a\u590d\u6742\uff0c\u4e3b\u8981\u662f\u67d0\u4e9b\u914d\u7f6e\u9879\u6d89\u53ca\u5230",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env")),"\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),"\u591a\u4e2a\u6587\u4ef6\uff0c\u914d\u7f6e\u9879\u7684\u4fee\u6539\u8bf4\u660e\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u662f\u5171\u7528\u914d\u7f6e\u9879\u7684\u4fee\u6539\u548c\u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539\u3002"),(0,r.kt)("h3",{id:"51-\u5171\u7528\u914d\u7f6e\u9879"},"5.1 \u5171\u7528\u914d\u7f6e\u9879"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env")),"\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," \u5171\u7528\u7684\u914d\u7f6e\u9879\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"mysql/mongo/redis/kafka/zookeeper/minio \u7aef\u53e3\u53ca\u5bc6\u7801\uff1b"),(0,r.kt)("li",{parentName:"ol"},"SECRET\uff1b"),(0,r.kt)("li",{parentName:"ol"},"API_OPENIM_PORT\uff1b"),(0,r.kt)("li",{parentName:"ol"},"OPENIM_IP\uff1b"),(0,r.kt)("li",{parentName:"ol"},"MINIO_PORT;"),(0,r.kt)("li",{parentName:"ol"},"GRAFANA_PORT")),(0,r.kt)("h3",{id:"52-\u4fee\u6539\u65b9\u6cd5"},"5.2 \u4fee\u6539\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5bf9\u4e8e5.1\u5171\u7528\u914d\u7f6e\u9879\u7684\u4fee\u6539\uff0c\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e8c\u9009\u4e00\u3002"),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a\u6240\u6709\u914d\u7f6e\u91cd\u65b0\u751f\u6210"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u5168\u9762\u66f4\u65b0\u914d\u7f6e\uff0c\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u73b0\u6709\u914d\u7f6e\u6587\u4ef6\uff1a\u5220\u9664 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," \u548c ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," \u6587\u4ef6\uff1a\u66f4\u65b0 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},".env"))," \u6587\u4ef6\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u9879\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u751f\u6210\u914d\u7f6e\u5e76\u91cd\u542f\u670d\u52a1\uff1a\u6267\u884c ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d")),"\uff0c\u8fd9\u5c06\u57fa\u4e8e ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},".env"))," \u6587\u4ef6\u4e2d\u7684\u65b0\u8bbe\u7f6e\u91cd\u65b0\u751f\u6210\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u91cd\u542f\u670d\u52a1\u3002")),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\u5206\u522b\u4fee\u6539\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u53ea\u9700\u90e8\u5206\u66f4\u65b0\u914d\u7f6e\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff1a\u66f4\u65b0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env"))," \u6587\u4ef6\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u9879\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u624b\u52a8\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\uff1a\u6839\u636e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env"))," \u6587\u4ef6\u7684\u4fee\u6539\uff0c\u76f8\u5e94\u5730\u66f4\u65b0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u9879\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7279\u6b8a\u53d8\u91cf\u7684\u989d\u5916\u5904\u7406\uff1a\u5982\u679c\u4fee\u6539\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"OPENIM_IP")),"\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"API_OPENIM_PORT")),"\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MINIO_PORT")),"\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"GRAFANA_PORT")),"\uff0c\u5219\u9700\u8981\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," \u4e2d\u66f4\u65b0\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'object:\n  apiURL: "http://$OPENIM_IP:$API_OPENIM_PORT"\n  minio:\n    endpoint: "http://$DOCKER_BRIDGE_GATEWAY:$MINIO_PORT"\n    signEndpoint: "http://$OPENIM_IP:$MINIO_PORT"\n\ngrafanaUrl: http://$OPENIM_IP:$GRAFANA_PORT\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u91cd\u542f\u670d\u52a1\uff1a\u6267\u884c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d"))," \u4ee5\u5e94\u7528\u66f4\u6539\u5e76\u91cd\u542f\u670d\u52a1\u3002"))),(0,r.kt)("h3",{id:"53-\u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539"},"5.3 \u5176\u4ed6\u914d\u7f6e\u9879\u7684\u4fee\u6539"),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env")),"\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," \u548c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," \u4e2d\u7684\u975e\u5171\u7528\u53d8\u91cf\uff0c\u53ef\u4ee5\u5355\u72ec\u4fee\u6539\u76f8\u5e94\u6587\u4ef6\u4e2d\u7684\u8fd9\u4e9b\u914d\u7f6e\u9879\u3002\u6267\u884c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d"))," \u4ee5\u5e94\u7528\u66f4\u6539\u5e76\u91cd\u542f\u670d\u52a1\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-6-\u5e38\u89c1\u95ee\u9898"},"\u2753 6. \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"61-\u80fd\u6b63\u5e38\u53d1\u9001\u6587\u672c\u6d88\u606f\u4f46\u53d1\u9001\u56fe\u7247\u5931\u8d25-"},"6.1 \u80fd\u6b63\u5e38\u53d1\u9001\u6587\u672c\u6d88\u606f\uff0c\u4f46\u53d1\u9001\u56fe\u7247\u5931\u8d25 \ud83d\ude15"),(0,r.kt)("p",null,"\u53ef\u80fd\u662f\u56e0\u4e3a\u6ca1\u6709\u5728\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up -d")," \u547d\u4ee4\u4e4b\u524d\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENIM_IP"),' \u73af\u5883\u53d8\u91cf\u3002\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u542f\u52a8\u65f6\u65e5\u5fd7\uff0c\u6216\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u641c\u7d22\u65e5\u5fd7\u4e2d\u7684 "127.0.0.1" \u5730\u5740\u6765\u786e\u8ba4\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'grep "127.0.0.1" openim-server/_output/logs/openim-docker.log\n')),(0,r.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," \u73af\u5883\u53d8\u91cf\u4e3a\u4f60\u7684\u516c\u7f51IP\u5730\u5740\uff0c\u5982\u4ec5\u63d0\u4f9b\u5185\u7f51\u670d\u52a1\u5219\u4e3a\u5185\u7f51IP\u5730\u5740\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export OPENIM_IP="<Public-IP>"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"sed")," \u547d\u4ee4\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apiURL")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"signEndpoint")," \u914d\u7f6e\u9879\uff0c\u5c06\u5730\u5740\u6539\u4e3a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," \u73af\u5883\u53d8\u91cf\u6307\u5b9a\u7684IP\u5730\u5740\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i -e "s/apiURL: \\"http:\\/\\/127\\.0\\.0\\.1/apiURL: \\"http:\\/\\/${OPENIM_IP}/" \\\n       -e "s/signEndpoint: \\"http:\\/\\/127\\.0\\.0\\.1/signEndpoint: \\"http:\\/\\/${OPENIM_IP}/" \\\n       openim-server/config/config.yaml\n')))),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u6b65\u9aa4\u4fee\u6539\u914d\u7f6e\u5e76\u91cd\u542f\u670d\u52a1\u540e\uff0c\u5e94\u80fd\u6b63\u5e38\u53d1\u9001\u56fe\u7247\u6d88\u606f\u3002"),(0,r.kt)("h3",{id:"62-\u5173\u4e8e-docker-\u7248\u672c-"},"6.2 \u5173\u4e8e Docker \u7248\u672c \ud83d\udc0b"),(0,r.kt)("p",null,"\u5f3a\u70c8\u8981\u6c42\u4f7f\u7528 docker compose \u547d\u4ee4\u800c\u4e0d\u662f docker-compose\uff0c\u8001\u7248\u672c Docker \u53ef\u80fd\u4e0d\u652f\u6301 gateway \u529f\u80fd\u274c\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u5347\u7ea7\u5230\u8f83\u65b0\u7684\u7248\u672c\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"23.0.1"),"\ud83d\udd1d"),(0,r.kt)("h3",{id:"63-\u65e5\u5fd7\u67e5\u770b-"},"6.3 \u65e5\u5fd7\u67e5\u770b \ud83d\udcdc"),(0,r.kt)("p",null,"\u65e5\u5fd7\u4f4d\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"{openim-server, openim-chat}/_output/logs/openim-all.*")),(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u65e5\u5fd7\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"{openim-server, openim-chat}/_output/logs/openim-docker.log"))))}u.isMDXComponent=!0}}]);