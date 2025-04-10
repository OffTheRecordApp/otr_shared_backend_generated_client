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
import { ListLawfirmSurchargesResponse, RemoveLawfirmSurchargeRequest, SaveLawfirmSurchargesRequest } from '../models';
export interface ListLawfirmSurchargesUsingGETRequest {
    lawfirmId: string;
    featureType?: ListLawfirmSurchargesUsingGETFeatureTypeEnum;
}
export interface RemoveSurchargesUsingDELETERequest {
    lawfirmId: string;
    request: RemoveLawfirmSurchargeRequest;
}
export interface SaveLawfirmSurchargesUsingPOSTRequest {
    lawfirmId: string;
    request: SaveLawfirmSurchargesRequest;
}
/**
 *
 */
export declare class LawfirmSurchargeControllerApi extends runtime.BaseAPI {
    /**
     * listLawfirmSurcharges
     */
    listLawfirmSurchargesUsingGETRaw(requestParameters: ListLawfirmSurchargesUsingGETRequest): Promise<runtime.ApiResponse<ListLawfirmSurchargesResponse>>;
    /**
     * listLawfirmSurcharges
     */
    listLawfirmSurchargesUsingGET(requestParameters: ListLawfirmSurchargesUsingGETRequest): Promise<ListLawfirmSurchargesResponse>;
    /**
     * removeSurcharges
     */
    removeSurchargesUsingDELETERaw(requestParameters: RemoveSurchargesUsingDELETERequest): Promise<runtime.ApiResponse<object>>;
    /**
     * removeSurcharges
     */
    removeSurchargesUsingDELETE(requestParameters: RemoveSurchargesUsingDELETERequest): Promise<object>;
    /**
     * saveLawfirmSurcharges
     */
    saveLawfirmSurchargesUsingPOSTRaw(requestParameters: SaveLawfirmSurchargesUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * saveLawfirmSurcharges
     */
    saveLawfirmSurchargesUsingPOST(requestParameters: SaveLawfirmSurchargesUsingPOSTRequest): Promise<object>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ListLawfirmSurchargesUsingGETFeatureTypeEnum {
    BLACKBOX = "BLACK_BOX",
    FASTLANETEEN = "FASTLANE_TEEN",
    STATEPAGE = "STATE_PAGE",
    STOREFRONT = "STOREFRONT"
}
