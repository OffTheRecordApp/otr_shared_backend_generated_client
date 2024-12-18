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
    CaseDeclineCategory,
    CaseDeclineCategoryFromJSON,
    CaseDeclineCategoryFromJSONTyped,
    CaseDeclineCategoryToJSON,
} from './';

/**
 * 
 * @export
 * @interface CaseDeclineCategoryReasonsModel
 */
export interface CaseDeclineCategoryReasonsModel {
    /**
     * 
     * @type {{ [key: string]: CaseDeclineCategory; }}
     * @memberof CaseDeclineCategoryReasonsModel
     */
    caseDeclineCategoryReasons?: { [key: string]: CaseDeclineCategory; };
}

export function CaseDeclineCategoryReasonsModelFromJSON(json: any): CaseDeclineCategoryReasonsModel {
    return CaseDeclineCategoryReasonsModelFromJSONTyped(json, false);
}

export function CaseDeclineCategoryReasonsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseDeclineCategoryReasonsModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseDeclineCategoryReasons': !exists(json, 'caseDeclineCategoryReasons') ? undefined : (mapValues(json['caseDeclineCategoryReasons'], CaseDeclineCategoryFromJSON)),
    };
}

export function CaseDeclineCategoryReasonsModelToJSON(value?: CaseDeclineCategoryReasonsModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseDeclineCategoryReasons': value.caseDeclineCategoryReasons === undefined ? undefined : (mapValues(value.caseDeclineCategoryReasons, CaseDeclineCategoryToJSON)),
    };
}


