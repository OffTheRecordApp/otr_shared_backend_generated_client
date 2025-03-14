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
import { InvoiceLineItemModel } from './';
/**
 *
 * @export
 * @interface WorkflowLineItemModel
 */
export interface WorkflowLineItemModel {
    /**
     *
     * @type {string}
     * @memberof WorkflowLineItemModel
     */
    additionalDescription?: string;
    /**
     *
     * @type {number}
     * @memberof WorkflowLineItemModel
     */
    lawfirmCaseId?: number;
    /**
     *
     * @type {number}
     * @memberof WorkflowLineItemModel
     */
    lineItemFeeInCents?: number;
    /**
     *
     * @type {InvoiceLineItemModel}
     * @memberof WorkflowLineItemModel
     */
    lineItemType?: InvoiceLineItemModel;
    /**
     *
     * @type {string}
     * @memberof WorkflowLineItemModel
     */
    recipient?: WorkflowLineItemModelRecipientEnum;
}
export declare function WorkflowLineItemModelFromJSON(json: any): WorkflowLineItemModel;
export declare function WorkflowLineItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowLineItemModel;
export declare function WorkflowLineItemModelToJSON(value?: WorkflowLineItemModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum WorkflowLineItemModelRecipientEnum {
    COURT = "COURT",
    LAWFIRM = "LAWFIRM",
    OTR = "OTR"
}
