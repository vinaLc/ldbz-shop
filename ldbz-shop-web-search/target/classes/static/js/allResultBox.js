/* product-search/1.0.2 allResultBox.js Date:2016-12-06 18:22:05 */
define("js/allResultBox.js",["js/pageInfo.js","js/tools.js","js/template.js"],function(require,a){var c=require("js/pageInfo.js");var d=require("js/tools.js");var e=require("product/search/1.0.2/js/template.js");function f(){$.ajax({url:"//api-search.jd.com",data:{key:c.KEYWORD,page:1,pagesize:5,qp:"no"},dataType:"jsonp",success:function(a){var b;a&&a.Product&&a.Product.length>0&&(b=a.Product.map(function(a){return a.wareid}),$("#J_yyk_recommend").find(".mc").html(e.allResultBox.process({goodsList:a.Product})),d.priceNum(b,"",$("#J_yyk_recommend"),"J-prom-p-","{NUM}"))}})}a.init=f});
