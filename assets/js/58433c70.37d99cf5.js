"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[6552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Writing metainfo.xml",o={unversionedId:"ambari-design/stack-and-services/writing-metainfo",id:"version-2.7.5/ambari-design/stack-and-services/writing-metainfo",title:"Writing metainfo.xml",description:"metainfo.xml is a declarative definition of an Ambari managed service describing its content. Itis the most critical file for any service definition. This section describes various key sub-sections within a metainfo.xml file.",source:"@site/versioned_docs/version-2.7.5/ambari-design/stack-and-services/writing-metainfo.md",sourceDirName:"ambari-design/stack-and-services",slug:"/ambari-design/stack-and-services/writing-metainfo",permalink:"/docs/2.7.5/ambari-design/stack-and-services/writing-metainfo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.7.5/ambari-design/stack-and-services/writing-metainfo.md",tags:[],version:"2.7.5",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Stack Properties",permalink:"/docs/2.7.5/ambari-design/stack-and-services/stack-properties"},next:{title:"FAQ",permalink:"/docs/2.7.5/ambari-design/stack-and-services/faq"}},m={},p=[{value:"Sample metainfo.xml",id:"sample-metainfoxml",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-metainfoxml"},"Writing metainfo.xml"),(0,r.kt)("p",null,"metainfo.xml is a declarative definition of an Ambari managed service describing its content. Itis the most critical file for any service definition. This section describes various key sub-sections within a metainfo.xml file."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Non-mandatory fields are described in italics.")),(0,r.kt)("p",null,"The top level fields to describe a service are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feild"),(0,r.kt)("th",{parentName:"tr",align:null},"What is it used for"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the service. A name has to be unique among all the services that are included in the stack definition containing the service."),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the display name of the service"),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"the version of the service. name and version together uniquely identify a service. Usually, the version is the version of the service binary itself."),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"components"),(0,r.kt)("td",{parentName:"tr",align:null},"the list of component that the service is comprised of"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"osSpecifics"),(0,r.kt)("td",{parentName:"tr",align:null},"OS specific package information for the service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commandScript"),(0,r.kt)("td",{parentName:"tr",align:null},"service level commands may also be defined. The command is executed on a component instance that is a client"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comment"),(0,r.kt)("td",{parentName:"tr",align:null},"a short description describing the service"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache Hadoop Distributed File System")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requiredServices"),(0,r.kt)("td",{parentName:"tr",align:null},"what other services that should be present on the cluster"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configuration-dependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"configuration files that are expected by the service (config files owned by other services are specified in this list)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restartRequiredAfterRackChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Restart Required After Rack Change"),(0,r.kt)("td",{parentName:"tr",align:null},"true / false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configuration-dir"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to specify a different config directory if not 'configuration'"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/components - A service contains several components. The fields associated with a component are"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feild"),(0,r.kt)("th",{parentName:"tr",align:null},"What is it used for"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the component"),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"display name of the component."),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"type of the component - MASTER, SLAVE, and CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commandScript"),(0,r.kt)("td",{parentName:"tr",align:null},"application wide commands may also be defined. The command is executed on a component instance that is a client"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardinality"),(0,r.kt)("td",{parentName:"tr",align:null},"allowed/expected number of instances"),(0,r.kt)("td",{parentName:"tr",align:null},"For example, 1-2 for MASTER, 1+ for Slave")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reassignAllowed"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the component can be reassigned / moved to a different host."),(0,r.kt)("td",{parentName:"tr",align:null},"true / false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"versionAdvertised"),(0,r.kt)("td",{parentName:"tr",align:null},"does the component advertise its version - used during rolling/express upgrade"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache Hadoop Distributed File System")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timelineAppid"),(0,r.kt)("td",{parentName:"tr",align:null},"This will be the component name under which the metrics from this component will be collected."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"the list of components that this component depends on"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customCommands"),(0,r.kt)("td",{parentName:"tr",align:null},"a set of custom commands associated with the component in addition to standard commands."),(0,r.kt)("td",{parentName:"tr",align:null},"RESTART_LLAP (Check out HIVE metainfo)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/osSpecifics - OS specific package names (rpm or deb packages)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feild"),(0,r.kt)("th",{parentName:"tr",align:null},"What is it used for"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"osFamily"),(0,r.kt)("td",{parentName:"tr",align:null},"the os family for which the package is applicable"),(0,r.kt)("td",{parentName:"tr",align:null},"any => all",(0,r.kt)("br",null),"amazon2015,redhat6,debian7,ubuntu12,ubuntu14,ubuntu16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"packages"),(0,r.kt)("td",{parentName:"tr",align:null},"list of packages that are needed to deploy the service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<check out HDFS metainfo>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"package/name"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the package (will be used by the yum/zypper/apt commands)"),(0,r.kt)("td",{parentName:"tr",align:null},"Eg hadoop-lzo.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/commandScript - the script that implements service check")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feild"),(0,r.kt)("th",{parentName:"tr",align:null},"What is it used for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"script"),(0,r.kt)("td",{parentName:"tr",align:null},"the relative path to the script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scriptType"),(0,r.kt)("td",{parentName:"tr",align:null},"the type of the script, currently only supported type is PYTHON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"custom timeout for the command - this supersedes ambari default")))),(0,r.kt)("p",null,"sample values: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<commandScript>\n  <script>scripts/service_check.py<\/script>\n  <scriptType>PYTHON</scriptType>\n  <timeout>300</timeout>\n</commandScript>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/component/dependencies/dependency")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feild"),(0,r.kt)("th",{parentName:"tr",align:null},"What is it used for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the component it depends on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster / host. specifies whether the dependent component",(0,r.kt)("br",null),"should be present in the same cluster or the same host.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auto-deploy"),(0,r.kt)("td",{parentName:"tr",align:null},"custom timeout for the command - this supersedes ambari default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conditions"),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions in which this dependency exists. For example, the presence of a property in a config.")))),(0,r.kt)("p",null,"sample values: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<dependency>\n  <name>HDFS/ZKFC</name>\n  <scope>cluster</scope>\n  <auto-deploy>\n    <enabled>false</enabled>\n  </auto-deploy>\n  <conditions>\n    <condition xsi:type="propertyExists">\n      <configType>hdfs-site</configType>\n      <property>dfs.nameservices</property>\n    </condition>\n  </conditions>\n</dependency>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/component/commandScript - the script that implements components specific default commands (Similar to service/commandScript )")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/component/logs - provides log search integration.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feild"),(0,r.kt)("th",{parentName:"tr",align:null},"What is it used for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logId"),(0,r.kt)("td",{parentName:"tr",align:null},"logid of the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary"),(0,r.kt)("td",{parentName:"tr",align:null},"primary log id or not.")))),(0,r.kt)("p",null,"sample values: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<log>\n  <logId>hdfs_namenode</logId>\n  <primary>true</primary>\n</log>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/component/customCommand - custom commands can be added to components.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),": name of the custom command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"commandScript"),": the details of the script that implements the custom command"),(0,r.kt)("li",{parentName:"ul"},"commandScript/script: the relative path to the script"),(0,r.kt)("li",{parentName:"ul"},"commandScript/scriptType: the type of the script, currently only supported type is PYTHON"),(0,r.kt)("li",{parentName:"ul"},"commandScript/timeout: custom timeout for the command - this supersedes ambari default ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"service/component/configFiles - list of config files to be available when client config is to be downloaded (used to configure service clients that are not managed by Ambari)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": the type of file to be generated, xml or env sh, yaml, etc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fileName"),": name of the generated file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dictionary"),": data dictionary that contains the config properties (relevant to how ambari manages config bags internally)")),(0,r.kt)("h2",{id:"sample-metainfoxml"},"Sample metainfo.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<metainfo>\n  <schemaVersion>2.0</schemaVersion>\n  <services>\n    <service>\n      <name>HBASE</name>\n      <displayName>HBase</displayName>\n      <comment>Non-relational distributed database and centralized service for configuration management &amp;\n synchronization\n      </comment>\n      <version>0.96.0.2.0</version>\n      <components>\n        <component>\n          <name>HBASE_MASTER</name>\n          <displayName>HBase Master</displayName>\n          <category>MASTER</category>\n          <cardinality>1+</cardinality>\n          <versionAdvertised>true</versionAdvertised>\n          <timelineAppid>HBASE</timelineAppid>\n          <dependencies>\n            <dependency>\n              <name>HDFS/HDFS_CLIENT</name>\n              <scope>host</scope>\n              <auto-deploy>\n                <enabled>true</enabled>\n              </auto-deploy>\n            </dependency>\n            <dependency>\n              <name>ZOOKEEPER/ZOOKEEPER_SERVER</name>\n              <scope>cluster</scope>\n              <auto-deploy>\n                <enabled>true</enabled>\n                <co-locate>HBASE/HBASE_MASTER</co-locate>\n              </auto-deploy>\n            </dependency>\n          </dependencies>\n          <commandScript>\n            <script>scripts/hbase_master.py<\/script>\n            <scriptType>PYTHON</scriptType>\n            <timeout>1200</timeout>\n          </commandScript>\n          <customCommands>\n            <customCommand>\n              <name>DECOMMISSION</name>\n              <commandScript>\n                <script>scripts/hbase_master.py<\/script>\n                <scriptType>PYTHON</scriptType>\n                <timeout>600</timeout>\n              </commandScript>\n            </customCommand>\n          </customCommands>\n        </component>\n\n        <component>\n          <name>HBASE_REGIONSERVER</name>\n          <displayName>RegionServer</displayName>\n          <category>SLAVE</category>\n          <cardinality>1+</cardinality>\n          <versionAdvertised>true</versionAdvertised>\n          <timelineAppid>HBASE</timelineAppid>\n          <commandScript>\n            <script>scripts/hbase_regionserver.py<\/script>\n            <scriptType>PYTHON</scriptType>\n          </commandScript>\n        </component>\n\n        <component>\n          <name>HBASE_CLIENT</name>\n          <displayName>HBase Client</displayName>\n          <category>CLIENT</category>\n          <cardinality>1+</cardinality>\n          <versionAdvertised>true</versionAdvertised>\n          <commandScript>\n            <script>scripts/hbase_client.py<\/script>\n            <scriptType>PYTHON</scriptType>\n          </commandScript>\n          <configFiles>\n            <configFile>\n              <type>xml</type>\n              <fileName>hbase-site.xml</fileName>\n              <dictionaryName>hbase-site</dictionaryName>\n            </configFile>\n            <configFile>\n              <type>env</type>\n              <fileName>hbase-env.sh</fileName>\n              <dictionaryName>hbase-env</dictionaryName>\n            </configFile>\n          </configFiles>\n        </component>\n      </components>\n\n      <osSpecifics>\n        <osSpecific>\n          <osFamily>any</osFamily>\n          <packages>\n            <package>\n              <name>hbase</name>\n            </package>\n          </packages>\n        </osSpecific>\n      </osSpecifics>\n\n      <commandScript>\n        <script>scripts/service_check.py<\/script>\n        <scriptType>PYTHON</scriptType>\n        <timeout>300</timeout>\n      </commandScript>\n      \n      <requiredServices>\n        <service>ZOOKEEPER</service>\n        <service>HDFS</service>\n      </requiredServices>\n\n      <configuration-dependencies>\n        <config-type>core-site</config-type>\n        <config-type>hbase-site</config-type>\n        <config-type>ranger-hbase-policymgr-ssl</config-type>\n        <config-type>ranger-hbase-security</config-type>\n      </configuration-dependencies>\n\n    </service>\n  </services>\n</metainfo>\n")))}c.isMDXComponent=!0}}]);