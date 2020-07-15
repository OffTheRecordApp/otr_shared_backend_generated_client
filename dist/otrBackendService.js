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
             * markAlertAsRead
             * @method
             * @name OtrService#markAlertAsReadUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.alertId - userId
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

                if (parameters['stateCode'] !== undefined) {
                    queryParameters['stateCode'] = parameters['stateCode'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesForClient
             * @method
             * @name OtrService#getCasesForClientUsingGET
             * @param {object} parameters - method options and parameters
             */
            OtrService.prototype.getCasesForClientUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseStatuses
             * @method
             * @name OtrService#getCaseStatusesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {array} parameters.categories - categories
             */
            OtrService.prototype.getCaseStatusesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/statuses';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['categories'] !== undefined) {
                    queryParameters['categories'] = parameters['categories'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.caseFromRequest - caseFromRequest
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

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['caseFromRequest'] !== undefined) {
                    body = parameters['caseFromRequest'];
                }

                if (parameters['caseFromRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseFromRequest'));
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
                headers['Content-Type'] = ['application/json'];

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

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * refundCharge
             * @method
             * @name OtrService#refundChargeUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.refundChargeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/charges/refund';
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
             * getStripeCharge
             * @method
             * @name OtrService#getStripeChargeUsingGET
             * @param {object} parameters - method options and parameters
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
                headers['Content-Type'] = ['application/json'];

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
             * refundCharge2
             * @method
             * @name OtrService#refundCharge2UsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.stripeChargeId - stripeChargeId
             * @param {} parameters.request - request
             */
            OtrService.prototype.refundCharge2UsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/charges/{stripeChargeId}/refund';
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

                path = path.replace('{stripeChargeId}', parameters['stripeChargeId']);

                if (parameters['stripeChargeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: stripeChargeId'));
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
             * @param {array} parameters.violationTypes - violationTypes
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {integer} parameters.page - page
             * @param {integer} parameters.length - length
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
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
             * @param {string} parameters.messageId - messageId
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

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteMessage
             * @method
             * @name OtrService#deleteMessageUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.messageId - messageId
             */
            OtrService.prototype.deleteMessageUsingDELETE = function(parameters) {
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

                path = path.replace('{messageId}', parameters['messageId']);

                if (parameters['messageId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: messageId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * generateCasePaymentPlan
             * @method
             * @name OtrService#generateCasePaymentPlanUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.paymentPlanTypeId - paymentPlanTypeId
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * updatePaymentDueDate
             * @method
             * @name OtrService#updatePaymentDueDateUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {string} parameters.casePaymentId - casePaymentId
             * @param {} parameters.request - request
             */
            OtrService.prototype.updatePaymentDueDateUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/payments/{casePaymentId}/due-date';
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * reverseCaseTransfer
             * @method
             * @name OtrService#reverseCaseTransferUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {} parameters.request - request
             */
            OtrService.prototype.reverseCaseTransferUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/cases/{caseId}/transfer/reverse';
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
             * @param {string} parameters.encoding - certEncoding
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * assignCitationOwner
             * @method
             * @name OtrService#assignCitationOwnerUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.citationId - citationId
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * facebookConnect
             * @method
             * @name OtrService#facebookConnectUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.providerId - providerId
             * @param {} parameters.request - request
             */
            OtrService.prototype.facebookConnectUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/connect/{providerId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{providerId}', parameters['providerId']);

                if (parameters['providerId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: providerId'));
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
             * listCasesByStatus
             * @method
             * @name OtrService#listCasesByStatusUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listCasesByStatusUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases/status';
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
             * getPendingAndRefusedCases
             * @method
             * @name OtrService#getPendingAndRefusedCasesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getPendingAndRefusedCasesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/cases/unaccepted';
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
             * listCitationsAndCases
             * @method
             * @name OtrService#listCitationsAndCasesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listCitationsAndCasesUsingPOST = function(parameters) {
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
             * listRevenue
             * @method
             * @name OtrService#listRevenueUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listRevenueUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/revenue';
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
             * listSubscribers
             * @method
             * @name OtrService#listSubscribersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.listSubscribersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/subscribers';
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
             * getRegisteredUsers
             * @method
             * @name OtrService#getRegisteredUsersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.graphRequest - graphRequest
             */
            OtrService.prototype.getRegisteredUsersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/console/users';
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.countyId - countyId
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
                headers['Content-Type'] = ['application/json'];

                if (parameters['countryCode'] !== undefined) {
                    queryParameters['countryCode'] = parameters['countryCode'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['countyId'] !== undefined) {
                    queryParameters['countyId'] = parameters['countyId'];
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
             * @param {string} parameters.q - q
             * @param {string} parameters.state - state
             * @param {string} parameters.regionCode - regionCode
             * @param {string} parameters.countryCode - countryCode
             * @param {string} parameters.city - city
             * @param {string} parameters.county - county
             * @param {integer} parameters.offset - offset
             * @param {integer} parameters.length - length
             * @param {integer} parameters.citationId - citationId
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
                headers['Content-Type'] = ['application/json'];

                if (parameters['q'] !== undefined) {
                    queryParameters['q'] = parameters['q'];
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['countryCode'] !== undefined) {
                    queryParameters['countryCode'] = parameters['countryCode'];
                }

                if (parameters['city'] !== undefined) {
                    queryParameters['city'] = parameters['city'];
                }

                if (parameters['county'] !== undefined) {
                    queryParameters['county'] = parameters['county'];
                }

                if (parameters['offset'] !== undefined) {
                    queryParameters['offset'] = parameters['offset'];
                }

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['citationId'] !== undefined) {
                    queryParameters['citationId'] = parameters['citationId'];
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
             * @param {integer} parameters.courtId - courtId
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
                headers['Content-Type'] = ['application/json'];

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
             * @param {integer} parameters.courtId - courtId
             * @param {integer} parameters.addressId - addressId
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

                path = path.replace('{courtId}', parameters['courtId']);

                if (parameters['courtId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtId'));
                    return deferred.promise;
                }

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {array} parameters.category - category
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
                headers['Content-Type'] = ['application/json'];

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
             * @param {integer} parameters.ticketId - ticketId
             * @param {} parameters.request - request
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

                path = path.replace('{ticketId}', parameters['ticketId']);

                if (parameters['ticketId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketId'));
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
                headers['Content-Type'] = ['application/json'];

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
             * markDocumentWithDecision
             * @method
             * @name OtrService#markDocumentWithDecisionUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.docId - docId
             * @param {} parameters.decisionRequest - decisionRequest
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

                path = path.replace('{docId}', parameters['docId']);

                if (parameters['docId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docId'));
                    return deferred.promise;
                }

                if (parameters['decisionRequest'] !== undefined) {
                    body = parameters['decisionRequest'];
                }

                if (parameters['decisionRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: decisionRequest'));
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
                headers['Content-Type'] = ['application/json'];

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
             * postFeedback
             * @method
             * @name OtrService#postFeedbackUsingPOST
             * @param {object} parameters - method options and parameters
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
             * updateFreshdeskTicket
             * @method
             * @name OtrService#updateFreshdeskTicketUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.ticketId - ticketId
             * @param {} parameters.request - request
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

                path = path.replace('{ticketId}', parameters['ticketId']);

                if (parameters['ticketId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketId'));
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
             * ticketStatusChangeHook
             * @method
             * @name OtrService#ticketStatusChangeHookUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.ticketId - ticketId
             * @param {} parameters.request - request
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

                path = path.replace('{ticketId}', parameters['ticketId']);

                if (parameters['ticketId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketId'));
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
             * submitInternalNotification
             * @method
             * @name OtrService#submitInternalNotificationUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.submitInternalNotificationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/internal-notifications';
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
             * @param {string} parameters.q - q
             * @param {array} parameters.states - states
             * @param {array} parameters.statuses - statuses
             * @param {boolean} parameters.includeTestLawfirms - includeTestLawfirms
             * @param {boolean} parameters.includeVacationMode - includeVacationMode
             * @param {boolean} parameters.acceptsAccidentTickets - acceptsAccidentTickets
             * @param {boolean} parameters.acceptsPastDueTickets - acceptsPastDueTickets
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
                headers['Content-Type'] = ['application/json'];

                if (parameters['q'] !== undefined) {
                    queryParameters['q'] = parameters['q'];
                }

                if (parameters['states'] !== undefined) {
                    queryParameters['states'] = parameters['states'];
                }

                if (parameters['statuses'] !== undefined) {
                    queryParameters['statuses'] = parameters['statuses'];
                }

                if (parameters['includeTestLawfirms'] !== undefined) {
                    queryParameters['includeTestLawfirms'] = parameters['includeTestLawfirms'];
                }

                if (parameters['includeVacationMode'] !== undefined) {
                    queryParameters['includeVacationMode'] = parameters['includeVacationMode'];
                }

                if (parameters['acceptsAccidentTickets'] !== undefined) {
                    queryParameters['acceptsAccidentTickets'] = parameters['acceptsAccidentTickets'];
                }

                if (parameters['acceptsPastDueTickets'] !== undefined) {
                    queryParameters['acceptsPastDueTickets'] = parameters['acceptsPastDueTickets'];
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirm
             * @method
             * @name OtrService#getLawfirmUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             * @param {boolean} parameters.isDetailsRequired - isDetailsRequired
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters['isDetailsRequired'] !== undefined) {
                    queryParameters['isDetailsRequired'] = parameters['isDetailsRequired'];
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
                headers['Content-Type'] = ['application/json'];

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
             * getLawfirmLawyers
             * @method
             * @name OtrService#getLawfirmLawyersUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             */
            OtrService.prototype.getLawfirmLawyersUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmIdString}/lawyers';
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
             * getStripeConnectedAccount
             * @method
             * @name OtrService#getStripeConnectedAccountUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             */
            OtrService.prototype.getStripeConnectedAccountUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmIdString}/stripe';
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

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAccountFees
             * @method
             * @name OtrService#getAccountFeesUsingGET
             * @param {object} parameters - method options and parameters
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
                headers['Content-Type'] = ['application/json'];

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
             * @param {boolean} parameters.isSyncEnabled - isSyncEnabled
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

                if (parameters['isSyncEnabled'] !== undefined) {
                    queryParameters['isSyncEnabled'] = parameters['isSyncEnabled'];
                }

                if (parameters['isSyncEnabled'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: isSyncEnabled'));
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
                headers['Content-Type'] = ['application/json'];

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
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.addressId - addressId
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

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

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

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCases
             * @method
             * @name OtrService#getLawfirmCasesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getLawfirmCasesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/cases';
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
                headers['Content-Type'] = ['application/json'];

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
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {array} parameters.courtsToRemove - courtsToRemove
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['courtsToRemove'] !== undefined) {
                    queryParameters['courtsToRemove'] = parameters['courtsToRemove'];
                }

                if (parameters['courtsToRemove'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtsToRemove'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getDocument
             * @method
             * @name OtrService#getDocumentUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.docType - docType
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['docType'] !== undefined) {
                    queryParameters['doc_type'] = parameters['docType'];
                }

                if (parameters['docType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docType'));
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
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.docType - docType
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

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['docType'] !== undefined) {
                    queryParameters['doc_type'] = parameters['docType'];
                }

                if (parameters['docType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docType'));
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
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.docType - docType
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

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['docType'] !== undefined) {
                    queryParameters['doc_type'] = parameters['docType'];
                }

                if (parameters['docType'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: docType'));
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
             * getLawfirmInboxMessages
             * @method
             * @name OtrService#getLawfirmInboxMessagesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.page - page
             * @param {integer} parameters.length - length
             */
            OtrService.prototype.getLawfirmInboxMessagesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/messages';
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

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * updateLawfirmWithPicture
             * @method
             * @name OtrService#updateLawfirmWithPictureUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.lawfirmPictureRequest - lawfirmPictureRequest
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

                if (parameters['lawfirmPictureRequest'] !== undefined) {
                    body = parameters['lawfirmPictureRequest'];
                }

                if (parameters['lawfirmPictureRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmPictureRequest'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteLawfirmConnectedAccount
             * @method
             * @name OtrService#deleteLawfirmConnectedAccountUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.deleteLawfirmConnectedAccountUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/stripe/account';
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
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {string} parameters.bankAccountId - bankAccountId
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                path = path.replace('{bankAccountId}', parameters['bankAccountId']);

                if (parameters['bankAccountId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: bankAccountId'));
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
                headers['Content-Type'] = ['application/json'];

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
             * getLawfirmTransactions
             * @method
             * @name OtrService#getLawfirmTransactionsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             */
            OtrService.prototype.getLawfirmTransactionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/lawfirms/{lawfirmId}/transactions';
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

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {string} parameters.recipientId - recipientId
             * @param {} parameters.pushRequest - pushRequest
             */
            OtrService.prototype.pushNotificationToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/notifications/users/{recipientId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{recipientId}', parameters['recipientId']);

                if (parameters['recipientId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: recipientId'));
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.countyId - countyId
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
                headers['Content-Type'] = ['application/json'];

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['countyId'] !== undefined) {
                    queryParameters['countyId'] = parameters['countyId'];
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
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.countyId - countyId
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{regionCode}', parameters['regionCode']);

                if (parameters['regionCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: regionCode'));
                    return deferred.promise;
                }

                if (parameters['countyId'] !== undefined) {
                    queryParameters['countyId'] = parameters['countyId'];
                }

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
             * @param {string} parameters.regionCode - regionCode
             * @param {integer} parameters.countyId - countyId
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{regionCode}', parameters['regionCode']);

                if (parameters['regionCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: regionCode'));
                    return deferred.promise;
                }

                path = path.replace('{countyId}', parameters['countyId']);

                if (parameters['countyId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: countyId'));
                    return deferred.promise;
                }

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
             * @param {integer} parameters.page - page
             * @param {integer} parameters.size - size
             * @param {boolean} parameters.isFeatured - isFeatured
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
                headers['Content-Type'] = ['application/json'];

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['size'] !== undefined) {
                    queryParameters['size'] = parameters['size'];
                }

                if (parameters['isFeatured'] !== undefined) {
                    queryParameters['isFeatured'] = parameters['isFeatured'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
             * rescheduleTask
             * @method
             * @name OtrService#rescheduleTaskUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.taskId - taskId
             * @param {} parameters.request - request
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

                path = path.replace('{taskId}', parameters['taskId']);

                if (parameters['taskId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: taskId'));
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
             * connectStripeAccount
             * @method
             * @name OtrService#connectStripeAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.code - authorizationCode
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
             * findMissingCharges
             * @method
             * @name OtrService#findMissingChargesUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.limit - limit
             */
            OtrService.prototype.findMissingChargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/find-missing-charges';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['limit'] !== undefined) {
                    queryParameters['limit'] = parameters['limit'];
                }

                if (parameters['limit'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: limit'));
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
             * handleStripeWebhook
             * @method
             * @name OtrService#handleStripeWebhookUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleStripeWebhookUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/webhook';
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
             * handleStripeWebhookOnDemand
             * @method
             * @name OtrService#handleStripeWebhookOnDemandUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleStripeWebhookOnDemandUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/webhook/manual';
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
             * retrieveConnectedAccountDetails
             * @method
             * @name OtrService#retrieveConnectedAccountDetailsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.accountId - accountId
             */
            OtrService.prototype.retrieveConnectedAccountDetailsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/stripe/{accountId}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{accountId}', parameters['accountId']);

                if (parameters['accountId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: accountId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
             * @param {integer} parameters.ticketEvaluationRequestId - ticketEvaluationRequestId
             * @param {} parameters.request - request
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

                path = path.replace('{ticketEvaluationRequestId}', parameters['ticketEvaluationRequestId']);

                if (parameters['ticketEvaluationRequestId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: ticketEvaluationRequestId'));
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
             * reverseTransfer
             * @method
             * @name OtrService#reverseTransferUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.lawfirmPayoutId - lawfirmPayoutId
             * @param {} parameters.request - request
             */
            OtrService.prototype.reverseTransferUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/transfer/{lawfirmPayoutId}/reverse';
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
             * getCurrentUserInfo
             * @method
             * @name OtrService#getCurrentUserInfoUsingGET
             * @param {object} parameters - method options and parameters
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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserDetails
             * @method
             * @name OtrService#updateUserDetailsUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.updateUserDetailsUsingPUT = function(parameters) {
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
                headers['Content-Type'] = ['application/json'];

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
             * @param {string} parameters.email - userEmail
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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCountOfMatchingUsers
             * @method
             * @name OtrService#getCountOfMatchingUsersUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.getCountOfMatchingUsersUsingPOST = function(parameters) {
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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {string} parameters.email - emailAddress
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
                headers['Content-Type'] = ['application/json'];

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
             * getSupportTicketsForUser
             * @method
             * @name OtrService#getSupportTicketsForUserUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.email - email
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{email}', parameters['email']);

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {integer} parameters.userId - userId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
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
             * addExtraAccount
             * @method
             * @name OtrService#addExtraAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
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
             * setCardAsPrimary
             * @method
             * @name OtrService#setCardAsPrimaryUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             * @param {string} parameters.cardId - cardId
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                path = path.replace('{cardId}', parameters['cardId']);

                if (parameters['cardId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: cardId'));
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
                headers['Content-Type'] = ['application/json'];

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
             * @param {integer} parameters.userId - userId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
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
             * updateUserAddress
             * @method
             * @name OtrService#updateUserAddressUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             * @param {integer} parameters.addressId - addressId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

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

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

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
                headers['Content-Type'] = ['application/json'];

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
                headers['Content-Type'] = ['application/json'];

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
             * @param {integer} parameters.userId - userId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
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
             * addUserPhoneNumber
             * @method
             * @name OtrService#addUserPhoneNumberUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
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
             * updateUserPhoneNumber
             * @method
             * @name OtrService#updateUserPhoneNumberUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             * @param {integer} parameters.phoneNumberId - phoneNumberId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

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

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteUserPhoneNumber
             * @method
             * @name OtrService#deleteUserPhoneNumberUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.userId - userId
             * @param {integer} parameters.phoneNumberId - phoneNumberId
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                path = path.replace('{phoneNumberId}', parameters['phoneNumberId']);

                if (parameters['phoneNumberId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: phoneNumberId'));
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
             * @param {integer} parameters.userId - userId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
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
             * deleteCardForUser
             * @method
             * @name OtrService#deleteCardForUserUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             * @param {string} parameters.cardId - cardId
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

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
             * addACHToUserStripeAccount
             * @method
             * @name OtrService#addACHToUserStripeAccountUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.userId - userId
             * @param {} parameters.request - request
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

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
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
             * backfillLawfirmTransactionRecords
             * @method
             * @name OtrService#backfillLawfirmTransactionRecordsUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseId - caseId
             * @param {boolean} parameters.deleteExistingRecords - deleteExistingRecords
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

                if (parameters['caseId'] !== undefined) {
                    queryParameters['caseId'] = parameters['caseId'];
                }

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['deleteExistingRecords'] !== undefined) {
                    queryParameters['deleteExistingRecords'] = parameters['deleteExistingRecords'];
                }

                if (parameters['deleteExistingRecords'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: deleteExistingRecords'));
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
                    path = '/api/v1/utility/handle-orphaned-stripe-charges';
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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setStatus
             * @method
             * @name OtrService#setStatusUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {boolean} parameters.syncStatus - syncStatus
             * @param {boolean} parameters.missingChargesStatus - missingChargesStatus
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

                if (parameters['syncStatus'] !== undefined) {
                    queryParameters['syncStatus'] = parameters['syncStatus'];
                }

                if (parameters['syncStatus'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: syncStatus'));
                    return deferred.promise;
                }

                if (parameters['missingChargesStatus'] !== undefined) {
                    queryParameters['missingChargesStatus'] = parameters['missingChargesStatus'];
                }

                if (parameters['missingChargesStatus'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: missingChargesStatus'));
                    return deferred.promise;
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
                headers['Content-Type'] = ['application/json'];

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
             * getTrafficViolationTypes
             * @method
             * @name OtrService#getTrafficViolationTypesUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.state - stateAbbreviation
             * @param {string} parameters.audience - audience
             * @param {string} parameters.flavor - flavor
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
                headers['Content-Type'] = ['application/json'];

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['audience'] !== undefined) {
                    queryParameters['audience'] = parameters['audience'];
                }

                if (parameters['flavor'] !== undefined) {
                    queryParameters['flavor'] = parameters['flavor'];
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
                headers['Content-Type'] = ['application/json'];

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateViolation
             * @method
             * @name OtrService#updateViolationUsingPUT
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.violationId - violationId
             * @param {} parameters.request - request
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

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
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
             * getPenaltiesByViolation
             * @method
             * @name OtrService#getPenaltiesByViolationUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.violationId - violationId
             * @param {string} parameters.flavor - flavor
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                if (parameters['flavor'] !== undefined) {
                    queryParameters['flavor'] = parameters['flavor'];
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
             * @param {string} parameters.violationId - violationId
             * @param {} parameters.penaltyToAdd - penaltyToAdd
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

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                if (parameters['penaltyToAdd'] !== undefined) {
                    body = parameters['penaltyToAdd'];
                }

                if (parameters['penaltyToAdd'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: penaltyToAdd'));
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
             * @param {string} parameters.violationId - violationId
             * @param {string} parameters.penaltyTypeId - penaltyTypeId
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{violationId}', parameters['violationId']);

                if (parameters['violationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: violationId'));
                    return deferred.promise;
                }

                path = path.replace('{penaltyTypeId}', parameters['penaltyTypeId']);

                if (parameters['penaltyTypeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: penaltyTypeId'));
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
             * handleReceivedEmail
             * @method
             * @name OtrService#handleReceivedEmailUsingPOST
             * @param {object} parameters - method options and parameters
             * @param {} parameters.request - request
             */
            OtrService.prototype.handleReceivedEmailUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/v1/webhooks/drip/received-email';
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
                headers['Content-Type'] = ['application/json'];

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
             * findCourts
             * @method
             * @name OtrService#findCourtsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.q - q
             * @param {string} parameters.state - state
             * @param {string} parameters.regionCode - regionCode
             * @param {string} parameters.countryCode - countryCode
             * @param {string} parameters.city - city
             * @param {string} parameters.county - county
             * @param {integer} parameters.offset - offset
             * @param {integer} parameters.length - length
             * @param {integer} parameters.citationId - citationId
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
                headers['Content-Type'] = ['application/json'];

                if (parameters['q'] !== undefined) {
                    queryParameters['q'] = parameters['q'];
                }

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['regionCode'] !== undefined) {
                    queryParameters['regionCode'] = parameters['regionCode'];
                }

                if (parameters['countryCode'] !== undefined) {
                    queryParameters['countryCode'] = parameters['countryCode'];
                }

                if (parameters['city'] !== undefined) {
                    queryParameters['city'] = parameters['city'];
                }

                if (parameters['county'] !== undefined) {
                    queryParameters['county'] = parameters['county'];
                }

                if (parameters['offset'] !== undefined) {
                    queryParameters['offset'] = parameters['offset'];
                }

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                if (parameters['citationId'] !== undefined) {
                    queryParameters['citationId'] = parameters['citationId'];
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
             * @param {string} parameters.lawfirmIdString - lawfirmIdString
             * @param {} parameters.request - request
             * @param {integer} parameters.page - page
             * @param {integer} parameters.length - length
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

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
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
             * @param {string} parameters.lawfirmId - lawfirmId
             * @param {} parameters.courtsToRemove - courtsToRemove
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['courtsToRemove'] !== undefined) {
                    body = parameters['courtsToRemove'];
                }

                if (parameters['courtsToRemove'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtsToRemove'));
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
                headers['Content-Type'] = ['application/json'];

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
             * getLawfirmFinancialTransactions
             * @method
             * @name OtrService#getLawfirmFinancialTransactionsUsingGET
             * @param {object} parameters - method options and parameters
             * @param {integer} parameters.lawfirmId - lawfirmId
             * @param {integer} parameters.page - page
             * @param {integer} parameters.length - length
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
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters['page'] !== undefined) {
                    queryParameters['page'] = parameters['page'];
                }

                if (parameters['length'] !== undefined) {
                    queryParameters['length'] = parameters['length'];
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

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

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteActionFromCase
             * @method
             * @name OtrService#deleteActionFromCaseUsingDELETE
             * @param {object} parameters - method options and parameters
             * @param {string} parameters.caseActionIdString - caseActionIdString
             * @param {string} parameters.caseId - caseId
             */
            OtrService.prototype.deleteActionFromCaseUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();
                var domain = this.domain,
                    path = '/api/{caseId}/actions/{caseActionIdString}';
                var body = {},
                    queryParameters = {},
                    headers = {},
                    form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseActionIdString}', parameters['caseActionIdString']);

                if (parameters['caseActionIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseActionIdString'));
                    return deferred.promise;
                }

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                queryParameters = mergeQueryParams(parameters, queryParameters);

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };

            return OtrService;
        })();

        return OtrService;
    }]);