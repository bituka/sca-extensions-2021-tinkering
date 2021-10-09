define('order_wizard_register_guest_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"order-wizard-register-guest-module-form-container collapse\" id=\"register-guest-show-view\">\n	<form>\n		<div data-view=\"RegisterGuestForm\"></div>\n 		<p>\n			<button type=\"submit\" class=\"order-wizard-register-guest-module-create-account-button\">\n				"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Create Account",{"name":"translate","hash":{},"data":data}))
    + "\n			</button>\n		</p>\n	</form>\n</div>\n<p>\n	<button class=\"order-wizard-register-guest-module-button-toggle-create-account\" data-action=\"remove-button\" data-toggle=\"collapse\" data-target=\"#register-guest-show-view\">\n		"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Create Account",{"name":"translate","hash":{},"data":data}))
    + "\n	</button>\n</p>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_register_guest_module'; return template;});