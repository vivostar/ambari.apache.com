"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[6122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=a(7462),o=(a(7294),a(3905));const n={},i="Troubleshooting",l={unversionedId:"ambari-design/metrics/troubleshooting",id:"ambari-design/metrics/troubleshooting",title:"Troubleshooting",description:"Cleaning up Ambari Metrics System Data",source:"@site/docs/ambari-design/metrics/troubleshooting.md",sourceDirName:"ambari-design/metrics",slug:"/ambari-design/metrics/troubleshooting",permalink:"/docs/next/ambari-design/metrics/troubleshooting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-design/metrics/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Operations",permalink:"/docs/next/ambari-design/metrics/operations"},next:{title:"Ambari Metrics API specification",permalink:"/docs/next/ambari-design/metrics/metrics-api-specification"}},s={},m=[{value:"Cleaning up Ambari Metrics System Data",id:"cleaning-up-ambari-metrics-system-data",level:2},{value:"Step-by-step guide",id:"step-by-step-guide",level:3},{value:"Moving Metrics Collector to a new host",id:"moving-metrics-collector-to-a-new-host",level:2},{value:"Troubleshooting Guide",id:"troubleshooting-guide",level:2},{value:"Known Issues",id:"known-issues",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"cleaning-up-ambari-metrics-system-data"},"Cleaning up Ambari Metrics System Data"),(0,o.kt)("p",null,"Following steps would help in cleaning up Ambari Metrics System data in a given cluster."),(0,o.kt)("p",null,"Important Note:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cleaning up the AMS data would remove all the historical AMS data available"),(0,o.kt)("li",{parentName:"ol"},"The hbase parameters mentioned above are specific to AMS and they are different from the Cluster Hbase parameters")),(0,o.kt)("h3",{id:"step-by-step-guide"},"Step-by-step guide"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using Ambari",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set AMS to maintenance"),(0,o.kt)("li",{parentName:"ul"},"Stop AMS from Ambari. Identify the following from the AMS Configs screen",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"'Metrics Service operation mode' (embedded or distributed)"),(0,o.kt)("li",{parentName:"ul"},"hbase.rootdir "),(0,o.kt)("li",{parentName:"ul"},"hbase.zookeeper.property.dataDir"))))),(0,o.kt)("li",{parentName:"ol"},"AMS data would be stored in 'hbase.rootdir' identified above. Backup and remove the AMS data.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the Metrics Service operation mode",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"is 'embedded', then the data is stored in OS files. Use regular OS commands to backup and remove the files in hbase.rootdir"),(0,o.kt)("li",{parentName:"ul"},"is 'distributed', then the data is stored in HDFS. Use 'hdfs dfs' commands to backup and remove the files in hbase.rootdir"))))),(0,o.kt)("li",{parentName:"ol"},"Remove the AMS zookeeper data by backing up and removing the contents of 'hbase.tmp.dir'/zookeeper"),(0,o.kt)("li",{parentName:"ol"},"Remove any Phoenix spool files from 'hbase.tmp.dir'/phoenix-spool folder\n5 Restart AMS using Ambari")),(0,o.kt)("h2",{id:"moving-metrics-collector-to-a-new-host"},"Moving Metrics Collector to a new host"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop AMS Service")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the following API call to Delete Metric Collector. (Replace server-host, cluster-name and host-name with the Metrics Collector host)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -u admin:admin  -H "X-Requested-By:ambari" -i -X DELETE http://<server-host>:8080/api/v1/clusters/<cluster-name>/hosts/<host-name>/host_components/METRICS_COLLECTOR\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Execute the following API call to add Metrics collector to a new host. (Replace, server-host, cluster-name, host-name)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -u admin:admin  -H "X-Requested-By:ambari" -i -X POST http://<server-host>:8080/api/v1/clusters/<cluster-name>/hosts/<host-name>/host_components/METRICS_COLLECTOR\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the Metrics Collector component from the Host page of the new host.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the AMS is in embedded mode, copy the AMS data from old node to new node."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For embedded mode (ams-site: timeline.metrics.service.operation.mode), copy over the hbase.rootdir and tmpdir to new host from the old collector host."),(0,o.kt)("li",{parentName:"ul"},"For distributed mode, since AMS HBase is writing to HDFS, no change will be necessary. "),(0,o.kt)("li",{parentName:"ul"},"Ensure that ams:hbase-site:hbase.rootdir and hbase.tmp.dir are pointing to the correct location in the new AMS node"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the Metrics Service.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The service daemons will be pointing to the old metrics collector host. Perform a rolling restart of slave components and a normal restart of Master components for them to pick up the new collector host. "))),(0,o.kt)("p",null,"Note : Restart of services is not needed post Ambari-2.5.0 since live collector information is maintained in the cluster zookeeper. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8291).Z,width:"2004",height:"1012"})),(0,o.kt)("h2",{id:"troubleshooting-guide"},"Troubleshooting Guide"),(0,o.kt)("p",null,"The following page documents common problems discovered with Ambari Metrics Service and provides a guide for things to look out for and already solved problems."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important facts to collect from the system"),":"),(0,o.kt)("p",null,"Problems with Metric Collector host"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Output of "rpm -qa | grep ambari" on the collector host. '),(0,o.kt)("li",{parentName:"ul"},'Total available System memory, output of : "free -g"'),(0,o.kt)("li",{parentName:"ul"},'Total available disk space and available partitions, output of : "df -h "'),(0,o.kt)("li",{parentName:"ul"},"Total number of hosts in the cluster"),(0,o.kt)("li",{parentName:"ul"},"Configs: /etc/ams-hbase/conf/hbase-env.sh, /etc/ams-hbase/conf/hbase-site.xml, /etc/ambari-metrics-collector/conf/ams-env.sh, /etc/ambari-metrics-collector/conf/ams-site.xml"),(0,o.kt)("li",{parentName:"ul"},"Collector logs: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/var/log/ambari-metrics-collector/ambari-metrics-collector.log, /var/log/ambari-metrics-collector/hbase-ams-master-<host>.log, /var/log/ambari-metrics-collector/hbase-ams-master-<host>.out\nNote: Additionally, If distributed mode is enabled, /var/log/ambari-metrics-collector/hbase-ams-zookeeper-<host>.log, /var/log/ambari-metrics-collector/hbase-ams-regionserver-<host>.log\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response to the following URLs -")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://<ams-host>:6188/ws/v1/timeline/metrics/metadata\nhttp://<ams-host>:6188/ws/v1/timeline/metrics/hosts \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The response will be JSON and can be attached as a file."),(0,o.kt)("li",{parentName:"ul"},"From AMS HBase Master UI - http://","<","METRICS_COLLECTOR_HOST",">",":61310")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* Region Count\n* StoreFile Count\n* JMX Snapshot - http://&lt;METRICS_COLLECTOR_HOST&gt;:61310/jmx\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problems with Metric Monitor host")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Monitor log file: /etc/ambari-metrics-monitor/ambari-metrics-monitor.out\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Check out ",(0,o.kt)("a",{parentName:"strong",href:"https://cwiki.apache.org/confluence/display/AMBARI/Configurations+-+Tuning"},"Configurations - Tuning")," for scale issue troubleshooting.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issue 1: AMS HBase process slow disk writes")),(0,o.kt)("p",null,"The symptoms and resolutions below address the ",(0,o.kt)("strong",{parentName:"p"},"embedded")," mode of AMS only."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Symptoms"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Behavior"),(0,o.kt)("th",{parentName:"tr",align:null},"How to detect"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"High CPU usage"),(0,o.kt)("td",{parentName:"tr",align:null},"HBase process on Collector host taking up close to 100% of every core")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HBase Log: Compaction times"),(0,o.kt)("td",{parentName:"tr",align:null},"grep hbase-ams-master-","<","host",">",".log")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HBase Log: ZK timeout"),(0,o.kt)("td",{parentName:"tr",align:null},"HBase crashes saying zookeeper session timed out. This happens because in embedded mode the zk session timeout is limited to max of 30 seconds (HBase issue: fix planned for 2.1.3).",(0,o.kt)("br",null),"The cause is again slow disk reads.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'Collector Log : "waiting for some tasks to finish"'),(0,o.kt)("td",{parentName:"tr",align:null},"ambari-metric-collector log shows messages where AsyncProcess writes are queued up")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Resolutions"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration Change"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ams-hbase-site :: hbase.rootdir"),(0,o.kt)("td",{parentName:"tr",align:null},"Change this path to a disk mount that is not heavily contended.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ams-hbase-ste :: hbase.tmp.dir"),(0,o.kt)("td",{parentName:"tr",align:null},"Change this path to a location different from hbase.rootdir")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ams-hbase-env :: hbase_master_heapsize",(0,o.kt)("br",null),"ams-hbase-site :: hbase.hregion.memstore.flush.size"),(0,o.kt)("td",{parentName:"tr",align:null},"Bump this value up so more data is held in memory to address I/O speeds.",(0,o.kt)("br",null),"If heap size is increased and resident memory usage does not go up, this parameter can be changed to address how much data can be stored in a memstore per Region. Default is set to 128 MB. The size is in bytes.",(0,o.kt)("br",null),"Be careful with modifying this value, generally limit the setting between 64 MB (small heap with fast disk write), to 512 MB (large heap > 8 GB, and average write speed), since more data held in memory means longer time to write it to disk during a Flush operation.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Issue 2: Ambari Metrics take a long time to load")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Symptoms"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Behavior"),(0,o.kt)("th",{parentName:"tr",align:null},"How to detect"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graphs: Loading time too long",(0,o.kt)("br",null),"Graphs: No data available"),(0,o.kt)("td",{parentName:"tr",align:null},"Check out service pages / host pages for metric graphs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Socket read timeouts"),(0,o.kt)("td",{parentName:"tr",align:null},"ambari-server.log shows: Error message saying socket timeout for metrics")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ambari UI slowing down"),(0,o.kt)("td",{parentName:"tr",align:null},"Host page loading time is high, heatmaps do not show data",(0,o.kt)("br",null),"Dashboard loading time is too high",(0,o.kt)("br",null),"Multiple sessions result in slowness")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Resolutions"),":"),(0,o.kt)("p",null,"Upgrade to 2.1.2+ is highly recommended."),(0,o.kt)("p",null,"Following is a list of fixes in 2.1.2 release that should greatly help to alleviate the slow loading and timeouts:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/AMBARI-12654"},"https://issues.apache.org/jira/browse/AMBARI-12654")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/AMBARI-12983"},"https://issues.apache.org/jira/browse/AMBARI-12983")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/AMBARI-13108"},"https://issues.apache.org/jira/browse/AMBARI-13108")),(0,o.kt)("h2",{id:"known-issues"},(0,o.kt)("a",{parentName:"h2",href:"https://cwiki.apache.org/confluence/display/AMBARI/Known+Issues"},"Known Issues")))}c.isMDXComponent=!0},8291:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restart-datanode-9d845a689cad8b033dfd594bf15d0a36.png"}}]);