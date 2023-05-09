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


export interface PriceMatchResponse { 
    matchedLawfirm?: string;
    matchedPrice?: number;
    priceMatchStatus?: PriceMatchResponse.PriceMatchStatusEnum;
    referralCode?: string;
}
export namespace PriceMatchResponse {
    export type PriceMatchStatusEnum = 'COMPLETE' | 'PENDING' | 'REJECTED';
    export const PriceMatchStatusEnum = {
        Complete: 'COMPLETE' as PriceMatchStatusEnum,
        Pending: 'PENDING' as PriceMatchStatusEnum,
        Rejected: 'REJECTED' as PriceMatchStatusEnum
    };
}

