/*!Name: ebook.js
 * Date: 2017-2-14 17:14:16 */
define("MOD_ROOT/js/ebook",function(require,exports,module){function o(o){$.ajax({url:"//gw-e.jd.com/shoppingCart/shoppingCart_shoppingCart.action",data:{pin:readCookie("pin")},dataType:"jsonp",cache:!0,success:function(o){0==o.code&&o.result.map.result&&o.result.map.result.count&&$("#ebook-cart .cw-icon").append('<i class="ci-count" id="ebook-cart-amount">'+o.result.map.result.count+"</i>")}})}function e(o){return 5276==o.cat[1]?($(".J-summary-price .p-price span").html(""),void $(".J-summary-price .p-price .price").html("\u514d\u8d39")):(i({skus:[o.skuid]},function(e){a(o,e[0].p)}),void(o.bookCode&&i({skus:[o.bookCode]},function(o){$(".J-original-price .del-price").html("<span>\uffe5</span>"+o[0].m),$(".J-original-price").show()})))}function a(o,e){$.ajax({url:"//gw-e.jd.com/forBookCode/forBookCode_getEbookInFoAndOrginPrices4JSONP.action?bookCodes="+o.skuid,dataType:"jsonp",scriptCharset:"utf-8",success:function(a){var n=$(".J-summary-price .p-price");if(5276==o.cat[1])n.find("span").html(""),n.find(".price").html("\u514d\u8d39");else{var t=a.result.resultList[0].jdPrice;t>e&&e>0?($(".J-prom-price .p-price .price").html(e),n.find(".price").html(t.toFixed(2)),$(".J-summary-price .p-price").addClass("del"),$(".J-prom-price").show()):$(".J-summary-price .p-price .price").html(t.toFixed(2))}}})}function n(o){$("#btn-onlineread").click(function(){t(o)}),l.wideVersion||$(".download").hover(function(){$(this).addClass("download-hover")},function(){$(this).removeClass("download-hover")}),$("#InitCartUrl, #InitCartUrl-mini").click(function(){return 5276==l.cat[1]?void c(o):void(location.href=o.buyurl)}),$("#btn-buynow").click(function(){location.href=o.buynowlink})}function t(o){var e='        <div class="bookLayer">            <p>\u5f88\u9057\u61be\uff0c\u60a8\u76ee\u524d\u6ca1\u6709\u53ef\u7528\u7684\u201c\u7545\u8bfbVIP\u201d\u670d\u52a1</p>            <div class="btn-wrap">                <a href="//sale.jd.com/act/MypqiIJPYx.html" class="red" target="_blank">\u7acb\u5373\u5f00\u901a\u7545\u8bfb</a>                <a class="cancel-btn" href="javascript:;">\u6682\u4e0d\u5f00\u901a</a>            </div>        </div>',a='        <div class="bookLayer">            <p>\u8bf7\u4f7f\u7528<strong>\u4eac\u4e1c\u9605\u8bfb\u5ba2\u6237\u7aef</strong>\u4e0b\u8f7d\u9605\u8bfb\uff01</p>            <div class="btn-wrap">                <a href="//sale.jd.com/act/W5hugLDc1R.html" class="red" target="_blank">\u7acb\u5373\u5b89\u88c5</a>                <a href="LEBK://bought/">\u542f\u52a8\u5ba2\u6237\u7aef</a>                <a class="cancel-btn" href="javascript:;">\u53d6\u6d88\u4e0b\u8f7d</a>            </div>        </div>';seajs.use("jdf/1.0.0/unit/login/1.0.0/login.js",function(n){n({modal:!0,complete:function(n){var t;null!=n&&null!=n.Identity.IsAuthenticated&&n.Identity.IsAuthenticated&&$.ajax({url:"//cread.jd.com/openread/openRead.action",data:{bookId:o.skuid,readType:0},dataType:"jsonp",success:function(o){var n=null!=o.code&&"0"==o.code?a:e;t=$("body").dialog({width:442,height:120,title:"\u6e29\u99a8\u63d0\u793a",type:"html",source:n,onReady:function(){var o=$(".bookLayer");o.find(".cancel-btn").click(function(){t.close()})}})}})}})})}function c(o){var e='        <div class="bookLayer">            <p>\u8bf7\u4f7f\u7528<b>\u4eac\u4e1c\u9605\u8bfb\u5ba2\u6237\u7aef</b>\u4e0b\u8f7d\u9605\u8bfb</p>            <div class="btn-wrap">                <a href="//sale.jd.com/act/W5hugLDc1R.html" class="red" target="_blank">\u7acb\u5373\u5b89\u88c5</a>                <a href="LEBK:///Bought">\u542f\u52a8\u5ba2\u6237\u7aef</a>            </div>        </div>';seajs.use("MOD_ROOT/js/login.js",function(a){a({modal:!0,complete:function(a){var n;null!=a&&null!=a.Identity.IsAuthenticated&&a.Identity.IsAuthenticated&&$.ajax({url:"//gw-e.jd.com/downrecord/downrecord_insert.action?ebookId="+o.skuid,dataType:"jsonp",cache:!0,success:function(o){1==o.code?n=$("body").dialog({width:442,height:120,title:"\u6e29\u99a8\u63d0\u793a",type:"html",source:e}):0==o.code&&alert("\u7cfb\u7edf\u9519\u8bef\uff0c\u7a0d\u540e\u518d\u8bd5")}})}})})}function i(o,e){var a=o.skus||[],n=o.$el||$("body"),t=o.selector||".J-p-";$.ajax({url:"//p.3.cn/prices/mgets",data:{skuids:"J_"+a.join(",J_"),type:2},dataType:"jsonp",cache:!0,success:function(o){for(var a in o){if(!o[a].id)return!1;var c=o[a].id.replace("J_",""),i=parseFloat(o[a].p);i>0?n.find(t+c).html("\uffe5"+o[a].p):n.find(t+c).html("\u514d\u8d39")}"function"==typeof e&&e(o)}})}function r(){var o=["0_0_8249","0_0_8250"];$.ajax({url:"//nfa.jd.com/loadFa_toJson.js?aid="+o.join("-")+"&ver=20131107",dataType:"script",cache:!0,success:function(){}})}function s(o){$.ajax({url:"//gw-e.jd.com/client.action?functionId=getScanDesc&body={ebookId:"+o.skuid+",sourceType:0}",dataType:"jsonp",cache:!0,success:function(o){0==o.resultCode&&($(".download .download-qrcode-tit h3").html(o.map.scanBook.scanTypeStr),$(".download .qr-code p").html(o.map.scanBook.scanDesc))}})}function d(a){e(a),o(),n(a),r(),s(a)}var l=(require("JDF_UI/js/dialog"),require("MOD_ROOT/js/core"));module.exports.__id="ebook",module.exports.init=d,module.exports.priceNum=i});
