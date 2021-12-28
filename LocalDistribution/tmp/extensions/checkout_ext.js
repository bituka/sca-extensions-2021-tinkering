var extensions = {};

extensions['GarryG.ExternalAPI.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/GarryG/ExternalAPI/1.0.0/' + asset;
}

// @module GarryG.ExternalAPI.ExternalApi
define('GarryG.ExternalAPI.ExternalApi.View'
,	[
	'garryg_externalapi_externalapi.tpl'

	,	'GarryG.ExternalAPI.ExternalApi.SS2Model'
	,	'GarryG.ExternalAPI.ExternalApi.Model'
	,	'Backbone'
	,	'jQuery'
	,	'Utils'
    ]
, function (
	garryg_externalapi_externalapi_tpl

	,	ExternalApiSS2Model
	,	ExternalApiModel
	,	Backbone
	,	jQuery
	,	Utils
)
{
    'use strict';

	// @class GarryG.ExternalAPI.ExternalApi.View @extends Backbone.View
	return Backbone.View.extend({

		template: garryg_externalapi_externalapi_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// console.log('GarryG.ExternalAPI.ExternalApi.View.initialize', ExternalApiSS2Model);

			// console.log('GarryG.ExternalAPI.ExternalApi.View.initialize', ExternalApiModel);
			this.modelid = '1';
			this.model = new ExternalApiModel();
			// // this.model = new ExternalApiSS2Model();
			var self = this;
         	// this.model.fetch({
			// 	data: {
			// 		id: self.modelid
			// 	}
			// }).done(function(result) {
			this.model.fetch().done(function(result) {
				console.log('GarryG.ExternalAPI.ExternalApi.View.initialize', result);

			// 	self.message = result.message;
			// 	self.render();
			});

			// var defer = jQuery.Deferred();

			// jQuery.get(Utils.getAbsoluteUrl('extensions/GarryG/ExternalAPI/1.0.0/services/ExternalApi.Service.ss?c=TSTDRV2489765&n=7&id='+this.modelid)).then(function(result){

			// 	console.log('GarryG.ExternalAPI.ExternalApi.View.initialize', result);
			// }).always(function(){
			// 	defer.resolve();
			// });

			// return defer;

		}

	// ,	beforeShowContent: function()
	// 	{
	// 		return jQuery.when(
	// 			this.model.fetch({
	// 				killerId: AjaxRequestsKiller.getKillerId()
	// 			})
	// 		,	this.fields.fetch({
	// 				killerId: AjaxRequestsKiller.getKillerId()
	// 			})
	// 		);
	// 	}

	,	events: {
		'click [data-action="get-detail"]': 'getDetail'

		}

	,	getDetail: function(e) {
			// console.log('GarryG.ExternalAPI.ExternalApi.View.getDetail', e);
			this.model.fetch({
				data: {
					id: this.modelid
				}
			}).done(function(result) {
				// this.model.fetch().done(function(result) {
			console.log('GarryG.ExternalAPI.ExternalApi.View.initialize', result);

			// 	self.message = result.message;
			// 	self.render();
			});
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return GarryG.ExternalAPI.ExternalApi.View.Context
	,	getContext: function getContext()
		{
			//@class GarryG.ExternalAPI.ExternalApi.View.Context
			this.message = this.message || 'Hello World!!'
		,	this.modelid = this.modelid
			return {
				message: this.message
			,	modelid: this.modelid
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("GarryG.ExternalAPI.ExternalApi.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ExternalApi.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("GarryG.ExternalAPI.ExternalApi.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ExternalApi/SuiteScript2/ExternalApi.Service.ss"
            ),
            true
        )
});
});



define(
	'GarryG.ExternalAPI.ExternalApi'
,   [
		'GarryG.ExternalAPI.ExternalApi.View'
	]
,   function (
		ExternalApiView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

			/** @type {LayoutComponent} */
			// var layout = container.getComponent('Layout');

			// if(layout)
			// {
			// 	layout.addChildView('Header.Logo', function() {
			// 		return new ExternalApiView({ container: container });
			// 	});
			// }

			var checkout = container.getComponent('Checkout');

			checkout.addModuleToStep(
			{
				step_url: 'billing'
				, module: {
					id: 'ExternalApiView'
					, index: 99
					, classname: 'GarryG.ExternalAPI.ExternalApi.View'
				}
			});
		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["GarryG.ExternalAPI.ExternalApi.View","GarryG.ExternalAPI.ExternalApi.Model","GarryG.ExternalAPI.ExternalApi.SS2Model"];
try{
	extensions['GarryG.ExternalAPI.1.0.0']();
	SC.addExtensionModule('GarryG.ExternalAPI.ExternalApi');
}
catch(error)
{
	console.error(error);
}

