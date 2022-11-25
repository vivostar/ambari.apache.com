"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[7540],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={},o="Step-by-step guide on adding a dashboard widget for a host.",s={unversionedId:"ambari-plugin-contribution/step-by-step",id:"version-2.7.5/ambari-plugin-contribution/step-by-step",title:"Step-by-step guide on adding a dashboard widget for a host.",description:"Create your own dashboard widget for hosts:",source:"@site/versioned_docs/version-2.7.5/ambari-plugin-contribution/step-by-step.md",sourceDirName:"ambari-plugin-contribution",slug:"/ambari-plugin-contribution/step-by-step",permalink:"/docs/2.7.5/ambari-plugin-contribution/step-by-step",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.7.5/ambari-plugin-contribution/step-by-step.md",tags:[],version:"2.7.5",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Installation",permalink:"/docs/2.7.5/ambari-plugin-contribution/scom/installation"},next:{title:"Ambari Alerts",permalink:"/docs/2.7.5/ambari-alerts"}},p={},l=[{value:"Create your own dashboard widget for hosts:",id:"create-your-own-dashboard-widget-for-hosts",level:2}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"step-by-step-guide-on-adding-a-dashboard-widget-for-a-host"},"Step-by-step guide on adding a dashboard widget for a host."),(0,n.kt)("h2",{id:"create-your-own-dashboard-widget-for-hosts"},"Create your own dashboard widget for hosts:"),(0,n.kt)("p",null,"Requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jmxtrans",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- Jmxtrans is the application chosen to compile rrd files in order to produce graphing data on ganglia.\n")),(0,n.kt)("a",{parentName:"li",href:"https://github.com/jmxtrans/jmxtrans"},"https://github.com/jmxtrans/jmxtrans")),(0,n.kt)("li",{parentName:"ul"},".rrd files",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All the Ganglia rrd files are stored in the /var/lib/rrds directory on the host machine where the Ganglia server is installed."),(0,n.kt)("li",{parentName:"ul"},"In this example I\u2019ll be using the \u201c",(0,n.kt)("strong",{parentName:"li"},"Nimbus_JVM_Memory_Heap_used.rrd"),"\u201d file for the data of my custom widget.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1"),":"),(0,n.kt)("p",null,"First we need to go add the rrd file in the \u201c",(0,n.kt)("strong",{parentName:"p"},"ganglia_properties.json"),"\u201d file which is located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ambari\\ambari-server\\src\\main\\resources")," directory of your Ambari source code. This is necessary so that the Ambari-server can call your rrd file from Ganglia via the Ambari API."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3075).Z,title:"step1",width:"417",height:"136"})),(0,n.kt)("p",null,"Line 108: Create the path for the metrics to be included in the API."),(0,n.kt)("p",null,"Line 109: Specify the rrd file."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2"),":"),(0,n.kt)("p",null,"Now we are going to add the API path created in step 1 at line 108, to the \u201c",(0,n.kt)("strong",{parentName:"p"},"update_controller.js"),"\u201d file located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ambari\\ambari-web\\app\\controllers\\global")," directory, so that our graph data can be updated frequently."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(767).Z,title:"step2",width:"1052",height:"101"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3"),":"),(0,n.kt)("p",null,"Create a JavaScript file for the view of the template of our custom widget and save it in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ambari\\ambari-web\\app\\views\\main\\host\\metrics")," directory of your Ambari source code. In this case I saved my file as \u201c",(0,n.kt)("strong",{parentName:"p"},"nimbus.js"),"\u201d"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(6270).Z,title:"step3",width:"603",height:"648"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4"),":"),(0,n.kt)("p",null,"Add the JavaScript file you created in the previous step into the \u201c",(0,n.kt)("strong",{parentName:"p"},"views.js"),"\u201d file located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ambari\\ambari-web\\app")," directory."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3119).Z,title:"step4",width:"538",height:"506"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5"),":"),(0,n.kt)("p",null,"Add the .js file view created in step 3 in the \u201c",(0,n.kt)("strong",{parentName:"p"},"metrics.hbs"),"\u201d template file located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ambari\\ambari-web\\app\\templates\\main\\host")," directory."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7189).Z,title:"step5",width:"531",height:"558"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 6"),":"),(0,n.kt)("p",null,"Add the API call to the \u201c",(0,n.kt)("strong",{parentName:"p"},"ajax.js"),"\u201d file located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ambari\\ambari-web\\app\\utils")," directory."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5046).Z,title:"step6",width:"1064",height:"356"})))}d.isMDXComponent=!0},3075:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/step1-7e6e5ce1f17c4f1a6c8e5e1a56d47cab.png"},767:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/step2-4125b5f6ce42d083d93a9958908e0745.png"},6270:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/step3-81cfef57ad7e7369568ef670b6cc27b7.png"},3119:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/step4-73180089f18e1fa8b959c6df67e0ab6e.png"},7189:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/step5-109f7e5709152372cc5e899498289919.png"},5046:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/step6-3a29e2ee2cec79f8c14fd8f7103293fe.png"}}]);