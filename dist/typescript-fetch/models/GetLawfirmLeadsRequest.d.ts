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
 * @interface GetLawfirmLeadsRequest
 */
export interface GetLawfirmLeadsRequest {
    /**
     *
     * @type {string}
     * @memberof GetLawfirmLeadsRequest
     */
    orderBy?: string;
}
export declare function GetLawfirmLeadsRequestFromJSON(json: any): GetLawfirmLeadsRequest;
export declare function GetLawfirmLeadsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmLeadsRequest;
export declare function GetLawfirmLeadsRequestToJSON(value?: GetLawfirmLeadsRequest | null): any;