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
    FreshdeskAttachmentRes,
    FreshdeskAttachmentResFromJSON,
    FreshdeskAttachmentResFromJSONTyped,
    FreshdeskAttachmentResToJSON,
} from './';

/**
 * 
 * @export
 * @interface FreshDeskTicketRes
 */
export interface FreshDeskTicketRes {
    /**
     * 
     * @type {Array<FreshdeskAttachmentRes>}
     * @memberof FreshDeskTicketRes
     */
    attachments?: Array<FreshdeskAttachmentRes>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketRes
     */
    ccEmails?: Array<string>;
    /**
     * 
     * @type {Array<FreshDeskConversation>}
     * @memberof FreshDeskTicketRes
     */
    conversation?: Array<FreshDeskConversation>;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketRes
     */
    createdAt?: Date;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof FreshDeskTicketRes
     */
    customFields?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketRes
     */
    deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    descriptionText?: string;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketRes
     */
    dueBy?: Date;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    email?: string;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketRes
     */
    frDueBy?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketRes
     */
    frEscalated?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketRes
     */
    fwdEmails?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    groupId?: number;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketRes
     */
    isEscalated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    phone?: string;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    priority?: number;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    priorityType?: FreshDeskTicketResPriorityTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    productId?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketRes
     */
    replyCcEmails?: Array<string>;
    /**
     * 
     * @type {FreshDeskRequester}
     * @memberof FreshDeskTicketRes
     */
    requester?: FreshDeskRequester;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    requesterAgentName?: string;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    requesterId?: number;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    responderAgentName?: string;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    responderId?: number;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    source?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FreshDeskTicketRes
     */
    spam?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FreshDeskTicketRes
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    statusType?: FreshDeskTicketResStatusTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    subject?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketRes
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FreshDeskTicketRes
     */
    toEmails?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof FreshDeskTicketRes
     */
    uniqueExternalId?: string;
    /**
     * 
     * @type {Date}
     * @memberof FreshDeskTicketRes
     */
    updatedAt?: Date;
}

export function FreshDeskTicketResFromJSON(json: any): FreshDeskTicketRes {
    return FreshDeskTicketResFromJSONTyped(json, false);
}

export function FreshDeskTicketResFromJSONTyped(json: any, ignoreDiscriminator: boolean): FreshDeskTicketRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachments': !exists(json, 'attachments') ? undefined : ((json['attachments'] as Array<any>).map(FreshdeskAttachmentResFromJSON)),
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

export function FreshDeskTicketResToJSON(value?: FreshDeskTicketRes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachments': value.attachments === undefined ? undefined : ((value.attachments as Array<any>).map(FreshdeskAttachmentResToJSON)),
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
export enum FreshDeskTicketResPriorityTypeEnum {
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
export enum FreshDeskTicketResStatusTypeEnum {
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


