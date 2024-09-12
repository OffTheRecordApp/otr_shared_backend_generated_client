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
 * @interface FindDisputesRequest
 */
export interface FindDisputesRequest {
    /**
     *
     * @type {string}
     * @memberof FindDisputesRequest
     */
    disputeStatus?: string;
    /**
     *
     * @type {number}
     * @memberof FindDisputesRequest
     */
    maxResults?: number;
}
export declare function FindDisputesRequestFromJSON(json: any): FindDisputesRequest;
export declare function FindDisputesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindDisputesRequest;
export declare function FindDisputesRequestToJSON(value?: FindDisputesRequest | null): any;