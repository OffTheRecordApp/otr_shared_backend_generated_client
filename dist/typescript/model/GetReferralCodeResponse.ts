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

export interface GetReferralCodeResponse {
    "endDate"?: string;
    "isCodeActive"?: boolean;
    "isCodeApproved"?: boolean;
    "numberOfReferrals"?: number;
    "ownerEmailAddress"?: string;
    "ownerType"?: GetReferralCodeResponse.OwnerTypeEnum;
    "refereeCreditType"?: GetReferralCodeResponse.RefereeCreditTypeEnum;
    "refereeCreditValue"?: number;
    "referralCode"?: string;
    "referralCountLimit"?: number;
    "startDate"?: string;
}

export namespace GetReferralCodeResponse {
    export enum OwnerTypeEnum {
        LAWFIRM = <any> 'LAWFIRM',
        OTR = <any> 'OTR'
    }
    export enum RefereeCreditTypeEnum {
        CENTSVALUE = <any> 'CENTS_VALUE',
        NOCREDIT = <any> 'NO_CREDIT',
        PERCENTAGEDISCOUNT = <any> 'PERCENTAGE_DISCOUNT'
    }
}
