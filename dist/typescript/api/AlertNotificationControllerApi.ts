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

export class AlertNotificationControllerApi {
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
     * @summary getAlerts
     * @param userId userId
     */
    public getAlertsUsingGET (userId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AlertNotificationResponse> {
        const localVarPath = this.basePath + '/api/v1/alerts/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getAlertsUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
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
     * @summary markAlertAsRead
     * @param alertId alertId
     */
    public markAlertAsReadUsingDELETE (alertId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AlertNotificationResponse> {
        const localVarPath = this.basePath + '/api/v1/alerts/{alertId}'
            .replace('{' + 'alertId' + '}', encodeURIComponent(String(alertId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'alertId' is not null or undefined
        if (alertId === null || alertId === undefined) {
            throw new Error('Required parameter alertId was null or undefined when calling markAlertAsReadUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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