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
import { MatchCaseLineItemModel } from './';
/**
 *
 * @export
 * @interface MatchLegalServiceModel
 */
export interface MatchLegalServiceModel {
    /**
     *
     * @type {number}
     * @memberof MatchLegalServiceModel
     */
    chanceOfSuccess?: number;
    /**
     *
     * @type {boolean}
     * @memberof MatchLegalServiceModel
     */
    isSelected?: boolean;
    /**
     *
     * @type {number}
     * @memberof MatchLegalServiceModel
     */
    lawfirmCaseId?: number;
    /**
     *
     * @type {number}
     * @memberof MatchLegalServiceModel
     */
    lawfirmId?: number;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    lawfirmName?: string;
    /**
     *
     * @type {number}
     * @memberof MatchLegalServiceModel
     */
    legalServiceId?: number;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    legalServiceName?: string;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    legalServiceType?: MatchLegalServiceModelLegalServiceTypeEnum;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    legalVertical?: MatchLegalServiceModelLegalVerticalEnum;
    /**
     *
     * @type {Array<MatchCaseLineItemModel>}
     * @memberof MatchLegalServiceModel
     */
    lineItems?: Array<MatchCaseLineItemModel>;
    /**
     *
     * @type {Date}
     * @memberof MatchLegalServiceModel
     */
    matchExpirationDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    obfuscatedPictureUrl?: string;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    profilePictureUrl?: string;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    refundEligibility?: MatchLegalServiceModelRefundEligibilityEnum;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServiceModel
     */
    refundMessage?: string;
    /**
     *
     * @type {number}
     * @memberof MatchLegalServiceModel
     */
    refundPercentage?: number;
    /**
     *
     * @type {number}
     * @memberof MatchLegalServiceModel
     */
    totalClientCostInCents?: number;
}
export declare function MatchLegalServiceModelFromJSON(json: any): MatchLegalServiceModel;
export declare function MatchLegalServiceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchLegalServiceModel;
export declare function MatchLegalServiceModelToJSON(value?: MatchLegalServiceModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum MatchLegalServiceModelLegalServiceTypeEnum {
    DEFER = "DEFER",
    FIGHT = "FIGHT"
}
/**
* @export
* @enum {string}
*/
export declare enum MatchLegalServiceModelLegalVerticalEnum {
    TRAFFIC = "TRAFFIC"
}
/**
* @export
* @enum {string}
*/
export declare enum MatchLegalServiceModelRefundEligibilityEnum {
    FULLREFUND = "FULL_REFUND",
    NOREFUND = "NO_REFUND"
}
