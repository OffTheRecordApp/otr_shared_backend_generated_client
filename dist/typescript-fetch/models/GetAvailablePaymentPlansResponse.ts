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
    AvailablePaymentPlan,
    AvailablePaymentPlanFromJSON,
    AvailablePaymentPlanFromJSONTyped,
    AvailablePaymentPlanToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetAvailablePaymentPlansResponse
 */
export interface GetAvailablePaymentPlansResponse {
    /**
     * 
     * @type {Array<AvailablePaymentPlan>}
     * @memberof GetAvailablePaymentPlansResponse
     */
    plans?: Array<AvailablePaymentPlan>;
}

export function GetAvailablePaymentPlansResponseFromJSON(json: any): GetAvailablePaymentPlansResponse {
    return GetAvailablePaymentPlansResponseFromJSONTyped(json, false);
}

export function GetAvailablePaymentPlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAvailablePaymentPlansResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'plans': !exists(json, 'plans') ? undefined : ((json['plans'] as Array<any>).map(AvailablePaymentPlanFromJSON)),
    };
}

export function GetAvailablePaymentPlansResponseToJSON(value?: GetAvailablePaymentPlansResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'plans': value.plans === undefined ? undefined : ((value.plans as Array<any>).map(AvailablePaymentPlanToJSON)),
    };
}


