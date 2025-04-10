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
 * @interface UploadLawfirmsResponse
 */
export interface UploadLawfirmsResponse {
    /**
     *
     * @type {Array<string>}
     * @memberof UploadLawfirmsResponse
     */
    errorMessages?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof UploadLawfirmsResponse
     */
    totalFailedRecords?: number;
    /**
     *
     * @type {number}
     * @memberof UploadLawfirmsResponse
     */
    totalRecords?: number;
    /**
     *
     * @type {number}
     * @memberof UploadLawfirmsResponse
     */
    totalSuccessfulRecords?: number;
}
export declare function UploadLawfirmsResponseFromJSON(json: any): UploadLawfirmsResponse;
export declare function UploadLawfirmsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadLawfirmsResponse;
export declare function UploadLawfirmsResponseToJSON(value?: UploadLawfirmsResponse | null): any;
