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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { RescheduleTaskRequestToJSON, ScheduledTaskGetResponseFromJSON, } from '../models';
/**
 *
 */
export class ScheduledTaskControllerApi extends runtime.BaseAPI {
    /**
     * deleteScheduledTask
     */
    deleteScheduledTaskUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
                throw new runtime.RequiredError('taskId', 'Required parameter requestParameters.taskId was null or undefined when calling deleteScheduledTaskUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/scheduled-tasks/{taskId}`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters.taskId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledTaskGetResponseFromJSON(jsonValue));
        });
    }
    /**
     * deleteScheduledTask
     */
    deleteScheduledTaskUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteScheduledTaskUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getScheduledTasks
     */
    getScheduledTasksUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling getScheduledTasksUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/scheduled-tasks/{caseId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledTaskGetResponseFromJSON(jsonValue));
        });
    }
    /**
     * getScheduledTasks
     */
    getScheduledTasksUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getScheduledTasksUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * rescheduleTask
     */
    rescheduleTaskUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
                throw new runtime.RequiredError('taskId', 'Required parameter requestParameters.taskId was null or undefined when calling rescheduleTaskUsingPUT.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling rescheduleTaskUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/scheduled-tasks/{taskId}/reschedule`.replace(`{${"taskId"}}`, encodeURIComponent(String(requestParameters.taskId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: RescheduleTaskRequestToJSON(requestParameters.request),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * rescheduleTask
     */
    rescheduleTaskUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.rescheduleTaskUsingPUTRaw(requestParameters);
        });
    }
}
