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
 * @interface BackfillLawfirmTransactionRecordsResponse
 */
export interface BackfillLawfirmTransactionRecordsResponse {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BackfillLawfirmTransactionRecordsResponse
     */
    errors?: { [key: string]: string; };
}

export function BackfillLawfirmTransactionRecordsResponseFromJSON(json: any): BackfillLawfirmTransactionRecordsResponse {
    return BackfillLawfirmTransactionRecordsResponseFromJSONTyped(json, false);
}

export function BackfillLawfirmTransactionRecordsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackfillLawfirmTransactionRecordsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function BackfillLawfirmTransactionRecordsResponseToJSON(value?: BackfillLawfirmTransactionRecordsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors,
    };
}


