(function(t){function e(e){for(var r,s,c=e[0],a=e[1],l=e[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"25f7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Resizable",{attrs:{width:t.width},on:{resize:t.handleResize},scopedSlots:t._u([{key:"default",fn:function(){return[n("Editor",{attrs:{size:t.$store.state.editor.size,scroll:t.$store.state.editor.scroll,width:t.width,selection:t.$store.state.editor.selection}})]},proxy:!0},{key:"fixed",fn:function(){return[n("Scroller",{attrs:{scroll:t.$store.state.editor.scroll}},[n("BSMap",{attrs:{content:t.$store.state.editor.content,size:t.$store.state.editor.size,width:t.width}})],1)]},proxy:!0}])})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resizable",class:{resizing:t.resizing},on:{mousemove:t.onResizeMove,mouseup:t.onResizeEnd}},[n("div",{staticClass:"main"},[t._t("default")],2),n("div",{staticClass:"resizer",on:{mousedown:t.onResizeStart}}),n("div",{style:{width:(t.width||200)+"px"}},[t._t("fixed")],2)])},c=[],a=(n("a9e3"),{name:"Resizable",props:{width:Number},data:function(){return{resizing:!1,clientX:0}},methods:{onResizeStart:function(t){this.resizing=!0,this.clientX=t.clientX,this.$emit("resizeStart")},onResizeMove:function(t){this.resizing&&(this.$emit("resize",this.width-(t.clientX-this.clientX)),this.clientX=t.clientX)},onResizeEnd:function(){this.resizing&&(this.resizing=!1,this.$emit("resizeEnd"))}}}),l=a,u=(n("d058"),n("2877")),f=Object(u["a"])(l,s,c,!1,null,null,null),d=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroller",on:{scroll:t.onScroll}},[t._t("default")],2)},p=[],m={name:"Scroller",props:{scroll:Number},watch:{scroll:function(t){this.$el.scrollTop=t}},methods:{onScroll:function(){this.$store.commit("setScroll",this.$el.scrollTop)}}},b=m,g=(n("bc88"),Object(u["a"])(b,h,p,!1,null,null,null)),v=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bs-map",style:{lineHeight:t.size+"px"}},t._l(t.rows,(function(e,r){return n("BSRow",{key:r,attrs:{content:e,cols:t.cols,size:t.size,width:t.width,row:r}})})),1)},x=[],z=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bs-row"},[n("div",{staticClass:"cells",style:{flexBasis:t.iconWidth+"px"}},t._l(t.cells,(function(e,r){var i=e.cell,o=e.offset;return n("BSCell",{key:r,staticClass:"selection",class:{focused:t.isFocused(t.row,o,i.length)},attrs:{content:i,size:t.size,row:t.row,offset:o}})})),1),n("div",{staticClass:"texts",style:{maxWidth:t.textMaxWidth+"px"}},t._l(t.texts,(function(e,r){var i=e.text,o=e.offset,s=e.align;return n("BSText",{key:r,staticClass:"selection",class:{focused:t.isFocused(t.row,o,i.length)},attrs:{content:i,align:s,row:t.row,offset:o}})})),1)])}),S=[],O=(n("4de4"),n("d81d"),n("fb6a"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bs-cell",style:{width:t.width+"px",height:t.size+"px"},attrs:{title:t.content},on:{click:t.handleClick}},t._l(t.icons,(function(e,r){return n("BSIcon",{key:r,attrs:{content:e,size:t.size}})})),1)}),y=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.label?n("div",{staticClass:"bs-label",style:{width:t.size+"px",height:t.size+"px",fontSize:t.size-8+"px"},attrs:{"data-bold":t.label.params.b||t.label.params.bold,"data-align":(t.label.params.align||"").toUpperCase()}},[n("span",[t._v(t._s(t.label.text))])]):n("img",{staticClass:"bs-icon",style:{width:t.width+"px",height:t.size+"px"},attrs:{src:t.content?t.$store.state.icon.data[t.content]:null}})},_=[],$=(n("4d63"),n("25f0"),n("466d"),n("b383")),R=n.n($);function C(t){return R.a.parse(t,",","=",{decodeURIComponent:function(t){return t}})}var k={name:"BSIcon",props:{content:String,size:Number},watch:{content:function(t){this.label||this.$store.dispatch("fetch",t)}},computed:{width:function(){if(!this.content)return this.size;var t=this.$store.state.icon.ratio[this.content]||1;return this.size*t},label:function(){if(this.content&&this.content.match(/^\*([^_]+)(__(.+)$)?/)){var t=RegExp.$1,e=C(RegExp.$3||"");return{text:t,params:e}}return null}},created:function(){this.content&&!this.label&&this.$store.dispatch("fetch",this.content)}},E=k,B=(n("ca0f"),Object(u["a"])(E,j,_,!1,null,null,null)),T=B.exports,N={name:"BSCell",components:{BSIcon:T},props:{content:String,size:Number,row:Number,offset:Number},computed:{icons:function(){return this.content?this.content.split("!~").map((function(t){return t.trim()})).filter((function(t){return!!t})):[]},width:function(){if(0==this.icons.length)return this.size;var t=this.icons[0],e=this.$store.state.icon.ratio[t]||1;return this.size*e}},methods:{handleClick:function(){this.$store.commit("setSelection",{row:this.row,offset:this.offset,length:this.content.length,from:"preview"})}}},M=N,P=(n("7eca"),Object(u["a"])(M,O,y,!1,null,null,null)),D=P.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bs-text",class:"text-"+t.align,attrs:{title:t.content},on:{click:t.handleClick}},[t._v(t._s(t.content))])},L=[],W={name:"BSText",props:{content:String,align:Number,row:Number,offset:Number},methods:{handleClick:function(){this.$store.commit("setSelection",{row:this.row,offset:this.offset,length:this.content.length,from:"preview"})}}},X=W,H=(n("8481"),Object(u["a"])(X,I,L,!1,null,null,null)),A=H.exports,F={name:"BSRow",components:{BSCell:D,BSText:A},props:{content:String,cols:Number,size:Number,width:Number,row:Number},computed:{parts:function(){var t=0;return this.content.split("~~").map((function(e){var n=t;return t+=e.length+2,{part:e,offset:n}}))},cells:function(){var t=0;return this.parts[0].part.split("\\").map((function(e){var n=t;return t+=e.length+1,{cell:e,offset:n}}))},texts:function(){return this.parts.slice(1).map((function(t,e){var n=t.part,r=t.offset;return{text:n,offset:r,align:e+1}})).filter((function(t){var e=t.text;return e&&e.trim()}))},iconWidth:function(){return this.size*this.cols},textMaxWidth:function(){return this.width-this.iconWidth}},methods:{isFocused:function(t,e,n){var r=this.$store.state.editor.selection;return null!=r&&r.row==t&&r.offset>=e&&r.offset<=e+n}}},U=F,q=(n("f5fe"),Object(u["a"])(U,z,S,!1,null,null,null)),J=q.exports,V={name:"BSMap",components:{BSRow:J},props:{content:String,size:Number,width:Number},computed:{rows:function(){return this.content.split("\n")},cols:function(){var t=0,e=!0,n=!1,r=void 0;try{for(var i,o=this.rows[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value,c=Math.max(t,s.split("\\").length);c>t&&(t=c)}}catch(a){n=!0,r=a}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}return t}}},Y=V,G=Object(u["a"])(Y,w,x,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AceEditor",{staticClass:"editor",style:{lineHeight:t.size+"px"},attrs:{mode:"rdt",theme:"tomorrow",width:"100%",height:"100vh",name:t.name,value:t.$store.state.editor.content,onBeforeLoad:t.onBeforeLoad,onChange:t.onChange,onScroll:t.onScroll,onSelectionChange:t.onSelectionChange,editorProps:{$blockScrolling:1/0},setOptions:{enableLiveAutocompletion:[{getCompletions:t.getCompletions,getDocTooltip:t.getDocTooltip}]}}})},Z=[],tt=(n("b0c0"),n("b64b"),n("061c")),et=n.n(tt),nt=(n("e2ef"),n("99af"),n("d4ec")),rt=n("99de"),it=n("7e84"),ot=n("257e"),st=n("262e"),ct=n("ade3");et.a.define("ace/mode/rdt_highlight_rules",["require","exports","ace/mode/text_highlight_rules"],(function(t,e){var n=t("./text_highlight_rules"),r=n.TextHighlightRules,i=function(t){function e(){var t;return Object(nt["a"])(this,e),t=Object(rt["a"])(this,Object(it["a"])(e).call(this)),Object(ct["a"])(Object(ot["a"])(t),"$rules",{start:[{token:"keyword.operator.rdt",regex:"(?:\\\\|!~)"},{token:"punctuation.definition.string",regex:"(?:~~.*$)"},{token:"keyword.control.statement.rdt",regex:"(?:[^\\\\(~~)(!~)]+)"}]}),t.normalizeRules(),t}return Object(st["a"])(e,t),e}(r);Object(ct["a"])(i,"metaData",{name:"RDT File",scopeName:"source.rdt",fileTypes:["rdt"]}),e.RDTHighlightRules=i})),et.a.define("ace/mode/rdt",["require","exports","ace/mode/text","ace/mode/rdt_highlight_rules"],(function(t,e){var n=t("./text"),r=n.Mode,i=t("./rdt_highlight_rules"),o=i.RDTHighlightRules,s=function(t){function e(){var t,n;Object(nt["a"])(this,e);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=Object(rt["a"])(this,(t=Object(it["a"])(e)).call.apply(t,[this].concat(i))),Object(ct["a"])(Object(ot["a"])(n),"$id","ace/mode/rdt"),Object(ct["a"])(Object(ot["a"])(n),"HighlightRules",o),n}return Object(st["a"])(e,t),e}(r);e.Mode=s}));var at=n("97d6"),lt={name:"Editor",components:{AceEditor:at["Ace"]},props:{size:Number,scroll:Number,width:Number,selection:Object},data:function(){return{name:"rdt-editor"}},watch:{width:function(){this.handleResize()},scroll:function(t){this.renderer.scrollToY(t)},selection:function(t){var e=t.row,n=t.offset,r=t.length,i=t.from;if("editor"!=i){var o=this.editor.getSession(),s=o.selection;s.setRange({start:{row:e,column:n},end:{row:e,column:n+r}}),this.renderer.scrollToX(0),this.renderer.scrollSelectionIntoView(),this.editor.focus()}}},methods:{onBeforeLoad:function(){this.editor=et.a.edit(this.name),this.renderer=this.editor.renderer},onChange:function(t){this.$store.commit("save",t)},onScroll:function(){this.$store.commit("setScroll",this.renderer.scrollTop)},onSelectionChange:function(t){var e=t.getRange(),n=e.start;this.$store.commit("setSelection",{row:n.row,offset:n.column,length:0,from:"editor"})},handleResize:function(){this.editor.resize()},getCompletions:function(t,e,n,r,i){var o=this.$store.state.icon.data;i(null,Object.keys(o).filter((function(t){return!!o[t]})).map((function(t){return{value:t}})))},getDocTooltip:function(t){var e=this.$store.state.icon.data;t.docHTML='<img src="'.concat(e[t.value],'" class="preview" />')}},mounted:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},ut=lt,ft=(n("b16a"),Object(u["a"])(ut,Q,Z,!1,null,null,null)),dt=ft.exports,ht={name:"app",components:{Resizable:d,Scroller:v,BSMap:K,Editor:dt},computed:{width:function(){var t=window.innerWidth-200,e=200,n=this.$store.state.editor.width;return Math.max(Math.min(n,t),e)}},methods:{handleResize:function(t){this.$store.commit("setWidth",t)}}},pt=ht,mt=(n("034f"),Object(u["a"])(pt,i,o,!1,null,null,null)),bt=mt.exports,gt=n("2f62"),vt=n("517b"),wt=Object(vt["a"])(localStorage.setItem,1e3).bind(localStorage),xt={state:{size:parseInt(localStorage.getItem("size"))||20,width:parseInt(localStorage.getItem("width"))||200,content:localStorage.getItem("content")||"",scroll:0,selection:null},mutations:{setSize:function(t,e){t.size=e,wt("size",e)},setWidth:function(t,e){t.width=e,wt("width",e)},setScroll:function(t,e){t.scroll=e},setSelection:function(t,e){t.selection=e},save:function(t,e){t.content=e,wt("content",e)}}},zt=(n("4160"),n("e439"),n("dbb4"),n("159b"),n("2b3d"),n("96cf"),n("1da1")),St=n("6821"),Ot=n.n(St);function yt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(n),!0).forEach((function(e){Object(ct["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _t="https://upload.wikimedia.org/wikipedia/commons";function $t(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){return e(r)},r.onerror=function(t){return n(t)},r.src=t}))}var Rt={state:{data:{},ratio:{}},mutations:{fetching:function(t,e){var n=e.name;t.data=jt({},t.data,Object(ct["a"])({},n,null))},fetched:function(t,e){var n=e.name,r=e.data;t.data=jt({},t.data,Object(ct["a"])({},n,r))},failed:function(t,e){var n=e.name;t.data=jt({},t.data,Object(ct["a"])({},n,null))},resolved:function(t,e){var n=e.name,r=e.ratio;t.ratio=jt({},t.ratio,Object(ct["a"])({},n,r))}},actions:{fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=Object(zt["a"])(regeneratorRuntime.mark((function t(e,n){var r,i,o,s,c,a,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,i=e.state,"undefined"==typeof i.data[n]){t.next=3;break}return t.abrupt("return");case 3:return r("fetching",{name:n}),t.prev=4,o="BSicon_".concat(n,".svg"),s=Ot()(o),t.next=9,fetch("".concat(_t,"/").concat(s.substring(0,1),"/").concat(s.substring(0,2),"/").concat(o));case 9:if(c=t.sent,!(c.status>=200&&c.status<300)){t.next=24;break}return t.t0=URL,t.next=14,c.blob();case 14:return t.t1=t.sent,a=t.t0.createObjectURL.call(t.t0,t.t1),r("fetched",{name:n,data:a}),t.next=19,$t(a);case 19:l=t.sent,u=l.width/l.height,r("resolved",{name:n,ratio:u}),t.next=25;break;case 24:r("failed",{name:n});case 25:t.next=31;break;case 27:t.prev=27,t.t2=t["catch"](4),console.error(t.t2.stack),r("failed",{name:n});case 31:case"end":return t.stop()}}),t,null,[[4,27]])})));return function(e,n){return t.apply(this,arguments)}}())}};r["a"].use(gt["a"]);var Ct=new gt["a"].Store({modules:{editor:xt,icon:Rt}});r["a"].config.productionTip=!1,new r["a"]({store:Ct,render:function(t){return t(bt)}}).$mount("#app")},"62cf":function(t,e,n){},"7eca":function(t,e,n){"use strict";var r=n("b9e1"),i=n.n(r);i.a},8481:function(t,e,n){"use strict";var r=n("93c4"),i=n.n(r);i.a},"85ec":function(t,e,n){},"93c4":function(t,e,n){},"985d":function(t,e,n){},b16a:function(t,e,n){"use strict";var r=n("25f7"),i=n.n(r);i.a},b9e1:function(t,e,n){},bc88:function(t,e,n){"use strict";var r=n("f860"),i=n.n(r);i.a},ca0f:function(t,e,n){"use strict";var r=n("62cf"),i=n.n(r);i.a},d058:function(t,e,n){"use strict";var r=n("985d"),i=n.n(r);i.a},d1cb:function(t,e,n){},f5fe:function(t,e,n){"use strict";var r=n("d1cb"),i=n.n(r);i.a},f860:function(t,e,n){}});
//# sourceMappingURL=app.53f0aafb.js.map