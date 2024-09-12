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
 * @interface CoachingLinks
 */
export interface CoachingLinks {
    /**
     *
     * @type {Array<string>}
     * @memberof CoachingLinks
     */
    links?: Array<string>;
}
export declare function CoachingLinksFromJSON(json: any): CoachingLinks;
export declare function CoachingLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoachingLinks;
export declare function CoachingLinksToJSON(value?: CoachingLinks | null): any;