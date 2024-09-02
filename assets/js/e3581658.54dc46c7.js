"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[39432],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(t),g=o,u=l["".concat(s,".").concat(g)]||l[g]||m[g]||a;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},12179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>l});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={},s="Nginx Domain Configuration",c={unversionedId:"gettingStarted/nginxDomainConfig",id:"gettingStarted/nginxDomainConfig",title:"Nginx Domain Configuration",description:"1. Prerequisites",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/nginxDomainConfig.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/nginxDomainConfig",permalink:"/guides/gettingStarted/nginxDomainConfig",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/nginxDomainConfig.mdx",tags:[],version:"current",lastUpdatedAt:1725247657,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OIMWS SDK Server User Guide",permalink:"/guides/gettingStarted/jssdk"},next:{title:"Stress Test Report",permalink:"/guides/pressure_test"}},d={},l=[{value:"1. Prerequisites",id:"1-prerequisites",level:3},{value:"2. Domain Configuration Reference",id:"2-domain-configuration-reference",level:3},{value:"3. Minio Configuration",id:"3-minio-configuration",level:3},{value:"4. Starting Nginx",id:"4-starting-nginx",level:3},{value:"5. Using the Corresponding Domain Names for Login Verification",id:"5-using-the-corresponding-domain-names-for-login-verification",level:3}],m={toc:l},g="wrapper";function u(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)(g,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nginx-domain-configuration"},"Nginx Domain Configuration"),(0,r.kt)("h3",{id:"1-prerequisites"},"1. Prerequisites"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(1) Successful startup of open-im-server and chat (configuration of minio in open-im-server needs to be changed, refer to Step 3)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(2) Successful installation of Nginx (including SSL module)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(3) Successful application for two SSL certificates: test-web.rentsoft.cn, test-admin.rentsoft.cn")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"(4) Ports 443 and 80 are open")),(0,r.kt)("h3",{id:"2-domain-configuration-reference"},"2. Domain Configuration Reference"),(0,r.kt)("p",null,"Taking the Nginx installation directory ",(0,r.kt)("strong",{parentName:"p"},"/usr/local")," as an example,\ncreate a ",(0,r.kt)("strong",{parentName:"p"},"config.conf")," file in the ",(0,r.kt)("strong",{parentName:"p"},"/usr/local/nginx")," directory, paste the following template into the ",(0,r.kt)("strong",{parentName:"p"},"/usr/local/nginx/config.conf")," file,\nand import the newly created config.conf file into the general configuration file ",(0,r.kt)("strong",{parentName:"p"},"/usr/local/nginx/nginx.conf")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tips: Pay attention to replacing the domain names, SSL certificate paths, and SSL keys in the domain configuration template")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#open-im-server chat Corresponding deployment address and port\nupstream msg_gateway{\n    #IM Message server address Multiple can be specified according to the deployment\n    server 127.0.0.1:10001;\n}\nupstream im_api{\n    #IM Group user api server address Multiple can be specified according to the deployment\n    server 127.0.0.1:10002;\n}\nupstream im_chat_api{\n    #IM Business version login registration server address Multiple can be specified according to the deployment\n    server 127.0.0.1:10008;\n}\nupstream im_admin_api{\n    #IM The admin address of the commercial version can specify multiple units according to the deployment situation\n    server 127.0.0.1:10009;\n}\nupstream minio_s3_2{\n    #Minio address can be assigned to multiple modules depending on deployment\n    server 127.0.0.1:10005;\n}\nupstream pc_web{\n    #PC web address can be validate\n    server 127.0.0.1:11001;\n}\nupstream openim_admin{\n    #Admin backend address can be used for validation\n    server 127.0.0.1:11002;\n}\n\n# Take the domain name "test-web.rentsoft.cn" for example\nserver {\n    listen       443; #Listening on port 443\n    server_name  test-web.rentsoft.cn;  #Your domain name\n    ssl on;\n    #Path of pem file for ssl certificate\n    ssl_certificate /usr/local/nginx/conf/ssh/test-web.rentsoft.cn_bundle.pem;\n    #Key file path of ssl certificate\n    ssl_certificate_key /usr/local/nginx/conf/ssh/test-web.rentsoft.cn.key;\n\n    gzip on;\n    gzip_min_length 1k;\n    gzip_buffers 4 16k;\n    gzip_comp_level 2;\n    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/wasm;\n    gzip_vary off;\n    gzip_disable "MSIE [1-6]\\.";\n\n    default_type application/wasm;\n\n    location / {\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://pc_web/;\n    }\n\n    location /msg_gateway{\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://msg_gateway/;\n    }\n\n    location ^~/api/{\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Request-Api $scheme://$host/api;\n        proxy_pass http://im_api/;\n    }\n\n    location ^~/chat/{\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://im_chat_api/;\n    }\n\n    location ^~/im-minio-api/ {\n        proxy_set_header Host $http_host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_connect_timeout 300;\n\n        proxy_http_version 1.1;\n        proxy_set_header Connection "";\n        chunked_transfer_encoding off;\n        proxy_pass http://minio_s3_2/;\n    }\n}\n\n# Take the domain name "test-admin.rentsoft.cn" for example\nserver {\n    listen       443; #listening port\n    server_name  test-admin.rentsoft.cn; #Your domain server_name\n    ssl on;\n    #Path of pem file for ssl certificate\n    ssl_certificate /usr/local/nginx/conf/ssh/test-admin.rentsoft.cn_bundle.pem;\n    #Key file path of ssl certificate\n    ssl_certificate_key /usr/local/nginx/conf/ssh/test-admin.rentsoft.cn.key;\n\n    gzip on;\n    gzip_min_length 1k;\n    gzip_buffers 4 16k;\n    gzip_comp_level 2;\n    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/wasm;\n    gzip_vary off;\n    gzip_disable "MSIE [1-6]\\.";\n\n    default_type application/wasm;\n\n    location / {\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://openim_admin/;\n\n    }\n\n    location /msg_gateway{\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://msg_gateway/;\n    }\n\n    location ^~/api/{\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Request-Api $scheme://$host/api;\n        proxy_pass http://im_api/;\n    }\n\n    location ^~/chat/{\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://im_chat_api/;\n    }\n\n    location ^~/complete_admin/{\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "Upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://im_admin_api/;\n    }\n}\n\n# Redirection from HTTP to HTTPS\nserver {\n    listen 80;\n    server_name test-web.rentsoft.cn;\n    rewrite ^(.*)$ https://$host$1 permanent;\n}\n')),(0,r.kt)("h3",{id:"3-minio-configuration"},"3. Minio Configuration"),(0,r.kt)("p",null,"Open ",(0,r.kt)("strong",{parentName:"p"},"open-im-server/config/config.yaml"),", modify the corresponding Minio content, and restart open-im-server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'object:\nenable: "minio"\napiURL: "https://test-web.rentsoft.cn/api" //10002\nminio:\nbucket: "openim"\nendpoint: "http://172.28.0.1:10005"\naccessKeyID: "root"\nsecretAccessKey: "openIM123"\nsessionToken: \'\'\nsignEndpoint: "https://test-web.rentsoft.cn/im-minio-api" //10005\n')),(0,r.kt)("h3",{id:"4-starting-nginx"},"4. Starting Nginx"),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("strong",{parentName:"p"},"/usr/local/nginx/sbin")," directory and execute the following command:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"./nginx -s reload")),(0,r.kt)("h3",{id:"5-using-the-corresponding-domain-names-for-login-verification"},"5. Using the Corresponding Domain Names for Login Verification"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"IM: test-web.rentsoft.cn")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Admin Backend: test-admin.rentsoft.cn")))}u.isMDXComponent=!0}}]);