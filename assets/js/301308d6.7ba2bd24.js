"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[79901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={},s="Docker Deployment for OpenIM",p={unversionedId:"gettingStarted/dockerCompose",id:"gettingStarted/dockerCompose",title:"Docker Deployment for OpenIM",description:"\ud83c\udf0d Environment Preparation",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/dockerCompose.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/dockerCompose",permalink:"/guides/gettingStarted/dockerCompose",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/dockerCompose.mdx",tags:[],version:"current",lastUpdatedAt:1736476238,formattedLastUpdatedAt:"Jan 10, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/guides/gettingStarted/faq"},next:{title:"Nginx Domain Configuration",permalink:"/guides/gettingStarted/nginxDomainConfig"}},c={},m=[{value:"\ud83c\udf0d Environment Preparation",id:"-environment-preparation",level:2},{value:"\ud83d\uddc2\ufe0f Repository Cloning",id:"\ufe0f-repository-cloning",level:2},{value:"\ud83d\udd27 Configuration Modification",id:"-configuration-modification",level:2},{value:"\ud83d\ude80 Service Launch",id:"-service-launch",level:2},{value:"\u26a1 Quick Experience",id:"-quick-experience",level:2},{value:"Below are the deployment processes for versions release-v3.6 and earlier:",id:"below-are-the-deployment-processes-for-versions-release-v36-and-earlier",level:2},{value:"1. Environment and Component Requirements",id:"1-environment-and-component-requirements",level:2},{value:"2. Docker Deployment",id:"2-docker-deployment",level:2},{value:"2.1 Clone Repository and Initialize",id:"21-clone-repository-and-initialize",level:2},{value:"2.2 Set OPENIM_IP",id:"22-set-openim_ip",level:2},{value:"2.3 Start Service and View Logs",id:"23-start-service-and-view-logs",level:2},{value:"3. Quick Verification",id:"3-quick-verification",level:2},{value:"4. Admin Panel and Monitoring System",id:"4-admin-panel-and-monitoring-system",level:2},{value:"5. About Configuration Modification",id:"5-about-configuration-modification",level:2},{value:"5.1 Shared Configuration Items",id:"51-shared-configuration-items",level:3},{value:"5.2 Modification Methods",id:"52-modification-methods",level:3},{value:"5.3 Other Configuration Item Modification",id:"53-other-configuration-item-modification",level:3},{value:"\u2753 6. Common Issues",id:"-6-common-issues",level:2},{value:"6.1 Text messages are sent normally, but sending pictures fails \ud83d\ude15",id:"61-text-messages-are-sent-normally-but-sending-pictures-fails-",level:3},{value:"Solution:",id:"solution",level:4},{value:"6.2 About Docker Versions \ud83d\udc0b",id:"62-about-docker-versions-",level:3},{value:"6.3 Viewing Logs \ud83d\udcdc",id:"63-viewing-logs-",level:3}],d={toc:m},u="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-deployment-for-openim"},"Docker Deployment for OpenIM"),(0,o.kt)("h2",{id:"-environment-preparation"},"\ud83c\udf0d Environment Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Docker with the Compose plugin or docker-compose on your server. For installation details, visit the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/"},"Docker Compose Installation Guide"),".")),(0,o.kt)("h2",{id:"\ufe0f-repository-cloning"},"\ud83d\uddc2\ufe0f Repository Cloning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openimsdk/openim-docker\n")),(0,o.kt)("h2",{id:"-configuration-modification"},"\ud83d\udd27 Configuration Modification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file to set up the external IP. If using a domain name, ",(0,o.kt)("a",{parentName:"p",href:"/guides/gettingStarted/nginxDomainConfig"},"Nginx")," configuration is required."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'# Set the external access address for MinIO service (external IP or domain)\nMINIO_EXTERNAL_ADDRESS="http://external_ip:10005"\n # Set the external access address for Grafana service (external IP or domain)\n  GRAFANA_URL="http://external_ip:13000/"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please refer to the comments in the .env file for other configurations."))),(0,o.kt)("h2",{id:"-service-launch"},"\ud83d\ude80 Service Launch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To start the service:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To stop the service:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To view logs:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f openim-server\ndocker logs -f openim-chat\n")),(0,o.kt)("h2",{id:"-quick-experience"},"\u26a1 Quick Experience"),(0,o.kt)("p",null,"For a quick experience with OpenIM services, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openim.io/guides/gettingStarted/quickTestServer"},"Quick Test Server Guide"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"below-are-the-deployment-processes-for-versions-release-v36-and-earlier"},"Below are the deployment processes for versions release-v3.6 and earlier:"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"-docker-deployment"},"\ud83d\udee0 Docker Deployment"),(0,o.kt)("h2",{id:"1-environment-and-component-requirements"},"1. Environment and Component Requirements"),(0,o.kt)("p",null,"For server environment, system, and storage components, refer to ",(0,o.kt)("a",{parentName:"p",href:"./env-comp"},"this document"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-docker-deployment"},"2. Docker Deployment"),(0,o.kt)("h2",{id:"21-clone-repository-and-initialize"},"2.1 Clone Repository and Initialize"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"git clone https://github.com/openimsdk/openim-docker openim-docker && cd openim-docker && make init\n")),(0,o.kt)("p",null,"\ud83d\udca1 ",(0,o.kt)("strong",{parentName:"p"},"Tips")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you obtained ",(0,o.kt)("strong",{parentName:"p"},"openim-docker")," not by cloning but by downloading a zip file, run the command ",(0,o.kt)("strong",{parentName:"p"},'find ./ -name "*.sh" | xargs chmod +x')," to grant script execution permissions.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"22-set-openim_ip"},"2.2 Set OPENIM_IP"),(0,o.kt)("p",null,"\ud83d\udd14 ",(0,o.kt)("strong",{parentName:"p"},"You must set OPENIM_IP, and it cannot be 127.0.0.1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'# If the server has an external IP\nexport OPENIM_IP="external IP"\n\n# If only providing internal network service\nexport OPENIM_IP="internal IP"\n')),(0,o.kt)("h2",{id:"23-start-service-and-view-logs"},"2.3 Start Service and View Logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"docker compose up -d\ndocker ps\ndocker compose logs -f openim-chat\ndocker compose logs -f openim-server\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"3-quick-verification"},"3. Quick Verification"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./quickTestServer"},"Quick Verification")," document."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"4-admin-panel-and-monitoring-system"},"4. Admin Panel and Monitoring System"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./admin"},"Admin Panel and Monitoring System")," document."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"5-about-configuration-modification"},"5. About Configuration Modification"),(0,o.kt)("p",null,"This project has complex configuration items, primarily because some settings involve ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," multiple files. The explanation for modifying configuration items is divided into two parts: shared configuration items and other configuration items."),(0,o.kt)("h3",{id:"51-shared-configuration-items"},"5.1 Shared Configuration Items"),(0,o.kt)("p",null,"Shared configuration items across ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"MySQL/Mongo/Redis/Kafka/Zookeeper/MinIO ports and passwords;"),(0,o.kt)("li",{parentName:"ol"},"SECRET;"),(0,o.kt)("li",{parentName:"ol"},"API_OPENIM_PORT;"),(0,o.kt)("li",{parentName:"ol"},"OPENIM_IP;"),(0,o.kt)("li",{parentName:"ol"},"MINIO_PORT;"),(0,o.kt)("li",{parentName:"ol"},"GRAFANA_PORT")),(0,o.kt)("h3",{id:"52-modification-methods"},"5.2 Modification Methods"),(0,o.kt)("p",null,"For modifying shared configuration items, choose one of the following methods:"),(0,o.kt)("p",null,"Method One: Regenerate all configurations"),(0,o.kt)("p",null,"If a comprehensive update of configurations is needed, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Delete existing configuration files: Remove ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," files."),(0,o.kt)("li",{parentName:"ol"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file: Update relevant settings in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file."),(0,o.kt)("li",{parentName:"ol"},"Regenerate configurations and restart service: Execute ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d")),", which will regenerate configuration files based on the new settings in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file and restart the service.")),(0,o.kt)("p",null,"Method Two: Modify multiple configuration files separately"),(0,o.kt)("p",null,"If only a partial update is needed, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file: Update relevant settings in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file."),(0,o.kt)("li",{parentName:"ol"},"Manually update configuration files: According to modifications in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},".env"))," file, update corresponding settings in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml"))," files")),(0,o.kt)("p",null,".\n3. Special variable additional handling: If you modified ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"OPENIM_IP")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"API_OPENIM_PORT")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"MINIO_PORT")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"GRAFANA_PORT")),", then you need to update the following configuration items in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```yaml\nobject:\n  apiURL: "http://$OPENIM_IP:$API_OPENIM_PORT"\n  minio:\n    endpoint: "http://$DOCKER_BRIDGE_GATEWAY:$MINIO_PORT"\n    signEndpoint: "http://$OPENIM_IP:$MINIO_PORT"\n\ngrafanaUrl: http://$OPENIM_IP:$GRAFANA_PORT\n```\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Restart the service: Execute ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d"))," to apply changes and restart the service.")),(0,o.kt)("h3",{id:"53-other-configuration-item-modification"},"5.3 Other Configuration Item Modification"),(0,o.kt)("p",null,"For non-shared variables in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-chat/config/config.yaml")),", and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),", you can individually modify these configuration items in the respective files. Execute ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"docker compose down ; docker compose up -d"))," to apply changes and restart the service."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-6-common-issues"},"\u2753 6. Common Issues"),(0,o.kt)("h3",{id:"61-text-messages-are-sent-normally-but-sending-pictures-fails-"},"6.1 Text messages are sent normally, but sending pictures fails \ud83d\ude15"),(0,o.kt)("p",null,"This may be because the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," environment variable was not set before executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),' command. You can confirm this by checking the startup logs or by using the following command to search for "127.0.0.1" in the logs:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'grep "127.0.0.1" openim-server/_output/logs/openim-docker.log\n')),(0,o.kt)("h4",{id:"solution"},"Solution:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," environment variable to your public IP address, or to your internal IP address if only providing internal network service:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export OPENIM_IP="<Public-IP>"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sed")," command to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiURL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"signEndpoint")," configuration items in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file, changing the address to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENIM_IP")," environment variable specified IP address:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i -e "s/apiURL: \\"http:\\/\\/127\\.0\\.0\\.1/apiURL: \\"http:\\/\\/${OPENIM_IP}/" \\\n       -e "s/signEndpoint: \\"http:\\/\\/127\\.0\\.0\\.1/signEndpoint: \\"http:\\/\\/${OPENIM_IP}/" \\\n       openim-server/config/config.yaml\n')))),(0,o.kt)("p",null,"After making these configuration changes and restarting the service, you should be able to send picture messages normally."),(0,o.kt)("h3",{id:"62-about-docker-versions-"},"6.2 About Docker Versions \ud83d\udc0b"),(0,o.kt)("p",null,"It is strongly recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," command instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),", as older versions of Docker may not support the gateway feature\u274c. We advise upgrading to a newer version, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"23.0.1"),"\ud83d\udd1d."),(0,o.kt)("h3",{id:"63-viewing-logs-"},"6.3 Viewing Logs \ud83d\udcdc"),(0,o.kt)("p",null,"Log locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Runtime logs: ",(0,o.kt)("inlineCode",{parentName:"li"},"{openim-server, openim-chat}/_output/logs/openim-all.*")),(0,o.kt)("li",{parentName:"ul"},"Startup logs: ",(0,o.kt)("inlineCode",{parentName:"li"},"{openim-server, openim-chat}/_output/logs/openim-docker.log"))))}g.isMDXComponent=!0}}]);