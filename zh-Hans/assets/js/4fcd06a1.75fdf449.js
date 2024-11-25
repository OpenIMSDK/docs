"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[43856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},33948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"k8s\u90e8\u7f72-\u5f85\u5b8c\u5584",sidebar_position:8},p="OpenIM k8s\u90e8\u7f72-\u5f85\u5b8c\u5584",s={unversionedId:"gettingStarted/k8s-deployment",id:"gettingStarted/k8s-deployment",title:"k8s\u90e8\u7f72-\u5f85\u5b8c\u5584",description:"OpenIM\u652f\u6301\u591a\u79cd\u96c6\u7fa4\u90e8\u7f72\u65b9\u6cd5\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8ehelm\u3001sealos\u3001kustomize\u3002",source:"@site/docs/guides/gettingStarted/k8s-deployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/k8s-deployment",permalink:"/zh-Hans/guides/gettingStarted/k8s-deployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/k8s-deployment.mdx",tags:[],version:"current",lastUpdatedAt:1732516880,formattedLastUpdatedAt:"2024\u5e7411\u670825\u65e5",sidebarPosition:8,frontMatter:{title:"k8s\u90e8\u7f72-\u5f85\u5b8c\u5584",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Nginx\u57df\u540d\u914d\u7f6e",permalink:"/zh-Hans/guides/gettingStarted/nginxDomainConfig"},next:{title:"\u538b\u6d4b\u62a5\u544a",permalink:"/zh-Hans/guides/pressure_test"}},m={},u=[{value:"\u4f9d\u8d56\u6027\u68c0\u67e5",id:"\u4f9d\u8d56\u6027\u68c0\u67e5",level:3},{value:"\u6700\u5c0f\u914d\u7f6e",id:"\u6700\u5c0f\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u6587\u4ef6\u751f\u6210",id:"\u914d\u7f6e\u6587\u4ef6\u751f\u6210",level:2},{value:"\u5b89\u88c5helm",id:"\u5b89\u88c5helm",level:3},{value:"OpenIM\u955c\u50cf\u7b56\u7565",id:"openim\u955c\u50cf\u7b56\u7565",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u96c6\u7fa4\u8bbe\u7f6e\u53c2\u8003",id:"\u96c6\u7fa4\u8bbe\u7f6e\u53c2\u8003",level:2},{value:"\u96c6\u7fa4\u5b89\u88c5\uff1a",id:"\u96c6\u7fa4\u5b89\u88c5",level:4}],c={toc:u},k="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openim-k8s\u90e8\u7f72-\u5f85\u5b8c\u5584"},"OpenIM k8s\u90e8\u7f72-\u5f85\u5b8c\u5584"),(0,r.kt)("p",null,"OpenIM\u652f\u6301\u591a\u79cd\u96c6\u7fa4\u90e8\u7f72\u65b9\u6cd5\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"sealos"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kustomize"),"\u3002"),(0,r.kt)("p",null,"\u591a\u4e2a\u8d21\u732e\u8005\u548c\u4e4b\u524d\u7684\u5b98\u65b9\u7248\u672c\u90fd\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u4f9b\u53c2\u8003\u7684\u89e3\u51b3\u65b9\u6848\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openimsdk/k8s-jenkins"},"k8s-jenkins\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openimsdk/open-im-server-k8s-deploy"},"open-im-server-k8s-deploy\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openimsdk/openim-charts"},"openim-charts\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/showurl/deploy-openim"},"deploy-openim\u4ed3\u5e93"))),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u6027\u68c0\u67e5"},"\u4f9d\u8d56\u6027\u68c0\u67e5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Kubernetes: >= 1.16.0-0\nHelm: >= 3.0\n")),(0,r.kt)("h3",{id:"\u6700\u5c0f\u914d\u7f6e"},"\u6700\u5c0f\u914d\u7f6e"),(0,r.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u63a8\u8350\u7684\u6700\u5c0f\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"CPU: 4\n\u5185\u5b58: 8G\n\u786c\u76d8: 100G\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u751f\u6210"},"\u914d\u7f6e\u6587\u4ef6\u751f\u6210"),(0,r.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u81ea\u52a8\u5316\u4e86\u6240\u6709\u7684\u6587\u4ef6\uff0c\u4f7f\u5f97\u4e3aOpenIM\u751f\u6210\u914d\u7f6e\u6587\u4ef6\u6210\u4e3a\u53ef\u9009\u9879\u3002\u4f46\u5982\u679c\u4f60\u5e0c\u671b\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ make init\n# \u6216\u8005\u4f7f\u7528\u811a\u672c\uff1a\n# ./scripts/init-config.sh\n")),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u914d\u7f6e\u6587\u4ef6\u5c06\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"deployments/openim/config"),"\u4e0b\u751f\u6210\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u4fee\u6539\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5helm"},"\u5b89\u88c5helm"),(0,r.kt)("p",null,"Helm\u901a\u8fc7\u6253\u5305\u63d0\u4f9b\u7248\u672c\u63a7\u5236\u548c\u53d1\u5e03\u7ba1\u7406\uff0c\u5927\u5927\u7b80\u5316\u4e86Kubernetes\u5e94\u7528\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u811a\u672c:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u4ed3\u5e93:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo add brigade https://openimsdk.github.io/openim-charts\n")),(0,r.kt)("h3",{id:"openim\u955c\u50cf\u7b56\u7565"},"OpenIM\u955c\u50cf\u7b56\u7565"),(0,r.kt)("p",null,"\u81ea\u52a8\u5316\u63d0\u4f9b\u7684\u5305\u62ecaliyun, ghcr, docker hub\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-server/blob/main/docs/conversions/images.md"},"\u955c\u50cf\u6587\u6863")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u672c\u5730\u6d4b\u8bd5\u6784\u5efa\u65b9\u6cd5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ make image\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u547d\u4ee4\u6709\u52a9\u4e8e\u5feb\u901f\u5728\u672c\u5730\u6784\u5efa\u6240\u9700\u7684\u955c\u50cf\u3002\u5173\u4e8e\u8be6\u7ec6\u7684\u6784\u5efa\u7b56\u7565\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-server/blob/main/build/README.md"},"\u6784\u5efa\u6587\u6863"),"\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u6d4f\u89c8\u6211\u4eec\u7684Helm-Charts\u4ed3\u5e93\u5e76\u4ed4\u7ec6\u9605\u8bfb\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/helm-charts"},"Helm-Charts\u4ed3\u5e93")),(0,r.kt)("p",null,"\u4f7f\u7528helm charts\u4ed3\u5e93\uff0c\u60a8\u53ef\u4ee5\u5ffd\u7565\u4ee5\u4e0b\u914d\u7f6e\uff0c\u4f46\u5982\u679c\u60a8\u53ea\u60f3\u4f7f\u7528\u670d\u52a1\u5668\u5e76\u5728\u5176\u4e0a\u8fdb\u884c\u6269\u5c55\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528Helmfile:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'GO111MODULE=on go get github.com/roboll/helmfile@latest\nexport MYSQL_ADDRESS=im-mysql\nexport MYSQL_PORT=3306\nexport MONGO_ADDRESS=im-mongo\nexport MONGO_PORT=27017\nexport REDIS_ADDRESS=im-redis-master\nexport REDIS_PORT=6379\nexport KAFKA_ADDRESS=im-kafka\nexport KAFKA_PORT=9092\nexport OBJECT_APIURL="https://openim.server.com/api"\nexport MINIO_ENDPOINT="http://im-minio:9000"\nexport MINIO_SIGN_ENDPOINT="https://openim.server.com/im-minio-api"\n\nmkdir ./charts/generated-configs\n../scripts/genconfig.sh ../scripts/install/environment.sh ./templates/openim.yaml > ./charts/generated-configs/config.yaml\ncp ../config/notification.yaml ./charts/generated-configs/notification.yaml\n../scripts/genconfig\n')),(0,r.kt)("h2",{id:"\u96c6\u7fa4\u8bbe\u7f6e\u53c2\u8003"},"\u96c6\u7fa4\u8bbe\u7f6e\u53c2\u8003"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u96c6\u7fa4\uff0c\u6216\u8005\u4f60\u5e0c\u671b\u4ece\u5934\u5f00\u59cb\u6784\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5feb\u901f\u542f\u52a8\uff0c\u6211\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://github.com/labring/sealos"},"sealos"),"\u8fc5\u901f\u5efa\u7acb\u96c6\u7fa4\uff0csealos\u5728\u5176\u6838\u5fc3\u4e5f\u662fkubeadm\u7684\u5c01\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ SEALOS_VERSION=`curl -s https://api.github.com/repos/labring/sealos/releases/latest | grep -oE \'"tag_name": "[^"]+"\' | head -n1 | cut -d\'"\' -f4` && \\\n  curl -sfL https://raw.githubusercontent.com/labring/sealos/${SEALOS_VERSION}/scripts/install.sh |\n  sh -s ${SEALOS_VERSION} labring/sealos\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684\u7248\u672c:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker: ",(0,r.kt)("inlineCode",{parentName:"li"},"labring/kubernetes-docker"),":(v1.24.0~v1.27.0)"),(0,r.kt)("li",{parentName:"ul"},"containerd: ",(0,r.kt)("inlineCode",{parentName:"li"},"labring/kubernetes"),":(v1.24.0~v1.27.0)")),(0,r.kt)("h4",{id:"\u96c6\u7fa4\u5b89\u88c5"},"\u96c6\u7fa4\u5b89\u88c5\uff1a"),(0,r.kt)("p",null,"\u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u673a\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"IP\u5730\u5740"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7cfb\u7edf\u4fe1\u606f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master01"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Linux VM-0-9-ubuntu 5.15.0-76-generic #83-Ubuntu SMP Thu Jun 15 19:16:32 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node01"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0emaster01\u76f8\u4f3c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node02"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0emaster01\u76f8\u4f3c")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ export CLUSTER_USERNAME=ubuntu\n$ export CLUSTER_PASSWORD=123456\n$ sudo sealos run labring/kubernetes:v1.25.0 labring/helm:v3.8.2 labring/calico:v3.24.1 \\\n    --masters 10.0.0.9 \\\n    --nodes 10.0.0.4,10.0.0.10 \\\n    -u "$CLUSTER_USERNAME" \\\n    -p "$CLUSTER_PASSWORD"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \u5378\u8f7d\u65b9\u6cd5\uff1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm"),"\u8fdb\u884c\u5378\u8f7d\u5e76\u4e0d\u4f1a\u5220\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"etcd"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"cni"),"\u76f8\u5173\u7684\u914d\u7f6e\u3002\u9700\u8981\u624b\u52a8\u6e05\u9664\u6216\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"sealos"),"\u8fdb\u884c\u5378\u8f7d\u3002"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sealos reset\n"))),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5728\u672c\u5730\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528Kind\u548cMinikube\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4f8b\u5982\u4f7f\u7528Kind\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash$",metastring:'GO111MODULE="on" go get sigs.k8s.io/kind@v0.11.1',GO111MODULE:'"on"',go:!0,get:!0,"sigs.k8s.io/kind@v0.11.1":!0},"$ kind create cluster\n")))}d.isMDXComponent=!0}}]);