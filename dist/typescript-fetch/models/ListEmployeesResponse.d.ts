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
import { GetEmployeeModel } from './';
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
export declare function ListEmployeesResponseFromJSON(json: any): ListEmployeesResponse;
export declare function ListEmployeesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEmployeesResponse;
export declare function ListEmployeesResponseToJSON(value?: ListEmployeesResponse | null): any;
