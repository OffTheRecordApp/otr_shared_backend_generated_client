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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class AddressControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary getCountryList
     */
    getCountryListUsingGET(extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCountryListResponse>;
    /**
     *
     * @summary getCountryRegions
     * @param countryCode countryCode
     */
    getCountryRegionsUsingGET(countryCode: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCountryRegionsResponse>;
    /**
     *
     * @summary getLocation
     * @param zipCode zipCode
     * @param countryCode countryCode
     */
    getLocationUsingGET(zipCode: string, countryCode?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetLocationResponse>;
}
