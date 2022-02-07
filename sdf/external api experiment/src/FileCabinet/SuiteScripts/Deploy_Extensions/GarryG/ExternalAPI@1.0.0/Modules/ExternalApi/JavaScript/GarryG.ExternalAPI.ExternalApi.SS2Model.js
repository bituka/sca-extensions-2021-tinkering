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
