/*jshint -W069 */
/*global angular:false, btoa */
angular.module('otrBackendService', [])
    .factory('OtrService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {
        'use strict';

        /**
         * A service to handle your traffic tickets
         * @class OtrService
         * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
         * @param {string} [domainOrOptions.domain] - The project domain
         * @param {string} [domainOrOptions.cache] - An angularjs cache implementation
         * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
         * @param {string} [cache] - An angularjs cache implementation
         */
        var OtrService = (function() {
            function OtrService(options, cache) {
                var domain = (typeof options === 'object') ? options.domain : options;
                this.domain = typeof(domain) === 'string' ? domain : '';
                if (this.domain.length === 0) {
                    throw new Error('Domain parameter must be specified as a string.');
                }
                cache = cache || ((typeof options === 'object') ? options.cache : cache);
                this.cache = cache;
            }

            function mergeQueryParams(parameters, queryParameters) {
                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }
                return queryParameters;
            }

            /**
             * HTTP Request
             * @method
             * @name OtrService#request
             * @param {string} method - http method
             * @param {string} url - url to do request
             * @param {object} parameters
             * @param {object} body - body parameters / object
             * @param {object} headers - header parameters
             * @param {object} queryParameters - querystring parameters
             * @param {object} form - form data object
             * @param {object} deferred - promise object
             */
            OtrService.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred) {
                var options = {
                    timeout: parameters.$timeout,
                    method: method,
                    url: url,
                    params: queryParameters,
                    data: body,
                    headers: headers
                };
                if (Object.keys(form).length > 0) {
                    options.data = form;
                    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                    options.transformRequest = OtrService.transformRequest;
                }
                $http(options)
                    .then(function(data, status, headers, config) {
                        deferred.resolve(data);
                        if (parameters.$cache !== undefined) {
                            parameters.$cache.put(url, data, parameters.$cacheItemOpts ? parameters.$cacheItemOpts : {});
                        }
                    })
                    .catch(function(data, status, headers, config) {
                        deferred.reject({
                            status: status,
                            headers: headers,
                            config: config,
                            body: data
                        });
                    });

            };

            OtrService.prototype.$on = function($scope, path, handler) {
                var url = this.domain + path;
                $scope.$on(url, function() {
                    handler();
                });
                return this;
            };

            OtrService.prototype.$broadcast = function(path) {
                var url = this.domain + path;
                //cache.remove(url);
                $rootScope.$broadcast(url);
                return this;
            };

            OtrService.transformRequest = function(obj) {
                var str = [];
                for (var p in obj) {
                    var val = obj[p];
                    if (angular.isArray(val)) {
                        val.forEach(function(val) {
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(val));
                        });
                    } else {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(val));
                    }
                }
                return str.join("&");
            };

            /**
             * acknowledgeCoachingCard
             * @method
             * @name OtrService#acknowledgeCoachingCardUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.acknowledgeCoachingCardUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/api/v1/coaching-cards/acknowledge';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCoachingCardCategories
             * @method
             * @name OtrService#getCoachingCardCategoriesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getCoachingCardCategoriesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/api/v1/coaching-cards/categories';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listActivityFeed
             * @method
             * @name OtrService#listActivityFeedUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.nextPageToken - nextPageToken
             * @param {string} parameters.previousPageToken - previousPageToken
             */
            OtrService.prototype.listActivityFeedUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/activity-feed';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['limit'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: limit'));
                    return deferred.promise;
                }

                if (parameters['nextPageToken'] !== undefined) {
                    queryParameters['nextPageToken'] = parameters['nextPageToken'];
                }

                if (parameters['previousPageToken'] !== undefined) {
                    queryParameters['previousPageToken'] = parameters['previousPageToken'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCaseOutcomes
             * @method
             * @name OtrService#listCaseOutcomesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeCriminal - includeCriminal
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.regionCode - regionCode
             * @param {string} parameters.resolutionStatuses - resolutionStatuses
             * @param {string} parameters.startDate - startDate
             */
            OtrService.prototype.listCaseOutcomesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/activity-feed/case-outcomes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['includeCriminal'] !== undefined) {
                    queryParameters['includeCriminal'] = parameters['includeCriminal'];
                }

                /** set default value **/
                queryParameters['limit'] = 100;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['resolutionStatuses'] !== undefined) {
                    queryParameters['resolutionStatuses'] = parameters['resolutionStatuses'];
                }

                if (parameters['startDate'] !== undefined) {
                    queryParameters['startDate'] = parameters['startDate'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markAlertAsRead
             * @method
             * @name OtrService#markAlertAsReadUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.alertId - alertId
             */
            OtrService.prototype.markAlertAsReadUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/alerts/{alertId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{alertId}', parameters['alertId']);

                if (parameters['alertId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: alertId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAlerts
             * @method
             * @name OtrService#getAlertsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.getAlertsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/alerts/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLastLogin
             * @method
             * @name OtrService#getLastLoginUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.clients - clients
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getLastLoginUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/api/v1/users/{userId}/last-login';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['clients'] !== undefined) {
                    queryParameters['clients'] = parameters['clients'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addAppEvent
             * @method
             * @name OtrService#addAppEventUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.addAppEventUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/app-events';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * loginWithSSO
             * @method
             * @name OtrService#loginWithSSOUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.brandId - brandId
             * @param {string} parameters.email - email
             * @param {boolean} parameters.isAdmin - isAdmin
             * @param {string} parameters.password - password
             */
            OtrService.prototype.loginWithSSOUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/authentication/sso/login';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['brandId'] !== undefined) {
                    queryParameters['brandId'] = parameters['brandId'];
                }

                if (parameters['brandId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: brandId'));
                    return deferred.promise;
                }

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                if (parameters['isAdmin'] !== undefined) {
                    queryParameters['isAdmin'] = parameters['isAdmin'];
                }

                if (parameters['isAdmin'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isAdmin'));
                    return deferred.promise;
                }

                if (parameters['password'] !== undefined) {
                    queryParameters['password'] = parameters['password'];
                }

                if (parameters['password'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: password'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserInfo
             * @method
             * @name OtrService#getUserInfoUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getUserInfoUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/authentication/user';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listBillingProducts
             * @method
             * @name OtrService#listBillingProductsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.active - active
             * @param {string} parameters.audience - audience
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.listBillingProductsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/billing/products';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                /** set default value **/
                queryParameters['active'] = true;

                if (parameters['active'] !== undefined) {
                    queryParameters['active'] = parameters['active'];
                }

                if (parameters['audience'] !== undefined) {
                    queryParameters['audience'] = parameters['audience'];
                }

                /** set default value **/
                queryParameters['limit'] = 50;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['userId'] !== undefined) {
                    queryParameters['userId'] = parameters['userId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listBillingSubscribers
             * @method
             * @name OtrService#listBillingSubscribersUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.billingInterval - billingInterval
             * @param {string} parameters.billingSubscriptionStatus - billingSubscriptionStatus
             * @param {boolean} parameters.coveredSubscriptionsOnly - coveredSubscriptionsOnly
             * @param {string} parameters.endDate - endDate
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             * @param {string} parameters.planName - planName
             * @param {boolean} parameters.shouldIncludeSubscribers - shouldIncludeSubscribers
             * @param {string} parameters.sortBy - sortBy
             * @param {string} parameters.sortOrder - sortOrder
             * @param {string} parameters.startDate - startDate
             * @param {string} parameters.subscriberName - subscriberName
             * @param {string} parameters.timeZoneId - timeZoneId
             */
            OtrService.prototype.listBillingSubscribersUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/billing/subscribers';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['billingInterval'] !== undefined) {
                    queryParameters['billingInterval'] = parameters['billingInterval'];
                }

                if (parameters['billingSubscriptionStatus'] !== undefined) {
                    queryParameters['billingSubscriptionStatus'] = parameters['billingSubscriptionStatus'];
                }

                if (parameters['coveredSubscriptionsOnly'] !== undefined) {
                    queryParameters['coveredSubscriptionsOnly'] = parameters['coveredSubscriptionsOnly'];
                }

                if (parameters['endDate'] !== undefined) {
                    queryParameters['endDate'] = parameters['endDate'];
                }

                /** set default value **/
                queryParameters['length'] = 50;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['planName'] !== undefined) {
                    queryParameters['planName'] = parameters['planName'];
                }

                /** set default value **/
                queryParameters['shouldIncludeSubscribers'] = true;

                if (parameters['shouldIncludeSubscribers'] !== undefined) {
                    queryParameters['shouldIncludeSubscribers'] = parameters['shouldIncludeSubscribers'];
                }

                if (parameters['sortBy'] !== undefined) {
                    queryParameters['sortBy'] = parameters['sortBy'];
                }

                if (parameters['sortOrder'] !== undefined) {
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }

                if (parameters['startDate'] !== undefined) {
                    queryParameters['startDate'] = parameters['startDate'];
                }

                if (parameters['subscriberName'] !== undefined) {
                    queryParameters['subscriberName'] = parameters['subscriberName'];
                }

                if (parameters['timeZoneId'] !== undefined) {
                    queryParameters['timeZoneId'] = parameters['timeZoneId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listBillingSubscriptions
             * @method
             * @name OtrService#listBillingSubscriptionsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeInactive - includeInactive
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.listBillingSubscriptionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/billing/{userId}/subscriptions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                /** set default value **/
                queryParameters['includeInactive'] = true;

                if (parameters['includeInactive'] !== undefined) {
                    queryParameters['includeInactive'] = parameters['includeInactive'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createBillingSubscription
             * @method
             * @name OtrService#createBillingSubscriptionUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.createBillingSubscriptionUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/billing/{userId}/subscriptions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * cancelBillingSubscription
             * @method
             * @name OtrService#cancelBillingSubscriptionUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.id - id
             * @param {boolean} parameters.isProrated - isProrated
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.cancelBillingSubscriptionUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/billing/{userId}/subscriptions/{id}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{id}', parameters['id']);

                if (parameters['id'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: id'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['isProrated'] = true;

                if (parameters['isProrated'] !== undefined) {
                    queryParameters['isProrated'] = parameters['isProrated'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listSubscriptionInvoices
             * @method
             * @name OtrService#listSubscriptionInvoicesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.id - id
             * @param {integer} parameters.limit - limit
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.listSubscriptionInvoicesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/billing/{userId}/subscriptions/{id}/invoices';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{id}', parameters['id']);

                if (parameters['id'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: id'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['limit'] = 100;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleBounceComplaintEmails
             * @method
             * @name OtrService#handleBounceComplaintEmailsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleBounceComplaintEmailsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/blacklists/ses/emails/';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json,text/plain'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createBranchLink
             * @method
             * @name OtrService#createBranchLinkUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.createBranchLinkUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/branch/link';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * verifyCaptchaToken
             * @method
             * @name OtrService#verifyCaptchaTokenUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.verifyCaptchaTokenUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/captcha/verify-token';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseStatuses
             * @method
             * @name OtrService#getCaseStatusesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.categories - categories
             */
            OtrService.prototype.getCaseStatusesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/case-statuses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['categories'] !== undefined) {
                    queryParameters['categories'] = parameters['categories'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseResolutionStatuses
             * @method
             * @name OtrService#getCaseResolutionStatusesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.stateCode - stateCode
             */
            OtrService.prototype.getCaseResolutionStatusesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/case-statuses/resolution-statuses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['stateCode'] !== undefined) {
                    queryParameters['stateCode'] = parameters['stateCode'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAllActions
             * @method
             * @name OtrService#getAllActionsUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getAllActionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/actions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setArchiveOnCases
             * @method
             * @name OtrService#setArchiveOnCasesUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.setArchiveOnCasesUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/archive';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setFlagOnMessages
             * @method
             * @name OtrService#setFlagOnMessagesUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.setFlagOnMessagesUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/conversation/flag';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setStarOnMessages
             * @method
             * @name OtrService#setStarOnMessagesUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.setStarOnMessagesUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/conversation/star';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseCounterOptions
             * @method
             * @name OtrService#getCaseCounterOptionsUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getCaseCounterOptionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/counter-options';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getDeclinedCases
             * @method
             * @name OtrService#getDeclinedCasesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getDeclinedCasesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/declined';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseDeclineReasonTypes
             * @method
             * @name OtrService#getCaseDeclineReasonTypesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getCaseDeclineReasonTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/declines/reasons';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPendingCases
             * @method
             * @name OtrService#getPendingCasesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getPendingCasesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/pending';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCase
             * @method
             * @name OtrService#getCaseUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCase
             * @method
             * @name OtrService#updateCaseUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.caseFromRequest - caseFromRequest
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.updateCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['caseFromRequest'] !== undefined) {
                    body = parameters['caseFromRequest'];
                }

                if (parameters['caseFromRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseFromRequest'));
                    return deferred.promise;
                }

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseActions
             * @method
             * @name OtrService#getCaseActionsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {boolean} parameters.showDeleted - showDeleted
             */
            OtrService.prototype.getCaseActionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/actions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['showDeleted'] !== undefined) {
                    queryParameters['showDeleted'] = parameters['showDeleted'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getActionTimeline
             * @method
             * @name OtrService#getActionTimelineUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getActionTimelineUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/actions/timeline';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCaseAction
             * @method
             * @name OtrService#updateCaseActionUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.caseActionId - caseActionId
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateCaseActionUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/actions/{caseActionId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseActionId}', parameters['caseActionId']);

                if (parameters['caseActionId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseActionId'));
                    return deferred.promise;
                }

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markActionAsDeleted
             * @method
             * @name OtrService#markActionAsDeletedUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.caseActionId - caseActionId
             * @param {string} parameters.caseId - caseId
             * @param {boolean} parameters.isDeleted - isDeleted
             */
            OtrService.prototype.markActionAsDeletedUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/actions/{caseActionId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseActionId}', parameters['caseActionId']);

                if (parameters['caseActionId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseActionId'));
                    return deferred.promise;
                }

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['isDeleted'] !== undefined) {
                    queryParameters['isDeleted'] = parameters['isDeleted'];
                }

                if (parameters['isDeleted'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isDeleted'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAppearanceAttorneysForCase
             * @method
             * @name OtrService#getAppearanceAttorneysForCaseUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getAppearanceAttorneysForCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/appearance-attorneys';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCostItemsForAttorney
             * @method
             * @name OtrService#listCostItemsForAttorneyUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.listCostItemsForAttorneyUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/attorney/cost';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getStripeCharge
             * @method
             * @name OtrService#getStripeChargeUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.stripeChargeId - stripeChargeId
             */
            OtrService.prototype.getStripeChargeUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/charges/{stripeChargeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{stripeChargeId}', parameters['stripeChargeId']);

                if (parameters['stripeChargeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: stripeChargeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addViolationsToCitation
             * @method
             * @name OtrService#addViolationsToCitationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.addViolationsToCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/citation/violations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeViolationsFromCitation
             * @method
             * @name OtrService#removeViolationsFromCitationUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.violationTypes - violationTypes
             */
            OtrService.prototype.removeViolationsFromCitationUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/citation/violations/{violationTypes}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{violationTypes}', parameters['violationTypes']);

                if (parameters['violationTypes'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationTypes'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseClient
             * @method
             * @name OtrService#getCaseClientUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getCaseClientUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/client';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getConversation
             * @method
             * @name OtrService#getConversationUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             */
            OtrService.prototype.getConversationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/conversation';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['length'] = 9999;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addMessageToConversation
             * @method
             * @name OtrService#addMessageToConversationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.addMessageToConversationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/conversation';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getMessage
             * @method
             * @name OtrService#getMessageUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.messageId - messageId
             */
            OtrService.prototype.getMessageUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/conversation/{messageId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{messageId}', parameters['messageId']);

                if (parameters['messageId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: messageId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markMessageAsDeleted
             * @method
             * @name OtrService#markMessageAsDeletedUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {boolean} parameters.isDeleted - isDeleted
             * @param {integer} parameters.messageId - messageId
             */
            OtrService.prototype.markMessageAsDeletedUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/conversation/{messageId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['isDeleted'] !== undefined) {
                    queryParameters['isDeleted'] = parameters['isDeleted'];
                }

                if (parameters['isDeleted'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isDeleted'));
                    return deferred.promise;
                }

                path = path.replace('{messageId}', parameters['messageId']);

                if (parameters['messageId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: messageId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * editMessage
             * @method
             * @name OtrService#editMessageUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.messageId - messageId
             * @param {} parameters.request - request
             */
            OtrService.prototype.editMessageUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/conversation/{messageId}/edit';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{messageId}', parameters['messageId']);

                if (parameters['messageId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: messageId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCounterOffer
             * @method
             * @name OtrService#getCounterOfferUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getCounterOfferUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/counters';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * initiateCaseCounter
             * @method
             * @name OtrService#initiateCaseCounterUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.initiateCaseCounterUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/counters';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * acceptCaseCounter
             * @method
             * @name OtrService#acceptCaseCounterUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.counterId - counterId
             */
            OtrService.prototype.acceptCaseCounterUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/counters/{counterId}/accept';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{counterId}', parameters['counterId']);

                if (parameters['counterId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: counterId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * declineCaseCounter
             * @method
             * @name OtrService#declineCaseCounterUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.counterId - counterId
             * @param {} parameters.request - request
             */
            OtrService.prototype.declineCaseCounterUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/counters/{counterId}/decline';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{counterId}', parameters['counterId']);

                if (parameters['counterId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: counterId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * withdrawCaseCounter
             * @method
             * @name OtrService#withdrawCaseCounterUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.counterId - counterId
             */
            OtrService.prototype.withdrawCaseCounterUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/counters/{counterId}/withdraw';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{counterId}', parameters['counterId']);

                if (parameters['counterId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: counterId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setCourtDateForCase
             * @method
             * @name OtrService#setCourtDateForCaseUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.setCourtDateForCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/courtdate';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCostItemsForCustomer
             * @method
             * @name OtrService#listCostItemsForCustomerUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.period - period
             * @param {string} parameters.productId - productId
             */
            OtrService.prototype.listCostItemsForCustomerUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/customer/cost';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['period'] !== undefined) {
                    queryParameters['period'] = parameters['period'];
                }

                if (parameters['productId'] !== undefined) {
                    queryParameters['productId'] = parameters['productId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateDeclineTickets
             * @method
             * @name OtrService#updateDeclineTicketsUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateDeclineTicketsUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/decline-tickets';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findChargeDisputesByCaseId
             * @method
             * @name OtrService#findChargeDisputesByCaseIdUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.findChargeDisputesByCaseIdUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/disputes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCaseDocuments
             * @method
             * @name OtrService#getLawfirmCaseDocumentsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getLawfirmCaseDocumentsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/documents';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * initiateCase
             * @method
             * @name OtrService#initiateCaseUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.initiateCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/initiate';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * initiateCaseAndChargeCustomer
             * @method
             * @name OtrService#initiateCaseAndChargeCustomerUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.initiateCaseAndChargeCustomerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/initiate-with-payment';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmFees
             * @method
             * @name OtrService#getLawfirmFeesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getLawfirmFeesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/lawfirm-fees';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmTransactionsForCase
             * @method
             * @name OtrService#getLawfirmTransactionsForCaseUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getLawfirmTransactionsForCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/lawfirm-transactions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLineItems
             * @method
             * @name OtrService#getLineItemsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getLineItemsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/line-items';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * insertCaseLineItem
             * @method
             * @name OtrService#insertCaseLineItemUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.insertCaseLineItemUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/lineitems';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCaseLineItem
             * @method
             * @name OtrService#updateCaseLineItemUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.lineItemId - lineItemId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateCaseLineItemUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{lineItemId}', parameters['lineItemId']);

                if (parameters['lineItemId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lineItemId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCaseLineItem
             * @method
             * @name OtrService#deleteCaseLineItemUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.lineItemId - lineItemId
             */
            OtrService.prototype.deleteCaseLineItemUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{lineItemId}', parameters['lineItemId']);

                if (parameters['lineItemId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lineItemId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseNotes
             * @method
             * @name OtrService#getCaseNotesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getCaseNotesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/notes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveCaseNotes
             * @method
             * @name OtrService#saveCaseNotesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveCaseNotesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/notes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * assignOwner
             * @method
             * @name OtrService#assignOwnerUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.assignOwnerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/owner';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * assignCaseToUser
             * @method
             * @name OtrService#assignCaseToUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.assignCaseToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/owner/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPaymentPlanOptions
             * @method
             * @name OtrService#getPaymentPlanOptionsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.feeInCents - feeInCents
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getPaymentPlanOptionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payment-plans';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['feeInCents'] !== undefined) {
                    queryParameters['feeInCents'] = parameters['feeInCents'];
                }

                if (parameters['feeInCents'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: feeInCents'));
                    return deferred.promise;
                }

                if (parameters['lawfirmId'] !== undefined) {
                    queryParameters['lawfirmId'] = parameters['lawfirmId'];
                }

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['userId'] !== undefined) {
                    queryParameters['userId'] = parameters['userId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * generateCasePaymentPlan
             * @method
             * @name OtrService#generateCasePaymentPlanUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.paymentPlanTypeId - paymentPlanTypeId
             * @param {string} parameters.period - period
             * @param {string} parameters.productId - productId
             */
            OtrService.prototype.generateCasePaymentPlanUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payment-plans/{paymentPlanTypeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{paymentPlanTypeId}', parameters['paymentPlanTypeId']);

                if (parameters['paymentPlanTypeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: paymentPlanTypeId'));
                    return deferred.promise;
                }

                if (parameters['period'] !== undefined) {
                    queryParameters['period'] = parameters['period'];
                }

                if (parameters['productId'] !== undefined) {
                    queryParameters['productId'] = parameters['productId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasePayments
             * @method
             * @name OtrService#getCasePaymentsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getCasePaymentsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * scheduleNewPayment
             * @method
             * @name OtrService#scheduleNewPaymentUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.scheduleNewPaymentUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCasePayment
             * @method
             * @name OtrService#deleteCasePaymentUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.casePaymentId - casePaymentId
             */
            OtrService.prototype.deleteCasePaymentUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments/{casePaymentId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * authorizeChargeForCasePayment
             * @method
             * @name OtrService#authorizeChargeForCasePaymentUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.casePaymentId - casePaymentId
             * @param {} parameters.request - request
             */
            OtrService.prototype.authorizeChargeForCasePaymentUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments/{casePaymentId}/authorize';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * captureChargeFromCasePayment
             * @method
             * @name OtrService#captureChargeFromCasePaymentUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.casePaymentId - casePaymentId
             * @param {} parameters.request - request
             */
            OtrService.prototype.captureChargeFromCasePaymentUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments/{casePaymentId}/capture';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * refundCasePayment
             * @method
             * @name OtrService#refundCasePaymentUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.casePaymentId - casePaymentId
             * @param {} parameters.request - request
             */
            OtrService.prototype.refundCasePaymentUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments/{casePaymentId}/refund';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * releasePayment
             * @method
             * @name OtrService#releasePaymentUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.casePaymentId - casePaymentId
             */
            OtrService.prototype.releasePaymentUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments/{casePaymentId}/release';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmPayouts
             * @method
             * @name OtrService#getLawfirmPayoutsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getLawfirmPayoutsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payouts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * submitRequestForPriceMatch
             * @method
             * @name OtrService#submitRequestForPriceMatchUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.priceMatchRequest - priceMatchRequest
             */
            OtrService.prototype.submitRequestForPriceMatchUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/price-match';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['priceMatchRequest'] !== undefined) {
                    body = parameters['priceMatchRequest'];
                }

                if (parameters['priceMatchRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: priceMatchRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Apply referral code to a case to adjust the estimated cost and/or to assign the rightful lawfirm. This operation is idempotent
             * @method
             * @name OtrService#applyReferralCodeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.codeId - codeId
             */
            OtrService.prototype.applyReferralCodeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/referralcode/{codeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeReferralCodeFromCase
             * @method
             * @name OtrService#removeReferralCodeFromCaseUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.codeId - codeId
             */
            OtrService.prototype.removeReferralCodeFromCaseUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/referralcode/{codeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateRefundEligibilityForCase
             * @method
             * @name OtrService#updateRefundEligibilityForCaseUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateRefundEligibilityForCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/refund-eligibility';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * isRefundEligible
             * @method
             * @name OtrService#isRefundEligibleUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.isRefundEligibleUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/refund/eligibility';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * reopenCase
             * @method
             * @name OtrService#reopenCaseUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.reopenCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/reopen';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * requestLawyer
             * @method
             * @name OtrService#requestLawyerUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.lawyerRequest - lawyerRequest
             */
            OtrService.prototype.requestLawyerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/request';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['lawyerRequest'] !== undefined) {
                    body = parameters['lawyerRequest'];
                }

                if (parameters['lawyerRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawyerRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markCaseAsResolved
             * @method
             * @name OtrService#markCaseAsResolvedUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.markCaseAsResolvedUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/resolution';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmPayoutReversals
             * @method
             * @name OtrService#getLawfirmPayoutReversalsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getLawfirmPayoutReversalsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/reversals';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addSocialMediaAction
             * @method
             * @name OtrService#addSocialMediaActionUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.addSocialMediaActionUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/send-social-media-ask';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getStripeCharges
             * @method
             * @name OtrService#getStripeChargesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getStripeChargesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/stripe-charges';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSupportTicketsForCase
             * @method
             * @name OtrService#getSupportTicketsForCaseUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.limit - limit
             */
            OtrService.prototype.getSupportTicketsForCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/support-tickets';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['limit'] = 100;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTransferHistory
             * @method
             * @name OtrService#getTransferHistoryUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getTransferHistoryUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/transfer';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * transferCase
             * @method
             * @name OtrService#transferCaseUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.transferCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/transfer';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseUsersByCase
             * @method
             * @name OtrService#getCaseUsersByCaseUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {boolean} parameters.getRemovedUsers - getRemovedUsers
             */
            OtrService.prototype.getCaseUsersByCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/users';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['getRemovedUsers'] !== undefined) {
                    queryParameters['getRemovedUsers'] = parameters['getRemovedUsers'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveCaseUser
             * @method
             * @name OtrService#saveCaseUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveCaseUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/users';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSSLPublicCertFile
             * @method
             * @name OtrService#getSSLPublicCertFileUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.encoding - encoding
             */
            OtrService.prototype.getSSLPublicCertFileUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/certificates/ssl';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['encoding'] !== undefined) {
                    queryParameters['encoding'] = parameters['encoding'];
                }

                if (parameters['encoding'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: encoding'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createNewCitation
             * @method
             * @name OtrService#createNewCitationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.createNewCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getListOfCitationsWithMissingCourt
             * @method
             * @name OtrService#getListOfCitationsWithMissingCourtUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getListOfCitationsWithMissingCourtUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/courts/missing';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * dismissCitationsFromContactList
             * @method
             * @name OtrService#dismissCitationsFromContactListUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.dismissCitationsFromContactListUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/dismiss';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getNoViolationCitations
             * @method
             * @name OtrService#getNoViolationCitationsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.regionCodes - regionCodes
             * @param {integer} parameters.trailingDays - trailingDays
             */
            OtrService.prototype.getNoViolationCitationsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/no-violation-uploads';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['regionCodes'] !== undefined) {
                    queryParameters['regionCodes'] = parameters['regionCodes'];
                }

                /** set default value **/
                queryParameters['trailingDays'] = 90;

                if (parameters['trailingDays'] !== undefined) {
                    queryParameters['trailingDays'] = parameters['trailingDays'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * signImageUrl
             * @method
             * @name OtrService#signImageUrlUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.signImageUrlUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/sign-image-url';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCitation
             * @method
             * @name OtrService#getCitationUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationIdString - citationIdString
             */
            OtrService.prototype.getCitationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationIdString}', parameters['citationIdString']);

                if (parameters['citationIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationIdString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCitation
             * @method
             * @name OtrService#updateCitationUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationIdString - citationIdString
             * @param {} parameters.updateCitationRequest - updateCitationRequest
             */
            OtrService.prototype.updateCitationUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationIdString}', parameters['citationIdString']);

                if (parameters['citationIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationIdString'));
                    return deferred.promise;
                }

                if (parameters['updateCitationRequest'] !== undefined) {
                    body = parameters['updateCitationRequest'];
                }

                if (parameters['updateCitationRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: updateCitationRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCitation
             * @method
             * @name OtrService#deleteCitationUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationIdString - citationIdString
             */
            OtrService.prototype.deleteCitationUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationIdString}', parameters['citationIdString']);

                if (parameters['citationIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationIdString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * matchCase
             * @method
             * @name OtrService#matchCaseUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationIdString - citationIdString
             * @param {} parameters.request - request
             */
            OtrService.prototype.matchCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationIdString}/case';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationIdString}', parameters['citationIdString']);

                if (parameters['citationIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationIdString'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setCitationContactListFlag
             * @method
             * @name OtrService#setCitationContactListFlagUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationIdString - citationIdString
             * @param {boolean} parameters.isDismissed - isDismissed
             */
            OtrService.prototype.setCitationContactListFlagUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationIdString}/dismiss';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationIdString}', parameters['citationIdString']);

                if (parameters['citationIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationIdString'));
                    return deferred.promise;
                }

                if (parameters['isDismissed'] !== undefined) {
                    queryParameters['isDismissed'] = parameters['isDismissed'];
                }

                if (parameters['isDismissed'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isDismissed'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCitationAddress
             * @method
             * @name OtrService#updateCitationAddressUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationId - citationId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateCitationAddressUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/address';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCitationAuditEvents
             * @method
             * @name OtrService#listCitationAuditEventsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {string} parameters.excludeTypes - excludeTypes
             * @param {string} parameters.includeTypes - includeTypes
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.nextPageToken - nextPageToken
             */
            OtrService.prototype.listCitationAuditEventsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/audit-events';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['excludeTypes'] !== undefined) {
                    queryParameters['excludeTypes'] = parameters['excludeTypes'];
                }

                if (parameters['includeTypes'] !== undefined) {
                    queryParameters['includeTypes'] = parameters['includeTypes'];
                }

                /** set default value **/
                queryParameters['limit'] = 25;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['nextPageToken'] !== undefined) {
                    queryParameters['nextPageToken'] = parameters['nextPageToken'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAuditLogs
             * @method
             * @name OtrService#getAuditLogsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {string} parameters.logLevel - logLevel
             * @param {string} parameters.logType - logType
             * @param {boolean} parameters.showActiveOnly - showActiveOnly
             */
            OtrService.prototype.getAuditLogsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/audit-logs';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['logLevel'] !== undefined) {
                    queryParameters['logLevel'] = parameters['logLevel'];
                }

                if (parameters['logType'] !== undefined) {
                    queryParameters['logType'] = parameters['logType'];
                }

                if (parameters['showActiveOnly'] !== undefined) {
                    queryParameters['showActiveOnly'] = parameters['showActiveOnly'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseFromCitation
             * @method
             * @name OtrService#getCaseFromCitationUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationId - citationId
             */
            OtrService.prototype.getCaseFromCitationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/case';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCitationCourt
             * @method
             * @name OtrService#deleteCitationCourtUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             */
            OtrService.prototype.deleteCitationCourtUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/court';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * postMissingCourtForCitation
             * @method
             * @name OtrService#postMissingCourtForCitationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationId - citationId
             * @param {string} parameters.state - state
             */
            OtrService.prototype.postMissingCourtForCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/court/missing';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['state'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: state'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteMissingCourtRecord
             * @method
             * @name OtrService#deleteMissingCourtRecordUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             */
            OtrService.prototype.deleteMissingCourtRecordUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/courts/missing';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createLegalServices
             * @method
             * @name OtrService#createLegalServicesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {} parameters.request - request
             */
            OtrService.prototype.createLegalServicesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/legal-services';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setLockForCitation
             * @method
             * @name OtrService#setLockForCitationUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {boolean} parameters.isLocked - isLocked
             */
            OtrService.prototype.setLockForCitationUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/lock-citation/{isLocked}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                path = path.replace('{isLocked}', parameters['isLocked']);

                if (parameters['isLocked'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isLocked'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * assignCitationOwner
             * @method
             * @name OtrService#assignCitationOwnerUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {} parameters.request - request
             */
            OtrService.prototype.assignCitationOwnerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/owner';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCitationPicture
             * @method
             * @name OtrService#updateCitationPictureUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationId - citationId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateCitationPictureUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/picture';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createReferralSourceForCitation
             * @method
             * @name OtrService#createReferralSourceForCitationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationId - citationId
             * @param {} parameters.request - request
             */
            OtrService.prototype.createReferralSourceForCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/referral-source';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * selectLegalService
             * @method
             * @name OtrService#selectLegalServiceUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {integer} parameters.lawfirmCaseId - lawfirmCaseId
             */
            OtrService.prototype.selectLegalServiceUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/select-legal-service/{lawfirmCaseId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmCaseId}', parameters['lawfirmCaseId']);

                if (parameters['lawfirmCaseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmCaseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTicketReviewInfo
             * @method
             * @name OtrService#getTicketReviewInfoUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.citationId - citationId
             */
            OtrService.prototype.getTicketReviewInfoUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{citationId}/ticket-review';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAnonymousTicketUploads
             * @method
             * @name OtrService#getAnonymousTicketUploadsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.emailAddress - emailAddress
             */
            OtrService.prototype.getAnonymousTicketUploadsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{emailAddress}/anonymous-tickets';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{emailAddress}', parameters['emailAddress']);

                if (parameters['emailAddress'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: emailAddress'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addSampleCase
             * @method
             * @name OtrService#addSampleCaseUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.addSampleCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/citations/{lawfirmId}/sample';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveCoachingCard
             * @method
             * @name OtrService#saveCoachingCardUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveCoachingCardUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/coaching-cards/cards';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listUserCoachingCards
             * @method
             * @name OtrService#listUserCoachingCardsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.coachingCardType - coachingCardType
             * @param {boolean} parameters.includeCreated - includeCreated
             * @param {boolean} parameters.includeReceived - includeReceived
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.listUserCoachingCardsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/coaching-cards/{userId}/cards';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['coachingCardType'] !== undefined) {
                    queryParameters['coachingCardType'] = parameters['coachingCardType'];
                }

                /** set default value **/
                queryParameters['includeCreated'] = true;

                if (parameters['includeCreated'] !== undefined) {
                    queryParameters['includeCreated'] = parameters['includeCreated'];
                }

                /** set default value **/
                queryParameters['includeReceived'] = true;

                if (parameters['includeReceived'] !== undefined) {
                    queryParameters['includeReceived'] = parameters['includeReceived'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAppConfiguration
             * @method
             * @name OtrService#getAppConfigurationUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getAppConfigurationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/config/app';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * appleConnect
             * @method
             * @name OtrService#appleConnectUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.appleConnectUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/connect/Apple';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * facebookConnect
             * @method
             * @name OtrService#facebookConnectUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.facebookConnectUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/connect/Facebook';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * googleConnect
             * @method
             * @name OtrService#googleConnectUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.googleConnectUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/connect/Google';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * appleConnect
             * @method
             * @name OtrService#appleConnectUsingPOST_1
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.appleConnectUsingPOST_1 = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/connect/apple';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * facebookConnect
             * @method
             * @name OtrService#facebookConnectUsingPOST_1
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.facebookConnectUsingPOST_1 = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/connect/facebook';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * googleConnect
             * @method
             * @name OtrService#googleConnectUsingPOST_1
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.googleConnectUsingPOST_1 = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/connect/google';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getBookings
             * @method
             * @name OtrService#getBookingsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getBookingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/bookings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCaseBookings
             * @method
             * @name OtrService#listCaseBookingsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.listCaseBookingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/bookings2';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCaseCancellations
             * @method
             * @name OtrService#listCaseCancellationsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.listCaseCancellationsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cancellations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesWithCoverageObtained
             * @method
             * @name OtrService#getCasesWithCoverageObtainedUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getCasesWithCoverageObtainedUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases-with-coverage-obtained';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getClientConfirmedUnpaidCases
             * @method
             * @name OtrService#getClientConfirmedUnpaidCasesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getClientConfirmedUnpaidCasesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases/client-confirmed-unpaid';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getInvalidCasesWithStripeCharge
             * @method
             * @name OtrService#getInvalidCasesWithStripeChargeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getInvalidCasesWithStripeChargeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases/invalid-with-charge';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLostCasesWithTransferNotReversed
             * @method
             * @name OtrService#getLostCasesWithTransferNotReversedUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getLostCasesWithTransferNotReversedUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases/lost/not-reversed';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesWithMissingLawfirmPayouts
             * @method
             * @name OtrService#getCasesWithMissingLawfirmPayoutsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getCasesWithMissingLawfirmPayoutsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases/missing-lawfirm-payouts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesWithOverduePayments
             * @method
             * @name OtrService#getCasesWithOverduePaymentsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getCasesWithOverduePaymentsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases/unpaid';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCitationPhoneLeads
             * @method
             * @name OtrService#getCitationPhoneLeadsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getCitationPhoneLeadsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/citation-phone-leads';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCitations
             * @method
             * @name OtrService#listCitationsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.listCitationsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/citations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCitationsWithMissingFields
             * @method
             * @name OtrService#getCitationsWithMissingFieldsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getCitationsWithMissingFieldsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/citations-with-missing-fields';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCustomers
             * @method
             * @name OtrService#listCustomersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listCustomersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/customers';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findDisputes
             * @method
             * @name OtrService#findDisputesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.findDisputesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/disputes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listDropoffs
             * @method
             * @name OtrService#listDropoffsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listDropoffsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/dropoff';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listExpenses
             * @method
             * @name OtrService#listExpensesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listExpensesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/expenses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawfirmsEngaged
             * @method
             * @name OtrService#listLawfirmsEngagedUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.listLawfirmsEngagedUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/lawfirm-engagement';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawfirmLeads
             * @method
             * @name OtrService#listLawfirmLeadsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.listLawfirmLeadsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/lawfirms/leads';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawyerLeads
             * @method
             * @name OtrService#listLawyerLeadsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listLawyerLeadsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/lawyer-leads';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listPhoneCalls
             * @method
             * @name OtrService#listPhoneCallsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.agentId - agentId
             * @param {string} parameters.agentName - agentName
             * @param {string} parameters.callQueueName - callQueueName
             * @param {string} parameters.callStatus - callStatus
             * @param {string} parameters.callStatusName - callStatusName
             * @param {string} parameters.customerName - customerName
             * @param {string} parameters.direction - direction
             * @param {string} parameters.endDate - endDate
             * @param {string} parameters.ivrName - ivrName
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             * @param {string} parameters.phoneNumber - phoneNumber
             * @param {boolean} parameters.shouldIncludePhoneCalls - shouldIncludePhoneCalls
             * @param {string} parameters.sortBy - sortBy
             * @param {string} parameters.sortOrder - sortOrder
             * @param {string} parameters.startDate - startDate
             * @param {string} parameters.teamName - teamName
             * @param {string} parameters.timeZoneId - timeZoneId
             * @param {integer} parameters.totalCalls - totalCalls
             * @param {integer} parameters.totalOtrAccounts - totalOtrAccounts
             */
            OtrService.prototype.listPhoneCallsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/phone-calls';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['agentId'] !== undefined) {
                    queryParameters['agentId'] = parameters['agentId'];
                }

                if (parameters['agentName'] !== undefined) {
                    queryParameters['agentName'] = parameters['agentName'];
                }

                if (parameters['callQueueName'] !== undefined) {
                    queryParameters['callQueueName'] = parameters['callQueueName'];
                }

                if (parameters['callStatus'] !== undefined) {
                    queryParameters['callStatus'] = parameters['callStatus'];
                }

                if (parameters['callStatusName'] !== undefined) {
                    queryParameters['callStatusName'] = parameters['callStatusName'];
                }

                if (parameters['customerName'] !== undefined) {
                    queryParameters['customerName'] = parameters['customerName'];
                }

                if (parameters['direction'] !== undefined) {
                    queryParameters['direction'] = parameters['direction'];
                }

                if (parameters['endDate'] !== undefined) {
                    queryParameters['endDate'] = parameters['endDate'];
                }

                if (parameters['ivrName'] !== undefined) {
                    queryParameters['ivrName'] = parameters['ivrName'];
                }

                /** set default value **/
                queryParameters['length'] = 50;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['phoneNumber'] !== undefined) {
                    queryParameters['phoneNumber'] = parameters['phoneNumber'];
                }

                /** set default value **/
                queryParameters['shouldIncludePhoneCalls'] = true;

                if (parameters['shouldIncludePhoneCalls'] !== undefined) {
                    queryParameters['shouldIncludePhoneCalls'] = parameters['shouldIncludePhoneCalls'];
                }

                if (parameters['sortBy'] !== undefined) {
                    queryParameters['sortBy'] = parameters['sortBy'];
                }

                if (parameters['sortOrder'] !== undefined) {
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }

                if (parameters['startDate'] !== undefined) {
                    queryParameters['startDate'] = parameters['startDate'];
                }

                if (parameters['teamName'] !== undefined) {
                    queryParameters['teamName'] = parameters['teamName'];
                }

                if (parameters['timeZoneId'] !== undefined) {
                    queryParameters['timeZoneId'] = parameters['timeZoneId'];
                }

                if (parameters['totalCalls'] !== undefined) {
                    queryParameters['totalCalls'] = parameters['totalCalls'];
                }

                if (parameters['totalOtrAccounts'] !== undefined) {
                    queryParameters['totalOtrAccounts'] = parameters['totalOtrAccounts'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listPotentialCustomers
             * @method
             * @name OtrService#listPotentialCustomersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.listPotentialCustomersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/potential-customers';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserRegistrations
             * @method
             * @name OtrService#getUserRegistrationsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getUserRegistrationsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/registrations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPendingTicketReviews
             * @method
             * @name OtrService#getPendingTicketReviewsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getPendingTicketReviewsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/ticket-review-requests/pending';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleContactLoopEvent
             * @method
             * @name OtrService#handleContactLoopEventUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.requestString - requestString
             */
            OtrService.prototype.handleContactLoopEventUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/contact-loop/webhook';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['requestString'] !== undefined) {
                    body = parameters['requestString'];
                }

                if (parameters['requestString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: requestString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCounties
             * @method
             * @name OtrService#getCountiesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.state - state
             */
            OtrService.prototype.getCountiesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/counties';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['state'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: state'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCountryList
             * @method
             * @name OtrService#getCountryListUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getCountryListUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/countries';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCountryRegions
             * @method
             * @name OtrService#getCountryRegionsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.countryCode - countryCode
             */
            OtrService.prototype.getCountryRegionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/countries/{countryCode}/regions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{countryCode}', parameters['countryCode']);

                if (parameters['countryCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: countryCode'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addCourt
             * @method
             * @name OtrService#addCourtUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.addCourtUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/courts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findCourtsWithNoCoverage
             * @method
             * @name OtrService#findCourtsWithNoCoverageUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.countryCode - countryCode
             * @param {integer} parameters.countyId - countyId
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.trailingDays - trailingDays
             */
            OtrService.prototype.findCourtsWithNoCoverageUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/courts/no-coverage';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['countryCode'] !== undefined) {
                    queryParameters['countryCode'] = parameters['countryCode'];
                }

                if (parameters['countyId'] !== undefined) {
                    queryParameters['countyId'] = parameters['countyId'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                /** set default value **/
                queryParameters['trailingDays'] = 120;

                if (parameters['trailingDays'] !== undefined) {
                    queryParameters['trailingDays'] = parameters['trailingDays'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * searchCourts
             * @method
             * @name OtrService#searchCourtsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {string} parameters.city - city
             * @param {string} parameters.countryCode - countryCode
             * @param {string} parameters.county - county
             * @param {integer} parameters.length - length
             * @param {integer} parameters.offset - offset
             * @param {string} parameters.q - q
             * @param {string} parameters.regionCode - regionCode
             * @param {string} parameters.state - state
             */
            OtrService.prototype.searchCourtsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/courts/traffic';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['citationId'] !== undefined) {
                    queryParameters['citationId'] = parameters['citationId'];
                }

                if (parameters['city'] !== undefined) {
                    queryParameters['city'] = parameters['city'];
                }

                if (parameters['countryCode'] !== undefined) {
                    queryParameters['countryCode'] = parameters['countryCode'];
                }

                if (parameters['county'] !== undefined) {
                    queryParameters['county'] = parameters['county'];
                }

                /** set default value **/
                queryParameters['length'] = 9999;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['offset'] !== undefined) {
                    queryParameters['offset'] = parameters['offset'];
                }

                if (parameters['q'] !== undefined) {
                    queryParameters['q'] = parameters['q'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCourt
             * @method
             * @name OtrService#getCourtUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.courtId - courtId
             */
            OtrService.prototype.getCourtUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/courts/{courtId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{courtId}', parameters['courtId']);

                if (parameters['courtId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCourt
             * @method
             * @name OtrService#updateCourtUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.courtId - courtId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateCourtUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/courts/{courtId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{courtId}', parameters['courtId']);

                if (parameters['courtId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCourtAddress
             * @method
             * @name OtrService#updateCourtAddressUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.addressId - addressId
             * @param {integer} parameters.courtId - courtId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateCourtAddressUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/courts/{courtId}/addresses/{addressId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{addressId}', parameters['addressId']);

                if (parameters['addressId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: addressId'));
                    return deferred.promise;
                }

                path = path.replace('{courtId}', parameters['courtId']);

                if (parameters['courtId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAwsCredentials
             * @method
             * @name OtrService#getAwsCredentialsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getAwsCredentialsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/credentials/aws';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendBookingReceipt
             * @method
             * @name OtrService#sendBookingReceiptUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.sendBookingReceiptUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/booking-receipt';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getOutgoingContacts
             * @method
             * @name OtrService#getOutgoingContactsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.recipientEmailAddress - recipientEmailAddress
             */
            OtrService.prototype.getOutgoingContactsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/contacts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['recipientEmailAddress'] !== undefined) {
                    queryParameters['recipientEmailAddress'] = parameters['recipientEmailAddress'];
                }

                if (parameters['recipientEmailAddress'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: recipientEmailAddress'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * generateTemplate
             * @method
             * @name OtrService#generateTemplateUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.generateTemplateUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/generate-template';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTemplates
             * @method
             * @name OtrService#getTemplatesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.category - category
             */
            OtrService.prototype.getTemplatesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/templates';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['category'] !== undefined) {
                    queryParameters['category'] = parameters['category'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * replyToTicket
             * @method
             * @name OtrService#replyToTicketUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.ticketId - ticketId
             */
            OtrService.prototype.replyToTicketUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/ticket/{ticketId}/reply';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{ticketId}', parameters['ticketId']);

                if (parameters['ticketId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendConsolidatedEmailToUser
             * @method
             * @name OtrService#sendConsolidatedEmailToUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.sendConsolidatedEmailToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/user/consolidate-email';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendEmailToUser
             * @method
             * @name OtrService#sendEmailToUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.sendEmailToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/user/email';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendEmailToUsers
             * @method
             * @name OtrService#sendEmailToUsersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.sendEmailToUsersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/crm/users/email';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listAgentBookings
             * @method
             * @name OtrService#listAgentBookingsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.agentTeam - agentTeam
             * @param {integer} parameters.agentUserId - agentUserId
             * @param {string} parameters.caseStatus - caseStatus
             * @param {string} parameters.channel - channel
             * @param {string} parameters.direction - direction
             * @param {string} parameters.endDate - endDate
             * @param {integer} parameters.length - length
             * @param {integer} parameters.offset - offset
             * @param {string} parameters.sortBy - sortBy
             * @param {string} parameters.sortOrder - sortOrder
             * @param {string} parameters.startDate - startDate
             * @param {string} parameters.state - state
             * @param {string} parameters.statusCategory - statusCategory
             * @param {string} parameters.timeZoneId - timeZoneId
             */
            OtrService.prototype.listAgentBookingsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cs-agent-bookings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['agentTeam'] !== undefined) {
                    queryParameters['agentTeam'] = parameters['agentTeam'];
                }

                if (parameters['agentUserId'] !== undefined) {
                    queryParameters['agentUserId'] = parameters['agentUserId'];
                }

                if (parameters['caseStatus'] !== undefined) {
                    queryParameters['caseStatus'] = parameters['caseStatus'];
                }

                if (parameters['channel'] !== undefined) {
                    queryParameters['channel'] = parameters['channel'];
                }

                if (parameters['direction'] !== undefined) {
                    queryParameters['direction'] = parameters['direction'];
                }

                if (parameters['endDate'] !== undefined) {
                    queryParameters['endDate'] = parameters['endDate'];
                }

                /** set default value **/
                queryParameters['length'] = 50;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['offset'] !== undefined) {
                    queryParameters['offset'] = parameters['offset'];
                }

                if (parameters['sortBy'] !== undefined) {
                    queryParameters['sortBy'] = parameters['sortBy'];
                }

                if (parameters['sortOrder'] !== undefined) {
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }

                if (parameters['startDate'] !== undefined) {
                    queryParameters['startDate'] = parameters['startDate'];
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['statusCategory'] !== undefined) {
                    queryParameters['statusCategory'] = parameters['statusCategory'];
                }

                if (parameters['timeZoneId'] !== undefined) {
                    queryParameters['timeZoneId'] = parameters['timeZoneId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveAgentBooking
             * @method
             * @name OtrService#saveAgentBookingUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveAgentBookingUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cs-agent-bookings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteAgentBooking
             * @method
             * @name OtrService#deleteAgentBookingUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.agentBookingId - agentBookingId
             */
            OtrService.prototype.deleteAgentBookingUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cs-agent-bookings/{agentBookingId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{agentBookingId}', parameters['agentBookingId']);

                if (parameters['agentBookingId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: agentBookingId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCustomerServiceAgents
             * @method
             * @name OtrService#getCustomerServiceAgentsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.isActive - isActive
             */
            OtrService.prototype.getCustomerServiceAgentsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cs-agents';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['isActive'] !== undefined) {
                    queryParameters['isActive'] = parameters['isActive'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * postCustomerLead
             * @method
             * @name OtrService#postCustomerLeadUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.postCustomerLeadUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/customer-leads';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendDirectMail
             * @method
             * @name OtrService#sendDirectMailUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.sendDirectMailUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSentMail
             * @method
             * @name OtrService#getSentMailUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getSentMailUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail/fetch-sent-mail';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleLobEvent
             * @method
             * @name OtrService#handleLobEventUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleLobEventUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail/lob-events';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getDirectMailTemplates
             * @method
             * @name OtrService#getDirectMailTemplatesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getDirectMailTemplatesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail/templates';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addDirectMailTemplate
             * @method
             * @name OtrService#addDirectMailTemplateUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.addDirectMailTemplateUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail/templates';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * validateDirectMailRequestForSend
             * @method
             * @name OtrService#validateDirectMailRequestForSendUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.validateDirectMailRequestForSendUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail/validate';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * verifyMailingAddress
             * @method
             * @name OtrService#verifyMailingAddressUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.verifyMailingAddressUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail/verify-address';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendDirectReferralCheck
             * @method
             * @name OtrService#sendDirectReferralCheckUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.sendDirectReferralCheckUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/direct-mail/{userId}/send-referral-check';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markDocumentWithDecision
             * @method
             * @name OtrService#markDocumentWithDecisionUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.decisionRequest - decisionRequest
             * @param {string} parameters.docId - docId
             */
            OtrService.prototype.markDocumentWithDecisionUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/documents/{docId}/decision';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['decisionRequest'] !== undefined) {
                    body = parameters['decisionRequest'];
                }

                if (parameters['decisionRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: decisionRequest'));
                    return deferred.promise;
                }

                path = path.replace('{docId}', parameters['docId']);

                if (parameters['docId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeFromDrip
             * @method
             * @name OtrService#removeFromDripUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.removeFromDripUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/drip';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleDripWebhook
             * @method
             * @name OtrService#handleDripWebhookUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleDripWebhookUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/drip/webhooks';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listEmployees
             * @method
             * @name OtrService#listEmployeesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.isActive - isActive
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             * @param {string} parameters.team - team
             */
            OtrService.prototype.listEmployeesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/employees';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['isActive'] !== undefined) {
                    queryParameters['isActive'] = parameters['isActive'];
                }

                /** set default value **/
                queryParameters['length'] = 10;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['team'] !== undefined) {
                    queryParameters['team'] = parameters['team'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveExternalContentVote
             * @method
             * @name OtrService#saveExternalContentVoteUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveExternalContentVoteUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/external-content-votes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getExternalTickets
             * @method
             * @name OtrService#getExternalTicketsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.attempts - attempts
             * @param {string} parameters.citationId - citationId
             * @param {integer} parameters.countyId - countyId
             * @param {string} parameters.dateOfBirth - dateOfBirth
             * @param {string} parameters.driversLicenseId - driversLicenseId
             * @param {string} parameters.lastName - lastName
             * @param {string} parameters.organizationName - organizationName
             * @param {string} parameters.regionCode - regionCode
             * @param {string} parameters.searchType - searchType
             * @param {string} parameters.searchValue - searchValue
             * @param {string} parameters.sessionId - sessionId
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.getExternalTicketsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/external-tickets';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                /** set default value **/
                queryParameters['attempts'] = 1;

                if (parameters['attempts'] !== undefined) {
                    queryParameters['attempts'] = parameters['attempts'];
                }

                if (parameters['citationId'] !== undefined) {
                    queryParameters['citationId'] = parameters['citationId'];
                }

                if (parameters['countyId'] !== undefined) {
                    queryParameters['countyId'] = parameters['countyId'];
                }

                if (parameters['dateOfBirth'] !== undefined) {
                    queryParameters['dateOfBirth'] = parameters['dateOfBirth'];
                }

                if (parameters['driversLicenseId'] !== undefined) {
                    queryParameters['driversLicenseId'] = parameters['driversLicenseId'];
                }

                if (parameters['lastName'] !== undefined) {
                    queryParameters['lastName'] = parameters['lastName'];
                }

                if (parameters['organizationName'] !== undefined) {
                    queryParameters['organizationName'] = parameters['organizationName'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['regionCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: regionCode'));
                    return deferred.promise;
                }

                if (parameters['searchType'] !== undefined) {
                    queryParameters['searchType'] = parameters['searchType'];
                }

                if (parameters['searchValue'] !== undefined) {
                    queryParameters['searchValue'] = parameters['searchValue'];
                }

                if (parameters['sessionId'] !== undefined) {
                    queryParameters['sessionId'] = parameters['sessionId'];
                }

                if (parameters['userId'] !== undefined) {
                    queryParameters['userId'] = parameters['userId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getInputParameters
             * @method
             * @name OtrService#getInputParametersUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.regionCode - regionCode
             */
            OtrService.prototype.getInputParametersUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/external-tickets/input-parameters';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['regionCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: regionCode'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * postFeedback
             * @method
             * @name OtrService#postFeedbackUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.isReview - isReview
             * @param {} parameters.request - request
             */
            OtrService.prototype.postFeedbackUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/feedback';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['isReview'] !== undefined) {
                    queryParameters['isReview'] = parameters['isReview'];
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * forwardMessage
             * @method
             * @name OtrService#forwardMessageUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.xSessionId - X-Session-Id
             */
            OtrService.prototype.forwardMessageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/forward-message';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters['xSessionId'] !== undefined) {
                    headers['X-Session-Id'] = parameters['xSessionId'];
                }

                if (parameters['xSessionId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: xSessionId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateFreshdeskTicket
             * @method
             * @name OtrService#updateFreshdeskTicketUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.ticketId - ticketId
             */
            OtrService.prototype.updateFreshdeskTicketUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/freshdesk/ticket/{ticketId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{ticketId}', parameters['ticketId']);

                if (parameters['ticketId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * ticketStatusChangeHook
             * @method
             * @name OtrService#ticketStatusChangeHookUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.ticketId - ticketId
             */
            OtrService.prototype.ticketStatusChangeHookUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/freshdesk/ticket/{ticketId}/webhook/status-change';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{ticketId}', parameters['ticketId']);

                if (parameters['ticketId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * mergeTicket
             * @method
             * @name OtrService#mergeTicketUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.ticketId - ticketId
             */
            OtrService.prototype.mergeTicketUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/freshdesk/webhook/ticket/{ticketId}/merge';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{ticketId}', parameters['ticketId']);

                if (parameters['ticketId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * acceptHouseholdInvite
             * @method
             * @name OtrService#acceptHouseholdInviteUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
             * @param {string} parameters.token - token
             */
            OtrService.prototype.acceptHouseholdInviteUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/household-mates/accept-invite';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                if (parameters['token'] !== undefined) {
                    queryParameters['token'] = parameters['token'];
                }

                if (parameters['token'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: token'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getHouseholdMates
             * @method
             * @name OtrService#getHouseholdMatesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.getHouseholdMatesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/household-mates/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeHouseholdMate
             * @method
             * @name OtrService#removeHouseholdMateUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.mateUserId - mateUserId
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.removeHouseholdMateUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/household-mates/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['mateUserId'] !== undefined) {
                    queryParameters['mateUserId'] = parameters['mateUserId'];
                }

                if (parameters['mateUserId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: mateUserId'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * inviteHouseholdMate
             * @method
             * @name OtrService#inviteHouseholdMateUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.inviteHouseholdMateUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/household-mates/{userId}/invite';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * cancelHouseholdMateInvite
             * @method
             * @name OtrService#cancelHouseholdMateInviteUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.inviteeEmail - inviteeEmail
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.cancelHouseholdMateInviteUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/household-mates/{userId}/invite';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['inviteeEmail'] !== undefined) {
                    queryParameters['inviteeEmail'] = parameters['inviteeEmail'];
                }

                if (parameters['inviteeEmail'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: inviteeEmail'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * onDeliveredEmailFromHubspot
             * @method
             * @name OtrService#onDeliveredEmailFromHubspotUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.body - body
             */
            OtrService.prototype.onDeliveredEmailFromHubspotUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/hubspot/webhook/email-delivered';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['body'] !== undefined) {
                    body = parameters['body'];
                }

                if (parameters['body'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: body'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * calculateTicketSavings
             * @method
             * @name OtrService#calculateTicketSavingsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.calculateTicketSavingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/insurance/ticket/savings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getConversations
             * @method
             * @name OtrService#getConversationsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
             * @param {integer} parameters.length - length
             */
            OtrService.prototype.getConversationsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/intercom/conversations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['length'] = 100;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTickets
             * @method
             * @name OtrService#getTicketsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.length - length
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getTicketsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/intercom/tickets/search';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                /** set default value **/
                queryParameters['length'] = 100;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['userId'] !== undefined) {
                    queryParameters['userId'] = parameters['userId'];
                }

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * refundLawfirmFee
             * @method
             * @name OtrService#refundLawfirmFeeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmFeeId - lawfirmFeeId
             * @param {} parameters.request - request
             */
            OtrService.prototype.refundLawfirmFeeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-fee/{lawfirmFeeId}/refund';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmFeeId}', parameters['lawfirmFeeId']);

                if (parameters['lawfirmFeeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmFeeId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmFee
             * @method
             * @name OtrService#updateLawfirmFeeUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmFeeId - lawfirmFeeId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateLawfirmFeeUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-fees/{lawfirmFeeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmFeeId}', parameters['lawfirmFeeId']);

                if (parameters['lawfirmFeeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmFeeId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * debitLawfirmFee
             * @method
             * @name OtrService#debitLawfirmFeeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmFeeId - lawfirmFeeId
             */
            OtrService.prototype.debitLawfirmFeeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-fees/{lawfirmFeeId}/debit';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmFeeId}', parameters['lawfirmFeeId']);

                if (parameters['lawfirmFeeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmFeeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmPayout
             * @method
             * @name OtrService#updateLawfirmPayoutUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmPayoutId - lawfirmPayoutId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateLawfirmPayoutUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-payouts/{lawfirmPayoutId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmPayoutId}', parameters['lawfirmPayoutId']);

                if (parameters['lawfirmPayoutId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmPayoutId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * reverseLawfirmPayout
             * @method
             * @name OtrService#reverseLawfirmPayoutUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmPayoutId - lawfirmPayoutId
             * @param {} parameters.request - request
             */
            OtrService.prototype.reverseLawfirmPayoutUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-payouts/{lawfirmPayoutId}/reverse';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmPayoutId}', parameters['lawfirmPayoutId']);

                if (parameters['lawfirmPayoutId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmPayoutId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * executeLawfirmPayout
             * @method
             * @name OtrService#executeLawfirmPayoutUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmPayoutId - lawfirmPayoutId
             */
            OtrService.prototype.executeLawfirmPayoutUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-payouts/{lawfirmPayoutId}/transfer';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmPayoutId}', parameters['lawfirmPayoutId']);

                if (parameters['lawfirmPayoutId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmPayoutId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmSetting
             * @method
             * @name OtrService#getLawfirmSettingUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.name - name
             */
            OtrService.prototype.getLawfirmSettingUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-settings/{lawfirmId}/setting';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['name'] !== undefined) {
                    queryParameters['name'] = parameters['name'];
                }

                if (parameters['name'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: name'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmSetting
             * @method
             * @name OtrService#updateLawfirmSettingUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateLawfirmSettingUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-settings/{lawfirmId}/setting';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawfirmStorefronts
             * @method
             * @name OtrService#listLawfirmStorefrontsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.page - page
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.size - size
             */
            OtrService.prototype.listLawfirmStorefrontsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm-storefronts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                /** set default value **/
                queryParameters['size'] = 25;

                if (parameters['size'] !== undefined) {
                    queryParameters['size'] = parameters['size'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setLawfirmCaseDecision
             * @method
             * @name OtrService#setLawfirmCaseDecisionUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.setLawfirmCaseDecisionUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirm/cases/{caseId}/decision';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirms
             * @method
             * @name OtrService#getLawfirmsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.acceptsAccidentTickets - acceptsAccidentTickets
             * @param {boolean} parameters.acceptsPastDueTickets - acceptsPastDueTickets
             * @param {boolean} parameters.includeTestLawfirms - includeTestLawfirms
             * @param {boolean} parameters.includeVacationMode - includeVacationMode
             * @param {string} parameters.q - q
             * @param {string} parameters.states - states
             * @param {string} parameters.statusCategories - statusCategories
             * @param {string} parameters.statuses - statuses
             */
            OtrService.prototype.getLawfirmsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['acceptsAccidentTickets'] !== undefined) {
                    queryParameters['acceptsAccidentTickets'] = parameters['acceptsAccidentTickets'];
                }

                if (parameters['acceptsPastDueTickets'] !== undefined) {
                    queryParameters['acceptsPastDueTickets'] = parameters['acceptsPastDueTickets'];
                }

                if (parameters['includeTestLawfirms'] !== undefined) {
                    queryParameters['includeTestLawfirms'] = parameters['includeTestLawfirms'];
                }

                if (parameters['includeVacationMode'] !== undefined) {
                    queryParameters['includeVacationMode'] = parameters['includeVacationMode'];
                }

                if (parameters['q'] !== undefined) {
                    queryParameters['q'] = parameters['q'];
                }

                if (parameters['states'] !== undefined) {
                    queryParameters['states'] = parameters['states'];
                }

                if (parameters['statusCategories'] !== undefined) {
                    queryParameters['statusCategories'] = parameters['statusCategories'];
                }

                if (parameters['statuses'] !== undefined) {
                    queryParameters['statuses'] = parameters['statuses'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createLawfirm
             * @method
             * @name OtrService#createLawfirmUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.createLawfirmUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * uploadLawfirms
             * @method
             * @name OtrService#uploadLawfirmsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.uploadLawfirmsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/bulk-upload';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmByPrimaryEmail
             * @method
             * @name OtrService#getLawfirmByPrimaryEmailUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.primaryLawfirmEmail - primaryLawfirmEmail
             */
            OtrService.prototype.getLawfirmByPrimaryEmailUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/email/{primaryLawfirmEmail}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{primaryLawfirmEmail}', parameters['primaryLawfirmEmail']);

                if (parameters['primaryLawfirmEmail'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: primaryLawfirmEmail'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteLawfirmFeeRecord
             * @method
             * @name OtrService#deleteLawfirmFeeRecordUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmFeeId - lawfirmFeeId
             */
            OtrService.prototype.deleteLawfirmFeeRecordUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/fees/{lawfirmFeeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmFeeId}', parameters['lawfirmFeeId']);

                if (parameters['lawfirmFeeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmFeeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmJobTitles
             * @method
             * @name OtrService#getLawfirmJobTitlesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getLawfirmJobTitlesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/job-titles';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmSupportTickets
             * @method
             * @name OtrService#getLawfirmSupportTicketsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.limit - limit
             */
            OtrService.prototype.getLawfirmSupportTicketsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/lawfirms/{lawfirmId}/support-tickets';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['limit'] = 100;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteLawfirmPayoutRecord
             * @method
             * @name OtrService#deleteLawfirmPayoutRecordUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmPayoutId - lawfirmPayoutId
             */
            OtrService.prototype.deleteLawfirmPayoutRecordUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/payouts/{lawfirmPayoutId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmPayoutId}', parameters['lawfirmPayoutId']);

                if (parameters['lawfirmPayoutId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmPayoutId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmStatuses
             * @method
             * @name OtrService#getLawfirmStatusesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getLawfirmStatusesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/statuses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmByUrl
             * @method
             * @name OtrService#getLawfirmByUrlUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.seoUrl - seoUrl
             */
            OtrService.prototype.getLawfirmByUrlUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/url';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['seoUrl'] !== undefined) {
                    queryParameters['seoUrl'] = parameters['seoUrl'];
                }

                if (parameters['seoUrl'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: seoUrl'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirm
             * @method
             * @name OtrService#getLawfirmUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.isDetailsRequired - isDetailsRequired
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             */
            OtrService.prototype.getLawfirmUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['isDetailsRequired'] !== undefined) {
                    queryParameters['isDetailsRequired'] = parameters['isDetailsRequired'];
                }

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirm
             * @method
             * @name OtrService#updateLawfirmUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateLawfirmUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addCourtToCoverage
             * @method
             * @name OtrService#addCourtToCoverageUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             * @param {} parameters.request - request
             */
            OtrService.prototype.addCourtToCoverageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmIdString}/courts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCoverage
             * @method
             * @name OtrService#getLawfirmCoverageUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             */
            OtrService.prototype.getLawfirmCoverageUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmIdString}/coverage';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmSettings
             * @method
             * @name OtrService#updateLawfirmSettingsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateLawfirmSettingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmIdString}/settings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAccountFees
             * @method
             * @name OtrService#getAccountFeesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.enabledFeesOnly - enabledFeesOnly
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getAccountFeesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/account-fees';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['enabledFeesOnly'] !== undefined) {
                    queryParameters['enabledFeesOnly'] = parameters['enabledFeesOnly'];
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveAccountFees
             * @method
             * @name OtrService#saveAccountFeesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveAccountFeesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/account-fees';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeAccountFees
             * @method
             * @name OtrService#removeAccountFeesUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.classification - classification
             * @param {boolean} parameters.isPermitted - isPermitted
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.violationId - violationId
             */
            OtrService.prototype.removeAccountFeesUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/account-fees';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['classification'] !== undefined) {
                    queryParameters['classification'] = parameters['classification'];
                }

                if (parameters['isPermitted'] !== undefined) {
                    queryParameters['isPermitted'] = parameters['isPermitted'];
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['violationId'] !== undefined) {
                    queryParameters['violationId'] = parameters['violationId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * enableViolationsForLawfirm
             * @method
             * @name OtrService#enableViolationsForLawfirmUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.enableViolationsForLawfirmUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/account-fees/enable-violations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * resetFeesForLawfirm
             * @method
             * @name OtrService#resetFeesForLawfirmUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.resetFeesForLawfirmUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/account-fees/reset';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmAddresses
             * @method
             * @name OtrService#getLawfirmAddressesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getLawfirmAddressesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/addresses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addLawfirmAddress
             * @method
             * @name OtrService#addLawfirmAddressUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.addLawfirmAddressUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/addresses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmAddress
             * @method
             * @name OtrService#updateLawfirmAddressUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.addressId - addressId
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateLawfirmAddressUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/addresses/{addressId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{addressId}', parameters['addressId']);

                if (parameters['addressId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: addressId'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawfirmAuditEventsByCursor
             * @method
             * @name OtrService#listLawfirmAuditEventsByCursorUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.excludeTypes - excludeTypes
             * @param {string} parameters.includeTypes - includeTypes
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.nextPageToken - nextPageToken
             */
            OtrService.prototype.listLawfirmAuditEventsByCursorUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/audit-events';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['excludeTypes'] !== undefined) {
                    queryParameters['excludeTypes'] = parameters['excludeTypes'];
                }

                if (parameters['includeTypes'] !== undefined) {
                    queryParameters['includeTypes'] = parameters['includeTypes'];
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['limit'] = 25;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['nextPageToken'] !== undefined) {
                    queryParameters['nextPageToken'] = parameters['nextPageToken'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawfirmBankPayouts
             * @method
             * @name OtrService#listLawfirmBankPayoutsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeTransactions - includeTransactions 
             * @param {integer} parameters.index - index
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.size - size
             */
            OtrService.prototype.listLawfirmBankPayoutsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/bank-payouts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['includeTransactions'] !== undefined) {
                    queryParameters['includeTransactions '] = parameters['includeTransactions'];
                }

                if (parameters['includeTransactions'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: includeTransactions'));
                    return deferred.promise;
                }

                if (parameters['index'] !== undefined) {
                    queryParameters['index'] = parameters['index'];
                }

                if (parameters['index'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: index'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['size'] = 10;

                if (parameters['size'] !== undefined) {
                    queryParameters['size'] = parameters['size'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCaseStats
             * @method
             * @name OtrService#getLawfirmCaseStatsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getLawfirmCaseStatsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/cases/stats';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeCourts
             * @method
             * @name OtrService#removeCourtsUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.courtsToRemove - courtsToRemove
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.removeCourtsUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/courts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['courtsToRemove'] !== undefined) {
                    queryParameters['courtsToRemove'] = parameters['courtsToRemove'];
                }

                if (parameters['courtsToRemove'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtsToRemove'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteLawfirmCoverPhoto
             * @method
             * @name OtrService#deleteLawfirmCoverPhotoUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.deleteLawfirmCoverPhotoUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/cover-photo';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * chargeFeeToLawfirm
             * @method
             * @name OtrService#chargeFeeToLawfirmUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.chargeFeeToLawfirmUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/debits';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getDocument
             * @method
             * @name OtrService#getDocumentUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.docType - doc_type
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getDocumentUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/documents';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['docType'] !== undefined) {
                    queryParameters['doc_type'] = parameters['docType'];
                }

                if (parameters['docType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docType'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * generateDoc
             * @method
             * @name OtrService#generateDocUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.docType - doc_type
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.generateDocUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/documents';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['docType'] !== undefined) {
                    queryParameters['doc_type'] = parameters['docType'];
                }

                if (parameters['docType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docType'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * uploadCopy
             * @method
             * @name OtrService#uploadCopyUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.uploadCopyUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/documents';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * previewDoc
             * @method
             * @name OtrService#previewDocUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.docType - doc_type
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.previewDocUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/documents/preview';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['docType'] !== undefined) {
                    queryParameters['doc_type'] = parameters['docType'];
                }

                if (parameters['docType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docType'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getInboxMessages
             * @method
             * @name OtrService#getInboxMessagesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseStatuses - caseStatuses
             * @param {string} parameters.courtDateFilter - courtDateFilter
             * @param {string} parameters.filter - filter
             * @param {string} parameters.latestMessageBy - latestMessageBy
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             * @param {string} parameters.query - query
             * @param {string} parameters.statusCategories - statusCategories
             */
            OtrService.prototype.getInboxMessagesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/inbox-messages';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['caseStatuses'] !== undefined) {
                    queryParameters['caseStatuses'] = parameters['caseStatuses'];
                }

                if (parameters['courtDateFilter'] !== undefined) {
                    queryParameters['courtDateFilter'] = parameters['courtDateFilter'];
                }

                if (parameters['filter'] !== undefined) {
                    queryParameters['filter'] = parameters['filter'];
                }

                if (parameters['latestMessageBy'] !== undefined) {
                    queryParameters['latestMessageBy'] = parameters['latestMessageBy'];
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['length'] = 100;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['query'] !== undefined) {
                    queryParameters['query'] = parameters['query'];
                }

                if (parameters['statusCategories'] !== undefined) {
                    queryParameters['statusCategories'] = parameters['statusCategories'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmLawyers
             * @method
             * @name OtrService#getLawfirmLawyersUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.settingName - settingName
             */
            OtrService.prototype.getLawfirmLawyersUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/lawyers';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['settingName'] !== undefined) {
                    queryParameters['settingName'] = parameters['settingName'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * inviteLawyerToLawfirm
             * @method
             * @name OtrService#inviteLawyerToLawfirmUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.inviteLawyerToLawfirmUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/lawyers/{userId}/invite';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawyerRole
             * @method
             * @name OtrService#updateLawyerRoleUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.updateLawyerRoleUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/lawyers/{userId}/update-role';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getOtrLawfirmNotes
             * @method
             * @name OtrService#getOtrLawfirmNotesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getOtrLawfirmNotesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/otr-notes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updatePaymentModel
             * @method
             * @name OtrService#updatePaymentModelUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updatePaymentModelUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/payment-model';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Retrieves all the payment methods available on the lawfirm's Stripe account.
             * @method
             * @name OtrService#getLawfirmPaymentMethodsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getLawfirmPaymentMethodsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/paymentmethods';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendPayoutToLawfirm
             * @method
             * @name OtrService#sendPayoutToLawfirmUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.sendPayoutToLawfirmUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/payouts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmWithPicture
             * @method
             * @name OtrService#updateLawfirmWithPictureUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateLawfirmWithPictureUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/picture';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmSettings
             * @method
             * @name OtrService#getLawfirmSettingsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getLawfirmSettingsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/settings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getStripeConnectedAccounts
             * @method
             * @name OtrService#getStripeConnectedAccountsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getStripeConnectedAccountsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/stripe';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteLawfirmConnectedAccount
             * @method
             * @name OtrService#deleteLawfirmConnectedAccountUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.stripeAccountId - stripeAccountId
             */
            OtrService.prototype.deleteLawfirmConnectedAccountUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/stripe/account/{stripeAccountId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                path = path.replace('{stripeAccountId}', parameters['stripeAccountId']);

                if (parameters['stripeAccountId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: stripeAccountId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addACHToLawfirmStripeAccount
             * @method
             * @name OtrService#addACHToLawfirmStripeAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.addACHToLawfirmStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/stripe/ach';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteBankAccountFromLawfirmStripeAccount
             * @method
             * @name OtrService#deleteBankAccountFromLawfirmStripeAccountUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.bankAccountId - bankAccountId
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.deleteBankAccountFromLawfirmStripeAccountUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{bankAccountId}', parameters['bankAccountId']);

                if (parameters['bankAccountId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: bankAccountId'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setDefaultPaymentMethodForLawfirm
             * @method
             * @name OtrService#setDefaultPaymentMethodForLawfirmUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.stripePaymentSourceId - stripePaymentSourceId
             */
            OtrService.prototype.setDefaultPaymentMethodForLawfirmUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['stripePaymentSourceId'] !== undefined) {
                    queryParameters['stripePaymentSourceId'] = parameters['stripePaymentSourceId'];
                }

                if (parameters['stripePaymentSourceId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: stripePaymentSourceId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSupportedStatesForLawfirm
             * @method
             * @name OtrService#getSupportedStatesForLawfirmUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getSupportedStatesForLawfirmUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/supported-states';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawfirmSurcharges
             * @method
             * @name OtrService#listLawfirmSurchargesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.featureType - featureType
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.listLawfirmSurchargesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/surcharges';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['featureType'] !== undefined) {
                    queryParameters['featureType'] = parameters['featureType'];
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveLawfirmSurcharges
             * @method
             * @name OtrService#saveLawfirmSurchargesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveLawfirmSurchargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/surcharges';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeSurcharges
             * @method
             * @name OtrService#removeSurchargesUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.removeSurchargesUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/surcharges';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setVacationMode
             * @method
             * @name OtrService#setVacationModeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {} parameters.request - request
             */
            OtrService.prototype.setVacationModeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/vacation';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * upsertLawyer
             * @method
             * @name OtrService#upsertLawyerUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.upsertLawyerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveLawyerLead
             * @method
             * @name OtrService#saveLawyerLeadUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.saveLawyerLeadUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers/lead';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawyerEmailGuesses
             * @method
             * @name OtrService#getLawyerEmailGuessesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawyerId - lawyerId
             */
            OtrService.prototype.getLawyerEmailGuessesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers/{lawyerId}/email-guesses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawyerId}', parameters['lawyerId']);

                if (parameters['lawyerId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawyerId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawyer
             * @method
             * @name OtrService#getLawyerUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getLawyerUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteLawyer
             * @method
             * @name OtrService#deleteLawyerUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.removeAdminOnly - removeAdminOnly
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.deleteLawyerUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['removeAdminOnly'] !== undefined) {
                    queryParameters['removeAdminOnly'] = parameters['removeAdminOnly'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * cancelLawyerInvite
             * @method
             * @name OtrService#cancelLawyerInviteUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.inviteeEmail - inviteeEmail
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.cancelLawyerInviteUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers/{userId}/invite';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['inviteeEmail'] !== undefined) {
                    queryParameters['inviteeEmail'] = parameters['inviteeEmail'];
                }

                if (parameters['inviteeEmail'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: inviteeEmail'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveLawyerLicenses
             * @method
             * @name OtrService#saveLawyerLicensesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.saveLawyerLicensesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers/{userId}/licenses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteLawyerLicenses
             * @method
             * @name OtrService#deleteLawyerLicensesUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.deleteLawyerLicensesUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawyers/{userId}/licenses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLineItemTypes
             * @method
             * @name OtrService#getLineItemTypesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getLineItemTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lineitems';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLocation
             * @method
             * @name OtrService#getLocationUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.countryCode - countryCode
             * @param {string} parameters.zipCode - zipCode
             */
            OtrService.prototype.getLocationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/locations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                /** set default value **/
                queryParameters['countryCode'] = "USA";

                if (parameters['countryCode'] !== undefined) {
                    queryParameters['countryCode'] = parameters['countryCode'];
                }

                if (parameters['zipCode'] !== undefined) {
                    queryParameters['zipCode'] = parameters['zipCode'];
                }

                if (parameters['zipCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: zipCode'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * convertPdfToImage
             * @method
             * @name OtrService#convertPdfToImageUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.convertPdfToImageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/media/convert-pdf-to-image';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listMessagesByEntity
             * @method
             * @name OtrService#listMessagesByEntityUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeAdminActions - includeAdminActions 
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             * @param {integer} parameters.userIds - userIds
             */
            OtrService.prototype.listMessagesByEntityUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/messages';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['includeAdminActions'] !== undefined) {
                    queryParameters['includeAdminActions '] = parameters['includeAdminActions'];
                }

                if (parameters['lawfirmId'] !== undefined) {
                    queryParameters['lawfirmId'] = parameters['lawfirmId'];
                }

                /** set default value **/
                queryParameters['length'] = 100;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['userIds'] !== undefined) {
                    queryParameters['userIds'] = parameters['userIds'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createNote
             * @method
             * @name OtrService#createNoteUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.createNoteUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateNote
             * @method
             * @name OtrService#updateNoteUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.noteId - noteId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateNoteUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notes/{noteId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{noteId}', parameters['noteId']);

                if (parameters['noteId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: noteId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteNote
             * @method
             * @name OtrService#deleteNoteUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.noteId - noteId
             */
            OtrService.prototype.deleteNoteUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notes/{noteId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{noteId}', parameters['noteId']);

                if (parameters['noteId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: noteId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * notifyClientActionRequirement
             * @method
             * @name OtrService#notifyClientActionRequirementUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.notifyClientActionRequirementUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/action-required';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * pushCaseMessage
             * @method
             * @name OtrService#pushCaseMessageUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.pushRequest - pushRequest
             */
            OtrService.prototype.pushCaseMessageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/cases/{caseId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['pushRequest'] !== undefined) {
                    body = parameters['pushRequest'];
                }

                if (parameters['pushRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: pushRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * register
             * @method
             * @name OtrService#registerUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.registerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/register';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUnreadCounts
             * @method
             * @name OtrService#getUnreadCountsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeMessage - includeMessage
             */
            OtrService.prototype.getUnreadCountsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/unread';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['includeMessage'] !== undefined) {
                    queryParameters['includeMessage'] = parameters['includeMessage'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markRead
             * @method
             * @name OtrService#markReadUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.markReadUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/unread/{caseId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markAllReadForUser
             * @method
             * @name OtrService#markAllReadForUserUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.markAllReadForUserUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/unread/{userId}/user';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * pushNotificationToUser
             * @method
             * @name OtrService#pushNotificationToUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.body - body
             */
            OtrService.prototype.pushNotificationToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/users';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['body'] !== undefined) {
                    body = parameters['body'];
                }

                if (parameters['body'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: body'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markCaseNotificationsAsUnread
             * @method
             * @name OtrService#markCaseNotificationsAsUnreadUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.markCaseNotificationsAsUnreadUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/{userId}/unread/{caseId}/message';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * predictCitationFields
             * @method
             * @name OtrService#predictCitationFieldsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.predictCitationFieldsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/ocr_pipeline/predict_citation';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * predictRichCitationFields
             * @method
             * @name OtrService#predictRichCitationFieldsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.predictRichCitationFieldsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/ocr_pipeline/predict_rich_citation';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendOneTimePassword
             * @method
             * @name OtrService#sendOneTimePasswordUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.sendOneTimePasswordUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/one_time_password';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPaymentModelTypes
             * @method
             * @name OtrService#getPaymentModelTypesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getPaymentModelTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/payment-models';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAvailablePaymentPlans
             * @method
             * @name OtrService#getAvailablePaymentPlansUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.legalFeeInCents - legalFeeInCents
             * @param {string} parameters.state - state
             */
            OtrService.prototype.getAvailablePaymentPlansUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/payment-plans/{lawfirmId}/case-payment';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['legalFeeInCents'] !== undefined) {
                    queryParameters['legalFeeInCents'] = parameters['legalFeeInCents'];
                }

                if (parameters['legalFeeInCents'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: legalFeeInCents'));
                    return deferred.promise;
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['state'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: state'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCasePayment
             * @method
             * @name OtrService#updateCasePaymentUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.casePaymentId - casePaymentId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateCasePaymentUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/payments/{casePaymentId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updatePaymentDueDate
             * @method
             * @name OtrService#updatePaymentDueDateUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.casePaymentId - casePaymentId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updatePaymentDueDateUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/payments/{casePaymentId}/due-date';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updatePaymentRecipient
             * @method
             * @name OtrService#updatePaymentRecipientUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.casePaymentId - casePaymentId
             * @param {string} parameters.recipient - recipient
             */
            OtrService.prototype.updatePaymentRecipientUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/payments/{casePaymentId}/owner';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{casePaymentId}', parameters['casePaymentId']);

                if (parameters['casePaymentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: casePaymentId'));
                    return deferred.promise;
                }

                if (parameters['recipient'] !== undefined) {
                    queryParameters['recipient'] = parameters['recipient'];
                }

                if (parameters['recipient'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: recipient'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * signRecordingUrl
             * @method
             * @name OtrService#signRecordingUrlUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.signRecordingUrlUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/phone-calls/sign';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * dismissPhoneLead
             * @method
             * @name OtrService#dismissPhoneLeadUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.dismissPhoneLeadUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/phone-leads/dismiss';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addNoteToPhoneLead
             * @method
             * @name OtrService#addNoteToPhoneLeadUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.addNoteToPhoneLeadUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/phone-leads/notes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * predictImageClassification
             * @method
             * @name OtrService#predictImageClassificationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.predictImageClassificationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/predictions/classify-image';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * predictCitationText
             * @method
             * @name OtrService#predictCitationTextUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.predictCitationTextUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/predictions/predict-citation-text';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getActiveRatesByArea
             * @method
             * @name OtrService#getActiveRatesByAreaUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getActiveRatesByAreaUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/rates';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getRedirectUrl
             * @method
             * @name OtrService#getRedirectUrlUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.landingPageUrl - landingPageUrl
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.pageType - pageType
             */
            OtrService.prototype.getRedirectUrlUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/redirects';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['landingPageUrl'] !== undefined) {
                    queryParameters['landingPageUrl'] = parameters['landingPageUrl'];
                }

                if (parameters['lawfirmId'] !== undefined) {
                    queryParameters['lawfirmId'] = parameters['lawfirmId'];
                }

                if (parameters['pageType'] !== undefined) {
                    queryParameters['pageType'] = parameters['pageType'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addRedirectUrl
             * @method
             * @name OtrService#addRedirectUrlUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.addRedirectUrlUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/redirects';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * clearCache
             * @method
             * @name OtrService#clearCacheUsingPOST
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.clearCacheUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/redirects/clear-cache';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getReferralHistory
             * @method
             * @name OtrService#getReferralHistoryUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getReferralHistoryUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addReferral
             * @method
             * @name OtrService#addReferralUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.addReferralUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getReferralCodes
             * @method
             * @name OtrService#getReferralCodesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.isActive - isActive
             */
            OtrService.prototype.getReferralCodesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/codes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                /** set default value **/
                queryParameters['isActive'] = true;

                if (parameters['isActive'] !== undefined) {
                    queryParameters['isActive'] = parameters['isActive'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
             * @method
             * @name OtrService#generateReferralCodeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.generateReferralCodeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/codes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getReferralCode
             * @method
             * @name OtrService#getReferralCodeUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.codeId - codeId
             */
            OtrService.prototype.getReferralCodeUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/codes/{codeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markCodeAsInactive
             * @method
             * @name OtrService#markCodeAsInactiveUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.codeId - codeId
             */
            OtrService.prototype.markCodeAsInactiveUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/codes/{codeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Only for admins. This will approve and activate a given referral code
             * @method
             * @name OtrService#approveReferralCodeUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.codeId - codeId
             */
            OtrService.prototype.approveReferralCodeUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/codes/{codeId}/approve';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it's max use count?
             * @method
             * @name OtrService#validateReferralCodeUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.codeId - codeId
             */
            OtrService.prototype.validateReferralCodeUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/codes/{codeId}/validate';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * publishReferralContacts
             * @method
             * @name OtrService#publishReferralContactsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.publishReferralContactsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/contacts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserReferralSourceTypes
             * @method
             * @name OtrService#getUserReferralSourceTypesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.flavor - flavor
             */
            OtrService.prototype.getUserReferralSourceTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/sources';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['flavor'] !== undefined) {
                    queryParameters['flavor'] = parameters['flavor'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setReferralSource
             * @method
             * @name OtrService#setReferralSourceUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.setReferralSourceUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/referrals/sources';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getRefLinksForUser
             * @method
             * @name OtrService#getRefLinksForUserUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userIdString - userIdString
             */
            OtrService.prototype.getRefLinksForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reflinks/{userIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userIdString}', parameters['userIdString']);

                if (parameters['userIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userIdString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * registerGhostUser
             * @method
             * @name OtrService#registerGhostUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.registerGhostUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/register-ghost';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCourtCoverageReport
             * @method
             * @name OtrService#getCourtCoverageReportUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.urWindowInDays - urWindowInDays
             */
            OtrService.prototype.getCourtCoverageReportUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reports/court-coverage';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['urWindowInDays'] !== undefined) {
                    queryParameters['urWindowInDays'] = parameters['urWindowInDays'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCoverageReport
             * @method
             * @name OtrService#getLawfirmCoverageReportUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.countyId - countyId
             * @param {string} parameters.regionCode - regionCode
             */
            OtrService.prototype.getLawfirmCoverageReportUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reports/court-coverage/lawfirms';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['countyId'] !== undefined) {
                    queryParameters['countyId'] = parameters['countyId'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCourtCoverageForStateReport
             * @method
             * @name OtrService#getCourtCoverageForStateReportUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.countyId - countyId
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.urWindowInDays - urWindowInDays
             */
            OtrService.prototype.getCourtCoverageForStateReportUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reports/court-coverage/{regionCode}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['countyId'] !== undefined) {
                    queryParameters['countyId'] = parameters['countyId'];
                }

                path = path.replace('{regionCode}', parameters['regionCode']);

                if (parameters['regionCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: regionCode'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['urWindowInDays'] = 120;

                if (parameters['urWindowInDays'] !== undefined) {
                    queryParameters['urWindowInDays'] = parameters['urWindowInDays'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCourtCoverageForCountyReport
             * @method
             * @name OtrService#getCourtCoverageForCountyReportUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.countyId - countyId
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.urWindowInDays - urWindowInDays
             */
            OtrService.prototype.getCourtCoverageForCountyReportUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reports/court-coverage/{regionCode}/{countyId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{countyId}', parameters['countyId']);

                if (parameters['countyId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: countyId'));
                    return deferred.promise;
                }

                path = path.replace('{regionCode}', parameters['regionCode']);

                if (parameters['regionCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: regionCode'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['urWindowInDays'] = 120;

                if (parameters['urWindowInDays'] !== undefined) {
                    queryParameters['urWindowInDays'] = parameters['urWindowInDays'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCustomerReviews
             * @method
             * @name OtrService#listCustomerReviewsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeAnonymous - includeAnonymous
             * @param {boolean} parameters.includeDeleted - includeDeleted
             * @param {boolean} parameters.includeRatings - includeRatings
             * @param {boolean} parameters.isFeatured - isFeatured
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.nextPageToken - nextPageToken
             * @param {string} parameters.previousPageToken - previousPageToken
             * @param {string} parameters.state - state
             * @param {string} parameters.tags - tags
             * @param {string} parameters.version - version
             */
            OtrService.prototype.listCustomerReviewsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['includeAnonymous'] !== undefined) {
                    queryParameters['includeAnonymous'] = parameters['includeAnonymous'];
                }

                if (parameters['includeDeleted'] !== undefined) {
                    queryParameters['includeDeleted'] = parameters['includeDeleted'];
                }

                if (parameters['includeRatings'] !== undefined) {
                    queryParameters['includeRatings'] = parameters['includeRatings'];
                }

                if (parameters['isFeatured'] !== undefined) {
                    queryParameters['isFeatured'] = parameters['isFeatured'];
                }

                if (parameters['lawfirmId'] !== undefined) {
                    queryParameters['lawfirmId'] = parameters['lawfirmId'];
                }

                /** set default value **/
                queryParameters['limit'] = 50;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['nextPageToken'] !== undefined) {
                    queryParameters['nextPageToken'] = parameters['nextPageToken'];
                }

                if (parameters['previousPageToken'] !== undefined) {
                    queryParameters['previousPageToken'] = parameters['previousPageToken'];
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['tags'] !== undefined) {
                    queryParameters['tags'] = parameters['tags'];
                }

                if (parameters['version'] !== undefined) {
                    queryParameters['version'] = parameters['version'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addCustomerReview
             * @method
             * @name OtrService#addCustomerReviewUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.addReviewRequest - addReviewRequest
             */
            OtrService.prototype.addCustomerReviewUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['addReviewRequest'] !== undefined) {
                    body = parameters['addReviewRequest'];
                }

                if (parameters['addReviewRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: addReviewRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * editCustomerReview
             * @method
             * @name OtrService#editCustomerReviewUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.editCustomerReviewRequest - editCustomerReviewRequest
             * @param {integer} parameters.reviewId - reviewId
             */
            OtrService.prototype.editCustomerReviewUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews/api/v1/reviews/{reviewId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['editCustomerReviewRequest'] !== undefined) {
                    body = parameters['editCustomerReviewRequest'];
                }

                if (parameters['editCustomerReviewRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: editCustomerReviewRequest'));
                    return deferred.promise;
                }

                path = path.replace('{reviewId}', parameters['reviewId']);

                if (parameters['reviewId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: reviewId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setCustomerReviewStatus
             * @method
             * @name OtrService#setCustomerReviewStatusUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.reviewId - reviewId
             * @param {} parameters.setCustomerReviewStatusRequest - setCustomerReviewStatusRequest
             */
            OtrService.prototype.setCustomerReviewStatusUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews/api/v1/reviews/{reviewId}/status';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{reviewId}', parameters['reviewId']);

                if (parameters['reviewId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: reviewId'));
                    return deferred.promise;
                }

                if (parameters['setCustomerReviewStatusRequest'] !== undefined) {
                    body = parameters['setCustomerReviewStatusRequest'];
                }

                if (parameters['setCustomerReviewStatusRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: setCustomerReviewStatusRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listEligibleStatusesForReview
             * @method
             * @name OtrService#listEligibleStatusesForReviewUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.listEligibleStatusesForReviewUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews/eligible-statuses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * replyToCustomerReview
             * @method
             * @name OtrService#replyToCustomerReviewUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.reviewId - reviewId
             */
            OtrService.prototype.replyToCustomerReviewUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews/{reviewId}/comments';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{reviewId}', parameters['reviewId']);

                if (parameters['reviewId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: reviewId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCommentForCustomerReview
             * @method
             * @name OtrService#updateCommentForCustomerReviewUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.commentId - commentId
             * @param {} parameters.request - request
             * @param {integer} parameters.reviewId - reviewId
             */
            OtrService.prototype.updateCommentForCustomerReviewUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews/{reviewId}/comments/{commentId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{commentId}', parameters['commentId']);

                if (parameters['commentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: commentId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{reviewId}', parameters['reviewId']);

                if (parameters['reviewId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: reviewId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markCommentWithVote
             * @method
             * @name OtrService#markCommentWithVoteUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.commentId - commentId
             * @param {boolean} parameters.like - like
             * @param {integer} parameters.reviewId - reviewId
             */
            OtrService.prototype.markCommentWithVoteUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews/{reviewId}/comments/{commentId}/vote';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{commentId}', parameters['commentId']);

                if (parameters['commentId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: commentId'));
                    return deferred.promise;
                }

                if (parameters['like'] !== undefined) {
                    queryParameters['like'] = parameters['like'];
                }

                path = path.replace('{reviewId}', parameters['reviewId']);

                if (parameters['reviewId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: reviewId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markReviewWithVote
             * @method
             * @name OtrService#markReviewWithVoteUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.helpful - helpful
             * @param {integer} parameters.reviewId - reviewId
             */
            OtrService.prototype.markReviewWithVoteUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/reviews/{reviewId}/vote';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['helpful'] !== undefined) {
                    queryParameters['helpful'] = parameters['helpful'];
                }

                path = path.replace('{reviewId}', parameters['reviewId']);

                if (parameters['reviewId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: reviewId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getScheduledTasks
             * @method
             * @name OtrService#getScheduledTasksUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.getScheduledTasksUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/scheduled-tasks/{caseId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteScheduledTask
             * @method
             * @name OtrService#deleteScheduledTaskUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.taskId - taskId
             */
            OtrService.prototype.deleteScheduledTaskUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/scheduled-tasks/{taskId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{taskId}', parameters['taskId']);

                if (parameters['taskId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: taskId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * rescheduleTask
             * @method
             * @name OtrService#rescheduleTaskUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.taskId - taskId
             */
            OtrService.prototype.rescheduleTaskUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/scheduled-tasks/{taskId}/reschedule';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{taskId}', parameters['taskId']);

                if (parameters['taskId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: taskId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleIncomingEmails
             * @method
             * @name OtrService#handleIncomingEmailsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleIncomingEmailsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/ses/inbound-emails';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json,text/plain'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleIncomingHelloEmails
             * @method
             * @name OtrService#handleIncomingHelloEmailsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleIncomingHelloEmailsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/ses/inbound-hello-emails';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json,text/plain'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * registerNewUser
             * @method
             * @name OtrService#registerNewUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.registerNewUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/signup';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createStripeConnectAccount
             * @method
             * @name OtrService#createStripeConnectAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.createStripeConnectAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/account';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createConnectAccountLink
             * @method
             * @name OtrService#createConnectAccountLinkUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.createConnectAccountLinkUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/account/link';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleStripeWebhookFromLawfirmAccount
             * @method
             * @name OtrService#handleStripeWebhookFromLawfirmAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleStripeWebhookFromLawfirmAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/acct_15jGPnDVzhogLb0T/webhook';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleStripeWebhookFromLawfirmConnectedAccounts
             * @method
             * @name OtrService#handleStripeWebhookFromLawfirmConnectedAccountsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleStripeWebhookFromLawfirmConnectedAccountsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/acct_15jGPnDVzhogLb0T/webhook/connected-account';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleStripeWebhookFromOTRAccount
             * @method
             * @name OtrService#handleStripeWebhookFromOTRAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleStripeWebhookFromOTRAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/acct_15jGdjA1uVHZiLuV/webhook';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleStripeWebhookFromOTRConnectedAccounts
             * @method
             * @name OtrService#handleStripeWebhookFromOTRConnectedAccountsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleStripeWebhookFromOTRConnectedAccountsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/acct_15jGdjA1uVHZiLuV/webhook/connected-account';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleStripeWebhookForSubscriptions
             * @method
             * @name OtrService#handleStripeWebhookForSubscriptionsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleStripeWebhookForSubscriptionsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/acct_15jGdjA1uVHZiLuV/webhook/subscriptions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * connectStripeAccount
             * @method
             * @name OtrService#connectStripeAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.code - code
             */
            OtrService.prototype.connectStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/connect';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['code'] !== undefined) {
                    queryParameters['code'] = parameters['code'];
                }

                if (parameters['code'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: code'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * syncAllDisputes
             * @method
             * @name OtrService#syncAllDisputesUsingPOST
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.syncAllDisputesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/disputes/sync-all';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateDispute
             * @method
             * @name OtrService#updateDisputeUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.disputeId - disputeId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateDisputeUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/disputes/{disputeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{disputeId}', parameters['disputeId']);

                if (parameters['disputeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: disputeId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * syncDispute
             * @method
             * @name OtrService#syncDisputeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.disputeId - disputeId
             */
            OtrService.prototype.syncDisputeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/disputes/{disputeId}/sync';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{disputeId}', parameters['disputeId']);

                if (parameters['disputeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: disputeId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleOrphanedStripeCharges
             * @method
             * @name OtrService#handleOrphanedStripeChargesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleOrphanedStripeChargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/handle-orphaned-stripe-charges';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * syncStripePayments
             * @method
             * @name OtrService#syncStripePaymentsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.syncStripePaymentsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/payments/sync';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * syncStripeCharges
             * @method
             * @name OtrService#syncStripeChargesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.syncStripeChargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/sync-stripe-charges';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * syncStripeRefunds
             * @method
             * @name OtrService#syncStripeRefundsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.syncStripeRefundsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/sync-stripe-refunds';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * syncStripeTransfers
             * @method
             * @name OtrService#syncStripeTransfersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.syncStripeTransfersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/transfers/sync';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * subscribe
             * @method
             * @name OtrService#subscribeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.subscribeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/subscribe';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * persistTicketEvaluation
             * @method
             * @name OtrService#persistTicketEvaluationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.persistTicketEvaluationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/ticket-evaluation';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateTicketEvaluationRequest
             * @method
             * @name OtrService#updateTicketEvaluationRequestUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.ticketEvaluationRequestId - ticketEvaluationRequestId
             */
            OtrService.prototype.updateTicketEvaluationRequestUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/ticket-evaluation/{ticketEvaluationRequestId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{ticketEvaluationRequestId}', parameters['ticketEvaluationRequestId']);

                if (parameters['ticketEvaluationRequestId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketEvaluationRequestId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCurrentUserInfo
             * @method
             * @name OtrService#getCurrentUserInfoUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.isAdmin - isAdmin
             * @param {string} parameters.serviceProviderId - serviceProviderId
             */
            OtrService.prototype.getCurrentUserInfoUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['isAdmin'] !== undefined) {
                    queryParameters['isAdmin'] = parameters['isAdmin'];
                }

                if (parameters['serviceProviderId'] !== undefined) {
                    queryParameters['serviceProviderId'] = parameters['serviceProviderId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserSetting
             * @method
             * @name OtrService#getUserSettingUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.name - name
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getUserSettingUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user-settings/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['name'] !== undefined) {
                    queryParameters['name'] = parameters['name'];
                }

                if (parameters['name'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: name'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserSettings
             * @method
             * @name OtrService#getUserSettingsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getUserSettingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user-settings/{userId}/get-settings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserSetting
             * @method
             * @name OtrService#updateUserSettingUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.updateUserSettingUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user-settings/{userId}/setting';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserSettings
             * @method
             * @name OtrService#updateUserSettingsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.updateUserSettingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user-settings/{userId}/update-settings';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * changeUserPassword
             * @method
             * @name OtrService#changeUserPasswordUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.changeUserPasswordUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user/p';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * resetUserPassword
             * @method
             * @name OtrService#resetUserPasswordUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.resetUserPasswordUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user/p/reset';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * verifyPwdResetToken
             * @method
             * @name OtrService#verifyPwdResetTokenUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.token - token
             */
            OtrService.prototype.verifyPwdResetTokenUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user/password/token';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['token'] !== undefined) {
                    queryParameters['token'] = parameters['token'];
                }

                if (parameters['token'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: token'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendResetPasswordToken
             * @method
             * @name OtrService#sendResetPasswordTokenUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
             * @param {boolean} parameters.enableCode - enableCode
             */
            OtrService.prototype.sendResetPasswordTokenUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/user/password/token';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                if (parameters['enableCode'] !== undefined) {
                    queryParameters['enableCode'] = parameters['enableCode'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * isUserLoggedIn
             * @method
             * @name OtrService#isUserLoggedInUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.isUserLoggedInUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/authentication/status';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserByEmail
             * @method
             * @name OtrService#getUserByEmailUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getUserByEmailUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/matches';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserRoles
             * @method
             * @name OtrService#updateUserRolesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateUserRolesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/roles';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findMatchingUsers
             * @method
             * @name OtrService#findMatchingUsersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.findMatchingUsersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/search';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendAccountVerificationCode
             * @method
             * @name OtrService#sendAccountVerificationCodeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
             * @param {string} parameters.userId - userId
             * @param {string} parameters.verificationMethod - verificationMethod
             */
            OtrService.prototype.sendAccountVerificationCodeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/send-verification-code';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['userId'] !== undefined) {
                    queryParameters['userId'] = parameters['userId'];
                }

                if (parameters['verificationMethod'] !== undefined) {
                    queryParameters['verificationMethod'] = parameters['verificationMethod'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addCardToStripeAccount
             * @method
             * @name OtrService#addCardToStripeAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.addCardToStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/stripe/account/cards';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCard
             * @method
             * @name OtrService#getCardUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.cardId - cardId
             */
            OtrService.prototype.getCardUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/stripe/account/cards/{cardId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{cardId}', parameters['cardId']);

                if (parameters['cardId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: cardId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCard
             * @method
             * @name OtrService#deleteCardUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.cardId - cardId
             */
            OtrService.prototype.deleteCardUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/stripe/account/cards/{cardId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{cardId}', parameters['cardId']);

                if (parameters['cardId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: cardId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * validateUserByEmail
             * @method
             * @name OtrService#validateUserByEmailUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
             */
            OtrService.prototype.validateUserByEmailUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/validate';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * validatePhoneNumber
             * @method
             * @name OtrService#validatePhoneNumberUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.validatePhoneNumberRequest - validatePhoneNumberRequest
             */
            OtrService.prototype.validatePhoneNumberUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/validate-phone-number';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['validatePhoneNumberRequest'] !== undefined) {
                    body = parameters['validatePhoneNumberRequest'];
                }

                if (parameters['validatePhoneNumberRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: validatePhoneNumberRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * verifyUserAccount
             * @method
             * @name OtrService#verifyUserAccountUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.code - code
             * @param {string} parameters.email - email
             * @param {string} parameters.fieldName - fieldName
             * @param {string} parameters.fieldValue - fieldValue
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.verifyUserAccountUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/verify-account';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['code'] !== undefined) {
                    queryParameters['code'] = parameters['code'];
                }

                if (parameters['code'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: code'));
                    return deferred.promise;
                }

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                /** set default value **/
                queryParameters['fieldName'] = email;

                if (parameters['fieldName'] !== undefined) {
                    queryParameters['fieldName'] = parameters['fieldName'];
                }

                if (parameters['fieldValue'] !== undefined) {
                    queryParameters['fieldValue'] = parameters['fieldValue'];
                }

                if (parameters['userId'] !== undefined) {
                    queryParameters['userId'] = parameters['userId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSupportTicketsForUser
             * @method
             * @name OtrService#getSupportTicketsForUserUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
             * @param {integer} parameters.limit - limit
             */
            OtrService.prototype.getSupportTicketsForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{email}/support-tickets';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{email}', parameters['email']);

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['limit'] = 100;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * mergeUser
             * @method
             * @name OtrService#mergeUserUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.primaryUserId - primaryUserId
             * @param {} parameters.request - request
             */
            OtrService.prototype.mergeUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{primaryUserId}/merge';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{primaryUserId}', parameters['primaryUserId']);

                if (parameters['primaryUserId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: primaryUserId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserDetails
             * @method
             * @name OtrService#getUserDetailsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userIdString - userIdString
             */
            OtrService.prototype.getUserDetailsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{userIdString}', parameters['userIdString']);

                if (parameters['userIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userIdString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Retrieves all the payment methods available on the user's Stripe account.
             * @method
             * @name OtrService#getPaymentMethodsForUserUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userIdString - userIdString
             */
            OtrService.prototype.getPaymentMethodsForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userIdString}/paymentmethods';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userIdString}', parameters['userIdString']);

                if (parameters['userIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userIdString'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserProfile
             * @method
             * @name OtrService#updateUserProfileUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.updateUserProfileUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeUser
             * @method
             * @name OtrService#removeUserUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.removeUserUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addExtraAccount
             * @method
             * @name OtrService#addExtraAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.addExtraAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/account';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setCardAsPrimary
             * @method
             * @name OtrService#setCardAsPrimaryUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.cardId - cardId
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.setCardAsPrimaryUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/account/cards/{cardId}/primary';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{cardId}', parameters['cardId']);

                if (parameters['cardId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: cardId'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeAdditionalUserHandle
             * @method
             * @name OtrService#removeAdditionalUserHandleUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userHandle - userHandle
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.removeAdditionalUserHandleUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/accounts/{userHandle}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userHandle}', parameters['userHandle']);

                if (parameters['userHandle'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userHandle'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setPrimaryUserHandle
             * @method
             * @name OtrService#setPrimaryUserHandleUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userHandle - userHandle
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.setPrimaryUserHandleUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/accounts/{userHandle}/set-primary-user-handle';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userHandle}', parameters['userHandle']);

                if (parameters['userHandle'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userHandle'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserAddresses
             * @method
             * @name OtrService#getUserAddressesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getUserAddressesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/addresses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addUserAddress
             * @method
             * @name OtrService#addUserAddressUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.addUserAddressUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/addresses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserAddress
             * @method
             * @name OtrService#updateUserAddressUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.addressId - addressId
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.updateUserAddressUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/addresses/{addressId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{addressId}', parameters['addressId']);

                if (parameters['addressId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: addressId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listUserAuditEventsByCursor
             * @method
             * @name OtrService#listUserAuditEventsByCursorUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.excludeTypes - excludeTypes
             * @param {string} parameters.includeTypes - includeTypes
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.nextPageToken - nextPageToken
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.listUserAuditEventsByCursorUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/audit-events';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['excludeTypes'] !== undefined) {
                    queryParameters['excludeTypes'] = parameters['excludeTypes'];
                }

                if (parameters['includeTypes'] !== undefined) {
                    queryParameters['includeTypes'] = parameters['includeTypes'];
                }

                /** set default value **/
                queryParameters['limit'] = 25;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['nextPageToken'] !== undefined) {
                    queryParameters['nextPageToken'] = parameters['nextPageToken'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesForUser
             * @method
             * @name OtrService#getCasesForUserUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.getCasesForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/cases';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listContactTimeline
             * @method
             * @name OtrService#listContactTimelineUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.listContactTimelineUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/contact-timeline';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findChargeDisputesByUserId
             * @method
             * @name OtrService#findChargeDisputesByUserIdUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.findChargeDisputesByUserIdUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/disputes';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getDriverLicenses
             * @method
             * @name OtrService#getDriverLicensesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeDeleted - includeDeleted
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.getDriverLicensesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/driver-license';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['includeDeleted'] !== undefined) {
                    queryParameters['includeDeleted'] = parameters['includeDeleted'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveDriverLicense
             * @method
             * @name OtrService#saveDriverLicenseUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.saveDriverLicenseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/driver-license';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveDriverLicensePicture
             * @method
             * @name OtrService#saveDriverLicensePictureUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.saveDriverLicensePictureUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/driver-license/picture';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * logoutUser
             * @method
             * @name OtrService#logoutUserUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.logoutUserUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/logout';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getOverduePayments
             * @method
             * @name OtrService#getOverduePaymentsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getOverduePaymentsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/overdue-payments';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * resetUserPasswordByAdmin
             * @method
             * @name OtrService#resetUserPasswordByAdminUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.resetUserPasswordByAdminUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/password';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addUserPhoneNumber
             * @method
             * @name OtrService#addUserPhoneNumberUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.addUserPhoneNumberUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/phone-numbers';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserPhoneNumber
             * @method
             * @name OtrService#updateUserPhoneNumberUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.phoneNumberId - phoneNumberId
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.updateUserPhoneNumberUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{phoneNumberId}', parameters['phoneNumberId']);

                if (parameters['phoneNumberId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: phoneNumberId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteUserPhoneNumber
             * @method
             * @name OtrService#deleteUserPhoneNumberUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.phoneNumberId - phoneNumberId
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.deleteUserPhoneNumberUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{phoneNumberId}', parameters['phoneNumberId']);

                if (parameters['phoneNumberId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: phoneNumberId'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateProfilePicture
             * @method
             * @name OtrService#updateProfilePictureUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.updateProfilePictureUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/profile-picture';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * reviveUser
             * @method
             * @name OtrService#reviveUserUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.reviveUserUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/revive';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setMarketingEmailOptIn
             * @method
             * @name OtrService#setMarketingEmailOptInUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.setMarketingEmailOptInUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/set-marketing-email-opt-in';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveUserSocialProfiles
             * @method
             * @name OtrService#saveUserSocialProfilesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.saveUserSocialProfilesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/social-profiles';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeUserSocialProfile
             * @method
             * @name OtrService#removeUserSocialProfileUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.platform - platform
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.removeUserSocialProfileUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/social-profiles';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['platform'] !== undefined) {
                    queryParameters['platform'] = parameters['platform'];
                }

                if (parameters['platform'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: platform'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserStripeAccount
             * @method
             * @name OtrService#getUserStripeAccountUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getUserStripeAccountUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/stripe/account';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCardForUser
             * @method
             * @name OtrService#deleteCardForUserUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.cardId - cardId
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.deleteCardForUserUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/stripe/account/cards/{cardId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{cardId}', parameters['cardId']);

                if (parameters['cardId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: cardId'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addACHToUserStripeAccount
             * @method
             * @name OtrService#addACHToUserStripeAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {string} parameters.userId - userId
             */
            OtrService.prototype.addACHToUserStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/stripe/ach';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * verifyUserPassword
             * @method
             * @name OtrService#verifyUserPasswordUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.verifyUserPasswordUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/users/{userId}/verify-password';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * backfillLawfirmTransactionRecords
             * @method
             * @name OtrService#backfillLawfirmTransactionRecordsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.backfillLawfirmTransactionRecordsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/utility/backfill-lawfirm-transaction-records';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getStatus
             * @method
             * @name OtrService#getStatusUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getStatusUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/utility/status';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setStatus
             * @method
             * @name OtrService#setStatusUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.lawfirmTransactionsStatus - lawfirmTransactionsStatus
             * @param {boolean} parameters.syncStatus - syncStatus
             */
            OtrService.prototype.setStatusUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/utility/status';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['lawfirmTransactionsStatus'] !== undefined) {
                    queryParameters['lawfirmTransactionsStatus'] = parameters['lawfirmTransactionsStatus'];
                }

                if (parameters['syncStatus'] !== undefined) {
                    queryParameters['syncStatus'] = parameters['syncStatus'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * validateEmailAddress
             * @method
             * @name OtrService#validateEmailAddressUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
             */
            OtrService.prototype.validateEmailAddressUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/validate/email';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getInviteByToken
             * @method
             * @name OtrService#getInviteByTokenUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.token - token
             */
            OtrService.prototype.getInviteByTokenUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/verification-tokens';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['token'] !== undefined) {
                    queryParameters['token'] = parameters['token'];
                }

                if (parameters['token'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: token'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTrafficViolationTypes
             * @method
             * @name OtrService#getTrafficViolationTypesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.audience - audience
             * @param {string} parameters.flavor - flavor
             * @param {boolean} parameters.includePenalties - includePenalties
             * @param {string} parameters.state - state
             */
            OtrService.prototype.getTrafficViolationTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['audience'] !== undefined) {
                    queryParameters['audience'] = parameters['audience'];
                }

                if (parameters['flavor'] !== undefined) {
                    queryParameters['flavor'] = parameters['flavor'];
                }

                if (parameters['includePenalties'] !== undefined) {
                    queryParameters['includePenalties'] = parameters['includePenalties'];
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addViolation
             * @method
             * @name OtrService#addViolationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.isLive - isLive
             * @param {} parameters.request - request
             */
            OtrService.prototype.addViolationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['isLive'] !== undefined) {
                    queryParameters['isLive'] = parameters['isLive'];
                }

                if (parameters['isLive'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isLive'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listViolationClassifications
             * @method
             * @name OtrService#listViolationClassificationsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.regionCode - regionCode
             */
            OtrService.prototype.listViolationClassificationsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/classifications';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPenaltyTypes
             * @method
             * @name OtrService#getPenaltyTypesUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getPenaltyTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/penalties';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getRegionsWithViolations
             * @method
             * @name OtrService#getRegionsWithViolationsUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getRegionsWithViolationsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/region-availability';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateViolation
             * @method
             * @name OtrService#updateViolationUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.violationId - violationId
             */
            OtrService.prototype.updateViolationUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/{violationId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteViolation
             * @method
             * @name OtrService#deleteViolationUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.violationId - violationId
             */
            OtrService.prototype.deleteViolationUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/{violationId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPenaltiesByViolation
             * @method
             * @name OtrService#getPenaltiesByViolationUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.flavor - flavor
             * @param {string} parameters.violationId - violationId
             */
            OtrService.prototype.getPenaltiesByViolationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/{violationId}/penalties';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['flavor'] !== undefined) {
                    queryParameters['flavor'] = parameters['flavor'];
                }

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * upsertPenalty
             * @method
             * @name OtrService#upsertPenaltyUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.penaltyToAdd - penaltyToAdd
             * @param {string} parameters.violationId - violationId
             */
            OtrService.prototype.upsertPenaltyUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/{violationId}/penalties';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['penaltyToAdd'] !== undefined) {
                    body = parameters['penaltyToAdd'];
                }

                if (parameters['penaltyToAdd'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: penaltyToAdd'));
                    return deferred.promise;
                }

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removePenalty
             * @method
             * @name OtrService#removePenaltyUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.penaltyTypeId - penaltyTypeId
             * @param {string} parameters.violationId - violationId
             */
            OtrService.prototype.removePenaltyUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{penaltyTypeId}', parameters['penaltyTypeId']);

                if (parameters['penaltyTypeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: penaltyTypeId'));
                    return deferred.promise;
                }

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listUserWatchlists
             * @method
             * @name OtrService#listUserWatchlistsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.includeArchived - includeArchived
             * @param {boolean} parameters.includeDeleted - includeDeleted
             * @param {integer} parameters.userId - userId
             * @param {integer} parameters.watchlistId - watchlistId
             */
            OtrService.prototype.listUserWatchlistsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/watchlists/{userId}/lists';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['includeArchived'] !== undefined) {
                    queryParameters['includeArchived'] = parameters['includeArchived'];
                }

                if (parameters['includeDeleted'] !== undefined) {
                    queryParameters['includeDeleted'] = parameters['includeDeleted'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                if (parameters['watchlistId'] !== undefined) {
                    queryParameters['watchlistId'] = parameters['watchlistId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveUserWatchlists
             * @method
             * @name OtrService#saveUserWatchlistsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.saveUserWatchlistsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/watchlists/{userId}/lists';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveItemToWatchlist
             * @method
             * @name OtrService#saveItemToWatchlistUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.watchlistId - watchlistId
             */
            OtrService.prototype.saveItemToWatchlistUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/watchlists/{watchlistId}/items';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{watchlistId}', parameters['watchlistId']);

                if (parameters['watchlistId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: watchlistId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeItemFromWatchlist
             * @method
             * @name OtrService#removeItemFromWatchlistUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.itemId - itemId
             * @param {integer} parameters.watchlistId - watchlistId
             */
            OtrService.prototype.removeItemFromWatchlistUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/watchlists/{watchlistId}/items/{itemId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{itemId}', parameters['itemId']);

                if (parameters['itemId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: itemId'));
                    return deferred.promise;
                }

                path = path.replace('{watchlistId}', parameters['watchlistId']);

                if (parameters['watchlistId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: watchlistId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleBounceOrComplaintEvent
             * @method
             * @name OtrService#handleBounceOrComplaintEventUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleBounceOrComplaintEventUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/webhooks/drip/bounce-or-complaint';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleEvent
             * @method
             * @name OtrService#handleEventUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.event - event
             */
            OtrService.prototype.handleEventUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/webhooks/prismic';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['event'] !== undefined) {
                    body = parameters['event'];
                }

                if (parameters['event'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: event'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getWorkflowState
             * @method
             * @name OtrService#getWorkflowStateUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {integer} parameters.citationId - citationId
             */
            OtrService.prototype.getWorkflowStateUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/workflow-state';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['caseId'] !== undefined) {
                    queryParameters['caseId'] = parameters['caseId'];
                }

                if (parameters['citationId'] !== undefined) {
                    queryParameters['citationId'] = parameters['citationId'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * cancelCase
             * @method
             * @name OtrService#cancelCaseUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.cancelCaseUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/cases';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addActionToCaseV2
             * @method
             * @name OtrService#addActionToCaseV2UsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.addActionToCaseV2UsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/cases/{caseId}/actions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * toggleDeleteCitation
             * @method
             * @name OtrService#toggleDeleteCitationUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {boolean} parameters.isDeleteRequest - isDeleteRequest
             */
            OtrService.prototype.toggleDeleteCitationUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/citations/{citationId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters['isDeleteRequest'] !== undefined) {
                    queryParameters['isDeleteRequest'] = parameters['isDeleteRequest'];
                }

                if (parameters['isDeleteRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isDeleteRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCitationsWithMissingFieldsV2
             * @method
             * @name OtrService#getCitationsWithMissingFieldsV2UsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getCitationsWithMissingFieldsV2UsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/console/citations-with-missing-fields';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findCourts
             * @method
             * @name OtrService#findCourtsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
             * @param {string} parameters.city - city
             * @param {string} parameters.countryCode - countryCode
             * @param {string} parameters.county - county
             * @param {integer} parameters.length - length
             * @param {integer} parameters.offset - offset
             * @param {string} parameters.q - q
             * @param {string} parameters.regionCode - regionCode
             * @param {string} parameters.state - state
             */
            OtrService.prototype.findCourtsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/courts/traffic';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['citationId'] !== undefined) {
                    queryParameters['citationId'] = parameters['citationId'];
                }

                if (parameters['city'] !== undefined) {
                    queryParameters['city'] = parameters['city'];
                }

                if (parameters['countryCode'] !== undefined) {
                    queryParameters['countryCode'] = parameters['countryCode'];
                }

                if (parameters['county'] !== undefined) {
                    queryParameters['county'] = parameters['county'];
                }

                /** set default value **/
                queryParameters['length'] = 9999;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['offset'] !== undefined) {
                    queryParameters['offset'] = parameters['offset'];
                }

                if (parameters['q'] !== undefined) {
                    queryParameters['q'] = parameters['q'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCasesByPage
             * @method
             * @name OtrService#getLawfirmCasesByPageUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.courtDateFilter - courtDateFilter
             * @param {string} parameters.end - end
             * @param {boolean} parameters.hasPaymentPlan - hasPaymentPlan
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             * @param {} parameters.request - request
             * @param {string} parameters.start - start
             */
            OtrService.prototype.getLawfirmCasesByPageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/lawfirm/{lawfirmIdString}/cases';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['courtDateFilter'] !== undefined) {
                    queryParameters['courtDateFilter'] = parameters['courtDateFilter'];
                }

                if (parameters['end'] !== undefined) {
                    queryParameters['end'] = parameters['end'];
                }

                if (parameters['hasPaymentPlan'] !== undefined) {
                    queryParameters['hasPaymentPlan'] = parameters['hasPaymentPlan'];
                }

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['length'] = 10;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters['start'] !== undefined) {
                    queryParameters['start'] = parameters['start'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeCoverage
             * @method
             * @name OtrService#removeCoverageUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {} parameters.courtsToRemove - courtsToRemove
             * @param {string} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.removeCoverageUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/lawfirms/{lawfirmId}/courts';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['courtsToRemove'] !== undefined) {
                    body = parameters['courtsToRemove'];
                }

                if (parameters['courtsToRemove'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtsToRemove'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmFeeCoverage
             * @method
             * @name OtrService#getLawfirmFeeCoverageUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.legalServiceType - legalServiceType
             */
            OtrService.prototype.getLawfirmFeeCoverageUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/lawfirms/{lawfirmId}/coverage';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['legalServiceType'] = FIGHT;

                if (parameters['legalServiceType'] !== undefined) {
                    queryParameters['legalServiceType'] = parameters['legalServiceType'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmFinancialTransactions
             * @method
             * @name OtrService#getLawfirmFinancialTransactionsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.length - length
             * @param {integer} parameters.page - page
             */
            OtrService.prototype.getLawfirmFinancialTransactionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/lawfirms/{lawfirmId}/transactions';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                /** set default value **/
                queryParameters['length'] = 100;

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                /** set default value **/
                queryParameters['page'] = 1;

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * searchNotes
             * @method
             * @name OtrService#searchNotesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.noteType - noteType
             * @param {string} parameters.query - query
             * @param {string} parameters.referenceId - referenceId
             */
            OtrService.prototype.searchNotesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/notes/search';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['noteType'] !== undefined) {
                    queryParameters['noteType'] = parameters['noteType'];
                }

                if (parameters['noteType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: noteType'));
                    return deferred.promise;
                }

                if (parameters['query'] !== undefined) {
                    queryParameters['query'] = parameters['query'];
                }

                if (parameters['query'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: query'));
                    return deferred.promise;
                }

                if (parameters['referenceId'] !== undefined) {
                    queryParameters['referenceId'] = parameters['referenceId'];
                }

                if (parameters['referenceId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: referenceId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listNotes
             * @method
             * @name OtrService#listNotesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.authorUserId - authorUserId
             * @param {boolean} parameters.includeDeleted - includeDeleted
             * @param {integer} parameters.initialNoteId - initialNoteId
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.nextPageToken - nextPageToken
             * @param {string} parameters.noteType - noteType
             * @param {string} parameters.previousPageToken - previousPageToken
             * @param {string} parameters.referenceId - referenceId
             */
            OtrService.prototype.listNotesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/notes/{noteType}/{referenceId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['authorUserId'] !== undefined) {
                    queryParameters['authorUserId'] = parameters['authorUserId'];
                }

                if (parameters['includeDeleted'] !== undefined) {
                    queryParameters['includeDeleted'] = parameters['includeDeleted'];
                }

                if (parameters['initialNoteId'] !== undefined) {
                    queryParameters['initialNoteId'] = parameters['initialNoteId'];
                }

                /** set default value **/
                queryParameters['limit'] = 20;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['nextPageToken'] !== undefined) {
                    queryParameters['nextPageToken'] = parameters['nextPageToken'];
                }

                path = path.replace('{noteType}', parameters['noteType']);

                if (parameters['noteType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: noteType'));
                    return deferred.promise;
                }

                if (parameters['previousPageToken'] !== undefined) {
                    queryParameters['previousPageToken'] = parameters['previousPageToken'];
                }

                path = path.replace('{referenceId}', parameters['referenceId']);

                if (parameters['referenceId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: referenceId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveNotes
             * @method
             * @name OtrService#saveNotesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.saveNotesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/notes/{userId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markPageTypesAsRead
             * @method
             * @name OtrService#markPageTypesAsReadUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.markPageTypesAsReadUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/notifications/unread/{caseId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listReferrals
             * @method
             * @name OtrService#listReferralsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.listReferralsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/referrals';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['application/json'];

                if (parameters['userId'] !== undefined) {
                    queryParameters['userId'] = parameters['userId'];
                }

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserCases
             * @method
             * @name OtrService#getUserCasesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.getUserCasesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v2/users/{userId}/cases';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listDashboardCases
             * @method
             * @name OtrService#listDashboardCasesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseStatuses - caseStatuses
             * @param {integer} parameters.limit - limit
             * @param {string} parameters.previousPageToken - previousPageToken
             * @param {string} parameters.sortBy - sortBy
             * @param {string} parameters.statusCategories - statusCategories
             * @param {integer} parameters.userId - userId
             */
            OtrService.prototype.listDashboardCasesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v3/users/{userId}/cases';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];

                if (parameters['caseStatuses'] !== undefined) {
                    queryParameters['caseStatuses'] = parameters['caseStatuses'];
                }

                /** set default value **/
                queryParameters['limit'] = 50;

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['previousPageToken'] !== undefined) {
                    queryParameters['previousPageToken'] = parameters['previousPageToken'];
                }

                if (parameters['sortBy'] !== undefined) {
                    queryParameters['sortBy'] = parameters['sortBy'];
                }

                if (parameters['statusCategories'] !== undefined) {
                    queryParameters['statusCategories'] = parameters['statusCategories'];
                }

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };

            return OtrService;
        })();

        return OtrService;
    }]);