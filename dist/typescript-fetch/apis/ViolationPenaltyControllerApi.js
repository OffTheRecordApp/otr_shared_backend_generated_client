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
import { AddPenaltyRequestToJSON, GetPenaltyTypesResponseFromJSON, ViolationPenaltyResponseFromJSON, } from '../models';
/**
 *
 */
export class ViolationPenaltyControllerApi extends runtime.BaseAPI {
    /**
     * getPenaltiesByViolation
     */
    getPenaltiesByViolationUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.violationId === null || requestParameters.violationId === undefined) {
                throw new runtime.RequiredError('violationId', 'Required parameter requestParameters.violationId was null or undefined when calling getPenaltiesByViolationUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.flavor !== undefined) {
                queryParameters['flavor'] = requestParameters.flavor;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/violations/{violationId}/penalties`.replace(`{${"violationId"}}`, encodeURIComponent(String(requestParameters.violationId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ViolationPenaltyResponseFromJSON(jsonValue));
        });
    }
    /**
     * getPenaltiesByViolation
     */
    getPenaltiesByViolationUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPenaltiesByViolationUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * getPenaltyTypes
     */
    getPenaltyTypesUsingGETRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/violations/penalties`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetPenaltyTypesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getPenaltyTypes
     */
    getPenaltyTypesUsingGET() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPenaltyTypesUsingGETRaw();
            return yield response.value();
        });
    }
    /**
     * removePenalty
     */
    removePenaltyUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.penaltyTypeId === null || requestParameters.penaltyTypeId === undefined) {
                throw new runtime.RequiredError('penaltyTypeId', 'Required parameter requestParameters.penaltyTypeId was null or undefined when calling removePenaltyUsingDELETE.');
            }
            if (requestParameters.violationId === null || requestParameters.violationId === undefined) {
                throw new runtime.RequiredError('violationId', 'Required parameter requestParameters.violationId was null or undefined when calling removePenaltyUsingDELETE.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/violations/{violationId}/penalties/{penaltyTypeId}`.replace(`{${"penaltyTypeId"}}`, encodeURIComponent(String(requestParameters.penaltyTypeId))).replace(`{${"violationId"}}`, encodeURIComponent(String(requestParameters.violationId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * removePenalty
     */
    removePenaltyUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removePenaltyUsingDELETERaw(requestParameters);
        });
    }
    /**
     * upsertPenalty
     */
    upsertPenaltyUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.violationId === null || requestParameters.violationId === undefined) {
                throw new runtime.RequiredError('violationId', 'Required parameter requestParameters.violationId was null or undefined when calling upsertPenaltyUsingPOST.');
            }
            if (requestParameters.penaltyToAdd === null || requestParameters.penaltyToAdd === undefined) {
                throw new runtime.RequiredError('penaltyToAdd', 'Required parameter requestParameters.penaltyToAdd was null or undefined when calling upsertPenaltyUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/violations/{violationId}/penalties`.replace(`{${"violationId"}}`, encodeURIComponent(String(requestParameters.violationId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: AddPenaltyRequestToJSON(requestParameters.penaltyToAdd),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * upsertPenalty
     */
    upsertPenaltyUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.upsertPenaltyUsingPOSTRaw(requestParameters);
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var GetPenaltiesByViolationUsingGETFlavorEnum;
(function (GetPenaltiesByViolationUsingGETFlavorEnum) {
    GetPenaltiesByViolationUsingGETFlavorEnum["ALL"] = "ALL";
    GetPenaltiesByViolationUsingGETFlavorEnum["SHORT"] = "SHORT";
})(GetPenaltiesByViolationUsingGETFlavorEnum || (GetPenaltiesByViolationUsingGETFlavorEnum = {}));