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


export interface AddReferralRequest { 
    caseId?: string;
    referralEvent?: AddReferralRequest.ReferralEventEnum;
    referrerUserId?: number;
}
export namespace AddReferralRequest {
    export type ReferralEventEnum = 'CASE_BOOKING' | 'CASE_MATCH' | 'INVITE' | 'REGISTRATION';
    export const ReferralEventEnum = {
        CaseBooking: 'CASE_BOOKING' as ReferralEventEnum,
        CaseMatch: 'CASE_MATCH' as ReferralEventEnum,
        Invite: 'INVITE' as ReferralEventEnum,
        Registration: 'REGISTRATION' as ReferralEventEnum
    };
}


