(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"/zyf":function(e,t,a){"use strict";var n={name:"page",props:{pageSizeArray:Array,size:Number,pageTotal:Number,current:Number,nameShow:String},data:function(){return{pageCurrent:this.current}},methods:{handleSizeChange:function(e){this.$emit("handleSizeChange",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)}},watch:{current:function(e){this.pageCurrent=e}}},r=(a("t2r+"),a("KHd+")),i=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"事件详情"===e.nameShow?"pageClass":"",staticStyle:{height:"20px","padding-top":"10px"}},[a("span",{staticStyle:{display:"inline-block","font-size":"13px","min-width":"35.5px",height:"28px","line-height":"30px","vertical-align":"top","box-sizing":"border-box",float:"right"}},[e._v("共"+e._s(e.pageTotal)+"条")]),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next","page-size":e.size,"current-page":e.pageCurrent,total:e.pageTotal},on:{"update:currentPage":function(t){e.pageCurrent=t},"update:current-page":function(t){e.pageCurrent=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)}),[],!1,null,"40b774d6",null);t.a=i.exports},TzQq:function(e,t,a){},o7ki:function(e,t,a){"use strict";a.r(t);var n=a("/zyf"),r={name:"formElastic",props:{isAdd:Boolean},data:function(){return{form:{id:"",host:"",username:"",password:"",enable:!0},dialogVisible:!1,nodeData:[],serviceData:[],codeData:[],rules:{username:[{required:!0,message:"请输入名称",trigger:"blur"}],host:[{required:!0,message:"请输入主机",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},created:function(){},methods:{handleClose:function(){this.dialogVisible=!1,this.form={}},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.isAdd?t.$request.fetchPostSender(t.form).then((function(){t.$message({message:"添加成功!!!",type:"success"}),t.dialogVisible=!1,t.form={},t.$emit("getSender")})).catch((function(e){t.$message.error(e.data)})):t.$request.fetchPutSender(t.form).then((function(){t.$message({message:"修改成功!!!",type:"success"}),t.dialogVisible=!1,t.form={},t.$emit("getSender")})).catch((function(e){t.$message.error(e.data)})))}))}}},i=a("KHd+"),s=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"before-close":e.handleClose,"el-dialog":"","close-on-click-modal":!1,visible:e.dialogVisible,title:e.isAdd?"新增管理员":"编辑管理员","append-to-body":"",width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"90px"}},[a("el-form-item",{attrs:{label:"主机",prop:"host"}},[a("el-input",{staticStyle:{width:"100%"},model:{value:e.form.host,callback:function(t){e.$set(e.form,"host",t)},expression:"form.host"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户",prop:"username"}},[a("el-input",{staticStyle:{width:"100%"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{staticStyle:{width:"100%"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选中",prop:"enable"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v(e._s(e.isAdd?"创建":"修改"))])],1)],1)}),[],!1,null,"fa7088cc",null).exports,o={name:"index",components:{Page:n.a,ELasticForm:s},data:function(){return{senderData:[],delLoading:!1,pageSizeArray:[12,24,36,48],elsticPage:{current:1,pageSize:12,total:0},isAdd:!0}},mounted:function(){this.getSender()},methods:{dateTime:function(e){return a("wd/R")(e).format("YYYY-MM-DD HH:mm:ss")},handleSizeChange:function(e){this.elsticPage.pageSize=e,this.getSender()},handleCurrentChange:function(e){this.elsticPage.current=e,this.getSender()},getSender:function(){var e=this;this.$request.fetchGetSender(this.elsticPage.current,this.elsticPage.pageSize).then((function(t){e.senderData=t.data.records,e.elsticPage.total=t.data.total}))},addSender:function(){this.$refs.elform.dialogVisible=!0,this.isAdd=!0},elasticEdit:function(e){this.isAdd=!1;var t=this.$refs.elform;t.dialogVisible=!0,t.form={id:e.id,host:e.host,username:e.username,password:e.password,enable:e.enable}},elaDelete:function(e){var t=this;this.$request.fetchDelSender(e).then((function(){t.delLoading=!1,t.$message({message:"删除成功!!!",type:"success"}),t.getSender()}))}}},l=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[a("el-row",[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[a("el-button",{staticStyle:{"margin-left":"0"},attrs:{"el-button":"",type:"success",plain:"",size:"mini"},on:{click:e.addSender}},[e._v("添加\n        ")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"5px"},attrs:{data:e.senderData,border:"","header-cell-style":{color:"#909399",textAlign:"center",background:"#f5f7fa"}}},[a("el-table-column",{attrs:{prop:"host",label:"主机"}}),e._v(" "),a("el-table-column",{attrs:{prop:"enable",label:"选中"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:!0===t.row.enable?"success":"danger"}},[e._v("\n            "+e._s(!0===t.row.enable?"是":"否")+"\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.elasticEdit(t.row)}}},[e._v("编辑\n          ")]),e._v(" "),a("el-popover",{ref:t.row.id,attrs:{placement:"top",width:"200"}},[a("p",[e._v("确定删除?")]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){e.$refs[t.row.id].doClose()}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{loading:e.delLoading,type:"primary",size:"mini"},on:{click:function(a){return e.elaDelete(t.row.id)}}},[e._v("确定\n              ")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",type:"text",size:"mini"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("Page",{attrs:{size:e.elsticPage.pageSize,current:e.elsticPage.current,pageTotal:e.elsticPage.total,pageSizeArray:e.pageSizeArray},on:{handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange}})],1),e._v(" "),a("ELasticForm",{ref:"elform",attrs:{isAdd:e.isAdd},on:{getSender:e.getSender}})],1)}),[],!1,null,"c6bc0994",null);t.default=l.exports},"t2r+":function(e,t,a){"use strict";a("TzQq")}}]);
//# sourceMappingURL=36.f70fab8bfc2f4ff8a386.js.map