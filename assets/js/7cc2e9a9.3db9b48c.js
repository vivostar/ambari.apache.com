"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[3536],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),p=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,b=c["".concat(m,".").concat(u)]||c[u]||d[u]||l;return a?r.createElement(b,i(i({ref:e},s),{},{components:a})):r.createElement(b,i({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2529:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},i="Apache Ambari JIRA",o={unversionedId:"ambari-dev/apache-ambari-jira",id:"version-2.7.5/ambari-dev/apache-ambari-jira",title:"Apache Ambari JIRA",description:"The following page describes the Apache Ambari JIRA components for tasks, bugs and improvements across the core project + contributions.",source:"@site/versioned_docs/version-2.7.5/ambari-dev/apache-ambari-jira.md",sourceDirName:"ambari-dev",slug:"/ambari-dev/apache-ambari-jira",permalink:"/docs/2.7.5/ambari-dev/apache-ambari-jira",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.7.5/ambari-dev/apache-ambari-jira.md",tags:[],version:"2.7.5",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Ambari Code Layout",permalink:"/docs/2.7.5/ambari-dev/ambari-code-layout"},next:{title:"Coding Guidelines for Ambari",permalink:"/docs/2.7.5/ambari-dev/coding-guidelines-for-ambari"}},m={},p=[{value:"components",id:"components",level:2},{value:"Use of Labels",id:"use-of-labels",level:2}],s={toc:p};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apache-ambari-jira"},"Apache Ambari JIRA"),(0,n.kt)("p",null,"The following page describes the ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/AMBARI"},"Apache Ambari JIRA")," components for tasks, bugs and improvements across the core project + contributions."),(0,n.kt)("h2",{id:"components"},"components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Proposed Rename"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alerts"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to Ambari Alerts system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-admin"),(0,n.kt)("td",{parentName:"tr",align:null},"New component specifically for Ambari Admin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-agent"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to the Ambari Agent.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-client"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to the Ambari Client.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-metrics"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to Ambari Metrics system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-server"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to the Ambari Server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-shell"),(0,n.kt)("td",{parentName:"tr",align:null},"New component specifically for Ambari Shell.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-views"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to the ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.7.5/ambari-design/views/"},"Ambari Views framework"),". Specific Views that are built on the framework will be handled with labels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ambari-web"),(0,n.kt)("td",{parentName:"tr",align:null},"New component specifically for Ambari Web.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"blueprints"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.7.5/blueprints"},"Ambari Blueprints"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"contrib"),(0,n.kt)("td",{parentName:"tr",align:null},'JIRAs related to contributions under "contrib", such as Ambari SCOM')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to project documentation including the wiki.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"infra"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to project infrastructure including builds, releases mechanics and automation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"security"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to Ambari security features, including Kerberos.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"site"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to the project site ",(0,n.kt)("a",{parentName:"td",href:"http://ambari.apache.org/"},"http://ambari.apache.org/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stacks"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to Ambari Stacks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"test"),(0,n.kt)("td",{parentName:"tr",align:null},"JIRAs related to unit tests and test automation")))),(0,n.kt)("h2",{id:"use-of-labels"},"Use of Labels"),(0,n.kt)("p",null,'In certain cases, the component listed above might be "too broad" and you want to designate JIRAs to a specific area of that component. To handle these scenarios, use a combination of component + labels. Some examples:'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Feature Area"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:null},"Label"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HDP Stack"),(0,n.kt)("td",{parentName:"tr",align:null},"These are specific Stack implements for HDP."),(0,n.kt)("td",{parentName:"tr",align:null},"stacks"),(0,n.kt)("td",{parentName:"tr",align:null},"HDP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BigTop"),(0,n.kt)("td",{parentName:"tr",align:null},"This is a specific Stack implement for BigTop."),(0,n.kt)("td",{parentName:"tr",align:null},"stacks"),(0,n.kt)("td",{parentName:"tr",align:null},"BigTop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Files View"),(0,n.kt)("td",{parentName:"tr",align:null},"This is a specific view implementation for Files."),(0,n.kt)("td",{parentName:"tr",align:null},"ambari-views"),(0,n.kt)("td",{parentName:"tr",align:null},"Files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ambari SCOM"),(0,n.kt)("td",{parentName:"tr",align:null},"This is a specific contribution of a Management Pack for Microsoft System Center."),(0,n.kt)("td",{parentName:"tr",align:null},"contrib"),(0,n.kt)("td",{parentName:"tr",align:null},"Ambari-SCOM")))))}d.isMDXComponent=!0}}]);