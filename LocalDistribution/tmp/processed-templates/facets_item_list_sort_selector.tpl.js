define('facets_item_list_sort_selector.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"configOptionUrl") || (depth0 != null ? compilerNameLookup(depth0,"configOptionUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"configOptionUrl","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " >"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " selected=\"\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<label for=\"\" class=\"facets-item-list-sort-label\">Sort By</label>\n<select data-type=\"navigator\" class=\"facets-item-list-sort-selector\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"options") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Horizon/3.0.7/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_item_list_sort_selector'; return template;});