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
 * @interface LetterOfEngagement
 */
export interface LetterOfEngagement {
    /**
     *
     * @type {string}
     * @memberof LetterOfEngagement
     */
    docId?: string;
    /**
     *
     * @type {string}
     * @memberof LetterOfEngagement
     */
    docUrl?: string;
    /**
     *
     * @type {Date}
     * @memberof LetterOfEngagement
     */
    signedDateUtc?: Date;
}
export declare function LetterOfEngagementFromJSON(json: any): LetterOfEngagement;
export declare function LetterOfEngagementFromJSONTyped(json: any, ignoreDiscriminator: boolean): LetterOfEngagement;
export declare function LetterOfEngagementToJSON(value?: LetterOfEngagement | null): any;
