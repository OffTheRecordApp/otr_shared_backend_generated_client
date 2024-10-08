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
import { AddActionToCaseRequestToJSON, AddActionToCaseResponseFromJSON, GetCaseActionResponseFromJSON, GetCaseActionTimelineResponseFromJSON, GetCaseActionTypesResponseFromJSON, MarkActionAsDeletedResponseFromJSON, UpdateCaseActionRequestToJSON, UpdateCaseActionResponseFromJSON, } from '../models';
/**
 *
 */
export class CaseActionsControllerApi extends runtime.BaseAPI {
    /**
     * addActionToCaseV2
     */
    addActionToCaseV2UsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling addActionToCaseV2UsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling addActionToCaseV2UsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v2/cases/{caseId}/actions`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: AddActionToCaseRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => AddActionToCaseResponseFromJSON(jsonValue));
        });
    }
    /**
     * addActionToCaseV2
     */
    addActionToCaseV2UsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.addActionToCaseV2UsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getActionTimeline
     */
    getActionTimelineUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling getActionTimelineUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cases/{caseId}/actions/timeline`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseActionTimelineResponseFromJSON(jsonValue));
        });
    }
    /**
     * getActionTimeline
     */
    getActionTimelineUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getActionTimelineUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getAllActions
     */
    getAllActionsUsingGETRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cases/actions`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseActionTypesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getAllActions
     */
    getAllActionsUsingGET() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAllActionsUsingGETRaw();
            return yield response.value();
        });
    }
    /**
     * getCaseActions
     */
    getCaseActionsUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling getCaseActionsUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.showDeleted !== undefined) {
                queryParameters['showDeleted'] = requestParameters.showDeleted;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cases/{caseId}/actions`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseActionResponseFromJSON(jsonValue));
        });
    }
    /**
     * getCaseActions
     */
    getCaseActionsUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCaseActionsUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * markActionAsDeleted
     */
    markActionAsDeletedUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseActionId === null || requestParameters.caseActionId === undefined) {
                throw new runtime.RequiredError('caseActionId', 'Required parameter requestParameters.caseActionId was null or undefined when calling markActionAsDeletedUsingDELETE.');
            }
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling markActionAsDeletedUsingDELETE.');
            }
            if (requestParameters.isDeleted === null || requestParameters.isDeleted === undefined) {
                throw new runtime.RequiredError('isDeleted', 'Required parameter requestParameters.isDeleted was null or undefined when calling markActionAsDeletedUsingDELETE.');
            }
            const queryParameters = {};
            if (requestParameters.isDeleted !== undefined) {
                queryParameters['isDeleted'] = requestParameters.isDeleted;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cases/{caseId}/actions/{caseActionId}`.replace(`{${"caseActionId"}}`, encodeURIComponent(String(requestParameters.caseActionId))).replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => MarkActionAsDeletedResponseFromJSON(jsonValue));
        });
    }
    /**
     * markActionAsDeleted
     */
    markActionAsDeletedUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.markActionAsDeletedUsingDELETERaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * updateCaseAction
     */
    updateCaseActionUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseActionId === null || requestParameters.caseActionId === undefined) {
                throw new runtime.RequiredError('caseActionId', 'Required parameter requestParameters.caseActionId was null or undefined when calling updateCaseActionUsingPUT.');
            }
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling updateCaseActionUsingPUT.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling updateCaseActionUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/cases/{caseId}/actions/{caseActionId}`.replace(`{${"caseActionId"}}`, encodeURIComponent(String(requestParameters.caseActionId))).replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateCaseActionRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateCaseActionResponseFromJSON(jsonValue));
        });
    }
    /**
     * updateCaseAction
     */
    updateCaseActionUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateCaseActionUsingPUTRaw(requestParameters);
            return yield response.value();
        });
    }
}
