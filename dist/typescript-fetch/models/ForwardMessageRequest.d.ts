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
import { GptFunctionModel } from './';
/**
 *
 * @export
 * @interface ForwardMessageRequest
 */
export interface ForwardMessageRequest {
    /**
     *
     * @type {string}
     * @memberof ForwardMessageRequest
     */
    countyName?: string;
    /**
     *
     * @type {Array<GptFunctionModel>}
     * @memberof ForwardMessageRequest
     */
    structuredText?: Array<GptFunctionModel>;
}
export declare function ForwardMessageRequestFromJSON(json: any): ForwardMessageRequest;
export declare function ForwardMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForwardMessageRequest;
export declare function ForwardMessageRequestToJSON(value?: ForwardMessageRequest | null): any;