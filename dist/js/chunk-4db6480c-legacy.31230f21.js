(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db6480c"],{2579:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row page-title"},[a("div",{staticClass:"col-md-12"},[a("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:t.items}}),a("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},o=[],l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},r=l,i=a("2877"),n=Object(i["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports},9263:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Hoja de Tiempo")]),a("p",{staticClass:"text-muted font-13 mb-4"}),a("div",{staticClass:"row mb-md-2"},[a("div",{staticClass:"col-sm-12 col-md-6 col-lg-3"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                  Show \n                  "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries\n                ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-3"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                  Buscar:\n                  "),a("b-form-input",{staticClass:"form-control form-control-sm mx-2",attrs:{type:"search",placeholder:"Buscar..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-3"},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                Fecha inicio:\n                "),a("flat-pickr",{staticClass:"form-control form-control-sm mx-2",attrs:{placeholder:"",name:"date"},model:{value:t.startdate,callback:function(e){t.startdate=e},expression:"startdate"}})],1)]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-3"},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                Fecha final:\n                "),a("flat-pickr",{staticClass:"form-control form-control-sm mx-2",attrs:{placeholder:"",name:"date"},model:{value:t.enddate,callback:function(e){t.enddate=e},expression:"enddate"}})],1)])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{attrs:{items:t.tableData,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(image)",fn:function(t){return[a("b-img",{attrs:{src:t.value,fluid:"",alt:"Fluid image",width:"80"}})]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])])],1)},o=[],l=a("c2a4"),r=a("444f"),i=a("2579"),n=[{id:1,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Lucinda Stickley",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:2,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Henrietta Carsberg",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:3,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Phylys David",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:4,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Brena Shivell",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:5,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Carmon Tuiller",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:6,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Tina Strattan",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:7,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Jon Tarbox",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:8,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Carmine Hollibone",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:9,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Cora Germann",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:10,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Dawna Hillyatt",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"},{id:11,image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Natty Casini",rol:"Rol Empleado",start_hour:"00:00:00",end_hour:"00:00:00",date:"2018/07/29"}],c={page:{title:"Timesheet",meta:[{name:"description",content:l.description}]},components:{Layout:r["a"],PageHeader:i["a"]},data:function(){return{startdate:null,enddate:null,showmodal:!1,tableData:n,title:"Hoja de Tiempo",items:[{text:"Shreyu",href:"/"},{text:"Icons",href:"/"},{text:"Hoja de Tiempo",active:!0}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"image",label:"Imagen",sortable:!1},{key:"name",label:"Nombre",sortable:!0},{key:"rol",label:"Rol",sortable:!0},{key:"start_hour",label:"Hora inicio",sortable:!0},{key:"end_hour",label:"Hora final",sortable:!0},{key:"date",label:"Fecha",sortable:!0}]}},computed:{rows:function(){return this.tableData.length}},mounted:function(){this.totalRows=this.items.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},hideModal:function(t){this.showmodal=!1}}},d=c,p=a("2877"),m=Object(p["a"])(d,s,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-4db6480c-legacy.31230f21.js.map