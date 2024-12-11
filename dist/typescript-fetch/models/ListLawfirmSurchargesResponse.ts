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
    ListLawfirmSurchargeTypeModel,
    ListLawfirmSurchargeTypeModelFromJSON,
    ListLawfirmSurchargeTypeModelFromJSONTyped,
    ListLawfirmSurchargeTypeModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListLawfirmSurchargesResponse
 */
export interface ListLawfirmSurchargesResponse {
    /**
     * 
     * @type {Array<ListLawfirmSurchargeTypeModel>}
     * @memberof ListLawfirmSurchargesResponse
     */
    surcharges?: Array<ListLawfirmSurchargeTypeModel>;
}

export function ListLawfirmSurchargesResponseFromJSON(json: any): ListLawfirmSurchargesResponse {
    return ListLawfirmSurchargesResponseFromJSONTyped(json, false);
}

export function ListLawfirmSurchargesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListLawfirmSurchargesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'surcharges': !exists(json, 'surcharges') ? undefined : ((json['surcharges'] as Array<any>).map(ListLawfirmSurchargeTypeModelFromJSON)),
    };
}

export function ListLawfirmSurchargesResponseToJSON(value?: ListLawfirmSurchargesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'surcharges': value.surcharges === undefined ? undefined : ((value.surcharges as Array<any>).map(ListLawfirmSurchargeTypeModelToJSON)),
    };
}


