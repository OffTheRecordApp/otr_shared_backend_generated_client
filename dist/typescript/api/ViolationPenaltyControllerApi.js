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
/* tslint:disable:no-unused-variable member-ordering */
export class ViolationPenaltyControllerApi {
    constructor($http, $httpParamSerializer, basePath) {
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
     * @summary getPenaltiesByViolation
     * @param violationId violationId
     * @param flavor flavor
     */
    getPenaltiesByViolationUsingGET(violationId, flavor, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/violations/{violationId}/penalties'
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling getPenaltiesByViolationUsingGET.');
        }
        if (flavor !== undefined) {
            queryParameters['flavor'] = flavor;
        }
        let httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary getPenaltyTypes
     */
    getPenaltyTypesUsingGET(extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/violations/penalties';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        let httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary removePenalty
     * @param penaltyTypeId penaltyTypeId
     * @param violationId violationId
     */
    removePenaltyUsingDELETE(penaltyTypeId, violationId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}'
            .replace('{' + 'penaltyTypeId' + '}', encodeURIComponent(String(penaltyTypeId)))
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'penaltyTypeId' is not null or undefined
        if (penaltyTypeId === null || penaltyTypeId === undefined) {
            throw new Error('Required parameter penaltyTypeId was null or undefined when calling removePenaltyUsingDELETE.');
        }
        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling removePenaltyUsingDELETE.');
        }
        let httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary upsertPenalty
     * @param violationId violationId
     * @param penaltyToAdd penaltyToAdd
     */
    upsertPenaltyUsingPOST(violationId, penaltyToAdd, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/violations/{violationId}/penalties'
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling upsertPenaltyUsingPOST.');
        }
        // verify required parameter 'penaltyToAdd' is not null or undefined
        if (penaltyToAdd === null || penaltyToAdd === undefined) {
            throw new Error('Required parameter penaltyToAdd was null or undefined when calling upsertPenaltyUsingPOST.');
        }
        let httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: penaltyToAdd,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
}
ViolationPenaltyControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
