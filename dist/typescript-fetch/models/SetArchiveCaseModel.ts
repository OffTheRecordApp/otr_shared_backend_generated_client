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
 * @interface SetArchiveCaseModel
 */
export interface SetArchiveCaseModel {
    /**
     * 
     * @type {string}
     * @memberof SetArchiveCaseModel
     */
    caseId?: string;
}

export function SetArchiveCaseModelFromJSON(json: any): SetArchiveCaseModel {
    return SetArchiveCaseModelFromJSONTyped(json, false);
}

export function SetArchiveCaseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetArchiveCaseModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
    };
}

export function SetArchiveCaseModelToJSON(value?: SetArchiveCaseModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseId': value.caseId,
    };
}


