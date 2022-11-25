"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[6694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(r),c=a,b=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return r?n.createElement(b,o(o({ref:t},d),{},{components:r})):n.createElement(b,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const i={},o="Admin View (ambari-admin) Development",s={unversionedId:"ambari-dev/admin-view-ambari-admin-development",id:"ambari-dev/admin-view-ambari-admin-development",title:"Admin View (ambari-admin) Development",description:"Frontend Development",source:"@site/docs/ambari-dev/admin-view-ambari-admin-development.md",sourceDirName:"ambari-dev",slug:"/ambari-dev/admin-view-ambari-admin-development",permalink:"/docs/next/ambari-dev/admin-view-ambari-admin-development",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-dev/admin-view-ambari-admin-development.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Releasing Ambari",permalink:"/docs/next/ambari-dev/releasing-ambari"},next:{title:"Unit Test Reports",permalink:"/docs/next/ambari-dev/unit-test-reports"}},l={},m=[{value:"Frontend Development",id:"frontend-development",level:2},{value:"Functional Tests",id:"functional-tests",level:2},{value:"Unit Tests",id:"unit-tests",level:2}],d={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-view-ambari-admin-development"},"Admin View (ambari-admin) Development"),(0,a.kt)("h2",{id:"frontend-development"},"Frontend Development"),(0,a.kt)("p",null,"Follow the instructions here to ease frontend development for Admin View (ambari-admin module):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the Quick Start Guide to install and start Ambari Server (cluster need not be deployed).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Follow the "Frontend Development" section in Quick Start Guide to check out the Ambari source using git.  This makes the entire Ambari source available via /vagrant/ambari from the Vagrant VM.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the Ambari Server host:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cd /var/lib/ambari-server/resources/views/work  <- if this directory does not exist, you have      not started ambari-server; run "ambari-server start" to start it\nmv ADMIN_VIEW\\{2.5.0.0\\} /tmp\nln -s /vagrant/ambari/ambari-admin/src/main/resources/ui/admin-web/dist ADMIN_VIEW\\{2.5.0.0\\}\ncp /tmp/ADMIN_VIEW\\{2.5.0.0\\}/view.xml ADMIN_VIEW\\{2.5.0.0\\}/ \nambari-server restart\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now you can change the source code for Admin View and run gulp locally, and the changes are automatically reflected on the server."))),(0,a.kt)("h2",{id:"functional-tests"},"Functional Tests"),(0,a.kt)("p",null,"To run end-to-end functional tests on the browser, execute:"),(0,a.kt)("p",null,"npm run update-webdriver\nnpm start (This starts http server at 8000 port)"),(0,a.kt)("p",null,"Open another terminal at same path and execute: npm run protractor (does e2e test in the browser. This library works on top of selenium jar)."),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"To run unit tests:"),(0,a.kt)("p",null,"Go to path: ",(0,a.kt)("inlineCode",{parentName:"p"},"/ambari/ambari-admin/src/main/resources/ui/admin-web"),"\nExecute npm run test-single-run (this uses PhantomJS headless browser; it's the same used by the ambari-web unit tests)"),(0,a.kt)("p",null,'Note:\n"npm test" command starts karma server at ',(0,a.kt)("a",{parentName:"p",href:"http://localhost:9876/"},"http://localhost:9876/")," and runs unit tests. This server remain up, autoreloads any changes in the test code and reruns the tests. This is useful while developing unit tests."))}p.isMDXComponent=!0}}]);