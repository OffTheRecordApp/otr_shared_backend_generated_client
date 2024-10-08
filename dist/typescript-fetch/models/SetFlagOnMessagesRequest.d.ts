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
import { SetFlagOnMessageModel } from './';
/**
 *
 * @export
 * @interface SetFlagOnMessagesRequest
 */
export interface SetFlagOnMessagesRequest {
    /**
     *
     * @type {boolean}
     * @memberof SetFlagOnMessagesRequest
     */
    flagged?: boolean;
    /**
     *
     * @type {Array<SetFlagOnMessageModel>}
     * @memberof SetFlagOnMessagesRequest
     */
    messages?: Array<SetFlagOnMessageModel>;
    /**
     *
     * @type {number}
     * @memberof SetFlagOnMessagesRequest
     */
    userId?: number;
}
export declare function SetFlagOnMessagesRequestFromJSON(json: any): SetFlagOnMessagesRequest;
export declare function SetFlagOnMessagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetFlagOnMessagesRequest;
export declare function SetFlagOnMessagesRequestToJSON(value?: SetFlagOnMessagesRequest | null): any;
