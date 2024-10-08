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
import { GetUserReferralSourceTypesResponseFromJSON, RegisterNewUserResponseFromJSON, SetReferralSourceRequestToJSON, } from '../models';
/**
 *
 */
export class ReferralSourceControllerApi extends runtime.BaseAPI {
    /**
     * getUserReferralSourceTypes
     */
    getUserReferralSourceTypesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.flavor !== undefined) {
                queryParameters['flavor'] = requestParameters.flavor;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/referrals/sources`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetUserReferralSourceTypesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getUserReferralSourceTypes
     */
    getUserReferralSourceTypesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUserReferralSourceTypesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * setReferralSource
     */
    setReferralSourceUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling setReferralSourceUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/referrals/sources`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SetReferralSourceRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => RegisterNewUserResponseFromJSON(jsonValue));
        });
    }
    /**
     * setReferralSource
     */
    setReferralSourceUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.setReferralSourceUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var GetUserReferralSourceTypesUsingGETFlavorEnum;
(function (GetUserReferralSourceTypesUsingGETFlavorEnum) {
    GetUserReferralSourceTypesUsingGETFlavorEnum["ALL"] = "ALL";
    GetUserReferralSourceTypesUsingGETFlavorEnum["ENABLED"] = "ENABLED";
})(GetUserReferralSourceTypesUsingGETFlavorEnum || (GetUserReferralSourceTypesUsingGETFlavorEnum = {}));
