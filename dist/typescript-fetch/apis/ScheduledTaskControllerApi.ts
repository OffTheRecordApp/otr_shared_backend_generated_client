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
    RescheduleTaskRequest,
    RescheduleTaskRequestFromJSON,
    RescheduleTaskRequestToJSON,
    ScheduledTaskGetResponse,
    ScheduledTaskGetResponseFromJSON,
    ScheduledTaskGetResponseToJSON,
} from '../models';

export interface DeleteScheduledTaskUsingDELETERequest {
    taskId: number;
}

export interface GetScheduledTasksUsingGETRequest {
    caseId: string;
}

export interface RescheduleTaskUsingPUTRequest {
    taskId: string;
    request: RescheduleTaskRequest;
}

/**
 * 
 */
export class ScheduledTaskControllerApi extends runtime.BaseAPI {

    /**
     * deleteScheduledTask
     */
    async deleteScheduledTaskUsingDELETERaw(requestParameters: DeleteScheduledTaskUsingDELETERequest): Promise<runtime.ApiResponse<ScheduledTaskGetResponse>> {
        if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
            throw new runtime.RequiredError('taskId','Required parameter requestParameters.taskId was null or undefined when calling deleteScheduledTaskUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/scheduled-tasks/{taskId}`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters.taskId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledTaskGetResponseFromJSON(jsonValue));
    }

    /**
     * deleteScheduledTask
     */
    async deleteScheduledTaskUsingDELETE(requestParameters: DeleteScheduledTaskUsingDELETERequest): Promise<ScheduledTaskGetResponse> {
        const response = await this.deleteScheduledTaskUsingDELETERaw(requestParameters);
        return await response.value();
    }

    /**
     * getScheduledTasks
     */
    async getScheduledTasksUsingGETRaw(requestParameters: GetScheduledTasksUsingGETRequest): Promise<runtime.ApiResponse<ScheduledTaskGetResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getScheduledTasksUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/scheduled-tasks/{caseId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledTaskGetResponseFromJSON(jsonValue));
    }

    /**
     * getScheduledTasks
     */
    async getScheduledTasksUsingGET(requestParameters: GetScheduledTasksUsingGETRequest): Promise<ScheduledTaskGetResponse> {
        const response = await this.getScheduledTasksUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * rescheduleTask
     */
    async rescheduleTaskUsingPUTRaw(requestParameters: RescheduleTaskUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
            throw new runtime.RequiredError('taskId','Required parameter requestParameters.taskId was null or undefined when calling rescheduleTaskUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling rescheduleTaskUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/scheduled-tasks/{taskId}/reschedule`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters.taskId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RescheduleTaskRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * rescheduleTask
     */
    async rescheduleTaskUsingPUT(requestParameters: RescheduleTaskUsingPUTRequest): Promise<void> {
        await this.rescheduleTaskUsingPUTRaw(requestParameters);
    }

}
