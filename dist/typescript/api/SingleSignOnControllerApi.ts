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

export class SingleSignOnControllerApi {
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
     * @summary loginWithSSO
     * @param brandId brandId
     * @param email email
     * @param isAdmin isAdmin
     * @param password password
     */
    public loginWithSSOUsingPOST (brandId: string, email: string, isAdmin: boolean, password: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SingleSignOnResponse> {
        const localVarPath = this.basePath + '/api/v1/authentication/sso/login';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new Error('Required parameter brandId was null or undefined when calling loginWithSSOUsingPOST.');
        }

        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling loginWithSSOUsingPOST.');
        }

        // verify required parameter 'isAdmin' is not null or undefined
        if (isAdmin === null || isAdmin === undefined) {
            throw new Error('Required parameter isAdmin was null or undefined when calling loginWithSSOUsingPOST.');
        }

        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling loginWithSSOUsingPOST.');
        }

        if (brandId !== undefined) {
            queryParameters['brandId'] = brandId;
        }

        if (email !== undefined) {
            queryParameters['email'] = email;
        }

        if (isAdmin !== undefined) {
            queryParameters['isAdmin'] = isAdmin;
        }

        if (password !== undefined) {
            queryParameters['password'] = password;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}