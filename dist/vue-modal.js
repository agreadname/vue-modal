/**
 * vue-modal v1.0.0
 * (c) 2017 赵兵
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueModal=t()}(this,function(){"use strict";var e={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal-mask"},on:{"after-leave":e.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"modal-mask",class:{"modal-transparent":!e.backdrop},attrs:{tabindex:"999"},on:{click:e.clickBackdrop}},[n("transition",{attrs:{name:"modal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)])],1)])},staticRenderFns:[],data:function(){return{timer:null}},props:{value:{type:Boolean,default:!1},timeout:{type:Number},backdrop:{type:Boolean,default:!0}},watch:{value:function(e){e?(this.$emit("show"),this.showHandler()):this.$emit("hide")}},methods:{close:function(){this.$emit("input",!1)},showHandler:function(){var e=this;clearTimeout(this.timer),this.$nextTick(function(){var t=e.$el.querySelector("input");t?t.focus():e.$el.focus(),e.timeout&&(e.timer=setTimeout(function(){e.close()},e.timeout))})},afterLeave:function(){this.$emit("afterLeave")},clickBackdrop:function(){this.close()}},created:function(){this.showHandler()}},t={component:e};return t.install=function(t){t.component("vue-modal",e)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(t),t});
