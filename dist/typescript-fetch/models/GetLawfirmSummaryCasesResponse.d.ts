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
import { CaseSummaryDomain } from './';
/**
 *
 * @export
 * @interface GetLawfirmSummaryCasesResponse
 */
export interface GetLawfirmSummaryCasesResponse {
    /**
     *
     * @type {number}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    activeCasesCount?: number;
    /**
     *
     * @type {number}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    bookedCasesCount?: number;
    /**
     *
     * @type {Array<CaseSummaryDomain>}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    cases?: Array<CaseSummaryDomain>;
    /**
     *
     * @type {number}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    numMatchingCases?: number;
    /**
     *
     * @type {number}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    pastDueCasesCount?: number;
    /**
     *
     * @type {number}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    paymentPlanCasesCount?: number;
    /**
     *
     * @type {number}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    pendingCasesCount?: number;
    /**
     *
     * @type {number}
     * @memberof GetLawfirmSummaryCasesResponse
     */
    percentCasesWithPaymentPlan?: number;
}
export declare function GetLawfirmSummaryCasesResponseFromJSON(json: any): GetLawfirmSummaryCasesResponse;
export declare function GetLawfirmSummaryCasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmSummaryCasesResponse;
export declare function GetLawfirmSummaryCasesResponseToJSON(value?: GetLawfirmSummaryCasesResponse | null): any;
