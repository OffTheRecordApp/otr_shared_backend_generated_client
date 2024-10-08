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
import { FreshDeskTicket, TimestampRes } from './';
/**
 *
 * @export
 * @interface TicketReviewRequest
 */
export interface TicketReviewRequest {
    /**
     *
     * @type {number}
     * @memberof TicketReviewRequest
     */
    citationId?: number;
    /**
     *
     * @type {string}
     * @memberof TicketReviewRequest
     */
    citationState?: string;
    /**
     *
     * @type {string}
     * @memberof TicketReviewRequest
     */
    emailAddress?: string;
    /**
     *
     * @type {FreshDeskTicket}
     * @memberof TicketReviewRequest
     */
    freshDeskTicket?: FreshDeskTicket;
    /**
     *
     * @type {number}
     * @memberof TicketReviewRequest
     */
    freshdeskTicketId?: number;
    /**
     *
     * @type {TimestampRes}
     * @memberof TicketReviewRequest
     */
    lastBookingDateUtc?: TimestampRes;
    /**
     *
     * @type {string}
     * @memberof TicketReviewRequest
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof TicketReviewRequest
     */
    source?: TicketReviewRequestSourceEnum;
    /**
     *
     * @type {string}
     * @memberof TicketReviewRequest
     */
    status?: string;
    /**
     *
     * @type {TimestampRes}
     * @memberof TicketReviewRequest
     */
    submissionDateUtc?: TimestampRes;
    /**
     *
     * @type {number}
     * @memberof TicketReviewRequest
     */
    ticketEvaluationRequestId?: number;
    /**
     *
     * @type {number}
     * @memberof TicketReviewRequest
     */
    userId?: number;
    /**
     *
     * @type {string}
     * @memberof TicketReviewRequest
     */
    violation?: string;
    /**
     *
     * @type {string}
     * @memberof TicketReviewRequest
     */
    visitorName?: string;
}
export declare function TicketReviewRequestFromJSON(json: any): TicketReviewRequest;
export declare function TicketReviewRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketReviewRequest;
export declare function TicketReviewRequestToJSON(value?: TicketReviewRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum TicketReviewRequestSourceEnum {
    OTREXITPOPUP = "OTR_EXIT_POPUP",
    QUARANTINELANDINGPAGE = "QUARANTINE_LANDING_PAGE",
    TICKETREVIEWPAGE = "TICKET_REVIEW_PAGE"
}
