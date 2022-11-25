"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[6380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={},o="Ambari SCOM Management Pack",l={unversionedId:"ambari-plugin-contribution/scom/index",id:"version-2.7.6/ambari-plugin-contribution/scom/index",title:"Ambari SCOM Management Pack",description:"This information is intended for Apache Hadoop and Microsoft System Center Operations Manager users who install the Ambari SCOM Management Pack.",source:"@site/versioned_docs/version-2.7.6/ambari-plugin-contribution/scom/index.md",sourceDirName:"ambari-plugin-contribution/scom",slug:"/ambari-plugin-contribution/scom/",permalink:"/docs/ambari-plugin-contribution/scom/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.7.6/ambari-plugin-contribution/scom/index.md",tags:[],version:"2.7.6",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Ambari Plugin Contributions",permalink:"/docs/ambari-plugin-contribution/"},next:{title:"Installation",permalink:"/docs/ambari-plugin-contribution/scom/installation"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Versions",id:"versions",level:3},{value:"Useful Resources",id:"useful-resources",level:3},{value:"Get Started",id:"get-started",level:2},{value:"Overview",id:"overview",level:3},{value:"Architecture",id:"architecture",level:3}],c={toc:m};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ambari-scom-management-pack"},"Ambari SCOM Management Pack"),(0,n.kt)("p",null,"This information is intended for ",(0,n.kt)("strong",{parentName:"p"},"Apache Hadoop")," and ",(0,n.kt)("strong",{parentName:"p"},"Microsoft System Center Operations Manager")," users who install the ",(0,n.kt)("strong",{parentName:"p"},"Ambari SCOM Management Pack"),"."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("h3",{id:"versions"},"Versions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ambari SCOM Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Ambari Server Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"1.5.1"),(0,n.kt)("td",{parentName:"tr",align:null},"1.5.1.2.0.0.0-673")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"1.4.4"),(0,n.kt)("td",{parentName:"tr",align:null},"1.4.4.1.0.0.1-472")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.9.0"),(0,n.kt)("td",{parentName:"tr",align:null},"1.2.5"),(0,n.kt)("td",{parentName:"tr",align:null},"1.2.5.0.9.0.0-60")))),(0,n.kt)("p",null,"The Ambari SCOM contribution can be found in the Apache Ambari project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/ambari/tree/trunk/contrib/ambari-scom"},"https://github.com/apache/ambari/tree/trunk/contrib/ambari-scom"))),(0,n.kt)("h3",{id:"useful-resources"},"Useful Resources"),(0,n.kt)("p",null,"The following links connect you to information about common tasks that are associated with System Center Management Packs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkId=211463"},"Administering the Management Pack Life Cycle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkID=142351"},"How to Import a Management Pack in Operations Manager 2007")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkID=117777"},"How to Monitor Using Overrides")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://technet.microsoft.com/en-us/library/hh321655.aspx"},"How to Create a Run As Account in Operations Manager 2007")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkID=165412"},"How to Modify an Existing Run As Profile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkId=209940"},"How to Export Management Pack Customizations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkId=209941"},"How to Remove a Management Pack"))),(0,n.kt)("p",null,"For questions about Operations Manager and monitoring packs, see the ",(0,n.kt)("a",{parentName:"p",href:"http://social.technet.microsoft.com/Forums/systemcenter/en-US/home?category=systemcenteroperationsmanager"},"System Center Operations Manager community forum"),"."),(0,n.kt)("p",null,"A useful resource is the ",(0,n.kt)("a",{parentName:"p",href:"http://opsmgrunleashed.wordpress.com/"},"System Center Operations Manager Unleashed blog"),', which contains "By Example" posts for specific monitoring packs.'),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ambari SCOM")," extends the functionality of ",(0,n.kt)("strong",{parentName:"p"},"Microsoft System Center Operations Manager")," to monitor Apache Hadoop clusters, and leverages Ambari (and the Ambari REST API) to obtain Hadoop metrics. The Ambari SCOM Management Pack will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatically discover all nodes within a Hadoop cluster(s)."),(0,n.kt)("li",{parentName:"ul"},"Proactively monitor the availability and capacity."),(0,n.kt)("li",{parentName:"ul"},"Proactively notify when the health is critical."),(0,n.kt)("li",{parentName:"ul"},"Intuitively and efficiently visualize the health of Hadoop cluster via dashboards")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2480).Z,width:"1502",height:"776"})),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Ambari SCOM is made up of the following components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ambari SCOM Management Pack"),(0,n.kt)("td",{parentName:"tr",align:null},"The Ambari SCOM Management Pack extends the functional of Microsoft System Center Operations Manager to monitor Hadoop clusters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ambari SCOM Server"),(0,n.kt)("td",{parentName:"tr",align:null},"The Ambari SCOM Server component connects to the Hadoop cluster components and exposes a REST API for the Ambari SCOM Management Pack.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ResourceProvider"),(0,n.kt)("td",{parentName:"tr",align:null},"An Ambari ResourceProvider is a pluggable interface in Ambari enables the customization of the Ambari SCOM Server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ClusterLayout ResourceProvider"),(0,n.kt)("td",{parentName:"tr",align:null},"An Ambari ResourceProvider implementation that supplies information on cluster layout (i.e. where Hadoop master and slave components are installed) to the Ambari SCOM Server. This allows Ambari to know how and where to access components of the Hadoop cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Property ResourceProvider"),(0,n.kt)("td",{parentName:"tr",align:null},"An Ambari ResourceProvider implementation that integrates with the SQL Server database instance for retrieving stored Hadoop metrics.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,n.kt)("td",{parentName:"tr",align:null},"A SQL Server instance that stores the metrics emitted from Hadoop via the SqlServerSink and the Hadoop Metrics2 interface.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SqlServerSink"),(0,n.kt)("td",{parentName:"tr",align:null},"This is a Hadoop Metrics2 sink designed to consume metrics emitted from the Hadoop cluster. Ambari SCOM provides a SQL Server implementation.")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8274).Z,width:"827",height:"381"})))}p.isMDXComponent=!0},8274:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ambari-scom-arch-a7941b1b0b7288715e8f5d3bd4bf8f57.jpg"},2480:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ambari-scom-10293ba44ce6c7360b538dedf43b6bcc.jpg"}}]);