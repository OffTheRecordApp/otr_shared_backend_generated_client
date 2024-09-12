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
 * @interface CaseLineItemsSummary
 */
export interface CaseLineItemsSummary {
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    caseBaseCostInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    clientTotalCostInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    lawfirmAssumedCostInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    lawfirmCaseFees?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    lawfirmEarningsForCase?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    lawfirmRefcodeAdjustmentInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    lawfirmServiceChargeInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    otrEarnings?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    otrMarketingFeeChargedToLawfirm?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    otrRefcodeAdjustmentInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    paymentProcessingFeeActual?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    paymentProcessingFeeChargedToLawfirm?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemsSummary
     */
    platformFee?: number;
}
export declare function CaseLineItemsSummaryFromJSON(json: any): CaseLineItemsSummary;
export declare function CaseLineItemsSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseLineItemsSummary;
export declare function CaseLineItemsSummaryToJSON(value?: CaseLineItemsSummary | null): any;