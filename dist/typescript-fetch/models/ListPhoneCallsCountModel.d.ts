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
 * @interface ListPhoneCallsCountModel
 */
export interface ListPhoneCallsCountModel {
    /**
     *
     * @type {number}
     * @memberof ListPhoneCallsCountModel
     */
    matchingRecords?: number;
    /**
     *
     * @type {number}
     * @memberof ListPhoneCallsCountModel
     */
    totalRecords?: number;
}
export declare function ListPhoneCallsCountModelFromJSON(json: any): ListPhoneCallsCountModel;
export declare function ListPhoneCallsCountModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPhoneCallsCountModel;
export declare function ListPhoneCallsCountModelToJSON(value?: ListPhoneCallsCountModel | null): any;
