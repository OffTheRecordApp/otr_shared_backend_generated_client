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
 * @interface BlogMetadata
 */
export interface BlogMetadata {
    /**
     *
     * @type {string}
     * @memberof BlogMetadata
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof BlogMetadata
     */
    label?: string;
    /**
     *
     * @type {string}
     * @memberof BlogMetadata
     */
    ref?: string;
}
export declare function BlogMetadataFromJSON(json: any): BlogMetadata;
export declare function BlogMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogMetadata;
export declare function BlogMetadataToJSON(value?: BlogMetadata | null): any;
