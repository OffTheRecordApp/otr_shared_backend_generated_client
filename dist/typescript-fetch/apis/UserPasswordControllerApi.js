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
import { ChangeUserPasswordRequestToJSON, ResetUserPasswordRequestToJSON, VerifyPasswordResetTokenResponseFromJSON, VerifyUserAccountResponseFromJSON, } from '../models';
/**
 *
 */
export class UserPasswordControllerApi extends runtime.BaseAPI {
    /**
     * changeUserPassword
     */
    changeUserPasswordUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling changeUserPasswordUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/user/p`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: ChangeUserPasswordRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * changeUserPassword
     */
    changeUserPasswordUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.changeUserPasswordUsingPUTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * resetUserPasswordByAdmin
     */
    resetUserPasswordByAdminUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling resetUserPasswordByAdminUsingPUT.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling resetUserPasswordByAdminUsingPUT.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/users/{userId}/password`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: ResetUserPasswordRequestToJSON(requestParameters.request),
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * resetUserPasswordByAdmin
     */
    resetUserPasswordByAdminUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.resetUserPasswordByAdminUsingPUTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * resetUserPassword
     */
    resetUserPasswordUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling resetUserPasswordUsingPOST.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/api/v1/user/p/reset`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ResetUserPasswordRequestToJSON(requestParameters.request),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * resetUserPassword
     */
    resetUserPasswordUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.resetUserPasswordUsingPOSTRaw(requestParameters);
        });
    }
    /**
     * sendAccountVerificationCode
     */
    sendAccountVerificationCodeUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.email !== undefined) {
                queryParameters['email'] = requestParameters.email;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            if (requestParameters.verificationMethod !== undefined) {
                queryParameters['verificationMethod'] = requestParameters.verificationMethod;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/users/send-verification-code`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * sendAccountVerificationCode
     */
    sendAccountVerificationCodeUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sendAccountVerificationCodeUsingPOSTRaw(requestParameters);
        });
    }
    /**
     * sendResetPasswordToken
     */
    sendResetPasswordTokenUsingPOSTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.email === null || requestParameters.email === undefined) {
                throw new runtime.RequiredError('email', 'Required parameter requestParameters.email was null or undefined when calling sendResetPasswordTokenUsingPOST.');
            }
            const queryParameters = {};
            if (requestParameters.email !== undefined) {
                queryParameters['email'] = requestParameters.email;
            }
            if (requestParameters.enableCode !== undefined) {
                queryParameters['enableCode'] = requestParameters.enableCode;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/user/password/token`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * sendResetPasswordToken
     */
    sendResetPasswordTokenUsingPOST(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sendResetPasswordTokenUsingPOSTRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * verifyPwdResetToken
     */
    verifyPwdResetTokenUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.token === null || requestParameters.token === undefined) {
                throw new runtime.RequiredError('token', 'Required parameter requestParameters.token was null or undefined when calling verifyPwdResetTokenUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.token !== undefined) {
                queryParameters['token'] = requestParameters.token;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/user/password/token`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => VerifyPasswordResetTokenResponseFromJSON(jsonValue));
        });
    }
    /**
     * verifyPwdResetToken
     */
    verifyPwdResetTokenUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.verifyPwdResetTokenUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * verifyUserAccount
     */
    verifyUserAccountUsingPUTRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.code === null || requestParameters.code === undefined) {
                throw new runtime.RequiredError('code', 'Required parameter requestParameters.code was null or undefined when calling verifyUserAccountUsingPUT.');
            }
            const queryParameters = {};
            if (requestParameters.code !== undefined) {
                queryParameters['code'] = requestParameters.code;
            }
            if (requestParameters.email !== undefined) {
                queryParameters['email'] = requestParameters.email;
            }
            if (requestParameters.fieldName !== undefined) {
                queryParameters['fieldName'] = requestParameters.fieldName;
            }
            if (requestParameters.fieldValue !== undefined) {
                queryParameters['fieldValue'] = requestParameters.fieldValue;
            }
            if (requestParameters.userId !== undefined) {
                queryParameters['userId'] = requestParameters.userId;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/users/verify-account`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => VerifyUserAccountResponseFromJSON(jsonValue));
        });
    }
    /**
     * verifyUserAccount
     */
    verifyUserAccountUsingPUT(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.verifyUserAccountUsingPUTRaw(requestParameters);
            return yield response.value();
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var SendAccountVerificationCodeUsingPOSTVerificationMethodEnum;
(function (SendAccountVerificationCodeUsingPOSTVerificationMethodEnum) {
    SendAccountVerificationCodeUsingPOSTVerificationMethodEnum["CODEONLY"] = "CODE_ONLY";
    SendAccountVerificationCodeUsingPOSTVerificationMethodEnum["WEBLINK"] = "WEB_LINK";
})(SendAccountVerificationCodeUsingPOSTVerificationMethodEnum || (SendAccountVerificationCodeUsingPOSTVerificationMethodEnum = {}));
