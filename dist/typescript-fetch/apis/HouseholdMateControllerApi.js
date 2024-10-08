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
import { GetHouseholdMatesResponseFromJSON, InviteHouseholdMateRequestToJSON, } from '../models';
/**
 *
 */
export class HouseholdMateControllerApi extends runtime.BaseAPI {
    /**
     * acceptHouseholdInvite
     */
    acceptHouseholdInviteUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.email === null || requestParameters.email === undefined) {
                throw new runtime.RequiredError('email', 'Required parameter requestParameters.email was null or undefined when calling acceptHouseholdInviteUsingPUT.');
            }
            if (requestParameters.token === null || requestParameters.token === undefined) {
                throw new runtime.RequiredError('token', 'Required parameter requestParameters.token was null or undefined when calling acceptHouseholdInviteUsingPUT.');
            }
            const queryParameters = {};
            if (requestParameters.email !== undefined) {
                queryParameters['email'] = requestParameters.email;
            }
            if (requestParameters.token !== undefined) {
                queryParameters['token'] = requestParameters.token;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/household-mates/accept-invite`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * acceptHouseholdInvite
     */
    acceptHouseholdInviteUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.acceptHouseholdInviteUsingPUTRaw(requestParameters);
        });
    }
    /**
     * cancelHouseholdMateInvite
     */
    cancelHouseholdMateInviteUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inviteeEmail === null || requestParameters.inviteeEmail === undefined) {
                throw new runtime.RequiredError('inviteeEmail', 'Required parameter requestParameters.inviteeEmail was null or undefined when calling cancelHouseholdMateInviteUsingDELETE.');
            }
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling cancelHouseholdMateInviteUsingDELETE.');
            }
            const queryParameters = {};
            if (requestParameters.inviteeEmail !== undefined) {
                queryParameters['inviteeEmail'] = requestParameters.inviteeEmail;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/household-mates/{userId}/invite`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * cancelHouseholdMateInvite
     */
    cancelHouseholdMateInviteUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cancelHouseholdMateInviteUsingDELETERaw(requestParameters);
        });
    }
    /**
     * getHouseholdMates
     */
    getHouseholdMatesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling getHouseholdMatesUsingGET.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/household-mates/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetHouseholdMatesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getHouseholdMates
     */
    getHouseholdMatesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getHouseholdMatesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * inviteHouseholdMate
     */
    inviteHouseholdMateUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling inviteHouseholdMateUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling inviteHouseholdMateUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/household-mates/{userId}/invite`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: InviteHouseholdMateRequestToJSON(requestParameters.request),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * inviteHouseholdMate
     */
    inviteHouseholdMateUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inviteHouseholdMateUsingPOSTRaw(requestParameters);
        });
    }
    /**
     * removeHouseholdMate
     */
    removeHouseholdMateUsingDELETERaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.mateUserId === null || requestParameters.mateUserId === undefined) {
                throw new runtime.RequiredError('mateUserId', 'Required parameter requestParameters.mateUserId was null or undefined when calling removeHouseholdMateUsingDELETE.');
            }
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling removeHouseholdMateUsingDELETE.');
            }
            const queryParameters = {};
            if (requestParameters.mateUserId !== undefined) {
                queryParameters['mateUserId'] = requestParameters.mateUserId;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/household-mates/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * removeHouseholdMate
     */
    removeHouseholdMateUsingDELETE(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeHouseholdMateUsingDELETERaw(requestParameters);
        });
    }
}
