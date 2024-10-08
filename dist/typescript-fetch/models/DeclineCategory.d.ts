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
 * @interface DeclineCategory
 */
export interface DeclineCategory {
    /**
     *
     * @type {number}
     * @memberof DeclineCategory
     */
    declineCategoryId?: number;
    /**
     *
     * @type {string}
     * @memberof DeclineCategory
     */
    declineCategoryName?: string;
    /**
     *
     * @type {string}
     * @memberof DeclineCategory
     */
    uiFriendlyName?: string;
}
export declare function DeclineCategoryFromJSON(json: any): DeclineCategory;
export declare function DeclineCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeclineCategory;
export declare function DeclineCategoryToJSON(value?: DeclineCategory | null): any;
