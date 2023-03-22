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
export interface ReverseLawfirmPayoutRequest {
    overrideRefundOwner?: boolean;
    reversalAmount?: number;
    reversalNote?: string;
    reversalReason?: ReverseLawfirmPayoutRequest.ReversalReasonEnum;
}
export declare namespace ReverseLawfirmPayoutRequest {
    type ReversalReasonEnum = 'CANCELATION' | 'CLIENT_DISPUTED_CHARGE' | 'DUPLICATE_CASE' | 'LOST_CASE' | 'OTHER';
    const ReversalReasonEnum: {
        Cancelation: ReversalReasonEnum;
        ClientDisputedCharge: ReversalReasonEnum;
        DuplicateCase: ReversalReasonEnum;
        LostCase: ReversalReasonEnum;
        Other: ReversalReasonEnum;
    };
}