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
import { MatchingFieldValue } from './';
/**
 *
 * @export
 * @interface MatchLegalServicesRequest
 */
export interface MatchLegalServicesRequest {
    /**
     *
     * @type {Date}
     * @memberof MatchLegalServicesRequest
     */
    courtDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof MatchLegalServicesRequest
     */
    forcePredeterminedLawfirmId?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MatchLegalServicesRequest
     */
    isMatchInternal?: boolean;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServicesRequest
     */
    legalServiceType?: MatchLegalServicesRequestLegalServiceTypeEnum;
    /**
     *
     * @type {Array<MatchingFieldValue>}
     * @memberof MatchLegalServicesRequest
     */
    legalServicesMatchingRules?: Array<MatchingFieldValue>;
    /**
     *
     * @type {number}
     * @memberof MatchLegalServicesRequest
     */
    legalServicesResultLimit: number;
    /**
     *
     * @type {string}
     * @memberof MatchLegalServicesRequest
     */
    legalVertical: MatchLegalServicesRequestLegalVerticalEnum;
    /**
     *
     * @type {number}
     * @memberof MatchLegalServicesRequest
     */
    predeterminedLawfirmId?: number;
    /**
     *
     * @type {boolean}
     * @memberof MatchLegalServicesRequest
     */
    setQuoteExpirationOn?: boolean;
}
export declare function MatchLegalServicesRequestFromJSON(json: any): MatchLegalServicesRequest;
export declare function MatchLegalServicesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchLegalServicesRequest;
export declare function MatchLegalServicesRequestToJSON(value?: MatchLegalServicesRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum MatchLegalServicesRequestLegalServiceTypeEnum {
    DEFER = "DEFER",
    FIGHT = "FIGHT"
}
/**
* @export
* @enum {string}
*/
export declare enum MatchLegalServicesRequestLegalVerticalEnum {
    TRAFFIC = "TRAFFIC"
}