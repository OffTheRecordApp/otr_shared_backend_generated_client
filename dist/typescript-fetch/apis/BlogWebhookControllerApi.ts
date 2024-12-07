/* tslint:disable */
/* eslint-disable */
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
import {
    BlogEvent,
    BlogEventFromJSON,
    BlogEventToJSON,
} from '../models';

export interface HandleEventUsingPOSTRequest {
    event: BlogEvent;
}

/**
 * 
 */
export class BlogWebhookControllerApi extends runtime.BaseAPI {

    /**
     * handleEvent
     */
    async handleEventUsingPOSTRaw(requestParameters: HandleEventUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.event === null || requestParameters.event === undefined) {
            throw new runtime.RequiredError('event','Required parameter requestParameters.event was null or undefined when calling handleEventUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/webhooks/prismic`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BlogEventToJSON(requestParameters.event),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * handleEvent
     */
    async handleEventUsingPOST(requestParameters: HandleEventUsingPOSTRequest): Promise<void> {
        await this.handleEventUsingPOSTRaw(requestParameters);
    }

}
