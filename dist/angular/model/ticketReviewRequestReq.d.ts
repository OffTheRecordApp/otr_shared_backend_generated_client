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
import { TimestampReq } from './timestampReq';
import { FreshDeskTicketReq } from './freshDeskTicketReq';
export interface TicketReviewRequestReq {
    citationId?: number;
    citationState?: string;
    emailAddress?: string;
    freshDeskTicket?: FreshDeskTicketReq;
    freshdeskTicketId?: number;
    lastBookingDateUtc?: TimestampReq;
    phoneNumber?: string;
    source?: TicketReviewRequestReq.SourceEnum;
    status?: string;
    submissionDateUtc?: TimestampReq;
    ticketEvaluationRequestId?: number;
    userId?: number;
    violation?: string;
    visitorName?: string;
}
export declare namespace TicketReviewRequestReq {
    type SourceEnum = 'OTR_EXIT_POPUP' | 'QUARANTINE_LANDING_PAGE' | 'TICKET_REVIEW_PAGE';
    const SourceEnum: {
        OtrExitPopup: SourceEnum;
        QuarantineLandingPage: SourceEnum;
        TicketReviewPage: SourceEnum;
    };
}
