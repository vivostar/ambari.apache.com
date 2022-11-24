"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[9986],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=p(a),u=r,h=v["".concat(l,".").concat(u)]||v[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},7049:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="Framework Services",s={unversionedId:"ambari-design/views/framework-services",id:"ambari-design/views/framework-services",title:"Framework Services",description:"This section describes the framework services that are available for views.",source:"@site/docs/ambari-design/views/framework-services.md",sourceDirName:"ambari-design/views",slug:"/ambari-design/views/framework-services",permalink:"/docs/ambari-design/views/framework-services",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-design/views/framework-services.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Views",permalink:"/docs/ambari-design/views/"},next:{title:"View API",permalink:"/docs/ambari-design/views/view-api"}},l={},p=[{value:"ViewContext",id:"viewcontext",level:2},{value:"Instance Data",id:"instance-data",level:2},{value:"Instance Configuration Properties",id:"instance-configuration-properties",level:2},{value:"Events",id:"events",level:2},{value:"Framework Events",id:"framework-events",level:3},{value:"Views Events",id:"views-events",level:3}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"framework-services"},"Framework Services"),(0,r.kt)("p",null,"This section describes the framework services that are available for views."),(0,r.kt)("h2",{id:"viewcontext"},"ViewContext"),(0,r.kt)("p",null,"The view server-side resources have access to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/ViewContext.java"},"ViewContext")," object. The view context provides information about the current authenticated user, the view definition, the instance configuration properties, instance data and the view controller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n   * The view context.\n\n   */\n  @Inject\n  ViewContext context;\n")),(0,r.kt)("h2",{id:"instance-data"},"Instance Data"),(0,r.kt)("p",null,'The view framework exposes a way to store key/value pair "instance data". This data is scoped to a given view instance and user. Instance data is meant to be used for information such as "user prefs" or other lightweight information that supports the experience of your view application. You can access the instance data get and put methods from the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/ViewContext.java"},"ViewContext")," object."),(0,r.kt)("p",null,"Checkout the ",(0,r.kt)("strong",{parentName:"p"},"Favorite View")," for example usage of the instance data API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/tree/trunk/ambari-views/examples/favorite-view"},"https://github.com/apache/ambari/tree/trunk/ambari-views/examples/favorite-view")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Context object available to the view components to provide access to\n * the view and instance attributes as well as run time information about\n * the current execution context.\n\n */\npublic interface ViewContext {\n\n\xa0/**\n   * Save an instance data value for the given key.\n\n   *\n   * @param key    the key\n   * @param value  the value\n   *\n   * @throws IllegalStateException if no instance is associated\n   */\n  public void putInstanceData(String key, String value);\n  /**\n   * Get the instance data value for the given key.\n\n   *\n   * @param key  the key\n   *\n   * @return the instance data value; null if no instance is associated\n   */\n  public String getInstanceData(String key);\n\n}\n")),(0,r.kt)("h2",{id:"instance-configuration-properties"},"Instance Configuration Properties"),(0,r.kt)("p",null,"The instance configuration properties (set when you created your view instance) are accessible from the view context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"viewContext.getProperties();\n")),(0,r.kt)("p",null,"Configuration properties also supports a set of pre-defined ",(0,r.kt)("strong",{parentName:"p"},"variables"),' that will be replaced when you read the property from the view context. For example, if your view requires a configuration parameter "hdfs.file.path" and that path is going to be set based on the username, when you configure the view instance, set the configuration property like so:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"hdfs.file.path" : "/this/is/some/path/${username}"\n')),(0,r.kt)("p",null,"When you get this property from the view context, the ",(0,r.kt)("inlineCode",{parentName:"p"},"${username}")," variable will be replaced automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'viewContext.getProperties().get("hdfs.file.path") returns "/this/is/some/path/pramod"\n')),(0,r.kt)("p",null,"Instance parameters support the following pre-defined variables: ",(0,r.kt)("inlineCode",{parentName:"p"},"${username}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"${viewName}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${instanceName}")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,'Events are an important component of the views framework. Events allow the view to interact with the framework on lifecycle changes (i.e. "Framework Events") such as deploy, create and destroy. As well, once a user has collection of views available, eventing allows the views to communicate with other views (i.e. "View Events").'),(0,r.kt)("h3",{id:"framework-events"},"Framework Events"),(0,r.kt)("p",null,"To register to receive framework events, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"view.xml"),", specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"<view-class>this.is.my.view-clazz</view-class>")," which is a class that implements the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/View.java"},"View")," interface."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7720).Z,title:"Apache Ambari > Framework Services > fmwk-events.jpg",width:"345",height:"240"})," "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDeploy()"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a view is deployed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCreate()"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a view instance is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDestroy()"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a view instance is destroy.")))),(0,r.kt)("h3",{id:"views-events"},"Views Events"),(0,r.kt)("p",null,"Views can pass events between views. Obtain the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/ViewController.java"},"ViewController")," object that allows you to ",(0,r.kt)("strong",{parentName:"p"},"register listeners")," for view events and to ",(0,r.kt)("strong",{parentName:"p"},"fire events")," for other listeners. A view can register an event ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/events/Listener.java"},"Listener")," (via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/ViewController.java"},"ViewController"),") for other views by ",(0,r.kt)("strong",{parentName:"p"},"view name"),", or by ",(0,r.kt)("strong",{parentName:"p"},"view name + version"),". When an ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/events/Event.java"},"Event")," is fired from the source view, all registered listeners will receive the event."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5686).Z,title:"Apache Ambari > Framework Services > view-events.jpg",width:"424",height:"203"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtain the view controller and register a listener.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"viewContext.getViewController().registerListener(...);\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fire the event. ",(0,r.kt)("inlineCode",{parentName:"p"},"viewContext.getViewController().fireEvent(...);"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The framework will notify all registered listeners. The listener implementation can process the event as appropriate.  ",(0,r.kt)("inlineCode",{parentName:"p"},"listener.notify(...)")))))}m.isMDXComponent=!0},7720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fmwk-events-0bcf04d6ba67e7b7990cd743d9f72cc3.jpg"},5686:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view-events-629e0ac413767d75fe29d4aa1a3c40ff.jpg"}}]);