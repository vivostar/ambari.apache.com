"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[1392],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>u});var r=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=c(a),u=i,d=v["".concat(l,".").concat(u)]||v[u]||m[u]||t;return a?r.createElement(d,s(s({ref:n},p),{},{components:a})):r.createElement(d,s({ref:n},p))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,s=new Array(t);s[0]=v;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<t;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},2797:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const t={},s="View API",o={unversionedId:"ambari-design/views/view-api",id:"ambari-design/views/view-api",title:"View API",description:"This section describes basic usage of the View REST API. Browse https://github.com/apache/ambari/blob/trunk/ambari-views/docs/index.md for detailed usage information and examples.",source:"@site/docs/ambari-design/views/view-api.md",sourceDirName:"ambari-design/views",slug:"/ambari-design/views/view-api",permalink:"/docs/next/ambari-design/views/view-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-design/views/view-api.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Framework Services",permalink:"/docs/next/ambari-design/views/framework-services"},next:{title:"View Definition",permalink:"/docs/next/ambari-design/views/view-definition"}},l={},c=[{value:"Get List of Deployed Views",id:"get-list-of-deployed-views",level:2},{value:"Creating a View Instance: Files View",id:"creating-a-view-instance-files-view",level:2},{value:"Creating a View Instance: Capacity Scheduler View",id:"creating-a-view-instance-capacity-scheduler-view",level:2}],p={toc:c};function m(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"view-api"},"View API"),(0,i.kt)("p",null,"This section describes basic usage of the View REST API. Browse ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-views/docs/index.md"},"https://github.com/apache/ambari/blob/trunk/ambari-views/docs/index.md")," for detailed usage information and examples."),(0,i.kt)("h2",{id:"get-list-of-deployed-views"},"Get List of Deployed Views"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Gets the list of all deployed views")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /api/v1/views\n \n200 - OK\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Once you have a list of views, you can drill-into a view and see the available versions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /api/v1/views/FILES\n \n200 - OK\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"You can go a level deeper and see more information about that specific version for the view, such as the parameters and the archive name, and a list of all instances of the view for that specific view version.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /api/v1/views/FILES/versions/0.1.0\n \n200 - OK\n")),(0,i.kt)("h2",{id:"creating-a-view-instance-files-view"},"Creating a View Instance: Files View"),(0,i.kt)("p",null,"The following example shows creating an instance of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/tree/trunk/contrib/views/files"},"Files View"),', name FILES, version 0.1.0 view called "MyFiles".'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create the view instance.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /api/v1/views/FILES/versions/0.1.0/instances/MyFiles\n \n[ {\n"ViewInstanceInfo" : {\n    "properties" : {\n      "dataworker.defaultFs" : "webhdfs://your.namenode.host:50070"\n    }\n  }\n} ]\n \n201 - CREATED\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When creating your view instance, be sure to provide all required view instance properties, otherwise you will receive a 500 with a message explaining the properties that are required.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Restart Ambari Server to pick-up the view instance and UI resources.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ambari-server restart\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Confirm the newly created view instance is available.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'GET /api/v1/views/FILES/versions/0.1.0\n \n{\n  "href" : "http://c6401.ambari.apache.org:8080/api/v1/views/FILES/versions/0.1.0/",\n  "ViewVersionInfo" : {\n    "archive" : "/var/lib/ambari-server/resources/views/work/FILES{0.1.0}",\n    "label" : "Files",\n    "masker_class" : null,\n    "parameters" : [\n      {\n        "name" : "dataworker.defaultFs",\n        "description" : "FileSystem URI",\n        "required" : true,\n        "masked" : false\n      },\n      {\n        "name" : "dataworker.username",\n        "description" : "The username (defaults to ViewContext username)",\n        "required" : false,\n        "masked" : false\n      }\n    ],\n    "version" : "0.1.0",\n    "view_name" : "FILES"\n  },\n  "permissions" : [ ],\n  "instances" : [\n    {\n      "href" : "http://c6401.ambari.apache.org:8080/api/v1/views/FILES/versions/0.1.0/instances/MyFiles",\n      "ViewInstanceInfo" : {\n        "instance_name" : "MyFiles",\n        "version" : "0.1.0",\n        "view_name" : "FILES"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Browse to the view instance directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://c6401.ambari.apache.org:8080/views/FILES/0.1.0/MyFiles/\n \nor\n \nhttp://c6401.ambari.apache.org:8080/#/main/views/FILES/0.1.0/MyFiles\n")),(0,i.kt)("h2",{id:"creating-a-view-instance-capacity-scheduler-view"},"Creating a View Instance: Capacity Scheduler View"),(0,i.kt)("p",null,"The following example shows creating an instance of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/tree/trunk/contrib/views/capacity-scheduler"},"Capacity Scheduler View"),', name CAPACITY-SCHEDULER, version 0.1.0 view called "CS_1", using the label "Capacity Scheduler".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the view instance.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /api/v1/views/CAPACITY-SCHEDULER/versions/0.1.0/instances/CS_1\n\n[ {\n"ViewInstanceInfo" : {\n    "label" : "Capacity Scheduler",\n    "properties" : {\n      "ambari.server.url" : "http://c6401.ambari.apache.org:8080/api/v1/clusters/MyCluster",\n      "ambari.server.username" : "admin",\n      "ambari.server.password" : "admin"\n    }\n  }\n} ]\n\n201 - CREATED\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When creating your view instance, be sure to provide all ",(0,i.kt)("strong",{parentName:"p"},"required")," view instance properties, otherwise you will receive a 500 with a message explaining the properties that are required.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Confirm the newly created view instance is available.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'GET /api/v1/views/CAPACITY-SCHEDULER/versions/0.1.0\n\n{\n  "href" : "http://c6401.ambari.apache.org:8080/api/v1/views/CAPACITY-SCHEDULER/versions/0.1.0/",\n  "ViewVersionInfo" : {\n    "archive" : "/var/lib/ambari-server/resources/views/work/CAPACITY-SCHEDULER{0.1.0}",\n    "label" : "Capacity Scheduler",\n    "masker_class" : null,\n    "parameters" : [\n      {\n        "name" : "ambari.server.url",\n        "description" : "Target Ambari Server REST API cluster URL (for example: http://ambari.server:8080/api/v1/clusters/c1)",\n        "required" : true,\n        "masked" : false\n      },\n      {\n        "name" : "ambari.server.username",\n        "description" : "Target Ambari administrator username (for example: admin)",\n        "required" : true,\n        "masked" : false\n      },\n      {\n        "name" : "ambari.server.password",\n        "description" : "Target Ambari administrator password (for example: admin)",\n        "required" : true,\n        "masked" : false\n      }\n    ],\n    "version" : "0.1.0",\n    "view_name" : "CAPACITY-SCHEDULER"\n  },\n  "permissions" : [ ],\n  "instances" : [\n    {\n      "href" : "http://c6401.ambari.apache.org:8080/api/v1/views/CAPACITY-SCHEDULER/versions/0.1.0/instances/CS_1",\n      "ViewInstanceInfo" : {\n        "instance_name" : "CS_1",\n        "version" : "0.1.0",\n        "view_name" : "CAPACITY-SCHEDULER"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browse to the view instance directly.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://c6401.ambari.apache.org:8080/views/CAPACITY-SCHEDULER/0.1.0/CS_1/\n\nor\n\nhttp://c6401.ambari.apache.org:8080/#/main/views/CAPACITY-SCHEDULER/0.1.0/CS_1/\n")))}m.isMDXComponent=!0}}]);