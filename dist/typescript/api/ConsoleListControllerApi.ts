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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class ConsoleListControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary findDisputes
     * @param request request
     */
    public findDisputesUsingPOST (request: models.FindDisputesRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.FindChargeDisputesResponse> {
        const localVarPath = this.basePath + '/api/v1/console/disputes';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling findDisputesUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCasesWithCoverageObtained
     * @param request request
     */
    public getCasesWithCoverageObtainedUsingPOST (request: models.GenericAdminListRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCasesWithCoverageObtainedResponse> {
        const localVarPath = this.basePath + '/api/v1/console/cases-with-coverage-obtained';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCasesWithCoverageObtainedUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCasesWithMissingLawfirmPayouts
     * @param request request
     */
    public getCasesWithMissingLawfirmPayoutsUsingPOST (request: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCasesWithMissingLawfirmPayoutsResponse> {
        const localVarPath = this.basePath + '/api/v1/console/cases/missing-lawfirm-payouts';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCasesWithMissingLawfirmPayoutsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCasesWithOverduePayments
     * @param request request
     */
    public getCasesWithOverduePaymentsUsingPOST (request: models.GetCasesWithUncapturedChargesRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCasesWithOverduePaymentsResponse> {
        const localVarPath = this.basePath + '/api/v1/console/cases/unpaid';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCasesWithOverduePaymentsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCitationPhoneLeads
     * @param request request
     */
    public getCitationPhoneLeadsUsingPOST (request: models.GetCitationPhoneLeadsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCitationPhoneLeadsResponse> {
        const localVarPath = this.basePath + '/api/v1/console/citation-phone-leads';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCitationPhoneLeadsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCitationsWithMissingFields
     * @param request request
     */
    public getCitationsWithMissingFieldsUsingPOST (request: models.GetCitationsWithMissingFieldsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCitationsWithMissingFieldsResponse> {
        const localVarPath = this.basePath + '/api/v1/console/citations-with-missing-fields';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCitationsWithMissingFieldsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCitationsWithMissingFieldsV2
     * @param request request
     */
    public getCitationsWithMissingFieldsV2UsingPOST (request: models.GetCitationsWithMissingFieldsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCitationsWithMissingFieldsResponse> {
        const localVarPath = this.basePath + '/api/v2/console/citations-with-missing-fields';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCitationsWithMissingFieldsV2UsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getClientConfirmedUnpaidCases
     * @param request request
     */
    public getClientConfirmedUnpaidCasesUsingPOST (request: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetClientConfirmedUnpaidCasesResponse> {
        const localVarPath = this.basePath + '/api/v1/console/cases/client-confirmed-unpaid';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getClientConfirmedUnpaidCasesUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getDeclinedCases
     * @param request request
     */
    public getDeclinedCasesUsingPOST (request: models.GetDeclinedCasesRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetDeclinedCasesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/declined';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getDeclinedCasesUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getInvalidCasesWithStripeCharge
     * @param request request
     */
    public getInvalidCasesWithStripeChargeUsingPOST (request: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetInvalidCasesWithStripeChargeResponse> {
        const localVarPath = this.basePath + '/api/v1/console/cases/invalid-with-charge';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getInvalidCasesWithStripeChargeUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getLostCasesWithTransferNotReversed
     * @param request request
     */
    public getLostCasesWithTransferNotReversedUsingPOST (request: models.GetLostCasesWithTransferNotReversedRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetLostCasesWithTransferNotReversedResponse> {
        const localVarPath = this.basePath + '/api/v1/console/cases/lost/not-reversed';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getLostCasesWithTransferNotReversedUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getPendingCases
     * @param request request
     */
    public getPendingCasesUsingPOST (request: object, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetPendingCasesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/pending';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getPendingCasesUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getPendingTicketReviews
     * @param request request
     */
    public getPendingTicketReviewsUsingPOST (request: models.GetPendingTicketReviewsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetPendingTicketReviewsResponse> {
        const localVarPath = this.basePath + '/api/v1/console/ticket-review-requests/pending';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getPendingTicketReviewsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary listBillingSubscribers
     * @param length length
     * @param page page
     * @param start start
     * @param statuses statuses
     * @param request request
     */
    public listBillingSubscribersUsingPOST (length?: number, page?: number, start?: string, statuses?: 'ACTIVE' | 'CANCELED' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'IN_TRIAL_PERIOD' | 'PAST_DUE' | 'UNKNOWN' | 'UNPAID', request?: models.ListBillingSubscribersRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListBillingSubscribersResponse> {
        const localVarPath = this.basePath + '/api/v1/billing/subscribers';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (length !== undefined) {
            queryParameters['length'] = length;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        if (start !== undefined) {
            queryParameters['start'] = start;
        }

        if (statuses !== undefined) {
            queryParameters['statuses'] = statuses;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary listLawfirmLeads
     * @param request request
     */
    public listLawfirmLeadsUsingPOST (request: models.GetLawfirmLeadsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetLawfirmLeadsResponse> {
        const localVarPath = this.basePath + '/api/v1/console/lawfirms/leads';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listLawfirmLeadsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary listPotentialCustomers
     * @param request request
     */
    public listPotentialCustomersUsingPOST (request: models.GetPotentialCustomersRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetPotentialCustomersResponse> {
        const localVarPath = this.basePath + '/api/v1/console/potential-customers';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listPotentialCustomersUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
