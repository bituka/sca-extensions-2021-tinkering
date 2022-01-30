try{
    function _getDomain(){
        var session = nlapiGetWebContainer().getShoppingSession();
        var domain;
        if(_.isFunction(session.getEffectiveShoppingDomain)){
            domain = session.getEffectiveShoppingDomain();
        }
        else{
            var home = session.getSiteSettings(['touchpoints']).touchpoints.home;
            var home_match = home.match(/https?:\/\/([^#?\/]+)[#?\/]?/);
            if(!home_match){
                home_match = home.match(/\?btrgt=https?%3A%2F%2F([^#?\/]+)[#?\/]?/);
            }
            domain = home_match[1];
        }
        return domain;
    }

    var current_domain = _getDomain();


    var Configuration = require('Configuration');
    Configuration.overwriteByDomain({"saloraerpdemo1.nstraining1.com":{"header":{"fixedHeader":false},"home":{"autoPlayCarousel":false,"carouselSpeed":5000,"themeCarouselImages":[{"title":"Free Shipping","text":"on all cleaning products. The weekend only. Use code: YEAHBUDDY","image":"img/summit-carousel-home-1.jpg","imageMobile":"","linktext":"Shop Now","href":"#","imageBehaviour":"","backgroundCrop":"right","captionSide":"","captionTextAlign":"","captionColor":""},{"title":"Quick Turnaround Times","text":"From Deep Groove To Angular Contact","image":"img/summit-carousel-home-2.jpg","imageMobile":"","linktext":"Shop Now","href":"#","imageBehaviour":"","backgroundCrop":"right","captionSide":"","captionTextAlign":"","captionColor":""},{"title":"Wiring Solutions","text":"Including Cord Grips and Ferrules","image":"img/summit-carousel-home-3.jpg","imageMobile":"","linktext":"Shop Now","href":"#","imageBehaviour":"","backgroundCrop":"right","captionSide":"","captionTextAlign":"","captionColor":""}],"infoblock":[{"title":"Shop Performance","text":"","image":"img/summit-infoblock1.jpg","color":"#a3b9ce","href":"#"},{"title":"Shop Reliability","text":"","image":"img/summit-infoblock2.jpg","color":"#789bb0","href":"#"}],"freeTextTitle":"Reliability, Quality & Power","freeText":"<p>We Mean Business when it comes to getting you the Products and Customer Service you need...  when you need them.</p><p>In today's extremely agressive marketplace, all companies face the issues of global competition and the ever increasing costs of operating a business environment. We created a low-overhead business model and an extremely efficient global supply chain that are the envy of our customers. At Summit we provide our customer with high-quality industrial control products at extremely low prices.</p>"},"footer":{"showLegacyNewsletter":true,"copyright":{"hide":false,"companyName":"Company Name","initialYear":null},"socialMediaLinksTitle":"Follow us on","socialMediaLinks":[{"icon":"facebook-square","text":"facebook","href":"http://www.facebook.com","datatouchpoint":"","datahashtag":"","datatarget":""},{"icon":"twitter-square","text":"twitter","href":"http://www.twitter.com","datatouchpoint":"","datahashtag":"","datatarget":""},{"icon":"pinterest-square","text":"pinterest","href":"http://www.pinterest.com","datatouchpoint":"","datahashtag":"","datatarget":""},{"icon":"instagram-square","text":"instagram","href":"https://www.instagram.com","datatouchpoint":"","datahashtag":"","datatarget":""}],"multiColLinks":[{"text":"Here to Help","href":"","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 1"},{"text":"FAQs","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 1"},{"text":"Delivery & Collection","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 1"},{"text":"Returns & Refunds","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 1"},{"text":"Shopping With Us","href":"","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 2"},{"text":"International Delivery","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 2"},{"text":"Our Stores","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 2"},{"text":"Size Guides","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 2"},{"text":"About Us","href":"","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 3"},{"text":"Corporate Site","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 3"},{"text":"Jobs","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 3"},{"text":"Contact Us","href":"/contact-us","datatouchpoint":"home","datahashtag":"#contact-us","datatarget":"","column":"Column 3"},{"text":"Legal","href":"","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 4"},{"text":"Privacy & Cookies","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 4"},{"text":"Accessibility","href":"#","datatouchpoint":"","datahashtag":"","datatarget":"","column":"Column 4"}]},"ExternalApi":{"config":"Default config example"},"errorManagementPageNotFound":{"pageNotFoundBgrImg":"","bkgdColor":"#a3b9ce","title":"404 page not found","text":"The page you are looking for does not exist","btnText":"Go Home","btnHref":"#"},"loginRegister":{"loginSubtitle":"Returning customer","loginText":"Login below to checkout with an existing account"},"summit":{"webFonts":{"isWebFontEnabled":true,"isWebFontAsync":true,"webFontConfig":{"google":{"families":["Droid+Sans:400,700","Open+Sans:400,600,700,800"]}}}}}});

    require('SCA');

    var extensions = {};

     var srcDefine = define;
      ProxyPolyfill = function(target, handler) {
          var proxy = this;
            const getter = handler.get ? function(prop) {
             return handler.get(this, prop, proxy);
            } : function(prop) {
             return this[prop];
          };
          const propertyNames = Object.getOwnPropertyNames(target);
          propertyNames.forEach(function(prop) {
              const desc = {
                  get: getter.bind(target, prop)
              };
              Object.defineProperty(proxy, prop, desc);
          });
          return proxy;
      };
    extensions['GarryG.ExternalAPI.1.0.0'] = function(extensionName){

      var define = function(moduleName, dependencies, callback) {
          for (var i = 0; i < dependencies.length; i++){
              var dep = dependencies[i];
              if (dep === 'Application' && dep.indexOf(extensionName + '.Plugin!') === -1) {
                  dependencies[i] = extensionName + '.Plugin!' + dep;
              }
          }
          return srcDefine(moduleName, dependencies, callback);
      };

      define(extensionName + '.Plugin', [], function (){
          return {
                load: function (name, req, onload, config){
                  try{
                        req(
                          [name],
                          function (value) {
                              const proxy = new ProxyPolyfill(value, {
                                  get: function (target, prop, receiver){
                                      var targetProp = target[prop];
                                      if(typeof targetProp === 'function'){
                                          targetProp = function() {
                                              var args = Array.prototype.slice.call(arguments)
                                              if(prop === 'getComponent'){
                                                  args.push(extensionName);
                                              }
                                              return target[prop].apply(target, args);
                                          }
                                      }                                  return targetProp;
                                  }
                              });
                              onload(proxy);
                          },
                          function () {
                              onload(null);
                          });
                  }catch (e) {}
              }
          };
      });


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
                        nlapiLogExecution('DEBUG', "data", data);
                        // var outputArr = [];

                        // var url = 'https://jsonplaceholder.typicode.com/todos';

                        return JSON.parse(data);



                    }catch(e)
                    {
                        nlapiLogExecution('ERROR', "e", e);
                    }
                }
            });
        });

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

        post: function post(data) {
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


    // GarryG.ExternalAPI.ExternalApi.js
    // Load all your starter dependencies in backend for your extension here
    // ----------------

    define('GarryG.ExternalAPI.ExternalApi'
    ,	[
            'GarryG.ExternalAPI.ExternalApi.ServiceController'
        ]
    ,	function (
            ExternalApiServiceController
        )
    {
        'use strict';
    });


    };


    var coreLanguages = {"checkout":["cs_CZ","da_DK","de_DE","en","en_AU","en_CA","en_GB","en_US","es_AR","es_ES","fi_FI","fr_CA","fr_FR","id_ID","it_IT","ja_JP","ko_KR","nb_NO","nl_NL","no_NO","pt_BR","ru_RU","sv_SE","th_TH","tr_TR","vi_VN","zh_CN","zh_TW"],"myaccount":["cs_CZ","da_DK","de_DE","en","en_AU","en_CA","en_GB","en_US","es_AR","es_ES","fi_FI","fr_CA","fr_FR","id_ID","it_IT","ja_JP","ko_KR","nb_NO","nl_NL","no_NO","pt_BR","ru_RU","sv_SE","th_TH","tr_TR","vi_VN","zh_CN","zh_TW"],"shopping":["cs_CZ","da_DK","de_DE","en","en_AU","en_CA","en_GB","en_US","es_AR","es_ES","fi_FI","fr_CA","fr_FR","id_ID","it_IT","ja_JP","ko_KR","nb_NO","nl_NL","no_NO","pt_BR","ru_RU","sv_SE","th_TH","tr_TR","vi_VN","zh_CN","zh_TW"]};
     var SiteSettings = require('SiteSettings.Model').get();
    var website_id = SiteSettings.siteid;
    var key_mapping = {
        '7': {
            'saloraerpdemo1.nstraining1.com': '21'
        }
    };

    var key;
    var ctx = nlapiGetContext();
    var subsidiary = ctx.getSubsidiary();
    var location = ctx.getLocation();
    var subsidiary_key = current_domain + '-' + subsidiary;
    var location_key = subsidiary_key + '-' + location;
    if(website_id === 7 && key_mapping[website_id]){
        var mapping = key_mapping[website_id];
        if(mapping[location_key]){
            key = mapping[location_key];
        }
        else if(mapping[subsidiary_key]){
            key = mapping[subsidiary_key];
        }
        else if(mapping[current_domain]){
            key = mapping[current_domain];
        }
        else if(mapping['activation_id']){
            key = mapping['activation_id'];
        }
    }

    if(key === '21'){
    try{
        extensions['GarryG.ExternalAPI.1.0.0']('GarryG.ExternalAPI.1.0.0');
        require('GarryG.ExternalAPI.ExternalApi');
    }
    catch(error){
        nlapiLogExecution('ERROR', 'ERROR_SSP_LIBRARIES_EXT', JSON.stringify(error));
    }

    }

    var include_mapping = {
        "7": {
            "21": {
                "shopping": {
                    "templates": [
                        "extensions/shopping-templates_21.js"
                    ],
                    "js": [
                        "javascript/shopping.js",
                        "extensions/shopping_21.js"
                    ],
                    "css": [
                        "extensions/shopping_21.css"
                    ],
                    "translations": {},
                    "core": {},
                    "ie": []
                },
                "myaccount": {
                    "templates": [
                        "extensions/myaccount-templates_21.js"
                    ],
                    "js": [
                        "javascript/myaccount.js",
                        "extensions/myaccount_21.js"
                    ],
                    "css": [
                        "extensions/myaccount_21.css"
                    ],
                    "translations": {},
                    "core": {},
                    "ie": []
                },
                "checkout": {
                    "templates": [
                        "extensions/checkout-templates_21.js"
                    ],
                    "js": [
                        "javascript/checkout.js",
                        "extensions/checkout_21.js"
                    ],
                    "css": [
                        "extensions/checkout_21.css"
                    ],
                    "translations": {},
                    "core": {},
                    "ie": []
                }
            }
        }
    };
    var theme_assets_paths = {
        "21": "extensions/SC/Summit/3.1.1/"
    };
    var Application = require('Application');

    var app_includes;

    var isExtended = false;

    var themeAssetsPath = '';
    if(include_mapping[website_id] && include_mapping[website_id][key]){
        app_includes = include_mapping[website_id][key];

      isExtended = true;

      themeAssetsPath = theme_assets_paths[key];
    }
    else{
        app_includes = {
        "shopping": {
            "templates": [
                "shopping-templates.js"
            ],
            "js": [
                "javascript/shopping.js"
            ],
            "css": [
                "css/shopping.css"
            ],
            "core": {},
            "ie": []
        },
        "myaccount": {
            "templates": [
                "myaccount-templates.js"
            ],
            "js": [
                "javascript/myaccount.js"
            ],
            "css": [
                "css/myaccount.css"
            ],
            "core": {},
            "ie": []
        },
        "checkout": {
            "templates": [
                "checkout-templates.js"
            ],
            "js": [
                "javascript/checkout.js"
            ],
            "css": [
                "css/checkout.css"
            ],
            "core": {},
            "ie": []
        }
    };
        _.each(app_includes, function(app){
            app.templates = _.map(app.templates, function(file){
                return Application.getNonManageResourcesPathPrefix() + file;
            });
            app.css = _.map(app.css, function(file){
                return Application.getNonManageResourcesPathPrefix() + file;
            });
            if(Configuration.get().unmanagedResourcesFolderName)
            {
                app.js.unshift('backward-compatibility-amd-unclean.js');
            }
        });
    }
    _.each(app_includes, function(app, app_name){
        app.js = app.templates.concat(app.js);
        app.core.translations = coreLanguages[app_name];
    });

    var embEndpointUrl = {
        url: 'https://tstdrv2489765.app.netsuite.com' + nlapiResolveURL('SUITELET', 'customscript_ext_mech_emb_endpoints', 'customdeploy_ext_mech_emb_endpoints') + '&callback=?'
    ,	method: 'GET'
    ,	dataType: 'jsonp'
    ,	data: {
            domain: current_domain
            }
    };
    }catch(error){ nlapiLogExecution('ERROR', 'ERROR_SSP_LIBRARIES_EXT', JSON.stringify(error)); }