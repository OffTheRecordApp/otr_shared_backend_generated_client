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
 * @interface SettingRequest
 */
export interface SettingRequest {
    /**
     *
     * @type {string}
     * @memberof SettingRequest
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof SettingRequest
     */
    value?: string;
}
export declare function SettingRequestFromJSON(json: any): SettingRequest;
export declare function SettingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingRequest;
export declare function SettingRequestToJSON(value?: SettingRequest | null): any;
