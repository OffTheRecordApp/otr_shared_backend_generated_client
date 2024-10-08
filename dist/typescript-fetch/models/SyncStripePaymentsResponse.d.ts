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
import { StripePaymentSyncResults } from './';
/**
 *
 * @export
 * @interface SyncStripePaymentsResponse
 */
export interface SyncStripePaymentsResponse {
    /**
     *
     * @type {{ [key: string]: StripePaymentSyncResults; }}
     * @memberof SyncStripePaymentsResponse
     */
    output?: {
        [key: string]: StripePaymentSyncResults;
    };
}
export declare function SyncStripePaymentsResponseFromJSON(json: any): SyncStripePaymentsResponse;
export declare function SyncStripePaymentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStripePaymentsResponse;
export declare function SyncStripePaymentsResponseToJSON(value?: SyncStripePaymentsResponse | null): any;
