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
import { WorkflowCasePaymentModel, WorkflowLineItemModel } from './';
/**
 *
 * @export
 * @interface WorkflowFinancials
 */
export interface WorkflowFinancials {
    /**
     *
     * @type {Array<WorkflowLineItemModel>}
     * @memberof WorkflowFinancials
     */
    lineItems?: Array<WorkflowLineItemModel>;
    /**
     *
     * @type {Array<WorkflowCasePaymentModel>}
     * @memberof WorkflowFinancials
     */
    payments?: Array<WorkflowCasePaymentModel>;
    /**
     *
     * @type {number}
     * @memberof WorkflowFinancials
     */
    totalClientBaseCostInCents?: number;
    /**
     *
     * @type {number}
     * @memberof WorkflowFinancials
     */
    totalClientCostInCents?: number;
    /**
     *
     * @type {number}
     * @memberof WorkflowFinancials
     */
    totalRefCodeAdjustmentInCents?: number;
}
export declare function WorkflowFinancialsFromJSON(json: any): WorkflowFinancials;
export declare function WorkflowFinancialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowFinancials;
export declare function WorkflowFinancialsToJSON(value?: WorkflowFinancials | null): any;
