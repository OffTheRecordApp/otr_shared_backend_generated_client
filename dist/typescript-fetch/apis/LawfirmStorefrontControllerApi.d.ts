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
import * as runtime from '../runtime';
import { ListLawfirmStorefrontsResponse } from '../models';
export interface ListLawfirmStorefrontsUsingGETRequest {
    page?: number;
    regionCode?: string;
    size?: number;
}
/**
 *
 */
export declare class LawfirmStorefrontControllerApi extends runtime.BaseAPI {
    /**
     * listLawfirmStorefronts
     */
    listLawfirmStorefrontsUsingGETRaw(requestParameters: ListLawfirmStorefrontsUsingGETRequest): Promise<runtime.ApiResponse<ListLawfirmStorefrontsResponse>>;
    /**
     * listLawfirmStorefronts
     */
    listLawfirmStorefrontsUsingGET(requestParameters: ListLawfirmStorefrontsUsingGETRequest): Promise<ListLawfirmStorefrontsResponse>;
}
