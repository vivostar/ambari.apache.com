"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[6073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="Technology Stack",l={unversionedId:"ambari-design/technology-stack",id:"version-2.7.5/ambari-design/technology-stack",title:"Technology Stack",description:"Ambari Server",source:"@site/versioned_docs/version-2.7.5/ambari-design/technology-stack.md",sourceDirName:"ambari-design",slug:"/ambari-design/technology-stack",permalink:"/docs/2.7.5/ambari-design/technology-stack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.7.5/ambari-design/technology-stack.md",tags:[],version:"2.7.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ambariSidebar",previous:{title:"Version functions: conf-select and stack-select",permalink:"/docs/2.7.5/ambari-design/stack-and-services/version-functions-conf-select-and-stack-select"},next:{title:"Views",permalink:"/docs/2.7.5/ambari-design/views/"}},c={},s=[{value:"Ambari Server",id:"ambari-server",level:2},{value:"Ambari Web",id:"ambari-web",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technology-stack"},"Technology Stack"),(0,a.kt)("h2",{id:"ambari-server"},"Ambari Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server code: Java 1.7 / 1.8"),(0,a.kt)("li",{parentName:"ul"},"Agent scripts: Python"),(0,a.kt)("li",{parentName:"ul"},"Database: Postgres, Oracle, MySQL"),(0,a.kt)("li",{parentName:"ul"},"ORM: EclipseLink"),(0,a.kt)("li",{parentName:"ul"},"Security: Spring Security with remote LDAP integration and local database"),(0,a.kt)("li",{parentName:"ul"},"REST server: Jersey (JAX-RS)"),(0,a.kt)("li",{parentName:"ul"},"Dependency Injection: Guice"),(0,a.kt)("li",{parentName:"ul"},"Unit Testing: JUnit"),(0,a.kt)("li",{parentName:"ul"},"Mocks: EasyMock"),(0,a.kt)("li",{parentName:"ul"},"Configuration management: Python")),(0,a.kt)("h2",{id:"ambari-web"},"Ambari Web"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Frontend code: JavaScript"),(0,a.kt)("li",{parentName:"ul"},"Client-side MVC framework: Ember.js / AngularJS"),(0,a.kt)("li",{parentName:"ul"},"Templating: Handlebars.js (integrated with Ember.js)"),(0,a.kt)("li",{parentName:"ul"},"DOM manipulation: jQuery"),(0,a.kt)("li",{parentName:"ul"},"Look and feel: Bootstrap 2"),(0,a.kt)("li",{parentName:"ul"},"CSS preprocessor: LESS"),(0,a.kt)("li",{parentName:"ul"},"Unit Testing: Mocha"),(0,a.kt)("li",{parentName:"ul"},"Mocks: Sinon.js"),(0,a.kt)("li",{parentName:"ul"},"Application assembler/tester: Brunch / Grunt / Gulp")))}p.isMDXComponent=!0}}]);