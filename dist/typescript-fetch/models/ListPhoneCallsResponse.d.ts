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
import { ListPhoneCallsCountModel, ListPhoneCallsModel } from './';
/**
 *
 * @export
 * @interface ListPhoneCallsResponse
 */
export interface ListPhoneCallsResponse {
    /**
     *
     * @type {Array<ListPhoneCallsModel>}
     * @memberof ListPhoneCallsResponse
     */
    phoneCalls?: Array<ListPhoneCallsModel>;
    /**
     *
     * @type {ListPhoneCallsCountModel}
     * @memberof ListPhoneCallsResponse
     */
    phoneCallsCount?: ListPhoneCallsCountModel;
}
export declare function ListPhoneCallsResponseFromJSON(json: any): ListPhoneCallsResponse;
export declare function ListPhoneCallsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPhoneCallsResponse;
export declare function ListPhoneCallsResponseToJSON(value?: ListPhoneCallsResponse | null): any;
