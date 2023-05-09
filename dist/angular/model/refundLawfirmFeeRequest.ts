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


export interface RefundLawfirmFeeRequest { 
    otrRefundAmount?: number;
    overrideRefundOwner?: boolean;
    refundAmount?: number;
    refundNote?: string;
    refundReason?: RefundLawfirmFeeRequest.RefundReasonEnum;
    stripeRefundAmount?: number;
}
export namespace RefundLawfirmFeeRequest {
    export type RefundReasonEnum = 'CANCELATION' | 'CLIENT_DISPUTED_CHARGE' | 'DUPLICATE_CASE' | 'LOST_CASE' | 'OTHER';
    export const RefundReasonEnum = {
        Cancelation: 'CANCELATION' as RefundReasonEnum,
        ClientDisputedCharge: 'CLIENT_DISPUTED_CHARGE' as RefundReasonEnum,
        DuplicateCase: 'DUPLICATE_CASE' as RefundReasonEnum,
        LostCase: 'LOST_CASE' as RefundReasonEnum,
        Other: 'OTHER' as RefundReasonEnum
    };
}

