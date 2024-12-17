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
    TimestampReq,
    TimestampReqFromJSON,
    TimestampReqFromJSONTyped,
    TimestampReqToJSON,
} from './';

/**
 * 
 * @export
 * @interface LawfirmSettingsDomainReq
 */
export interface LawfirmSettingsDomainReq {
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    acceptsAccidents?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    acceptsPastDue?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    acceptsPaymentPlans?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    allowReviewReplies?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    defaultTrafficTicketFee?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isDirectoryOn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isStoreFrontOn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isStorefrontWidgetOn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isVacationMode?: boolean;
    /**
     * 
     * @type {TimestampReq}
     * @memberof LawfirmSettingsDomainReq
     */
    latestCaseAssignmentDateUtc?: TimestampReq;
    /**
     * 
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    maxCaseCapacity?: number;
    /**
     * 
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    maxCaseCapacityPerDay?: number;
    /**
     * 
     * @type {string}
     * @memberof LawfirmSettingsDomainReq
     */
    mvsRecipient?: string;
    /**
     * 
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    referralFee?: number;
    /**
     * 
     * @type {string}
     * @memberof LawfirmSettingsDomainReq
     */
    referralFeeType?: LawfirmSettingsDomainReqReferralFeeTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof LawfirmSettingsDomainReq
     */
    vacationModeEndDateUtc?: Date;
    /**
     * 
     * @type {string}
     * @memberof LawfirmSettingsDomainReq
     */
    vacationModeReason?: string;
}

export function LawfirmSettingsDomainReqFromJSON(json: any): LawfirmSettingsDomainReq {
    return LawfirmSettingsDomainReqFromJSONTyped(json, false);
}

export function LawfirmSettingsDomainReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmSettingsDomainReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acceptsAccidents': !exists(json, 'acceptsAccidents') ? undefined : json['acceptsAccidents'],
        'acceptsPastDue': !exists(json, 'acceptsPastDue') ? undefined : json['acceptsPastDue'],
        'acceptsPaymentPlans': !exists(json, 'acceptsPaymentPlans') ? undefined : json['acceptsPaymentPlans'],
        'allowReviewReplies': !exists(json, 'allowReviewReplies') ? undefined : json['allowReviewReplies'],
        'defaultTrafficTicketFee': !exists(json, 'defaultTrafficTicketFee') ? undefined : json['defaultTrafficTicketFee'],
        'isDirectoryOn': !exists(json, 'isDirectoryOn') ? undefined : json['isDirectoryOn'],
        'isStoreFrontOn': !exists(json, 'isStoreFrontOn') ? undefined : json['isStoreFrontOn'],
        'isStorefrontWidgetOn': !exists(json, 'isStorefrontWidgetOn') ? undefined : json['isStorefrontWidgetOn'],
        'isVacationMode': !exists(json, 'isVacationMode') ? undefined : json['isVacationMode'],
        'latestCaseAssignmentDateUtc': !exists(json, 'latestCaseAssignmentDateUtc') ? undefined : TimestampReqFromJSON(json['latestCaseAssignmentDateUtc']),
        'maxCaseCapacity': !exists(json, 'maxCaseCapacity') ? undefined : json['maxCaseCapacity'],
        'maxCaseCapacityPerDay': !exists(json, 'maxCaseCapacityPerDay') ? undefined : json['maxCaseCapacityPerDay'],
        'mvsRecipient': !exists(json, 'mvsRecipient') ? undefined : json['mvsRecipient'],
        'referralFee': !exists(json, 'referralFee') ? undefined : json['referralFee'],
        'referralFeeType': !exists(json, 'referralFeeType') ? undefined : json['referralFeeType'],
        'vacationModeEndDateUtc': !exists(json, 'vacationModeEndDateUtc') ? undefined : (new Date(json['vacationModeEndDateUtc'])),
        'vacationModeReason': !exists(json, 'vacationModeReason') ? undefined : json['vacationModeReason'],
    };
}

export function LawfirmSettingsDomainReqToJSON(value?: LawfirmSettingsDomainReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acceptsAccidents': value.acceptsAccidents,
        'acceptsPastDue': value.acceptsPastDue,
        'acceptsPaymentPlans': value.acceptsPaymentPlans,
        'allowReviewReplies': value.allowReviewReplies,
        'defaultTrafficTicketFee': value.defaultTrafficTicketFee,
        'isDirectoryOn': value.isDirectoryOn,
        'isStoreFrontOn': value.isStoreFrontOn,
        'isStorefrontWidgetOn': value.isStorefrontWidgetOn,
        'isVacationMode': value.isVacationMode,
        'latestCaseAssignmentDateUtc': TimestampReqToJSON(value.latestCaseAssignmentDateUtc),
        'maxCaseCapacity': value.maxCaseCapacity,
        'maxCaseCapacityPerDay': value.maxCaseCapacityPerDay,
        'mvsRecipient': value.mvsRecipient,
        'referralFee': value.referralFee,
        'referralFeeType': value.referralFeeType,
        'vacationModeEndDateUtc': value.vacationModeEndDateUtc === undefined ? undefined : (value.vacationModeEndDateUtc.toISOString()),
        'vacationModeReason': value.vacationModeReason,
    };
}

/**
* @export
* @enum {string}
*/
export enum LawfirmSettingsDomainReqReferralFeeTypeEnum {
    FLATFEEINCENTS = 'FLAT_FEE_IN_CENTS',
    PERCENT = 'PERCENT'
}

