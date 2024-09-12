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
import { GetEmployeeModelFromJSON, GetEmployeeModelToJSON, } from './';
export function ListEmployeesResponseFromJSON(json) {
    return ListEmployeesResponseFromJSONTyped(json, false);
}
export function ListEmployeesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'employees': !exists(json, 'employees') ? undefined : (json['employees'].map(GetEmployeeModelFromJSON)),
    };
}
export function ListEmployeesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'employees': value.employees === undefined ? undefined : (value.employees.map(GetEmployeeModelToJSON)),
    };
}