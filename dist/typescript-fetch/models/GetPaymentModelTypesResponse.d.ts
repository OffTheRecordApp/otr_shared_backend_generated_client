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
 * @interface GetPaymentModelTypesResponse
 */
export interface GetPaymentModelTypesResponse {
    /**
     *
     * @type {Array<string>}
     * @memberof GetPaymentModelTypesResponse
     */
    models?: Array<GetPaymentModelTypesResponseModelsEnum>;
}
export declare function GetPaymentModelTypesResponseFromJSON(json: any): GetPaymentModelTypesResponse;
export declare function GetPaymentModelTypesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPaymentModelTypesResponse;
export declare function GetPaymentModelTypesResponseToJSON(value?: GetPaymentModelTypesResponse | null): any;
/**
* @export
* @enum {string}
*/
export declare enum GetPaymentModelTypesResponseModelsEnum {
    DESTINATIONACCOUNT = "DESTINATION_ACCOUNT",
    SEPARATECHARGE = "SEPARATE_CHARGE",
    TRANSFERDEDUCTION = "TRANSFER_DEDUCTION"
}