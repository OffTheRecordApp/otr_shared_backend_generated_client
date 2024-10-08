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
import { CaseViolationPenalty, MatchCitationResponse, MatchLawfirmCaseResponse, SubscriptionDiscountEligibility } from './';
/**
 *
 * @export
 * @interface MatchInnerCaseResponse
 */
export interface MatchInnerCaseResponse {
    /**
     *
     * @type {string}
     * @memberof MatchInnerCaseResponse
     */
    caseId?: string;
    /**
     *
     * @type {MatchCitationResponse}
     * @memberof MatchInnerCaseResponse
     */
    citation?: MatchCitationResponse;
    /**
     *
     * @type {MatchLawfirmCaseResponse}
     * @memberof MatchInnerCaseResponse
     */
    lawfirmCaseDecision?: MatchLawfirmCaseResponse;
    /**
     *
     * @type {boolean}
     * @memberof MatchInnerCaseResponse
     */
    lawfirmCodeApplied?: boolean;
    /**
     *
     * @type {Array<CaseViolationPenalty>}
     * @memberof MatchInnerCaseResponse
     */
    maxPenalties?: Array<CaseViolationPenalty>;
    /**
     *
     * @type {string}
     * @memberof MatchInnerCaseResponse
     */
    referralCodeOwner?: MatchInnerCaseResponseReferralCodeOwnerEnum;
    /**
     *
     * @type {string}
     * @memberof MatchInnerCaseResponse
     */
    refundEligibility?: MatchInnerCaseResponseRefundEligibilityEnum;
    /**
     *
     * @type {SubscriptionDiscountEligibility}
     * @memberof MatchInnerCaseResponse
     */
    subscriptionDiscountEligibility?: SubscriptionDiscountEligibility;
    /**
     *
     * @type {string}
     * @memberof MatchInnerCaseResponse
     */
    uiReasonMsg?: string;
    /**
     *
     * @type {number}
     * @memberof MatchInnerCaseResponse
     */
    userId?: number;
}
export declare function MatchInnerCaseResponseFromJSON(json: any): MatchInnerCaseResponse;
export declare function MatchInnerCaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchInnerCaseResponse;
export declare function MatchInnerCaseResponseToJSON(value?: MatchInnerCaseResponse | null): any;
/**
* @export
* @enum {string}
*/
export declare enum MatchInnerCaseResponseReferralCodeOwnerEnum {
    LAWFIRM = "LAWFIRM",
    OTR = "OTR"
}
/**
* @export
* @enum {string}
*/
export declare enum MatchInnerCaseResponseRefundEligibilityEnum {
    FULLREFUND = "FULL_REFUND",
    NOREFUND = "NO_REFUND"
}
