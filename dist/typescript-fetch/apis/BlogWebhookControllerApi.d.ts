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
import * as runtime from '../runtime';
import { BlogEvent } from '../models';
export interface HandleEventUsingPOSTRequest {
    event: BlogEvent;
}
/**
 *
 */
export declare class BlogWebhookControllerApi extends runtime.BaseAPI {
    /**
     * handleEvent
     */
    handleEventUsingPOSTRaw(requestParameters: HandleEventUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * handleEvent
     */
    handleEventUsingPOST(requestParameters: HandleEventUsingPOSTRequest): Promise<void>;
}
