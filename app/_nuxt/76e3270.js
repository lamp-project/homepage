(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{574:function(t,e,n){var content=n(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(117).default)("112d43d7",content,!0,{sourceMap:!1})},581:function(t,e,n){"use strict";n.r(e);var o=n(25),l=n(142),r=o.default.extend({components:{BModal:l.a},data:function(){return{fontSize:localStorage.getItem("font-size")||"24",fontSizeOptions:[{value:"18",text:"Small"},{value:"24",text:"Medium"},{value:"32",text:"Large"}]}},watch:{fontSize:function(t){this.$emit("font-size-changed",t)}}}),c=n(86),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"styles-modal",size:"sm",title:"View Styles",centered:""}},[n("h6",[t._v("Font Size:")]),t._v(" "),n("b-form-select",{attrs:{options:t.fontSizeOptions},model:{value:t.fontSize,callback:function(e){t.fontSize=e},expression:"fontSize"}})],1)}),[],!1,null,null,null);e.default=component.exports},586:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9Ii03OC41IDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiA+PHRpdGxlPmxlZnQ8L3RpdGxlPjxwYXRoIGQ9Ik0yNTcgNjRMMjkxIDk4IDEyOCAyNjIgMjkxIDQyNiAyNTcgNDYwIDYxIDI2MiAyNTcgNjRaIiAvPjwvc3ZnPgo="},587:function(t,e,n){t.exports=n.p+"img/gear.b779e5c.svg"},588:function(t,e,n){"use strict";n(574)},589:function(t,e,n){var o=n(116)(!1);o.push([t.i,".top-bar[data-v-2104d1cd]{background-color:unset!important}",""]),t.exports=o},606:function(t,e,n){"use strict";n.r(e);var o=n(25),l=n(198),r=n(200),c=n(205),d=o.default.extend({components:{BNavbar:l.a,BNavbarNav:r.a,BNavItem:c.a},props:{book:{type:Object,default:void 0}}}),f=(n(588),n(86)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-navbar",{staticClass:"top-bar",attrs:{variant:"light",fixed:"top"}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{to:"/"}},[o("img",{staticClass:"icon faded",attrs:{src:n(586),alt:""}})])],1),t._v(" "),o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.styles-modal",modifiers:{"styles-modal":!0}}],attrs:{right:""}},[o("img",{staticClass:"icon faded",attrs:{src:n(587),alt:""}})])],1),t._v(" "),o("ReaderStylesModal",{on:{"font-size-changed":function(e){return t.$emit("font-size-changed",e)}}})],1)}),[],!1,null,"2104d1cd",null);e.default=component.exports;installComponents(component,{ReaderStylesModal:n(581).default})}}]);