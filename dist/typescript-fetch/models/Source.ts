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
    Attachment,
    AttachmentFromJSON,
    AttachmentFromJSONTyped,
    AttachmentToJSON,
    Author,
    AuthorFromJSON,
    AuthorFromJSONTyped,
    AuthorToJSON,
} from './';

/**
 * 
 * @export
 * @interface Source
 */
export interface Source {
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof Source
     */
    attachments?: Array<Attachment>;
    /**
     * 
     * @type {Author}
     * @memberof Source
     */
    author?: Author;
    /**
     * 
     * @type {string}
     * @memberof Source
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof Source
     */
    deliveredAs?: SourceDeliveredAsEnum;
    /**
     * 
     * @type {string}
     * @memberof Source
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Source
     */
    redacted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Source
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof Source
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Source
     */
    url?: string;
}

export function SourceFromJSON(json: any): Source {
    return SourceFromJSONTyped(json, false);
}

export function SourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Source {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachments': !exists(json, 'attachments') ? undefined : ((json['attachments'] as Array<any>).map(AttachmentFromJSON)),
        'author': !exists(json, 'author') ? undefined : AuthorFromJSON(json['author']),
        'body': !exists(json, 'body') ? undefined : json['body'],
        'deliveredAs': !exists(json, 'delivered_as') ? undefined : json['delivered_as'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'redacted': !exists(json, 'redacted') ? undefined : json['redacted'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function SourceToJSON(value?: Source | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachments': value.attachments === undefined ? undefined : ((value.attachments as Array<any>).map(AttachmentToJSON)),
        'author': AuthorToJSON(value.author),
        'body': value.body,
        'delivered_as': value.deliveredAs,
        'id': value.id,
        'redacted': value.redacted,
        'subject': value.subject,
        'type': value.type,
        'url': value.url,
    };
}

/**
* @export
* @enum {string}
*/
export enum SourceDeliveredAsEnum {
    ADMININITIATED = 'ADMIN_INITIATED',
    INBOUND = 'INBOUND',
    OUTBOUND = 'OUTBOUND'
}

