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
import { CaseModel } from './';
/**
 *
 * @export
 * @interface GetPendingCasesResponse
 */
export interface GetPendingCasesResponse {
    /**
     *
     * @type {Array<CaseModel>}
     * @memberof GetPendingCasesResponse
     */
    pendingCases?: Array<CaseModel>;
    /**
     *
     * @type {number}
     * @memberof GetPendingCasesResponse
     */
    totalPendingCases?: number;
}
export declare function GetPendingCasesResponseFromJSON(json: any): GetPendingCasesResponse;
export declare function GetPendingCasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPendingCasesResponse;
export declare function GetPendingCasesResponseToJSON(value?: GetPendingCasesResponse | null): any;
