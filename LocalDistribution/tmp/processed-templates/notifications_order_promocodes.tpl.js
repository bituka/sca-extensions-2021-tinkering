define('notifications_order_promocodes.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-view=\"Promocode.Notification\"></div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Summit/3.1.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'notifications_order_promocodes'; return template;});