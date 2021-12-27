// @module GarryG.ExternalAPI.ExternalApi
define('GarryG.ExternalAPI.ExternalApi.View'
,	[
	'garryg_externalapi_externalapi.tpl'

	,	'GarryG.ExternalAPI.ExternalApi.SS2Model'
	,	'GarryG.ExternalAPI.ExternalApi.Model'
	,	'Backbone'
    ]
, function (
	garryg_externalapi_externalapi_tpl

	,	ExternalApiSS2Model
	,	ExternalApiModel
	,	Backbone
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
			this.model = new ExternalApiModel();
			// this.model = new ExternalApiSS2Model();
			var self = this;
         	this.model.fetch().done(function(result) {
				console.log('GarryG.ExternalAPI.ExternalApi.View.initialize', result);

				self.message = result.message;
				self.render();
      		});
		}

	,	events: {
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
			return {
				message: this.message
			};
		}
	});
});
