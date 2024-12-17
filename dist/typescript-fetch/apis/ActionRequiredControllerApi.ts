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
    ClientActionRequiredRequest,
    ClientActionRequiredRequestFromJSON,
    ClientActionRequiredRequestToJSON,
} from '../models';

export interface NotifyClientActionRequirementUsingPOSTRequest {
    request: ClientActionRequiredRequest;
}

/**
 * 
 */
export class ActionRequiredControllerApi extends runtime.BaseAPI {

    /**
     * notifyClientActionRequirement
     */
    async notifyClientActionRequirementUsingPOSTRaw(requestParameters: NotifyClientActionRequirementUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling notifyClientActionRequirementUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/notifications/action-required`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ClientActionRequiredRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * notifyClientActionRequirement
     */
    async notifyClientActionRequirementUsingPOST(requestParameters: NotifyClientActionRequirementUsingPOSTRequest): Promise<void> {
        await this.notifyClientActionRequirementUsingPOSTRaw(requestParameters);
    }

}