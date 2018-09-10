/*!Name: popupCar.js
 * Date: 2017-2-14 17:14:18 */
define("MOD_ROOT/js/popupCar",function(require,exports,module){function a(a){c.init(a)}var s=(require("JDF_UI/js/dialog"),require("JDF_UNIT/js/login")),e=require("MOD_ROOT/js/core"),r=require("MOD_ROOT/js/tools"),o=null,i='        <div class="J-car-layer-con car-layer-con">            <div class="love-car {if cars.length} show{/if}">                <h5>\u6211\u7684\u7231\u8f66\uff1a</h5>                <ul class="car-list">                    {for car in cars}                    <li class="J-car-item {if userDefaultCarId == car.id} current{/if}" data-id="${car.id}" data-modelId="${car.model_id}">                        <div class="J-item-layer item-layer" style="display: none;">                            <div class="item-bt"><a class="J-qr-del-btn" href="javascript:;">\u5220\u9664\u8f66\u578b</a><a class="J-qr-cancel-btn" href="javascript:;">\u53d6\u6d88</a></div>                        </div>                        <a href="javascript:;" class="J-del-btn item-op"></a>                        <img src="//img30.360buyimg.com/car/${car.brand_logo}" title="${car.brand_name}">                        <div class="car-info">                            <h4 title="${car.brand_name} ${car.series_name}">${car.brand_name} ${car.series_name}</h4>                            <p title="${car.series_year_name} \u6b3e${car.model_name}">${car.series_year_name} \u6b3e${car.model_name}</p>                        </div>                    </li>                    {/for}                    {if cars.length < 4}                    <li class="null">                        <a class="J-addCar item-add" href="javascript:;" target="_self"><i></i><em>\u6dfb\u52a0\u65b0\u8f66\u578b</em></a>                    </li>                    {/if}                </ul>                {if cars.length >= 4}                <p class="tips">\u6700\u591a\u6dfb\u52a04\u8f86\u7231\u8f66\uff0c\u5982\u9700\u65b0\u589e\uff0c\u8bf7\u5148\u5220\u9664</p>                {/if}            </div>            <div id="iscgj2" class="car-filter {if cars.length==0} show{/if}">                <h5>\u6dfb\u52a0\u65b0\u8f66\u578b</h5>                <div class="car-filter-bd">                    <div class="menu-drop car-filter-item1">                        <div class="trigger">                            <span class="curr">\u54c1\u724c</span><i class="menu-drop-arrow"></i>                        </div>                        <div class="menu-drop-main">                            <ul class="menu-drop-letter-list">                                <li class="fore0 curr"><a href="">\u70ed\u95e8</a></li>                                <li class="fore1"><a href="">A</a></li>                                <li class="fore2"><a href="">B</a></li>                                <li class="fore3"><a href="">C</a></li>                                <li class="fore4"><a href="">D</a></li>                                <li class="fore5"><a href="">E</a></li>                                <li class="fore6"><a href="">F</a></li>                                <li class="fore7"><a href="">G</a></li>                                <li class="fore8"><a href="">H</a></li>                                <li class="fore9"><a href="">I</a></li>                                <li class="fore10"><a href="">J</a></li>                                <li class="fore11"><a href="">K</a></li>                                <li class="fore12"><a href="">L</a></li>                                <li class="fore13"><a href="">M</a></li>                                <li class="fore14"><a href="">N</a></li>                                <li class="fore15"><a href="">O</a></li>                                <li class="fore16"><a href="">P</a></li>                                <li class="fore17"><a href="">Q</a></li>                                <li class="fore18"><a href="">R</a></li>                                <li class="fore19"><a href="">S</a></li>                                <li class="fore20"><a href="">T</a></li>                                <li class="fore21"><a href="">U</a></li>                                <li class="fore22"><a href="">V</a></li>                                <li class="fore23"><a href="">W</a></li>                                <li class="fore24"><a href="">X</a></li>                                <li class="fore25"><a href="">Y</a></li>                                <li class="fore26"><a href="">Z</a></li>                            </ul>                            <ul class="menu-drop-list">                            </ul>                        </div>                    </div>                    <div class="menu-drop car-filter-item2">                        <div class="trigger">                            <span class="curr">\u8f66\u7cfb</span><i class="menu-drop-arrow"></i>                        </div>                        <div class="menu-drop-main">                            <div class="menu-drop-hint">\u8bf7\u5148\u9009\u62e9\u54c1\u724c</div>                            <div class="menu-drop-list-container">                            </div>                        </div>                    </div>                    <div class="menu-drop car-filter-item3">                        <div class="trigger">                            <span class="curr">\u5e74\u6b3e</span><i class="menu-drop-arrow"></i>                        </div>                        <div class="menu-drop-main">                            <div class="menu-drop-hint">\u8bf7\u5148\u9009\u62e9\u54c1\u724c\u548c\u8f66\u7cfb</div>                            <ul class="menu-drop-list">                            </ul>                        </div>                    </div>                    <div class="menu-drop car-filter-item4">                        <div class="trigger">                            <span class="curr">\u8f66\u578b</span><i class="menu-drop-arrow"></i>                        </div>                        <div class="menu-drop-main">                            <div class="menu-drop-hint">\u8bf7\u5148\u9009\u62e9\u54c1\u724c\uff0c\u8f66\u7cfb\u548c\u5e74\u6b3e</div>                            <ul class="menu-drop-list">                            </ul>                        </div>                    </div>                    <a href="javascript:;" target="_self" class="btn btn-default car-filter-btn">\u6dfb\u52a0\u7231\u8f66</a>                </div>            </div>            <div class="match-goods">                <h5>\u5339\u914d\u7684\u5546\u54c1</h5>                <div class="match-goods-con">                    <div class="match-goods-choose {if cars.length==0} show{/if}"><i></i><em>\u8bf7\u5148\u9009\u62e9\u60a8\u7684\u8f66\u578b...</em></div>                    <div class="match-goods-loading {if cars.length} show{/if}"><i></i><em>\u6b63\u5728\u52a0\u8f7d\u5339\u914d\u7684\u5546\u54c1...</em></div>                    <div class="no-match-goods"><i></i><em>\u4e0d\u597d\u610f\u601d\uff0c\u6682\u65e0\u8be5\u8f66\u578b\u5339\u914d\u7684\u5546\u54c1\uff0c</em><em><a href="//autobeta.jd.com/" target="_blank">\u53bb<strong>\u4eac\u4e1c\u8f66\u7ba1\u5bb6</strong>\u770b\u770b\u5176\u5b83\u914d\u4ef6&gt;</a></em></div>                    <div class="addError"><i></i><em>\u6dfb\u52a0\u8f66\u578b\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5...</em></div>                    <div class="deleteError"><i></i><em>\u5220\u9664\u8f66\u578b\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5...</em></div>                    <ul class="match-goods-list">                    </ul>                </div>            </div>        </div>',l='                <ul class="car-list">                    {for car in cars}                    <li class="J-car-item {if choosedCarmodelid == car.model_id} current{/if}" data-id="${car.id}" data-modelId="${car.model_id}">                        <div class="J-item-layer item-layer" style="display: none;">                            <div class="item-bt"><a class="J-qr-del-btn" href="javascript:;">\u5220\u9664\u8f66\u578b</a><a class="J-qr-cancel-btn" href="javascript:;">\u53d6\u6d88</a></div>                        </div>                        <a href="javascript:;" class="J-del-btn item-op"></a>                        <img src="//img30.360buyimg.com/car/${car.brand_logo}" title="${car.brand_name}">                        <div class="car-info">                            <h4 title="${car.brand_name} ${car.series_name}">${car.brand_name} ${car.series_name}</h4>                            <p title="${car.series_year_name} \u6b3e${car.model_name}">${car.series_year_name} \u6b3e${car.model_name}</p>                        </div>                    </li>                    {/for}                    {if cars.length < 4}                    <li class="null">                        <a class="J-addCar item-add" href="javascript:;" target="_self"><i></i><em>\u6dfb\u52a0\u65b0\u8f66\u578b</em></a>                    </li>                    {/if}                </ul>                {if cars.length >= 4}                    <p class="tips">\u6700\u591a\u6dfb\u52a04\u8f86\u7231\u8f66\uff0c\u5982\u9700\u65b0\u589e\uff0c\u8bf7\u5148\u5220\u9664</p>                {/if}',d='        {for match in matchs}        <li>            <a href="//item.jd.com/${match.skuId}.html" target="_blank">                <dl>                    <dt><img src="//img10.360buyimg.com/n1/s100x100_${match.imagePath}" title="" alt="" width="58"  height="58" /></dt>                    <dd class="goods-detail">                        <h6><span>${match.name}</span></h6>                        <p>${match.color} ${match.size}</p>                    </dd>                    <dd class="goods-price J-p-${match.skuId}"></dd>                </dl>            </a>        </li>        {/for}',c={init:function(a){var s=this;s.cfg=a;var e=$("#choose-car");s.$wraningTips=e.find(".warning-tips"),s.$chooseCarTips=e.find(".tips"),s.$chooseOP=e.find(".choose-op"),s.$selcancelOP=e.find(".J-selcancel-op"),s.carDialog=null,s.userDefaultCarId,s.skulist=[],s.userCarArr=null,s.isShowCarType(),s.checkFromCheGuanJia(),s.addEvent()},checkFromCheGuanJia:function(){var a=this,s=e.serializeUrl(location.href).param,r=s.carModelId;r&&a.queryUserCarModel(function(){})},queryUserCarModel:function(a){var s=this,e=readCookie("pin");return e?void $.ajax({url:"//cd.jd.com/auto/skubypin",data:{skuId:s.cfg.skuid,userPin:e||""},dataType:"jsonp",jsonpCallback:"popupCarAutoskubypin",success:function(e){e.hasModelOrSku?(e.userModels&&(s.userCarArr=e.userModels,s.userDefaultCarId=e.userDefaultCar.id),a.call(s)):a.call(s)}}):void s.updateCarModelTxt(null,null)},openDialog:function(){if($(".car-layer-con").length)return!1;var a=this,s=$("body"),e="",r=0;a.userCarArr&&a.userCarArr.length?e=i.process({cars:a.userCarArr,userDefaultCarId:a.userDefaultCarId,skuid:a.cfg.skuid}):(a.userCarArr=[],a.userDefaultCarId=null,e=i.process({cars:a.userCarArr,userDefaultCarId:a.userDefaultCarId,skuid:null})),r=773,a.carDialog=s.dialog({type:"html",width:r,modal:!0,title:"\u9009\u62e9\u8f66\u578b\u7cbe\u51c6\u5339\u914d\u5546\u54c1",source:e,onReady:function(){return a.removeLayerEvent(),a.addLayerEvent(),a.loadMatchGoods(),$("#iscgj2").length?void require.async(["MOD_ROOT/js/carButler"],function(s){o=new s({el:"#iscgj2",isGoToCarPage:!1}),o.addNewCar(function(s,e){if(a.choosedCarmodelid=s.find(".car-filter-btn").attr("choosedCarmodelid"),a.choosedCarmodelid){a.userCarArr=e.userModels;var r=l.process({cars:a.userCarArr,choosedCarmodelid:a.choosedCarmodelid,skuid:a.cfg.skuid});$(".love-car p.tips,.love-car .car-list").remove(),$(".love-car h5").after(r),s.removeClass("show"),$(".love-car").addClass("show"),a.loadMatchGoods()}else $(".match-goods-con > div").removeClass("show"),$(".match-goods-con ul").removeClass("show"),o.initOptionSate(),$(".match-goods-con > div.addError").addClass("show")},function(){$(".match-goods-con > div").removeClass("show"),$(".match-goods-con ul").removeClass("show"),o.initOptionSate(),$(".match-goods-con > div.addError").addClass("show")})}):!1}})},addEvent:function(){var a=this;a.$chooseOP.click(function(){s({modal:!0,complete:function(s){null!=s&&s.Identity&&s.Identity.IsAuthenticated&&a.queryUserCarModel(a.openDialog)}})}),a.$selcancelOP.click(function(){}),a.addLayerEvent()},addLayerEvent:function(){var a=this,s=$("body");s.delegate(".car-list li","mouseenter.popupCar",function(){$(this).addClass("hover")}),s.delegate(".car-list li","mouseleave.popupCar",function(){$(this).removeClass("hover")}),s.delegate(".car-list li","click.popupCar",function(){var s=($(this),$(".car-list li"));s.removeClass("current"),$(this).addClass("current"),$(this).hasClass("null")&&$(this).hasClass("current")?($(".match-goods-choose,.match-goods-list").removeClass("show"),$("#iscgj2").addClass("show"),o.initOptionSate(),$(".no-match-goods").removeClass("show"),$(".match-goods-choose").addClass("show")):($("#iscgj2").removeClass("show"),a.loadMatchGoods())}),s.delegate(".J-car-item .J-del-btn","click.popupCar",function(a){$(this).siblings(".J-item-layer").show(),a.stopPropagation()}),s.delegate(".match-goods-list li","mouseenter.popupCar",function(a){return $(this).siblings().removeClass("active").end().addClass("active"),!1}),s.delegate(".match-goods-list","mouseleave.popupCar",function(a){$(this).find("li").removeClass("active")}),s.delegate(".J-car-item .J-qr-del-btn","click.popupCar",function(s){$(this).parents("li").attr("data-id");a.deleteCar($(this),a),s.stopPropagation()}),s.delegate(".J-car-item .J-qr-cancel-btn","click.popupCar",function(a){$(this).parents("li").find(".J-item-layer").hide(),a.stopPropagation()}),s.delegate(".J-car-layer-con .J-ok-btn","click.popupCar",function(){var s=$(".J-car-item.current");if(s.length){var e=s.attr("data-modelid");a.querySkuListByCarModelId(e),a.carDialog.close()}}),s.delegate(".J-car-layer-con .J-cancel-btn","click.popupCar",function(){a.carDialog.close()})},removeLayerEvent:function(){$("body").undelegate(".popupCar")},querySkuListByCarModelId:function(a){var s=this,e=r.getAreaId().areaIds,o=e[0],i=e[1],l=e[2],d=e[3];$.ajax({url:"//cd.jd.com/auto/skubymodelidarea",data:{modelId:a,skuId:s.cfg.skuid,provinceId:o,cityId:i,areaId:l,townId:d},dataType:"jsonp",jsonpCallback:"skubymodelidCallback",success:function(a){if(a.hasModelOrSku)if(a.model&&a.model.length&&a.model[0].skulist)if(s.skulist=a.model[0].skulist,s.skulist.length){var e=$.inArray(s.cfg.skuid,s.skulist);-1!=e?callback.call(s):location.href="//item.jd.com/"+s.skulist[0]+".html"}else s.updateCarModelTxt(null,null);else s.updateCarModelTxt(null,null);else s.updateCarModelTxt(null,null)}})},getColorSize:function(){},updateCarModelTxt:function(a,s){var e=this,r="",o="",i="";if(a){var l=a.brand_name+" "+a.series_name+" "+a.series_year_name+"\u6b3e "+a.model_name;i='<span class="tips" title="'+l+'" data-carmodelid="'+a.model_id+'" data-carid="'+a.id+'">'+l+"</span>"}"pipei"==s?(r+="\u4e0e\u5546\u54c1\u5339\u914d",o="\u4fee\u6539",e.$selcancelOP.show()):"bupipei"==s?(r+="\u65e0\u5339\u914d\u5546\u54c1\uff0c\u8c28\u614e\u8d2d\u4e70",o="\u4fee\u6539",e.$selcancelOP.show()):(i="\u8bf7\u9009\u62e9\u8f66\u578b\uff0c\u4e3a\u60a8\u7cbe\u786e\u5339\u914d\u5546\u54c1",o="\u9009\u62e9"),e.$wraningTips.html(r),e.$chooseCarTips.html(i),e.$chooseOP.html(o)},isShowCarType:function(){var a=[6766,6767,9248,9971,11849,11852,11859];$.inArray(a,pageConfig.product.cat[2])&&$("#choose-car").addClass("show")},loadMatchGoods:function(){if($(".match-goods-con > div").removeClass("show"),$(".match-goods-con ul").removeClass("show"),0==$(".J-car-item.current").length)return void $(".match-goods-con > div.match-goods-choose").addClass("show");var a=this,s=[],e=r.getAreaId().areaIds,o=e[0],i=e[1],l=e[2],c=e[3],t={modelId:$(".J-car-item.current").attr("data-modelid"),skuId:this.cfg.skuid,provinceId:o,cityId:i,areaId:l,townId:c};$(".match-goods-loading").addClass("show"),$.ajax({url:"//cd.jd.com/auto/skubymodelidarea",data:t,scriptCharset:"gbk",timeout:3e3,dataType:"jsonp",success:function(e){if(a.choosedCarmodelid=$(".J-car-item.current").attr("data-modelid"),e.isMatch&&a.choosedCarmodelid&&e.model[0].skulist.length){$.each(e.model[0].skulist,function(a,e){s.push(e)});var o=e.model[0].skulist.join(","),i={ids:o};$.ajax({url:"//yx.3.cn/service/info.action",data:i,scriptCharset:"gbk",dataType:"jsonp",success:function(e){if(e){a.matchs=[];for(var o in e)a.matchs.push({skuId:o,num:e[o][3],imagePath:e[o].imagePath,color:e[o].color,size:e[o].size,name:e[o].name.length>86?e[o].name.substring(0,86)+"...":e[o].name});var i=d.process({matchs:a.matchs,skuid:a.cfg.skuid});$(".match-goods-list li").remove(),$(".match-goods-loading").removeClass("show"),$(".match-goods-list").html(i),$(".match-goods-list,.love-car").addClass("show"),r.priceNum({skus:s,$el:$(".match-goods-list")})}else $(".match-goods-loading").removeClass("show"),$(".love-car").addClass("show"),$(".match-goods-con > div.no-match-goods").addClass("show")},error:function(){$(".match-goods-loading").removeClass("show"),$(".love-car").addClass("show"),$(".match-goods-con > div.no-match-goods").addClass("show")}})}else $(".match-goods-loading").removeClass("show"),$(".love-car").addClass("show"),$(".match-goods-con > div.no-match-goods").addClass("show")},error:function(){$(".match-goods-loading").removeClass("show"),$(".love-car").addClass("show"),$(".match-goods-con > div.no-match-goods").addClass("show")}})},deleteCar:function(a,s){var e={userPin:readCookie("pin")||"",id:a.parents(".J-car-item").attr("data-id")};$.ajax({url:"//cd.jd.com/auto/delmodel",data:e,scriptCharset:"gbk",timeout:3e3,dataType:"jsonp",success:function(a){if(a.isSuccess){a.userModels?(s.choosedCarmodelid=a.userModels[0].model_id,s.userCarArr=a.userModels):(a.userModels=[],s.userCarArr=a.userModels);var e=l.process({cars:s.userCarArr,choosedCarmodelid:s.choosedCarmodelid,skuid:s.cfg.skuid});$(".love-car .car-list").remove(),$(".love-car h5").after(e),$(".love-car li.J-car-item").length<4&&$(".love-car p.tips").remove(),s.loadMatchGoods()}else $(".match-goods-con > div").removeClass("show"),$(".match-goods-con ul").removeClass("show"),$(".match-goods-con > div.deleteError").addClass("show")},error:function(){$(".match-goods-con > div").removeClass("show"),$(".match-goods-con ul").removeClass("show"),$(".match-goods-con > div.deleteError").addClass("show")}})}};module.exports.__id="popupCar",module.exports.init=a});