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
import { TimestampReq } from './';
/**
 *
 * @export
 * @interface LawfirmSettingsDomainReq
 */
export interface LawfirmSettingsDomainReq {
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    acceptsAccidents?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    acceptsPastDue?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    acceptsPaymentPlans?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    allowReviewReplies?: boolean;
    /**
     *
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    defaultTrafficTicketFee?: number;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isDirectoryOn?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isStoreFrontOn?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isStorefrontWidgetOn?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmSettingsDomainReq
     */
    isVacationMode?: boolean;
    /**
     *
     * @type {TimestampReq}
     * @memberof LawfirmSettingsDomainReq
     */
    latestCaseAssignmentDateUtc?: TimestampReq;
    /**
     *
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    maxCaseCapacity?: number;
    /**
     *
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    maxCaseCapacityPerDay?: number;
    /**
     *
     * @type {string}
     * @memberof LawfirmSettingsDomainReq
     */
    mvsRecipient?: string;
    /**
     *
     * @type {number}
     * @memberof LawfirmSettingsDomainReq
     */
    referralFee?: number;
    /**
     *
     * @type {string}
     * @memberof LawfirmSettingsDomainReq
     */
    referralFeeType?: LawfirmSettingsDomainReqReferralFeeTypeEnum;
    /**
     *
     * @type {Date}
     * @memberof LawfirmSettingsDomainReq
     */
    vacationModeEndDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof LawfirmSettingsDomainReq
     */
    vacationModeReason?: string;
}
export declare function LawfirmSettingsDomainReqFromJSON(json: any): LawfirmSettingsDomainReq;
export declare function LawfirmSettingsDomainReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmSettingsDomainReq;
export declare function LawfirmSettingsDomainReqToJSON(value?: LawfirmSettingsDomainReq | null): any;
/**
* @export
* @enum {string}
*/
export declare enum LawfirmSettingsDomainReqReferralFeeTypeEnum {
    FLATFEEINCENTS = "FLAT_FEE_IN_CENTS",
    PERCENT = "PERCENT"
}