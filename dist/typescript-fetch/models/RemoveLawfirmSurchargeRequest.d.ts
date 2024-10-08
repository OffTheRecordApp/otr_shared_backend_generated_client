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
/**
 *
 * @export
 * @interface RemoveLawfirmSurchargeRequest
 */
export interface RemoveLawfirmSurchargeRequest {
    /**
     *
     * @type {Array<number>}
     * @memberof RemoveLawfirmSurchargeRequest
     */
    surchargeIds?: Array<number>;
}
export declare function RemoveLawfirmSurchargeRequestFromJSON(json: any): RemoveLawfirmSurchargeRequest;
export declare function RemoveLawfirmSurchargeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveLawfirmSurchargeRequest;
export declare function RemoveLawfirmSurchargeRequestToJSON(value?: RemoveLawfirmSurchargeRequest | null): any;
