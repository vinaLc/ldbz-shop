/*!Name: stock.js
 * Date: 2017-2-14 17:14:14 */
define("MOD_ROOT/js/stock",function(require,exports,module){function e(e,i,o,a){this.areas=t.getAreaId().areaIds;var n=function(){var e=$("#buy-num");return e.length?e.val():1},s={skuId:pageConfig.product.skuid,area:this.areas.join("_"),venderId:pageConfig.product.venderId||0,cat:pageConfig.product.cat.join(","),buyNum:n(),choseSuitSkuIds:pageConfig.product.suitSkuids||"",extraParam:pageConfig.product.isHeYue?'{"originid":"1","heYueJi":"1"}':'{"originid":"1"}',ch:1,pduid:t.getUUID(),pdpin:readCookie("pin")||""};this.param=$.extend(s,e),this.onSuccess=i||function(){},this.onError=o||function(){},this.onlyData=a||!1,this.init()}var t=require("MOD_ROOT/js/tools"),i=require("MOD_ROOT/js/abtest"),o=require("MOD_ROOT/js/core"),a=require("MOD_ROOT/js/buybtn").addToCartBtn,n=require("MOD_ROOT/js/event").Event;e.prototype={init:function(){this.bindEvent(),this.get()},bindEvent:function(){},get:function(){var e=this;$.ajax({url:"//c0.3.cn/stock?"+decodeURIComponent($.param(this.param)),dataType:"jsonp",cache:!0,timeout:6e3,scriptCharset:"gbk",error:function(t){e.error(),e.onError.call(e,t)},success:$.proxy(this.handleData,this)})},handleData:function(e){var t=e.stock.StockState;pageConfig.product.unSupportedArea=2===e.stock.code,pageConfig.product.havestock=!pageConfig.product.isOver&&-1!=t&&34!=t&&0!=t,e&&e.stock&&!e.stock.err?(this.onlyData||this.set(e),this.onSuccess.call(this,e)):(this.error(),this.onError.call(this))},set:function(e){this.setStockInfo(e.stock),this.setPromiseIcon(e.stock),this.setDefaultAreaName(e.stock.area),this.setSupportIcons(e.stock),this.setDJDAreaSku(e.stock),this.setLDP(e.stock)},error:function(){"undefined"!=typeof console&&console.error("Stock service maybe error or timeout."),this.setDefaultAreaName()},resetCookie:function(t){if("undefined"==typeof t||!t.countyName||!t.cityName){var i=pageConfig.FN_getDomain();createCookie("ipLocation","\u5317\u4eac",30,"/;domain="+i),createCookie("areaId",1,10,"/;domain="+i),createCookie("ipLoc-djd","1-72-2799-0",30,"/;domain="+i),new e({area:"1_72_2799_0"},function(e){})}},setDefaultAreaName:function(e){var i="",o=$("#stock-address .text");if(e)i=e.provinceName+e.cityName+e.countyName+e.townName,pageConfig._CURR_AREA=e;else{var a=t.getAreaIds(),n=$('.J-address-tab [data-tab="item"]').eq(0),s=n.find('[data-value="'+a[0]+'"]').text(),r=unescape(readCookie("ipLocation"));pageConfig._CURR_AREA={provinceName:s,cityName:r,countyName:""},i=s+r}o.text(i)},setStockInfo:function(e){var t=$("#store-prompt"),i=$("#summary-service"),o=$(".J-dcashDesc"),a="",n="";return e?(e.serviceInfo&&(n+=e.serviceInfo),e.promiseResult&&(n+=e.promiseResult),i.html(n),e.stockDesc&&(a+=e.stockDesc),e.Drd&&36===e.StockState&&(a="<strong>\u9884\u8ba2\uff0c</strong>\u6b64\u5546\u54c1\u4e3a\u9884\u8ba2\u5546\u54c1\uff0c\u4e0b\u5355\u540e\u5728"+e.Drd),e.spIconDesc&&(a+=e.spIconDesc),t.html(a),e.dcashDesc&&o.html(e.dcashDesc),void(e.isSam&&o.html(e.samProductFreight))):!1},setPromiseIcon:function(e){function t(e){for(var t=[],i=0;i<e.length;i++){var o=e[i];5!==o.iconType&&t.push(o)}return t}var i=$(".J-promise-icon"),a=[],n=!1,s=!1,r='            <a target="_blank" title="${item.iconTip}" href="${item.helpLink}" class="${item.iconCode}" clstag="shangpin|keycount|product|promisefw_${pageConfig.product.pType}">                ${item.showName}            </a>',c=o.onAttr("isNSNGgoods-3")||/nsng/.test(location.href),d={iconTip:"\u5fae\u8054\u8d85\u7ea7App\u63d0\u4f9b\u4e0d\u540c\u54c1\u724c\u95f4\u667a\u80fd\u4ea7\u54c1\u7684\u8fdc\u7a0b\u64cd\u63a7\u548c\u4e92\u8054",iconCode:"nsng",showName:"\u5fae\u8054\u8d85\u7ea7\u667a\u80fd",picUrl:"//static.360buyimg.com/item/assets/picon/zhineng.png"};if(e.eir&&e.eir.length&&(a=a.concat(e.eir),n=!0),c&&a.push(d),e.ir&&e.ir.length){var p=t(e.ir);a=a.concat(p),s=!0}!n&&!s||pageConfig.product.isHeYue?i.hide():i.show(),a.length>3?(i.addClass("promise-icon-more"),i.removeAttr("data-disable"),i.EDropdown(),0==i.find(".icon-list i").length&&i.find(".icon-list").append("<i></i>")):(i.attr("data-disable","disable"),i.removeClass("promise-icon-more"));var l=[];$.each(a,function(e,t){l.push(r.process({item:t}))});var u=$('<div class="line1 clearfix"></div>'),h=$('<div class="line2 clearfix"></div>');$.each(l,function(e,t){var i=$(t);2!=e&&e!=l.length-1||i.addClass("noborder"),3>e?u.append(i):h.append(i)}),i.find("ul").html("").append(u,h)},setRelativeAct:function(e){var t=[],i='<a href="{0}" target="_blank">{1} &gt;&gt;</a>';if(!e||!e.length)return!1;for(var o=0;o<e.length;o++)5==e[o].iconType&&t.length<2&&t.push(e[o]);if(t.length){var a=i.format(t[0].helpLink,t[0].showName);pageConfig.__localTip.set(2,a)}else pageConfig.__localTip.del(2)},setSupportIcons:function(e){var o=$("#summary-support");if(!e||!e.support||!e.support.length)return o.hide(),!1;pageConfig.__supportABTest=new i(t.getUUID(),.5);for(var a="A"===pageConfig.__supportABTest.isHitVersion(),n=0;n<e.support.length;n++){var s=e.support[n];if("baina"===s.id&&!a){e.support.splice(n,1);break}}/debug=zz/.test(location.href)&&e.support.push({id:"zengzhi",showName:"\u589e\u503c\u670d\u52a1"});var r='            {for item in support}            <li id="support-${item.id}" clstag="shangpin|keycount|product|zhichi_${item.id}_${cat2}">                <a {if item.helpLink} target="_blank" href="${item.helpLink}" {else} href="#none" {/if}                     data-title="${item.iconTip}">                <i class="sprite-${item.id}"></i>                <span>${item.showName}</span>                </a>            </li>            {/for}';e.support.length?o.show():o.hide(),o.find(".choose-support").html(r.process({support:e.support,cat2:pageConfig.product.cat[2]})),this.showTip(o),this.bindDialog()},showTip:function(e){e.find("[data-title]").each(function(){$(this).data("title")&&$(this).ETooltips({pos:"bottom",zIndex:10,width:200,defaultTitleAttr:"data-title"})})},setDJDAreaSku:function(e){if(!e||!e.realSkuId)return!1;var t=e.realSkuId;if(t!=pageConfig.product.skuid){var i=[o.isPop?"0":"1",o.isPOPSku(t)?"0":"1"].join(""),a="?jt="+i;if(location.search&&(a=/jt=\d+/.test(location.search)?location.search.replace(/jt=\d+/,"jt="+i):location.search+"&jt="+i),/debug=disableJump/.test(location.href))return!1;window.location="//item.jd.com/"+t+".html"+a}},setLDP:function(e){function t(e){e=e||s.find(".selected a").attr("data-id");var t=a.$el.attr("href"),i="";t&&"#none"!=t&&(i=/did=/.test(t)?t.replace(/did=\d+/,"did="+e):t+"&did="+e,a.enabled(i)),n.fire({type:"onLDPSelected",did:e})}function i(e){s.find(".item").removeClass("selected"),e.parent().addClass("selected")}function o(e){var o=$(e.target),a=o.data("id");i(o),t(a)}var s=$("#choose-luodipei");if(/debug=ldp/.test(location.href)&&(e.vsc=[{desc:"\u9001\u8d27\u670d\u52a1\uff1a\u7535\u68af\u4f4f\u6237\u62167\u5c42\u4ee5\u4e0b\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\u53d7\u6b64\u670d\u52a1\uff0c7\u5c42\u4ee5\u4e0a\u6b65\u68af\u4f4f\u6237\u5219\u9700\u6309\u914d\u9001\u516c\u53f8\u89c4\u5b9a\u52a0\u6536\u8d39\u7528\u3002\uff08\u74f7\u7816\u5730\u677f\u7c7b\uff0c\u4ec5\u7535\u68af\u4f4f\u6237\u62161\u5c42\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\uff09\u3002\n\u5b89\u88c5\u670d\u52a1\uff1a\u6b64\u7c7b\u5546\u54c1\u9700\u4e13\u4eba\u5b89\u88c5\uff0c\u7b7e\u6536\u540e\u8bf7\u8054\u7cfb\u5546\u5bb6\u786e\u8ba4\u4e0a\u95e8\u5b89\u88c5\u65f6\u95f4\u3002\n\u5982\u5546\u5bb6\u672a\u5c65\u884c\u670d\u52a1\uff0c\u6d88\u8d39\u8005\u53ef\u83b7200\u5143/\u5355\u7684\u8d54\u4ed8\u3002",id:1103,url:"//help.jd.com/Vender/question-1043.html",seq:1,name:"\u9001\u8d27\u4e0a\u95e8\u5b89\u88c5",charge:2},{desc:"\u9001\u8d27\u670d\u52a1\uff1a\u7535\u68af\u4f4f\u6237\u62167\u5c42\u4ee5\u4e0b\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\u53d7\u6b64\u670d\u52a1\uff0c7\u5c42\u4ee5\u4e0a\u6b65\u68af\u4f4f\u6237\u5219\u9700\u6309\u914d\u9001\u516c\u53f8\u89c4\u5b9a\u52a0\u6536\u8d39\u7528\u3002\uff08\u74f7\u7816\u5730\u677f\u7c7b\uff0c\u4ec5\u7535\u68af\u4f4f\u6237\u62161\u5c42\u6b65\u68af\u4f4f\u6237\u53ef\u4eab\uff09\u3002\n\u5982\u5546\u5bb6\u672a\u5c65\u884c\u670d\u52a1\uff0c\u6d88\u8d39\u8005\u53ef\u83b7200\u5143/\u5355\u7684\u8d54\u4ed8\u3002",id:1102,url:"//help.jd.com/Vender/question-1043.html",seq:2,name:"\u9001\u8d27\u4e0a\u95e8",charge:1},{desc:"\u5546\u54c1\u9001\u81f3\u60a8\u4e0b\u5355\u5730\u5740\u6240\u5728\u5730\u7ea7\u5e02\u540e\uff0c\u914d\u9001\u516c\u53f8\u4f1a\u901a\u77e5\u60a8\u7269\u6d41\u70b9\u5730\u5740\uff0c\u60a8\u9700\u81ea\u884c\u524d\u5f80\u7269\u6d41\u70b9\u63d0\u8d27\uff0c\u81ea\u884c\u642c\u8fd0\u8d27\u7269\u5e76\u5b89\u88c5\u3002\n\u5982\u5546\u5bb6\u672a\u5c65\u884c\u670d\u52a1\uff0c\u6d88\u8d39\u8005\u53ef\u83b7200\u5143/\u5355\u7684\u8d54\u4ed8\u3002",id:1101,url:"//help.jd.com/Vender/question-1043.html",seq:3,name:"\u5e02\u533a\u7ad9\u70b9\u81ea\u63d0",charge:0}]),!(s.length&&e&&e.vsc&&e.vsc.length))return s.hide(),!1;s.show();var r='            {for item in vsc}            <div class="item {if Number(item_index)==0} selected{/if}">                <b></b>                <a href="#none" data-id="${item.id}">${item.name} \uffe5${item.charge}</a>                <script type="text/html">${item.desc} <a class="hl_blue" href="${item.url}" target="_blank">\u8be6\u60c5 &raquo;</a></script>            </div>            {/for}';s.find(".dd").html(r.process(e)),s.find(".item").each(function(){var e=$(this),t=e.find("script").html();e.ETooltips({autoHide:!0,close:!1,content:t,width:300,pos:"bottom",zIndex:10})}),s.delegate(".item a","click",o),t(s.find(".selected a").attr("data-id")),n.fire({type:"onLDPSelected",did:e.vsc[0].id})},bindDialog:function(){this.suitDialog(),this.zzDialog()},suitDialog:function(){var e=$("#support-tcbg"),t=this.areas;e.bind("click",function(){var e="//ctc.jd.com/popupDialog.action?showSp=1&",i=e+$.param({skuId:pageConfig.product.skuid,provinceId:t[0],cityId:t[1],popId:pageConfig.product.venderId,r:Math.random()});pageConfig.bTypeIframe=$("body").dialog({type:"iframe",width:690,height:610,title:"\u5957\u9910\u53d8\u66f4",autoIframe:!1,iframeTimestamp:!1,source:i,onReady:function(){var e=$(this.el).width();$(this.el).addClass("popup-phone-service"),$(this.content).width(e)}})})},zzDialog:function(){var e=$("#support-zengzhi");e.bind("click",function(){var e="//scp.jd.com/settlement.action?",t=e+$.param({skuId:pageConfig.product.skuid,pcount:$("#buy-num").val(),venderId:pageConfig.product.venderId,r:Math.random()}),i='<div class="zengzhi-layer" style="width:630px;">                    <h3><i class="icon-zengzhi"></i>\u963f\u51e1\u63d0\u4e3b\u9898\u9986\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u8bf4\u660e</h3>                    <p class="zengzhi-intr">\u9009\u62e9\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u7684\u5ba2\u6237\uff0c\u53ef\u4ee5\u53c2\u4e0e\u5546\u5bb6\u6307\u5b9a\u7684\u76f8\u5173\u4ea4\u6613\u670d\u52a1\u3002\u8d2d\u4e70\u540e\u8bf7\u5728\u4e2a\u4eba\u4e2d\u5fc3\u5de6\u4fa7\u201c\u7279\u8272\u670d\u52a1\u201d\u7684\u201c\u9ec4\u91d1|\u6536\u85cf\u670d\u52a1\u201d\u4e2d\u67e5\u770b\u4ea4\u6613\u51ed\u8bc1\uff0c\u51ed\u4ea4\u6613\u51ed\u8bc1\u8054\u7cfb\u5546\u5bb6\u5b8c\u6210\u540e\u7eed\u670d\u52a1\u3002</p>                    <div class="zengzhi-info">                        \u8bf7\u6ce8\u610f\uff1a                        <ol>                            <li>1. \u9009\u62e9\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u7684\u5ba2\u6237\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u4e3a\u4e0d\u53d1\u8d27\uff0c\u5982\u60a8\u5e0c\u671b\u63d0\u53d6\u8d27\u7269\uff0c\u8bf7\u60a8\u8054\u7cfb\u5546\u5bb6\uff0c\u51ed\u4ea4\u6613\u51ed\u8bc1\u529e\u7406\u3002</li>                            <li>2. \u9009\u62e9\u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u7684\u5ba2\u6237\uff0c\u987b\u4e3a\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u516c\u6c11\uff0c\u6301\u6709\u8eab\u4efd\u8bc1\u3001\u62a4\u7167\u7b49\u6709\u6548\u8eab\u4efd\u8bc1\u4ef6\u3002\u987b\u5e74\u6ee118\u5c81\uff0c\u4e3a\u5b8c\u5168\u6c11\u4e8b\u884c\u4e3a\u80fd\u529b\u4eba\u3002</li>                            <li>3. \u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u4e2d\u6240\u542b\u670d\u52a1\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a\u6307\u5b9a\u673a\u6784\u4ee3\u7406\u529e\u7406\u4ea7\u54c1\u5c01\u88c5\u3001\u4ea4\u6613\u6258\u7ba1\u3001\u4ea4\u6613\u5165\u5e93\u3001\u4ea4\u6613\u63d0\u8d27\u3001\u4ea4\u6613\u7ed3\u7b97\u3001\u4e8c\u624b\u8f6c\u8ba9\u7b49\u670d\u52a1\u5f62\u5f0f\u3002\u8be5\u670d\u52a1\u6700\u7ec8\u89e3\u91ca\u6743\u5f52\u963f\u51e1\u63d0\u4e3b\u9898\u9986\u6240\u6709\u3002</li>                            <li>4. \u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u4e2d\u6240\u542b\u670d\u52a1\u5bf9\u5e94\u7684\u54c1\u79cd\u8bbe\u7acb\u3001\u4ea4\u6613\u6258\u7ba1\u3001\u4ea4\u6613\u7533\u8d2d\u3001\u4ea4\u6613\u6d41\u901a\u7b49\u4fe1\u606f\uff0c\u5747\u4ee5\u56fd\u9645\u7248\u963f\u51e1\u63d0\u4e3b\u4f53\u6587\u5316\u4ea4\u6613\u5e73\u53f0\u5bf9\u5916\u516c\u544a\u4e3a\u51c6\u3002</li>                            <li>                                5. \u201c\u589e\u503c\u4ea4\u6613\u201d\u6a21\u5f0f\u540e\u7eed\u670d\u52a1\u64cd\u4f5c\u6d41\u7a0b\u793a\u610f\u5982\u4e0b\uff1a                                <div class="process">                                    <div class="process-item">                                        \u5ba2\u6237\u5728\u4eac\u4e1c\u4e2a\u4eba\u4e2d\u5fc3<span>\u3010\u9ec4\u91d1|\u6536\u85cf\u670d\u52a1\u3011</span>\u5f20\u83b7\u53d6\u4ea4\u6613\u51ed\u8bc1                                    </div>                                    <i class="arrow"></i>                                    <div class="process-item">                                        \u5ba2\u6237\u901a\u8fc7\u5fae\u4fe1\u5173\u6ce8<span>\u3010\u56fd\u9645\u7248\u963f\u51e1\u63d0\u4e3b\u4f53\u6587\u5316\u4ea4\u6613\u5e73\u53f0\u3011</span>                                    </div>                                    <i class="arrow"></i>                                    <div class="process-item">                                        \u5728<span>\u3010\u56fd\u9645\u7248\u963f\u51e1\u63d0\u4e3b\u4f53\u6587\u5316\u4ea4\u6613\u5e73\u53f0\u3011</span>\u7684<span>\u3010\u5ba2\u6237\u670d\u52a1\u3011</span>\u4e2d<span>\u3010\u4eac\u4e1c\u5ba2\u6237\u767b\u8bb0\u3011</span>\u6309\u7cfb\u7edf\u6307\u5f15\u5b8c\u6210\u540e\u7eed\u64cd\u4f5c                                    </div>                                </div>                            </li>                        </ol>                        <a clstag="shangpin|keycount|product|button_ZengZhiJiaoYi" target="_blank" href="'+t+'" class="btn-confirm">\u589e\u503c\u4ea4\u6613</a>                    </div>                </div>';$("body").dialog({type:"html",width:690,height:600,title:"\u589e\u503c\u4ea4\u6613",autoIframe:!1,iframeTimestamp:!1,source:i,onReady:function(){}})})}},module.exports=e});