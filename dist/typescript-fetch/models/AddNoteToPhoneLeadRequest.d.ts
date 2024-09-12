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
 * @interface AddNoteToPhoneLeadRequest
 */
export interface AddNoteToPhoneLeadRequest {
    /**
     *
     * @type {string}
     * @memberof AddNoteToPhoneLeadRequest
     */
    entityType?: AddNoteToPhoneLeadRequestEntityTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AddNoteToPhoneLeadRequest
     */
    note?: string;
    /**
     *
     * @type {string}
     * @memberof AddNoteToPhoneLeadRequest
     */
    referenceId?: string;
}
export declare function AddNoteToPhoneLeadRequestFromJSON(json: any): AddNoteToPhoneLeadRequest;
export declare function AddNoteToPhoneLeadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddNoteToPhoneLeadRequest;
export declare function AddNoteToPhoneLeadRequestToJSON(value?: AddNoteToPhoneLeadRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum AddNoteToPhoneLeadRequestEntityTypeEnum {
    CASE = "CASE",
    CASEPAYMENT = "CASE_PAYMENT",
    CITATION = "CITATION",
    COURT = "COURT",
    LAWFIRM = "LAWFIRM",
    LAWFIRMCASE = "LAWFIRM_CASE",
    LAWYER = "LAWYER",
    LINEITEM = "LINE_ITEM",
    STRIPECHARGE = "STRIPE_CHARGE",
    USER = "USER"
}