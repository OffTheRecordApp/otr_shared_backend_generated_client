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
/**
 *
 * @export
 * @interface DocumentDecisionRequest
 */
export interface DocumentDecisionRequest {
    /**
     *
     * @type {boolean}
     * @memberof DocumentDecisionRequest
     */
    acknowledged?: boolean;
    /**
     *
     * @type {string}
     * @memberof DocumentDecisionRequest
     */
    caseId?: string;
}
export declare function DocumentDecisionRequestFromJSON(json: any): DocumentDecisionRequest;
export declare function DocumentDecisionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentDecisionRequest;
export declare function DocumentDecisionRequestToJSON(value?: DocumentDecisionRequest | null): any;
