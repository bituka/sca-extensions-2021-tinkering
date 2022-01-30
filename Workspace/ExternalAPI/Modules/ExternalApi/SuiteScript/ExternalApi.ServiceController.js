define("GarryG.ExternalAPI.ExternalApi.ServiceController"
, ["ServiceController", 'ExternalApi.Model']
, function(
  ServiceController
, ExternalApiModel
) {
  "use strict";

  return ServiceController.extend({
    name: "GarryG.ExternalAPI.ExternalApi.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {

      var id = this.request.getParameter('id') || this.data.id;

      return ExternalApiModel.get(id);

      // var stSuiteletUrl = nlapiResolveURL('SUITELET', 'customscript_example_suitelet','customdeploy_example_suitelet', true);
      // stSuiteletUrl = stSuiteletUrl + '&customer=' + nlapiGetUser();

      // var headers = new Array();
      // headers['Content-Type'] = 'application/json';
      // headers['User-Agent-x'] = 'SuiteScript-Call';

      // var response = nlapiRequestURL(stSuiteletUrl, null, headers, 'GET');

      // return response.getBody();

      var url = 'https://jsonplaceholder.typicode.com/todos'

      // ,   timeStamp = Math.round(+new Date() / 1000)
      /*,   authorization = 'OAuth realm="665798",'+
          'oauth_consumer_key="499137b60efa9aa931761971b07d9aae28ed0ef1d0af7bf5518f572c5f68816f",'+
          'oauth_consumer_secret="550c05ba52f05a90471edf73a1376dadb2b8d2707becfb743626d9b3a6cb98a9",'+
          'oauth_token="e149c516faf62c7476c8c37cd7f4bc668afcc32bc83eff593f03627d89f0ab8d",'+
          'oauth_timestamp="'+timeStamp+'",'+
          'oauth_nonce="Kdao6lzAZSA",'+
          'oauth_signature_method="HMAC-SHA1",'+
          'oauth_version="1.0",'+
          'oauth_signature="9PRG0UxBoqAqqJn20yUcjVjkXjA%3D"'*/
      // ,   authorization = 'NLAuth nlauth_account="665798",'+
      //     'nlauth_email="ns.lonestar@kodella.com",'+
      //     'nlauth_signature="#zeKLY9pY6uK",'+
      //     'nlauth_role="1032"'
      ,   headers = {
          'User-Agent-x': 'SuiteScript-Call'
      // ,   "Authorization": authorization
      ,   "Content-Type": 'application/json'
      };

      // nlapiLogExecution("DEBUG", "headers", headers);
      // nlapiLogExecution("DEBUG", "authorization", authorization);

      var output = nlapiRequestURL(url, null, headers, null, "GET");

      // nlapiLogExecution("DEBUG", "output",output);
      // nlapiLogExecution("DEBUG", "output.getBody()", output.getBody());

      // return output.getBody();

      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      // ,  data: ExternalApiModel.get()
        ,  data: output.getBody()
      });
    },

    post: function post() {
      // not implemented
      return 'this.request: ' + JSON.stringify(this.data);
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
