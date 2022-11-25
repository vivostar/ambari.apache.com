"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[7623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=s,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const a={},o="Version functions: conf-select and stack-select",c={unversionedId:"ambari-design/stack-and-services/version-functions-conf-select-and-stack-select",id:"ambari-design/stack-and-services/version-functions-conf-select-and-stack-select",title:"Version functions: conf-select and stack-select",description:"Especially during upgrade, it is important to be able to set the current stack and configuration versions. For non-custom services, these functions are implemented in the conf-select and stack-select functions. These can be imported in a service's scripts with the following imports:",source:"@site/docs/ambari-design/stack-and-services/version-functions-conf-select-and-stack-select.md",sourceDirName:"ambari-design/stack-and-services",slug:"/ambari-design/stack-and-services/version-functions-conf-select-and-stack-select",permalink:"/docs/next/ambari-design/stack-and-services/version-functions-conf-select-and-stack-select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-design/stack-and-services/version-functions-conf-select-and-stack-select.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Hooks",permalink:"/docs/next/ambari-design/stack-and-services/hooks"},next:{title:"Technology Stack",permalink:"/docs/next/ambari-design/technology-stack"}},i={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"version-functions-conf-select-and-stack-select"},"Version functions: conf-select and stack-select"),(0,s.kt)("p",null,"Especially during upgrade, it is important to be able to set the current stack and configuration versions. For non-custom services, these functions are implemented in the conf-select and stack-select functions. These can be imported in a service's scripts with the following imports:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from resource_management.libraries.functions import conf_select\n\nfrom resource_management.libraries.functions import stack_select\n")),(0,s.kt)("p",null,"Typically the select functions, which is used to set the stack and configuration versions, are called in the pre_upgrade_restart function during a rolling upgrade:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'  def pre_upgrade_restart(self, env, upgrade_type=None):\n    import params\n    env.set_params(params)\n\n    # this function should not execute if the version can\'t be determined or\n    # the stack does not support rolling upgrade\n    if not (params.version and check_stack_feature(StackFeature.ROLLING_UPGRADE, params.version)):\n      return\n\n    Logger.info("Executing <My Service> Stack Upgrade pre-restart")\n    conf_select.select(params.stack_name, "<my_service>", params.version)\n    stack_select.select("<my_service>", params.version)\n')),(0,s.kt)("p",null,"The select functions will set up symlinks for the current stack or configuration version. For the stack, this will set up the links from the stack root current directory to the particular stack version. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/usr/hdp/current/hadoop-client -> /usr/hdp/2.5.0.0/hadoop\n")),(0,s.kt)("p",null,"For the configuration version, this will set up the links for all the configuration directories, as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/etc/hadoop/conf -> /usr/hdp/current/hadoop-client/conf\n\n/usr/hdp/current/hadoop-client/conf -> /etc/hadoop/2.5.0.0/0\n")),(0,s.kt)("p",null,"The stack_select and conf_select functions can also be used to return the hadoop directories:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'hadoop_prefix = stack_select.get_hadoop_dir("home")\n\nhadoop_bin_dir = stack_select.get_hadoop_dir("bin")\n\nhadoop_conf_dir = conf_select.get_hadoop_conf_dir()\n')),(0,s.kt)("p",null,"The conf_select api is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"def select(stack_name, package, version, try_create=True, ignore_errors=False)\n\ndef get_hadoop_conf_dir(force_latest_on_upgrade=False)\n")),(0,s.kt)("p",null,"The stack_select api is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"def select(component, version)\n\ndef get_hadoop_dir(target, force_latest_on_upgrade=False)\n")),(0,s.kt)("p",null,"Unfortunately for custom services these functions are not available to set up their configuration or stack versions. A custom service could implement their own functions to set up the proper links."))}u.isMDXComponent=!0}}]);