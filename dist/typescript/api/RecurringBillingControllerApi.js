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
export class RecurringBillingControllerApi {
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
     * @summary cancelBillingSubscription
     * @param id id
     * @param userId userId
     * @param isProrated isProrated
     */
    cancelBillingSubscriptionUsingDELETE(id, userId, isProrated, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
        }
        if (isProrated !== undefined) {
            queryParameters['isProrated'] = isProrated;
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
     * @summary clearBillingProductOptions
     * @param caseId caseId
     */
    clearBillingProductOptionsUsingDELETE(caseId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/billing/cases/{caseId}/products'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling clearBillingProductOptionsUsingDELETE.');
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
     * @summary createBillingSubscription
     * @param userId userId
     * @param request request
     */
    createBillingSubscriptionUsingPOST(userId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling createBillingSubscriptionUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createBillingSubscriptionUsingPOST.');
        }
        let httpRequestParams = {
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
    }
    /**
     *
     * @summary listBillingProducts
     * @param active active
     * @param audience audience
     * @param limit limit
     * @param userId userId
     */
    listBillingProductsUsingGET(active, audience, limit, userId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/billing/products';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        if (active !== undefined) {
            queryParameters['active'] = active;
        }
        if (audience !== undefined) {
            queryParameters['audience'] = audience;
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (userId !== undefined) {
            queryParameters['userId'] = userId;
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
     * @summary listBillingSubscriptions
     * @param userId userId
     * @param includeInactive includeInactive
     */
    listBillingSubscriptionsUsingGET(userId, includeInactive, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listBillingSubscriptionsUsingGET.');
        }
        if (includeInactive !== undefined) {
            queryParameters['includeInactive'] = includeInactive;
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
     * @summary listSubscriptionInvoices
     * @param id id
     * @param userId userId
     * @param limit limit
     */
    listSubscriptionInvoicesUsingGET(id, userId, limit, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions/{id}/invoices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listSubscriptionInvoicesUsingGET.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listSubscriptionInvoicesUsingGET.');
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
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
     * @summary saveBillingProductOption
     * @param caseId caseId
     * @param productId productId
     * @param request request
     */
    saveBillingProductOptionUsingPOST(caseId, productId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/billing/cases/{caseId}/products/{productId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'productId' + '}', encodeURIComponent(String(productId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling saveBillingProductOptionUsingPOST.');
        }
        // verify required parameter 'productId' is not null or undefined
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling saveBillingProductOptionUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveBillingProductOptionUsingPOST.');
        }
        let httpRequestParams = {
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
    }
}
RecurringBillingControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
