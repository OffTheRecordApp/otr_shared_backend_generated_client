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
import { exists } from '../runtime';
import { ListLawfirmSurchargeTypeModelFromJSON, ListLawfirmSurchargeTypeModelToJSON, } from './';
export function ListLawfirmSurchargesResponseFromJSON(json) {
    return ListLawfirmSurchargesResponseFromJSONTyped(json, false);
}
export function ListLawfirmSurchargesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'surcharges': !exists(json, 'surcharges') ? undefined : (json['surcharges'].map(ListLawfirmSurchargeTypeModelFromJSON)),
    };
}
export function ListLawfirmSurchargesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'surcharges': value.surcharges === undefined ? undefined : (value.surcharges.map(ListLawfirmSurchargeTypeModelToJSON)),
    };
}
