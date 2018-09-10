/* product-search/1.0.2 selector.js Date:2016-12-06 18:22:05 */
define("js/selector.js",["js/responsive.js"],function(require,a,b){var c=require("js/responsive.js");var d={};d.selectedEv="",d.selectedAttr=[],d.getAttrValue=function(a,b){var c=new RegExp("(^|\\?|&)"+a+"=([^&#]*)(\\s|&|$)","i");var d="";return c.test(b)&&(d=c.exec(b),d=d[2]),d},d.addAttr=function(a){var a=a||"";var b=this.getAttrValue("ev",a);var c=b.split("%40");return b=c.splice(c.length-2,1).join(""),this.selectedEv=b.split("_")[0],this.selectedAttr.push(b.split("_")[1]),this.selectedAttr.length},d.removeAttr=function(a){var b=this.getAttrValue("ev",a);var c=b.split("%40");b=c.splice(c.length-2,1).join("");var d=b.split("_")[1];for(var e in this.selectedAttr)this.selectedAttr[e]===d&&this.selectedAttr.splice(e,1);return this.selectedAttr.length},d.getAttrUrl=function(){var a=window.SEARCH||{};var b=a.base_url||"";var c=window.location.pathname+"?"+b.replace(/(^|\\?|&)ev=([^&#]*)/g,"");return c+"&ev="+this.getAttrValue("ev",b)+this.selectedEv+"_"+this.selectedAttr.join("%7C%7C")+"%40#J_searchWrap"},d.clean=function(){this.selectedEv="",this.selectedAttr=[]};var e={};e.init=function(){var a=this;this.wrap=$("#J_selector"),this.setMoreVisable(),this.fixSelectorStruct(),this.setMoreToggle(),this.setMultipleToggle(),this.setMultipleSelect(),this.setBrandWordsTab(),this.setBrandWordsSearch(),this.selectorSenior(),c.bindEvent(function(){a.setMoreVisable()},100)},e.resetBrandArea=function(){this.wrap.find(".s-brand .J_valueList").scrollTop(0).find("li").css("display","block"),this.wrap.find(".J_brandLetter").find("li:first").addClass("curr").siblings().removeClass("curr")},e.setMoreToggle=function(){var a=this;var b=a.wrap.find(".J_extMore");b.bind("click",function(b){var c=$(this).parents(".J_selectorLine");var d=c.find(".J_valueList");var e=50;if($(this).hasClass("opened"))c.find(".sl-wrap").removeClass("extend"),$(this).html("\u66f4\u591a<i></i>").removeClass("opened"),c.hasClass("s-brand")&&(a.resetBrandArea(),e=12),d.scrollTop(0);else if(c.find(".sl-wrap").addClass("extend"),$(this).html("\u6536\u8d77<i></i>").addClass("opened"),c.hasClass("s-brand")&&(e=11),c.hasClass("s-brand")&&$(this).attr("data-url")){var f={};d.find("li").each(function(){f[this.id]=1}),$.post($(this).attr("data-url"),f,function(a){var b;a&&(b=$(a),$(".J_brandLetter").html(b.filter(".J_letters").find("li")),c.find(".J_valueList").append(b.filter(".J_brands").find("li")),b.filter("script").appendTo("body"))}),$(this).removeAttr("data-url")}b.hasOwnProperty("originalEvent")&&searchlog(1,0,0,e),$.isFunction(SEARCH.sync_iframe_height)&&SEARCH.sync_iframe_height()})},e.setMultipleToggle=function(){var a=this;var b=a.wrap.find(".J_extMultiple");var c=a.wrap.find(".J_btnsConfirm");var e=a.wrap.find(".J_btnsCancel");b.bind("click",function(b){var c=$(this).closest(".J_selectorLine");c.hasClass("s-brand")?c.find(".J_extMore").trigger("click"):$(".s-brand").find(".multiple").length&&a.resetBrandArea(),c.find(".sl-wrap").removeClass("extend").addClass("multiple"),c.siblings().find(".multiple").find(".J_btnsCancel,.J_tabCancel").trigger("click"),c.find(".sl-ext").hide(),b.hasOwnProperty("originalEvent")&&searchlog(1,0,0,24),$.isFunction(SEARCH.sync_iframe_height)&&SEARCH.sync_iframe_height()}),c.bind("click",function(){return $(this).hasClass("disabled")||(searchlog(1,0,0,25),window.location=d.getAttrUrl()),!1}),e.bind("click",function(b){var c=$(this).parents(".J_selectorLine");var e=c.find(".J_valueList");c.hasClass("s-brand")&&a.resetBrandArea(),c.find(".sl-wrap").removeClass("extend multiple").find(".J_extMore").html("\u66f4\u591a<i></i>").removeClass("opened"),c.find(".J_btnsConfirm").addClass("disabled"),c.find(".sl-ext").show(),c.find(".J_brandSelected").hide().find(".sl-v-list").html(""),d.clean(),e.scrollTop(0).find(".selected").removeClass("selected"),c.find(".J_extMultiple").html("\u591a\u9009<i></i>").removeClass("multiple_open"),b.hasOwnProperty("originalEvent")&&searchlog(1,0,0,24)})},e.setMultipleSelect=function(){var b=this.wrap.find(".J_brandSelected li a");var c=function(a,b,c){0>=a?(b.addClass("disabled"),c.hide()):(b.removeClass("disabled"),c.show())};this.wrap.delegate(".J_valueList li a","click",function(a){var b=$(this).parents(".J_selectorLine");var e=$(this).parent("li");var f=b.find(".J_brandSelected");var g=b.find(".multiple .J_btnsConfirm");if(g.length){a.preventDefault(),a.stopPropagation();var h=$(this).attr("href");var i=d.selectedAttr.length;if(e.hasClass("selected"))i=d.removeAttr(h),e.removeClass("selected"),f.length&&f.find('li[data-brand-id="'+e.attr("id")+'"]').remove();else if(i=d.addAttr(h),e.addClass("selected"),f.length){var j=e.clone(!1);j.attr("data-brand-id",j.attr("id")).removeAttr("id").find("img").remove(),f.find(".sl-v-list").append(j)}c(i,g,f)}}),b.live("click",function(a){var b=$(this).parents(".J_selectorLine");var e=$(this).parent("li");var f=b.find(".J_valueList");var g=b.find(".J_btnsConfirm");var h=b.find(".J_brandSelected");var i=$(this).attr("href");a.preventDefault(),a.stopPropagation(),attrLength=d.removeAttr(i),e.removeClass("selected"),f.find("#"+e.attr("data-brand-id")).removeClass("selected"),e.remove(),c(attrLength,g,h)})},e.fixSelectorStruct=function(){var a=this.wrap.find(".J_selectorLine");var b=this.wrap.find(".J_selectorLine.s-brand");$.browser.msie&&6==$.browser.version&&a.after('<span class="clr"></span>'),b.find(".J_valueList").hasClass("v-fixed")||(b.find(".J_brandLetter").remove(),b.find(".J_brandSearch").remove(),b.find(".J_brandSelected").remove())},e.setMoreVisable=function(){var a=this.wrap.find(".J_selectorLine").not("#J_selectorSenior");a.each(function(){var b=$(this).find(".J_valueList");var c=b.find("li");var d=b.width();var e=0;return"visible"==$(this).find(".J_extMore").css("visibility")?!0:(c.each(function(){return e+=$(this).outerWidth(!0),e>d?!1:void 0}),d>=e?$(this).find(".J_extMore").css("visibility","hidden"):$(this).find(".J_extMore").css("visibility","visible"),void((c.length<=3||"J_selectorPrice"===$(this).attr("id")||"J_selectorCategory"===$(this).attr("id"))&&$(this).find(".J_extMultiple").css("visibility","hidden")))})},e.setBrandWordsTab=function(){var a=this.wrap.find(".s-brand").find(".J_valueList");this.wrap.find(".J_brandLetter").delegate("li","mouseenter",function(){var c=$(this).attr("data-initial");"0"===c?a.find("li").css("display","block"):a.find("li").each(function(){$(this).attr("data-initial")===c?$(this).css("display","block"):$(this).css("display","none")}),$(this).addClass("curr").siblings().removeClass("curr")})},e.setBrandWordsSearch=function(){var a=this.wrap.find(".s-brand");var b=a.find(".J_brandSearch");var c=a.find(".J_valueList");var d=a.find(".J_brandLetter");var e=b.find(".input-txt");var f={className:"placehoder",text:e.attr("data-placehoder"),enable:function(){e.addClass(this.className).val(this.text)},disable:function(){e.removeClass(this.className).val("")}};f.enable(),e.bind("focus",function(){var b=$.trim($(this).val());b===f.text&&f.disable(),searchlog(1,0,0,49)}),e.bind("blur",function(){var b=$.trim($(this).val());0===b.length&&f.enable()}),e.bind("keyup",function(){var b=$.trim($(this).val());var e=SEARCH.brand_ids?SEARCH.brand_ids:"";var f={key:b,ids:e};d.find("li:first").addClass("curr").siblings().removeClass("curr"),0!==b.length?$.ajax({url:"//bsearch.jd.com/",data:f,dataType:"jsonp",jsonpCallback:"call"+parseInt(1e5*Math.random(),10),success:function(a){if("undefined"!=typeof a&&a.length>0){c.find("li").css("display","none");for(var b in a)c.find("#brand-"+a[b].id).css("display","block")}else c.find("li").css("display","none")}}):c.find("li").css("display","block")})},e.selectorSenior=function(){var a=$("#J_selectorSenior");var b=$(".trig-item",a);var c=$(".sl-tab-cont-item",a);this.seniorTab(a,b,c),c.each(function(){$(this).find(".J_valueList li").length<3&&$(this).find(".J_tabMultiple").css("visibility","hidden")}),a.delegate(".J_tabMultiple","click",function(d){var e;a.find(".multiple .J_tabCancel").trigger("click"),a.siblings().find(".multiple .J_btnsCancel").trigger("click"),e=c.index($(this).parents(".sl-tab-cont-item")),b.eq(e).addClass("multiple"),$(this).hide().parents(".sl-tab-cont-item").addClass("multiple"),d.hasOwnProperty("originalEvent")&&searchlog(1,0,0,24)}),a.delegate(".J_tabCancel","click",function(a){var e;var f=$(this).parents(".sl-tab-cont-item");d.clean(),e=c.index($(this).parents(".sl-tab-cont-item")),b.eq(e).removeClass("multiple"),f.removeClass("multiple"),f.find(".J_valueList li").removeClass("selected"),f.find(".J_btnsConfirm").addClass("disabled"),f.find(".J_tabMultiple").show(),a.hasOwnProperty("originalEvent")&&searchlog(1,0,0,24)})},e.seniorTab=function(a,b,c){var d=null;var e=null,f=null;a.delegate(".trig-item","mouseenter",function(){var a=$(this);var b=a.index();f&&d===b&&clearTimeout(f),e=setTimeout(function(){a.addClass("trig-curr").siblings().removeClass("trig-curr"),c.hide().eq(b).show()},100)}),a.delegate(".trig-item","mouseleave",function(){var g=$(this);var h=g.index();d=h,e&&clearTimeout(e),f=setTimeout(function(){b.eq(h).removeClass("trig-curr"),c.eq(h).hide().find(".J_tabCancel").click()},500)}),a.delegate(".sl-tab-cont-item","mouseenter",function(){clearTimeout(f)}),a.delegate(".sl-tab-cont-item","mouseleave",function(){var a=$(this);var g=a.index();d=g,f=setTimeout(function(){clearTimeout(e),b.eq(g).removeClass("trig-curr"),c.eq(g).hide(),a.find(".J_tabCancel").click()},500)})},b.exports=e});
