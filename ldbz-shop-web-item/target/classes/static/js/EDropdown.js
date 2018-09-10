/*!Name: EDropdown.js
 * Date: 2017-2-14 17:14:16 */
!function(t,e,s){"use strict";function i(e,s){this.$el=e,this.settings=t.extend({},l,s),this._defaults=l,this._name=n,this._version=o,this.init()}var n="EDropdown",o="@VERSION",h=function(){},l={event:"mouseenter",trigger:null,current:"hover",autoClose:!1,delay:100,close:"[data-close]",disable:"[data-disable]",head:'[data-drop="head"]',content:null,lazyload:null,onOpen:h,onClose:h,onTrigger:h};i.prototype={init:function(){this.$el.attr("data-role","drop"),this.isMouseEvt=/mouse/.test(this.settings.event),this.timer=null,this.settings.debug&&console.log("click"===this.settings.event&&!this.settings.autoClose),"click"!==this.settings.event||this.settings.autoClose||(this.settings.trigger=this.$el.find(this.settings.head)),this.$triggers=this.settings.trigger?this.$el.find(this.settings.trigger):this.$el,this.bindEvent()},bindEvent:function(){var e=this,i="mouseenter",o="mouseleave";if(this.isMouseEvt){if(this.$triggers.each(function(){var s=t(this);s.unbind(i).bind(i,function(){e.handleEvent(t(this),!1)}).bind(o,function(){e.handleEvent(t(this),!0)})}),this.settings.content){var h=[this.settings.event,n,t.fn[n+"_guid"]].join(".");t(s).undelegate(h).delegate(this.settings.content,h,function(){clearTimeout(e.timer)}),t(s).undelegate(o).delegate(this.settings.content,o,function(){e.handleEvent(t(this),t(this).data("open"))})}}else this.$triggers.unbind("click").bind("click",function(){var s=t(this),i=s.attr("data-role")?s:s.parents('[data-role="drop"]').eq(0);e.trigger(i,!!i.data("open"))}),this.$el.delegate(this.settings.close,"click",function(){e.close()})},handleEvent:function(e,s){return e.attr("data-disable")?!1:(this.isMouseEvt||(this.settings.delay=0),this.settings.content&&(1===t(this.settings.content).length&&1===this.$el.length||console.log("\u300c"+n+"\u300d Content & jQuery element should be juse select only one element.")),this.isOpen=!s,void this.delay(e,s))},delay:function(t,e){var s=this;clearTimeout(this.timer),this.timer=setTimeout(function(){s.trigger(t,e)},this.settings.delay)},trigger:function(t,e){this.isOpen=e,e?this.close(t):this.open(t),this.settings.lazyload&&this.loadImages(this.$el),this.settings.onTrigger.call(this,t)},loadImages:function(e){var s=this.settings.lazyload,i=e.find("["+s+"]");i.each(function(){var e=t(this).attr(s);e&&t(this).attr("src",e).removeAttr(s)})},open:function(e){e=e||this.$el,e.addClass(this.settings.current).data("open",!0),this.settings.content&&t(this.settings.content).show(),this.settings.onOpen.call(this,e)},close:function(e){e=e||this.$el,e.removeClass(this.settings.current).removeData("open"),this.settings.content&&t(this.settings.content).hide(),this.settings.onClose.call(this,e)}},t.fn[n+"_guid"]=0,t.fn[n]=function(e){return this.length||"undefined"==typeof console?this.each(function(){t(this).data("Eguid",t.fn[n+"_guid"]++);var s=new i(t(this),e);t(this).data(n)||t(this).data(n,s)}):(console.log("\u300c"+n+"\u300d The elements["+this.selector+"] you passed is empty."),this)}}(jQuery,window,document);