(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d8e3bc2"],{2579:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row page-title"},[a("div",{staticClass:"col-md-12"},[a("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:t.items}}),a("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},e=[],l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},n=l,o=a("2877"),c=Object(o["a"])(n,i,e,!1,null,null,null);s["a"]=c.exports},e2f4:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("Layout",[i("PageHeader",{staticClass:"d-print-none",attrs:{title:t.title,items:t.items}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"clearfix"},[i("div",{staticClass:"float-sm-right"},[i("img",{attrs:{src:a("7ea1"),alt:"",height:"48"}}),i("address",{staticClass:"pl-2 mt-2"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.address.line_1)+"\n\t\t\t\t\t\t\t\t"),i("br"),t._v(t._s(t.invoiceDetail.address.city)+",\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.address.state)+"\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.address.zip)+"\n\t\t\t\t\t\t\t\t"),i("br"),i("abbr",{attrs:{title:"Phone"}},[t._v("P:")]),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.address.phone)+"\n\t\t\t\t\t\t\t")])]),i("div",{staticClass:"float-sm-left"},[i("h4",{staticClass:"m-0 d-print-none"},[t._v("Factura")]),i("dl",{staticClass:"row mb-2 mt-3"},[i("dt",{staticClass:"col-sm-3 font-weight-normal"},[t._v("Número Factura :")]),i("dd",{staticClass:"col-sm-9 font-weight-normal"},[t._v(t._s(t.invoiceDetail.invoice_id))]),i("dt",{staticClass:"col-sm-3 font-weight-normal"},[t._v("Fecha Factura :")]),i("dd",{staticClass:"col-sm-9 font-weight-normal"},[t._v(t._s(t.invoiceDetail.invoice_date))]),i("dt",{staticClass:"col-sm-3 font-weight-normal"},[t._v("Fecha Vencimiento :")]),i("dd",{staticClass:"col-sm-9 font-weight-normal"},[t._v(t._s(t.invoiceDetail.due_date))])])])]),i("div",{staticClass:"row mt-4"},[i("div",{staticClass:"col-md-6"},[i("h6",{staticClass:"font-weight-normal"},[t._v("Facturada por:")]),i("h6",{staticClass:"font-size-16"},[t._v(t._s(t.invoiceDetail.customer))]),i("address",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.billing_address.line_1)+"\n\t\t\t\t\t\t\t\t"),i("br"),t._v(t._s(t.invoiceDetail.billing_address.city)+",\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.billing_address.state)+"\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.billing_address.zip)+"\n\t\t\t\t\t\t\t\t"),i("br"),i("abbr",{attrs:{title:"Phone"}},[t._v("P:")]),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.billing_address.phone)+"\n\t\t\t\t\t\t\t")])]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"text-md-right"},[i("h6",{staticClass:"font-weight-normal"},[t._v("Total")]),i("h2",[t._v(t._s(t.invoiceDetail.total))])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table mt-4 table-centered"},[i("thead",[i("tr",[i("th",[t._v("#")]),i("th",[t._v("Producto")]),i("th",{staticStyle:{width:"10%"}},[t._v("Horas")]),i("th",{staticStyle:{width:"10%"}},[t._v("Tarifa Horas")]),i("th",{staticClass:"text-right",staticStyle:{width:"10%"}},[t._v("Total")])])]),i("tbody",t._l(t.invoiceDetail.items,(function(s,a){return i("tr",{key:"item-"+a},[i("td",[t._v(t._s(a+1))]),i("td",[i("h5",{staticClass:"font-size-16 mt-0 mb-2"},[t._v(t._s(s.name))]),i("p",{staticClass:"text-muted mb-0"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.description)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),i("td",[t._v(t._s(s.qty))]),i("td",[t._v(t._s(s.unit_cost))]),i("td",{staticClass:"text-right"},[t._v(t._s(s.total))])])})),0)])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"clearfix pt-5"},[i("h6",{staticClass:"text-muted"},[t._v("Notes:")]),i("small",{staticClass:"text-muted"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.invoiceDetail.notes)+"\n\t\t\t\t\t\t\t\t")])])]),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"float-right mt-4"},[i("p",[i("span",{staticClass:"font-weight-medium"},[t._v("Sub-total:")]),i("span",{staticClass:"float-right"},[t._v(t._s(t.invoiceDetail.sub_total))])]),i("p",[i("span",{staticClass:"font-weight-medium"},[t._v("Descuento (10%):")]),i("span",{staticClass:"float-right"},[t._v("    "+t._s(t.invoiceDetail.discount))])]),i("h3",[t._v(t._s(t.invoiceDetail.total)+" RD")])]),i("div",{staticClass:"clearfix"})])]),i("div",{staticClass:"mt-5 mb-1"},[i("div",{staticClass:"text-right d-print-none"},[i("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:window.print()"}},[i("i",{staticClass:"uil uil-print mr-1"}),t._v(" Imprimir\n\t\t\t\t\t\t\t")]),i("a",{staticClass:"btn btn-info ml-1",attrs:{href:"javascript: void(0);"}},[t._v("Enviar")])])])])])])])],1)},e=[],l=(a("551c"),a("c2a4")),n=a("444f"),o=a("2579"),c={page:{title:"Invoice",meta:[{name:"description",content:l.description}]},components:{Layout:n["a"],PageHeader:o["a"]},data:function(){return{title:"Invoice",items:[{text:"Shreyu",href:"/"},{text:"Pages",href:"/"},{text:"Invoice",active:!0}],invoiceDetail:{customer:"Greeva Navadiya",notes:"Todas las cuentas deben pagarse dentro de los 7 días posteriores a la recepción de la factura. Para pagar con cheque o tarjeta de crédito o pago directo en línea. Si la cuenta no se paga dentro de los 7 días, los detalles de los créditos proporcionados como confirmación del trabajo realizado se cobrarán la tarifa acordada indicada anteriormente.",invoice_date:"Jul 17, 2019",due_date:"Jul 27, 2019",invoice_id:"#sh1001",address:{line_1:"795 Folsom Ave, Suite 600",city:"San Francisco",state:"CA",zip:94107,phone:"(123) 456-7890"},billing_address:{line_1:"795 Folsom Ave, Suite 600",city:"San Francisco",state:"CA",zip:94107,phone:"(123) 456-7890"},items:[{id:1,name:"Web Design",description:"2 Pages static website - my website",qty:22,unit_cost:"$30.00",total:"$660.00"},{id:2,name:"Software Development",description:"Invoice editor software - AB'c Software",qty:112.5,unit_cost:"$35.00",total:"$3937.50"}],sub_total:"$4597.50",discount:"$459.75",total:"$4137.75"}}}},r=c,d=a("2877"),v=Object(d["a"])(r,i,e,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-4d8e3bc2-legacy.55bf4815.js.map