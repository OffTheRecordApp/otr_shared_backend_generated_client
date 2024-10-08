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
import { ActionByEntityModel, MessageByEntityModel } from './';
/**
 *
 * @export
 * @interface GetMessagesByEntityResponse
 */
export interface GetMessagesByEntityResponse {
    /**
     *
     * @type {Array<ActionByEntityModel>}
     * @memberof GetMessagesByEntityResponse
     */
    actions?: Array<ActionByEntityModel>;
    /**
     *
     * @type {Array<MessageByEntityModel>}
     * @memberof GetMessagesByEntityResponse
     */
    messages?: Array<MessageByEntityModel>;
    /**
     *
     * @type {number}
     * @memberof GetMessagesByEntityResponse
     */
    numActions?: number;
    /**
     *
     * @type {number}
     * @memberof GetMessagesByEntityResponse
     */
    numMessages?: number;
}
export declare function GetMessagesByEntityResponseFromJSON(json: any): GetMessagesByEntityResponse;
export declare function GetMessagesByEntityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMessagesByEntityResponse;
export declare function GetMessagesByEntityResponseToJSON(value?: GetMessagesByEntityResponse | null): any;
