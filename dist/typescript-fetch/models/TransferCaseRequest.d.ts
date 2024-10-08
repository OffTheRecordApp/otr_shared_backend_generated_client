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
 * @interface TransferCaseRequest
 */
export interface TransferCaseRequest {
    /**
     *
     * @type {boolean}
     * @memberof TransferCaseRequest
     */
    forceTransfer?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TransferCaseRequest
     */
    ignoreCapturedCharges?: boolean;
    /**
     *
     * @type {number}
     * @memberof TransferCaseRequest
     */
    receivingLawfirmId?: number;
}
export declare function TransferCaseRequestFromJSON(json: any): TransferCaseRequest;
export declare function TransferCaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferCaseRequest;
export declare function TransferCaseRequestToJSON(value?: TransferCaseRequest | null): any;
