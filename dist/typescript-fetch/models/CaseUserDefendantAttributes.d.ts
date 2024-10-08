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
 * @interface CaseUserDefendantAttributes
 */
export interface CaseUserDefendantAttributes {
    /**
     *
     * @type {Date}
     * @memberof CaseUserDefendantAttributes
     */
    dateOfBirth?: Date;
    /**
     *
     * @type {string}
     * @memberof CaseUserDefendantAttributes
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof CaseUserDefendantAttributes
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof CaseUserDefendantAttributes
     */
    licenseNumber?: string;
    /**
     *
     * @type {string}
     * @memberof CaseUserDefendantAttributes
     */
    licenseState?: string;
}
export declare function CaseUserDefendantAttributesFromJSON(json: any): CaseUserDefendantAttributes;
export declare function CaseUserDefendantAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseUserDefendantAttributes;
export declare function CaseUserDefendantAttributesToJSON(value?: CaseUserDefendantAttributes | null): any;
