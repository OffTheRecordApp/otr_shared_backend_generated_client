/*jshint -W069 */
/*global angular:false */
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
             * @param {string} alertId - userId
             * 
             */
            OtrService.prototype.markAlertAsReadUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/alerts/{alertId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{alertId}', parameters['alertId']);

                if (parameters['alertId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: alertId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAlerts
             * @method
             * @name OtrService#getAlertsUsingGET
             * @param {string} userId - userId
             * 
             */
            OtrService.prototype.getAlertsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/alerts/{userId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserInfo
             * @method
             * @name OtrService#getUserInfoUsingGET
             * 
             */
            OtrService.prototype.getUserInfoUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/authentication/user';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleBounceComplaintEmails
             * @method
             * @name OtrService#handleBounceComplaintEmailsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.handleBounceComplaintEmailsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/blacklists/ses/emails/';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json,text/plain'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createBranchLink
             * @method
             * @name OtrService#createBranchLinkUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.createBranchLinkUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/branch/link';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseResolutionStatuses
             * @method
             * @name OtrService#getCaseResolutionStatusesUsingGET
             * @param {string} stateCode - stateCode
             * 
             */
            OtrService.prototype.getCaseResolutionStatusesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/case-statuses/resolution-statuses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['stateCode'] !== undefined) {
                    queryParameters['stateCode'] = parameters['stateCode'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesForClient
             * @method
             * @name OtrService#getCasesForClientUsingGET
             * 
             */
            OtrService.prototype.getCasesForClientUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAllActions
             * @method
             * @name OtrService#getAllActionsUsingGET
             * 
             */
            OtrService.prototype.getAllActionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/actions';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseStatuses
             * @method
             * @name OtrService#getCaseStatusesUsingGET
             * @param {array} categories - categories
             * 
             */
            OtrService.prototype.getCaseStatusesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/statuses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['categories'] !== undefined) {
                    queryParameters['categories'] = parameters['categories'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCase
             * @method
             * @name OtrService#getCaseUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * confirmBooking
             * @method
             * @name OtrService#confirmBookingUsingPOST
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.confirmBookingUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCase
             * @method
             * @name OtrService#updateCaseUsingPUT
             * @param {string} caseId - caseId
             * @param {} caseFromRequest - caseFromRequest
             * 
             */
            OtrService.prototype.updateCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * cancelCaseForClient
             * @method
             * @name OtrService#cancelCaseForClientUsingDELETE
             * @param {string} caseId - caseId
             * @param {string} cancellationStatus - cancellationStatus
             * 
             */
            OtrService.prototype.cancelCaseForClientUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters['cancellationStatus'] !== undefined) {
                    queryParameters['cancellationStatus'] = parameters['cancellationStatus'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addActionToCase
             * @method
             * @name OtrService#addActionToCaseUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addActionToCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/actions';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getActionTimeline
             * @method
             * @name OtrService#getActionTimelineUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getActionTimelineUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/actions/timeline';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAppearanceAttorneysForCase
             * @method
             * @name OtrService#getAppearanceAttorneysForCaseUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getAppearanceAttorneysForCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/appearance-attorneys';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCostItemsForAttorney
             * @method
             * @name OtrService#listCostItemsForAttorneyUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.listCostItemsForAttorneyUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/attorney/cost';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseCharges
             * @method
             * @name OtrService#getCaseChargesUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getCaseChargesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/charges';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * captureAllCaseCharges
             * @method
             * @name OtrService#captureAllCaseChargesUsingPOST
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.captureAllCaseChargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/charges/capture';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * refundCharges
             * @method
             * @name OtrService#refundChargesUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.refundChargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/charges/refund';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * captureCaseCharge
             * @method
             * @name OtrService#captureCaseChargeUsingPOST
             * @param {string} caseId - caseId
             * @param {string} stripeTransactionId - stripeTransactionId
             * 
             */
            OtrService.prototype.captureCaseChargeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/capture';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{stripeTransactionId}', parameters['stripeTransactionId']);

                if (parameters['stripeTransactionId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: stripeTransactionId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * refundCaseCharge
             * @method
             * @name OtrService#refundCaseChargeUsingPOST
             * @param {string} caseId - caseId
             * @param {string} stripeTransactionId - stripeTransactionId
             * 
             */
            OtrService.prototype.refundCaseChargeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/refund';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{stripeTransactionId}', parameters['stripeTransactionId']);

                if (parameters['stripeTransactionId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: stripeTransactionId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addViolationsToCitation
             * @method
             * @name OtrService#addViolationsToCitationUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addViolationsToCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/citation/violations';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeViolationsFromCitation
             * @method
             * @name OtrService#removeViolationsFromCitationUsingDELETE
             * @param {string} caseId - caseId
             * @param {array} violationTypes - violationTypes
             * 
             */
            OtrService.prototype.removeViolationsFromCitationUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/citation/violations/{violationTypes}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseClient
             * @method
             * @name OtrService#getCaseClientUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getCaseClientUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/client';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getConversation
             * @method
             * @name OtrService#getConversationUsingGET
             * @param {string} caseId - caseId
             * @param {integer} page - page
             * @param {integer} length - length
             * 
             */
            OtrService.prototype.getConversationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/conversation';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addMessageToConversation
             * @method
             * @name OtrService#addMessageToConversationUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addMessageToConversationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/conversation';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getMessage
             * @method
             * @name OtrService#getMessageUsingGET
             * @param {string} caseId - caseId
             * @param {string} messageId - messageId
             * 
             */
            OtrService.prototype.getMessageUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/conversation/{messageId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteMessage
             * @method
             * @name OtrService#deleteMessageUsingDELETE
             * @param {string} caseId - caseId
             * @param {string} messageId - messageId
             * 
             */
            OtrService.prototype.deleteMessageUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/conversation/{messageId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setCourtDateForCase
             * @method
             * @name OtrService#setCourtDateForCaseUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.setCourtDateForCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/courtdate';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCostItemsForCustomer
             * @method
             * @name OtrService#listCostItemsForCustomerUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.listCostItemsForCustomerUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/customer/cost';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateDeclineTickets
             * @method
             * @name OtrService#updateDeclineTicketsUsingPUT
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateDeclineTicketsUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/decline-tickets';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findChargeDisputesByCaseId
             * @method
             * @name OtrService#findChargeDisputesByCaseIdUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.findChargeDisputesByCaseIdUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/disputes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCaseDocuments
             * @method
             * @name OtrService#getLawfirmCaseDocumentsUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getLawfirmCaseDocumentsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/documents';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseFinancials
             * @method
             * @name OtrService#getCaseFinancialsUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getCaseFinancialsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/financials';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * authorizeChargeForInvoiceLineItem
             * @method
             * @name OtrService#authorizeChargeForInvoiceLineItemUsingPOST
             * @param {string} caseId - caseId
             * @param {string} invoiceLineItemId - invoiceLineItemId
             * @param {} request - request
             * 
             */
            OtrService.prototype.authorizeChargeForInvoiceLineItemUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/invoicelineitem/{invoiceLineItemId}/authorize';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{invoiceLineItemId}', parameters['invoiceLineItemId']);

                if (parameters['invoiceLineItemId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: invoiceLineItemId'));
                    return deferred.promise;
                }

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * insertCaseLineItem
             * @method
             * @name OtrService#insertCaseLineItemUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.insertCaseLineItemUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/lineitems';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCaseLineItem
             * @method
             * @name OtrService#updateCaseLineItemUsingPUT
             * @param {string} caseId - caseId
             * @param {string} lineItemId - lineItemId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateCaseLineItemUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCaseLineItem
             * @method
             * @name OtrService#deleteCaseLineItemUsingDELETE
             * @param {string} caseId - caseId
             * @param {string} lineItemId - lineItemId
             * 
             */
            OtrService.prototype.deleteCaseLineItemUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseNotes
             * @method
             * @name OtrService#getCaseNotesUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getCaseNotesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/notes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveCaseNotes
             * @method
             * @name OtrService#saveCaseNotesUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.saveCaseNotesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/notes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * assignOwner
             * @method
             * @name OtrService#assignOwnerUsingPOST
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.assignOwnerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/owner';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * assignCaseToUser
             * @method
             * @name OtrService#assignCaseToUserUsingPOST
             * @param {string} caseId - caseId
             * @param {string} userId - userId
             * 
             */
            OtrService.prototype.assignCaseToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/owner/{userId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * authorizeChargeForCase
             * @method
             * @name OtrService#authorizeChargeForCaseUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.authorizeChargeForCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/payment';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * generateCasePaymentPlan
             * @method
             * @name OtrService#generateCasePaymentPlanUsingGET
             * @param {string} caseId - caseId
             * @param {string} paymentPlanId - paymentPlanId
             * 
             */
            OtrService.prototype.generateCasePaymentPlanUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/payment-plans/{paymentPlanId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{paymentPlanId}', parameters['paymentPlanId']);

                if (parameters['paymentPlanId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: paymentPlanId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * captureChargeForCase
             * @method
             * @name OtrService#captureChargeForCaseUsingPOST
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.captureChargeForCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/payment/capture';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * submitRequestForPriceMatch
             * @method
             * @name OtrService#submitRequestForPriceMatchUsingPOST
             * @param {string} caseId - caseId
             * @param {} priceMatchRequest - priceMatchRequest
             * 
             */
            OtrService.prototype.submitRequestForPriceMatchUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/price-match';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Apply referral code to a case to adjust the estimated cost and/or to assign the rightful lawfirm. This operation is idempotent
             * @method
             * @name OtrService#applyReferralCodeUsingPOST
             * @param {string} caseId - caseId
             * @param {string} codeId - codeId
             * 
             */
            OtrService.prototype.applyReferralCodeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/referralcode/{codeId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * refundCaseCharges
             * @method
             * @name OtrService#refundCaseChargesUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.refundCaseChargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/refund';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateRefundEligibilityForCase
             * @method
             * @name OtrService#updateRefundEligibilityForCaseUsingPUT
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateRefundEligibilityForCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/refund-eligibility';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * isRefundEligible
             * @method
             * @name OtrService#isRefundEligibleUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.isRefundEligibleUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/refund/eligibility';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * reopenCase
             * @method
             * @name OtrService#reopenCaseUsingPUT
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.reopenCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/reopen';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * requestLawyer
             * @method
             * @name OtrService#requestLawyerUsingPOST
             * @param {string} caseId - caseId
             * @param {} lawyerRequest - lawyerRequest
             * 
             */
            OtrService.prototype.requestLawyerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/request';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markCaseAsResolved
             * @method
             * @name OtrService#markCaseAsResolvedUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.markCaseAsResolvedUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/resolution';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSupportTicketsForCase
             * @method
             * @name OtrService#getSupportTicketsForCaseUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getSupportTicketsForCaseUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/support-tickets';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTransferHistory
             * @method
             * @name OtrService#getTransferHistoryUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getTransferHistoryUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/transfer';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * reverseCaseTransfer
             * @method
             * @name OtrService#reverseCaseTransferUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.reverseCaseTransferUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/transfer/reverse';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * transferCase
             * @method
             * @name OtrService#transferCaseUsingPUT
             * @param {string} caseId - caseId
             * @param {string} lawfirmId - lawfirmId
             * 
             */
            OtrService.prototype.transferCaseUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/cases/{caseId}/transfer/{lawfirmId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSSLPublicCertFile
             * @method
             * @name OtrService#getSSLPublicCertFileUsingGET
             * @param {string} encoding - certEncoding
             * 
             */
            OtrService.prototype.getSSLPublicCertFileUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/certificates/ssl';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['encoding'] !== undefined) {
                    queryParameters['encoding'] = parameters['encoding'];
                }

                if (parameters['encoding'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: encoding'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createNewCitation
             * @method
             * @name OtrService#createNewCitationUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.createNewCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getListOfCitationsWithMissingCourt
             * @method
             * @name OtrService#getListOfCitationsWithMissingCourtUsingGET
             * 
             */
            OtrService.prototype.getListOfCitationsWithMissingCourtUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/courts/missing';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * dismissCitationsFromContactList
             * @method
             * @name OtrService#dismissCitationsFromContactListUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.dismissCitationsFromContactListUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/dismiss';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCitation
             * @method
             * @name OtrService#getCitationUsingGET
             * @param {string} citationIdString - citationIdString
             * 
             */
            OtrService.prototype.getCitationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationIdString}', parameters['citationIdString']);

                if (parameters['citationIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCitation
             * @method
             * @name OtrService#updateCitationUsingPUT
             * @param {string} citationIdString - citationIdString
             * @param {} updateCitationRequest - updateCitationRequest
             * 
             */
            OtrService.prototype.updateCitationUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCitation
             * @method
             * @name OtrService#deleteCitationUsingDELETE
             * @param {string} citationIdString - citationIdString
             * 
             */
            OtrService.prototype.deleteCitationUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationIdString}', parameters['citationIdString']);

                if (parameters['citationIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * matchCase
             * @method
             * @name OtrService#matchCaseUsingPOST
             * @param {string} citationIdString - citationIdString
             * @param {} request - request
             * 
             */
            OtrService.prototype.matchCaseUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationIdString}/case';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setCitationContactListFlag
             * @method
             * @name OtrService#setCitationContactListFlagUsingPOST
             * @param {string} citationIdString - citationIdString
             * @param {boolean} isDismissed - isDismissed
             * 
             */
            OtrService.prototype.setCitationContactListFlagUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationIdString}/dismiss';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCitationAddress
             * @method
             * @name OtrService#updateCitationAddressUsingPOST
             * @param {string} citationId - citationId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateCitationAddressUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/address';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCaseFromCitation
             * @method
             * @name OtrService#getCaseFromCitationUsingGET
             * @param {string} citationId - citationId
             * 
             */
            OtrService.prototype.getCaseFromCitationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/case';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * postMissingCourtForCitation
             * @method
             * @name OtrService#postMissingCourtForCitationUsingPOST
             * @param {string} citationId - citationId
             * @param {string} state - state
             * 
             */
            OtrService.prototype.postMissingCourtForCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/court/missing';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteMissingCourtRecord
             * @method
             * @name OtrService#deleteMissingCourtRecordUsingDELETE
             * @param {integer} citationId - citationId
             * 
             */
            OtrService.prototype.deleteMissingCourtRecordUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/courts/missing';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * assignCitationOwner
             * @method
             * @name OtrService#assignCitationOwnerUsingPOST
             * @param {integer} citationId - citationId
             * 
             */
            OtrService.prototype.assignCitationOwnerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/owner';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCitationPicture
             * @method
             * @name OtrService#updateCitationPictureUsingPUT
             * @param {string} citationId - citationId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateCitationPictureUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/picture';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createReferralSourceForCitation
             * @method
             * @name OtrService#createReferralSourceForCitationUsingPOST
             * @param {string} citationId - citationId
             * @param {} request - request
             * 
             */
            OtrService.prototype.createReferralSourceForCitationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/referral-source';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTicketReviewInfo
             * @method
             * @name OtrService#getTicketReviewInfoUsingGET
             * @param {string} citationId - citationId
             * 
             */
            OtrService.prototype.getTicketReviewInfoUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{citationId}/ticket-review';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{citationId}', parameters['citationId']);

                if (parameters['citationId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: citationId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAnonymousTicketUploads
             * @method
             * @name OtrService#getAnonymousTicketUploadsUsingGET
             * @param {string} emailAddress - emailAddress
             * 
             */
            OtrService.prototype.getAnonymousTicketUploadsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/citations/{emailAddress}/anonymous-tickets';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{emailAddress}', parameters['emailAddress']);

                if (parameters['emailAddress'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: emailAddress'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAppConfiguration
             * @method
             * @name OtrService#getAppConfigurationUsingGET
             * 
             */
            OtrService.prototype.getAppConfigurationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/config/app';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * facebookConnect
             * @method
             * @name OtrService#facebookConnectUsingPOST
             * @param {string} providerId - providerId
             * @param {} request - request
             * 
             */
            OtrService.prototype.facebookConnectUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/connect/{providerId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesWithCoverageObtained
             * @method
             * @name OtrService#getCasesWithCoverageObtainedUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getCasesWithCoverageObtainedUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/cases-with-coverage-obtained';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getInvalidCasesWithStripeCharge
             * @method
             * @name OtrService#getInvalidCasesWithStripeChargeUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getInvalidCasesWithStripeChargeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/cases/invalid-with-charge';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLostCasesWithTransferNotReversed
             * @method
             * @name OtrService#getLostCasesWithTransferNotReversedUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getLostCasesWithTransferNotReversedUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/cases/lost/not-reversed';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCasesByStatus
             * @method
             * @name OtrService#listCasesByStatusUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listCasesByStatusUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/cases/status';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPendingAndRefusedCases
             * @method
             * @name OtrService#getPendingAndRefusedCasesUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getPendingAndRefusedCasesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/cases/unaccepted';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesWithUncapturedCharges
             * @method
             * @name OtrService#getCasesWithUncapturedChargesUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getCasesWithUncapturedChargesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/cases/unpaid';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCitationsAndCases
             * @method
             * @name OtrService#listCitationsAndCasesUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listCitationsAndCasesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/citations';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCitationsWithMissingFields
             * @method
             * @name OtrService#getCitationsWithMissingFieldsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getCitationsWithMissingFieldsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/citations-with-missing-fields';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCustomers
             * @method
             * @name OtrService#listCustomersUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listCustomersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/customers';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findDisputes
             * @method
             * @name OtrService#findDisputesUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.findDisputesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/disputes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listDropoffs
             * @method
             * @name OtrService#listDropoffsUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listDropoffsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/dropoff';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listExpenses
             * @method
             * @name OtrService#listExpensesUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listExpensesUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/expenses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawfirmLeads
             * @method
             * @name OtrService#listLawfirmLeadsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.listLawfirmLeadsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/lawfirms/leads';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listLawyerLeads
             * @method
             * @name OtrService#listLawyerLeadsUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listLawyerLeadsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/lawyer-leads';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listPotentialCustomers
             * @method
             * @name OtrService#listPotentialCustomersUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.listPotentialCustomersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/potential-customers';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listRevenue
             * @method
             * @name OtrService#listRevenueUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listRevenueUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/revenue';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listSubscribers
             * @method
             * @name OtrService#listSubscribersUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.listSubscribersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/subscribers';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * uploadedTicketsCallList
             * @method
             * @name OtrService#uploadedTicketsCallListUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.uploadedTicketsCallListUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/ticket-leads-call-list';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPendingTicketReviews
             * @method
             * @name OtrService#getPendingTicketReviewsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getPendingTicketReviewsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/ticket-review-requests/pending';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getRegisteredUsers
             * @method
             * @name OtrService#getRegisteredUsersUsingPOST
             * @param {} graphRequest - graphRequest
             * 
             */
            OtrService.prototype.getRegisteredUsersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/console/users';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['graphRequest'] !== undefined) {
                    body = parameters['graphRequest'];
                }

                if (parameters['graphRequest'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: graphRequest'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCounties
             * @method
             * @name OtrService#getCountiesUsingGET
             * @param {string} state - state
             * 
             */
            OtrService.prototype.getCountiesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/counties';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['state'] !== undefined) {
                    queryParameters['state'] = parameters['state'];
                }

                if (parameters['state'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: state'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCountryList
             * @method
             * @name OtrService#getCountryListUsingGET
             * 
             */
            OtrService.prototype.getCountryListUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/countries';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCountryRegions
             * @method
             * @name OtrService#getCountryRegionsUsingGET
             * @param {string} countryCode - countryCode
             * 
             */
            OtrService.prototype.getCountryRegionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/countries/{countryCode}/regions';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{countryCode}', parameters['countryCode']);

                if (parameters['countryCode'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: countryCode'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addCourt
             * @method
             * @name OtrService#addCourtUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.addCourtUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/courts';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * searchCourts
             * @method
             * @name OtrService#searchCourtsUsingGET
             * @param {string} q - q
             * @param {string} state - state
             * @param {string} regionCode - regionCode
             * @param {string} countryCode - countryCode
             * @param {string} city - city
             * @param {string} county - county
             * @param {integer} offset - offset
             * @param {integer} length - length
             * 
             */
            OtrService.prototype.searchCourtsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/courts/traffic';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCourt
             * @method
             * @name OtrService#getCourtUsingGET
             * @param {integer} courtId - courtId
             * 
             */
            OtrService.prototype.getCourtUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/courts/{courtId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{courtId}', parameters['courtId']);

                if (parameters['courtId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: courtId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCourt
             * @method
             * @name OtrService#updateCourtUsingPUT
             * @param {integer} courtId - courtId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateCourtUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/courts/{courtId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateCourtAddress
             * @method
             * @name OtrService#updateCourtAddressUsingPUT
             * @param {integer} courtId - courtId
             * @param {integer} addressId - addressId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateCourtAddressUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/courts/{courtId}/addresses/{addressId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAwsCredentials
             * @method
             * @name OtrService#getAwsCredentialsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getAwsCredentialsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/credentials/aws';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getOutgoingContacts
             * @method
             * @name OtrService#getOutgoingContactsUsingGET
             * @param {string} recipientEmailAddress - recipientEmailAddress
             * 
             */
            OtrService.prototype.getOutgoingContactsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/crm/contacts';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['recipientEmailAddress'] !== undefined) {
                    queryParameters['recipientEmailAddress'] = parameters['recipientEmailAddress'];
                }

                if (parameters['recipientEmailAddress'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: recipientEmailAddress'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * generateTemplate
             * @method
             * @name OtrService#generateTemplateUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.generateTemplateUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/crm/generate-template';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTemplates
             * @method
             * @name OtrService#getTemplatesUsingGET
             * @param {array} category - category
             * 
             */
            OtrService.prototype.getTemplatesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/crm/templates';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['category'] !== undefined) {
                    queryParameters['category'] = parameters['category'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * replyToTicket
             * @method
             * @name OtrService#replyToTicketUsingPOST
             * @param {string} ticketId - ticketId
             * @param {} request - request
             * 
             */
            OtrService.prototype.replyToTicketUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/crm/ticket/{ticketId}/reply';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendConsolidatedEmailToUser
             * @method
             * @name OtrService#sendConsolidatedEmailToUserUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.sendConsolidatedEmailToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/crm/user/consolidate-email';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendEmailToUser
             * @method
             * @name OtrService#sendEmailToUserUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.sendEmailToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/crm/user/email';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendEmailToUsers
             * @method
             * @name OtrService#sendEmailToUsersUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.sendEmailToUsersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/crm/users/email';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * postCustomerLead
             * @method
             * @name OtrService#postCustomerLeadUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.postCustomerLeadUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/customer-leads';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendDirectMail
             * @method
             * @name OtrService#sendDirectMailUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.sendDirectMailUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/direct-mail';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSentMail
             * @method
             * @name OtrService#getSentMailUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getSentMailUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/direct-mail/fetch-sent-mail';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleLobEvent
             * @method
             * @name OtrService#handleLobEventUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.handleLobEventUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/direct-mail/lob-events';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getDirectMailTemplates
             * @method
             * @name OtrService#getDirectMailTemplatesUsingGET
             * 
             */
            OtrService.prototype.getDirectMailTemplatesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/direct-mail/templates';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addDirectMailTemplate
             * @method
             * @name OtrService#addDirectMailTemplateUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.addDirectMailTemplateUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/direct-mail/templates';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * validateDirectMailRequestForSend
             * @method
             * @name OtrService#validateDirectMailRequestForSendUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.validateDirectMailRequestForSendUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/direct-mail/validate';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateDispute
             * @method
             * @name OtrService#updateDisputeUsingPUT
             * @param {string} disputeId - disputeId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateDisputeUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/disputes/{disputeId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markDocumentWithDecision
             * @method
             * @name OtrService#markDocumentWithDecisionUsingPOST
             * @param {string} docId - docId
             * @param {} decisionRequest - decisionRequest
             * 
             */
            OtrService.prototype.markDocumentWithDecisionUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/documents/{docId}/decision';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeFromDrip
             * @method
             * @name OtrService#removeFromDripUsingDELETE
             * @param {} request - request
             * 
             */
            OtrService.prototype.removeFromDripUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/drip';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * postFeedback
             * @method
             * @name OtrService#postFeedbackUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.postFeedbackUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/feedback';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateFreshdeskTicket
             * @method
             * @name OtrService#updateFreshdeskTicketUsingPUT
             * @param {integer} ticketId - ticketId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateFreshdeskTicketUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/freshdesk/ticket/{ticketId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * ticketStatusChangeHook
             * @method
             * @name OtrService#ticketStatusChangeHookUsingPUT
             * @param {string} ticketId - ticketId
             * @param {} request - request
             * 
             */
            OtrService.prototype.ticketStatusChangeHookUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/freshdesk/ticket/{ticketId}/webhook/status-change';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * calculateTicketSavings
             * @method
             * @name OtrService#calculateTicketSavingsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.calculateTicketSavingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/insurance/ticket/savings';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * submitInternalNotification
             * @method
             * @name OtrService#submitInternalNotificationUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.submitInternalNotificationUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/internal-notifications';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setLawfirmCaseDecision
             * @method
             * @name OtrService#setLawfirmCaseDecisionUsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.setLawfirmCaseDecisionUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirm/cases/{caseId}/decision';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCases
             * @method
             * @name OtrService#getLawfirmCasesUsingGET
             * @param {string} lawfirmIdString - lawfirmIdString
             * 
             */
            OtrService.prototype.getLawfirmCasesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirm/{lawfirmIdString}/cases';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirms
             * @method
             * @name OtrService#getLawfirmsUsingGET
             * @param {string} q - q
             * @param {array} states - states
             * @param {array} statuses - statuses
             * @param {boolean} includeTestLawfirms - includeTestLawfirms
             * @param {boolean} includeVacationMode - includeVacationMode
             * @param {boolean} acceptsAccidentTickets - acceptsAccidentTickets
             * @param {boolean} acceptsPastDueTickets - acceptsPastDueTickets
             * 
             */
            OtrService.prototype.getLawfirmsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * createLawfirm
             * @method
             * @name OtrService#createLawfirmUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.createLawfirmUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmStatuses
             * @method
             * @name OtrService#getLawfirmStatusesUsingGET
             * 
             */
            OtrService.prototype.getLawfirmStatusesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/statuses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirm
             * @method
             * @name OtrService#getLawfirmUsingGET
             * @param {string} lawfirmIdString - lawfirmIdString
             * @param {boolean} isDetailsRequired - isDetailsRequired
             * 
             */
            OtrService.prototype.getLawfirmUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirm
             * @method
             * @name OtrService#updateLawfirmUsingPUT
             * @param {string} lawfirmIdString - lawfirmIdString
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateLawfirmUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addCourtToCoverage
             * @method
             * @name OtrService#addCourtToCoverageUsingPOST
             * @param {string} lawfirmIdString - lawfirmIdString
             * @param {} request - request
             * 
             */
            OtrService.prototype.addCourtToCoverageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmIdString}/courts';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCoverage
             * @method
             * @name OtrService#getLawfirmCoverageUsingGET
             * @param {integer} lawfirmIdString - lawfirmIdString
             * 
             */
            OtrService.prototype.getLawfirmCoverageUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmIdString}/coverage';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmLawyers
             * @method
             * @name OtrService#getLawfirmLawyersUsingGET
             * @param {string} lawfirmIdString - lawfirmIdString
             * 
             */
            OtrService.prototype.getLawfirmLawyersUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmIdString}/lawyers';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmSettings
             * @method
             * @name OtrService#updateLawfirmSettingsUsingPOST
             * @param {string} lawfirmIdString - lawfirmIdString
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateLawfirmSettingsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmIdString}/settings';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getStripeConnectedAccount
             * @method
             * @name OtrService#getStripeConnectedAccountUsingGET
             * @param {string} lawfirmIdString - lawfirmIdString
             * 
             */
            OtrService.prototype.getStripeConnectedAccountUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmIdString}/stripe';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmIdString}', parameters['lawfirmIdString']);

                if (parameters['lawfirmIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmAddresses
             * @method
             * @name OtrService#getLawfirmAddressesUsingGET
             * @param {integer} lawfirmId - lawfirmId
             * 
             */
            OtrService.prototype.getLawfirmAddressesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/addresses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addLawfirmAddress
             * @method
             * @name OtrService#addLawfirmAddressUsingPOST
             * @param {integer} lawfirmId - lawfirmId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addLawfirmAddressUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/addresses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmAddress
             * @method
             * @name OtrService#updateLawfirmAddressUsingPUT
             * @param {integer} lawfirmId - lawfirmId
             * @param {integer} addressId - addressId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateLawfirmAddressUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/addresses/{addressId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCaseStats
             * @method
             * @name OtrService#getLawfirmCaseStatsUsingGET
             * @param {integer} lawfirmId - lawfirmId
             * 
             */
            OtrService.prototype.getLawfirmCaseStatsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/cases/stats';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removeCourts
             * @method
             * @name OtrService#removeCourtsUsingDELETE
             * @param {integer} lawfirmId - lawfirmId
             * @param {array} courtsToRemove - courtsToRemove
             * 
             */
            OtrService.prototype.removeCourtsUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/courts';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getDocument
             * @method
             * @name OtrService#getDocumentUsingGET
             * @param {string} lawfirmId - lawfirmId
             * @param {string} docType - docType
             * 
             */
            OtrService.prototype.getDocumentUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/documents';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * generateDoc
             * @method
             * @name OtrService#generateDocUsingPOST
             * @param {string} lawfirmId - lawfirmId
             * @param {string} docType - docType
             * @param {} request - request
             * 
             */
            OtrService.prototype.generateDocUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/documents';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * uploadCopy
             * @method
             * @name OtrService#uploadCopyUsingPUT
             * @param {string} lawfirmId - lawfirmId
             * @param {} request - request
             * 
             */
            OtrService.prototype.uploadCopyUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/documents';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * previewDoc
             * @method
             * @name OtrService#previewDocUsingPOST
             * @param {string} lawfirmId - lawfirmId
             * @param {string} docType - docType
             * @param {} request - request
             * 
             */
            OtrService.prototype.previewDocUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/documents/preview';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmInboxMessages
             * @method
             * @name OtrService#getLawfirmInboxMessagesUsingGET
             * @param {integer} lawfirmId - lawfirmId
             * @param {integer} page - page
             * @param {integer} length - length
             * 
             */
            OtrService.prototype.getLawfirmInboxMessagesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/messages';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getOtrLawfirmNotes
             * @method
             * @name OtrService#getOtrLawfirmNotesUsingGET
             * @param {string} lawfirmId - lawfirmId
             * 
             */
            OtrService.prototype.getOtrLawfirmNotesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/otr-notes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Retrieves all the payment methods available on the lawfirm's Stripe account.
             * @method
             * @name OtrService#getLawfirmPaymentMethodsUsingGET
             * @param {integer} lawfirmId - lawfirmId
             * 
             */
            OtrService.prototype.getLawfirmPaymentMethodsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/paymentmethods';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateLawfirmWithPicture
             * @method
             * @name OtrService#updateLawfirmWithPictureUsingPUT
             * @param {string} lawfirmId - lawfirmId
             * @param {} lawfirmPictureRequest - lawfirmPictureRequest
             * 
             */
            OtrService.prototype.updateLawfirmWithPictureUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/picture';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addACHToLawfirmStripeAccount
             * @method
             * @name OtrService#addACHToLawfirmStripeAccountUsingPOST
             * @param {string} lawfirmId - lawfirmId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addACHToLawfirmStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/stripe/ach';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteBankAccountFromLawfirmStripeAccount
             * @method
             * @name OtrService#deleteBankAccountFromLawfirmStripeAccountUsingDELETE
             * @param {integer} lawfirmId - lawfirmId
             * @param {string} bankAccountId - bankAccountId
             * 
             */
            OtrService.prototype.deleteBankAccountFromLawfirmStripeAccountUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setDefaultPaymentMethodForLawfirm
             * @method
             * @name OtrService#setDefaultPaymentMethodForLawfirmUsingPUT
             * @param {integer} lawfirmId - lawfirmId
             * @param {string} stripePaymentSourceId - stripePaymentSourceId
             * 
             */
            OtrService.prototype.setDefaultPaymentMethodForLawfirmUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSupportedStatesForLawfirm
             * @method
             * @name OtrService#getSupportedStatesForLawfirmUsingGET
             * @param {integer} lawfirmId - lawfirmId
             * 
             */
            OtrService.prototype.getSupportedStatesForLawfirmUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/supported-states';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmTransactions
             * @method
             * @name OtrService#getLawfirmTransactionsUsingGET
             * @param {string} lawfirmId - lawfirmId
             * 
             */
            OtrService.prototype.getLawfirmTransactionsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawfirms/{lawfirmId}/transactions';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawfirmId}', parameters['lawfirmId']);

                if (parameters['lawfirmId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawfirmId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * upsertLawyer
             * @method
             * @name OtrService#upsertLawyerUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.upsertLawyerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawyers';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * saveLawyerLead
             * @method
             * @name OtrService#saveLawyerLeadUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.saveLawyerLeadUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawyers/lead';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawyerEmailGuesses
             * @method
             * @name OtrService#getLawyerEmailGuessesUsingGET
             * @param {integer} lawyerId - lawyerId
             * 
             */
            OtrService.prototype.getLawyerEmailGuessesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/lawyers/{lawyerId}/email-guesses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{lawyerId}', parameters['lawyerId']);

                if (parameters['lawyerId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: lawyerId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * notifyClientActionRequirement
             * @method
             * @name OtrService#notifyClientActionRequirementUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.notifyClientActionRequirementUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/notifications/action-required';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * pushCaseMessage
             * @method
             * @name OtrService#pushCaseMessageUsingPOST
             * @param {string} caseId - caseId
             * @param {} pushRequest - pushRequest
             * 
             */
            OtrService.prototype.pushCaseMessageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/notifications/cases/{caseId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * register
             * @method
             * @name OtrService#registerUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.registerUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/notifications/register';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUnreadCounts
             * @method
             * @name OtrService#getUnreadCountsUsingGET
             * @param {boolean} includeMessage - includeMessage
             * 
             */
            OtrService.prototype.getUnreadCountsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/notifications/unread';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['includeMessage'] !== undefined) {
                    queryParameters['includeMessage'] = parameters['includeMessage'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markRead
             * @method
             * @name OtrService#markReadUsingDELETE
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.markReadUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/notifications/unread/{caseId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markAllReadForUser
             * @method
             * @name OtrService#markAllReadForUserUsingDELETE
             * @param {string} userId - userId
             * 
             */
            OtrService.prototype.markAllReadForUserUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/notifications/unread/{userId}/user';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * pushNotificationToUser
             * @method
             * @name OtrService#pushNotificationToUserUsingPOST
             * @param {string} recipientId - recipientId
             * @param {} pushRequest - pushRequest
             * 
             */
            OtrService.prototype.pushNotificationToUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/notifications/users/{recipientId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getAvailablePaymentPlans
             * @method
             * @name OtrService#getAvailablePaymentPlansUsingPOST
             * @param {string} lawfirmId - lawfirmId
             * @param {string} legalFeeInCents - legalFeeInCents
             * @param {string} state - state
             * 
             */
            OtrService.prototype.getAvailablePaymentPlansUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/payment-plans/{lawfirmId}/case-payment';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getActiveRatesByArea
             * @method
             * @name OtrService#getActiveRatesByAreaUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getActiveRatesByAreaUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/rates';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getReferralHistory
             * @method
             * @name OtrService#getReferralHistoryUsingGET
             * 
             */
            OtrService.prototype.getReferralHistoryUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getReferralCodes
             * @method
             * @name OtrService#getReferralCodesUsingGET
             * @param {boolean} isActive - isActive
             * 
             */
            OtrService.prototype.getReferralCodesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/codes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['isActive'] !== undefined) {
                    queryParameters['isActive'] = parameters['isActive'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
             * @method
             * @name OtrService#generateReferralCodeUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.generateReferralCodeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/codes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getReferralCode
             * @method
             * @name OtrService#getReferralCodeUsingGET
             * @param {string} codeId - codeId
             * 
             */
            OtrService.prototype.getReferralCodeUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/codes/{codeId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * markCodeAsInactive
             * @method
             * @name OtrService#markCodeAsInactiveUsingDELETE
             * @param {string} codeId - codeId
             * 
             */
            OtrService.prototype.markCodeAsInactiveUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/codes/{codeId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Only for admins. This will approve and activate a given referral code
             * @method
             * @name OtrService#approveReferralCodeUsingPUT
             * @param {string} codeId - codeId
             * 
             */
            OtrService.prototype.approveReferralCodeUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/codes/{codeId}/approve';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it's max use count?
             * @method
             * @name OtrService#validateReferralCodeUsingGET
             * @param {string} codeId - codeId
             * 
             */
            OtrService.prototype.validateReferralCodeUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/codes/{codeId}/validate';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{codeId}', parameters['codeId']);

                if (parameters['codeId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: codeId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * publishReferralContacts
             * @method
             * @name OtrService#publishReferralContactsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.publishReferralContactsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/contacts';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserReferralSourceTypes
             * @method
             * @name OtrService#getUserReferralSourceTypesUsingGET
             * 
             */
            OtrService.prototype.getUserReferralSourceTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/sources';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setReferralSource
             * @method
             * @name OtrService#setReferralSourceUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.setReferralSourceUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/referrals/sources';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getRefLinksForUser
             * @method
             * @name OtrService#getRefLinksForUserUsingGET
             * @param {string} userIdString - userIdString
             * 
             */
            OtrService.prototype.getRefLinksForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/reflinks/{userIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userIdString}', parameters['userIdString']);

                if (parameters['userIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * listCustomerReviews
             * @method
             * @name OtrService#listCustomerReviewsUsingGET
             * @param {integer} page - page
             * @param {integer} size - size
             * @param {boolean} isFeatured - isFeatured
             * 
             */
            OtrService.prototype.listCustomerReviewsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/reviews';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getScheduledTasks
             * @method
             * @name OtrService#getScheduledTasksUsingGET
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.getScheduledTasksUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/scheduled-tasks/{caseId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{caseId}', parameters['caseId']);

                if (parameters['caseId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: caseId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * rescheduleTask
             * @method
             * @name OtrService#rescheduleTaskUsingPUT
             * @param {string} taskId - taskId
             * @param {} request - request
             * 
             */
            OtrService.prototype.rescheduleTaskUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/scheduled-tasks/{taskId}/reschedule';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleIncomingEmails
             * @method
             * @name OtrService#handleIncomingEmailsUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.handleIncomingEmailsUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/ses/inbound-emails';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json,text/plain'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * putSetting
             * @method
             * @name OtrService#putSettingUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.putSettingUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/settings';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * registerNewUser
             * @method
             * @name OtrService#registerNewUserUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.registerNewUserUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/signup';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * connectStripeAccount
             * @method
             * @name OtrService#connectStripeAccountUsingPOST
             * @param {string} code - authorizationCode
             * 
             */
            OtrService.prototype.connectStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/stripe/connect';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['code'] !== undefined) {
                    queryParameters['code'] = parameters['code'];
                }

                if (parameters['code'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: code'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleStripeWebhook
             * @method
             * @name OtrService#handleStripeWebhookUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.handleStripeWebhookUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/stripe/webhook';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleStripeWebhookOnDemand
             * @method
             * @name OtrService#handleStripeWebhookOnDemandUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.handleStripeWebhookOnDemandUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/stripe/webhook/manual';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * retrieveConnectedAccountDetails
             * @method
             * @name OtrService#retrieveConnectedAccountDetailsUsingGET
             * @param {string} accountId - accountId
             * 
             */
            OtrService.prototype.retrieveConnectedAccountDetailsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/stripe/{accountId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{accountId}', parameters['accountId']);

                if (parameters['accountId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: accountId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * subscribe
             * @method
             * @name OtrService#subscribeUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.subscribeUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/subscribe';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * persistTicketEvaluationRequest
             * @method
             * @name OtrService#persistTicketEvaluationRequestUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.persistTicketEvaluationRequestUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/ticket-evaluation';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateTicketEvaluationRequest
             * @method
             * @name OtrService#updateTicketEvaluationRequestUsingPUT
             * @param {integer} ticketEvaluationRequestId - ticketEvaluationRequestId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateTicketEvaluationRequestUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/ticket-evaluation/{ticketEvaluationRequestId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCurrentUserInfo
             * @method
             * @name OtrService#getCurrentUserInfoUsingGET
             * 
             */
            OtrService.prototype.getCurrentUserInfoUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/user';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserDetails
             * @method
             * @name OtrService#updateUserDetailsUsingPUT
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateUserDetailsUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/user';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * changeUserPassword
             * @method
             * @name OtrService#changeUserPasswordUsingPUT
             * @param {} request - request
             * 
             */
            OtrService.prototype.changeUserPasswordUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/user/p';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * resetUserPassword
             * @method
             * @name OtrService#resetUserPasswordUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.resetUserPasswordUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/user/p/reset';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * verifyPwdResetToken
             * @method
             * @name OtrService#verifyPwdResetTokenUsingGET
             * @param {string} token - token
             * 
             */
            OtrService.prototype.verifyPwdResetTokenUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/user/password/token';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['token'] !== undefined) {
                    queryParameters['token'] = parameters['token'];
                }

                if (parameters['token'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: token'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * sendResetPasswordToken
             * @method
             * @name OtrService#sendResetPasswordTokenUsingPOST
             * @param {string} email - userEmail
             * 
             */
            OtrService.prototype.sendResetPasswordTokenUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/user/password/token';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * isUserLoggedIn
             * @method
             * @name OtrService#isUserLoggedInUsingGET
             * 
             */
            OtrService.prototype.isUserLoggedInUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/authentication/status';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCountOfMatchingUsers
             * @method
             * @name OtrService#getCountOfMatchingUsersUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.getCountOfMatchingUsersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/matches';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findMatchingUsers
             * @method
             * @name OtrService#findMatchingUsersUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.findMatchingUsersUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/search';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addCardToStripeAccount
             * @method
             * @name OtrService#addCardToStripeAccountUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.addCardToStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/stripe/account/cards';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCard
             * @method
             * @name OtrService#getCardUsingGET
             * @param {string} cardId - cardId
             * 
             */
            OtrService.prototype.getCardUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/stripe/account/cards/{cardId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{cardId}', parameters['cardId']);

                if (parameters['cardId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: cardId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCard
             * @method
             * @name OtrService#deleteCardUsingDELETE
             * @param {string} cardId - cardId
             * 
             */
            OtrService.prototype.deleteCardUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/stripe/account/cards/{cardId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{cardId}', parameters['cardId']);

                if (parameters['cardId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: cardId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getSupportTicketsForUser
             * @method
             * @name OtrService#getSupportTicketsForUserUsingGET
             * @param {string} email - email
             * 
             */
            OtrService.prototype.getSupportTicketsForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{email}/support-tickets';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{email}', parameters['email']);

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserDetails
             * @method
             * @name OtrService#getUserDetailsUsingGET
             * @param {string} userIdString - userIdString
             * 
             */
            OtrService.prototype.getUserDetailsUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['application/json'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userIdString}', parameters['userIdString']);

                if (parameters['userIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * Retrieves all the payment methods available on the user's Stripe account.
             * @method
             * @name OtrService#getPaymentMethodsForUserUsingGET
             * @param {string} userIdString - userIdString
             * 
             */
            OtrService.prototype.getPaymentMethodsForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userIdString}/paymentmethods';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userIdString}', parameters['userIdString']);

                if (parameters['userIdString'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userIdString'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserProfile
             * @method
             * @name OtrService#updateUserProfileUsingPUT
             * @param {integer} userId - userId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateUserProfileUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addExtraAccount
             * @method
             * @name OtrService#addExtraAccountUsingPOST
             * @param {string} userId - userId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addExtraAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/account';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * setCardAsPrimary
             * @method
             * @name OtrService#setCardAsPrimaryUsingPUT
             * @param {string} userId - userId
             * @param {string} cardId - cardId
             * 
             */
            OtrService.prototype.setCardAsPrimaryUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/account/cards/{cardId}/primary';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getUserAddresses
             * @method
             * @name OtrService#getUserAddressesUsingGET
             * @param {integer} userId - userId
             * 
             */
            OtrService.prototype.getUserAddressesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/addresses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addUserAddress
             * @method
             * @name OtrService#addUserAddressUsingPOST
             * @param {integer} userId - userId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addUserAddressUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/addresses';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserAddress
             * @method
             * @name OtrService#updateUserAddressUsingPUT
             * @param {integer} userId - userId
             * @param {integer} addressId - addressId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateUserAddressUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/addresses/{addressId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getCasesForUser
             * @method
             * @name OtrService#getCasesForUserUsingGET
             * @param {string} userId - userId
             * 
             */
            OtrService.prototype.getCasesForUserUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/cases';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * findChargeDisputesByUserId
             * @method
             * @name OtrService#findChargeDisputesByUserIdUsingGET
             * @param {string} userId - userId
             * 
             */
            OtrService.prototype.findChargeDisputesByUserIdUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/disputes';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                path = path.replace('{userId}', parameters['userId']);

                if (parameters['userId'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: userId'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * resetUserPasswordByAdmin
             * @method
             * @name OtrService#resetUserPasswordByAdminUsingPUT
             * @param {integer} userId - userId
             * @param {} request - request
             * 
             */
            OtrService.prototype.resetUserPasswordByAdminUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/password';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addUserPhoneNumber
             * @method
             * @name OtrService#addUserPhoneNumberUsingPOST
             * @param {integer} userId - userId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addUserPhoneNumberUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/phone-numbers';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateUserPhoneNumber
             * @method
             * @name OtrService#updateUserPhoneNumberUsingPUT
             * @param {integer} userId - userId
             * @param {integer} phoneNumberId - phoneNumberId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateUserPhoneNumberUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteUserPhoneNumber
             * @method
             * @name OtrService#deleteUserPhoneNumberUsingDELETE
             * @param {integer} userId - userId
             * @param {integer} phoneNumberId - phoneNumberId
             * 
             */
            OtrService.prototype.deleteUserPhoneNumberUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateProfilePicture
             * @method
             * @name OtrService#updateProfilePictureUsingPUT
             * @param {integer} userId - userId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateProfilePictureUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/profile-picture';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteCardForUser
             * @method
             * @name OtrService#deleteCardForUserUsingDELETE
             * @param {string} userId - userId
             * @param {string} cardId - cardId
             * 
             */
            OtrService.prototype.deleteCardForUserUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/stripe/account/cards/{cardId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addACHToUserStripeAccount
             * @method
             * @name OtrService#addACHToUserStripeAccountUsingPOST
             * @param {string} userId - userId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addACHToUserStripeAccountUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/users/{userId}/stripe/ach';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * validateEmailAddress
             * @method
             * @name OtrService#validateEmailAddressUsingGET
             * @param {string} email - email
             * 
             */
            OtrService.prototype.validateEmailAddressUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/validate/email';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['email'] !== undefined) {
                    queryParameters['email'] = parameters['email'];
                }

                if (parameters['email'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: email'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getTrafficViolationTypes
             * @method
             * @name OtrService#getTrafficViolationTypesUsingGET
             * @param {string} state - stateAbbreviation
             * @param {string} audience - audience
             * @param {string} flavor - flavor
             * 
             */
            OtrService.prototype.getTrafficViolationTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/violations';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPenaltyTypes
             * @method
             * @name OtrService#getPenaltyTypesUsingGET
             * 
             */
            OtrService.prototype.getPenaltyTypesUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/violations/penalties';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * updateViolation
             * @method
             * @name OtrService#updateViolationUsingPUT
             * @param {string} violationId - violationId
             * @param {} request - request
             * 
             */
            OtrService.prototype.updateViolationUsingPUT = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/violations/{violationId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getPenaltiesByViolation
             * @method
             * @name OtrService#getPenaltiesByViolationUsingGET
             * @param {string} violationId - violationId
             * @param {string} flavor - flavor
             * 
             */
            OtrService.prototype.getPenaltiesByViolationUsingGET = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/violations/{violationId}/penalties';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * upsertPenalty
             * @method
             * @name OtrService#upsertPenaltyUsingPOST
             * @param {string} violationId - violationId
             * @param {} penaltyToAdd - penaltyToAdd
             * 
             */
            OtrService.prototype.upsertPenaltyUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/violations/{violationId}/penalties';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * removePenalty
             * @method
             * @name OtrService#removePenaltyUsingDELETE
             * @param {string} violationId - violationId
             * @param {string} penaltyTypeId - penaltyTypeId
             * 
             */
            OtrService.prototype.removePenaltyUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleBounceOrComplaintEvent
             * @method
             * @name OtrService#handleBounceOrComplaintEventUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.handleBounceOrComplaintEventUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/webhooks/drip/bounce-or-complaint';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * handleReceivedEmail
             * @method
             * @name OtrService#handleReceivedEmailUsingPOST
             * @param {} request - request
             * 
             */
            OtrService.prototype.handleReceivedEmailUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v1/webhooks/drip/received-email';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

                headers['Accept'] = ['*/*'];
                headers['Content-Type'] = ['application/json'];

                if (parameters['request'] !== undefined) {
                    body = parameters['request'];
                }

                if (parameters['request'] === undefined) {
                    deferred.reject(new Error('Missing required  parameter: request'));
                    return deferred.promise;
                }

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * addActionToCaseV2
             * @method
             * @name OtrService#addActionToCaseV2UsingPOST
             * @param {string} caseId - caseId
             * @param {} request - request
             * 
             */
            OtrService.prototype.addActionToCaseV2UsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v2/cases/{caseId}/actions';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * getLawfirmCasesByPage
             * @method
             * @name OtrService#getLawfirmCasesByPageUsingPOST
             * @param {string} lawfirmIdString - lawfirmIdString
             * @param {} request - request
             * @param {integer} page - page
             * @param {integer} length - length
             * 
             */
            OtrService.prototype.getLawfirmCasesByPageUsingPOST = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/v2/lawfirm/{lawfirmIdString}/cases';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };
            /**
             * deleteActionFromCase
             * @method
             * @name OtrService#deleteActionFromCaseUsingDELETE
             * @param {string} caseActionIdString - caseActionIdString
             * @param {string} caseId - caseId
             * 
             */
            OtrService.prototype.deleteActionFromCaseUsingDELETE = function(parameters) {
                if (parameters === undefined) {
                    parameters = {};
                }
                var deferred = $q.defer();

                var domain = this.domain;
                var path = '/api/{caseId}/actions/{caseActionIdString}';

                var body;
                var queryParameters = {};
                var headers = {};
                var form = {};

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

                if (parameters.$queryParameters) {
                    Object.keys(parameters.$queryParameters)
                        .forEach(function(parameterName) {
                            var parameter = parameters.$queryParameters[parameterName];
                            queryParameters[parameterName] = parameter;
                        });
                }

                this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

                return deferred.promise;
            };

            return OtrService;
        })();

        return OtrService;
    }]);