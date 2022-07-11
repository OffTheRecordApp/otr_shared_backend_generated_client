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

import * as models from './models';

export interface ReferralResponse {
    "caseId"?: string;
    "caseResolved"?: boolean;
    "referralCode"?: string;
    "referralCreditStatus"?: ReferralResponse.ReferralCreditStatusEnum;
    "referralCreditType"?: ReferralResponse.ReferralCreditTypeEnum;
    "referralCreditValue"?: number;
    "referralDate"?: string;
    "referralEvent"?: ReferralResponse.ReferralEventEnum;
    "referralExpirationDate"?: string;
    "referralId"?: number;
    "referralPaymentStatus"?: ReferralResponse.ReferralPaymentStatusEnum;
    "referralSourceType"?: ReferralResponse.ReferralSourceTypeEnum;
    "referredUser"?: models.UserDetails;
}

export namespace ReferralResponse {
    export enum ReferralCreditStatusEnum {
        APPLIED = <any> 'APPLIED',
        CASECANCELLED = <any> 'CASE_CANCELLED',
        CONFIRMED = <any> 'CONFIRMED',
        NOTIFIED = <any> 'NOTIFIED',
        SAVED = <any> 'SAVED',
        SUPERSEDED = <any> 'SUPERSEDED'
    }
    export enum ReferralCreditTypeEnum {
        CENTSVALUE = <any> 'CENTS_VALUE',
        NOCREDIT = <any> 'NO_CREDIT',
        PERCENTAGEDISCOUNT = <any> 'PERCENTAGE_DISCOUNT'
    }
    export enum ReferralEventEnum {
        CASEBOOKING = <any> 'CASE_BOOKING',
        CASEMATCH = <any> 'CASE_MATCH',
        INVITE = <any> 'INVITE',
        REGISTRATION = <any> 'REGISTRATION'
    }
    export enum ReferralPaymentStatusEnum {
        ERROR = <any> 'ERROR',
        NONE = <any> 'NONE',
        PAIDOUT = <any> 'PAID_OUT',
        PENDINGACCOUNTVERIFICATION = <any> 'PENDING_ACCOUNT_VERIFICATION',
        PENDINGCASERESOLUTION = <any> 'PENDING_CASE_RESOLUTION'
    }
    export enum ReferralSourceTypeEnum {
        BILLBOARDS = <any> 'BILLBOARDS',
        CHECKOUTCODE = <any> 'CHECKOUT_CODE',
        DMVCOM = <any> 'DMV_COM',
        DMVORG = <any> 'DMV_ORG',
        DWA = <any> 'DWA',
        FACEBOOK = <any> 'FACEBOOK',
        FRIENDORFAMILY = <any> 'FRIEND_OR_FAMILY',
        GOOGLESEARCH = <any> 'GOOGLE_SEARCH',
        INFLUENCERAFFILIATE = <any> 'INFLUENCER_AFFILIATE',
        KICKBACKAPP = <any> 'KICKBACK_APP',
        OTHER = <any> 'OTHER',
        RADIO = <any> 'RADIO',
        REDDIT = <any> 'REDDIT',
        THESMOKINGTIRE = <any> 'THE_SMOKING_TIRE',
        UNKNOWN = <any> 'UNKNOWN',
        VINWIKI = <any> 'VINWIKI',
        YOUTUBEAD = <any> 'YOUTUBE_AD'
    }
}