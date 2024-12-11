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
    MatchingFieldValue,
    MatchingFieldValueFromJSON,
    MatchingFieldValueFromJSONTyped,
    MatchingFieldValueToJSON,
} from './';

/**
 * 
 * @export
 * @interface MatchLegalServicesRequest
 */
export interface MatchLegalServicesRequest {
    /**
     * 
     * @type {Date}
     * @memberof MatchLegalServicesRequest
     */
    courtDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof MatchLegalServicesRequest
     */
    forcePredeterminedLawfirmId?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchLegalServicesRequest
     */
    isMatchInternal?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MatchLegalServicesRequest
     */
    legalServiceType?: MatchLegalServicesRequestLegalServiceTypeEnum;
    /**
     * 
     * @type {Array<MatchingFieldValue>}
     * @memberof MatchLegalServicesRequest
     */
    legalServicesMatchingRules?: Array<MatchingFieldValue>;
    /**
     * 
     * @type {number}
     * @memberof MatchLegalServicesRequest
     */
    legalServicesResultLimit: number;
    /**
     * 
     * @type {string}
     * @memberof MatchLegalServicesRequest
     */
    legalVertical: MatchLegalServicesRequestLegalVerticalEnum;
    /**
     * 
     * @type {number}
     * @memberof MatchLegalServicesRequest
     */
    predeterminedLawfirmId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MatchLegalServicesRequest
     */
    setQuoteExpirationOn?: boolean;
}

export function MatchLegalServicesRequestFromJSON(json: any): MatchLegalServicesRequest {
    return MatchLegalServicesRequestFromJSONTyped(json, false);
}

export function MatchLegalServicesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchLegalServicesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'courtDate': !exists(json, 'courtDate') ? undefined : (new Date(json['courtDate'])),
        'forcePredeterminedLawfirmId': !exists(json, 'forcePredeterminedLawfirmId') ? undefined : json['forcePredeterminedLawfirmId'],
        'isMatchInternal': !exists(json, 'isMatchInternal') ? undefined : json['isMatchInternal'],
        'legalServiceType': !exists(json, 'legalServiceType') ? undefined : json['legalServiceType'],
        'legalServicesMatchingRules': !exists(json, 'legalServicesMatchingRules') ? undefined : ((json['legalServicesMatchingRules'] as Array<any>).map(MatchingFieldValueFromJSON)),
        'legalServicesResultLimit': json['legalServicesResultLimit'],
        'legalVertical': json['legalVertical'],
        'predeterminedLawfirmId': !exists(json, 'predeterminedLawfirmId') ? undefined : json['predeterminedLawfirmId'],
        'setQuoteExpirationOn': !exists(json, 'setQuoteExpirationOn') ? undefined : json['setQuoteExpirationOn'],
    };
}

export function MatchLegalServicesRequestToJSON(value?: MatchLegalServicesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'courtDate': value.courtDate === undefined ? undefined : (value.courtDate.toISOString()),
        'forcePredeterminedLawfirmId': value.forcePredeterminedLawfirmId,
        'isMatchInternal': value.isMatchInternal,
        'legalServiceType': value.legalServiceType,
        'legalServicesMatchingRules': value.legalServicesMatchingRules === undefined ? undefined : ((value.legalServicesMatchingRules as Array<any>).map(MatchingFieldValueToJSON)),
        'legalServicesResultLimit': value.legalServicesResultLimit,
        'legalVertical': value.legalVertical,
        'predeterminedLawfirmId': value.predeterminedLawfirmId,
        'setQuoteExpirationOn': value.setQuoteExpirationOn,
    };
}

/**
* @export
* @enum {string}
*/
export enum MatchLegalServicesRequestLegalServiceTypeEnum {
    DEFER = 'DEFER',
    FIGHT = 'FIGHT'
}
/**
* @export
* @enum {string}
*/
export enum MatchLegalServicesRequestLegalVerticalEnum {
    TRAFFIC = 'TRAFFIC'
}


