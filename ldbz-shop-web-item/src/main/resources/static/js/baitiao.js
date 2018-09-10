/*!Name: baitiao.js
 * Date: 2017-2-14 17:14:14 */
define("MOD_ROOT/js/baitiao",function(require,exports,module){function i(i){var t=$("#choose-baitiao");return t.length?void e.addListener("onPriceReady",function(e){var s=e.price;i.baiTiaoFenQi=new n({$el:t,price:s,sku:i.skuid,cat:i.cat,cfg:i})}):!1}var t=require("MOD_ROOT/js/core"),e=require("MOD_ROOT/js/event").Event,s=require("JDF_UNIT/js/login");require("MOD_ROOT/js/ETooltips"),require("JDF_UNIT/js/trimPath");var n=function(i,e){this.$el=i.$el||$("#choose-baitiao"),this.$btn=i.$btn||$("#btn-baitiao"),this.price=i.price,this.cfg=i.cfg,this.onSelected=e||function(){},this.sku=i.sku,this.cat=i.cat,this.shopId=i.cfg.shopId,this.enable=!1,this.did="",this.disabledBT=t.onAttr("isXnzt")||t.onAttr("YuShou")||this.cfg.isBiGouMa||this.cfg.isKO,this.URL="//btshow.jd.com/queryBtPlanInfo.do",this.JSONP_CALLBACK_NAME="queryBtPlanInfo",window.queryBtPlanInfo=function(){},this.init()};n.TEMPLATE='    <div class="dt">\u767d\u6761\u5206\u671f</div>    <div class="dd">        <div class="baitiao-list J-baitiao-list">            {for item in planInfos}            <div class="item disabled"                 clstag="shangpin|keycount|product|baitiaofenqi_${item.plan}_${pageConfig.product.cat.join(\'_\')}"                 data-snum="${item.plan}">                <b></b>                <a href="#none">                    <strong>                    {if item.plan===1} 30\u5929\u514d\u606f {else} \uffe5${item.curTotal}&times;${item.plan}\u671f {/if}                    </strong>                    <span style="display:none;">                        {if item.isDiscount}<em>\u60e0</em>{/if}                         {if item.fee>0}\u542b{else}0{/if}\u624b\u7eed\u8d39                    </span>                </a>                <div class="baitiao-tips hide">                    <ul>                        <li>                        {if item.fee>0}                            \u542b\u624b\u7eed\u8d39\uff1a\u8d39\u7387${item.rate}%\uff0c\uffe5${item.planFee}&times;${item.plan}\u671f                        {else}                            \u65e0\u624b\u7eed\u8d39                        {/if}                        </li>                    </ul>                </div>            </div>            {/for}            {if isDiscountAll}            <div class="bt-info-tips">                <a class="J-icon-hui prom icon fl" href="#none">\u3000</a>            </div>            {/if}            <div class="bt-info-tips">                <a class="J-bt-tips question icon fl" href="#none">\u3000</a>            </div>        </div>        <div class="baitiao-text J-baitiao-text"></div>    </div>',n.prototype={init:function(){this.bindEvent(),this.get()},bindEvent:function(){var i=this;this.$el.undelegate(),this.$el.delegate(".item","click",function(){var t=$(this).hasClass("selected"),e=$(this).hasClass("disabled");e||(i.$el.find(".item").removeClass("selected"),t?$(this).removeClass("selected"):$(this).addClass("selected"),i.select($(this),!t))}),this.$el.delegate(".J-login","click",function(){i.loginIframe()}),this.$el.delegate(".item","mouseenter",function(){$(this).addClass("hover")}),this.$el.delegate(".item","mouseleave",function(){$(this).removeClass("hover")}),e.addListener("onStockReady",function(t){i.showItem()}),e.addListener("onNumChange",function(t){i.disabledBT||i.get()}),e.addListener("onGiftSelected",function(t){i.disabledBT||i.setBTLink()}),e.addListener("onLDPSelected",function(t){i.did=t.did,i.disabledBT||i.setBTLink()}),e.addListener("onHeYueReady",function(t){i.showItem()})},log:function(i){"undefined"!=typeof errortracker&&errortracker.log({filename:"reservation.js",message:i})},loginIframe:function(){s({modal:!0,complete:function(){window.location.reload(!0)}})},getNum:function(){var i=$("#buy-num").val(),t=Number(i);return isNaN(t)?1:t},get:function(i){var e=this,s=this.getNum(),n=this.price.p*Number(s),o=$.extend({},i,{sku:this.sku,cId:this.cat.join(","),num:this.getNum(),amount:n,sourceType:"PC-XQ",shopId:pageConfig.product.venderId,ver:1,isJd:t.isJd});$.ajax({url:this.URL,dataType:"jsonp",data:o,scriptCharset:"utf-8",jsonpCallback:this.JSONP_CALLBACK_NAME,timeout:2e3,error:function(){console.error("Baitiao service error with timeout."),t.log(null,"baitiao.js","Baitiao service error with timeout.")},success:function(i){/debug=bt/.test(location.href)&&(i.isDiscountAll=!0,i.marketingText="\u6d4b\u8bd5\u6587\u5b57"),i&&i.result&&i.result.isSuccess?e.set(i):t.log(null,"baitiao.js","Baitiao service error.")}})},set:function(i){if(i.planInfos&&i.planInfos.length){if(this.key=i.key,!i.isAva)return!1;this.$el.html(n.TEMPLATE.process(i)),this.showItem(),this.$btn.hide(),this.enabled(),this.setTips(i)}this.setBTLink()},setTips:function(i){var t='            <div id="J-bt-tips">                <div class="g-tips-inner">                    <i></i><em></em>                    <ul>                        <li>1\u3001\u5b9e\u9645\u5206\u671f\u91d1\u989d\u53ca\u624b\u7eed\u8d39\u4ee5\u767d\u6761\u5269\u4f59\u989d\u5ea6\u53ca\u6536\u94f6\u53f0\u4f18\u60e0\u4e3a\u51c6</li>                        <li>2\u3001\u4ec0\u4e48\u662f\u767d\u6761\u5206\u671f\uff1f<br />                        \u4eac\u4e1c\u767d\u6761\u662f\u4eac\u4e1c\u63a8\u51fa\u7684\u4e00\u79cd\u201c\u5148\u6d88\u8d39\uff0c\u540e\u4ed8\u6b3e\u201d\u7684\u5168\u65b0\u652f\u4ed8\u65b9\u5f0f\u3002\u4f7f\u7528\u767d\u6761\u8fdb\u884c\u4ed8\u6b3e\uff0c\u53ef\u4ee5\u4eab\u53d7\u6700\u957f30\u5929\u7684\u5ef6\u540e\u4ed8\u6b3e\u671f\u6216\u6700\u957f24\u671f\u7684\u5206\u671f\u4ed8\u6b3e\u65b9\u5f0f\u3002</li>                    </ul>                </div>            </div>';this.$el.find(".J-bt-tips").length&&this.$el.find(".J-bt-tips").show().ETooltips({close:!1,content:t,width:300,pos:"bottom",zIndex:10}),this.$el.find(".J-icon-hui").length&&this.$el.find(".J-icon-hui").show().ETooltips({close:!1,content:i.marketingText,pos:"bottom",width:200,zIndex:10})},disabled:function(){this.$el.find(".item").addClass("disabled").removeClass("selected"),this.showTips("yb"),this.hideBtn()},enabled:function(){this.enable=!0,this.enable&&this.$el.find(".item").removeClass("disabled"),this.showTips("none")},select:function(i,t){var s=i.attr("data-snum");this.hasSelectedItem=!t,t?(this.snum=s,this.showBtn(),this.clearYbService()):(this.snum=null,this.hideBtn()),this.setBTLink(),e.fire({type:"onBaiTiaoSelect",isSelect:t}),this.onSelected(t)},clearYbService:function(){$("#choose-service .item").each(function(){$(this).removeClass("selected")})},isDisabledToShow:function(i){return i.isHeYue||i.isYuShou||i.isBiGouMa||!i.havestock||i.__chooseShop&&i.__chooseShop.selected},showItem:function(){this.isDisabledToShow(this.cfg)?this.hide():this.show()},show:function(){this.$el.show()},hide:function(){this.$el.hide()},hideBtn:function(){this.$btn.hide()},showBtn:function(){this.isDisabledToShow(this.cfg)||this.$btn.show()},setBTLink:function(){var i="//bttrade.jd.com/shopping/order/getOrderInfo.action?",t=pageConfig.giftSelectedSkuids?pageConfig.giftSelectedSkuids.join(","):"",e={pid:this.sku,cid:this.cat[2],num:this.getNum(),snum:this.snum,key:this.key,gids:t,did:this.did};this.snum?this.$btn.attr("href",i+$.param(e)):this.$btn.attr("href","#none")},showTips:function(i){var t=pageConfig.hasYbService?"<em>\u589e\u503c\u4fdd\u969c\u4e0d\u652f\u6301\u4e00\u952e\u6253\u767d\u6761 </em>":"",e={yb:t,none:""};this.$el.find(".J-baitiao-text").html(e[i])}},module.exports.__id="baitiao",module.exports.init=i});