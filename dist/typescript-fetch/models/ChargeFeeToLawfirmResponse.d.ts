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
 * @interface ChargeFeeToLawfirmResponse
 */
export interface ChargeFeeToLawfirmResponse {
    /**
     *
     * @type {boolean}
     * @memberof ChargeFeeToLawfirmResponse
     */
    isSuccess?: boolean;
}
export declare function ChargeFeeToLawfirmResponseFromJSON(json: any): ChargeFeeToLawfirmResponse;
export declare function ChargeFeeToLawfirmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeFeeToLawfirmResponse;
export declare function ChargeFeeToLawfirmResponseToJSON(value?: ChargeFeeToLawfirmResponse | null): any;