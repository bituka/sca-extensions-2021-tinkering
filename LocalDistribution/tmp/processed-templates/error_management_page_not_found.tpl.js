define('error_management_page_not_found.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "background-image: url("
    + container.escapeExpression((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"backgroundImage") : stack1),"img/summit-page-not-found.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":5,"column":124},"end":{"line":5,"column":221}}}))
    + ");";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "background-color: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"backgroundColor") : stack1), depth0))
    + ";";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<h1>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0)) != null ? stack1 : "")
    + "</h1>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":11,"column":9},"end":{"line":11,"column":23}}}) : helper)))
    + "</h1>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<p class=\"error-management-page-not-found-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1), depth0))
    + "</p>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<div class=\"error-management-page-not-found-button-container\">\n				<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"btnHref") : stack1), depth0))
    + "\" class=\"error-management-page-not-found-button\">\n					"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"btnText") : stack1), depth0))
    + "\n				</a>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"error-management-page-not-found\">\n	<div data-cms-area=\"error_management_page_not_found_cms_area_1\" data-cms-area-filters=\"path\"></div>\n    <div class=\"error-management-page-not-found-header\" style=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"backgroundImage") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":63},"end":{"line":5,"column":230}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"backgroundColor") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":230},"end":{"line":5,"column":330}}})) != null ? stack1 : "")
    + "\">\n		<div class=\"error-management-page-not-found-caption\">\n			<div class=\"error-management-page-not-found-title\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"errorManagement") : depth0)) != null ? compilerNameLookup(stack1,"btnText") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":23,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n    </div>\n\n	<div id=\"error-management-page-not-found-content\" class=\"error-management-page-not-found-content\"></div>\n\n	<div data-cms-area=\"error_management_page_not_found_cms_area_2\" data-cms-area-filters=\"path\"></div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'error_management_page_not_found'; return template;});