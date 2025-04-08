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
import { CasePaymentBreakdownItemModel } from './';
/**
 *
 * @export
 * @interface WorkflowCasePaymentModel
 */
export interface WorkflowCasePaymentModel {
    /**
     *
     * @type {Date}
     * @memberof WorkflowCasePaymentModel
     */
    dueDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof WorkflowCasePaymentModel
     */
    dueNow?: boolean;
    /**
     *
     * @type {number}
     * @memberof WorkflowCasePaymentModel
     */
    feeAmount?: number;
    /**
     *
     * @type {Array<CasePaymentBreakdownItemModel>}
     * @memberof WorkflowCasePaymentModel
     */
    items?: Array<CasePaymentBreakdownItemModel>;
}
export declare function WorkflowCasePaymentModelFromJSON(json: any): WorkflowCasePaymentModel;
export declare function WorkflowCasePaymentModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowCasePaymentModel;
export declare function WorkflowCasePaymentModelToJSON(value?: WorkflowCasePaymentModel | null): any;
