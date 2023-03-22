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
import { FreshDeskTicket } from './freshDeskTicket';
import { TimestampRes } from './timestampRes';
export interface TicketReviewRequest {
    citationId?: number;
    citationState?: string;
    emailAddress?: string;
    freshDeskTicket?: FreshDeskTicket;
    freshdeskTicketId?: number;
    lastBookingDateUtc?: TimestampRes;
    phoneNumber?: string;
    source?: TicketReviewRequest.SourceEnum;
    status?: string;
    submissionDateUtc?: TimestampRes;
    ticketEvaluationRequestId?: number;
    userId?: number;
    violation?: string;
    visitorName?: string;
}
export declare namespace TicketReviewRequest {
    type SourceEnum = 'OTR_EXIT_POPUP' | 'QUARANTINE_LANDING_PAGE' | 'TICKET_REVIEW_PAGE';
    const SourceEnum: {
        OtrExitPopup: SourceEnum;
        QuarantineLandingPage: SourceEnum;
        TicketReviewPage: SourceEnum;
    };
}