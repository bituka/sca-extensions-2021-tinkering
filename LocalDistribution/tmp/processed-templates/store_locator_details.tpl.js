define('store_locator_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"store-locator-details\">\n	<div class=\"store-locator-details-title\">\n		<h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n	</div>\n	<div class=\"store-locator-details-layout\">\n		<div class=\"store-locator-details-layout-left\">\n			<div class=\"store-locator-details-main-details-info\">\n				<div class=\"store-locator-details-main-nav-back\" data-type=\"sc-pusher-header\">\n					<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"redirectUrl") || (depth0 != null ? compilerNameLookup(depth0,"redirectUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"redirectUrl","hash":{},"data":data}) : helper)))
    + "\" data-action=\"sc-pusher-dismiss\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back to list of stores",{"name":"translate","hash":{},"data":data}))
    + "</a>\n				</div>\n\n				<div class=\"store-locator-details-store-info\">\n					<div data-view=\"StoreLocationInfo\"></div>\n\n					<a class=\"store-locator-details-get-directions-link\" target=\"_blank\" href="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"directionUrl") || (depth0 != null ? compilerNameLookup(depth0,"directionUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"directionUrl","hash":{},"data":data}) : helper)))
    + ">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Get directions",{"name":"translate","hash":{},"data":data}))
    + "</a>\n				</div>\n			</div>\n		</div>\n		<div class=\"store-locator-details-layout-right\">\n			<div class=\"store-locator-details-map\" data-view=\"LocatorMap\" data-type=\"map-view\"></div>\n			<div class=\"store-locator-details-get-directions-button-container\">\n				<a class=\"store-locator-details-get-directions-button\" target=\"_blank\" href="
    + alias4(((helper = (helper = compilerNameLookup(helpers,"directionUrl") || (depth0 != null ? compilerNameLookup(depth0,"directionUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"directionUrl","hash":{},"data":data}) : helper)))
    + ">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Get directions",{"name":"translate","hash":{},"data":data}))
    + "</a>\n			</div>\n		</div>\n	</div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'store_locator_details'; return template;});