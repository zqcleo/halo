"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[847],{24847:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",[a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"1",attrs:{tab:"文章"}},[a("comment-tab",{attrs:{type:"posts"}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"页面"}},[a("comment-tab",{attrs:{type:"sheets"}})],1)],1)],1)])},n=[],o=a(50990),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-tab-wrapper"},[a("a-card",{attrs:{bodyStyle:{padding:0},bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"关键词："}},[a("a-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery()}},model:{value:t.list.params.keyword,callback:function(e){t.$set(t.list.params,"keyword",e)},expression:"list.params.keyword"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"评论状态："}},[a("a-select",{attrs:{allowClear:"",placeholder:"请选择评论状态"},on:{change:function(e){return t.handleQuery()}},model:{value:t.list.params.status,callback:function(e){t.$set(t.list.params,"status",e)},expression:"list.params.status"}},t._l(Object.keys(t.commentStatus),(function(e){return a("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(t.commentStatus[e].text)+" ")])})),1)],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-space",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleQuery()}}},[t._v("查询")]),a("a-button",{on:{click:function(e){return t.handleResetParam()}}},[t._v("重置")])],1)],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-dropdown",{directives:[{name:"show",rawName:"v-show",value:null!=t.list.params.status&&""!==t.list.params.status&&!t.isMobile(),expression:"list.params.status != null && list.params.status !== '' && !isMobile()"}]},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},["AUDITING"===t.list.params.status?a("a-menu-item",{key:"1",on:{click:function(e){return t.handleEditStatusMore(t.commentStatus.PUBLISHED.value)}}},[t._v(" 通过 ")]):t._e(),"PUBLISHED"===t.list.params.status||"AUDITING"===t.list.params.status?a("a-menu-item",{key:"2",on:{click:function(e){return t.handleEditStatusMore(t.commentStatus.RECYCLE.value)}}},[t._v(" 移到回收站 ")]):t._e(),"RECYCLE"===t.list.params.status?a("a-menu-item",{key:"3",on:{click:t.handleDeleteMore}},[t._v(" 永久删除 ")]):t._e()],1),a("a-button",[t._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1),a("div",{staticClass:"mt-4"},[t.isMobile()?a("a-list",{attrs:{dataSource:t.formattedComments,loading:t.list.loading,pagination:!1,itemLayout:"vertical",size:"large"},scopedSlots:t._u([{key:"renderItem",fn:function(e,s){return a("a-list-item",{key:s},[a("template",{slot:"actions"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"topLeft"}},[a("span",[a("a-icon",{attrs:{type:"bars"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},["AUDITING"===e.status?a("a-menu-item",{on:{click:function(a){return t.handleEditStatusClick(e.id,"PUBLISHED")}}},[t._v(" 通过 ")]):t._e(),"AUDITING"===e.status?a("a-menu-item",{on:{click:function(a){return t.handleReplyAndPassClick(e)}}},[t._v(" 通过并回复 ")]):"PUBLISHED"===e.status?a("a-menu-item",{on:{click:function(a){return t.handleReplyClick(e)}}},[t._v(" 回复 ")]):"RECYCLE"===e.status?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要还原该评论？",cancelText:"取消",okText:"确定"},on:{confirm:function(a){return t.handleEditStatusClick(e.id,"PUBLISHED")}}},[t._v(" 还原 ")])],1):t._e(),"PUBLISHED"===e.status||"AUDITING"===e.status?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要将该评论移到回收站？",cancelText:"取消",okText:"确定"},on:{confirm:function(a){return t.handleEditStatusClick(e.id,"RECYCLE")}}},[t._v(" 回收站 ")])],1):"RECYCLE"===e.status?a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要永久删除该评论？",cancelText:"取消",okText:"确定"},on:{confirm:function(a){return t.handleDeleteClick(e.id)}}},[t._v(" 删除 ")])],1):t._e()],1)],1)],1),a("template",{slot:"extra"},[a("span",[a("a-badge",{attrs:{status:e.statusProperty.status,text:e.statusProperty.text}})],1)]),a("a-list-item-meta",[a("template",{slot:"description"},[t._v(" 发表在 "),"posts"===t.type?a("a",{attrs:{href:e.post.fullPath,target:"_blank"}},[t._v("《"+t._s(e.post.title)+"》")]):t._e(),"sheets"===t.type?a("a",{attrs:{href:e.sheet.fullPath,target:"_blank"}},[t._v("《"+t._s(e.sheet.title)+"》")]):t._e()]),a("a-avatar",{attrs:{slot:"avatar",src:e.avatar,size:"large"},slot:"avatar"}),e.authorUrl?a("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[e.isAdmin?a("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"user"}}):t._e(),t._v("  "),a("a",{attrs:{href:e.authorUrl,target:"_blank"}},[t._v(t._s(e.author))]),t._v("  "),a("small",{staticStyle:{color:"rgba(0, 0, 0, 0.45)"}},[t._v(t._s(t._f("timeAgo")(e.createTime)))])],1):a("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[e.isAdmin?a("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"user"}}):t._e(),t._v(" "+t._s(e.author)+" "),a("small",{staticStyle:{color:"rgba(0, 0, 0, 0.45)"}},[t._v(" "+t._s(t._f("timeAgo")(e.createTime))+" ")])],1)],2),a("p",{domProps:{innerHTML:t._s(e.content)}})],2)}}],null,!1,1269762912)}):a("a-table",{attrs:{columns:t.columns,dataSource:t.formattedComments,loading:t.list.loading,pagination:!1,rowKey:function(t){return t.id},rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectionChange,getCheckboxProps:t.getCheckboxProps},scrollToFirstRowOnChange:""},scopedSlots:t._u([{key:"author",fn:function(e,s){return[s.isAdmin?a("a-icon",{staticStyle:{"margin-right":"3px"},attrs:{type:"user"}}):t._e(),s.authorUrl?a("a",{attrs:{href:s.authorUrl,target:"_blank"}},[t._v(t._s(e))]):a("span",[t._v(t._s(e))])]}},{key:"content",fn:function(e){return a("p",{staticClass:"comment-content-wrapper",domProps:{innerHTML:t._s(e)}})}},{key:"status",fn:function(t){return a("span",{},[a("a-badge",{attrs:{status:t.status,text:t.text}})],1)}},{key:"post",fn:function(e){return"posts"===t.type?a("a",{attrs:{href:e.fullPath,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")]):t._e()}},{key:"sheet",fn:function(e){return"sheets"===t.type?a("a",{attrs:{href:e.fullPath,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")]):t._e()}},{key:"createTime",fn:function(e){return a("span",{},[a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[t._v(" "+t._s(t._f("moment")(e))+" ")]),t._v(" "+t._s(t._f("timeAgo")(e))+" ")],2)],1)}},{key:"action",fn:function(e,s){return a("span",{},["AUDITING"===s.status?a("a-dropdown",{attrs:{trigger:["click"]}},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("通过")]),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(e){return t.handleEditStatusClick(s.id,"PUBLISHED")}}},[t._v(" 通过 ")]),a("a-menu-item",{key:"2",on:{click:function(e){return t.handleReplyAndPassClick(s)}}},[t._v(" 通过并回复 ")])],1)],1):"PUBLISHED"===s.status?a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(e){return t.handleReplyClick(s)}}},[t._v(" 回复 ")]):"RECYCLE"===s.status?a("a-popconfirm",{attrs:{title:"你确定要还原该评论？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleEditStatusClick(s.id,"PUBLISHED")}}},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("还原")])],1):t._e(),a("a-divider",{attrs:{type:"vertical"}}),"PUBLISHED"===s.status||"AUDITING"===s.status?a("a-popconfirm",{attrs:{title:"你确定要将该评论移到回收站？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleEditStatusClick(s.id,"RECYCLE")}}},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("回收站")])],1):"RECYCLE"===s.status?a("a-popconfirm",{attrs:{title:"你确定要永久删除该评论？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleDeleteClick(s.id)}}},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("删除")])],1):t._e()],1)}}],null,!0)}),a("div",{staticClass:"page-wrapper"},[a("a-pagination",{staticClass:"pagination",attrs:{current:t.pagination.page,defaultPageSize:t.pagination.size,pageSizeOptions:["10","20","50","100"],total:t.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:t.handlePageChange,showSizeChange:t.handlePageSizeChange}})],1)],1)]),t.selectedComment?a("a-modal",{attrs:{title:"回复给："+t.selectedComment.author,destroyOnClose:""},on:{close:t.onReplyClose},model:{value:t.replyCommentVisible,callback:function(e){t.replyCommentVisible=e},expression:"replyCommentVisible"}},[a("template",{slot:"footer"},[a("ReactiveButton",{attrs:{errored:t.replyErrored,loading:t.replying,erroredText:"回复失败",loadedText:"回复成功",text:"回复",type:"primary"},on:{callback:t.handleRepliedCallback,click:t.handleCreateClick}})],1),a("a-form-model",{ref:"replyCommentForm",attrs:{model:t.replyComment,rules:t.replyCommentRules,layout:"vertical"}},[a("a-form-model-item",{attrs:{prop:"content"}},[a("a-input",{ref:"contentInput",attrs:{autoSize:{minRows:8},type:"textarea"},model:{value:t.replyComment.content,callback:function(e){t.$set(t.replyComment,"content",e)},expression:"replyComment.content"}})],1)],1)],2):t._e()],1)},l=[],r=a(91057),c=(a(70315),a(82395),a(31875),a(41479),a(3832)),u=a(90952),m=a(1540),d=[{title:"昵称",dataIndex:"author",width:"150px",ellipsis:!0,scopedSlots:{customRender:"author"}},{title:"内容",dataIndex:"content",scopedSlots:{customRender:"content"}},{title:"状态",className:"status",dataIndex:"statusProperty",width:"100px",scopedSlots:{customRender:"status"}},{title:"评论文章",dataIndex:"post",width:"200px",ellipsis:!0,scopedSlots:{customRender:"post"}},{title:"日期",dataIndex:"createTime",width:"170px",scopedSlots:{customRender:"createTime"}},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],p=[{title:"昵称",dataIndex:"author",width:"150px",ellipsis:!0,scopedSlots:{customRender:"author"}},{title:"内容",dataIndex:"content",scopedSlots:{customRender:"content"}},{title:"状态",className:"status",dataIndex:"statusProperty",width:"100px",scopedSlots:{customRender:"status"}},{title:"评论页面",dataIndex:"sheet",width:"200px",ellipsis:!0,scopedSlots:{customRender:"sheet"}},{title:"日期",dataIndex:"createTime",width:"170px",scopedSlots:{customRender:"createTime"}},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],h={PUBLISHED:{value:"PUBLISHED",color:"green",status:"success",text:"已发布"},AUDITING:{value:"AUDITING",color:"yellow",status:"warning",text:"待审核"},RECYCLE:{value:"RECYCLE",color:"red",status:"error",text:"回收站"}},y={name:"CommentTab",mixins:[c.jB,c.KT],props:{type:{type:String,required:!1,default:"posts",validator:function(t){return-1!==["posts","sheets","journals"].indexOf(t)}}},data:function(){return{commentStatus:h,replyCommentVisible:!1,list:{data:[],loading:!1,total:0,hasPrevious:!1,hasNext:!1,params:{page:0,size:10,keyword:null,status:null}},selectedRowKeys:[],selectedRows:[],selectedComment:{},replyComment:{},replyCommentRules:{content:[{required:!0,message:"* 内容不能为空",trigger:["change"]}]},replying:!1,replyErrored:!1}},created:function(){this.handleListComments()},computed:{formattedComments:function(){var t=this;return this.list.data.map((function(e){return e.statusProperty=t.commentStatus[e.status],e.content=u.TU.parse(e.content),e}))},pagination:function(){return{page:this.list.params.page+1,size:this.list.params.size,total:this.list.total}},columns:function(){return"posts"===this.type?d:p}},methods:{handleListComments:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.list.loading=!0,e.next=4,m.Z.comment.list(t.type,t.list.params);case 4:a=e.sent,t.list.data=a.data.content,t.list.total=a.data.total,t.list.hasPrevious=a.data.hasPrevious,t.list.hasNext=a.data.hasNext,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.$log.error(e.t0);case 14:return e.prev=14,t.list.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()},handleQuery:function(){this.handleClearRowKeys(),this.handlePageChange(1)},handleEditStatusClick:function(t,e){var a=this;m.Z.comment.updateStatusById(this.type,t,e).then((function(){a.$message.success("操作成功！")})).finally((function(){a.handleListComments()}))},handleDeleteClick:function(t){var e=this;m.Z.comment["delete"](this.type,t).then((function(){e.$message.success("删除成功！")})).finally((function(){e.handleListComments()}))},handleReplyAndPassClick:function(t){this.handleReplyClick(t),this.handleEditStatusClick(t.id,"PUBLISHED")},handleReplyClick:function(t){var e=this;this.selectedComment=t,this.replyCommentVisible=!0,this.replyComment.parentId=t.id,"posts"===this.type?this.replyComment.postId=t.post.id:this.replyComment.postId=t.sheet.id,this.$nextTick((function(){e.$refs.contentInput.focus()}))},handleCreateClick:function(){var t=this;t.$refs.replyCommentForm.validate((function(e){e&&(t.replying=!0,m.Z.comment.create(t.type,t.replyComment).catch((function(){t.replyErrored=!0})).finally((function(){setTimeout((function(){t.replying=!1}),400)})))}))},handleRepliedCallback:function(){this.replyErrored?this.replyErrored=!1:(this.replyComment={},this.selectedComment={},this.replyCommentVisible=!1,this.handleListComments())},handlePageChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.list.params.page=t-1,this.handleListComments()},handlePageSizeChange:function(t,e){this.$log.debug("Current: ".concat(t,", PageSize: ").concat(e)),this.list.params.page=0,this.list.params.size=e,this.handleListComments()},handleResetParam:function(){this.list.params.keyword=null,this.list.params.status=null,this.handleClearRowKeys(),this.handlePageChange(1)},handleEditStatusMore:function(t){var e=this;this.selectedRowKeys.length<=0?this.$message.info("请至少选择一项！"):m.Z.comment.updateStatusInBatch(this.type,this.selectedRowKeys,t).then((function(){e.$log.debug("commentIds: ".concat(e.selectedRowKeys,", status: ").concat(t)),e.selectedRowKeys=[]})).finally((function(){e.handleListComments()}))},handleDeleteMore:function(){var t=this;this.selectedRowKeys.length<=0?this.$message.info("请至少选择一项！"):m.Z.comment.deleteInBatch(this.type,this.selectedRowKeys).then((function(){t.$log.debug("delete: ".concat(t.selectedRowKeys)),t.selectedRowKeys=[]})).finally((function(){t.handleListComments()}))},handleClearRowKeys:function(){this.selectedRowKeys=[]},onReplyClose:function(){this.replyComment={},this.selectedComment={},this.replyCommentVisible=!1},onSelectionChange:function(t){this.selectedRowKeys=t,this.$log.debug("SelectedRowKeys: ".concat(t))},getCheckboxProps:function(t){return{props:{disabled:null==this.list.params.status||""===this.list.params.status,name:t.author}}}}},f=y,C=a(18156),g=(0,C.Z)(f,i,l,!1,null,null,null),k=g.exports,v={components:{PageView:o.B4,CommentTab:k}},_=v,x=(0,C.Z)(_,s,n,!1,null,null,null),w=x.exports}}]);