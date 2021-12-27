define('storelocator_accesspoints_headerlink.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":55}}}) : helper)))
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return "storelocator-accesspoints-headerlink-link";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<a href=\"#stores\" class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasClass") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":112}}})) != null ? stack1 : "")
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"touchpoint","hash":{},"data":data,"loc":{"start":{"line":1,"column":131},"end":{"line":1,"column":145}}}) : helper)))
    + "\" data-hashtag=\"#stores\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Store Locator",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":1,"column":177},"end":{"line":1,"column":206}}}))
    + "\">\r\n	<i class=\"storelocator-accesspoints-headerlink-link-icon\"> </i>\r\n	<span class=\"storelocator-accesspoints-headerlink-link-text\"> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"title") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":63},"end":{"line":3,"column":82}}}))
    + "</span>\r\n</a>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'storelocator_accesspoints_headerlink'; return template;});