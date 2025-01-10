"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[49280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),d=l,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});n(67294);var r=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const a={title:"\u5982\u4f55\u8fc1\u79fb\u5230\u5176\u4ed6S3\u5b58\u50a8",sidebar_position:9},p="S3\u5b58\u50a8\u63a5\u5165",c={unversionedId:"solution/s3convert",id:"solution/s3convert",title:"\u5982\u4f55\u8fc1\u79fb\u5230\u5176\u4ed6S3\u5b58\u50a8",description:"\u83b7\u53d6\u6700\u65b0\u4ee3\u7801",source:"@site/docs/guides/solution/s3convert.mdx",sourceDirName:"solution",slug:"/solution/s3convert",permalink:"/guides/solution/s3convert",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/solution/s3convert.mdx",tags:[],version:"current",lastUpdatedAt:1736476238,formattedLastUpdatedAt:"Jan 10, 2025",sidebarPosition:9,frontMatter:{title:"\u5982\u4f55\u8fc1\u79fb\u5230\u5176\u4ed6S3\u5b58\u50a8",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u4eceIM\u4e91\u670d\u52a1\u8fc1\u79fb\u5230OpenIM",permalink:"/guides/solution/migrate"},next:{title:"Stress and Reliability Test Report",permalink:"/guides/benchmark_test"}},u={},s=[{value:"\u83b7\u53d6\u6700\u65b0\u4ee3\u7801",id:"\u83b7\u53d6\u6700\u65b0\u4ee3\u7801",level:3},{value:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u6307\u5357",id:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u6307\u5357",level:3},{value:"\u7f16\u8bd1S3\u8fc1\u79fb\u5de5\u5177",id:"\u7f16\u8bd1s3\u8fc1\u79fb\u5de5\u5177",level:3},{value:"\u5f00\u59cb\u8fc1\u79fb",id:"\u5f00\u59cb\u8fc1\u79fb",level:3}],m={toc:s},d="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3\u5b58\u50a8\u63a5\u5165"},"S3\u5b58\u50a8\u63a5\u5165"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u6700\u65b0\u4ee3\u7801"},"\u83b7\u53d6\u6700\u65b0\u4ee3\u7801"),(0,r.kt)("p",null,"\u8bf7\u4e0b\u8f7d\u9879\u76ee\u7684\u6700\u65b0\u4ee3\u7801\u7248\u672c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u65b0\u4ee3\u7801\u5df2\u96c6\u6210",(0,r.kt)("inlineCode",{parentName:"li"},"S3"),"\u8fc1\u79fb\u5de5\u5177\uff0c\u65e0\u9700\u5355\u72ec\u64cd\u4f5c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/openimsdk/open-im-server.git\ncd open-im-server\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u6307\u5357"},"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u6307\u5357"),(0,r.kt)("p",null,"\u8bf7\u6839\u636e\u9700\u8981\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"\u76ee\u5f55\u4e0b\u7684\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\uff0c\u4ee5\u5b8c\u6210\u8fc1\u79fb\u76f8\u5173\u7684 S3 \u914d\u7f6e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7f16\u8f91",(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-third.yml"),"\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u5e76\u66f4\u65b0\u4e0e S3 \u76f8\u5173\u7684\u914d\u7f6e\u9879\uff0c\u786e\u4fdd\u5176\u7b26\u5408\u60a8\u7684\u5b9e\u9645\u8fc1\u79fb\u9700\u6c42\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u5173\u4e8e minio.yml \u914d\u7f6e\u6587\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u9879\u76ee\u4e2d\u672a\u5b9e\u9645\u4f7f\u7528 MinIO\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u5ffd\u7565\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u9700\u4f7f\u7528\uff0c\u8bf7\u540c\u6837\u6839\u636e\u8fc1\u79fb\u9700\u6c42\u66f4\u65b0 S3 \u914d\u7f6e\u76f8\u5173\u9879\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openim-rpc-third.yml"),"\u4e2d\u90fd\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"object.enable"),"\u5b57\u6bb5\uff0c\u7528\u4e8e\u6307\u5b9a\u65b0\u7684S3\u5b58\u50a8\u5f15\u64ce\u3002")),(0,r.kt)("h3",{id:"\u7f16\u8bd1s3\u8fc1\u79fb\u5de5\u5177"},"\u7f16\u8bd1S3\u8fc1\u79fb\u5de5\u5177"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5de5\u5177\u76ee\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd tools/s3\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u7f16\u8bd1\u547d\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go build -o s3convert main.go\n")),(0,r.kt)("h3",{id:"\u5f00\u59cb\u8fc1\u79fb"},"\u5f00\u59cb\u8fc1\u79fb"),(0,r.kt)("p",null,"\u4e3a\u786e\u4fdd\u6570\u636e\u8fc1\u79fb\u8fc7\u7a0b\u7684\u7a33\u5b9a\u6027\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u5efa\u8bae\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51c6\u5907\u5de5\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u670d\u52a1\uff1a\u5efa\u8bae\u5728\u670d\u52a1\u505c\u6b62\u7684\u72b6\u6001\u4e0b\u8fdb\u884c\u8fc1\u79fb\u64cd\u4f5c\uff0c\u4ee5\u907f\u514d\u6570\u636e\u4e0d\u4e00\u81f4\u6216\u64cd\u4f5c\u51b2\u7a81\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5907\u4efd MongoDB\uff1a\u91cd\u70b9\u5907\u4efd",(0,r.kt)("inlineCode",{parentName:"li"},"s3"),"\u8868\u7684\u6570\u636e\uff0c\u4ee5\u4fbf\u5728\u53d1\u751f\u610f\u5916\u65f6\u5feb\u901f\u6062\u590d\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u8fc1\u79fb\u8bf4\u660e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u5de5\u5177\u4e0d\u4f1a\u5220\u9664\u539f\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"S3"),"\u6570\u636e\uff0c\u4f46\u4f1a\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"li"},"MongoDB"),"\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"s3"),"\u8868\u7684\u76f8\u5173\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u5728\u8fc1\u79fb\u5b8c\u6210\u540e\uff0c\u6838\u5bf9\u6570\u636e\u5b8c\u6574\u6027\uff0c\u786e\u4fdd\u6240\u6709\u8fc1\u79fb\u6b65\u9aa4\u6b63\u786e\u6267\u884c\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u8fc1\u79fb\u547d\u4ee4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<config dir path>"),"\uff1a\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\u8def\u5f84\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<old s3 name>"),"\uff1a\u586b\u5199\u539f S3 \u914d\u7f6e\u540d\u79f0\uff0c\u4f8b\u5982 minio\u3002")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./s3convert -config <config dir path> -name <old s3 name>\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u793a\u4f8b\u547d\u4ee4\n\u5982\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e config \u76ee\u5f55\u4e0b\uff0c\u4e14\u539f S3 \u540d\u79f0\u4e3a minio\uff0c\u53ef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./s3convert -config ./../../config -name minio\n")),(0,r.kt)("p",null,"\u5f53\u770b\u5230\u8f93\u51fa\u4fe1\u606f",(0,r.kt)("inlineCode",{parentName:"p"},"success"),"\u65f6\uff0c\u8868\u793a\u8fc1\u79fb\u64cd\u4f5c\u5df2\u5b8c\u6210\u3002"))}f.isMDXComponent=!0}}]);