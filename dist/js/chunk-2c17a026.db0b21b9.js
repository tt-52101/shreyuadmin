(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c17a026"],{"14e1":function(t,e,a){},"1f62":function(t,e,a){t.exports=a.p+"img/avatar-4.bae8e081.jpg"},5092:function(t,e,a){t.exports=a.p+"img/avatar-9.bae8e081.jpg"},"61ae":function(t,e,a){t.exports=a.p+"img/avatar-3.bae8e081.jpg"},"6a4b":function(t,e,a){},a8a4:function(t,e,a){t.exports=a.p+"img/avatar-5.bae8e081.jpg"},bf20:function(t,e,a){"use strict";var s=a("6a4b"),i=a.n(s);i.a},d03b:function(t,e,a){t.exports=a.p+"img/avatar-6.bae8e081.jpg"},f996:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){t.showmodal=!0}}},[a("i",{staticClass:"uil uil-plus mr-1"}),t._v("Add New\n                  ")]),a("b-modal",{attrs:{size:"lg",title:"Formulario tarea","title-class":"font-18","hide-footer":""},model:{value:t.showmodal,callback:function(e){t.showmodal=e},expression:"showmodal"}},[a("tasks-form"),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Guardar")]),a("b-button",{staticClass:"ml-1",attrs:{variant:"light"},on:{click:t.hideModal}},[t._v("Cerrar")])],1)],1)],1),a("div",{staticClass:"col-sm-9"},[a("div",{staticClass:"float-sm-right mt-3 mt-sm-0"},[a("div",{staticClass:"task-search d-inline-block mb-3 mb-sm-0 mr-sm-3"},[a("form",[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control search-input",attrs:{type:"text",placeholder:"Search..."}}),a("span",{staticClass:"uil uil-search icon-search"}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-soft-primary",attrs:{type:"button"}},[a("i",{staticClass:"uil uil-file-search-alt"})])])])])]),a("b-dropdown",{staticClass:"d-inline-block",attrs:{id:"sort-act",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"uil uil-sort-amount-down"})]},proxy:!0}])},[a("b-dropdown-item",[t._v("Due Date")]),a("b-dropdown-item",[t._v("Added Date")]),a("b-dropdown-item",[t._v("Assignee")])],1)],1)])]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.todayTasks",modifiers:{todayTasks:!0}}],staticClass:"text-dark",attrs:{href:"javascript: void(0);","aria-controls":"todayTasks"}},[a("h5",{staticClass:"mb-0"},[a("i",{staticClass:"uil uil-angle-down font-size-18"}),t._v("Today\n                      "),a("span",{staticClass:"text-muted font-size-14"},[t._v("("+t._s(t.todayTasks.length)+")")])])]),a("b-collapse",{attrs:{id:"todayTasks",visible:""}},[a("div",{staticClass:"card mb-0 shadow-none"},[a("div",{staticClass:"card-body pt-0"},t._l(t.todayTasks,(function(e,s){return a("div",{key:s,staticClass:"row justify-content-sm-between border-bottom mt-2 pt-2"},[a("div",{staticClass:"col-lg-6 mb-2 mb-lg-0"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{id:"task-"+s,type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"task-"+s}},[t._v(t._s(e.title))])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"d-sm-flex justify-content-between"},[a("div",[a("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"avatar-xs rounded-circle",attrs:{title:"Assigned to "+e.assigned_to,src:""+e.assignee_avatar,alt:"image"}})]),a("div",{staticClass:"mt-3 mt-sm-0"},[a("ul",{staticClass:"list-inline font-13 text-sm-right"},[a("li",{staticClass:"list-inline-item pr-1"},[a("i",{staticClass:"uil uil-schedule font-16 mr-1"}),t._v("\n                                    "+t._s(e.due_date)+"\n                                  ")]),a("li",{staticClass:"list-inline-item pr-1"},[a("i",{staticClass:"uil uil-align-alt font-16 mr-1"}),t._v("\n                                    "+t._s(e.checklists.length)+"\n                                  ")]),a("li",{staticClass:"list-inline-item pr-2"},[a("i",{staticClass:"uil uil-comment-message font-16 mr-1"}),t._v("\n                                    "+t._s(e.comments.length)+"\n                                  ")]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge p-1",class:{"badge-soft-danger":""+e.priority==="High","badge-soft-info":""+e.priority==="Medium","badge-soft-success":""+e.priority==="Low"}},[t._v(t._s(e.priority))])])])])])])])})),0)])]),a("div",{staticClass:"mt-4"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.upcomingTask",modifiers:{upcomingTask:!0}}],staticClass:"text-dark",attrs:{href:"javascript: void(0);","aria-controls":"upcomingTask"}},[a("h5",{staticClass:"mb-0"},[a("i",{staticClass:"uil uil-angle-down font-size-18"}),t._v("Upcoming\n                        "),a("span",{staticClass:"text-muted font-size-14"},[t._v("("+t._s(t.upcomingTask.length)+")")])])]),a("b-collapse",{attrs:{id:"upcomingTask",visible:""}},[a("div",{staticClass:"card mb-0 shadow-none"},[a("div",{staticClass:"card-body pt-0"},t._l(t.upcomingTask,(function(e,s){return a("div",{key:s,staticClass:"row justify-content-sm-between border-bottom mt-2 pt-2"},[a("div",{staticClass:"col-lg-6 mb-2 mb-lg-0"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{id:"task-upcoming-"+s,type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"task-upcoming-"+s}},[t._v(t._s(e.title))])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"d-sm-flex justify-content-between"},[a("div",[a("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"avatar-xs rounded-circle",attrs:{title:"Assigned to "+e.assigned_to,src:""+e.assignee_avatar,alt:"image"}})]),a("div",{staticClass:"mt-3 mt-sm-0"},[a("ul",{staticClass:"list-inline font-13 text-sm-right"},[a("li",{staticClass:"list-inline-item pr-1"},[a("i",{staticClass:"uil uil-schedule font-16 mr-1"}),t._v("\n                                      "+t._s(e.due_date)+"\n                                    ")]),a("li",{staticClass:"list-inline-item pr-1"},[a("i",{staticClass:"uil uil-align-alt font-16 mr-1"}),t._v("\n                                      "+t._s(e.checklists.length)+"\n                                    ")]),a("li",{staticClass:"list-inline-item pr-2"},[a("i",{staticClass:"uil uil-comment-message font-16 mr-1"}),t._v("\n                                      "+t._s(e.comments.length)+"\n                                    ")]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge p-1",class:{"badge-soft-danger":""+e.priority==="High","badge-soft-info":""+e.priority==="Medium","badge-soft-success":""+e.priority==="Low"}},[t._v(t._s(e.priority))])])])])])])])})),0)])])],1),a("div",{staticClass:"mt-4"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.otherTask",modifiers:{otherTask:!0}}],staticClass:"text-dark",attrs:{href:"javascript: void(0);","aria-controls":"otherTask"}},[a("h5",{staticClass:"mb-0"},[a("i",{staticClass:"uil uil-angle-down font-size-18"}),t._v("Other\n                        "),a("span",{staticClass:"text-muted font-size-14"},[t._v("("+t._s(t.otherTask.length)+")")])])]),a("b-collapse",{attrs:{id:"otherTask",visible:""}},[a("div",{staticClass:"card mb-0 shadow-none"},[a("div",{staticClass:"card-body pt-0"},t._l(t.otherTask,(function(e,s){return a("div",{key:s,staticClass:"row justify-content-sm-between border-bottom mt-2 pt-2"},[a("div",{staticClass:"col-lg-6 mb-2 mb-lg-0"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{id:"task-other-"+s,type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"task-other-"+s}},[t._v(t._s(e.title))])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"d-sm-flex justify-content-between"},[a("div",[a("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"avatar-xs rounded-circle",attrs:{title:"Assigned to "+e.assigned_to,src:""+e.assignee_avatar,alt:"image"}})]),a("div",{staticClass:"mt-3 mt-sm-0"},[a("ul",{staticClass:"list-inline font-13 text-sm-right"},[a("li",{staticClass:"list-inline-item pr-1"},[a("i",{staticClass:"uil uil-schedule font-16 mr-1"}),t._v("\n                                      "+t._s(e.due_date)+"\n                                    ")]),a("li",{staticClass:"list-inline-item pr-1"},[a("i",{staticClass:"uil uil-align-alt font-16 mr-1"}),t._v("\n                                      "+t._s(e.checklists.length)+"\n                                    ")]),a("li",{staticClass:"list-inline-item pr-2"},[a("i",{staticClass:"uil uil-comment-message font-16 mr-1"}),t._v("\n                                      "+t._s(e.comments.length)+"\n                                    ")]),a("li",{staticClass:"list-inline-item"},[a("span",{staticClass:"badge p-1",class:{"badge-soft-danger":""+e.priority==="High","badge-soft-info":""+e.priority==="Medium","badge-soft-success":""+e.priority==="Low"}},[t._v(t._s(e.priority))])])])])])])])})),0)])])],1)],1)]),a("div",{staticClass:"row mb-3 mt-5"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-center"},[a("a",{staticClass:"btn btn-white mb-3",attrs:{href:"javascript:void(0);"}},[a("feather",{staticClass:"icon-dual icon-xs mr-2 align-middle",attrs:{type:"loader"}}),t._v("Load more\n                    ")],1)])])])])])])])]),a("div",{staticClass:"col-xl-4"},[a("TaskDetail",{attrs:{task:t.selectedTask}})],1)])],1)},i=[],l=a("f210"),o=a("c2a4"),r=a("444f"),n=a("2579"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-tabs",[a("b-tab",{attrs:{title:"Cliente",active:""}},[a("b-form",{staticClass:"form-horizontal"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-12 col-form-label"},[t._v("Cliente")]),a("div",{staticClass:"col-lg-12"},[a("select",{staticClass:"form-control custom-select"},[a("option",[t._v("Tomas Crespo")]),a("option",[t._v("Ricardo")]),a("option",[t._v("Jessica")])])])])]),a("div",{staticClass:"col-lg-12"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Telefono","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-12"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Nombre de contacto","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-12"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Telefono de contacto","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-12"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Email de contacto","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1)])])],1),a("b-tab",{attrs:{title:"Detalle de la orden"}},[a("b-form",{staticClass:"form-horizontal"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-12 col-form-label"},[t._v("Estado")]),a("div",{staticClass:"col-lg-12"},[a("select",{staticClass:"form-control custom-select"},[a("option",[t._v("En proceso")]),a("option",[t._v("Presupuesto")]),a("option",[t._v("Reparado")]),a("option",[t._v("No Reparado")])])])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-12 col-form-label"},[t._v("Tecnico")]),a("div",{staticClass:"col-lg-12"},[a("select",{staticClass:"form-control custom-select"},[a("option",[t._v("Tomas Crespo")]),a("option",[t._v("Ricardo")]),a("option",[t._v("Jessica")])])])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-12 col-form-label",attrs:{for:"example-date"}},[t._v("Fecha")]),a("div",{staticClass:"col-lg-12"},[a("input",{staticClass:"form-control",attrs:{id:"example-date",type:"date",name:"date"}})])])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-12 col-form-label",attrs:{for:"example-date1"}},[t._v("Fecha entrega")]),a("div",{staticClass:"col-lg-12"},[a("input",{staticClass:"form-control",attrs:{id:"example-date1",type:"date",name:"date"}})])])])])])],1),a("b-tab",{attrs:{title:"Detalles del equipo"}},[a("b-form",{staticClass:"form-horizontal"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Modelo","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-4"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Marca","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-4"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Numero de serie","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-8"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Descripción o nombre del equipo","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-4"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Accesorios","label-for":"input-horizontal"}},[a("b-form-input",{attrs:{id:"input-horizontal",value:""}})],1)],1),a("div",{staticClass:"col-lg-6"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Problema del equipo","label-for":"input-horizontal"}},[a("b-form-textarea",{attrs:{id:"example-textarea",size:"lg",rows:"4"}})],1)],1),a("div",{staticClass:"col-lg-6"},[a("b-form-group",{attrs:{"label-cols-sm":"12","label-cols-lg":"12",label:"Observeciones","label-for":"input-horizontal"}},[a("b-form-textarea",{attrs:{id:"example-textarea",size:"lg",rows:"4"}})],1)],1)])])],1)],1)},d=[],m={data:function(){return{tabContent:"Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",content:" Donec pede justo, fringilla vel, aliquet nec, vulputate\n                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,\n                  justo. Nullam dictum felis eu pede mollis pretium. Integer\n                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean\n                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,\n                  consequat vitae, eleifend ac, enim."}}},u=m,p=a("2877"),v=Object(p["a"])(u,c,d,!1,null,null,null),h=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row pb-3 border-bottom"},[a("div",{staticClass:"col"},[a("b-dropdown",{staticClass:"float-right",attrs:{variant:"link","toggle-class":"p-0",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("i",{staticClass:"uil uil-ellipsis-h text-muted"})]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-file-upload mr-1"}),t._v("Attachment\n\t\t\t\t\t")]),a("b-dropdown-item",{attrs:{href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-edit mr-1"}),t._v("Edit\n\t\t\t\t\t")]),a("b-dropdown-item",{attrs:{href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-file-copy-alt mr-1"}),t._v("Mark as Duplicate\n\t\t\t\t\t")]),a("b-dropdown-divider"),a("b-dropdown-item",{attrs:{href:"javascript:void(0);",variant:"danger"}},[a("i",{staticClass:"uil uil-trash-alt mr-1"}),t._v("Delete\n\t\t\t\t\t")])],1),t._m(0)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"mt-3"},[t._v(t._s(t.task.title))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("p",{staticClass:"mt-2 mb-1 text-muted"},[t._v("Assigned To")]),a("div",{staticClass:"media"},[a("img",{staticClass:"rounded-circle mr-2",attrs:{src:""+t.task.assignee_avatar,alt:"",height:"24"}}),a("div",{staticClass:"media-body"},[a("h5",{staticClass:"mt-1 font-size-14"},[t._v(t._s(t.task.assigned_to))])])])]),a("div",{staticClass:"col-6"},[a("p",{staticClass:"mt-2 mb-1 text-muted"},[t._v("Due Date")]),a("div",{staticClass:"media"},[a("i",{staticClass:"uil uil-schedule font-18 text-success mr-1"}),a("div",{staticClass:"media-body"},[a("h5",{staticClass:"mt-1 font-size-14"},[t._v(t._s(t.task.due_date))])])])])]),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"taskDesk"}},[a("vue-editor",{attrs:{"editor-options":t.editorOptions},model:{value:t.task.description,callback:function(e){t.$set(t.task,"description",e)},expression:"task.description"}})],1)])]),a("h5",{staticClass:"mt-4 mb-2 font-size-16"},[t._v("Checklists/Sub-tasks")]),t._l(t.task.checklists,(function(e,s){return a("div",{key:s,staticClass:"custom-control custom-checkbox mt-1"},[a("input",{staticClass:"custom-control-input",attrs:{id:"checklist-"+s,type:"checkbox"},domProps:{checked:e.completed}}),a("label",{staticClass:"custom-control-label strikethrough",attrs:{for:"checklist-"+s}},[t._v(t._s(e.title))])])})),a("h5",{staticClass:"mt-4 mb-2 font-size-16"},[t._v("Attachments")]),t._l(t.task.attachments,(function(e){return a("div",{key:"file-"+e.id,staticClass:"card mb-2 shadow-none border"},[a("div",{staticClass:"p-1 px-2"},[a("div",{staticClass:"row align-items-center"},[t._m(1,!0),a("div",{staticClass:"col pl-0"},[a("a",{staticClass:"text-muted font-weight-bold",attrs:{href:"javascript:void(0);"}},[t._v(t._s(e.filename))]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.size))])]),a("div",{staticClass:"col-auto"},[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-link text-muted btn-lg p-0",attrs:{title:"Download",href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-cloud-download font-size-14"})]),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-link text-danger btn-lg p-0",attrs:{title:"Delete",href:"javascript:void(0);"}},[a("i",{staticClass:"uil uil-multiply font-size-14"})])])])])])})),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"mb-2 font-size-16"},[t._v("Comments")]),t._l(t.task.comments,(function(e){return a("div",{key:"comment-"+e.id,staticClass:"media mt-3 p-1 border-bottom pb-2"},[a("img",{staticClass:"mr-2 rounded-circle",attrs:{src:e.author_avatar,height:"36",alt:""}}),a("div",{staticClass:"media-body"},[a("h5",{staticClass:"mt-0 mb-0 font-size-14"},[a("span",{staticClass:"float-right text-muted font-size-12"},[t._v(t._s(e.posted_on))]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.author)+"\n\t\t\t\t\t\t\t\t")]),a("p",{staticClass:"mt-1 mb-0 text-muted"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t\t")])])])}))],2)]),t._m(2)],2)])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-control custom-checkbox float-left"},[a("input",{staticClass:"custom-control-input",attrs:{id:"completedCheck",type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"completedCheck"}},[t._v("Mark as completed")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-auto"},[a("div",{staticClass:"avatar-sm font-weight-bold mr-3"},[a("span",{staticClass:"avatar-title rounded bg-soft-primary text-primary"},[a("i",{staticClass:"uil-file-plus-alt font-size-18"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col"},[a("div",{staticClass:"border rounded"},[a("form",{staticClass:"comment-area-box",attrs:{action:"#"}},[a("textarea",{staticClass:"form-control border-0 resize-none",attrs:{rows:"3",placeholder:"Your comment..."}}),a("div",{staticClass:"p-2 bg-light"},[a("div",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"submit"}},[a("i",{staticClass:"uil uil-message mr-1"}),t._v("Submit\n\t\t\t\t\t\t\t\t\t\t")])]),a("div",[a("a",{staticClass:"btn btn-sm px-1 btn-light",attrs:{href:"#"}},[a("i",{staticClass:"uil uil-cloud-upload"})]),a("a",{staticClass:"btn btn-sm px-1 btn-light",attrs:{href:"#"}},[a("i",{staticClass:"uil uil-at"})])])])])])])])}],f=a("5873"),C=(a("14e1"),{components:{VueEditor:f["a"]},props:{task:{type:Object,default:function(){return{}}}},data:function(){return{editorOptions:{theme:"bubble"}}}}),_=C,y=(a("bf20"),Object(p["a"])(_,b,g,!1,null,null,null)),k=y.exports,w=a("5092"),x=a("61ae"),z=a("1f62"),T=a("a8a4"),S=a("d03b"),A=[{id:1,title:"Draft the new contract document for sales team",assigned_to:"Arya Stark",assignee_avatar:w,due_date:"Today 10am",completed:!1,priority:"High",stage:"Todo",checklists:[{id:1,title:"Find out the old contract documents",completed:!0},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]},{id:2,title:"iOS App home page",assigned_to:"James B",assignee_avatar:x,due_date:"Today 4pm",completed:!1,stage:"In-progress",priority:"High",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]},{id:3,title:"Write a release note",assigned_to:"Kevin C",assignee_avatar:z,due_date:"Today 4pm",completed:!1,stage:"In-progress",priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]}],M=[{id:4,title:"Invite user to a project",assigned_to:"Arya Stark",assignee_avatar:w,due_date:"Tomorrow 10am",stage:"Todo",completed:!1,priority:"Low",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]},{id:5,title:"Enable analytics tracking",assigned_to:"James B",assignee_avatar:T,due_date:"27 Aug 10am",completed:!1,stage:"Review",priority:"Low",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]},{id:6,title:"Code HTML email template",assigned_to:"Kevin C",assignee_avatar:S,due_date:"No Due Date",completed:!1,stage:"Review",priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]}],I=[{id:7,title:"Coordinate with business development",assigned_to:"Arya Stark",assignee_avatar:w,due_date:"No Due Date",stage:"Todo",completed:!1,priority:"High",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]},{id:8,title:"Kanban board design",assigned_to:"James B",assignee_avatar:T,stage:"Review",due_date:"30 Aug 10am",completed:!1,priority:"Low",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]},{id:9,title:"Draft the new contract document for sales team",assigned_to:"Kevin C",assignee_avatar:S,due_date:"No Due Date",stage:"Done",completed:!1,priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]},{id:10,title:"Draft the new contract document for vendor Abc",assigned_to:"Kevin C",assignee_avatar:S,due_date:"2 Sep 10am",completed:!1,stage:"Done",priority:"Medium",checklists:[{id:1,title:"Find out the old contract documents",completed:!1},{id:2,title:"Organize meeting sales associates to understand need in detail",completed:!1},{id:3,title:"Make sure to cover every small details",completed:!1}],description:"<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",attachments:[{id:1,filename:"sales-assets.zip",size:"2.3 MB"},{id:2,filename:"new-contarcts.docx",size:"1.3 MB"}],comments:[{id:1,author:"Arya Stark",text:"Should I review the last 3 years legal documents as well?",posted_on:"4:30am",author_avatar:w},{id:2,author:"Gary Somya",text:"@Arya FYI..I have created some general guidelines last year.",posted_on:"3:30am",author_avatar:x}]}],j=(A.concat(M,I),{page:{title:"Tasks List",meta:[{name:"description",content:o.description}]},components:{Layout:r["a"],PageHeader:n["a"],TaskDetail:k,tasksForm:h},data:function(){return{showmodal:!1,selectedTask:A[0],title:"Tasks List",items:[{text:"Shreyu",href:"/"},{text:"Apps",href:"/"},{text:"Tasks",href:"/"},{text:"List",active:!0}],todayTasks:Object(l["a"])(A),upcomingTask:Object(l["a"])(M),otherTask:Object(l["a"])(I),tabContent:"Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",content:" Donec pede justo, fringilla vel, aliquet nec, vulputate\n                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,\n                  justo. Nullam dictum felis eu pede mollis pretium. Integer\n                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean\n                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,\n                  consequat vitae, eleifend ac, enim."}},methods:{hideModal:function(t){this.showmodal=!1}}}),E=j,D=Object(p["a"])(E,s,i,!1,null,null,null);e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-2c17a026.db0b21b9.js.map