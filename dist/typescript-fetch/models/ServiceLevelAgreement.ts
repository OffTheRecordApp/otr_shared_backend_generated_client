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
 * @interface ServiceLevelAgreement
 */
export interface ServiceLevelAgreement {
    /**
     * 
     * @type {string}
     * @memberof ServiceLevelAgreement
     */
    slaName?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceLevelAgreement
     */
    slaStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceLevelAgreement
     */
    type?: string;
}

export function ServiceLevelAgreementFromJSON(json: any): ServiceLevelAgreement {
    return ServiceLevelAgreementFromJSONTyped(json, false);
}

export function ServiceLevelAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceLevelAgreement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'slaName': !exists(json, 'sla_name') ? undefined : json['sla_name'],
        'slaStatus': !exists(json, 'sla_status') ? undefined : json['sla_status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ServiceLevelAgreementToJSON(value?: ServiceLevelAgreement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sla_name': value.slaName,
        'sla_status': value.slaStatus,
        'type': value.type,
    };
}

