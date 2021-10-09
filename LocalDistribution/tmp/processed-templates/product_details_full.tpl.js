define('product_details_full.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<form id=\"product-details-full-form\" data-action=\"submit-form\" method=\"POST\">\n\n						<section class=\"product-details-full-info\">\n							<div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\n						</section>\n\n						<div data-view=\"Product.Price\"></div>\n						<div data-view=\"Quantity.Pricing\"></div>\n\n						<div data-cms-area=\"product_details_full_cms_area_4\" data-cms-area-filters=\"path\"></div>\n\n						<div data-view=\"Product.Sku\"></div>\n\n						<section data-view=\"Product.Options\"></section>\n						<div data-view=\"Product.Stock.Info\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n						<div data-view=\"StockDescription\"></div>\n\n						<div data-view=\"SocialSharing.Flyout\" class=\"product-details-full-social-sharing\"></div>\n\n						<div class=\"product-details-full-main-bottom-banner\">\n							<div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\n						</div>\n					</form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<div data-view=\"Quantity\"></div>\n\n							<section class=\"product-details-full-actions\">\n\n								<div class=\"product-details-full-actions-container\">\n									<div data-view=\"MainActionView\"></div>\n								</div>\n								<div class=\"product-details-full-actions-container\">\n									<div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-full-actions-addtoquote\"></div>\n\n                                    <div data-view=\"AddToProductList\" class=\"product-details-full-actions-addtowishlist\"></div>\n								</div>\n\n							</section>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"product-details-full\">\n	<div data-cms-area=\"item_details_banner\" data-cms-area-filters=\"page_type\"></div>\n\n	<header class=\"product-details-full-header\">\n		<div id=\"banner-content-top\" class=\"product-details-full-banner-top\"></div>\n	</header>\n\n	<article class=\"product-details-full-content\">\n\n		<div id=\"banner-details-top\" class=\"product-details-full-banner-top-details\"></div>\n\n		<section class=\"product-details-full-main-content\">\n			<div class=\"product-details-full-content-header\">\n				<div data-cms-area=\"product_details_full_cms_area_1\" data-cms-area-filters=\"page_type\"></div>\n				<h1 class=\"product-details-full-content-header-title\" itemprop=\"name\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1>\n				<div class=\"product-details-full-rating\" data-view=\"Global.StarRating\"></div>\n				<div data-cms-area=\"item_info\" data-cms-area-filters=\"path\"></div>\n			</div>\n			<div class=\"product-details-full-main-content-left\">\n				<div class=\"product-details-full-image-gallery-container\">\n					<div id=\"banner-image-top\" class=\"content-banner banner-image-top\"></div>\n					<div data-view=\"Product.ImageGallery\"></div>\n					<div id=\"banner-image-bottom\" class=\"content-banner banner-image-bottom\"></div>\n					<div data-cms-area=\"product_details_full_cms_area_2\" data-cms-area-filters=\"path\"></div>\n					<div data-cms-area=\"product_details_full_cms_area_3\" data-cms-area-filters=\"page_type\"></div>\n				</div>\n			</div>\n\n			<div class=\"product-details-full-main-content-right\">\n			<div class=\"product-details-full-divider\"></div>\n\n			<div class=\"product-details-full-main\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n				<div id=\"banner-details-bottom\" class=\"product-details-full-banner-details-bottom\" data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div>\n			</div>\n			</div>\n\n		</section>\n\n		<div data-cms-area=\"product_details_full_cms_area_5\" data-cms-area-filters=\"page_type\"></div>\n		<div data-cms-area=\"product_details_full_cms_area_6\" data-cms-area-filters=\"path\"></div>\n\n		<section data-view=\"Product.Information\"></section>\n\n		<div data-cms-area=\"product_details_full_cms_area_7\" data-cms-area-filters=\"path\"></div>\n\n		<div data-view=\"ProductReviews.Center\"></div>\n\n		<div data-cms-area=\"product_details_full_cms_area_8\" data-cms-area-filters=\"path\"></div>\n\n		<div class=\"product-details-full-content-related-items\">\n			<div data-view=\"Related.Items\"></div>\n		</div>\n\n		<div class=\"product-details-full-content-correlated-items\">\n			<div data-view=\"Correlated.Items\"></div>\n		</div>\n		<div id=\"banner-details-bottom\" class=\"content-banner banner-details-bottom\" data-cms-area=\"item_details_banner_bottom\" data-cms-area-filters=\"page_type\"></div>\n	</article>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_full'; return template;});