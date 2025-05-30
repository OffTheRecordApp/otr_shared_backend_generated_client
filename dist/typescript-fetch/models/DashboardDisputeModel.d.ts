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
 * @interface DashboardDisputeModel
 */
export interface DashboardDisputeModel {
    /**
     *
     * @type {number}
     * @memberof DashboardDisputeModel
     */
    amountDisputedInCents?: number;
    /**
     *
     * @type {string}
     * @memberof DashboardDisputeModel
     */
    disputeReason?: string;
    /**
     *
     * @type {boolean}
     * @memberof DashboardDisputeModel
     */
    hasDispute?: boolean;
}
export declare function DashboardDisputeModelFromJSON(json: any): DashboardDisputeModel;
export declare function DashboardDisputeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardDisputeModel;
export declare function DashboardDisputeModelToJSON(value?: DashboardDisputeModel | null): any;
