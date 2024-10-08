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
 * @interface ConfidenceField
 */
export interface ConfidenceField {
    /**
     *
     * @type {number}
     * @memberof ConfidenceField
     */
    confidence?: number;
    /**
     *
     * @type {string}
     * @memberof ConfidenceField
     */
    value?: string;
}
export declare function ConfidenceFieldFromJSON(json: any): ConfidenceField;
export declare function ConfidenceFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfidenceField;
export declare function ConfidenceFieldToJSON(value?: ConfidenceField | null): any;
