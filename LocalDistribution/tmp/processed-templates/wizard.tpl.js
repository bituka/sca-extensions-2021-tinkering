define('wizard.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "<header class=\"wizard-header\">\r\n	<h1 class=\"wizard-header-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":33},"end":{"line":3,"column":57}}}))
    + "</h1>\r\n	<div data-view=\"Wizard.StepNavigation\"></div>\r\n</header>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showBreadcrumb") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "<div id=\"wizard-content\" class=\"wizard-content\"></div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'wizard'; return template;});