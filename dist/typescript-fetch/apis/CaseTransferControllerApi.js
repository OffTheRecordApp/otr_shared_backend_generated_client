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
import { CaseTransferResponseFromJSON, TransferCaseRequestToJSON, } from '../models';
/**
 *
 */
export class CaseTransferControllerApi extends runtime.BaseAPI {
    /**
     * getTransferHistory
     */
    getTransferHistoryUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling getTransferHistoryUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/cases/{caseId}/transfer`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => CaseTransferResponseFromJSON(jsonValue));
        });
    }
    /**
     * getTransferHistory
     */
    getTransferHistoryUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransferHistoryUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * transferCase
     */
    transferCaseUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
                throw new runtime.RequiredError('caseId', 'Required parameter requestParameters.caseId was null or undefined when calling transferCaseUsingPUT.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling transferCaseUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/cases/{caseId}/transfer`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: TransferCaseRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * transferCase
     */
    transferCaseUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.transferCaseUsingPUTRaw(requestParameters);
            return yield response.value();
        });
    }
}