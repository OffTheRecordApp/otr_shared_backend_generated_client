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
 * @interface EditConversationMessageRequest
 */
export interface EditConversationMessageRequest {
    /**
     *
     * @type {string}
     * @memberof EditConversationMessageRequest
     */
    messageBody?: string;
}
export declare function EditConversationMessageRequestFromJSON(json: any): EditConversationMessageRequest;
export declare function EditConversationMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditConversationMessageRequest;
export declare function EditConversationMessageRequestToJSON(value?: EditConversationMessageRequest | null): any;
