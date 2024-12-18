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
    ResetFeeForLawfirmModel,
    ResetFeeForLawfirmModelFromJSON,
    ResetFeeForLawfirmModelFromJSONTyped,
    ResetFeeForLawfirmModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ResetFeesForLawfirmResponse
 */
export interface ResetFeesForLawfirmResponse {
    /**
     * 
     * @type {Array<ResetFeeForLawfirmModel>}
     * @memberof ResetFeesForLawfirmResponse
     */
    models?: Array<ResetFeeForLawfirmModel>;
}

export function ResetFeesForLawfirmResponseFromJSON(json: any): ResetFeesForLawfirmResponse {
    return ResetFeesForLawfirmResponseFromJSONTyped(json, false);
}

export function ResetFeesForLawfirmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetFeesForLawfirmResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'models': !exists(json, 'models') ? undefined : ((json['models'] as Array<any>).map(ResetFeeForLawfirmModelFromJSON)),
    };
}

export function ResetFeesForLawfirmResponseToJSON(value?: ResetFeesForLawfirmResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'models': value.models === undefined ? undefined : ((value.models as Array<any>).map(ResetFeeForLawfirmModelToJSON)),
    };
}


