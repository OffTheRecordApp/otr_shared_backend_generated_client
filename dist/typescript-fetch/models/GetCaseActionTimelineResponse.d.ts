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
 * @interface GetCaseActionTimelineResponse
 */
export interface GetCaseActionTimelineResponse {
    /**
     *
     * @type {Array<CaseActionDomain>}
     * @memberof GetCaseActionTimelineResponse
     */
    actionsNotTaken?: Array<CaseActionDomain>;
    /**
     *
     * @type {Array<CaseActionDomain>}
     * @memberof GetCaseActionTimelineResponse
     */
    actionsTaken?: Array<CaseActionDomain>;
}
export declare function GetCaseActionTimelineResponseFromJSON(json: any): GetCaseActionTimelineResponse;
export declare function GetCaseActionTimelineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCaseActionTimelineResponse;
export declare function GetCaseActionTimelineResponseToJSON(value?: GetCaseActionTimelineResponse | null): any;
