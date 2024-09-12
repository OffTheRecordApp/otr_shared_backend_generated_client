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
import { DriverLicenseModelFromJSON, GetDriverLicensesResponseFromJSON, SaveDriverLicensePictureRequestToJSON, SaveDriverLicensePictureResponseFromJSON, SaveDriverLicenseRequestToJSON, } from '../models';
/**
 *
 */
export class DriverLicenseControllerApi extends runtime.BaseAPI {
    /**
     * getDriverLicenses
     */
    getDriverLicensesUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling getDriverLicensesUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.includeDeleted !== undefined) {
                queryParameters['includeDeleted'] = requestParameters.includeDeleted;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/users/{userId}/driver-license`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetDriverLicensesResponseFromJSON(jsonValue));
        });
    }
    /**
     * getDriverLicenses
     */
    getDriverLicensesUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDriverLicensesUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * saveDriverLicensePicture
     */
    saveDriverLicensePictureUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling saveDriverLicensePictureUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling saveDriverLicensePictureUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/users/{userId}/driver-license/picture`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SaveDriverLicensePictureRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => SaveDriverLicensePictureResponseFromJSON(jsonValue));
        });
    }
    /**
     * saveDriverLicensePicture
     */
    saveDriverLicensePictureUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.saveDriverLicensePictureUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * saveDriverLicense
     */
    saveDriverLicenseUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling saveDriverLicenseUsingPOST.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling saveDriverLicenseUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/users/{userId}/driver-license`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SaveDriverLicenseRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => DriverLicenseModelFromJSON(jsonValue));
        });
    }
    /**
     * saveDriverLicense
     */
    saveDriverLicenseUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.saveDriverLicenseUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
}