(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81750a5c"],{"272f":function(t,e,s){"use strict";var o=s("2ef0"),n=s("1fba");e["a"]={props:{betterScrollOptions:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{BS:null}},mounted:function(){this.scrollInit()},beforeDestroy:function(){this.scrollDestroy()},methods:{scrollInit:function(){var t=this;this.BS=new n["a"](this.$refs.wrapper,Object(o["merge"])({mouseWheel:!0,click:!0,scrollbar:{fade:!0,interactive:!1}},this.betterScrollOptions)),this.BS.on("scroll",(function(e){var s=e.x,o=e.y;return t.$emit("scroll",{x:-s,y:-o})}))},scrollDestroy:function(){try{this.BS.destroy()}catch(t){delete this.BS,this.BS=null}},scrollToTop:function(){this.BS&&this.BS.scrollTo(0,0,300)},scroll:function(){this.BS&&this.$emit("scroll",{x:-this.BS.x,y:-this.BS.y})}}}},bbb2:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d2-container-ghost-bs"},[t.$slots.header?s("div",{ref:"header",staticClass:"d2-container-ghost-bs__header"},[t._t("header")],2):t._e(),s("div",{ref:"wrapper",staticClass:"d2-container-ghost-bs__body"},[s("div",[t._t("default")],2)]),t.$slots.footer?s("div",{ref:"footer",staticClass:"d2-container-ghost-bs__footer"},[t._t("footer")],2):t._e()])},n=[],r=s("272f"),i={name:"d2-container-card-bs",mixins:[r["a"]]},c=i,l=s("2877"),a=function(t){t.options.__source="src/components/d2-container/components/d2-container-ghost-bs.vue"},u=a,f=Object(l["a"])(c,o,n,!1,null,null,null);"function"===typeof u&&u(f);e["default"]=f.exports}}]);