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
    LineItem,
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface LawfirmRatesResponse
 */
export interface LawfirmRatesResponse {
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmRatesResponse
     */
    acceptsPaymentPlans?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LawfirmRatesResponse
     */
    capacityLeft?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmRatesResponse
     */
    chosenLawfirm?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LawfirmRatesResponse
     */
    feeLevel?: LawfirmRatesResponseFeeLevelEnum;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmRatesResponse
     */
    handlesAccidents?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmRatesResponse
     */
    handlesPastDue?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LawfirmRatesResponse
     */
    ineligibleMatchReasons?: Array<LawfirmRatesResponseIneligibleMatchReasonsEnum>;
    /**
     * 
     * @type {number}
     * @memberof LawfirmRatesResponse
     */
    lawfirmId?: number;
    /**
     * 
     * @type {string}
     * @memberof LawfirmRatesResponse
     */
    lawfirmName?: string;
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof LawfirmRatesResponse
     */
    lineItems?: Array<LineItem>;
    /**
     * 
     * @type {string}
     * @memberof LawfirmRatesResponse
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof LawfirmRatesResponse
     */
    primaryEmailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof LawfirmRatesResponse
     */
    profilePictureUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof LawfirmRatesResponse
     */
    rank?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmRatesResponse
     */
    refundEligible?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LawfirmRatesResponse
     */
    successRate?: number;
    /**
     * 
     * @type {number}
     * @memberof LawfirmRatesResponse
     */
    totalLegalFee?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmRatesResponse
     */
    vacationModeOn?: boolean;
}

export function LawfirmRatesResponseFromJSON(json: any): LawfirmRatesResponse {
    return LawfirmRatesResponseFromJSONTyped(json, false);
}

export function LawfirmRatesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmRatesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acceptsPaymentPlans': !exists(json, 'acceptsPaymentPlans') ? undefined : json['acceptsPaymentPlans'],
        'capacityLeft': !exists(json, 'capacityLeft') ? undefined : json['capacityLeft'],
        'chosenLawfirm': !exists(json, 'chosenLawfirm') ? undefined : json['chosenLawfirm'],
        'feeLevel': !exists(json, 'feeLevel') ? undefined : json['feeLevel'],
        'handlesAccidents': !exists(json, 'handlesAccidents') ? undefined : json['handlesAccidents'],
        'handlesPastDue': !exists(json, 'handlesPastDue') ? undefined : json['handlesPastDue'],
        'ineligibleMatchReasons': !exists(json, 'ineligibleMatchReasons') ? undefined : json['ineligibleMatchReasons'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lineItems': !exists(json, 'lineItems') ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'primaryEmailAddress': !exists(json, 'primaryEmailAddress') ? undefined : json['primaryEmailAddress'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'refundEligible': !exists(json, 'refundEligible') ? undefined : json['refundEligible'],
        'successRate': !exists(json, 'successRate') ? undefined : json['successRate'],
        'totalLegalFee': !exists(json, 'totalLegalFee') ? undefined : json['totalLegalFee'],
        'vacationModeOn': !exists(json, 'vacationModeOn') ? undefined : json['vacationModeOn'],
    };
}

export function LawfirmRatesResponseToJSON(value?: LawfirmRatesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acceptsPaymentPlans': value.acceptsPaymentPlans,
        'capacityLeft': value.capacityLeft,
        'chosenLawfirm': value.chosenLawfirm,
        'feeLevel': value.feeLevel,
        'handlesAccidents': value.handlesAccidents,
        'handlesPastDue': value.handlesPastDue,
        'ineligibleMatchReasons': value.ineligibleMatchReasons,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'lineItems': value.lineItems === undefined ? undefined : ((value.lineItems as Array<any>).map(LineItemToJSON)),
        'phoneNumber': value.phoneNumber,
        'primaryEmailAddress': value.primaryEmailAddress,
        'profilePictureUrl': value.profilePictureUrl,
        'rank': value.rank,
        'refundEligible': value.refundEligible,
        'successRate': value.successRate,
        'totalLegalFee': value.totalLegalFee,
        'vacationModeOn': value.vacationModeOn,
    };
}

/**
* @export
* @enum {string}
*/
export enum LawfirmRatesResponseFeeLevelEnum {
    ACCOUNTCLASSFEE = 'ACCOUNT_CLASS_FEE',
    ACCOUNTVIOLATIONFEE = 'ACCOUNT_VIOLATION_FEE',
    COURTCLASSFEE = 'COURT_CLASS_FEE',
    COURTVIOLATIONFEE = 'COURT_VIOLATION_FEE'
}
/**
* @export
* @enum {string}
*/
export enum LawfirmRatesResponseIneligibleMatchReasonsEnum {
    CDLMISMATCH = 'CDL_MISMATCH',
    DAILYCAPACITYBREACHED = 'DAILY_CAPACITY_BREACHED',
    ONVACATION = 'ON_VACATION',
    OUTOFCAPACITY = 'OUT_OF_CAPACITY',
    OUTPRICED = 'OUT_PRICED',
    OUTRANKED = 'OUT_RANKED'
}

