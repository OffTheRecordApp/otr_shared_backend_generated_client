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
    AuditLog,
    AuditLogFromJSON,
    AuditLogFromJSONTyped,
    AuditLogToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
} from './';

/**
 * 
 * @export
 * @interface CitationAuditLog
 */
export interface CitationAuditLog {
    /**
     * 
     * @type {string}
     * @memberof CitationAuditLog
     */
    auditLogType?: CitationAuditLogAuditLogTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof CitationAuditLog
     */
    citationId?: number;
    /**
     * 
     * @type {Timestamp}
     * @memberof CitationAuditLog
     */
    creationDateUTC?: Timestamp;
    /**
     * 
     * @type {boolean}
     * @memberof CitationAuditLog
     */
    isActive?: boolean;
    /**
     * 
     * @type {Array<AuditLog>}
     * @memberof CitationAuditLog
     */
    logTrails?: Array<AuditLog>;
}

export function CitationAuditLogFromJSON(json: any): CitationAuditLog {
    return CitationAuditLogFromJSONTyped(json, false);
}

export function CitationAuditLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationAuditLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auditLogType': !exists(json, 'auditLogType') ? undefined : json['auditLogType'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'creationDateUTC': !exists(json, 'creationDateUTC') ? undefined : TimestampFromJSON(json['creationDateUTC']),
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'logTrails': !exists(json, 'logTrails') ? undefined : ((json['logTrails'] as Array<any>).map(AuditLogFromJSON)),
    };
}

export function CitationAuditLogToJSON(value?: CitationAuditLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auditLogType': value.auditLogType,
        'citationId': value.citationId,
        'creationDateUTC': TimestampToJSON(value.creationDateUTC),
        'isActive': value.isActive,
        'logTrails': value.logTrails === undefined ? undefined : ((value.logTrails as Array<any>).map(AuditLogToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum CitationAuditLogAuditLogTypeEnum {
    APPLYREFERRALCODE = 'APPLY_REFERRAL_CODE',
    CREATELEGALSERVICES = 'CREATE_LEGAL_SERVICES',
    INITIATECASE = 'INITIATE_CASE',
    MATCHCASE = 'MATCH_CASE',
    OTHER = 'OTHER',
    TRANSFERCASE = 'TRANSFER_CASE'
}

