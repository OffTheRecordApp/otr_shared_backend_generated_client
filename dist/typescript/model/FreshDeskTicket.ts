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

import * as models from './models';

export interface FreshDeskTicket {
    "attachments"?: Array<models.FreshdeskAttachment>;
    "cc_emails"?: Array<string>;
    "conversation"?: Array<models.FreshDeskConversation>;
    "created_at"?: string;
    "custom_fields"?: { [key: string]: string; };
    "deleted"?: boolean;
    "description"?: string;
    "description_text"?: string;
    "due_by"?: string;
    "email"?: string;
    "fr_due_by"?: string;
    "fr_escalated"?: boolean;
    "fwd_emails"?: Array<string>;
    "group_id"?: number;
    "id"?: number;
    "is_escalated"?: boolean;
    "name"?: string;
    "phone"?: string;
    "priority"?: number;
    "priorityType"?: FreshDeskTicket.PriorityTypeEnum;
    "product_id"?: number;
    "reply_cc_emails"?: Array<string>;
    "requester"?: models.FreshDeskRequester;
    "requesterAgentName"?: string;
    "requester_id"?: number;
    "responderAgentName"?: string;
    "responder_id"?: number;
    "source"?: number;
    "spam"?: boolean;
    "status"?: number;
    "statusType"?: FreshDeskTicket.StatusTypeEnum;
    "subject"?: string;
    "tags"?: Array<string>;
    "to_emails"?: Array<string>;
    "type"?: string;
    "unique_external_id"?: string;
    "updated_at"?: string;
}

export namespace FreshDeskTicket {
    export enum PriorityTypeEnum {
        HIGH = <any> 'HIGH',
        LOW = <any> 'LOW',
        MEDIUM = <any> 'MEDIUM',
        UNKNOWN = <any> 'UNKNOWN',
        URGENT = <any> 'URGENT'
    }
    export enum StatusTypeEnum {
        CLOSED = <any> 'CLOSED',
        OPEN = <any> 'OPEN',
        PENDING = <any> 'PENDING',
        PENDINGONEWEEK = <any> 'PENDING_ONE_WEEK',
        PENDINGTWODAYS = <any> 'PENDING_TWO_DAYS',
        QUEUEDFORAUTOMATION = <any> 'QUEUED_FOR_AUTOMATION',
        RESOLVED = <any> 'RESOLVED',
        UNKNOWN = <any> 'UNKNOWN',
        WAITINGONATTORNEY = <any> 'WAITING_ON_ATTORNEY',
        WAITINGONCUSTOMER = <any> 'WAITING_ON_CUSTOMER',
        WAITINGONOTR = <any> 'WAITING_ON_OTR',
        WAITINGONTHIRDPARTY = <any> 'WAITING_ON_THIRD_PARTY'
    }
}