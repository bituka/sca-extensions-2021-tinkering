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
		, 	'click [data-action="create-post"]': 'createPost'
		}

	,	createPost: function(e) {
			e.preventDefault();
			// console.log('GarryG.ExternalAPI.ExternalApi.View.createPost', e);

			this.model.save({
				title: 'foo',
				body: 'bar',
				userId: 1,
			}).done(function(result) {
				// this.model.fetch().done(function(result) {
			console.log('GarryG.ExternalAPI.ExternalApi.View.createPost result', result);

			// 	self.message = result.message;
			// 	self.render();
			});
		}

	,	getDetail: function(e) {
			// console.log('GarryG.ExternalAPI.ExternalApi.View.getDetail', e);
			this.model.fetch({
				data: {
					id: this.modelid
				}
			}).done(function(result) {
				// this.model.fetch().done(function(result) {
			console.log('GarryG.ExternalAPI.ExternalApi.View.getDetail', result);

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
