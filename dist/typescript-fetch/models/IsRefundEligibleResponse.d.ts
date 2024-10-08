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
 * @interface IsRefundEligibleResponse
 */
export interface IsRefundEligibleResponse {
    /**
     *
     * @type {string}
     * @memberof IsRefundEligibleResponse
     */
    refundEligibilityType?: IsRefundEligibleResponseRefundEligibilityTypeEnum;
    /**
     *
     * @type {string}
     * @memberof IsRefundEligibleResponse
     */
    uiReasonMsg?: string;
}
export declare function IsRefundEligibleResponseFromJSON(json: any): IsRefundEligibleResponse;
export declare function IsRefundEligibleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsRefundEligibleResponse;
export declare function IsRefundEligibleResponseToJSON(value?: IsRefundEligibleResponse | null): any;
/**
* @export
* @enum {string}
*/
export declare enum IsRefundEligibleResponseRefundEligibilityTypeEnum {
    FULLREFUND = "FULL_REFUND",
    NOREFUND = "NO_REFUND"
}
