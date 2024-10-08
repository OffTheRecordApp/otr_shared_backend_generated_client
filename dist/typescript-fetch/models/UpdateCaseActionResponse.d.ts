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
import { CaseActionDomain } from './';
/**
 *
 * @export
 * @interface UpdateCaseActionResponse
 */
export interface UpdateCaseActionResponse {
    /**
     *
     * @type {CaseActionDomain}
     * @memberof UpdateCaseActionResponse
     */
    caseAction?: CaseActionDomain;
}
export declare function UpdateCaseActionResponseFromJSON(json: any): UpdateCaseActionResponse;
export declare function UpdateCaseActionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCaseActionResponse;
export declare function UpdateCaseActionResponseToJSON(value?: UpdateCaseActionResponse | null): any;
