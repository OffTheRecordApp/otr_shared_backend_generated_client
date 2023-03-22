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
export interface FreshdeskTicketReferenceDomain {
    freshdeskTicketId?: number;
    referenceEntityId?: string;
    referenceEntityType?: FreshdeskTicketReferenceDomain.ReferenceEntityTypeEnum;
    ticketType?: FreshdeskTicketReferenceDomain.TicketTypeEnum;
}
export declare namespace FreshdeskTicketReferenceDomain {
    type ReferenceEntityTypeEnum = 'CASE' | 'CASE_PAYMENT' | 'CITATION' | 'COURT' | 'LAWFIRM' | 'LAWFIRM_CASE' | 'LAWYER' | 'LINE_ITEM' | 'STRIPE_CHARGE' | 'USER';
    const ReferenceEntityTypeEnum: {
        Case: ReferenceEntityTypeEnum;
        CasePayment: ReferenceEntityTypeEnum;
        Citation: ReferenceEntityTypeEnum;
        Court: ReferenceEntityTypeEnum;
        Lawfirm: ReferenceEntityTypeEnum;
        LawfirmCase: ReferenceEntityTypeEnum;
        Lawyer: ReferenceEntityTypeEnum;
        LineItem: ReferenceEntityTypeEnum;
        StripeCharge: ReferenceEntityTypeEnum;
        User: ReferenceEntityTypeEnum;
    };
    type TicketTypeEnum = 'CARD_PROBLEM' | 'POST_BOOKING_PAYMENT_FAILURE' | 'PRE_BOOKING_PAYMENT_FAILURE';
    const TicketTypeEnum: {
        CardProblem: TicketTypeEnum;
        PostBookingPaymentFailure: TicketTypeEnum;
        PreBookingPaymentFailure: TicketTypeEnum;
    };
}