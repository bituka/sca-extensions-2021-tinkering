
define('ExternalApi.Model'
	, [
		'SC.Model'
		, 'underscore'
	]
	, function (
		SCModel
		, _
	) {
		'use strict';

		return SCModel.extend({

			name: 'ExternalApi.Model'

            , get: function (id)
            {
                try
                {
                    var outputArr = [];

                    var url = 'https://jsonplaceholder.typicode.com/todos';

                    if(id)
                    {
                        url = url + '/' + id;
                    }
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
                    var   headers = {
                        'User-Agent-x': 'SuiteScript-Call'
                    // ,   "Authorization": authorization
                    ,   "Content-Type": 'application/json'
                    };

                    // nlapiLogExecution("DEBUG", "headers", headers);
                    // nlapiLogExecution("DEBUG", "authorization", authorization);

                    var output = nlapiRequestURL(url, null, headers, null, "GET");

                    // nlapiLogExecution("DEBUG", "output",output);
                    // nlapiLogExecution("DEBUG", "output.getBody()", output.getBody());

                    outputArr.push(JSON.parse(output.getBody())); // JSON.parse(output.getBody());
                    outputArr.push(id);

                    return outputArr;
                }
                catch(e)
                {
                    nlapiLogExecution('ERROR', "e", e);
                }

			}

            , post: function (data)
            {
                try
                {

                    // nlapiLogExecution('DEBUG', "data", data);
                    // var outputArr = [];

                    // var url = 'https://jsonplaceholder.typicode.com/todos';

                    // return 'post: ';

                }catch(e)
                {
                    nlapiLogExecution('ERROR', "e", e);
                }
            }
		});
	});