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
 * @interface BackfillLawfirmTransactionRecordsRequest
 */
export interface BackfillLawfirmTransactionRecordsRequest {
    /**
     *
     * @type {string}
     * @memberof BackfillLawfirmTransactionRecordsRequest
     */
    caseId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof BackfillLawfirmTransactionRecordsRequest
     */
    caseIds?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof BackfillLawfirmTransactionRecordsRequest
     */
    deleteExistingRecords?: boolean;
    /**
     *
     * @type {number}
     * @memberof BackfillLawfirmTransactionRecordsRequest
     */
    lawfirmId?: number;
    /**
     *
     * @type {number}
     * @memberof BackfillLawfirmTransactionRecordsRequest
     */
    maxCases?: number;
}
export declare function BackfillLawfirmTransactionRecordsRequestFromJSON(json: any): BackfillLawfirmTransactionRecordsRequest;
export declare function BackfillLawfirmTransactionRecordsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackfillLawfirmTransactionRecordsRequest;
export declare function BackfillLawfirmTransactionRecordsRequestToJSON(value?: BackfillLawfirmTransactionRecordsRequest | null): any;