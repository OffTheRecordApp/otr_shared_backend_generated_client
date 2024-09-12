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
 * @interface ListLawfirmSurchargeModel
 */
export interface ListLawfirmSurchargeModel {
    /**
     *
     * @type {string}
     * @memberof ListLawfirmSurchargeModel
     */
    feature?: ListLawfirmSurchargeModelFeatureEnum;
    /**
     *
     * @type {string}
     * @memberof ListLawfirmSurchargeModel
     */
    feeType?: ListLawfirmSurchargeModelFeeTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ListLawfirmSurchargeModel
     */
    feeValue?: string;
    /**
     *
     * @type {number}
     * @memberof ListLawfirmSurchargeModel
     */
    id?: number;
    /**
     *
     * @type {boolean}
     * @memberof ListLawfirmSurchargeModel
     */
    isEnabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof ListLawfirmSurchargeModel
     */
    refundEligibility?: ListLawfirmSurchargeModelRefundEligibilityEnum;
}
export declare function ListLawfirmSurchargeModelFromJSON(json: any): ListLawfirmSurchargeModel;
export declare function ListLawfirmSurchargeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListLawfirmSurchargeModel;
export declare function ListLawfirmSurchargeModelToJSON(value?: ListLawfirmSurchargeModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ListLawfirmSurchargeModelFeatureEnum {
    BLACKBOX = "BLACK_BOX",
    STATEPAGE = "STATE_PAGE",
    STOREFRONT = "STOREFRONT"
}
/**
* @export
* @enum {string}
*/
export declare enum ListLawfirmSurchargeModelFeeTypeEnum {
    FLATFEEINCENTS = "FLAT_FEE_IN_CENTS",
    FORMULA = "FORMULA",
    PERCENT = "PERCENT"
}
/**
* @export
* @enum {string}
*/
export declare enum ListLawfirmSurchargeModelRefundEligibilityEnum {
    DEFAULT = "DEFAULT",
    NONREFUNDABLE = "NON_REFUNDABLE",
    SURCHARGEONLY = "SURCHARGE_ONLY"
}