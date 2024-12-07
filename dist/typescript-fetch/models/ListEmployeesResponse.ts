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
    GetEmployeeModel,
    GetEmployeeModelFromJSON,
    GetEmployeeModelFromJSONTyped,
    GetEmployeeModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListEmployeesResponse
 */
export interface ListEmployeesResponse {
    /**
     * 
     * @type {Array<GetEmployeeModel>}
     * @memberof ListEmployeesResponse
     */
    employees?: Array<GetEmployeeModel>;
}

export function ListEmployeesResponseFromJSON(json: any): ListEmployeesResponse {
    return ListEmployeesResponseFromJSONTyped(json, false);
}

export function ListEmployeesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEmployeesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'employees': !exists(json, 'employees') ? undefined : ((json['employees'] as Array<any>).map(GetEmployeeModelFromJSON)),
    };
}

export function ListEmployeesResponseToJSON(value?: ListEmployeesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'employees': value.employees === undefined ? undefined : ((value.employees as Array<any>).map(GetEmployeeModelToJSON)),
    };
}


