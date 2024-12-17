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
    AddressDomain,
    AddressDomainFromJSON,
    AddressDomainFromJSONTyped,
    AddressDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface DirectMailSendRequest
 */
export interface DirectMailSendRequest {
    /**
     * 
     * @type {string}
     * @memberof DirectMailSendRequest
     */
    mailTemplateType?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectMailSendRequest
     */
    reconcileId?: string;
    /**
     * 
     * @type {string}
     * @memberof DirectMailSendRequest
     */
    reconcileType?: DirectMailSendRequestReconcileTypeEnum;
    /**
     * 
     * @type {AddressDomain}
     * @memberof DirectMailSendRequest
     */
    toAddress?: AddressDomain;
}

export function DirectMailSendRequestFromJSON(json: any): DirectMailSendRequest {
    return DirectMailSendRequestFromJSONTyped(json, false);
}

export function DirectMailSendRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectMailSendRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mailTemplateType': !exists(json, 'mailTemplateType') ? undefined : json['mailTemplateType'],
        'reconcileId': !exists(json, 'reconcileId') ? undefined : json['reconcileId'],
        'reconcileType': !exists(json, 'reconcileType') ? undefined : json['reconcileType'],
        'toAddress': !exists(json, 'toAddress') ? undefined : AddressDomainFromJSON(json['toAddress']),
    };
}

export function DirectMailSendRequestToJSON(value?: DirectMailSendRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mailTemplateType': value.mailTemplateType,
        'reconcileId': value.reconcileId,
        'reconcileType': value.reconcileType,
        'toAddress': AddressDomainToJSON(value.toAddress),
    };
}

/**
* @export
* @enum {string}
*/
export enum DirectMailSendRequestReconcileTypeEnum {
    OTRCITATIONID = 'OTR_CITATION_ID',
    OTRLAWFIRMID = 'OTR_LAWFIRM_ID',
    TICKETREFERENCEID = 'TICKET_REFERENCE_ID'
}

