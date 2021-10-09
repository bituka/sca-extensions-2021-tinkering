define('store_locator_main.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"store-locator-main\">\n	<div class=\"store-locator-main-title\">\n		<h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n	</div>\n\n	<div class=\"store-locator-main-layout\">\n		<div class=\"store-locator-main-layout-left\">\n			<div class=\"store-locator-main-search\" data-view=\"StoreLocatorSearch\"></div>\n			<div class=\"store-locator-main-results\" data-view=\"StoreLocatorResults\"></div>\n			<div class=\"store-locator-main-see-all-stores\">\n				<a data-touchpoint=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"touchpoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\"stores/all\" href=\"stores/all\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"See complete list of stores",{"name":"translate","hash":{},"data":data}))
    + "</a>\n			</div>\n		</div>\n		<div class=\"store-locator-main-layout-right\">\n			<div class=\"store-locator-main-map\" data-view=\"StoreLocatorMap\" data-type=\"map-view\"></div>\n		</div>\n	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'store_locator_main'; return template;});