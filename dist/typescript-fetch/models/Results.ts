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
 * @interface Results
 */
export interface Results {
    /**
     * 
     * @type {Array<{ [key: string]: object; }>}
     * @memberof Results
     */
    resultSet?: Array<{ [key: string]: object; }>;
}

export function ResultsFromJSON(json: any): Results {
    return ResultsFromJSONTyped(json, false);
}

export function ResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Results {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resultSet': !exists(json, 'resultSet') ? undefined : json['resultSet'],
    };
}

export function ResultsToJSON(value?: Results | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resultSet': value.resultSet,
    };
}


