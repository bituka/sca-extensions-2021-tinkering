define('facets_items_collection_view_row.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"facets-items-collection-view-row\">\n	<div data-type=\"backbone.collection.view.cells\"></div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_items_collection_view_row'; return template;});