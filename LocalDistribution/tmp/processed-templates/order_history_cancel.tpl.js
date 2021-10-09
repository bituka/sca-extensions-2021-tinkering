define('order_history_cancel.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"order-history-cancel-modal\">\n	<h4>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Cancel order?",{"name":"translate","hash":{},"data":data}))
    + "</h4>\n	<p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<strong>Please note:</strong> This will cancel your entire purchase #$(0) for $(1).",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1),((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1),{"name":"translate","hash":{},"data":data}))
    + "</p>\n\n	<div class=\"order-history-cancel-modal-actions\">\n		<button class=\"order-history-cancel-modal-cancel-button\" data-dismiss=\"modal\" data-action=\"delete\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Cancel Purchase",{"name":"translate","hash":{},"data":data}))
    + "\n		</button>\n		<button class=\"order-history-cancel-modal-close-button\" data-dismiss=\"modal\" data-action=\"cancel\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Close",{"name":"translate","hash":{},"data":data}))
    + "\n		</button>\n	</div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_history_cancel'; return template;});