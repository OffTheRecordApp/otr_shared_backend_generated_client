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
    CaseDeclineReason,
    CaseDeclineReasonFromJSON,
    CaseDeclineReasonFromJSONTyped,
    CaseDeclineReasonToJSON,
} from './';

/**
 * 
 * @export
 * @interface CaseDeclineCategory
 */
export interface CaseDeclineCategory {
    /**
     * 
     * @type {number}
     * @memberof CaseDeclineCategory
     */
    caseDeclineCategoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof CaseDeclineCategory
     */
    caseDeclineCategoryName?: string;
    /**
     * 
     * @type {Array<CaseDeclineReason>}
     * @memberof CaseDeclineCategory
     */
    reasons?: Array<CaseDeclineReason>;
    /**
     * 
     * @type {string}
     * @memberof CaseDeclineCategory
     */
    uiFriendlyName?: string;
}

export function CaseDeclineCategoryFromJSON(json: any): CaseDeclineCategory {
    return CaseDeclineCategoryFromJSONTyped(json, false);
}

export function CaseDeclineCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseDeclineCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseDeclineCategoryId': !exists(json, 'caseDeclineCategoryId') ? undefined : json['caseDeclineCategoryId'],
        'caseDeclineCategoryName': !exists(json, 'caseDeclineCategoryName') ? undefined : json['caseDeclineCategoryName'],
        'reasons': !exists(json, 'reasons') ? undefined : ((json['reasons'] as Array<any>).map(CaseDeclineReasonFromJSON)),
        'uiFriendlyName': !exists(json, 'uiFriendlyName') ? undefined : json['uiFriendlyName'],
    };
}

export function CaseDeclineCategoryToJSON(value?: CaseDeclineCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseDeclineCategoryId': value.caseDeclineCategoryId,
        'caseDeclineCategoryName': value.caseDeclineCategoryName,
        'reasons': value.reasons === undefined ? undefined : ((value.reasons as Array<any>).map(CaseDeclineReasonToJSON)),
        'uiFriendlyName': value.uiFriendlyName,
    };
}

