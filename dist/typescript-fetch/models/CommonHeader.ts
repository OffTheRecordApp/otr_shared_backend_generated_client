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
/**
 * 
 * @export
 * @interface CommonHeader
 */
export interface CommonHeader {
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonHeader
     */
    from?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CommonHeader
     */
    messageId?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonHeader
     */
    returnPath?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonHeader
     */
    subject?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonHeader
     */
    to?: Array<string>;
}

export function CommonHeaderFromJSON(json: any): CommonHeader {
    return CommonHeaderFromJSONTyped(json, false);
}

export function CommonHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'returnPath': !exists(json, 'returnPath') ? undefined : json['returnPath'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'to': !exists(json, 'to') ? undefined : json['to'],
    };
}

export function CommonHeaderToJSON(value?: CommonHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'messageId': value.messageId,
        'returnPath': value.returnPath,
        'subject': value.subject,
        'to': value.to,
    };
}


