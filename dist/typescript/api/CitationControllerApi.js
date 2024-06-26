"use strict";
/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitationControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var CitationControllerApi = /** @class */ (function () {
    function CitationControllerApi($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
        this.defaultHeaders = {};
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * @summary assignCitationOwner
     * @param citationId citationId
     * @param request request
     */
    CitationControllerApi.prototype.assignCitationOwnerUsingPOST = function (citationId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/owner'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling assignCitationOwnerUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary createNewCitation
     * @param request request
     */
    CitationControllerApi.prototype.createNewCitationUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createNewCitationUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary createReferralSourceForCitation
     * @param citationId citationId
     * @param request request
     */
    CitationControllerApi.prototype.createReferralSourceForCitationUsingPOST = function (citationId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/referral-source'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling createReferralSourceForCitationUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createReferralSourceForCitationUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary deleteCitationCourt
     * @param citationId citationId
     */
    CitationControllerApi.prototype.deleteCitationCourtUsingDELETE = function (citationId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/court'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling deleteCitationCourtUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary deleteCitation
     * @param citationIdString citationIdString
     */
    CitationControllerApi.prototype.deleteCitationUsingDELETE = function (citationIdString, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationIdString}'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling deleteCitationUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary deleteMissingCourtRecord
     * @param citationId citationId
     */
    CitationControllerApi.prototype.deleteMissingCourtRecordUsingDELETE = function (citationId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/courts/missing'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling deleteMissingCourtRecordUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary dismissCitationsFromContactList
     * @param request request
     */
    CitationControllerApi.prototype.dismissCitationsFromContactListUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/dismiss';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling dismissCitationsFromContactListUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary getAnonymousTicketUploads
     * @param emailAddress emailAddress
     */
    CitationControllerApi.prototype.getAnonymousTicketUploadsUsingGET = function (emailAddress, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{emailAddress}/anonymous-tickets'
            .replace('{' + 'emailAddress' + '}', encodeURIComponent(String(emailAddress)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'emailAddress' is not null or undefined
        if (emailAddress === null || emailAddress === undefined) {
            throw new Error('Required parameter emailAddress was null or undefined when calling getAnonymousTicketUploadsUsingGET.');
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary getCitation
     * @param citationIdString citationIdString
     */
    CitationControllerApi.prototype.getCitationUsingGET = function (citationIdString, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationIdString}'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling getCitationUsingGET.');
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary getListOfCitationsWithMissingCourt
     */
    CitationControllerApi.prototype.getListOfCitationsWithMissingCourtUsingGET = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/courts/missing';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary getNoViolationCitations
     * @param regionCodes regionCodes
     * @param trailingDays trailingDays
     */
    CitationControllerApi.prototype.getNoViolationCitationsUsingGET = function (regionCodes, trailingDays, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/no-violation-uploads';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (regionCodes !== undefined) {
            queryParameters['regionCodes'] = regionCodes;
        }
        if (trailingDays !== undefined) {
            queryParameters['trailingDays'] = trailingDays;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary postMissingCourtForCitation
     * @param citationId citationId
     * @param state state
     */
    CitationControllerApi.prototype.postMissingCourtForCitationUsingPOST = function (citationId, state, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/court/missing'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling postMissingCourtForCitationUsingPOST.');
        }
        // verify required parameter 'state' is not null or undefined
        if (state === null || state === undefined) {
            throw new Error('Required parameter state was null or undefined when calling postMissingCourtForCitationUsingPOST.');
        }
        if (state !== undefined) {
            queryParameters['state'] = state;
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary setCitationContactListFlag
     * @param citationIdString citationIdString
     * @param isDismissed isDismissed
     */
    CitationControllerApi.prototype.setCitationContactListFlagUsingPOST = function (citationIdString, isDismissed, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationIdString}/dismiss'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling setCitationContactListFlagUsingPOST.');
        }
        // verify required parameter 'isDismissed' is not null or undefined
        if (isDismissed === null || isDismissed === undefined) {
            throw new Error('Required parameter isDismissed was null or undefined when calling setCitationContactListFlagUsingPOST.');
        }
        if (isDismissed !== undefined) {
            queryParameters['isDismissed'] = isDismissed;
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary setLockForCitation
     * @param citationId citationId
     * @param isLocked isLocked
     */
    CitationControllerApi.prototype.setLockForCitationUsingPUT = function (citationId, isLocked, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/lock-citation/{isLocked}'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)))
            .replace('{' + 'isLocked' + '}', encodeURIComponent(String(isLocked)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling setLockForCitationUsingPUT.');
        }
        // verify required parameter 'isLocked' is not null or undefined
        if (isLocked === null || isLocked === undefined) {
            throw new Error('Required parameter isLocked was null or undefined when calling setLockForCitationUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary signImageUrl
     * @param request request
     */
    CitationControllerApi.prototype.signImageUrlUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/sign-image-url';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling signImageUrlUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary toggleDeleteCitation
     * @param citationId citationId
     * @param isDeleteRequest isDeleteRequest
     */
    CitationControllerApi.prototype.toggleDeleteCitationUsingDELETE = function (citationId, isDeleteRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/citations/{citationId}'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling toggleDeleteCitationUsingDELETE.');
        }
        // verify required parameter 'isDeleteRequest' is not null or undefined
        if (isDeleteRequest === null || isDeleteRequest === undefined) {
            throw new Error('Required parameter isDeleteRequest was null or undefined when calling toggleDeleteCitationUsingDELETE.');
        }
        if (isDeleteRequest !== undefined) {
            queryParameters['isDeleteRequest'] = isDeleteRequest;
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary updateCitationAddress
     * @param citationId citationId
     * @param request request
     */
    CitationControllerApi.prototype.updateCitationAddressUsingPOST = function (citationId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/address'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling updateCitationAddressUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCitationAddressUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary updateCitationPicture
     * @param citationId citationId
     * @param request request
     */
    CitationControllerApi.prototype.updateCitationPictureUsingPUT = function (citationId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/picture'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling updateCitationPictureUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCitationPictureUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary updateCitation
     * @param citationIdString citationIdString
     * @param updateCitationRequest updateCitationRequest
     */
    CitationControllerApi.prototype.updateCitationUsingPUT = function (citationIdString, updateCitationRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationIdString}'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling updateCitationUsingPUT.');
        }
        // verify required parameter 'updateCitationRequest' is not null or undefined
        if (updateCitationRequest === null || updateCitationRequest === undefined) {
            throw new Error('Required parameter updateCitationRequest was null or undefined when calling updateCitationUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            data: updateCitationRequest,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    CitationControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return CitationControllerApi;
}());
exports.CitationControllerApi = CitationControllerApi;
