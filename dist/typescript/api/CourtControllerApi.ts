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

export class CourtControllerApi {
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
     * @summary addCourt
     * @param request request
     */
    public addCourtUsingPOST (request: models.AddCourtRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/courts';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addCourtUsingPOST.');
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
     * @summary findCourts
     * @param citationId citationId
     * @param city city
     * @param countryCode countryCode
     * @param county county
     * @param length length
     * @param offset offset
     * @param q q
     * @param regionCode regionCode
     * @param state state
     */
    public findCourtsUsingGET (citationId?: number, city?: string, countryCode?: string, county?: string, length?: number, offset?: number, q?: string, regionCode?: string, state?: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY', extraHttpRequestParams?: any ) : ng.IHttpPromise<models.FindsCourtsResponse> {
        const localVarPath = this.basePath + '/api/v2/courts/traffic';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (citationId !== undefined) {
            queryParameters['citationId'] = citationId;
        }

        if (city !== undefined) {
            queryParameters['city'] = city;
        }

        if (countryCode !== undefined) {
            queryParameters['countryCode'] = countryCode;
        }

        if (county !== undefined) {
            queryParameters['county'] = county;
        }

        if (length !== undefined) {
            queryParameters['length'] = length;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (q !== undefined) {
            queryParameters['q'] = q;
        }

        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
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
     * @summary findCourtsWithNoCoverage
     * @param countryCode countryCode
     * @param countyId countyId
     * @param regionCode regionCode
     * @param trailingDays trailingDays
     */
    public findCourtsWithNoCoverageUsingGET (countryCode?: string, countyId?: number, regionCode?: string, trailingDays?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.FindCourtsWithNoCoverageResponse> {
        const localVarPath = this.basePath + '/api/v1/courts/no-coverage';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (countryCode !== undefined) {
            queryParameters['countryCode'] = countryCode;
        }

        if (countyId !== undefined) {
            queryParameters['countyId'] = countyId;
        }

        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }

        if (trailingDays !== undefined) {
            queryParameters['trailingDays'] = trailingDays;
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
     * @summary getCourt
     * @param courtId courtId
     */
    public getCourtUsingGET (courtId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCourtResponse> {
        const localVarPath = this.basePath + '/api/v1/courts/{courtId}'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new Error('Required parameter courtId was null or undefined when calling getCourtUsingGET.');
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
     * @summary searchCourts
     * @param citationId citationId
     * @param city city
     * @param countryCode countryCode
     * @param county county
     * @param length length
     * @param offset offset
     * @param q q
     * @param regionCode regionCode
     * @param state state
     */
    public searchCourtsUsingGET (citationId?: number, city?: string, countryCode?: string, county?: string, length?: number, offset?: number, q?: string, regionCode?: string, state?: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY', extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCourtsByQueryResponse> {
        const localVarPath = this.basePath + '/api/v1/courts/traffic';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (citationId !== undefined) {
            queryParameters['citationId'] = citationId;
        }

        if (city !== undefined) {
            queryParameters['city'] = city;
        }

        if (countryCode !== undefined) {
            queryParameters['countryCode'] = countryCode;
        }

        if (county !== undefined) {
            queryParameters['county'] = county;
        }

        if (length !== undefined) {
            queryParameters['length'] = length;
        }

        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }

        if (q !== undefined) {
            queryParameters['q'] = q;
        }

        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
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
     * @summary updateCourtAddress
     * @param addressId addressId
     * @param courtId courtId
     * @param request request
     */
    public updateCourtAddressUsingPUT (addressId: number, courtId: number, request: models.UpsertAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/courts/{courtId}/addresses/{addressId}'
            .replace('{' + 'addressId' + '}', encodeURIComponent(String(addressId)))
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'addressId' is not null or undefined
        if (addressId === null || addressId === undefined) {
            throw new Error('Required parameter addressId was null or undefined when calling updateCourtAddressUsingPUT.');
        }

        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new Error('Required parameter courtId was null or undefined when calling updateCourtAddressUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCourtAddressUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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
     * @summary updateCourt
     * @param courtId courtId
     * @param request request
     */
    public updateCourtUsingPUT (courtId: number, request: models.UpdateCourtRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/courts/{courtId}'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new Error('Required parameter courtId was null or undefined when calling updateCourtUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCourtUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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
