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
 * @interface SaveCasePlanRequest
 */
export interface SaveCasePlanRequest {
    /**
     *
     * @type {string}
     * @memberof SaveCasePlanRequest
     */
    interval?: SaveCasePlanRequestIntervalEnum;
    /**
     *
     * @type {string}
     * @memberof SaveCasePlanRequest
     */
    productId?: string;
}
export declare function SaveCasePlanRequestFromJSON(json: any): SaveCasePlanRequest;
export declare function SaveCasePlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveCasePlanRequest;
export declare function SaveCasePlanRequestToJSON(value?: SaveCasePlanRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum SaveCasePlanRequestIntervalEnum {
    DAILY = "DAILY",
    MONTHLY = "MONTHLY",
    QUARTERLY = "QUARTERLY",
    WEEKLY = "WEEKLY",
    YEARLY = "YEARLY"
}
