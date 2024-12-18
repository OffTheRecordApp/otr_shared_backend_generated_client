/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    CaseViolationPenalty,
    CaseViolationPenaltyFromJSON,
    CaseViolationPenaltyFromJSONTyped,
    CaseViolationPenaltyToJSON,
    MatchCitationResponse,
    MatchCitationResponseFromJSON,
    MatchCitationResponseFromJSONTyped,
    MatchCitationResponseToJSON,
    MatchLawfirmCaseResponse,
    MatchLawfirmCaseResponseFromJSON,
    MatchLawfirmCaseResponseFromJSONTyped,
    MatchLawfirmCaseResponseToJSON,
    SubscriptionDiscountEligibility,
    SubscriptionDiscountEligibilityFromJSON,
    SubscriptionDiscountEligibilityFromJSONTyped,
    SubscriptionDiscountEligibilityToJSON,
} from './';

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

export function MatchInnerCaseResponseFromJSON(json: any): MatchInnerCaseResponse {
    return MatchInnerCaseResponseFromJSONTyped(json, false);
}

export function MatchInnerCaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchInnerCaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'citation': !exists(json, 'citation') ? undefined : MatchCitationResponseFromJSON(json['citation']),
        'lawfirmCaseDecision': !exists(json, 'lawfirmCaseDecision') ? undefined : MatchLawfirmCaseResponseFromJSON(json['lawfirmCaseDecision']),
        'lawfirmCodeApplied': !exists(json, 'lawfirmCodeApplied') ? undefined : json['lawfirmCodeApplied'],
        'maxPenalties': !exists(json, 'maxPenalties') ? undefined : ((json['maxPenalties'] as Array<any>).map(CaseViolationPenaltyFromJSON)),
        'referralCodeOwner': !exists(json, 'referralCodeOwner') ? undefined : json['referralCodeOwner'],
        'refundEligibility': !exists(json, 'refundEligibility') ? undefined : json['refundEligibility'],
        'subscriptionDiscountEligibility': !exists(json, 'subscriptionDiscountEligibility') ? undefined : SubscriptionDiscountEligibilityFromJSON(json['subscriptionDiscountEligibility']),
        'uiReasonMsg': !exists(json, 'uiReasonMsg') ? undefined : json['uiReasonMsg'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function MatchInnerCaseResponseToJSON(value?: MatchInnerCaseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseId': value.caseId,
        'citation': MatchCitationResponseToJSON(value.citation),
        'lawfirmCaseDecision': MatchLawfirmCaseResponseToJSON(value.lawfirmCaseDecision),
        'lawfirmCodeApplied': value.lawfirmCodeApplied,
        'maxPenalties': value.maxPenalties === undefined ? undefined : ((value.maxPenalties as Array<any>).map(CaseViolationPenaltyToJSON)),
        'referralCodeOwner': value.referralCodeOwner,
        'refundEligibility': value.refundEligibility,
        'subscriptionDiscountEligibility': SubscriptionDiscountEligibilityToJSON(value.subscriptionDiscountEligibility),
        'uiReasonMsg': value.uiReasonMsg,
        'userId': value.userId,
    };
}

/**
* @export
* @enum {string}
*/
export enum MatchInnerCaseResponseReferralCodeOwnerEnum {
    LAWFIRM = 'LAWFIRM',
    OTR = 'OTR'
}
/**
* @export
* @enum {string}
*/
export enum MatchInnerCaseResponseRefundEligibilityEnum {
    FULLREFUND = 'FULL_REFUND',
    NOREFUND = 'NO_REFUND'
}


