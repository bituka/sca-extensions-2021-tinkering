define('header.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1), depth0))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "					<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Two Days only - Free Shipping on orders over $50",{"name":"translate","hash":{},"data":data}))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                        <li class=\"header-subheader-settings\">\n                            <a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data}))
    + "\">\n                                <i class=\"header-menu-settings-icon\"></i>\n                                <i class=\"header-menu-settings-carret\"></i>\n                            </a>\n                            <div class=\"header-menu-settings-dropdown\">\n                                <h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data}))
    + "</h5>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\n                        </li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                                    <div data-view=\"Global.HostSelector\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                                    <div data-view=\"Global.CurrencySelector\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"header-message\" data-view=\"Message.Placeholder\"></div>\n\n<div class=\"header-main-wrapper\">\n    <nav class=\"header-main-nav\">\n\n        <div class=\"header-sidebar-toggle-wrapper\">\n            <button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\">\n                <i class=\"header-sidebar-toggle-icon\"></i>\n            </button>\n        </div>\n\n        <div class=\"header-content\">\n            <!--div class=\"header-logo-wrapper\">\n                <div data-view=\"Header.Logo\"></div>\n            </div-->\n\n            <div class=\"header-left-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraHeaderView") : depth0)) != null ? compilerNameLookup(stack1,"bannertext") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <div class=\"header-right-menu\">\n                <ul class=\"header-right-menu-options\">\n                    <li class=\"header-menu-storelocator-list-item\" data-view=\"StoreLocatorHeaderLink\"></li>\n                    <li data-view=\"RequestQuoteWizardHeaderLink\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Request a Quote",{"name":"translate","hash":{},"data":data}))
    + "</li>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <li data-view=\"QuickOrderHeaderLink\"></li>\n                </ul>\n                <div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div>\n\n                <div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div>\n                <div class=\"header-menu-searchmobile\">\n                    <button class=\"header-menu-searchmobile-link\" data-action=\"show-sitesearch\" title=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Search",{"name":"translate","hash":{},"data":data}))
    + "\">\n                        <i class=\"header-menu-searchmobile-icon\"></i>\n                    </button>\n                </div>\n\n                <div class=\"header-menu-cart\">\n                    <div class=\"header-menu-cart-dropdown\">\n                        <div data-view=\"Header.MiniCart\"></div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </nav>\n</div>\n\n<div class=\"logo-and-menu\">\n  <div class=\"header-logo-wrapper\">\n      <div data-view=\"Header.Logo\"></div>\n  </div>\n  <div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div>\n</div>\n\n<div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div>\n\n<div class=\"header-site-search\" data-view=\"SiteSearch\" data-type=\"SiteSearch\"></div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header'; return template;});