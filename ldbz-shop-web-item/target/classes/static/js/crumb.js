/*!Name: crumb.js
 * Date: 2017-2-14 17:14:16 */
define("MOD_ROOT/js/crumb",function(require,exports,module){function i(i,e){a||$.ajax({url:"//c.3.cn/brand/recommend",data:{skuId:i.skuid,cat:i.cat.join(","),brandId:i.brand},scriptCharset:"gbk",dataType:"jsonp",success:function(i){i&&i.items.length&&(a=!0,pageConfig.crumbBR=[],e.html(t.process(i)).show(),n.priceNum({skus:pageConfig.crumbBR,$el:e}))}})}function e(e){var n=$(".J-crumb-br");return n.length<1?!1:void n.EDropdown({lazyload:"data-src",onOpen:function(){i(e,n.find(".content .br-reco"))}})}var n=require("MOD_ROOT/js/tools");require("MOD_ROOT/js/EDropdown");var t='        {for item in items}        <li class="fore${pageConfig.crumbBR.push(item.id)}">            <div class="p-img">                <a href="//item.jd.com/${item.id}.html" target="_blank">                    <img width="65" height="65" alt="${item.base_info.name}" src="${pageConfig.FN_GetImageDomain(item.id)}n1/s65x65_${item.base_info.imageUrl}">                </a>            </div>            <div class="p-name">                <a href="//item.jd.com/${item.id}.html" target="_blank">${item.base_info.name}</a>            </div>            <div class="p-price">                <strong class="J-p-${item.id}">\uffe5</strong>            </div>        </li>        {/for}',a=!1;module.exports.__id="crumb",module.exports.init=e});