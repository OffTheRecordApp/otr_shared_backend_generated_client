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
import { ListBillingSubscriptionModel } from './';
/**
 *
 * @export
 * @interface BillingSubscriberModel
 */
export interface BillingSubscriberModel {
    /**
     *
     * @type {string}
     * @memberof BillingSubscriberModel
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof BillingSubscriberModel
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof BillingSubscriberModel
     */
    lastName?: string;
    /**
     *
     * @type {Array<ListBillingSubscriptionModel>}
     * @memberof BillingSubscriberModel
     */
    subscriptions?: Array<ListBillingSubscriptionModel>;
    /**
     *
     * @type {number}
     * @memberof BillingSubscriberModel
     */
    totalUsage?: number;
    /**
     *
     * @type {number}
     * @memberof BillingSubscriberModel
     */
    userId?: number;
}
export declare function BillingSubscriberModelFromJSON(json: any): BillingSubscriberModel;
export declare function BillingSubscriberModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingSubscriberModel;
export declare function BillingSubscriberModelToJSON(value?: BillingSubscriberModel | null): any;
