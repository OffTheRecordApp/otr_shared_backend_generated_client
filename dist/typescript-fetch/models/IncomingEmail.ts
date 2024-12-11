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
    CommonHeader,
    CommonHeaderFromJSON,
    CommonHeaderFromJSONTyped,
    CommonHeaderToJSON,
    IncomingHeader,
    IncomingHeaderFromJSON,
    IncomingHeaderFromJSONTyped,
    IncomingHeaderToJSON,
} from './';

/**
 * 
 * @export
 * @interface IncomingEmail
 */
export interface IncomingEmail {
    /**
     * 
     * @type {CommonHeader}
     * @memberof IncomingEmail
     */
    commonHeaders?: CommonHeader;
    /**
     * 
     * @type {Array<string>}
     * @memberof IncomingEmail
     */
    destination?: Array<string>;
    /**
     * 
     * @type {Array<IncomingHeader>}
     * @memberof IncomingEmail
     */
    headers?: Array<IncomingHeader>;
    /**
     * 
     * @type {string}
     * @memberof IncomingEmail
     */
    headersTruncated?: string;
    /**
     * 
     * @type {string}
     * @memberof IncomingEmail
     */
    messageId?: string;
    /**
     * 
     * @type {string}
     * @memberof IncomingEmail
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof IncomingEmail
     */
    timestamp?: string;
}

export function IncomingEmailFromJSON(json: any): IncomingEmail {
    return IncomingEmailFromJSONTyped(json, false);
}

export function IncomingEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomingEmail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commonHeaders': !exists(json, 'commonHeaders') ? undefined : CommonHeaderFromJSON(json['commonHeaders']),
        'destination': !exists(json, 'destination') ? undefined : json['destination'],
        'headers': !exists(json, 'headers') ? undefined : ((json['headers'] as Array<any>).map(IncomingHeaderFromJSON)),
        'headersTruncated': !exists(json, 'headersTruncated') ? undefined : json['headersTruncated'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
    };
}

export function IncomingEmailToJSON(value?: IncomingEmail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commonHeaders': CommonHeaderToJSON(value.commonHeaders),
        'destination': value.destination,
        'headers': value.headers === undefined ? undefined : ((value.headers as Array<any>).map(IncomingHeaderToJSON)),
        'headersTruncated': value.headersTruncated,
        'messageId': value.messageId,
        'source': value.source,
        'timestamp': value.timestamp,
    };
}


