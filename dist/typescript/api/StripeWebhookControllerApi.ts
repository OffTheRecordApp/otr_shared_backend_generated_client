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

export class StripeWebhookControllerApi {
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
     * @summary handleStripeWebhookForConnectedAccounts
     * @param request request
     */
    public handleStripeWebhookForConnectedAccountsUsingPOST (request?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/api/v1/stripe/acct_15jGdjA1uVHZiLuV/webhook/connected-account';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
     * @summary handleStripeWebhookFromLawfirmAccount
     * @param request request
     */
    public handleStripeWebhookFromLawfirmAccountUsingPOST (request?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/api/v1/stripe/acct_15jGPnDVzhogLb0T/webhook';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
     * @summary handleStripeWebhookFromOTRAccount
     * @param request request
     */
    public handleStripeWebhookFromOTRAccountUsingPOST (request?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
        const localVarPath = this.basePath + '/api/v1/stripe/acct_15jGdjA1uVHZiLuV/webhook';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
