/*!Name: carButler.js
 * Date: 2017-2-14 17:14:15 */
define("MOD_ROOT/js/carButler",function(require,exports,module){function e(e){this.$el=$(e.el),this.isGoToCarPage=e.isGoToCarPage||!1,this.$carBrand=this.$el.find(".car-filter-item1"),this.$carSeries=this.$el.find(".car-filter-item2"),this.$carYear=this.$el.find(".car-filter-item3"),this.$carModel=this.$el.find(".car-filter-item4"),this.$searchButton=this.$el.find(".car-filter-btn"),this.loadBrandList(),this.bindEvent(),this.carModelId=null,pageConfig.product.catName&&this.$searchButton.html("\u67e5\u627e"+pageConfig.product.catName[2])}function r(e){var r={};return $.each(e.data,function(e,t){(r[t.factory]=r[t.factory]||[]).push(t)}),r}function t(e){var r=[];return $.each(e,function(e,t){t.hot>0&&r.push(t)}),r.sort(function(e,r){return e.hot-r.hot}),r.slice(0,20)}require("MOD_ROOT/js/ELazyload"),require("JDF_UNIT/js/trimPath");var i={9248:"6",9971:"11",11849:"1",11850:"1",11852:"2",6767:"5",6766:"13",11859:"8",13244:"9",6756:"10",6768:"12"},a={},n={brand:"//autobeta.jd.com/queryBrands",series:"//autobeta.jd.com/querySeries",year:"//autobeta.jd.com/querySeriesYear",model:"//autobeta.jd.com/queryModel"},d='{for brand in brandList}<li class="hide" data-initial="${brand.initial}" data-id="${brand.brandId}"> <img data-src="${pageConfig.FN_GetImageDomain(brand_index)}n1/s48x48_${brand.logoUrl}"> <a href="javascript:void(0)">${brand.brandName}</a></li>{/for}{for brand in hotBrands}<li class="J-hot" data-id="${brand.brandId}"> <img data-src="${pageConfig.FN_GetImageDomain(brand_index)}n1/s48x48_${brand.logoUrl}"> <a href="javascript:void(0)">${brand.brandName}</a></li>{/for}',s='{for seriesList in data}<div class="menu-brand-title"><i></i>${seriesList_index}</div><ul class="menu-drop-list">   {for series in seriesList}   <li data-id="${series.seriesId}"><a href="javascript:void(0)">${series.seriesName}</a></li>   {/for}</ul>{/for}',o='{for series in data}<li data-id="${series.seriesYearId}"> <a href="javascript:void(0)">${series.seriesYear}</a></li>{/for}',l='{for model in data}<li data-id="${model.modelId}"> <a href="javascript:void(0)">${model.modelName}</a></li>{/for}',c=null;$.extend(e.prototype,{loadBrandList:function(){var e=this;e._get(n.brand,function(r){var i=t(r.data);e.$carBrand.find(".menu-drop-list").html(d.process({brandList:r.data,hotBrands:i})),e.checkBrandFilterIsHidden()})},loadSeriesList:function(){var e=this;a.brand&&e._get(n.series,a,function(t){var i=r(t);e.$carSeries.find(".menu-drop-list-container").html(s.process({data:i}))})},loadYearList:function(){var e=this;a.series&&e._get(n.year,a,function(r){e.$carYear.find(".menu-drop-list").html(o.process({data:r.data}))})},loadModelList:function(){var e=this;e._get(n.model,a,function(r){e.$carModel.find(".menu-drop-list").html(l.process({data:r.data}))})},bindEvent:function(){var e,r=this,t=this.$carBrand.find(".menu-drop-list"),i=this.$carBrand.find(".menu-drop-letter-list"),n=this.$carSeries.find(".menu-drop-list-container"),d=this.$carSeries.find(".trigger"),s=this.$carYear.find(".menu-drop-list"),o=this.$carYear.find(".trigger"),l=this.$carModel.find(".menu-drop-list"),u=this.$carModel.find(".trigger"),f=this.$el.find(".car-filter-item1, .car-filter-item2, .car-filter-item3, .car-filter-item4");f.die("mouseenter").live("mouseenter",function(){$(this).addClass("z-menu-drop-open"),$(this).ELazyload()}),f.die("mouseleave").live("mouseleave",function(){$(this).removeClass("z-menu-drop-open")}),this.$searchButton.die("click").live("click",function(e){return r.carModelId?void 0:(e.preventDefault(),!1)}),t.delegate("li","click",function(e){e.preventDefault();var t=$(this);t.hasClass("curr")||(t.siblings().removeClass("curr").end().addClass("curr"),r._setCurrentBrand($.trim(t.text()),t.data("id")),r._setCurrentSeries(),r.loadSeriesList(),r.$el.find(".car-filter-item2 .menu-drop-hint").hide(),r.$carBrand.removeClass("z-menu-drop-open"))}),i.delegate("a","mouseenter",function(r){var i=$(this),a=i.parent(),n=i.text();a.hasClass("curr")||(a.siblings().removeClass("curr").end().addClass("curr"),e=t.find("li"),a.hasClass("fore0")?e.hide().filter(".J-hot").show():e.each(function(){var e=$(this);e.data("initial")===n?e.show():e.hide()}))}),i.delegate("a","click",function(e){e.preventDefault()}),n.delegate("li","click",function(e){e.preventDefault();var t=$(this);t.hasClass("curr")||(t.siblings().removeClass("curr").end().addClass("curr"),r._setCurrentSeries(t.text(),t.data("id")),r._setCurrentYear(),r.loadYearList(),r.$el.find(".car-filter-item3 .menu-drop-hint").hide(),r.$carSeries.removeClass("z-menu-drop-open"))}),d.bind("mouseenter",function(){a.brand?n.parent().removeClass("z-menu-drop-hint"):n.parent().addClass("z-menu-drop-hint")}),s.delegate("li","click",function(e){e.preventDefault();var t=$(this);t.hasClass("curr")||(t.siblings().removeClass("curr").end().addClass("curr"),r._setCurrentYear(t.text(),t.data("id")),r._setCurrentModel(),r.loadModelList(),r.$el.find(".car-filter-item4 .menu-drop-hint").hide(),r.$carYear.removeClass("z-menu-drop-open"))}),o.bind("mouseenter",function(){a.series?s.parent().removeClass("z-menu-drop-hint"):s.parent().addClass("z-menu-drop-hint")}),l.delegate("li","click",function(e){e.preventDefault();var t=$(this);t.hasClass("curr")||(t.siblings().removeClass("curr").end().addClass("curr"),r._setCurrentModel(t.text()),r.carModelId=t.data("id"),r.isGoToCarPage?r.updateLink():r.updateModelid(),r.$carModel.removeClass("z-menu-drop-open"))}),u.bind("mouseenter",function(){c&&0!=c.length?l.parent().removeClass("z-menu-drop-hint"):l.parent().addClass("z-menu-drop-hint")})},updateLink:function(){var e="//autobeta.jd.com/maintain?";this.carModelId&&(e+="catIndex="+i[pageConfig.product.cat[2]]+"&modelId="+this.carModelId,this.$searchButton.attr("href",e))},updateModelid:function(){this.carModelId&&this.$searchButton.attr("choosedCarmodelid",this.carModelId)},addNewCar:function(e,r){var t=this;this.$el.find(".car-filter-btn").die("click").live("click",function(){var i=$(this).parents(".car-filter"),a=t.checkChooseNewCarCompleted(i),n={userPin:readCookie("pin")||"",modelId:$(this).attr("choosedCarmodelid")};a&&$.ajax({url:"//cd.jd.com/auto/addmodel",data:n,scriptCharset:"gbk",timeout:3e3,dataType:"jsonp",success:function(r){e&&e(i,r)},error:function(){r&&r(i)}})})},initOptionSate:function(){var e=this.$carBrand.find(".trigger span"),r=this.$carBrand.find(".menu-drop-letter-list"),t=this.$carBrand.find(".menu-drop-list"),i=this.$carSeries.find(".trigger span"),a=this.$carSeries.find(".menu-drop-hint"),n=this.$carSeries.find(".menu-drop-list-container"),d=this.$carYear.find(".trigger span"),s=this.$carYear.find(".menu-drop-hint"),o=this.$carYear.find(".menu-drop-list"),l=this.$carModel.find(".trigger span"),c=this.$carModel.find(".menu-drop-hint"),u=this.$carModel.find(".menu-drop-list"),f=this.$el.find(".car-filter-btn");e.text("\u54c1\u724c"),r.find("li").removeClass("curr").end().find("li.fore0").addClass("curr"),t.find("li.hide").hide().end().find("li.curr").removeClass("curr").end().find("li.J-hot").show(),i.text("\u8f66\u7cfb"),n.html(""),a.show(),d.text("\u5e74\u6b3e"),o.html(""),s.show(),l.text("\u8f66\u578b"),u.html(""),c.show(),f.attr("choosedcarmodelid","")},checkBrandFilterIsHidden:function(){var e=this.$carBrand.find(".menu-drop-letter-list li"),r=this.$carBrand.find(".menu-drop-list li"),t=[];r.each(function(){var e=$(this).attr("data-initial");-1==$.inArray(e,t)&&t.push(e)}),e.each(function(){var e=$.trim($(this).find("a").text());-1==$.inArray(e,t)&&"\u70ed\u95e8"!=e&&$(this).hide()})},checkChooseNewCarCompleted:function(e){var r=e.find(".car-filter-item1 .trigger span"),t=e.find(".car-filter-item1 .menu-drop-letter-list"),i=e.find(".car-filter-item1 .menu-drop-list"),a=e.find(".car-filter-item2 .trigger span"),n=e.find(".car-filter-item3 .trigger span"),d=e.find(".car-filter-item4 .trigger span"),s=e.find(".car-filter-item1, .car-filter-item2, .car-filter-item3, .car-filter-item4");return s.removeClass("z-menu-drop-open"),"\u54c1\u724c"==r.text()?(t.find("li").removeClass("curr").end().find("li.fore0").addClass("curr"),i.find("li.hide").hide().end().find("li.J-hot").removeClass("curr").show(),s.eq(0).trigger("mouseenter").addClass("z-menu-drop-open").ELazyload()):"\u8f66\u7cfb"==a.text()?s.eq(1).trigger("mouseenter").addClass("z-menu-drop-open").ELazyload():"\u5e74\u6b3e"==n.text()?s.eq(2).trigger("mouseenter").addClass("z-menu-drop-open").ELazyload():"\u8f66\u578b"==d.text()&&s.eq(3).trigger("mouseenter").addClass("z-menu-drop-open").ELazyload(),!e.find(".z-menu-drop-open").length},_get:function(e,r,t){$.isFunction(r)&&(t=r,r={}),$.ajax({url:e,data:r,scriptCharset:"utf-8",dataType:"jsonp",success:function(e){(t||$.noop)(e)}})},_setCurrentBrand:function(e,r){a.brand=r,delete a.series,this.$carBrand.find(".trigger span").text(e||"\u54c1\u724c")},_setCurrentSeries:function(e,r){a.series=r,this.$carSeries.find(".trigger span").text(e||"\u8f66\u7cfb"),e||this._setCurrentYear()},_setCurrentYear:function(e,r){a.seriesYear=r,c=$.trim(e),this.$carYear.find(".trigger span").text(e||"\u5e74\u6b3e"),e||this._setCurrentModel()},_setCurrentModel:function(e){this.$carModel.find(".trigger span").text(e||"\u8f66\u578b"),e||(this.carModelId=null)}}),module.exports=e});
