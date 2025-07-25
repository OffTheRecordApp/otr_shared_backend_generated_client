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
export declare class UtilityControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary backfillLawfirmTransactionRecords
     * @param request request
     */
    backfillLawfirmTransactionRecordsUsingPOST(request: models.BackfillLawfirmTransactionRecordsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.BackfillLawfirmTransactionRecordsResponse>;
    /**
     *
     * @summary getStatus
     */
    getStatusUsingGET(extraHttpRequestParams?: any): ng.IHttpPromise<{
        [key: string]: boolean;
    }>;
    /**
     *
     * @summary setStatus
     * @param lawfirmTransactionsStatus lawfirmTransactionsStatus
     * @param syncStatus syncStatus
     */
    setStatusUsingPOST(lawfirmTransactionsStatus?: boolean, syncStatus?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<{
        [key: string]: boolean;
    }>;
}
