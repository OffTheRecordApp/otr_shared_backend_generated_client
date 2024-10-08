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
import { ReferralResponse } from './';
/**
 *
 * @export
 * @interface GetReferralsHistoryResponse
 */
export interface GetReferralsHistoryResponse {
    /**
     *
     * @type {Array<ReferralResponse>}
     * @memberof GetReferralsHistoryResponse
     */
    referrals?: Array<ReferralResponse>;
}
export declare function GetReferralsHistoryResponseFromJSON(json: any): GetReferralsHistoryResponse;
export declare function GetReferralsHistoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetReferralsHistoryResponse;
export declare function GetReferralsHistoryResponseToJSON(value?: GetReferralsHistoryResponse | null): any;
