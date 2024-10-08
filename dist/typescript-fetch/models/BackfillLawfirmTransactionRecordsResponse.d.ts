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
 * @interface BackfillLawfirmTransactionRecordsResponse
 */
export interface BackfillLawfirmTransactionRecordsResponse {
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof BackfillLawfirmTransactionRecordsResponse
     */
    errors?: {
        [key: string]: string;
    };
}
export declare function BackfillLawfirmTransactionRecordsResponseFromJSON(json: any): BackfillLawfirmTransactionRecordsResponse;
export declare function BackfillLawfirmTransactionRecordsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackfillLawfirmTransactionRecordsResponse;
export declare function BackfillLawfirmTransactionRecordsResponseToJSON(value?: BackfillLawfirmTransactionRecordsResponse | null): any;
