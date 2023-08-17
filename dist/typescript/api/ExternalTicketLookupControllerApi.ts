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

export class ExternalTicketLookupControllerApi {
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
     * @summary getExternalTickets
     * @param countyId countyId
     * @param regionCode regionCode
     * @param attempts attempts
     * @param citationId citationId
     * @param dateOfBirth dateOfBirth
     * @param driversLicenseId driversLicenseId
     * @param lastName lastName
     * @param organizationName organizationName
     * @param searchType searchType
     * @param searchValue searchValue
     * @param userId userId
     */
    public getExternalTicketsUsingGET (countyId: number, regionCode: string, attempts?: number, citationId?: string, dateOfBirth?: string, driversLicenseId?: string, lastName?: string, organizationName?: string, searchType?: string, searchValue?: string, userId?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetExternalTicketsResponse> {
        const localVarPath = this.basePath + '/api/v1/external-tickets';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countyId' is not null or undefined
        if (countyId === null || countyId === undefined) {
            throw new Error('Required parameter countyId was null or undefined when calling getExternalTicketsUsingGET.');
        }

        // verify required parameter 'regionCode' is not null or undefined
        if (regionCode === null || regionCode === undefined) {
            throw new Error('Required parameter regionCode was null or undefined when calling getExternalTicketsUsingGET.');
        }

        if (attempts !== undefined) {
            queryParameters['attempts'] = attempts;
        }

        if (citationId !== undefined) {
            queryParameters['citationId'] = citationId;
        }

        if (countyId !== undefined) {
            queryParameters['countyId'] = countyId;
        }

        if (dateOfBirth !== undefined) {
            queryParameters['dateOfBirth'] = dateOfBirth;
        }

        if (driversLicenseId !== undefined) {
            queryParameters['driversLicenseId'] = driversLicenseId;
        }

        if (lastName !== undefined) {
            queryParameters['lastName'] = lastName;
        }

        if (organizationName !== undefined) {
            queryParameters['organizationName'] = organizationName;
        }

        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }

        if (searchType !== undefined) {
            queryParameters['searchType'] = searchType;
        }

        if (searchValue !== undefined) {
            queryParameters['searchValue'] = searchValue;
        }

        if (userId !== undefined) {
            queryParameters['userId'] = userId;
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
     * @summary getInputParameters
     * @param regionCode regionCode
     */
    public getInputParametersUsingGET (regionCode: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetExternalTicketInputParamsResponse> {
        const localVarPath = this.basePath + '/api/v1/external-tickets/input-parameters';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'regionCode' is not null or undefined
        if (regionCode === null || regionCode === undefined) {
            throw new Error('Required parameter regionCode was null or undefined when calling getInputParametersUsingGET.');
        }

        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
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
}
