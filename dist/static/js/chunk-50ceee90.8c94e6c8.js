(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ceee90"],{2356:function(t,e,a){},"56da":function(t,e,a){"use strict";var n=a("f6c1"),o=a.n(n);o.a},"71a8":function(t,e,a){"use strict";var n=a("904d"),o=a.n(n);o.a},"904d":function(t,e,a){},ac37:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3,offset:1}},[a("el-select",{attrs:{filterable:"",placeholder:"选择内核版本"},on:{change:t.ver_change},model:{value:t.config_graph.ver,callback:function(e){t.$set(t.config_graph,"ver",e)},expression:"config_graph.ver"}},t._l(t.ver_list,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-select",{attrs:{placeholder:"编译环境"},on:{change:t.plat_change},model:{value:t.config_graph.plat,callback:function(e){t.$set(t.config_graph,"plat",e)},expression:"config_graph.plat"}},t._l(t.plat_list,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入源路径"},on:{change:function(e){return t.path_change("sou")}},model:{value:t.path1,callback:function(e){t.path1=e},expression:"path1"}},t._l(t.path_list,(function(t){return a("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入目标路径"},on:{change:function(e){return t.path_change("tar")}},model:{value:t.path2,callback:function(e){t.path2=e},expression:"path2"}},t._l(t.path_list,(function(t){return a("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-checkbox",{attrs:{border:""},on:{change:t.per_change},model:{value:t.config_graph.per,callback:function(e){t.$set(t.config_graph,"per",e)},expression:"config_graph.per"}},[t._v("内部调用")])],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-select",{staticStyle:{width:"120px"},on:{change:t.layout_change},model:{value:t.G_layout,callback:function(e){t.G_layout=e},expression:"G_layout"}},t._l(t.G_layout_options,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{offset:1}},[a("span",[t._v(t._s(t.web_url()))])])],1),t._v(" "),a("grid-layout",{attrs:{layout:t.web_layout,"col-num":12,"row-height":100,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0},on:{"update:layout":function(e){t.web_layout=e}}},[t.show_graph()?a("grid-item",{attrs:{x:t.web_layout[0].x,y:t.web_layout[0].y,w:t.web_layout[0].w,"min-w":6,"max-w":12,h:t.web_layout[0].h,"min-h":5,"max-h":6,i:t.web_layout[0].i,"is-draggable":!1},on:{resized:t.resizedGraphEvent}},[a("Graph",{attrs:{layout:t.G_layout,config:t.config_graph,size:t.size_graph,ex_data:t.web_data}})],1):t._e(),t._v(" "),a("grid-item",{directives:[{name:"show",rawName:"v-show",value:t.show_funlist(),expression:"show_funlist()"}],attrs:{x:t.web_layout[1].x,y:t.web_layout[1].y,w:t.web_layout[1].w,"min-w":3,"max-w":12,h:t.web_layout[1].h,"min-h":5,"max-h":5,i:t.web_layout[1].i}},[a("FunList",{attrs:{config:t.config_funlist}})],1)],1)],1)},o=[],r=(a("28a5"),a("6b54"),a("20d6"),a("ac6a"),a("456d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},t._l(t.sel,(function(e,n){return a("el-col",{key:n,attrs:{span:3,offset:1}},[a("el-switch",{attrs:{"active-text":e.label},on:{change:function(e){return t.select_edge()}},model:{value:t.sel[n].value,callback:function(e){t.$set(t.sel[n],"value",e)},expression:"sel[key].value"}})],1)})),1),t._v(" "),a("ContextMenu"),t._v(" "),a("div",{ref:"graphChart",staticClass:"graphChart",staticStyle:{height:"100%",width:"100%"},attrs:{id:"graphChart"}}),t._v(" "),a("el-dialog",{attrs:{title:"分享链接",modal:!1,visible:t.share_dialog,"before-close":t.handleClose},on:{"update:visible":function(e){t.share_dialog=e}}},[a("span",[t._v(t._s(t.share_url))]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.share_dialog=!1}}},[t._v("确 定")])],1)])],1)}),s=[],i=(a("ac4d"),a("8a81"),a("07cd")),l=a.n(i),u=a("1aef"),c=a.n(u),p=a("bc3a"),h=a.n(p),g=a("5c96"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"context-menu",style:t.contextMenuStyle},t._l(t.contextMenuList,(function(e,n){return a("li",{key:n,on:{click:function(a){return t.doChick(e)}}},[t._v(t._s(e.label))])})),0)])},f=[],_={name:"ContextMenu",data:function(){return{isShow:!1,type:"",options:null,contextMenuList:[],contextMenuStyle:{}}},created:function(){var t=this;t.$EventBus.bus.$on("graph/contextmenu/open",t.doShow),t.$EventBus.bus.$on("graph/contextmenu/close",t.doHide)},destroyed:function(){var t=this;t.$EventBus.bus.$off("graph/contextmenu/open"),t.$EventBus.bus.$off("graph/contextmenu/close")},methods:{handleContextMenuList:function(t){var e="";console.log(t),e=t?t.getType():"canvas";var a=[{value:"Code",label:"显示源码"},{value:"SetSou",label:"设为源路径"},{value:"SetTar",label:"设为目标路径"},{value:"Expand",label:"展开下一级"},{value:"Delete",label:"删除节点"}],n=[{value:"FunList",label:"显示函数列表"},{value:"Graph",label:"切换调用图"},{value:"Inside",label:"切换内部调用图"}],o=[{value:"Post",label:"分享此图"},{value:"Back",label:"后退"}];this.contextMenuList="node"===e?a:"edge"===e?n:o},handleContextMenuStyle:function(){var t=this,e={};if(!t.options)return e;e["left"]="".concat(t.options.canvasX,"px"),e["top"]="".concat(t.options.canvasY+20,"px"),t.contextMenuStyle=e},doChick:function(t){var e=this;console.log(t);var a={},n=e.options.item;switch(t.value){case"Code":e.$EventBus.bus.$emit("code/show",n.getModel().id,0);break;case"SetSou":a.sou=n.getModel().id;break;case"SetTar":a.tar=n.getModel().id;break;case"Delete":e.$EventBus.bus.$emit("graph/delete",n);break;case"Expand":e.$EventBus.bus.$emit("graph/expand",n);break;case"FunList":e.$EventBus.bus.$emit("funlist/show",n.getModel());break;case"Inside":e.$EventBus.bus.$emit("graph/options",{per:0});case"Graph":a.sou=n.getModel().source,a.tar=n.getModel().target;break;case"Back":e.$EventBus.bus.$emit("graph/back",n);break;case"Post":e.$EventBus.bus.$emit("graph/post");break}Object.keys(a).length>0&&e.$EventBus.bus.$emit("graph/path/change",a),e.doHide()},doShow:function(t){var e=this;e.options=t,console.log(e.options),e.handleContextMenuList(e.options.item),e.handleContextMenuStyle(),e.isShow=!0},doHide:function(){var t=this;t.options=null,t.contextMenuList=[],t.isShow=!1}}},v=_,b=(a("56da"),a("2877")),y=Object(b["a"])(v,d,f,!1,null,"57a3b5ac",null),m=y.exports,w=a("027f"),x=["#BDD2FD","#BDEFDB","#C2C8D5","#FBE5A2","#F6C3B7","#B6E3F5","#D3C6EA","#FFD8B8","#AAD8D8","#FFD6E7"],k=["#5B8FF9","#5AD8A6","#5D7092","#F6BD16","#E8684A","#6DC8EC","#9270CA","#FF9D4D","#269A99","#FF99C3"];c()("\n  .g6-tooltip {\n    border: 1px solid #e2e2e2;\n    border-radius: 4px;\n    font-size: 12px;\n    color: #545454;\n    background-color: rgba(255, 255, 255, 0.9);\n    padding: 10px 8px;\n    box-shadow: rgb(174, 174, 174) 0px 0px 10px;\n  }");var $={name:"Graph",components:{ContextMenu:m},props:{id:{type:String,default:"chart"},layout:{type:String,default:"random"},size:{type:Object,default:function(){return{w:1e3,h:500}}},config:{type:Object,default:function(){return{var:"",sou:"",tar:"",per:1}}},ex_data:{type:Object,default:function(){return{}}}},data:function(){return{url:"/api/v1/graphs",graph:null,minimap:null,graph_id:"",options:{per:1,expanded:""},graph_config:{},backup_data:{id:"",layout:"",data:{},config:{}},data:{nodes:[],edges:[],groups:[]},graph_w:1e3,graph_h:500,sel:{s_to_t:{value:!0,label:"sou->tar"},t_to_s:{value:!0,label:"tar->sou"},s_to_s:{value:!0,label:"sou->sou"},t_to_t:{value:!0,label:"tar->tar"},o_to:{value:!0,label:"other->"},to_o:{value:!0,label:"->other"}},contextMenuStyle:{},share_dialog:!1,share_url:""}},watch:{size:{handler:function(t,e){var a=this;a.graph_h=t.h,a.graph_w=t.w,a.graph.changeSize(a.graph_w,a.graph_h),a.graph.fitView()},deep:!0},config:{handler:function(t,e){var a=this;if(console.log("graph config change",t),"server"===t.data_source){var n=1;a.options.expanded="",a.backup(),a.graph_config=JSON.parse(JSON.stringify(t)),t.per&&(n=0),a.set_options({per:n}),a.get_data("new")}},deep:!0},layout:function(t){this.updateLayout(t)}},created:function(){var t=this;t.$EventBus.bus.$on("graph/delete",t.delete_node),t.$EventBus.bus.$on("graph/expand",t.expand_node),t.$EventBus.bus.$on("graph/layout",t.updateLayout),t.$EventBus.bus.$on("graph/options",t.set_options),t.$EventBus.bus.$on("graph/back",t.back_graph),t.$EventBus.bus.$on("graph/post",t.save_graph),t.$route.query.hasOwnProperty("sel_f")&&t.sel_load(t.$route.query.sel_f)},destroyed:function(){var t=this;t.$EventBus.bus.$off("graph/delete"),t.$EventBus.bus.$off("graph/expand"),t.$EventBus.bus.$off("graph/layout"),t.$EventBus.bus.$off("graph/option"),t.$EventBus.bus.$off("graph/back"),t.$EventBus.bus.$off("graph/post")},mounted:function(){var t=this;t.graph_w=t.$refs.graphChart.offsetWidth,console.log(t.config.per,t.graph_config.per),t.graph_config=JSON.parse(JSON.stringify(t.config)),console.log(t.config.per,t.graph_config.per),t.set_options({per:t.config.per?0:1}),t.initChart(),console.log("mounted",t.config,t.graph_config),"external"===t.config.data_source?t.get_data("external"):(t.options.expanded="",t.get_data("new"))},methods:{initChart:function(){var t=this,e=this;e.minimap=new w({size:[200,100],className:"minimap",type:"keyShape"}),e.graph=new l.a.Graph({container:"graphChart",width:e.graph_w,height:e.graph_h,fitView:!0,autoPaint:!0,animate:!1,minZoom:.5,maxZoom:3,plugins:[e.minimap],modes:{default:["drag-canvas","zoom-canvas","drag-node",{type:"tooltip",formatText:function(t){return t.id}},{type:"edge-tooltip",formatText:function(t){return"调用次数："+t.sourceWeight+"<br/>来源："+t.source+"<br/>去向："+t.target}}]},layout:{type:e.layout},defaultNode:{shape:"ellipse",size:[30,15],color:"steelblue",labelCfg:{style:{fill:"#787878",fontSize:12}}},defaultEdge:{shape:"quadratic",size:2},nodeStateStyles:{default:{lineWidth:1,fill:"steelblue"},highlight:{opacity:1},dark:{opacity:.2}},edgeStateStyles:{default:{opacity:.2,lineAppendWidth:3},highlight:{opacity:1}}}),e.graph.on("node:mouseenter",(function(t){var a=t.item;e.graph.setAutoPaint(!1),e.graph.getNodes().forEach((function(t){e.graph.clearItemStates(t),e.graph.setItemState(t,"dark",!0)})),e.graph.setItemState(a,"dark",!1),e.graph.setItemState(a,"highlight",!0),e.graph.getEdges().forEach((function(t){t.getSource()===a?(e.graph.setItemState(t.getTarget(),"dark",!1),e.graph.setItemState(t.getTarget(),"highlight",!0),e.graph.setItemState(t,"highlight",!0),t.toFront()):t.getTarget()===a?(e.graph.setItemState(t.getSource(),"dark",!1),e.graph.setItemState(t.getSource(),"highlight",!0),e.graph.setItemState(t,"highlight",!0),t.toFront()):e.graph.setItemState(t,"highlight",!1)})),e.graph.paint(),e.graph.setAutoPaint(!0)})),e.graph.on("edge:mouseenter",(function(t){var a=t.item;e.graph.setAutoPaint(!1),e.graph.getNodes().forEach((function(t){e.graph.clearItemStates(t),e.graph.setItemState(t,"dark",!0)})),e.graph.setItemState(a,"highlight",!0),e.graph.setItemState(a.getTarget(),"dark",!1),e.graph.setItemState(a.getTarget(),"highlight",!0),e.graph.setItemState(a.getSource(),"dark",!1),e.graph.setItemState(a.getSource(),"highlight",!0),e.graph.paint(),e.graph.setAutoPaint(!0)})),e.graph.on("node:mouseleave",e.clearAllStats),e.graph.on("edge:mouseleave",e.clearAllStats),e.graph.on("node:contextmenu",(function(e){console.log(e.item.getBBox()),t.$EventBus.bus.$emit("graph/contextmenu/open",e)})),e.graph.on("edge:contextmenu",(function(e){t.$EventBus.bus.$emit("graph/contextmenu/open",e)})),e.graph.on("canvas:contextmenu",(function(e){t.$EventBus.bus.$emit("graph/contextmenu/open",e)})),e.graph.on("canvas:click",(function(){e.clearAllStats(),e.$EventBus.bus.$emit("graph/contextmenu/close")}))},clearAllStats:function(){var t=this;t.graph.setAutoPaint(!1),t.graph.getNodes().forEach((function(e){t.graph.clearItemStates(e)})),t.graph.getEdges().forEach((function(e){t.graph.clearItemStates(e)})),t.graph.paint(),t.graph.setAutoPaint(!0)},set_options:function(t){console.log("set",t);for(var e=Object.keys(t),a=0,n=e;a<n.length;a++){var o=n[a];this.options[o]=t[o]}},check_status:function(){var t=this,e=0;if(""!==t.options.expanded&&(e=t.options.expanded.split(",").length),t.options.hasOwnProperty("expand")&&t.options.expand.lastIndexOf(".")>0&&t.options.expand.lastIndexOf(".")<t.options.expand.length-2){this.$message.error("错误 函数节点不可展开！");var a=t.options.expanded;return t.options={expanded:a},!1}if(e>=3){this.$message.error("错误 展开节点达到上限(3)！");var n=t.options.expanded;return t.options={expanded:n},!1}return!0},get_data:function(t){var e=this;if(e.check_status()){console.log("get_data",e.graph_config);var a=g["Loading"].service({target:"#graphChart"}),n={version:e.graph_config.ver,platform:e.graph_config.plat,source:e.graph_config.sou,target:e.graph_config.tar};for(var o in e.options)""!==e.options[o]&&(n[o]=e.options[o]);if("external"===t){var r=JSON.parse(JSON.stringify(e.handle_data(e.ex_data)));e.graph_id=r.id,e.data.nodes=r.nodes,e.data.edges=r.edges,e.graph.setAutoPaint(!1),e.graph.data({nodes:e.data.nodes,edges:e.data.edges}),e.graph.render();var s=!0,i=!1,l=void 0;try{for(var u,c=e.ex_data.nodes[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var p=u.value;e.graph.updateItem(p.id,{x:p.x,y:p.y})}}catch(d){i=!0,l=d}finally{try{s||null==c.return||c.return()}finally{if(i)throw l}}e.sel_load(r.sel),e.graph.paint(),e.graph.setAutoPaint(!0),e.graph.fitView(),a.close()}else h.a.get(e.url,{params:n,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then((function(n){if(n.data.nodes.length>0){e.graph_id=n.data.id;var o=e.handle_data(n.data),r=[],s=!0,i=!1,l=void 0;try{for(var u,c=e.options.expanded.split(",")[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var p=u.value;""!==p&&r.push(p)}}catch(d){i=!0,l=d}finally{try{s||null==c.return||c.return()}finally{if(i)throw l}}"new"===t&&(e.data=o),"add"===t&&(e.backup(),e.data.nodes=e.data.nodes.concat(o.nodes),e.data.edges=e.data.edges.concat(o.edges),r.push(e.options.expand)),e.graph.data({nodes:e.data.nodes,edges:e.data.edges}),e.options={expanded:r.join()},e.graph.render(),e.graph.fitView(),e.select_edge()}a.close()})).catch((function(t){a.close(),this.$message.error(t);var n=e.options.expanded;e.options={expanded:n},console.log(t)}))}},handle_data:function(t){return t.nodes.map((function(t){t.label=t.id,t.style||(t.style={}),t.style.fill=x[t.type%x.length],t.style.stroke=k[t.type%k.length]})),t.edges.map((function(t){t.style||(t.style={}),t.style.stroke=k[t.type%k.length]})),t},select_edge:function(){var t=this;t.graph.setAutoPaint(!1),t.graph.getEdges().forEach((function(e){var a=!0,n=e.getSource().getModel().type,o=e.getTarget().getModel().type;2===n&&2===o?a=t.sel["o_to"].value&&t.sel["to_o"].value:2===n?a=t.sel["o_to"].value:2===o?a=t.sel["to_o"].value:0===n&&1===o?a=t.sel["s_to_t"].value:1===n&&0===o?a=t.sel["t_to_s"].value:0===n&&0===o?a=t.sel["s_to_s"].value:1===n&&1===o&&(a=t.sel["t_to_t"].value),a?t.graph.showItem(e):t.graph.hideItem(e)})),t.$EventBus.bus.$emit("graph/sel/to_url",t.sel_save()),t.graph.paint(),t.graph.setAutoPaint(!0)},sel_save:function(){var t=this,e=[];for(var a in t.sel)t.sel[a].value||e.push(a);return e.toString()},sel_load:function(t){var e=this;if(t.length>0){var a=t.toString().split(",");if(a.length>0){var n=!0,o=!1,r=void 0;try{for(var s,i=a[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var l=s.value;e.sel[l].value=!1}}catch(u){o=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}e.select_edge()}}},backup:function(){var t=this;t.backup_data.id=t.graph_id,t.backup_data.layout=t.layout,t.backup_data.config=t.graph_config,t.backup_data.sel=t.sel_save(),t.backup_data.expanded=t.options.expanded;var e=t.graph.save();t.backup_data.data={nodes:[],edges:[]};var a=!0,n=!1,o=void 0;try{for(var r,s=e.nodes[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var i=r.value,l={};l.id=i.id,l.type=i.type,l.x=Math.floor(i.x),l.y=Math.floor(i.y),t.backup_data.data.nodes.push(l)}}catch(_){n=!0,o=_}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}var u=!0,c=!1,p=void 0;try{for(var h,g=e.edges[Symbol.iterator]();!(u=(h=g.next()).done);u=!0){var d=h.value,f={};f.source=d.source,f.target=d.target,f.sourceWeight=d.sourceWeight,f.type=d.type,t.backup_data.data.edges.push(f)}}catch(_){c=!0,p=_}finally{try{u||null==g.return||g.return()}finally{if(c)throw p}}console.log(t.backup_data)},back_graph:function(t){var e=this;if(Object.keys(e.backup_data.data).length>0){e.graph.setAutoPaint(!1),e.graph_id=e.backup_data.id,e.graph_config=e.backup_data.config,e.options.expanded=e.backup_data.expanded,e.data=JSON.parse(JSON.stringify(e.handle_data(e.backup_data.data))),e.graph.setAutoPaint(!1),e.graph.data({nodes:e.data.nodes,edges:e.data.edges}),e.graph.render();var a=!0,n=!1,o=void 0;try{for(var r,s=e.backup_data.data.nodes[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var i=r.value;e.graph.updateItem(i.id,{x:i.x,y:i.y})}}catch(l){n=!0,o=l}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}e.sel_load(e.backup_data.sel),e.graph.paint(),e.graph.fitView(),e.graph.setAutoPaint(!0),console.log("back_graph",e.graph_config),e.$EventBus.bus.$emit("graph/path/change",{ver:e.backup_data.config.ver,plat:e.backup_data.config.plat,sou:e.backup_data.config.sou,tar:e.backup_data.config.tar,per:e.backup_data.config.per,data_source:"backup"})}},save_graph:function(){var t=this,e=t.graph.save(),a={sel:t.sel_save(),nodes:[],edges:[]},n=!0,o=!1,r=void 0;try{for(var s,i=e.nodes[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var l=s.value,u={};u.id=l.id,u.type=l.type,u.x=Math.floor(l.x),u.y=Math.floor(l.y),a.nodes.push(u)}}catch(b){o=!0,r=b}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}var c=!0,p=!1,g=void 0;try{for(var d,f=e.edges[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){var _=d.value,v={};v.source=_.source,v.target=_.target,v.sourceWeight=_.sourceWeight,v.type=_.type,a.edges.push(v)}}catch(b){p=!0,g=b}finally{try{c||null==f.return||f.return()}finally{if(p)throw g}}h.a.post(t.url,{config:{version:t.graph_config.ver,platform:t.graph_config.plat,source:t.graph_config.sou,target:t.graph_config.tar,per:t.graph_config.per},data:a},{headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){t.share_url=window.location.href.toString().split("#")[0]+"#/charts/graph/"+e.data.share_key,t.share_dialog=!0})).catch((function(t){console.log(t)}))},delete_node:function(t){var e=this;e.graph.removeItem(t),e.clearAllStats()},expand_node:function(t){var e=this,a=t.getModel().id,n=[],o=e.data.nodes.findIndex((function(t){return t.id===a}));e.data.nodes.splice(o,1);var r=!0,s=!1,i=void 0;try{for(var l,u=e.data.edges[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var c=l.value;c.source!==a&&c.target!==a&&n.push(c)}}catch(p){s=!0,i=p}finally{try{r||null==u.return||u.return()}finally{if(s)throw i}}e.data.edges=n,e.set_options({id:e.graph_id,expand:a}),e.get_data("add")},updateLayout:function(t){var e=this;e.graph.updateLayout({width:1200,height:600,type:t,preventOverlap:!0,nodeSize:50,linkDistance:50}),e.graph.fitView()},share_copy:function(t){this.$alert(t,"分享链接",{confirmButtonText:"确定"})},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))}}},S=$,E=(a("ca61"),Object(b["a"])(S,r,s,!1,null,null,null)),B=E.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data.list,"default-sort":{prop:"s_fun",order:"descending"},"max-height":"500"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"s_fun",label:"源函数",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"s_file",label:"所在文件"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row,"s_file",0)}}},[t._v("\n        "+t._s(e.row.s_file)+"\n      ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"s_line",label:"行号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row,"s_line",e.row.s_line)}}},[t._v("\n        "+t._s(e.row.s_line)+"\n      ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"num",label:"调用次数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"call_line",label:"调用行号"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.call_line,(function(n,o){return a("el-button",{key:o,attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row,"call",e.row.call_line)}}},[t._v("\n        "+t._s(n)+"\n      ")])}))}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"t_fun",label:"被调函数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"t_file",label:"所在文件"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row,"t_file",0)}}},[t._v("\n        "+t._s(e.row.t_file)+"\n      ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"t_line",label:"行号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row,"t_line",e.row.t_line)}}},[t._v("\n        "+t._s(e.row.t_line)+"\n      ")])]}}])})],1)},I=[],M={name:"FunList",props:{id:{type:String,default:"chart"},config:{type:Object,default:function(){return{var:"",plat:"",sou:"",tar:""}}}},data:function(){return{url:"/api/v1/functions",table_id:"",options:{},height:500,loading:!1,data:{list:[]}}},watch:{config:{handler:function(t){this.getdata()},deep:!0}},mounted:function(){this.getdata()},methods:{getdata:function(){var t=this;if(""!==t.config.ver||""!==t.config.sou||""!==t.config.tar){t.loading=!0;var e={version:t.config.ver,platform:t.config.plat,source:t.config.sou,target:t.config.tar};for(var a in t.options)e[a]=t.options[a];h.a.get(t.url,{params:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then((function(e){e.data.list.length>0&&(t.table_id=e.data.id,t.data=e.data,t.options={},t.loading=!1)})).catch((function(t){console.log(t)}))}},handleClick:function(t,e,a){var n=this,o="",r=a;switch(e){case"call":case"s_line":case"s_file":o=t.s_file;break;case"t_line":case"t_file":o=t.t_file;break}n.$EventBus.bus.$emit("code/show","/"+o,r)}}},O=M,A=Object(b["a"])(O,C,I,!1,null,"7237a032",null),z=A.exports,F=a("7be8"),P=a.n(F),D={name:"GraphChart",components:{GridLayout:P.a.GridLayout,GridItem:P.a.GridItem,Graph:B,FunList:z},data:function(){return{url:"/api/v1",ver_list:[],plat_list:[],path1:"",path2:"",web_data:{},config_graph:{ver:"",per:!1,plat:"",sou:"",tar:"",data_source:"server"},size_graph:{w:1e3,h:500},g_sel_f:"",config_funlist:{ver:"",plat:"",sou:"",tar:""},path_list:[],web_layout:[{x:0,y:0,w:12,h:5,i:"0"},{x:0,y:1,w:12,h:5,i:"1"}],G_layout:"random",G_layout_options:["random","dagre","force","circular","concentric","grid"]}},created:function(){var t=this;t.$EventBus.bus.$on("graph/sel/to_url",t.set_g_sel),t.$EventBus.bus.$on("graph/path/change",t.setPath),t.$EventBus.bus.$on("funlist/show",t.funlist_conf),t.$EventBus.bus.$on("code/show",t.show_code),t.get_ver_list(),t.$route.params.hasOwnProperty("id")&&t.get_data(this.$route.params.id),Object.keys(t.$route.query).length>0&&t.set_by_url(t.$route.query)},destroyed:function(){var t=this;t.$EventBus.bus.$off("graph/path/change"),t.$EventBus.bus.$off("funlist/show"),t.$EventBus.bus.$off("code/show")},mounted:function(){},methods:{ver_change:function(t){var e=this;console.log("ver ",t,e.ver_list.findIndex((function(e){return e.value===t}))),e.plat_list=e.ver_list[e.ver_list.findIndex((function(e){return e.value===t}))].platform,""===e.config_graph.plat&&(e.config_graph.plat=e.plat_list[0].value),e.get_path_list(),e.config_graph.data_source="server"},plat_change:function(){var t=this;t.get_path_list(),t.config_graph.data_source="server"},per_change:function(){var t=this;t.config_graph.data_source="server"},layout_change:function(){},setPath:function(t){var e=this;if(!t.disable){if(t.data_source)return e.config_graph.data_source=t.data_source,e.config_graph.ver=t.ver,e.config_graph.plat=t.plat,e.config_graph.per=t.per,e.path1=t.sou,e.path2=t.tar,e.config_graph.sou=t.sou,e.config_graph.tar=t.tar,void e.get_path_list();t.sou&&(e.path1=t.sou),t.tar&&(e.path2=t.tar),e.path_change("both")}},path_change:function(t){var e=this,a={ver:e.config_graph.ver,plat:e.config_graph.plat,sou:e.config_graph.sou,tar:e.config_graph.tar,per:e.config_graph.per,data_source:"server"};switch(t){case"sou":a.sou=this.path1;break;case"tar":a.tar=this.path2;break;case"both":a.sou=this.path1,a.tar=this.path2;break}this.config_graph=a},show_graph:function(){return""!==this.config_graph.ver&&""!==this.config_graph.sou&&""!==this.config_graph.tar},show_funlist:function(){return""!==this.config_funlist.ver&&""!==this.config_funlist.sou&&""!==this.config_funlist.tar},funlist_conf:function(t){var e=this;e.config_funlist={ver:e.config_graph.ver,plat:e.config_graph.plat,sou:t.source,tar:t.target}},show_code:function(t,e){var a=this,n=a.ver_list[a.ver_list.findIndex((function(t){return t.value===a.config_graph.ver}))],o="https://elixir.bootlin.com/linux/v"+n.label,r=t.indexOf(".");r>0&&r<t.length-3?o+="/ident"+t.slice(t.lastIndexOf("/")):o+=e>0?"/source"+t+"#L"+e.toString():"/source"+t,window.open(o)},get_ver_list:function(){var t=this,e=t.url+"/options";h.a.get(e,{headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then((function(e){e.data.length>0&&(t.ver_list=e.data,""!==t.config_graph.ver&&(t.plat_list=t.ver_list[t.ver_list.findIndex((function(e){return e.value===t.config_graph.ver}))].platform))})).catch((function(t){console.log(t)}))},get_path_list:function(){var t=this,e=t.url+"/options/"+t.config_graph.ver;h.a.get(e,{params:{platform:t.config_graph.plat},headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then((function(e){e.data.length>0&&(t.path_list=e.data.map((function(t){return{value:t}}))),t.path_list.unshift({value:"/"})})).catch((function(t){console.log(t)}))},resizedGraphEvent:function(t,e,a,n,o){var r={h:Math.floor(n-40),w:Math.floor(o)};this.size_graph=r},get_data:function(t){var e=this,a=e.url+"/graphs/"+t;h.a.get(a,{headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}}).then((function(t){Object.keys(t.data).length>0&&e.set_web_data(t.data)})).catch((function(t){console.log(t)}))},set_g_sel:function(t){var e=this;e.g_sel_f=t},set_web_data:function(t){var e=this;e.web_data=t.data,e.web_data["id"]=t.id;var a={};a.ver=t.config.version,a.plat=t.config.platform,a.per=t.config.per,a.sou=t.config.source,a.tar=t.config.target,a.data_source="external",e.config_graph=a,e.path1=a.sou,e.path2=a.tar,e.plat_list=e.ver_list[e.ver_list.findIndex((function(t){return t.value===a.ver}))].platform,e.get_path_list()},set_by_url:function(t){var e=this;t.ver&&(e.config_graph.ver=t.ver),t.plat&&(e.config_graph.plat=t.plat),t.per&&("true"===t.per?e.config_graph.per=!0:e.config_graph.per=!1),t.ver&&t.plat&&e.get_path_list(),t.sou&&(e.path1=e.config_graph.sou=t.sou),t.tar&&(e.path2=e.config_graph.tar=t.tar),t.table_sou&&t.table_tar&&e.funlist_conf({source:t.table_sou,target:t.table_tar})},web_url:function(){var t=this,e={},a=window.location.href.toString().split("?")[0];for(var n in t.$route.params.hasOwnProperty("pathMatch")&&(a=a.slice(0,a.lastIndexOf("/"))),a+="?",""!==t.config_graph.ver&&(e["ver"]=t.config_graph.ver),""!==t.config_graph.plat&&(e["plat"]=t.config_graph.plat),""!==t.config_graph.per&&(e["per"]=t.config_graph.per),""!==t.config_graph.sou&&(e["sou"]=t.config_graph.sou),""!==t.config_graph.tar&&(e["tar"]=t.config_graph.tar),""!==t.g_sel_f&&(e["sel_f"]=t.g_sel_f),""!==t.config_funlist.sou&&(e["table_sou"]=t.config_funlist.sou),""!==t.config_funlist.tar&&(e["table_tar"]=t.config_funlist.tar),e)a+=n+"="+e[n]+"&";return a.slice(0,-1)}}},G=D,L=(a("71a8"),Object(b["a"])(G,n,o,!1,null,"0b051f50",null));e["default"]=L.exports},ca61:function(t,e,a){"use strict";var n=a("2356"),o=a.n(n);o.a},f6c1:function(t,e,a){}}]);