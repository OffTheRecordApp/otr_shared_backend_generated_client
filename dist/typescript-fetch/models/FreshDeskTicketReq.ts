/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    FreshDeskConversation,
    FreshDeskConversationFromJSON,
    FreshDeskConversationFromJSONTyped,
    FreshDeskConversationToJSON,
    FreshDeskRequester,
    FreshDeskRequesterFromJSON,
    FreshDeskRequesterFromJSONTyped,
    FreshDeskRequesterToJSON,
    FreshdeskAttachmentReq,
    FreshdeskAttachmentReqFromJSON,
    FreshdeskAttachmentReqFromJSONTyped,
    FreshdeskAttachmentReqToJSON,
} from './';

/**
 * 
 * @export
 * @interface FreshDeskTicketReq
 */
export interface FreshDeskTicketReq {
    /**
     * 
     * @type {Array<FreshdeskAttachmentReq>}
     * @memberof FreshDeskTicketReq
     */
    attachments?: Array<FreshdeskAttachmentReq>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketReq
     */
    ccEmails?: Array<string>;
    /**
     * 
     * @type {Array<FreshDeskConversation>}
     * @memberof FreshDeskTicketReq
     */
    conversation?: Array<FreshDeskConversation>;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketReq
     */
    createdAt?: Date;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof FreshDeskTicketReq
     */
    customFields?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketReq
     */
    deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    descriptionText?: string;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketReq
     */
    dueBy?: Date;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    email?: string;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketReq
     */
    frDueBy?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketReq
     */
    frEscalated?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketReq
     */
    fwdEmails?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    groupId?: number;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketReq
     */
    incoming?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketReq
     */
    isEscalated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    phone?: string;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    priority?: number;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    priorityType?: FreshDeskTicketReqPriorityTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    productId?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketReq
     */
    replyCcEmails?: Array<string>;
    /**
     * 
     * @type {FreshDeskRequester}
     * @memberof FreshDeskTicketReq
     */
    requester?: FreshDeskRequester;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    requesterAgentName?: string;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    requesterId?: number;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    responderAgentName?: string;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    responderId?: number;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    source?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketReq
     */
    spam?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketReq
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    statusType?: FreshDeskTicketReqStatusTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    subject?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketReq
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketReq
     */
    toEmails?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketReq
     */
    uniqueExternalId?: string;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketReq
     */
    updatedAt?: Date;
}

export function FreshDeskTicketReqFromJSON(json: any): FreshDeskTicketReq {
    return FreshDeskTicketReqFromJSONTyped(json, false);
}

export function FreshDeskTicketReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): FreshDeskTicketReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachments': !exists(json, 'attachments') ? undefined : ((json['attachments'] as Array<any>).map(FreshdeskAttachmentReqFromJSON)),
        'ccEmails': !exists(json, 'cc_emails') ? undefined : json['cc_emails'],
        'conversation': !exists(json, 'conversation') ? undefined : ((json['conversation'] as Array<any>).map(FreshDeskConversationFromJSON)),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'customFields': !exists(json, 'custom_fields') ? undefined : json['custom_fields'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'descriptionText': !exists(json, 'description_text') ? undefined : json['description_text'],
        'dueBy': !exists(json, 'due_by') ? undefined : (new Date(json['due_by'])),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'frDueBy': !exists(json, 'fr_due_by') ? undefined : (new Date(json['fr_due_by'])),
        'frEscalated': !exists(json, 'fr_escalated') ? undefined : json['fr_escalated'],
        'fwdEmails': !exists(json, 'fwd_emails') ? undefined : json['fwd_emails'],
        'groupId': !exists(json, 'group_id') ? undefined : json['group_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'incoming': !exists(json, 'incoming') ? undefined : json['incoming'],
        'isEscalated': !exists(json, 'is_escalated') ? undefined : json['is_escalated'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'priorityType': !exists(json, 'priorityType') ? undefined : json['priorityType'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'replyCcEmails': !exists(json, 'reply_cc_emails') ? undefined : json['reply_cc_emails'],
        'requester': !exists(json, 'requester') ? undefined : FreshDeskRequesterFromJSON(json['requester']),
        'requesterAgentName': !exists(json, 'requesterAgentName') ? undefined : json['requesterAgentName'],
        'requesterId': !exists(json, 'requester_id') ? undefined : json['requester_id'],
        'responderAgentName': !exists(json, 'responderAgentName') ? undefined : json['responderAgentName'],
        'responderId': !exists(json, 'responder_id') ? undefined : json['responder_id'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'spam': !exists(json, 'spam') ? undefined : json['spam'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusType': !exists(json, 'statusType') ? undefined : json['statusType'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'toEmails': !exists(json, 'to_emails') ? undefined : json['to_emails'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'uniqueExternalId': !exists(json, 'unique_external_id') ? undefined : json['unique_external_id'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function FreshDeskTicketReqToJSON(value?: FreshDeskTicketReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachments': value.attachments === undefined ? undefined : ((value.attachments as Array<any>).map(FreshdeskAttachmentReqToJSON)),
        'cc_emails': value.ccEmails,
        'conversation': value.conversation === undefined ? undefined : ((value.conversation as Array<any>).map(FreshDeskConversationToJSON)),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'custom_fields': value.customFields,
        'deleted': value.deleted,
        'description': value.description,
        'description_text': value.descriptionText,
        'due_by': value.dueBy === undefined ? undefined : (value.dueBy.toISOString()),
        'email': value.email,
        'fr_due_by': value.frDueBy === undefined ? undefined : (value.frDueBy.toISOString()),
        'fr_escalated': value.frEscalated,
        'fwd_emails': value.fwdEmails,
        'group_id': value.groupId,
        'id': value.id,
        'incoming': value.incoming,
        'is_escalated': value.isEscalated,
        'name': value.name,
        'phone': value.phone,
        'priority': value.priority,
        'priorityType': value.priorityType,
        'product_id': value.productId,
        'reply_cc_emails': value.replyCcEmails,
        'requester': FreshDeskRequesterToJSON(value.requester),
        'requesterAgentName': value.requesterAgentName,
        'requester_id': value.requesterId,
        'responderAgentName': value.responderAgentName,
        'responder_id': value.responderId,
        'source': value.source,
        'spam': value.spam,
        'status': value.status,
        'statusType': value.statusType,
        'subject': value.subject,
        'tags': value.tags,
        'to_emails': value.toEmails,
        'type': value.type,
        'unique_external_id': value.uniqueExternalId,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum FreshDeskTicketReqPriorityTypeEnum {
    HIGH = 'HIGH',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    UNKNOWN = 'UNKNOWN',
    URGENT = 'URGENT'
}
/**
* @export
* @enum {string}
*/
export enum FreshDeskTicketReqStatusTypeEnum {
    CLOSED = 'CLOSED',
    OPEN = 'OPEN',
    PENDING = 'PENDING',
    PENDINGONEWEEK = 'PENDING_ONE_WEEK',
    PENDINGTWODAYS = 'PENDING_TWO_DAYS',
    QUEUEDFORAUTOMATION = 'QUEUED_FOR_AUTOMATION',
    RESOLVED = 'RESOLVED',
    UNKNOWN = 'UNKNOWN',
    WAITINGONATTORNEY = 'WAITING_ON_ATTORNEY',
    WAITINGONCUSTOMER = 'WAITING_ON_CUSTOMER',
    WAITINGONOTR = 'WAITING_ON_OTR',
    WAITINGONTHIRDPARTY = 'WAITING_ON_THIRD_PARTY'
}


