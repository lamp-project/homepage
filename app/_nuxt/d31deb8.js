(window.webpackJsonp=window.webpackJsonp||[]).push([[18,11],{569:function(e,t,r){var content=r(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(117).default)("53164e0a",content,!0,{sourceMap:!1})},570:function(e,t,r){"use strict";r(569)},571:function(e,t,r){var n=r(116)(!1);n.push([e.i,".store-item{margin-right:12px;display:inline-block}.store-item img{margin:6px;height:300px}",""]),e.exports=n},580:function(e,t,r){"use strict";r.r(t);var n=r(25),img=r(97),o=n.default.extend({components:{BImg:img.a},props:{book:{type:Object,default:function(){return{}}},level:{type:String,default:"A1"}},computed:{},methods:{}}),l=(r(570),r(86)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"store-item",attrs:{href:"./book?id="+e.book.id}},[r("b-img",{attrs:{rounded:"",thumbnail:"",src:e.book.cover.medium,alt:e.book.title}}),e._v(" "),r("br")],1)}),[],!1,null,null,null);t.default=component.exports},602:function(e,t,r){var content=r(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(117).default)("4ea7cdd1",content,!0,{sourceMap:!1})},621:function(e,t,r){"use strict";r(602)},622:function(e,t,r){var n=r(116)(!1);n.push([e.i,".horizontal-list[data-v-fc991494]{overflow-x:scroll;white-space:nowrap}.level-header[data-v-fc991494]{display:flex;justify-content:space-between;align-items:center}",""]),e.exports=n},630:function(e,t,r){"use strict";r.r(t);var n=r(52),o=(r(109),r(25).default.extend({middleware:["auth"],asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("book/getTopTenOfLevels");case 3:return n=t.sent,t.abrupt("return",{topTenOfLevels:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{levels:["A1","A2","B1","B2","C1","C2"]}}})),l=o,c=(r(621),r(86)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("hr"),e._v(" "),r("br"),e._v(" "),e._l(e.levels,(function(t){return r("div",{key:t},[r("div",{staticClass:"level-header"},[r("h3",[e._v("Level "+e._s(t))]),e._v(" "),r("a",{attrs:{href:"./books?level="+t}},[e._v("More")])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"horizontal-list"},e._l(e.topTenOfLevels[t],(function(e){return r("StoreItem",{key:e.id,attrs:{book:e}})})),1),e._v(" "),r("br")])}))],2)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[r("b",[e._v("Book Store")])])}],!1,null,"fc991494",null);t.default=component.exports;installComponents(component,{StoreItem:r(580).default})}}]);