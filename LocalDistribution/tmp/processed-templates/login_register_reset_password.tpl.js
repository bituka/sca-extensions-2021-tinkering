define('login_register_reset_password.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"login-register-reset-password-body\">\n	<h2 class=\"login-register-reset-password-title\">\n		"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Reset Password",{"name":"translate","hash":{},"data":data}))
    + "\n	</h2>\n\n	<form class=\"login-register-reset-password-form\" novalidate>\n		<p class=\"login-register-reset-password-description\">\n			"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Enter a new password below",{"name":"translate","hash":{},"data":data}))
    + "\n		</p>\n\n		<fieldset>\n			<div class=\"login-register-reset-password-control-group\" data-validation=\"control-group\">\n				<label class=\"login-register-reset-password-control-label\" for=\"password\">\n					"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Password <small class=\"login-register-reset-password-forgot-password-form-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "\n				</label>\n				<div class=\"login-register-reset-password-controls\" data-validation=\"control\">\n					<input type=\"password\" class=\"login-register-reset-password-input\" id=\"password\" name=\"password\" value=\"\">\n				</div>\n			</div>\n\n			<div class=\"login-register-reset-password-control-group\" data-validation=\"control-group\">\n				<label class=\"login-register-reset-password-control-label\" for=\"confirm_password\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Confirm Password <small class=\"login-register-reset-password-forgot-password-form-required\">*</small>",{"name":"translate","hash":{},"data":data}))
    + "</label>\n				<div class=\"login-register-reset-password-controls\" data-validation=\"control\">\n					<input type=\"password\" class=\"login-register-reset-password-input\" id=\"confirm_password\" name=\"confirm_password\" value=\"\">\n				</div>\n			</div>\n\n			<div data-type=\"alert-placeholder\"></div>\n\n			<div class=\"login-register-reset-password-control-group\">\n				<button type=\"submit\" class=\"login-register-reset-password-submit\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Change Password",{"name":"translate","hash":{},"data":data}))
    + "</button>\n				<a class=\"login-register-reset-password-sign-in\" href=\"/login-register\" data-target=\".register\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Cancel & Return To Log in",{"name":"translate","hash":{},"data":data}))
    + "</a>\n			</div>\n\n		</fieldset>\n	</form>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_reset_password'; return template;});