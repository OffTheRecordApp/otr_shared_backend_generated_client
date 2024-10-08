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
import { ReferralContactStatus } from './';
/**
 *
 * @export
 * @interface PublishReferralContactsResponse
 */
export interface PublishReferralContactsResponse {
    /**
     *
     * @type {Array<ReferralContactStatus>}
     * @memberof PublishReferralContactsResponse
     */
    contacts?: Array<ReferralContactStatus>;
}
export declare function PublishReferralContactsResponseFromJSON(json: any): PublishReferralContactsResponse;
export declare function PublishReferralContactsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishReferralContactsResponse;
export declare function PublishReferralContactsResponseToJSON(value?: PublishReferralContactsResponse | null): any;
