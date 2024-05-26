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


export interface UserReferralLinkModelRes { 
    referralLink?: string;
    referralLinkType?: UserReferralLinkModelRes.ReferralLinkTypeEnum;
}
export namespace UserReferralLinkModelRes {
    export type ReferralLinkTypeEnum = 'FASTLANE_TEEN' | 'PRIMARY';
    export const ReferralLinkTypeEnum = {
        FastlaneTeen: 'FASTLANE_TEEN' as ReferralLinkTypeEnum,
        Primary: 'PRIMARY' as ReferralLinkTypeEnum
    };
}


