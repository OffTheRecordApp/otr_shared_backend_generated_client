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
export interface ReplyToTicketRequest {
    "htmlReply"?: string;
    "newTicketStatus"?: ReplyToTicketRequest.NewTicketStatusEnum;
}
export declare namespace ReplyToTicketRequest {
    enum NewTicketStatusEnum {
        CLOSED,
        OPEN,
        PENDING,
        PENDINGONEWEEK,
        PENDINGTWODAYS,
        QUEUEDFORAUTOMATION,
        RESOLVED,
        UNKNOWN,
        WAITINGONATTORNEY,
        WAITINGONCUSTOMER,
        WAITINGONOTR,
        WAITINGONTHIRDPARTY
    }
}