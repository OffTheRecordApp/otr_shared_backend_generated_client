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
import { CaseCounterOption } from './';
/**
 *
 * @export
 * @interface GetCaseCounterOptionsResponse
 */
export interface GetCaseCounterOptionsResponse {
    /**
     *
     * @type {Array<CaseCounterOption>}
     * @memberof GetCaseCounterOptionsResponse
     */
    counterOptions?: Array<CaseCounterOption>;
}
export declare function GetCaseCounterOptionsResponseFromJSON(json: any): GetCaseCounterOptionsResponse;
export declare function GetCaseCounterOptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCaseCounterOptionsResponse;
export declare function GetCaseCounterOptionsResponseToJSON(value?: GetCaseCounterOptionsResponse | null): any;
