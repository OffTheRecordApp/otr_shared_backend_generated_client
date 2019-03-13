"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var request = require("superagent");
string, object;
{
    [key, string];
    { }
}
;
string, string;
{
    [key, string];
    string;
}
;
string, Collection;
NotificationEvent;
{
    [key, string];
    Collection;
}
;
string, string;
{
    [key, string];
    string;
}
;
NotificationEvent;
;
'totalUnreadCount' ?  : number;
;
string, object;
{
    [key, string];
    { }
}
;
string, int;
{
    [key, string];
    Integer;
}
;
object;
 >
;
;
NotificationEvent;
{ }
;
/**
 * A service to handle your traffic tickets
 * @class OtrService
 * @param {(string)} [domainOrOptions] - The project domain.
 */
var OtrService = /** @class */ (function () {
    function OtrService(domain, logger) {
        this.logger = logger;
        this.domain = "";
        this.errorHandlers = [];
        if (domain) {
            this.domain = domain;
        }
    }
    OtrService.prototype.getDomain = function () {
        return this.domain;
    };
    OtrService.prototype.addErrorHandler = function (handler) {
        this.errorHandlers.push(handler);
    };
    OtrService.prototype.setRequestHeadersHandler = function (handler) {
        this.requestHeadersHandler = handler;
    };
    OtrService.prototype.setConfigureAgentHandler = function (handler) {
        this.configureAgentHandler = handler;
    };
    OtrService.prototype.setConfigureRequestHandler = function (handler) {
        this.configureRequestHandler = handler;
    };
    OtrService.prototype.request = function (method, url, body, headers, queryParameters, form, reject, resolve) {
        var _this = this;
        if (this.logger) {
            this.logger.log("Call " + method + " " + url);
        }
        var agent = this.configureAgentHandler ?
            this.configureAgentHandler(request) :
            request;
        var req = agent(method, url);
        if (this.configureRequestHandler) {
            req = this.configureRequestHandler(req);
        }
        req = req.query(queryParameters);
        if (body) {
            req.send(body);
            if (typeof (body) === 'object' && !(body.constructor.name === 'Buffer')) {
                headers['Content-Type'] = 'application/json';
            }
        }
        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }
        if (this.requestHeadersHandler) {
            headers = this.requestHeadersHandler(__assign({}, headers));
        }
        Object.keys(headers).forEach(function (key) {
            req.set(key, headers[key]);
        });
        req.end(function (error, response) {
            if (error || !response.ok) {
                reject(error);
                _this.errorHandlers.forEach(function (handler) { return handler(error); });
            }
            else {
                resolve(response);
            }
        });
    };
    OtrService.prototype.updateAddressUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/addresses/{addressId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{addressId}', "" + parameters['addressId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateAddress
     * @method
     * @name OtrService#updateAddressUsingPUT
     * @param {integer} addressId - addressId
     * @param {} request - request
     */
    OtrService.prototype.updateAddressUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/addresses/{addressId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{addressId}', "" + parameters['addressId']);
            if (parameters['addressId'] === undefined) {
                reject(new Error('Missing required  parameter: addressId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.markAlertAsReadUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/alerts/{alertId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{alertId}', "" + parameters['alertId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * markAlertAsRead
     * @method
     * @name OtrService#markAlertAsReadUsingDELETE
     * @param {string} alertId - userId
     */
    OtrService.prototype.markAlertAsReadUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/alerts/{alertId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{alertId}', "" + parameters['alertId']);
            if (parameters['alertId'] === undefined) {
                reject(new Error('Missing required  parameter: alertId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getAlertsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/alerts/{userId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getAlerts
     * @method
     * @name OtrService#getAlertsUsingGET
     * @param {string} userId - userId
     */
    OtrService.prototype.getAlertsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/alerts/{userId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getUserInfoUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/authentication/user';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getUserInfo
     * @method
     * @name OtrService#getUserInfoUsingGET
     */
    OtrService.prototype.getUserInfoUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/authentication/user';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.handleBounceComplaintEmailsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/blacklists/ses/emails/';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * handleBounceComplaintEmails
     * @method
     * @name OtrService#handleBounceComplaintEmailsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.handleBounceComplaintEmailsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/blacklists/ses/emails/';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.createBranchLinkUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/branch/link';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * createBranchLink
     * @method
     * @name OtrService#createBranchLinkUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.createBranchLinkUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/branch/link';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseResolutionStatusesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/case-statuses/resolution-statuses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['stateCode'] !== undefined) {
            queryParameters['stateCode'] = parameters['stateCode'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCaseResolutionStatuses
     * @method
     * @name OtrService#getCaseResolutionStatusesUsingGET
     * @param {string} stateCode - stateCode
     */
    OtrService.prototype.getCaseResolutionStatusesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/case-statuses/resolution-statuses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['stateCode'] !== undefined) {
                queryParameters['stateCode'] = parameters['stateCode'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getAllActionsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/actions';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getAllActions
     * @method
     * @name OtrService#getAllActionsUsingGET
     */
    OtrService.prototype.getAllActionsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/actions';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseStatusesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/statuses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['categories'] !== undefined) {
            queryParameters['categories'] = parameters['categories'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCaseStatuses
     * @method
     * @name OtrService#getCaseStatusesUsingGET
     * @param {array} categories - categories
     */
    OtrService.prototype.getCaseStatusesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/statuses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['categories'] !== undefined) {
                queryParameters['categories'] = parameters['categories'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCase
     * @method
     * @name OtrService#getCaseUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getCaseUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.confirmBookingUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * confirmBooking
     * @method
     * @name OtrService#confirmBookingUsingPOST
     * @param {string} caseId - caseId
     */
    OtrService.prototype.confirmBookingUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateCaseUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateCase
     * @method
     * @name OtrService#updateCaseUsingPUT
     * @param {string} caseId - caseId
     * @param {} caseFromRequest - caseFromRequest
     */
    OtrService.prototype.updateCaseUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['caseFromRequest'] !== undefined) {
                body = parameters['caseFromRequest'];
            }
            if (parameters['caseFromRequest'] === undefined) {
                reject(new Error('Missing required  parameter: caseFromRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.cancelCaseForClientUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters['cancellationStatus'] !== undefined) {
            queryParameters['cancellationStatus'] = parameters['cancellationStatus'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * cancelCaseForClient
     * @method
     * @name OtrService#cancelCaseForClientUsingDELETE
     * @param {string} caseId - caseId
     * @param {string} cancellationStatus - cancellationStatus
     */
    OtrService.prototype.cancelCaseForClientUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['cancellationStatus'] !== undefined) {
                queryParameters['cancellationStatus'] = parameters['cancellationStatus'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getActionTimelineUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/actions/timeline';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getActionTimeline
     * @method
     * @name OtrService#getActionTimelineUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getActionTimelineUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/actions/timeline';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listCostItemsForAttorneyUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/attorney/cost';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listCostItemsForAttorney
     * @method
     * @name OtrService#listCostItemsForAttorneyUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.listCostItemsForAttorneyUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/attorney/cost';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseChargesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCaseCharges
     * @method
     * @name OtrService#getCaseChargesUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getCaseChargesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.captureAllCaseChargesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/capture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * captureAllCaseCharges
     * @method
     * @name OtrService#captureAllCaseChargesUsingPOST
     * @param {string} caseId - caseId
     */
    OtrService.prototype.captureAllCaseChargesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/capture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.refundChargesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/refund';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * refundCharges
     * @method
     * @name OtrService#refundChargesUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.refundChargesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/refund';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.captureCaseChargeUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/capture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{stripeTransactionId}', "" + parameters['stripeTransactionId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * captureCaseCharge
     * @method
     * @name OtrService#captureCaseChargeUsingPOST
     * @param {string} caseId - caseId
     * @param {string} stripeTransactionId - stripeTransactionId
     */
    OtrService.prototype.captureCaseChargeUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/capture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{stripeTransactionId}', "" + parameters['stripeTransactionId']);
            if (parameters['stripeTransactionId'] === undefined) {
                reject(new Error('Missing required  parameter: stripeTransactionId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.refundCaseChargeUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/refund';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{stripeTransactionId}', "" + parameters['stripeTransactionId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * refundCaseCharge
     * @method
     * @name OtrService#refundCaseChargeUsingPOST
     * @param {string} caseId - caseId
     * @param {string} stripeTransactionId - stripeTransactionId
     */
    OtrService.prototype.refundCaseChargeUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/refund';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{stripeTransactionId}', "" + parameters['stripeTransactionId']);
            if (parameters['stripeTransactionId'] === undefined) {
                reject(new Error('Missing required  parameter: stripeTransactionId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addViolationsToCitationUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/citation/violations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addViolationsToCitation
     * @method
     * @name OtrService#addViolationsToCitationUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.addViolationsToCitationUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/citation/violations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.removeViolationsFromCitationUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/citation/violations/{violationTypes}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{violationTypes}', "" + parameters['violationTypes']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * removeViolationsFromCitation
     * @method
     * @name OtrService#removeViolationsFromCitationUsingDELETE
     * @param {string} caseId - caseId
     * @param {array} violationTypes - violationTypes
     */
    OtrService.prototype.removeViolationsFromCitationUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/citation/violations/{violationTypes}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{violationTypes}', "" + parameters['violationTypes']);
            if (parameters['violationTypes'] === undefined) {
                reject(new Error('Missing required  parameter: violationTypes'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseClientUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/client';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCaseClient
     * @method
     * @name OtrService#getCaseClientUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getCaseClientUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/client';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getConversationUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }
        if (parameters['length'] !== undefined) {
            queryParameters['length'] = parameters['length'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getConversation
     * @method
     * @name OtrService#getConversationUsingGET
     * @param {string} caseId - caseId
     * @param {integer} page - page
     * @param {integer} length - length
     */
    OtrService.prototype.getConversationUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['page'] !== undefined) {
                queryParameters['page'] = parameters['page'];
            }
            if (parameters['length'] !== undefined) {
                queryParameters['length'] = parameters['length'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addMessageToConversationUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addMessageToConversation
     * @method
     * @name OtrService#addMessageToConversationUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.addMessageToConversationUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getMessageUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation/{messageId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{messageId}', "" + parameters['messageId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getMessage
     * @method
     * @name OtrService#getMessageUsingGET
     * @param {string} caseId - caseId
     * @param {string} messageId - messageId
     */
    OtrService.prototype.getMessageUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation/{messageId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{messageId}', "" + parameters['messageId']);
            if (parameters['messageId'] === undefined) {
                reject(new Error('Missing required  parameter: messageId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.deleteMessageUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation/{messageId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{messageId}', "" + parameters['messageId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * deleteMessage
     * @method
     * @name OtrService#deleteMessageUsingDELETE
     * @param {string} caseId - caseId
     * @param {string} messageId - messageId
     */
    OtrService.prototype.deleteMessageUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/conversation/{messageId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{messageId}', "" + parameters['messageId']);
            if (parameters['messageId'] === undefined) {
                reject(new Error('Missing required  parameter: messageId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.setCourtDateForCaseUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/courtdate';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * setCourtDateForCase
     * @method
     * @name OtrService#setCourtDateForCaseUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.setCourtDateForCaseUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/courtdate';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listCostItemsForCustomerUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/customer/cost';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listCostItemsForCustomer
     * @method
     * @name OtrService#listCostItemsForCustomerUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.listCostItemsForCustomerUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/customer/cost';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateDeclineTicketsUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/decline-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateDeclineTickets
     * @method
     * @name OtrService#updateDeclineTicketsUsingPUT
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.updateDeclineTicketsUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/decline-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.findChargeDisputesByCaseIdUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/disputes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * findChargeDisputesByCaseId
     * @method
     * @name OtrService#findChargeDisputesByCaseIdUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.findChargeDisputesByCaseIdUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/disputes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmCaseDocumentsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/documents';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmCaseDocuments
     * @method
     * @name OtrService#getLawfirmCaseDocumentsUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getLawfirmCaseDocumentsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/documents';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseFinancialsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/financials';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCaseFinancials
     * @method
     * @name OtrService#getCaseFinancialsUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getCaseFinancialsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/financials';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.authorizeChargeForInvoiceLineItemUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/invoicelineitem/{invoiceLineItemId}/authorize';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{invoiceLineItemId}', "" + parameters['invoiceLineItemId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * authorizeChargeForInvoiceLineItem
     * @method
     * @name OtrService#authorizeChargeForInvoiceLineItemUsingPOST
     * @param {string} caseId - caseId
     * @param {string} invoiceLineItemId - invoiceLineItemId
     * @param {} request - request
     */
    OtrService.prototype.authorizeChargeForInvoiceLineItemUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/invoicelineitem/{invoiceLineItemId}/authorize';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{invoiceLineItemId}', "" + parameters['invoiceLineItemId']);
            if (parameters['invoiceLineItemId'] === undefined) {
                reject(new Error('Missing required  parameter: invoiceLineItemId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.insertCaseLineItemUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/lineitems';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * insertCaseLineItem
     * @method
     * @name OtrService#insertCaseLineItemUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.insertCaseLineItemUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/lineitems';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateCaseLineItemUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{lineItemId}', "" + parameters['lineItemId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateCaseLineItem
     * @method
     * @name OtrService#updateCaseLineItemUsingPUT
     * @param {string} caseId - caseId
     * @param {string} lineItemId - lineItemId
     * @param {} request - request
     */
    OtrService.prototype.updateCaseLineItemUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{lineItemId}', "" + parameters['lineItemId']);
            if (parameters['lineItemId'] === undefined) {
                reject(new Error('Missing required  parameter: lineItemId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.deleteCaseLineItemUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{lineItemId}', "" + parameters['lineItemId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * deleteCaseLineItem
     * @method
     * @name OtrService#deleteCaseLineItemUsingDELETE
     * @param {string} caseId - caseId
     * @param {string} lineItemId - lineItemId
     */
    OtrService.prototype.deleteCaseLineItemUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{lineItemId}', "" + parameters['lineItemId']);
            if (parameters['lineItemId'] === undefined) {
                reject(new Error('Missing required  parameter: lineItemId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseNotesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/notes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCaseNotes
     * @method
     * @name OtrService#getCaseNotesUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getCaseNotesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/notes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.saveCaseNotesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/notes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * saveCaseNotes
     * @method
     * @name OtrService#saveCaseNotesUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.saveCaseNotesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/notes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.assignOwnerUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/owner';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * assignOwner
     * @method
     * @name OtrService#assignOwnerUsingPOST
     * @param {string} caseId - caseId
     */
    OtrService.prototype.assignOwnerUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/owner';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.assignCaseToUserUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/owner/{userId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{userId}', "" + parameters['userId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * assignCaseToUser
     * @method
     * @name OtrService#assignCaseToUserUsingPOST
     * @param {string} caseId - caseId
     * @param {string} userId - userId
     */
    OtrService.prototype.assignCaseToUserUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/owner/{userId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.authorizeChargeForCaseUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/payment';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * authorizeChargeForCase
     * @method
     * @name OtrService#authorizeChargeForCaseUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.authorizeChargeForCaseUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/payment';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.generateCasePaymentPlanUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/payment-plans/{paymentPlanId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{paymentPlanId}', "" + parameters['paymentPlanId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * generateCasePaymentPlan
     * @method
     * @name OtrService#generateCasePaymentPlanUsingGET
     * @param {string} caseId - caseId
     * @param {string} paymentPlanId - paymentPlanId
     */
    OtrService.prototype.generateCasePaymentPlanUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/payment-plans/{paymentPlanId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{paymentPlanId}', "" + parameters['paymentPlanId']);
            if (parameters['paymentPlanId'] === undefined) {
                reject(new Error('Missing required  parameter: paymentPlanId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.submitRequestForPriceMatchUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/price-match';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * submitRequestForPriceMatch
     * @method
     * @name OtrService#submitRequestForPriceMatchUsingPOST
     * @param {string} caseId - caseId
     * @param {} priceMatchRequest - priceMatchRequest
     */
    OtrService.prototype.submitRequestForPriceMatchUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/price-match';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['priceMatchRequest'] !== undefined) {
                body = parameters['priceMatchRequest'];
            }
            if (parameters['priceMatchRequest'] === undefined) {
                reject(new Error('Missing required  parameter: priceMatchRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.applyReferralCodeUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/referralcode/{codeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{codeId}', "" + parameters['codeId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * Apply referral code to a case to adjust the estimated cost and/or to assign the rightful lawfirm. This operation is idempotent
     * @method
     * @name OtrService#applyReferralCodeUsingPOST
     * @param {string} caseId - caseId
     * @param {string} codeId - codeId
     */
    OtrService.prototype.applyReferralCodeUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/referralcode/{codeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{codeId}', "" + parameters['codeId']);
            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateRefundEligibilityForCaseUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/refund-eligibility';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateRefundEligibilityForCase
     * @method
     * @name OtrService#updateRefundEligibilityForCaseUsingPUT
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.updateRefundEligibilityForCaseUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/refund-eligibility';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.isRefundEligibleUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/refund/eligibility';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * isRefundEligible
     * @method
     * @name OtrService#isRefundEligibleUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.isRefundEligibleUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/refund/eligibility';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.reopenCaseUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/reopen';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * reopenCase
     * @method
     * @name OtrService#reopenCaseUsingPUT
     * @param {string} caseId - caseId
     */
    OtrService.prototype.reopenCaseUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/reopen';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.requestLawyerUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/request';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * requestLawyer
     * @method
     * @name OtrService#requestLawyerUsingPOST
     * @param {string} caseId - caseId
     * @param {} lawyerRequest - lawyerRequest
     */
    OtrService.prototype.requestLawyerUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/request';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['lawyerRequest'] !== undefined) {
                body = parameters['lawyerRequest'];
            }
            if (parameters['lawyerRequest'] === undefined) {
                reject(new Error('Missing required  parameter: lawyerRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.markCaseAsResolvedUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/resolution';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * markCaseAsResolved
     * @method
     * @name OtrService#markCaseAsResolvedUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.markCaseAsResolvedUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/resolution';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getSupportTicketsForCaseUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/support-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getSupportTicketsForCase
     * @method
     * @name OtrService#getSupportTicketsForCaseUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getSupportTicketsForCaseUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/support-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getTransferHistoryUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/transfer';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getTransferHistory
     * @method
     * @name OtrService#getTransferHistoryUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getTransferHistoryUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/transfer';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.reverseCaseTransferUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/transfer/reverse';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * reverseCaseTransfer
     * @method
     * @name OtrService#reverseCaseTransferUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.reverseCaseTransferUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/transfer/reverse';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.transferCaseUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/transfer/{lawfirmId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * transferCase
     * @method
     * @name OtrService#transferCaseUsingPUT
     * @param {string} caseId - caseId
     * @param {string} lawfirmId - lawfirmId
     */
    OtrService.prototype.transferCaseUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/cases/{caseId}/transfer/{lawfirmId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getSSLPublicCertFileUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/certificates/ssl';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['encoding'] !== undefined) {
            queryParameters['encoding'] = parameters['encoding'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getSSLPublicCertFile
     * @method
     * @name OtrService#getSSLPublicCertFileUsingGET
     * @param {string} encoding - certEncoding
     */
    OtrService.prototype.getSSLPublicCertFileUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/certificates/ssl';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['encoding'] !== undefined) {
                queryParameters['encoding'] = parameters['encoding'];
            }
            if (parameters['encoding'] === undefined) {
                reject(new Error('Missing required  parameter: encoding'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.createNewCitationUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * createNewCitation
     * @method
     * @name OtrService#createNewCitationUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.createNewCitationUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getListOfCitationsWithMissingCourtUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/courts/missing';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getListOfCitationsWithMissingCourt
     * @method
     * @name OtrService#getListOfCitationsWithMissingCourtUsingGET
     */
    OtrService.prototype.getListOfCitationsWithMissingCourtUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/courts/missing';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.dismissCitationsFromContactListUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/dismiss';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * dismissCitationsFromContactList
     * @method
     * @name OtrService#dismissCitationsFromContactListUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.dismissCitationsFromContactListUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/dismiss';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCitationUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCitation
     * @method
     * @name OtrService#getCitationUsingGET
     * @param {string} citationIdString - citationIdString
     */
    OtrService.prototype.getCitationUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateCitationUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateCitation
     * @method
     * @name OtrService#updateCitationUsingPUT
     * @param {string} citationIdString - citationIdString
     * @param {} updateCitationRequest - updateCitationRequest
     */
    OtrService.prototype.updateCitationUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }
            if (parameters['updateCitationRequest'] !== undefined) {
                body = parameters['updateCitationRequest'];
            }
            if (parameters['updateCitationRequest'] === undefined) {
                reject(new Error('Missing required  parameter: updateCitationRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.deleteCitationUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * deleteCitation
     * @method
     * @name OtrService#deleteCitationUsingDELETE
     * @param {string} citationIdString - citationIdString
     */
    OtrService.prototype.deleteCitationUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.matchCaseUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}/case';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * matchCase
     * @method
     * @name OtrService#matchCaseUsingPOST
     * @param {string} citationIdString - citationIdString
     * @param {} request - request
     */
    OtrService.prototype.matchCaseUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}/case';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.setCitationContactListFlagUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}/dismiss';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
        if (parameters['isDismissed'] !== undefined) {
            queryParameters['isDismissed'] = parameters['isDismissed'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * setCitationContactListFlag
     * @method
     * @name OtrService#setCitationContactListFlagUsingPOST
     * @param {string} citationIdString - citationIdString
     * @param {boolean} isDismissed - isDismissed
     */
    OtrService.prototype.setCitationContactListFlagUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationIdString}/dismiss';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationIdString}', "" + parameters['citationIdString']);
            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }
            if (parameters['isDismissed'] !== undefined) {
                queryParameters['isDismissed'] = parameters['isDismissed'];
            }
            if (parameters['isDismissed'] === undefined) {
                reject(new Error('Missing required  parameter: isDismissed'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateCitationAddressUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/address';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateCitationAddress
     * @method
     * @name OtrService#updateCitationAddressUsingPOST
     * @param {string} citationId - citationId
     * @param {} request - request
     */
    OtrService.prototype.updateCitationAddressUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/address';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCaseFromCitationUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/case';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCaseFromCitation
     * @method
     * @name OtrService#getCaseFromCitationUsingGET
     * @param {string} citationId - citationId
     */
    OtrService.prototype.getCaseFromCitationUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/case';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.postMissingCourtForCitationUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/court/missing';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * postMissingCourtForCitation
     * @method
     * @name OtrService#postMissingCourtForCitationUsingPOST
     * @param {string} citationId - citationId
     * @param {string} state - state
     */
    OtrService.prototype.postMissingCourtForCitationUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/court/missing';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }
            if (parameters['state'] === undefined) {
                reject(new Error('Missing required  parameter: state'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.deleteMissingCourtRecordUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/courts/missing';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * deleteMissingCourtRecord
     * @method
     * @name OtrService#deleteMissingCourtRecordUsingDELETE
     * @param {integer} citationId - citationId
     */
    OtrService.prototype.deleteMissingCourtRecordUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/courts/missing';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.assignCitationOwnerUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/owner';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * assignCitationOwner
     * @method
     * @name OtrService#assignCitationOwnerUsingPOST
     * @param {integer} citationId - citationId
     */
    OtrService.prototype.assignCitationOwnerUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/owner';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateCitationPictureUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/picture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateCitationPicture
     * @method
     * @name OtrService#updateCitationPictureUsingPUT
     * @param {string} citationId - citationId
     * @param {} request - request
     */
    OtrService.prototype.updateCitationPictureUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/picture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.createReferralSourceForCitationUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/referral-source';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * createReferralSourceForCitation
     * @method
     * @name OtrService#createReferralSourceForCitationUsingPOST
     * @param {string} citationId - citationId
     * @param {} request - request
     */
    OtrService.prototype.createReferralSourceForCitationUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/referral-source';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getTicketReviewInfoUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/ticket-review';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{citationId}', "" + parameters['citationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getTicketReviewInfo
     * @method
     * @name OtrService#getTicketReviewInfoUsingGET
     * @param {string} citationId - citationId
     */
    OtrService.prototype.getTicketReviewInfoUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{citationId}/ticket-review';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{citationId}', "" + parameters['citationId']);
            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getAnonymousTicketUploadsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{emailAddress}/anonymous-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{emailAddress}', "" + parameters['emailAddress']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getAnonymousTicketUploads
     * @method
     * @name OtrService#getAnonymousTicketUploadsUsingGET
     * @param {string} emailAddress - emailAddress
     */
    OtrService.prototype.getAnonymousTicketUploadsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/citations/{emailAddress}/anonymous-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{emailAddress}', "" + parameters['emailAddress']);
            if (parameters['emailAddress'] === undefined) {
                reject(new Error('Missing required  parameter: emailAddress'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getAppConfigurationUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/config/app';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getAppConfiguration
     * @method
     * @name OtrService#getAppConfigurationUsingGET
     */
    OtrService.prototype.getAppConfigurationUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/config/app';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.facebookConnectUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/connect/{providerId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{providerId}', "" + parameters['providerId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * facebookConnect
     * @method
     * @name OtrService#facebookConnectUsingPOST
     * @param {string} providerId - providerId
     * @param {} request - request
     */
    OtrService.prototype.facebookConnectUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/connect/{providerId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{providerId}', "" + parameters['providerId']);
            if (parameters['providerId'] === undefined) {
                reject(new Error('Missing required  parameter: providerId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCasesWithCoverageObtainedUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases-with-coverage-obtained';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCasesWithCoverageObtained
     * @method
     * @name OtrService#getCasesWithCoverageObtainedUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getCasesWithCoverageObtainedUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases-with-coverage-obtained';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getInvalidCasesWithStripeChargeUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/invalid-with-charge';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getInvalidCasesWithStripeCharge
     * @method
     * @name OtrService#getInvalidCasesWithStripeChargeUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getInvalidCasesWithStripeChargeUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/invalid-with-charge';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLostCasesWithTransferNotReversedUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/lost/not-reversed';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLostCasesWithTransferNotReversed
     * @method
     * @name OtrService#getLostCasesWithTransferNotReversedUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getLostCasesWithTransferNotReversedUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/lost/not-reversed';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listCasesByStatusUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/status';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listCasesByStatus
     * @method
     * @name OtrService#listCasesByStatusUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listCasesByStatusUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/status';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getPendingAndRefusedCasesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/unaccepted';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getPendingAndRefusedCases
     * @method
     * @name OtrService#getPendingAndRefusedCasesUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getPendingAndRefusedCasesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/unaccepted';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCasesWithUncapturedChargesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/unpaid';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCasesWithUncapturedCharges
     * @method
     * @name OtrService#getCasesWithUncapturedChargesUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getCasesWithUncapturedChargesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/cases/unpaid';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listCitationsAndCasesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/citations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listCitationsAndCases
     * @method
     * @name OtrService#listCitationsAndCasesUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listCitationsAndCasesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/citations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCitationsWithMissingFieldsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/citations-with-missing-fields';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCitationsWithMissingFields
     * @method
     * @name OtrService#getCitationsWithMissingFieldsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getCitationsWithMissingFieldsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/citations-with-missing-fields';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listCustomersUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/customers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listCustomers
     * @method
     * @name OtrService#listCustomersUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listCustomersUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/customers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.findDisputesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/disputes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * findDisputes
     * @method
     * @name OtrService#findDisputesUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.findDisputesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/disputes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listDropoffsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/dropoff';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listDropoffs
     * @method
     * @name OtrService#listDropoffsUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listDropoffsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/dropoff';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listExpensesUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/expenses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listExpenses
     * @method
     * @name OtrService#listExpensesUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listExpensesUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/expenses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listLawfirmLeadsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/lawfirms/leads';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listLawfirmLeads
     * @method
     * @name OtrService#listLawfirmLeadsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.listLawfirmLeadsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/lawfirms/leads';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listLawyerLeadsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/lawyer-leads';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listLawyerLeads
     * @method
     * @name OtrService#listLawyerLeadsUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listLawyerLeadsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/lawyer-leads';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listPotentialCustomersUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/potential-customers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listPotentialCustomers
     * @method
     * @name OtrService#listPotentialCustomersUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.listPotentialCustomersUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/potential-customers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listRevenueUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/revenue';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listRevenue
     * @method
     * @name OtrService#listRevenueUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listRevenueUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/revenue';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listSubscribersUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/subscribers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listSubscribers
     * @method
     * @name OtrService#listSubscribersUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.listSubscribersUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/subscribers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getPendingTicketReviewsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/ticket-review-requests/pending';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getPendingTicketReviews
     * @method
     * @name OtrService#getPendingTicketReviewsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getPendingTicketReviewsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/ticket-review-requests/pending';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getRegisteredUsersUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/users';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getRegisteredUsers
     * @method
     * @name OtrService#getRegisteredUsersUsingPOST
     * @param {} graphRequest - graphRequest
     */
    OtrService.prototype.getRegisteredUsersUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/console/users';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }
            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCountiesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/counties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCounties
     * @method
     * @name OtrService#getCountiesUsingGET
     * @param {string} state - state
     */
    OtrService.prototype.getCountiesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/counties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }
            if (parameters['state'] === undefined) {
                reject(new Error('Missing required  parameter: state'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addCourtUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addCourt
     * @method
     * @name OtrService#addCourtUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.addCourtUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.searchCourtsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts/traffic';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['q'] !== undefined) {
            queryParameters['q'] = parameters['q'];
        }
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
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
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * searchCourts
     * @method
     * @name OtrService#searchCourtsUsingGET
     * @param {string} q - q
     * @param {string} state - state
     * @param {string} city - city
     * @param {string} county - county
     * @param {integer} offset - offset
     * @param {integer} length - length
     */
    OtrService.prototype.searchCourtsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts/traffic';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['q'] !== undefined) {
                queryParameters['q'] = parameters['q'];
            }
            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
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
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCourtUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts/{courtId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{courtId}', "" + parameters['courtId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCourt
     * @method
     * @name OtrService#getCourtUsingGET
     * @param {integer} courtId - courtId
     */
    OtrService.prototype.getCourtUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts/{courtId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{courtId}', "" + parameters['courtId']);
            if (parameters['courtId'] === undefined) {
                reject(new Error('Missing required  parameter: courtId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateCourtUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts/{courtId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{courtId}', "" + parameters['courtId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateCourt
     * @method
     * @name OtrService#updateCourtUsingPUT
     * @param {integer} courtId - courtId
     * @param {} request - request
     */
    OtrService.prototype.updateCourtUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/courts/{courtId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{courtId}', "" + parameters['courtId']);
            if (parameters['courtId'] === undefined) {
                reject(new Error('Missing required  parameter: courtId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getAwsCredentialsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/credentials/aws';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getAwsCredentials
     * @method
     * @name OtrService#getAwsCredentialsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getAwsCredentialsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/credentials/aws';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getOutgoingContactsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/contacts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['recipientEmailAddress'] !== undefined) {
            queryParameters['recipientEmailAddress'] = parameters['recipientEmailAddress'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getOutgoingContacts
     * @method
     * @name OtrService#getOutgoingContactsUsingGET
     * @param {string} recipientEmailAddress - recipientEmailAddress
     */
    OtrService.prototype.getOutgoingContactsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/contacts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['recipientEmailAddress'] !== undefined) {
                queryParameters['recipientEmailAddress'] = parameters['recipientEmailAddress'];
            }
            if (parameters['recipientEmailAddress'] === undefined) {
                reject(new Error('Missing required  parameter: recipientEmailAddress'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.generateTemplateUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/generate-template';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * generateTemplate
     * @method
     * @name OtrService#generateTemplateUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.generateTemplateUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/generate-template';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getTemplatesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/templates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['category'] !== undefined) {
            queryParameters['category'] = parameters['category'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getTemplates
     * @method
     * @name OtrService#getTemplatesUsingGET
     * @param {array} category - category
     */
    OtrService.prototype.getTemplatesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/templates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['category'] !== undefined) {
                queryParameters['category'] = parameters['category'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.replyToTicketUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/ticket/{ticketId}/reply';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{ticketId}', "" + parameters['ticketId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * replyToTicket
     * @method
     * @name OtrService#replyToTicketUsingPOST
     * @param {string} ticketId - ticketId
     * @param {} request - request
     */
    OtrService.prototype.replyToTicketUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/ticket/{ticketId}/reply';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{ticketId}', "" + parameters['ticketId']);
            if (parameters['ticketId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.sendConsolidatedEmailToUserUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/user/consolidate-email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * sendConsolidatedEmailToUser
     * @method
     * @name OtrService#sendConsolidatedEmailToUserUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.sendConsolidatedEmailToUserUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/user/consolidate-email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.sendEmailToUserUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/user/email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * sendEmailToUser
     * @method
     * @name OtrService#sendEmailToUserUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.sendEmailToUserUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/user/email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.sendEmailToUsersUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/users/email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * sendEmailToUsers
     * @method
     * @name OtrService#sendEmailToUsersUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.sendEmailToUsersUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/crm/users/email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.postCustomerLeadUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/customer-leads';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * postCustomerLead
     * @method
     * @name OtrService#postCustomerLeadUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.postCustomerLeadUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/customer-leads';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.sendDirectMailUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * sendDirectMail
     * @method
     * @name OtrService#sendDirectMailUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.sendDirectMailUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getSentMailUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/fetch-sent-mail';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getSentMail
     * @method
     * @name OtrService#getSentMailUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getSentMailUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/fetch-sent-mail';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.handleLobEventUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/lob-events';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * handleLobEvent
     * @method
     * @name OtrService#handleLobEventUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.handleLobEventUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/lob-events';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getDirectMailTemplatesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/templates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getDirectMailTemplates
     * @method
     * @name OtrService#getDirectMailTemplatesUsingGET
     */
    OtrService.prototype.getDirectMailTemplatesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/templates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addDirectMailTemplateUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/templates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addDirectMailTemplate
     * @method
     * @name OtrService#addDirectMailTemplateUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.addDirectMailTemplateUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/templates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.validateDirectMailRequestForSendUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/validate';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * validateDirectMailRequestForSend
     * @method
     * @name OtrService#validateDirectMailRequestForSendUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.validateDirectMailRequestForSendUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/direct-mail/validate';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateDisputeUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/disputes/{disputeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{disputeId}', "" + parameters['disputeId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateDispute
     * @method
     * @name OtrService#updateDisputeUsingPUT
     * @param {string} disputeId - disputeId
     * @param {} request - request
     */
    OtrService.prototype.updateDisputeUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/disputes/{disputeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{disputeId}', "" + parameters['disputeId']);
            if (parameters['disputeId'] === undefined) {
                reject(new Error('Missing required  parameter: disputeId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.markDocumentWithDecisionUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/documents/{docId}/decision';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{docId}', "" + parameters['docId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * markDocumentWithDecision
     * @method
     * @name OtrService#markDocumentWithDecisionUsingPOST
     * @param {string} docId - docId
     * @param {} decisionRequest - decisionRequest
     */
    OtrService.prototype.markDocumentWithDecisionUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/documents/{docId}/decision';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{docId}', "" + parameters['docId']);
            if (parameters['docId'] === undefined) {
                reject(new Error('Missing required  parameter: docId'));
                return;
            }
            if (parameters['decisionRequest'] !== undefined) {
                body = parameters['decisionRequest'];
            }
            if (parameters['decisionRequest'] === undefined) {
                reject(new Error('Missing required  parameter: decisionRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.removeFromDripUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/drip';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * removeFromDrip
     * @method
     * @name OtrService#removeFromDripUsingDELETE
     * @param {} request - request
     */
    OtrService.prototype.removeFromDripUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/drip';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.postFeedbackUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/feedback';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * postFeedback
     * @method
     * @name OtrService#postFeedbackUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.postFeedbackUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/feedback';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateFreshdeskTicketUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/freshdesk/ticket/{ticketId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{ticketId}', "" + parameters['ticketId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateFreshdeskTicket
     * @method
     * @name OtrService#updateFreshdeskTicketUsingPUT
     * @param {integer} ticketId - ticketId
     * @param {} request - request
     */
    OtrService.prototype.updateFreshdeskTicketUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/freshdesk/ticket/{ticketId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{ticketId}', "" + parameters['ticketId']);
            if (parameters['ticketId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.ticketStatusChangeHookUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/freshdesk/ticket/{ticketId}/webhook/status-change';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{ticketId}', "" + parameters['ticketId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * ticketStatusChangeHook
     * @method
     * @name OtrService#ticketStatusChangeHookUsingPUT
     * @param {string} ticketId - ticketId
     * @param {} request - request
     */
    OtrService.prototype.ticketStatusChangeHookUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/freshdesk/ticket/{ticketId}/webhook/status-change';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{ticketId}', "" + parameters['ticketId']);
            if (parameters['ticketId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.calculateTicketSavingsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/insurance/ticket/savings';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * calculateTicketSavings
     * @method
     * @name OtrService#calculateTicketSavingsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.calculateTicketSavingsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/insurance/ticket/savings';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.setLawfirmCaseDecisionUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirm/cases/{caseId}/decision';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * setLawfirmCaseDecision
     * @method
     * @name OtrService#setLawfirmCaseDecisionUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.setLawfirmCaseDecisionUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirm/cases/{caseId}/decision';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
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
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
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
     */
    OtrService.prototype.getLawfirmsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
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
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.createLawfirmUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * createLawfirm
     * @method
     * @name OtrService#createLawfirmUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.createLawfirmUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmStatusesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/statuses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmStatuses
     * @method
     * @name OtrService#getLawfirmStatusesUsingGET
     */
    OtrService.prototype.getLawfirmStatusesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/statuses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters['isDetailsRequired'] !== undefined) {
            queryParameters['isDetailsRequired'] = parameters['isDetailsRequired'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirm
     * @method
     * @name OtrService#getLawfirmUsingGET
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {boolean} isDetailsRequired - isDetailsRequired
     */
    OtrService.prototype.getLawfirmUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters['isDetailsRequired'] !== undefined) {
                queryParameters['isDetailsRequired'] = parameters['isDetailsRequired'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateLawfirmUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateLawfirm
     * @method
     * @name OtrService#updateLawfirmUsingPUT
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     */
    OtrService.prototype.updateLawfirmUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addCourtToCoverageUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/courts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addCourtToCoverage
     * @method
     * @name OtrService#addCourtToCoverageUsingPOST
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     */
    OtrService.prototype.addCourtToCoverageUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/courts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmCoverageUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/coverage';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmCoverage
     * @method
     * @name OtrService#getLawfirmCoverageUsingGET
     * @param {integer} lawfirmIdString - lawfirmIdString
     */
    OtrService.prototype.getLawfirmCoverageUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/coverage';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmLawyersUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/lawyers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmLawyers
     * @method
     * @name OtrService#getLawfirmLawyersUsingGET
     * @param {string} lawfirmIdString - lawfirmIdString
     */
    OtrService.prototype.getLawfirmLawyersUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/lawyers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateLawfirmSettingsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/settings';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateLawfirmSettings
     * @method
     * @name OtrService#updateLawfirmSettingsUsingPOST
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     */
    OtrService.prototype.updateLawfirmSettingsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/settings';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getStripeConnectedAccountUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/stripe';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getStripeConnectedAccount
     * @method
     * @name OtrService#getStripeConnectedAccountUsingGET
     * @param {string} lawfirmIdString - lawfirmIdString
     */
    OtrService.prototype.getStripeConnectedAccountUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmIdString}/stripe';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmCaseStatsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/cases/stats';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmCaseStats
     * @method
     * @name OtrService#getLawfirmCaseStatsUsingGET
     * @param {integer} lawfirmId - lawfirmId
     */
    OtrService.prototype.getLawfirmCaseStatsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/cases/stats';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.removeCourtsUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/courts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters['courtsToRemove'] !== undefined) {
            queryParameters['courtsToRemove'] = parameters['courtsToRemove'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * removeCourts
     * @method
     * @name OtrService#removeCourtsUsingDELETE
     * @param {integer} lawfirmId - lawfirmId
     * @param {array} courtsToRemove - courtsToRemove
     */
    OtrService.prototype.removeCourtsUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/courts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['courtsToRemove'] !== undefined) {
                queryParameters['courtsToRemove'] = parameters['courtsToRemove'];
            }
            if (parameters['courtsToRemove'] === undefined) {
                reject(new Error('Missing required  parameter: courtsToRemove'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getDocumentUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/documents';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters['docType'] !== undefined) {
            queryParameters['doc_type'] = parameters['docType'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getDocument
     * @method
     * @name OtrService#getDocumentUsingGET
     * @param {string} lawfirmId - lawfirmId
     * @param {string} docType - docType
     */
    OtrService.prototype.getDocumentUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/documents';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['docType'] !== undefined) {
                queryParameters['doc_type'] = parameters['docType'];
            }
            if (parameters['docType'] === undefined) {
                reject(new Error('Missing required  parameter: docType'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.generateDocUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/documents';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters['docType'] !== undefined) {
            queryParameters['doc_type'] = parameters['docType'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * generateDoc
     * @method
     * @name OtrService#generateDocUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {string} docType - docType
     * @param {} request - request
     */
    OtrService.prototype.generateDocUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/documents';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['docType'] !== undefined) {
                queryParameters['doc_type'] = parameters['docType'];
            }
            if (parameters['docType'] === undefined) {
                reject(new Error('Missing required  parameter: docType'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.previewDocUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/documents/preview';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters['docType'] !== undefined) {
            queryParameters['doc_type'] = parameters['docType'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * previewDoc
     * @method
     * @name OtrService#previewDocUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {string} docType - docType
     * @param {} request - request
     */
    OtrService.prototype.previewDocUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/documents/preview';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['docType'] !== undefined) {
                queryParameters['doc_type'] = parameters['docType'];
            }
            if (parameters['docType'] === undefined) {
                reject(new Error('Missing required  parameter: docType'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmInboxMessagesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/messages';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }
        if (parameters['length'] !== undefined) {
            queryParameters['length'] = parameters['length'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmInboxMessages
     * @method
     * @name OtrService#getLawfirmInboxMessagesUsingGET
     * @param {integer} lawfirmId - lawfirmId
     * @param {integer} page - page
     * @param {integer} length - length
     */
    OtrService.prototype.getLawfirmInboxMessagesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/messages';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['page'] !== undefined) {
                queryParameters['page'] = parameters['page'];
            }
            if (parameters['length'] !== undefined) {
                queryParameters['length'] = parameters['length'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getOtrLawfirmNotesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/otr-notes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getOtrLawfirmNotes
     * @method
     * @name OtrService#getOtrLawfirmNotesUsingGET
     */
    OtrService.prototype.getOtrLawfirmNotesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/otr-notes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmPaymentMethodsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/paymentmethods';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * Retrieves all the payment methods available on the lawfirm's Stripe account.
     * @method
     * @name OtrService#getLawfirmPaymentMethodsUsingGET
     * @param {integer} lawfirmId - lawfirmId
     */
    OtrService.prototype.getLawfirmPaymentMethodsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/paymentmethods';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateLawfirmWithPictureUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/picture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateLawfirmWithPicture
     * @method
     * @name OtrService#updateLawfirmWithPictureUsingPUT
     * @param {string} lawfirmId - lawfirmId
     * @param {} lawfirmPictureRequest - lawfirmPictureRequest
     */
    OtrService.prototype.updateLawfirmWithPictureUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/picture';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['lawfirmPictureRequest'] !== undefined) {
                body = parameters['lawfirmPictureRequest'];
            }
            if (parameters['lawfirmPictureRequest'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmPictureRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addACHToLawfirmStripeAccountUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/stripe/ach';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addACHToLawfirmStripeAccount
     * @method
     * @name OtrService#addACHToLawfirmStripeAccountUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {} request - request
     */
    OtrService.prototype.addACHToLawfirmStripeAccountUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/stripe/ach';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.deleteBankAccountFromLawfirmStripeAccountUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        path = path.replace('{bankAccountId}', "" + parameters['bankAccountId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * deleteBankAccountFromLawfirmStripeAccount
     * @method
     * @name OtrService#deleteBankAccountFromLawfirmStripeAccountUsingDELETE
     * @param {integer} lawfirmId - lawfirmId
     * @param {string} bankAccountId - bankAccountId
     */
    OtrService.prototype.deleteBankAccountFromLawfirmStripeAccountUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            path = path.replace('{bankAccountId}', "" + parameters['bankAccountId']);
            if (parameters['bankAccountId'] === undefined) {
                reject(new Error('Missing required  parameter: bankAccountId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.setDefaultPaymentMethodForLawfirmUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters['stripePaymentSourceId'] !== undefined) {
            queryParameters['stripePaymentSourceId'] = parameters['stripePaymentSourceId'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * setDefaultPaymentMethodForLawfirm
     * @method
     * @name OtrService#setDefaultPaymentMethodForLawfirmUsingPUT
     * @param {integer} lawfirmId - lawfirmId
     * @param {string} stripePaymentSourceId - stripePaymentSourceId
     */
    OtrService.prototype.setDefaultPaymentMethodForLawfirmUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['stripePaymentSourceId'] !== undefined) {
                queryParameters['stripePaymentSourceId'] = parameters['stripePaymentSourceId'];
            }
            if (parameters['stripePaymentSourceId'] === undefined) {
                reject(new Error('Missing required  parameter: stripePaymentSourceId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmTransactionsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/transactions';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmTransactions
     * @method
     * @name OtrService#getLawfirmTransactionsUsingGET
     * @param {string} lawfirmId - lawfirmId
     */
    OtrService.prototype.getLawfirmTransactionsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawfirms/{lawfirmId}/transactions';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.upsertLawyerUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawyers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * upsertLawyer
     * @method
     * @name OtrService#upsertLawyerUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.upsertLawyerUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawyers';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.saveLawyerLeadUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawyers/lead';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * saveLawyerLead
     * @method
     * @name OtrService#saveLawyerLeadUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.saveLawyerLeadUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawyers/lead';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawyerEmailGuessesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawyers/{lawyerId}/email-guesses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawyerId}', "" + parameters['lawyerId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawyerEmailGuesses
     * @method
     * @name OtrService#getLawyerEmailGuessesUsingGET
     * @param {integer} lawyerId - lawyerId
     */
    OtrService.prototype.getLawyerEmailGuessesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/lawyers/{lawyerId}/email-guesses';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawyerId}', "" + parameters['lawyerId']);
            if (parameters['lawyerId'] === undefined) {
                reject(new Error('Missing required  parameter: lawyerId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.notifyClientActionRequirementUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/action-required';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * notifyClientActionRequirement
     * @method
     * @name OtrService#notifyClientActionRequirementUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.notifyClientActionRequirementUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/action-required';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.pushCaseMessageUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * pushCaseMessage
     * @method
     * @name OtrService#pushCaseMessageUsingPOST
     * @param {string} caseId - caseId
     * @param {} pushRequest - pushRequest
     */
    OtrService.prototype.pushCaseMessageUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/cases/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['pushRequest'] !== undefined) {
                body = parameters['pushRequest'];
            }
            if (parameters['pushRequest'] === undefined) {
                reject(new Error('Missing required  parameter: pushRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.registerUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/register';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * register
     * @method
     * @name OtrService#registerUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.registerUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/register';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getUnreadCountsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/unread';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['includeMessage'] !== undefined) {
            queryParameters['includeMessage'] = parameters['includeMessage'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getUnreadCounts
     * @method
     * @name OtrService#getUnreadCountsUsingGET
     * @param {boolean} includeMessage - includeMessage
     */
    OtrService.prototype.getUnreadCountsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/unread';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['includeMessage'] !== undefined) {
                queryParameters['includeMessage'] = parameters['includeMessage'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.markReadUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/unread/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * markRead
     * @method
     * @name OtrService#markReadUsingDELETE
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.markReadUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/unread/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.pushNotificationToUserUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/users/{recipientId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{recipientId}', "" + parameters['recipientId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * pushNotificationToUser
     * @method
     * @name OtrService#pushNotificationToUserUsingPOST
     * @param {string} recipientId - recipientId
     * @param {} pushRequest - pushRequest
     */
    OtrService.prototype.pushNotificationToUserUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/notifications/users/{recipientId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{recipientId}', "" + parameters['recipientId']);
            if (parameters['recipientId'] === undefined) {
                reject(new Error('Missing required  parameter: recipientId'));
                return;
            }
            if (parameters['pushRequest'] !== undefined) {
                body = parameters['pushRequest'];
            }
            if (parameters['pushRequest'] === undefined) {
                reject(new Error('Missing required  parameter: pushRequest'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getAvailablePaymentPlansUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/payment-plans/{lawfirmId}/case-payment';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
        if (parameters['legalFeeInCents'] !== undefined) {
            queryParameters['legalFeeInCents'] = parameters['legalFeeInCents'];
        }
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getAvailablePaymentPlans
     * @method
     * @name OtrService#getAvailablePaymentPlansUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {string} legalFeeInCents - legalFeeInCents
     * @param {string} state - state
     */
    OtrService.prototype.getAvailablePaymentPlansUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/payment-plans/{lawfirmId}/case-payment';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmId}', "" + parameters['lawfirmId']);
            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }
            if (parameters['legalFeeInCents'] !== undefined) {
                queryParameters['legalFeeInCents'] = parameters['legalFeeInCents'];
            }
            if (parameters['legalFeeInCents'] === undefined) {
                reject(new Error('Missing required  parameter: legalFeeInCents'));
                return;
            }
            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }
            if (parameters['state'] === undefined) {
                reject(new Error('Missing required  parameter: state'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getActiveRatesByAreaUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/rates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getActiveRatesByArea
     * @method
     * @name OtrService#getActiveRatesByAreaUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getActiveRatesByAreaUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/rates';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getReferralHistoryUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getReferralHistory
     * @method
     * @name OtrService#getReferralHistoryUsingGET
     */
    OtrService.prototype.getReferralHistoryUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getReferralCodesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['isActive'] !== undefined) {
            queryParameters['isActive'] = parameters['isActive'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getReferralCodes
     * @method
     * @name OtrService#getReferralCodesUsingGET
     * @param {boolean} isActive - isActive
     */
    OtrService.prototype.getReferralCodesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['isActive'] !== undefined) {
                queryParameters['isActive'] = parameters['isActive'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.generateReferralCodeUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
     * @method
     * @name OtrService#generateReferralCodeUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.generateReferralCodeUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getReferralCodeUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{codeId}', "" + parameters['codeId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getReferralCode
     * @method
     * @name OtrService#getReferralCodeUsingGET
     * @param {string} codeId - codeId
     */
    OtrService.prototype.getReferralCodeUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{codeId}', "" + parameters['codeId']);
            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.markCodeAsInactiveUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{codeId}', "" + parameters['codeId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * markCodeAsInactive
     * @method
     * @name OtrService#markCodeAsInactiveUsingDELETE
     * @param {string} codeId - codeId
     */
    OtrService.prototype.markCodeAsInactiveUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{codeId}', "" + parameters['codeId']);
            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.approveReferralCodeUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}/approve';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{codeId}', "" + parameters['codeId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * Only for admins. This will approve and activate a given referral code
     * @method
     * @name OtrService#approveReferralCodeUsingPUT
     * @param {string} codeId - codeId
     */
    OtrService.prototype.approveReferralCodeUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}/approve';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{codeId}', "" + parameters['codeId']);
            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.validateReferralCodeUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}/validate';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{codeId}', "" + parameters['codeId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it's max use count?
     * @method
     * @name OtrService#validateReferralCodeUsingGET
     * @param {string} codeId - codeId
     */
    OtrService.prototype.validateReferralCodeUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/codes/{codeId}/validate';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{codeId}', "" + parameters['codeId']);
            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.publishReferralContactsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/contacts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * publishReferralContacts
     * @method
     * @name OtrService#publishReferralContactsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.publishReferralContactsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/contacts';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getUserReferralSourceTypesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/sources';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getUserReferralSourceTypes
     * @method
     * @name OtrService#getUserReferralSourceTypesUsingGET
     */
    OtrService.prototype.getUserReferralSourceTypesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/sources';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.setReferralSourceUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/sources';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * setReferralSource
     * @method
     * @name OtrService#setReferralSourceUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.setReferralSourceUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/referrals/sources';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getRefLinksForUserUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/reflinks/{userIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userIdString}', "" + parameters['userIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getRefLinksForUser
     * @method
     * @name OtrService#getRefLinksForUserUsingGET
     * @param {string} userIdString - userIdString
     */
    OtrService.prototype.getRefLinksForUserUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/reflinks/{userIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userIdString}', "" + parameters['userIdString']);
            if (parameters['userIdString'] === undefined) {
                reject(new Error('Missing required  parameter: userIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.listCustomerReviewsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/reviews';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }
        if (parameters['size'] !== undefined) {
            queryParameters['size'] = parameters['size'];
        }
        if (parameters['isFeatured'] !== undefined) {
            queryParameters['isFeatured'] = parameters['isFeatured'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * listCustomerReviews
     * @method
     * @name OtrService#listCustomerReviewsUsingGET
     * @param {integer} page - page
     * @param {integer} size - size
     * @param {boolean} isFeatured - isFeatured
     */
    OtrService.prototype.listCustomerReviewsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/reviews';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
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
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getScheduledTasksUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/scheduled-tasks/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getScheduledTasks
     * @method
     * @name OtrService#getScheduledTasksUsingGET
     * @param {string} caseId - caseId
     */
    OtrService.prototype.getScheduledTasksUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/scheduled-tasks/{caseId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.rescheduleTaskUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/scheduled-tasks/{taskId}/reschedule';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{taskId}', "" + parameters['taskId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * rescheduleTask
     * @method
     * @name OtrService#rescheduleTaskUsingPUT
     * @param {string} taskId - taskId
     * @param {} request - request
     */
    OtrService.prototype.rescheduleTaskUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/scheduled-tasks/{taskId}/reschedule';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{taskId}', "" + parameters['taskId']);
            if (parameters['taskId'] === undefined) {
                reject(new Error('Missing required  parameter: taskId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.handleIncomingEmailsUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/ses/inbound-emails';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * handleIncomingEmails
     * @method
     * @name OtrService#handleIncomingEmailsUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.handleIncomingEmailsUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/ses/inbound-emails';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.putSettingUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/settings';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * putSetting
     * @method
     * @name OtrService#putSettingUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.putSettingUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/settings';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.registerNewUserUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/signup';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * registerNewUser
     * @method
     * @name OtrService#registerNewUserUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.registerNewUserUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/signup';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.connectStripeAccountUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/connect';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['code'] !== undefined) {
            queryParameters['code'] = parameters['code'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * connectStripeAccount
     * @method
     * @name OtrService#connectStripeAccountUsingPOST
     * @param {string} code - authorizationCode
     */
    OtrService.prototype.connectStripeAccountUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/connect';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['code'] !== undefined) {
                queryParameters['code'] = parameters['code'];
            }
            if (parameters['code'] === undefined) {
                reject(new Error('Missing required  parameter: code'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.handleStripeWebhookUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/webhook';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * handleStripeWebhook
     * @method
     * @name OtrService#handleStripeWebhookUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.handleStripeWebhookUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/webhook';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.handleStripeWebhookOnDemandUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/webhook/manual';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * handleStripeWebhookOnDemand
     * @method
     * @name OtrService#handleStripeWebhookOnDemandUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.handleStripeWebhookOnDemandUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/webhook/manual';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.retrieveConnectedAccountDetailsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/{accountId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{accountId}', "" + parameters['accountId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * retrieveConnectedAccountDetails
     * @method
     * @name OtrService#retrieveConnectedAccountDetailsUsingGET
     * @param {string} accountId - accountId
     */
    OtrService.prototype.retrieveConnectedAccountDetailsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/stripe/{accountId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{accountId}', "" + parameters['accountId']);
            if (parameters['accountId'] === undefined) {
                reject(new Error('Missing required  parameter: accountId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.subscribeUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/subscribe';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * subscribe
     * @method
     * @name OtrService#subscribeUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.subscribeUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/subscribe';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.persistTicketEvaluationRequestUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/ticket-evaluation';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * persistTicketEvaluationRequest
     * @method
     * @name OtrService#persistTicketEvaluationRequestUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.persistTicketEvaluationRequestUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/ticket-evaluation';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateTicketEvaluationRequestUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/ticket-evaluation/{ticketEvaluationRequestId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{ticketEvaluationRequestId}', "" + parameters['ticketEvaluationRequestId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateTicketEvaluationRequest
     * @method
     * @name OtrService#updateTicketEvaluationRequestUsingPUT
     * @param {integer} ticketEvaluationRequestId - ticketEvaluationRequestId
     * @param {} request - request
     */
    OtrService.prototype.updateTicketEvaluationRequestUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/ticket-evaluation/{ticketEvaluationRequestId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{ticketEvaluationRequestId}', "" + parameters['ticketEvaluationRequestId']);
            if (parameters['ticketEvaluationRequestId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketEvaluationRequestId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCurrentUserInfoUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCurrentUserInfo
     * @method
     * @name OtrService#getCurrentUserInfoUsingGET
     */
    OtrService.prototype.getCurrentUserInfoUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.changeUserPasswordUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/p';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * changeUserPassword
     * @method
     * @name OtrService#changeUserPasswordUsingPUT
     * @param {} request - request
     */
    OtrService.prototype.changeUserPasswordUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/p';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.resetUserPasswordUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/p/reset';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * resetUserPassword
     * @method
     * @name OtrService#resetUserPasswordUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.resetUserPasswordUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/p/reset';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.verifyPwdResetTokenUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/password/token';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['token'] !== undefined) {
            queryParameters['token'] = parameters['token'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * verifyPwdResetToken
     * @method
     * @name OtrService#verifyPwdResetTokenUsingGET
     * @param {string} token - token
     */
    OtrService.prototype.verifyPwdResetTokenUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/password/token';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['token'] !== undefined) {
                queryParameters['token'] = parameters['token'];
            }
            if (parameters['token'] === undefined) {
                reject(new Error('Missing required  parameter: token'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.sendResetPasswordTokenUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/password/token';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['email'] !== undefined) {
            queryParameters['email'] = parameters['email'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * sendResetPasswordToken
     * @method
     * @name OtrService#sendResetPasswordTokenUsingPOST
     * @param {string} email - userEmail
     */
    OtrService.prototype.sendResetPasswordTokenUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/user/password/token';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['email'] !== undefined) {
                queryParameters['email'] = parameters['email'];
            }
            if (parameters['email'] === undefined) {
                reject(new Error('Missing required  parameter: email'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.isUserLoggedInUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/authentication/status';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * isUserLoggedIn
     * @method
     * @name OtrService#isUserLoggedInUsingGET
     */
    OtrService.prototype.isUserLoggedInUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/authentication/status';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCountOfMatchingUsersUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/matches';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCountOfMatchingUsers
     * @method
     * @name OtrService#getCountOfMatchingUsersUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.getCountOfMatchingUsersUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/matches';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.findMatchingUsersUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/search';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * findMatchingUsers
     * @method
     * @name OtrService#findMatchingUsersUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.findMatchingUsersUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/search';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addCardToStripeAccountUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/stripe/account/cards';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addCardToStripeAccount
     * @method
     * @name OtrService#addCardToStripeAccountUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.addCardToStripeAccountUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/stripe/account/cards';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCardUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/stripe/account/cards/{cardId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{cardId}', "" + parameters['cardId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCard
     * @method
     * @name OtrService#getCardUsingGET
     * @param {string} cardId - cardId
     */
    OtrService.prototype.getCardUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/stripe/account/cards/{cardId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{cardId}', "" + parameters['cardId']);
            if (parameters['cardId'] === undefined) {
                reject(new Error('Missing required  parameter: cardId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getSupportTicketsForUserUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{email}/support-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{email}', "" + parameters['email']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getSupportTicketsForUser
     * @method
     * @name OtrService#getSupportTicketsForUserUsingGET
     * @param {string} email - email
     */
    OtrService.prototype.getSupportTicketsForUserUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{email}/support-tickets';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{email}', "" + parameters['email']);
            if (parameters['email'] === undefined) {
                reject(new Error('Missing required  parameter: email'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getUserDetailsUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userIdString}', "" + parameters['userIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getUserDetails
     * @method
     * @name OtrService#getUserDetailsUsingGET
     * @param {string} userIdString - userIdString
     */
    OtrService.prototype.getUserDetailsUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userIdString}', "" + parameters['userIdString']);
            if (parameters['userIdString'] === undefined) {
                reject(new Error('Missing required  parameter: userIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getPaymentMethodsForUserUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userIdString}/paymentmethods';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userIdString}', "" + parameters['userIdString']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * Retrieves all the payment methods available on the user's Stripe account.
     * @method
     * @name OtrService#getPaymentMethodsForUserUsingGET
     * @param {string} userIdString - userIdString
     */
    OtrService.prototype.getPaymentMethodsForUserUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userIdString}/paymentmethods';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userIdString}', "" + parameters['userIdString']);
            if (parameters['userIdString'] === undefined) {
                reject(new Error('Missing required  parameter: userIdString'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addExtraAccountUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/account';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addExtraAccount
     * @method
     * @name OtrService#addExtraAccountUsingPOST
     * @param {string} userId - userId
     * @param {} request - request
     */
    OtrService.prototype.addExtraAccountUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/account';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.setCardAsPrimaryUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/account/cards/{cardId}/primary';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        path = path.replace('{cardId}', "" + parameters['cardId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * setCardAsPrimary
     * @method
     * @name OtrService#setCardAsPrimaryUsingPUT
     * @param {string} userId - userId
     * @param {string} cardId - cardId
     */
    OtrService.prototype.setCardAsPrimaryUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/account/cards/{cardId}/primary';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            path = path.replace('{cardId}', "" + parameters['cardId']);
            if (parameters['cardId'] === undefined) {
                reject(new Error('Missing required  parameter: cardId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getCasesForUserUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/cases';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getCasesForUser
     * @method
     * @name OtrService#getCasesForUserUsingGET
     * @param {string} userId - userId
     */
    OtrService.prototype.getCasesForUserUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/cases';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.findChargeDisputesByUserIdUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/disputes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * findChargeDisputesByUserId
     * @method
     * @name OtrService#findChargeDisputesByUserIdUsingGET
     * @param {string} userId - userId
     */
    OtrService.prototype.findChargeDisputesByUserIdUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/disputes';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.resetUserPasswordByAdminUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/password';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * resetUserPasswordByAdmin
     * @method
     * @name OtrService#resetUserPasswordByAdminUsingPUT
     * @param {integer} userId - userId
     * @param {} request - request
     */
    OtrService.prototype.resetUserPasswordByAdminUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/password';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.deleteCardForUserUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/stripe/account/cards/{cardId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        path = path.replace('{cardId}', "" + parameters['cardId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * deleteCardForUser
     * @method
     * @name OtrService#deleteCardForUserUsingDELETE
     * @param {string} userId - userId
     * @param {string} cardId - cardId
     */
    OtrService.prototype.deleteCardForUserUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/stripe/account/cards/{cardId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            path = path.replace('{cardId}', "" + parameters['cardId']);
            if (parameters['cardId'] === undefined) {
                reject(new Error('Missing required  parameter: cardId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addACHToUserStripeAccountUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/stripe/ach';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{userId}', "" + parameters['userId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addACHToUserStripeAccount
     * @method
     * @name OtrService#addACHToUserStripeAccountUsingPOST
     * @param {string} userId - userId
     * @param {} request - request
     */
    OtrService.prototype.addACHToUserStripeAccountUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/users/{userId}/stripe/ach';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{userId}', "" + parameters['userId']);
            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.validateEmailAddressUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/validate/email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['email'] !== undefined) {
            queryParameters['email'] = parameters['email'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * validateEmailAddress
     * @method
     * @name OtrService#validateEmailAddressUsingGET
     * @param {string} email - email
     */
    OtrService.prototype.validateEmailAddressUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/validate/email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['email'] !== undefined) {
                queryParameters['email'] = parameters['email'];
            }
            if (parameters['email'] === undefined) {
                reject(new Error('Missing required  parameter: email'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getTrafficViolationTypesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }
        if (parameters['audience'] !== undefined) {
            queryParameters['audience'] = parameters['audience'];
        }
        if (parameters['flavor'] !== undefined) {
            queryParameters['flavor'] = parameters['flavor'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getTrafficViolationTypes
     * @method
     * @name OtrService#getTrafficViolationTypesUsingGET
     * @param {string} state - stateAbbreviation
     * @param {string} audience - audience
     * @param {string} flavor - flavor
     */
    OtrService.prototype.getTrafficViolationTypesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
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
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getPenaltyTypesUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/penalties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getPenaltyTypes
     * @method
     * @name OtrService#getPenaltyTypesUsingGET
     */
    OtrService.prototype.getPenaltyTypesUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/penalties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.updateViolationUsingPUTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{violationId}', "" + parameters['violationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * updateViolation
     * @method
     * @name OtrService#updateViolationUsingPUT
     * @param {string} violationId - violationId
     * @param {} request - request
     */
    OtrService.prototype.updateViolationUsingPUT = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{violationId}', "" + parameters['violationId']);
            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getPenaltiesByViolationUsingGETURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}/penalties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{violationId}', "" + parameters['violationId']);
        if (parameters['flavor'] !== undefined) {
            queryParameters['flavor'] = parameters['flavor'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getPenaltiesByViolation
     * @method
     * @name OtrService#getPenaltiesByViolationUsingGET
     * @param {string} violationId - violationId
     * @param {string} flavor - flavor
     */
    OtrService.prototype.getPenaltiesByViolationUsingGET = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}/penalties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{violationId}', "" + parameters['violationId']);
            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }
            if (parameters['flavor'] !== undefined) {
                queryParameters['flavor'] = parameters['flavor'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.upsertPenaltyUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}/penalties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{violationId}', "" + parameters['violationId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * upsertPenalty
     * @method
     * @name OtrService#upsertPenaltyUsingPOST
     * @param {string} violationId - violationId
     * @param {} penaltyToAdd - penaltyToAdd
     */
    OtrService.prototype.upsertPenaltyUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}/penalties';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{violationId}', "" + parameters['violationId']);
            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }
            if (parameters['penaltyToAdd'] !== undefined) {
                body = parameters['penaltyToAdd'];
            }
            if (parameters['penaltyToAdd'] === undefined) {
                reject(new Error('Missing required  parameter: penaltyToAdd'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.removePenaltyUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{violationId}', "" + parameters['violationId']);
        path = path.replace('{penaltyTypeId}', "" + parameters['penaltyTypeId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * removePenalty
     * @method
     * @name OtrService#removePenaltyUsingDELETE
     * @param {string} violationId - violationId
     * @param {string} penaltyTypeId - penaltyTypeId
     */
    OtrService.prototype.removePenaltyUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{violationId}', "" + parameters['violationId']);
            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }
            path = path.replace('{penaltyTypeId}', "" + parameters['penaltyTypeId']);
            if (parameters['penaltyTypeId'] === undefined) {
                reject(new Error('Missing required  parameter: penaltyTypeId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.handleBounceOrComplaintEventUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/webhooks/drip/bounce-or-complaint';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * handleBounceOrComplaintEvent
     * @method
     * @name OtrService#handleBounceOrComplaintEventUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.handleBounceOrComplaintEventUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/webhooks/drip/bounce-or-complaint';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.handleReceivedEmailUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/webhooks/drip/received-email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * handleReceivedEmail
     * @method
     * @name OtrService#handleReceivedEmailUsingPOST
     * @param {} request - request
     */
    OtrService.prototype.handleReceivedEmailUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v1/webhooks/drip/received-email';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.addActionToCaseV2UsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v2/cases/{caseId}/actions';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * addActionToCaseV2
     * @method
     * @name OtrService#addActionToCaseV2UsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    OtrService.prototype.addActionToCaseV2UsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v2/cases/{caseId}/actions';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.getLawfirmCasesByPageUsingPOSTURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v2/lawfirm/{lawfirmIdString}/cases';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }
        if (parameters['length'] !== undefined) {
            queryParameters['length'] = parameters['length'];
        }
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        queryParameters = {};
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * getLawfirmCasesByPage
     * @method
     * @name OtrService#getLawfirmCasesByPageUsingPOST
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     * @param {integer} page - page
     * @param {integer} length - length
     */
    OtrService.prototype.getLawfirmCasesByPageUsingPOST = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/v2/lawfirm/{lawfirmIdString}/cases';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{lawfirmIdString}', "" + parameters['lawfirmIdString']);
            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }
            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }
            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }
            if (parameters['page'] !== undefined) {
                queryParameters['page'] = parameters['page'];
            }
            if (parameters['length'] !== undefined) {
                queryParameters['length'] = parameters['length'];
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            form = queryParameters;
            queryParameters = {};
            _this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    OtrService.prototype.deleteActionFromCaseUsingDELETEURL = function (parameters) {
        var queryParameters = {};
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/{caseId}/actions/{caseActionIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        path = path.replace('{caseActionIdString}', "" + parameters['caseActionIdString']);
        path = path.replace('{caseId}', "" + parameters['caseId']);
        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = __assign({}, queryParameters, parameters.$queryParameters);
        }
        var keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(function (key) { return key + '=' + encodeURIComponent(queryParameters[key]); }).join('&')) : '');
    };
    /**
     * deleteActionFromCase
     * @method
     * @name OtrService#deleteActionFromCaseUsingDELETE
     * @param {string} caseActionIdString - caseActionIdString
     * @param {string} caseId - caseId
     */
    OtrService.prototype.deleteActionFromCaseUsingDELETE = function (parameters) {
        var _this = this;
        var domain = parameters.$domain ? parameters.$domain : this.domain;
        var path = '/api/{caseId}/actions/{caseActionIdString}';
        if (parameters.$path) {
            path = (typeof (parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }
        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};
        return new Promise(function (resolve, reject) {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';
            path = path.replace('{caseActionIdString}', "" + parameters['caseActionIdString']);
            if (parameters['caseActionIdString'] === undefined) {
                reject(new Error('Missing required  parameter: caseActionIdString'));
                return;
            }
            path = path.replace('{caseId}', "" + parameters['caseId']);
            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }
            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }
            _this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    };
    return OtrService;
}());
exports.OtrService = OtrService;
exports["default"] = OtrService;
