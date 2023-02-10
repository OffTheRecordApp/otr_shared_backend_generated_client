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
import { FreshDeskRequester } from './freshDeskRequester';
import { FreshdeskAttachment } from './freshdeskAttachment';
import { FreshDeskConversation } from './freshDeskConversation';
export interface FreshDeskTicket {
    attachments?: Array<FreshdeskAttachment>;
    cc_emails?: Array<string>;
    conversation?: Array<FreshDeskConversation>;
    created_at?: string;
    custom_fields?: {
        [key: string]: string;
    };
    deleted?: boolean;
    description?: string;
    description_text?: string;
    due_by?: string;
    email?: string;
    fr_due_by?: string;
    fr_escalated?: boolean;
    fwd_emails?: Array<string>;
    group_id?: number;
    id?: number;
    is_escalated?: boolean;
    name?: string;
    phone?: string;
    priority?: number;
    priorityType?: FreshDeskTicket.PriorityTypeEnum;
    product_id?: number;
    reply_cc_emails?: Array<string>;
    requester?: FreshDeskRequester;
    requesterAgentName?: string;
    requester_id?: number;
    responderAgentName?: string;
    responder_id?: number;
    source?: number;
    spam?: boolean;
    status?: number;
    statusType?: FreshDeskTicket.StatusTypeEnum;
    subject?: string;
    tags?: Array<string>;
    to_emails?: Array<string>;
    type?: string;
    unique_external_id?: string;
    updated_at?: string;
}
export declare namespace FreshDeskTicket {
    type PriorityTypeEnum = 'HIGH' | 'LOW' | 'MEDIUM' | 'UNKNOWN' | 'URGENT';
    const PriorityTypeEnum: {
        High: PriorityTypeEnum;
        Low: PriorityTypeEnum;
        Medium: PriorityTypeEnum;
        Unknown: PriorityTypeEnum;
        Urgent: PriorityTypeEnum;
    };
    type StatusTypeEnum = 'CLOSED' | 'OPEN' | 'PENDING' | 'PENDING_ONE_WEEK' | 'PENDING_TWO_DAYS' | 'QUEUED_FOR_AUTOMATION' | 'RESOLVED' | 'UNKNOWN' | 'WAITING_ON_ATTORNEY' | 'WAITING_ON_CUSTOMER' | 'WAITING_ON_OTR' | 'WAITING_ON_THIRD_PARTY';
    const StatusTypeEnum: {
        Closed: StatusTypeEnum;
        Open: StatusTypeEnum;
        Pending: StatusTypeEnum;
        PendingOneWeek: StatusTypeEnum;
        PendingTwoDays: StatusTypeEnum;
        QueuedForAutomation: StatusTypeEnum;
        Resolved: StatusTypeEnum;
        Unknown: StatusTypeEnum;
        WaitingOnAttorney: StatusTypeEnum;
        WaitingOnCustomer: StatusTypeEnum;
        WaitingOnOtr: StatusTypeEnum;
        WaitingOnThirdParty: StatusTypeEnum;
    };
}
