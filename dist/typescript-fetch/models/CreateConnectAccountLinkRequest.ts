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
 * @interface CreateConnectAccountLinkRequest
 */
export interface CreateConnectAccountLinkRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateConnectAccountLinkRequest
     */
    lawfirmId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateConnectAccountLinkRequest
     */
    linkType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateConnectAccountLinkRequest
     */
    stripeAccountId?: string;
}

export function CreateConnectAccountLinkRequestFromJSON(json: any): CreateConnectAccountLinkRequest {
    return CreateConnectAccountLinkRequestFromJSONTyped(json, false);
}

export function CreateConnectAccountLinkRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateConnectAccountLinkRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'linkType': !exists(json, 'linkType') ? undefined : json['linkType'],
        'stripeAccountId': !exists(json, 'stripeAccountId') ? undefined : json['stripeAccountId'],
    };
}

export function CreateConnectAccountLinkRequestToJSON(value?: CreateConnectAccountLinkRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lawfirmId': value.lawfirmId,
        'linkType': value.linkType,
        'stripeAccountId': value.stripeAccountId,
    };
}

