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
 * @interface PriceMatchResponse
 */
export interface PriceMatchResponse {
    /**
     *
     * @type {string}
     * @memberof PriceMatchResponse
     */
    matchedLawfirm?: string;
    /**
     *
     * @type {number}
     * @memberof PriceMatchResponse
     */
    matchedPrice?: number;
    /**
     *
     * @type {string}
     * @memberof PriceMatchResponse
     */
    priceMatchStatus?: PriceMatchResponsePriceMatchStatusEnum;
    /**
     *
     * @type {string}
     * @memberof PriceMatchResponse
     */
    referralCode?: string;
}
export declare function PriceMatchResponseFromJSON(json: any): PriceMatchResponse;
export declare function PriceMatchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceMatchResponse;
export declare function PriceMatchResponseToJSON(value?: PriceMatchResponse | null): any;
/**
* @export
* @enum {string}
*/
export declare enum PriceMatchResponsePriceMatchStatusEnum {
    COMPLETE = "COMPLETE",
    PENDING = "PENDING",
    REJECTED = "REJECTED"
}