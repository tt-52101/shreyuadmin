(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08d8f903"],{"229f":function(t,a,e){},2463:function(t,a,e){"use strict";var i=e("229f"),s=e.n(i);s.a},5177:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"email-container"},[e("div",{staticClass:"inbox-leftbar"},[e("router-link",{staticClass:"btn btn-danger btn-block mb-4",attrs:{to:"/email/inbox"}},[t._v("Inbox")]),e("LeftbarList")],1),e("div",{staticClass:"inbox-rightbar p-4"},[e("div",[e("form",[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"To"}})]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Subject"}})]),e("div",{staticClass:"form-group"},[e("vue-editor")],1),e("div",{staticClass:"form-group pt-2"},[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-success mr-1",attrs:{type:"button"}},[e("i",{staticClass:"uil uil-envelope-edit"}),t._v(" Draft\n                  ")]),e("button",{staticClass:"btn btn-primary"},[e("span",[t._v("Send")]),e("i",{staticClass:"uil uil-message ml-2"})])])])])])]),e("div",{staticClass:"clearfix"})])])])],1)},s=[],n=e("5873"),l=e("c2a4"),r=e("444f"),o=e("2579"),c=e("95ab"),u={page:{title:"Email Compose",meta:[{name:"description",content:l.description}]},components:{VueEditor:n["a"],Layout:r["a"],PageHeader:o["a"],LeftbarList:c["a"]},data:function(){return{title:"Compose Email",items:[{text:"Shreyu",href:"/"},{text:"Apps",href:"/"},{text:"Email",href:"/"},{text:"Compose Email",active:!0}]}}},m=u,d=(e("2463"),e("2877")),p=Object(d["a"])(m,i,s,!1,null,"195ab835",null);a["default"]=p.exports},"95ab":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._l(t.emailList,(function(a){return e("div",{key:a.icon,staticClass:"mail-list"},[e("a",{staticClass:"list-group-item border-0",class:{"text-danger font-weight-bold":""+a.text==="danger"},attrs:{href:"javascript: void(0);"}},[e("i",{class:a.icon+" font-size-15"}),t._v("\n      "+t._s(a.name)+"\n      "),e("span",{staticClass:"badge bagde-danger float-right ml-2 mt-1",class:{"badge-danger":""+a.text==="danger","badge-info":""+a.text==="info"}},[t._v(t._s(a.value))])])])})),e("h6",{staticClass:"mt-4"},[t._v("Labels")]),t._l(t.emailLabel,(function(a){return e("div",{key:a.name,staticClass:"list-group b-0 mail-list"},[e("a",{staticClass:"list-group-item border-0",attrs:{href:"javascript: void(0);"}},[e("span",{class:"uil uil-circle text-"+a.text+" font-size-12 mr-1"}),t._v("\n      "+t._s(a.name)+"\n    ")])])}))],2)},s=[],n={data:function(){return{emailList:[{icon:"uil uil-envelope-alt",name:"Inbox",value:8,text:"danger"},{icon:"uil uil-envelope-star",name:"Starred"},{icon:"uil uil-envelope-edit",name:"Draft",value:32,text:"info"},{icon:"uil uil-envelope-send",name:"Sent Mail"},{icon:"uil uil-trash",name:"Trash"}],emailLabel:[{text:"primary",name:"Web App"},{text:"success",name:"Recharge"},{text:"success",name:"Wallet Balance"},{text:"warning",name:"Friends"},{text:"secondary",name:"Family"}]}}},l=n,r=e("2877"),o=Object(r["a"])(l,i,s,!1,null,null,null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-08d8f903-legacy.11c0fa65.js.map